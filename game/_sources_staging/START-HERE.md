# ALT-TEST — MASTER START-HERE (read this first, ignore older handoffs)

This bundle is everything needed to continue the "Alt-Test" AI-detection game in a fresh
session pointed at the REAL code. Older files here (HANDOFF.md, HANDOFF-v2) are superseded by
this doc + CONTENT-DATASETS.md where they conflict.

## 1. WHERE THE REAL GAME IS
- **Authoritative source:** the `alt-test2` folder (e.g. `/home/ubuntu/alt-test2`). It's a
  **Next.js** app (has `next.config.mjs`, `.next/`). Runs in dev at `localhost:5175/alt-test2/`.
- **Live site:** https://alt-text.eu/alt-test/ — served as **static files** on **Hostinger**
  (`public_html/alt-test/`). Deploy = `npm run build` (static export) → upload the output.
  **No Vercel. No `miming`. No `obsidian-mind`.** Those are all stale side-copies — ignore them.
- **First action in the new session:** open `alt-test2`, read its `package.json`, confirm the
  build command and where the passage DATA and the compare-view component live. Don't assume
  file paths from these notes — inspect the real repo.

## 2. CONTENT STRATEGY (the important change)
**Do NOT hand-write "AI foil" passages.** Pull GENUINE paired human-vs-machine text from public
detection corpora. This fixes difficulty (real strong-model AI, not filler), gives matched pairs
(no "numbers = human" giveaway), and removes all fabrication risk. See **CONTENT-DATASETS.md** in
this folder for the full catalog. Headlines:
- **RAID** (github.com/liamdugan/raid, MIT) — paired human/AI across IMDb reviews, NYT news,
  arXiv abstracts, recipes, Reddit, Wikipedia; models incl. GPT-4, Llama-70B, Mistral. Workhorse.
  (The live game already cites RAID — lean in, drop the hand-written film-review filler.)
- **LLM-moviereviews** (github.com/sydney-machine-learning/LLM-moviereviews) — IMDb human vs
  **GPT-4o / Gemini 2.0 / DeepSeek V3** (current models).
- **Fake-review corpora** (HF zayuki/computer_generated_fake_review_detection; GH topic
  fake-review-detection) — human vs AI product reviews → marketing deck.
- **general_machines** (github.com/SorenKF/general_machines, Zenodo 10.5281/zenodo.19594487) —
  human vs machine argumentative text tagged for GENERICITY (= the core AI tell).
- Secondary: Common Crawl, Kaggle (Wine Reviews, IMDb), Squirrly SEO Instagram (real AI marketing,
  single-passage format), AI Incident Database (story flavour).
- Data-prep task: script that downloads a RAID subset + current-gen review corpora, filters by
  domain, selects matched pairs, and CURATES for quality/interest. Keep source+model+license per
  passage for the reveal card.

## 3. PLAYTEST VERDICTS → PUNCH LIST (priority order)
0. **CRITICAL — game is 100% winnable without reading (answer-key leak).**
   All 28 pairs store human as `samples.a`, machine as `samples.b` (in both `data/` and
   `public/data/`). `SamplePanel.tsx:28` `const label = side.toUpperCase()` binds the letter to
   the JSON key; `Feedback.tsx:33` hardcodes "B was the machine"; `Game.tsx:40-47` shuffles the
   columns but the letter + correct answer ride with the key. Result: "B is the machine" is always
   correct. FIX (per round, one source of truth, decoupled from the key):
   (a) coin-flip the pair into positions [pos0,pos1]; (b) assign letters by POSITION (pos0→A,
   pos1→B) — also fixes the "B,A" ordering; (c) compute `machineLetter` = letter of the machine
   passage, store on the round; (d) SamplePanel label from position, not the key; (e) answer
   correct ⇔ `guess === round.machineLetter`; (f) Feedback uses `round.machineLetter`, no hardcoded
   "B"; (g) add a test asserting correct answer is ~50/50 A/B and nothing assumes a fixed key.
   Minimal alt: randomise which key holds human/machine per round, record `machineKey`, and make
   answer-check + feedback read it instead of literal 'b'.
1. **Difficulty is the #1 problem.** The corpus approach in §2 is the fix. AI foils currently
   telegraph themselves (formulaic openers; no figures). Use real strong-model output; match pairs.
2. **Add a single-passage mode** ("is THIS real or AI?") as the hero, shareable format (Instagram
   captions / reviews / marketing — the "Squirrly" style). Keep A/B compare as a "hard mode".
3. **Social proof** — show "X% of players got this right". Highest-value engagement feature.
   Needs a small **SEPARATE Supabase project** (one table: question_id, guess, correct). Do not
   reuse the user's existing Supabase.
4. **Curate the human side for interest** — quirky/vivid stories (Kairos statue in an attic;
   dancing robots Milutin & Dragutin; "the human printer") beat dry corporate filings.
5. **Fix the A/B label swap** in the compare view: assign the letter by DISPLAY POSITION after the
   left/right shuffle (leftmost = A, rightmost = B); keep human/AI randomised underneath.
6. **Confidence wager**: only meaningful once content is hard; consider 3 levels (guess/think/sure),
   or reserve for a "learn" mode. Players max it when questions are easy.
7. **Tell-clicking**: don't force it — the reveal already auto-highlights tells. Keep it optional.
- Content-volume target if any decks stay hand-curated: ~6–8 real + ~5–6 AI per deck; a
  cross-deck "mixed/random" mode multiplies replay cheaply.

## 4. WHAT'S IN THIS BUNDLE
- `START-HERE.md` (this file) — master brief.
- `CONTENT-DATASETS.md` — the datasets catalog (primary content source).
- `TELLS.md` — the "BANNED" AI-tells style guide (~70 categories) for the reveal/explainer text.
- Verified source excerpts (verbatim, attributed, framework-agnostic): `news.md`,
  `investigative.md`, `speeches.md`, `marketing.md`, `white-papers.md`, `think-pieces.md`,
  `policy-briefs.md`, `press-releases.md`.
- 3 example rebuilt deck files (`journalism.ts`, `investigative.ts`, `speeches.ts`) — reference
  only; the alt-test2 data format may differ.

## 5. FIRST STEPS FOR THE NEW SESSION (on alt-test2)
1. Confirm the stack + find the passage data + compare component.
2. Fix the A/B label bug (§3.5) as a quick win.
3. Build the RAID/review data-prep script (§2) and replace hand-written content with paired corpus
   data; curate for interest.
4. Add single-passage mode (§3.2).
5. Add social proof via a separate Supabase (§3.3).
6. `npm run build` → upload `out/` to Hostinger `public_html/alt-test/`; verify at alt-text.eu/alt-test.
