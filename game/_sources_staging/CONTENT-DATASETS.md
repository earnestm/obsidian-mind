# CONTENT DATASETS — use paired human/AI corpora, NOT hand-written foils

**This supersedes the old "Claude writes the AI foils" rule.** The right way to source the
game is to pull GENUINE, already-paired human-vs-machine text from public detection corpora.
This fixes three things at once: (1) difficulty — the AI side is real strong-model output, not
cartoon filler; (2) matched pairs — same domain/prompt, human vs machine, so no "numbers =
human" giveaway; (3) fabrication risk — nothing is invented, everything has provenance.

The live game ALREADY cites RAID + the BBC corpus on its reveal cards. The fix is to lean into
these datasets and drop the hand-written filler (the "heartwarming journey of self-discovery"
film reviews that played themselves).

## PRIMARY — paired human vs machine detection corpora

### RAID  (github.com/liamdugan/raid — MIT license) ★ workhorse
- 11 genres: **IMDb Movie Reviews, NYT News, arXiv Abstracts, Recipes, Reddit Posts,
  Book Summaries, Wikipedia, Poetry, Czech News, German News, Python Code**.
- 11 models incl. **GPT-4, ChatGPT, Llama 2 70B, Mistral 7B, Cohere, MPT-30B** (+ chat variants),
  4 decoding strategies, 12 adversarial attacks. 10M+ AI docs with labels.
- Load: `from raid.utils import load_data` (splits train/test/extra) or via CSV / HF datasets.
- Maps to game genres: reviews (IMDb), news (NYT/Czech/German), white-papers (arXiv abstracts),
  manuals-ish (recipes), think-pieces/forum (Reddit), reference (Wikipedia).

### LLM-moviereviews  (github.com/sydney-machine-learning/LLM-moviereviews — research use, cite) ★ current models
- Human IMDb reviews vs AI reviews from **GPT-4o, Gemini 2.0, DeepSeek V3** — i.e. CURRENT-gen
  models (fixes "RAID is GPT-4-era"). Data in `Reviews/` (IMDb + LLM subdirs), metadata in
  `selected_movie_info.csv`. Great for a hard Film-Review deck.

### Fake-review detection corpora  (human vs computer-generated product reviews)
- huggingface.co/zayuki/computer_generated_fake_review_detection  (HF blocked from this session —
  fetch from alt-test2 or via `datasets` lib).
- github.com/topics/fake-review-detection  (index of many labelled human/AI review datasets).
- Feeds a Marketing/Reviews deck with genuine AI vs human product reviews.

### general_machines  (github.com/SorenKF/general_machines — MIT code; data: Zenodo DOI 10.5281/zenodo.19594487)
- Human + machine-generated **argumentative** texts, tagged for GENERICITY (measures how generic
  a clause is — literally the core "AI tell"). Horizon-Europe / HYBRIDS project (Grant 101073351).
- Two uses: (a) a Think-Pieces/argument deck of paired texts; (b) its genericity scoring could
  power/validate the reveal-screen "tells" (Generic abstraction, etc.).

## SECONDARY — raw human text & AI-content sources
- **Common Crawl** (commoncrawl.org) — massive human web text; a human-side reservoir if a genre
  is thin. Heavy; sample, don't bulk-load.
- **Kaggle** — Wine Reviews (zackthoutt), IMDb Top 100 Movies 2026 (Sai Teja Bandaru), etc. —
  human review/text corpora for the human side.
- **Squirrly SEO Instagram** (@squirrlyseo) — real AI-generated MARKETING copy in the
  single-passage social format the user prefers (e.g. the "SEO is like that friend who shouts
  from the rooftops…" post). Good real AI marketing samples + validates single-passage mode.
- **AI Incident Database** (incidentdatabase.ai) — NOT a paired corpus; a source of genuinely
  interesting real-world AI-harm STORIES for framing/flavour and topical decks.
- **HYBRIDS project** (hybridsproject.eu) — EU disinformation-analysis project behind
  general_machines; watch for further released datasets.

## HOW THE alt-test2 SESSION SHOULD USE THIS
1. Build a small data-prep script (web/data access required): download a RAID subset (+ the
   review corpora + LLM-moviereviews for current-gen), filter by chosen domains, and select
   **matched human/machine pairs** (same domain; strong model on the AI side).
2. CURATE for quality + interest — drop dull passages; keep vivid, specific human ones (fixes
   "not interesting to read"). Difficulty comes from the corpus; enjoyment comes from curation.
3. Keep per-passage source + model + license for the reveal card (RAID/BBC pattern already there).
4. Prefer strong / current models on the AI side (GPT-4/4o, Gemini, DeepSeek, Llama-70B) so the
   AI text no longer telegraphs itself.
5. Licensing: dataset licenses are permissive (RAID MIT, general_machines MIT+Zenodo); the
   underlying human texts (IMDb/NYT/BBC) keep source rights — use SHORT excerpts + cite, same
   fair-use posture. AI-generated side has no such issue.

## PRODUCT NOTES FROM PLAYTEST (fold into build)
- Difficulty is the #1 issue; the corpus approach above is the fix.
- Add a **single-passage mode** ("is THIS real or AI?") as the hero/shareable format (the
  Squirrly-style Instagram/review/marketing content); keep the A/B compare as a "hard mode".
- **Social proof**: show "X% of players got this right" — highest-value engagement feature;
  needs a small SEPARATE Supabase project (one table: question_id, guess, correct).
- Confidence wager: only meaningful once content is hard; consider 3 levels, or reserve for a
  "learn" mode.
- Fix the A/B label swap (leftmost = A, rightmost = B, assigned by position after the shuffle).
- Don't force the tell-clicking; the reveal already auto-highlights tells.
