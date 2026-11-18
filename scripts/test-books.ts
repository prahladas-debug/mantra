/// <reference types="node" />
/**
 * The long works' manifest helpers (src/data/books.ts) and read-through plans over their units.
 * Run: npm test (after scripts/build-books.ts has written the manifest)
 */
import assert from 'node:assert/strict';
import { BOOKS, bookNeighbours, partItems, wholePartNeighbours, workSequence, linkedCategory } from '../src/data/books';
import { itemsForDay, planStatus, type Plan } from '../src/lib/plans';

let checks = 0;

// ---- Previous / Next: only to the reading straight before or after in the edition ----
for (const work of BOOKS) {
  // A text linked over a run of units (the Ramcharitmanas's Sundar Kand) ends at the last unit it covers.
  const place = new Map<string, { part: number; unit: number; last: number; count: number }>();
  for (const p of work.parts) for (const x of partItems(p)) place.set(x.id, { part: p.part, unit: x.unit, last: x.last ?? x.unit, count: p.unitCount });
  const adjacent = (a: string, b: string) => {
    const x = place.get(a)!;
    const y = place.get(b)!;
    return x.part === y.part ? y.unit === x.last + 1 : y.part === x.part + 1 && y.unit === 1 && x.last === x.count;
  };
  const seq = workSequence(work);
  for (const id of seq) {
    const nb = bookNeighbours(id)!;
    assert.ok(nb, `${id} is in its work`);
    if (nb.next) {
      assert.ok(adjacent(id, nb.next), `${id} → ${nb.next} skips units that are not written yet`);
      assert.equal(bookNeighbours(nb.next)!.prev, id, `${nb.next} ← ${id}`);
    }
    if (nb.prev) {
      assert.ok(adjacent(nb.prev, id), `${nb.prev} → ${id} skips units`);
      assert.equal(bookNeighbours(nb.prev)!.next, id, `${nb.prev} → ${id}`);
    }
    // Every reading that does come straight after is offered.
    const i = seq.indexOf(id);
    if (seq[i + 1] && adjacent(id, seq[i + 1])) assert.equal(nb.next, seq[i + 1]);
    checks++;
  }
  // The last unit written of a part that is not finished leads nowhere.
  for (const p of work.parts) {
    const items = partItems(p);
    const last = items[items.length - 1];
    if (last && (last.last ?? last.unit) < p.unitCount) {
      assert.equal(bookNeighbours(last.id)!.next, undefined, `${last.id}: unit ${(last.last ?? last.unit) + 1} is not written yet`);
      checks++;
    }
  }
  // A part that is a section of the library (the Sundarakanda) joins the kandas around it only
  // when the sarga next to it is written.
  work.parts.forEach((p, pi) => {
    if (!linkedCategory(p)) return;
    const items = partItems(p);
    const before = work.parts[pi - 1];
    const lastBefore = before && partItems(before).find((x) => x.unit === before.unitCount);
    assert.equal(wholePartNeighbours(items[0].id)?.prev, lastBefore?.id);
    const after = work.parts[pi + 1];
    const firstAfter = after && partItems(after).find((x) => x.unit === 1);
    assert.equal(wholePartNeighbours(items[items.length - 1].id)?.next, firstAfter?.id);
    checks += 2;
  });
}

// ---- read-through plans weighted by verses ----
{
  const items = Array.from({ length: 77 }, (_, i) => `u${i + 1}`);
  const weights = items.map((_, i) => (i % 7 === 0 ? 120 : 15 + (i % 5)));
  for (const days of [1, 3, 9, 21, 40, 108]) {
    const plan: Plan = { id: 'p', kind: 'readthrough', title: 't', items, weights, days, start: '2026-11-01', read: [], counts: {}, perDay: 1 };
    const all = Array.from({ length: days }, (_, d) => itemsForDay(plan, d)).flat();
    assert.deepEqual(all, items, `every unit once, in order, over ${days} days`);
    checks++;
  }
  // Finished when every unit is read; nothing due before the start.
  const plan: Plan = { id: 'p', kind: 'readthrough', title: 't', items, weights, days: 9, start: '2026-11-01', read: [], counts: {}, perDay: 1 };
  assert.equal(planStatus({ ...plan, read: items }).finished, true);
  assert.equal(planStatus(plan, new Date(2026, 9, 30)).behind, 0);
  checks += 2;
}

console.log(`books: ${checks} checks passed`);
