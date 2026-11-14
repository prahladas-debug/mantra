import sys,re,json,difflib
T='/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/parayana/madhva/'
sys.path.insert(0,T+'tools')
from hks_parse import blocks
from hks_diff import lm
from hks_resolve import lfit as lfit0, skel_map
import matra
def lmr(lines):
    lo=lm(lines); hi=[]
    for li,l in enumerate(lines):
        ws_=l.split(); extra=0
        for wi in range(len(ws_)-1):
            sy=matra.sylls(ws_[wi]); nx=re.sub(r'[^\u0C80-\u0CFF]','',ws_[wi+1])
            if sy and sy[-1][0]==1 and len(nx)>=3 and matra.is_cons(nx[0]) and nx[1]=='್': extra+=1
        hi.append(lo[li]+extra)
    return lo,hi
TGT=[(14,),(14,),(21,22,23),(14,),(14,),(21,22,23)]
def fitline(lo,hi,k): return any(lo<=t<=hi for t in TGT[k])
def lfit(m,k): return lfit0(m,k)
H=T+'dl/hks/'; O=T+'dl/hksocr/'
KN=lambda s: re.sub(r'[^ಀ-೿]','',s).replace('ೞ','ಳ').replace('಼','')
VOW=set('ಅಆಇಈಉಊಋಎಏಐಒಓಔಾಿೀುೂೃೆೇೈೊೋೌ್ಂಃ')
def cons(s): return ''.join(c for c in s if c not in VOW)
# ---- Bemmatti blocks
bem=open(O+'bem.txt',encoding='utf-8').read().split('\n')
starts={}
for i,l in enumerate(bem):
    m=re.match(r'^\s*(\d{1,2})\.\s*\S+ಸಂಧಿ\s*$',l) or re.match(r'^\s*\S.*ಸಂಧಿ\s*-\s*(\d{1,2})\s*$',l)
    if m and not re.search(r'-\d{3}-',l):
        n=int(m.group(1)); starts.setdefault(n,i)
for i,l in enumerate(bem):
    if 'ಶ್ವಾಸಸಂರಿ' in l: starts[15]=i
starts[22]=[i for i,l in enumerate(bem) if l.strip().startswith('ಸಕಲದುರಿತನಿವಾರಣಸಂಧಿ-22')][0]
def bem_lines(s):
    a=starts[s]; b=starts.get(s+1,len(bem))
    out=[]
    for l in bem[a+1:b]:
        if re.search(r'[A-Za-z]',l) or re.search(r'-\d{2,3}-|^\s*\d+\s*$',l): continue
        if 'ಸಂಧಿ' in l and ('-' in l or 'ಮುಗಿ' in l): continue
        if KN(l): out.append(l.strip())
    return out
def wit(fn):
    t=open(fn,encoding='utf-8').read(); return KN(t)
W1925=wit(O+'y1925.txt'); W1930=wit(O+'dli1930.txt')
def locate(a, big):
    votes={}
    for p in range(0,max(1,len(a)-8),4):
        anc=a[p:p+8]; at=big.find(anc); g=0
        while at>=0 and g<30:
            off=(at-p)//10; votes[off]=votes.get(off,0)+1; at=big.find(anc,at+1); g+=1
    if not votes: return None
    off,v=max(votes.items(),key=lambda x:x[1])
    if v<3: return None
    st=max(0,off*10-30); seg=big[st:st+len(a)+60]
    sm=difflib.SequenceMatcher(None,a,seg,autojunk=False)
    bl=[b for b in sm.get_matching_blocks() if b.size>0]
    if not bl: return None
    return seg[bl[0].b-bl[0].a if bl[0].b>=bl[0].a else 0 : bl[-1].b+bl[-1].size+(len(a)-bl[-1].a-bl[-1].size)]
def extract_bem_verse(lines, guide, used_from):
    """find window of 6 consecutive bem lines best matching guide (consonant skeleton)."""
    g=cons(KN(''.join(guide)))
    best=None;bs=0
    for i in range(0, len(lines)-5):
        w=lines[i:i+6]; r=difflib.SequenceMatcher(None,g,cons(KN(''.join(w))),autojunk=False).ratio()
        if r>bs: bs,best=r,i
    return best,bs
def clean_line(l):
    l=re.sub(r'[|।॥!:;,"\'\(\)\[\]\{\}0-9೦-೯\.\?~*$]+','',l)
    l=l.replace('-','').strip()
    return re.sub(r'\s+',' ',l)
SOFT=set('ಅಆಇಈಉಊಎಏಐಒಓಔಾಿೀುೂೃೆೇೈೊೋೌ್ಂಯವ')
def ops(a,b):
    return [(i1,i2,b[j1:j2]) for op,i1,i2,j1,j2 in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes() if op!='equal']
def apply(lines,mp,i1,i2,y):
    lines=list(lines)
    if i1<i2:
        li,c1=mp[i1]; li2,c2=mp[i2-1]
        if li!=li2: return None,None
        lines[li]=lines[li][:c1]+y+lines[li][c2+1:]
    else:
        li,c1=mp[i1] if i1<len(mp) else (mp[-1][0],len(lines[mp[-1][0]]))
        lines[li]=lines[li][:c1]+y+lines[li][c1:]
    return lines,li
OCRS={'bem','1925','1930'}
CLS=['ದಧ','ತಥ','ಪಸಷಫಶ','ಬಭ','ಡಢ','ಟಠ','ಲಳ','ನಣ','ಗಘ','ಚಛ','ಜಝ','ಕಖ','ಿೀ','ುೂ','ೆೇ','ೊೋ','ಂ','್']
def confusable(x,y):
    if len(x)!=len(y) or not x: return len(x)<=1 and len(y)<=1 and set(x+y)<=set('ಂ್ೃ')
    for c1,c2 in zip(x,y):
        if c1==c2: continue
        if not any(c1 in g and c2 in g for g in CLS): return False
    return True
def fixws(x,y): return ('ಛ' in x and 'ಚ' in y) or ('್ಹ' in x)
from hks_split import resplit
def trim_resplit(raw, guide):
    words=[]  # (word, joins_next)
    txt=''
    for l in raw:
        hy=l.rstrip().endswith('-')
        c=clean_line(l)
        if not c: continue
        txt+=c+('' if hy else ' ')
    ws_=txt.split()
    g=cons(KN(''.join(guide)))
    # cumulative consonant offsets per word
    cw=[cons(KN(w)) for w in ws_]
    full=''.join(cw)
    sm=difflib.SequenceMatcher(None,g,full,autojunk=False)
    bl=[b for b in sm.get_matching_blocks() if b.size>=3]
    if not bl: return None
    st=bl[0].b-bl[0].a; en=bl[-1].b+bl[-1].size+(len(g)-bl[-1].a-bl[-1].size)
    acc=0; a=None; b=None
    for k,c in enumerate(cw):
        if a is None and acc+len(c)>st: a=k
        acc+=len(c)
        if b is None and acc>=en: b=k+1
    if a is None: return None
    if b is None: b=len(ws_)
    for da in (0,1,-1,2):
        for db in (0,1,-1,2):
            aa,bb=a+da,b+db
            if aa<0 or bb>len(ws_) or aa>=bb: continue
            r=resplit(' '.join(ws_[aa:bb]))
            if r: return r
    return None
def build(s, base_is_ws):
    ws={}
    for n,ls in blocks(open(H+f'ws_{s:02d}.wiki',encoding='utf-8').read()): ws.setdefault(n,ls)
    BL=bem_lines(s); pos=0; res={}; rep=[]
    for n in sorted(ws):
        i,r=extract_bem_verse(BL, ws[n], pos)
        bemv=[clean_line(x) for x in BL[i:i+6]] if i is not None else None
        if i is not None and not base_is_ws:
            rs=trim_resplit(BL[max(0,i-1):i+8], ws[n])
            if rs: bemv=rs
        if bemv: pos=i+6
        if base_is_ws and len(ws[n])==6: base=list(ws[n]); others=[('bem',KN(''.join(bemv)) if bemv and r>0.75 else None)]
        else:
            if not bemv or r<0.6: rep.append((n,'NOBASE',r)); continue
            base=bemv; others=[('ws',KN(''.join(ws[n])))]
        a,mp=skel_map(base)
        others += [('1925',locate(a,W1925)),('1930',locate(a,W1930))]
        props={}
        for name,b in others:
            if not b: continue
            for i1,i2,y in ops(a,b):
                x=a[i1:i2]
                if name=='ws' and set(x)<=SOFT and set(y)<=SOFT and not (len(x)==len(y) and set(x+y)<=set('ಾಿೀುೂೃೆೇೈೊೋೌ')): continue
                props.setdefault((i1,i2,y),[]).append(name)
        cur=base; changed=[]
        for (i1,i2,y),who in sorted(props.items(),key=lambda t:-t[0][0]):
            x=a[i1:i2]
            conf=confusable(x,y)
            ocr_only=all(w in OCRS for w in who)
            if base_is_ws:
                ok = len(who)>=2 and (not conf or fixws(x,y))
            else:
                ok = ('ws' in who and (len(who)>=2 or conf))
            if not ok: continue
            new,li=apply(cur,mp,i1,i2,y)
            if new is None: continue
            if any(re.search(r'(^| )[\u0CBE-\u0CCD\u0C82]',l) for l in new): continue
            a0,b0=lmr(cur); a1,b1=lmr(new)
            if fitline(a0[li],b0[li],li) and not fitline(a1[li],b1[li],li): continue
            cur=new; changed.append(f'{a[max(0,i1-4):i1]}[{a[i1:i2]}→{y}]{a[i2:i2+4]}<{"+".join(who)}>')
        if len(cur)!=6: rep.append((n,'LINES',len(cur))); continue
        lo,hi=lmr(cur); m=lo; bad=[k+1 for k in range(6) if not fitline(lo[k],hi[k],k)]
        fa,fmp=skel_map(cur)
        located=[(nm,b) for nm,b in others if b]
        conf_lines=set()
        for nm,b in located:
            badl=set()
            for i1,i2,y in ops(fa,b):
                x=fa[i1:i2]
                if nm=='ws' and set(x)<=SOFT and set(y)<=SOFT and not (len(x)==len(y) and set(x+y)<=set('ಾಿೀುೂೃೆೇೈೊೋೌ')): continue
                if nm in OCRS and (confusable(x,y) or (len(x)<=1 and len(y)<=1 and set(x+y)<=set('ಾಿೀುೂೃೆೇೈೊೋೌ್ಂ'))): continue
                for k in range(max(0,min(i1,len(fmp)-1)),max(i2,i1+1)):
                    if k<len(fmp): badl.add(fmp[k][0])
            conf_lines |= set(range(6))-badl
        unv=[k+1 for k in range(6) if k not in conf_lines]
        res[n]=cur; rep.append((n,'OK' if not unv else 'UNV',bad,m,len(located),changed,unv))
    return res,rep
if __name__=='__main__':
    out={}; allrep={}
    for s in range(int(sys.argv[1]),int(sys.argv[2])+1):
        r,rp=build(s, s<=12)
        out[s]=r; allrep[s]=rp
        from collections import Counter
        print(s, len(r), Counter(x[1] for x in rp))
    json.dump({'text':out,'rep':allrep},open(O+f'build_{sys.argv[1]}_{sys.argv[2]}.json','w'),ensure_ascii=False)
