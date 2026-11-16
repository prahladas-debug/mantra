p='build.py'; s=open(p).read()
blk="if __name__ == '__main__':\n    main([int(x) for x in sys.argv[1:]] or range(1, 19))\n"
assert blk in s; s=s.replace(blk,'')+'\n'+blk
old="were added for reading. Why this edition"
new=("were added for reading (a word running on into the next pāda ends its line with a hyphen). "
     "The Bhagavad Gita (6.23–40) and the Vishnu Sahasranama adhyaya (13.135) are links to the library's annotated texts; "
     "Bhishma's hymn to Krishna (12.47) is given in full, because the library's Bhishma Stuti is the different hymn of the Bhagavata Purana (1.9). "
     "Why this edition")
assert old in s; s=s.replace(old,new.replace("'", "\\'")); open(p,'w').write(s)
