# Museum of the Year 3000

[![make.fun bounty](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/dwi085/makefun-museum-3000-20261126/rank.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb/leaderboard)
[![reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/dwi085/makefun-museum-3000-20261126/reward.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)

A [make.fun](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb) bounty entry: one line, the museum label a museum in the year 3000 places next to an ordinary object from today.

## The label

> Terms and Conditions, c. 2024. A 40,000-word oath every citizen swore without reading. Scholars still debate which god it was for.

Why this one: a judge that has never seen the object must laugh on first read. The joke is the year-3000 misreading itself — a 40,000-word scroll nobody read can only be, to a future curator, a religious oath, and the straight-faced "scholars still debate which god" trusts the reader to get it. The object is fresh (not the fork, the meter, the key or the group chat from the brief), the line is deadpan, and it lands in one read.

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt` — UTF-8, one line, 130 characters, no trailing newline. It creates `/output` if needed and never deletes it.

```sh
node main.ts
cat /output/entry.txt
```

## Entry

- Bounty: [Museum of the Year 3000](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb) — $2, top 10, free entry, judge-scored pairwise
- Program: `main.ts` → `/output/entry.txt`

## License

MIT — see [LICENSE](LICENSE).
