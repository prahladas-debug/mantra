import re,html,sys
t=open(sys.argv[1],encoding='utf-8',errors='replace').read()
m=re.search(r'<div class="entry-content[^>]*>(.*?)(<div class="(sharedaddy|post-tags|entry-footer)|<footer)',t,re.S)
s=m.group(1) if m else t
s=re.sub(r'<script.*?</script>','',s,flags=re.S); s=re.sub(r'<style.*?</style>','',s,flags=re.S)
s=re.sub(r'<br\s*/?>','\n',s); s=re.sub(r'</p>','\n\n',s); s=re.sub(r'<[^>]+>','',s)
s=html.unescape(s); s=re.sub(r'\n{3,}','\n\n',s)
print(s)
