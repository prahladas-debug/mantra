#!/usr/bin/env bash
# Rebuilds books-src/ramcharitmanas/1-bala and 2-ayodhya from scratch (Bal Kand and Ayodhya Kand).
#   RCM_WORK=<scratch dir>  raw downloads and parsed witnesses live there (not committed)
set -euo pipefail
cd "$(dirname "$0")"
: "${RCM_WORK:?set RCM_WORK to a scratch directory}"
mkdir -p "$RCM_WORK/raw" "$RCM_WORK/wa" "$RCM_WORK/parsed"
[ -d "$RCM_WORK/node/node_modules/hindu-devotional-texts" ] || npm install --prefix "$RCM_WORK/node" hindu-devotional-texts@0.7.0
python3 -I fetch_ramcharit.py
node dump_wa.mjs
for k in bal ayodhya; do
  python3 -I parse_a.py $k
  python3 -I parse_wa.py $k
  python3 -I build.py $k          # writes books-src/ramcharitmanas/<part>/NNN.json and logs/<part>.tsv
done
python3 -I check_bb.py || true     # third witness, where bhaktibharat.com has a page (needs cached pages in raw/bhaktibharat)
echo done
