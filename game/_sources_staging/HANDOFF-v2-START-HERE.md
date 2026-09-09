# HANDOFF v2 — Alt-Test / "Forgery Post" AI-detection game (START HERE)

Read this first. It supersedes the older HANDOFF.md in this folder.

## 0. WHERE THINGS ACTUALLY LIVE (corrected)
- **LIVE SITE:** https://alt-text.eu/alt-test/ — served as **static files** from Hostinger
  `public_html/alt-test/`. Deployment = build a **static export** and upload the output.
  There is **NO Vercel and NO `miming`** in the real pipeline (those were stale detours).
- **AUTHORITATIVE SOURCE CODE:** the folder that builds the live UI — it has the
  **PAPER/RETRO/BENTO theme switcher**, the **"Alt-Test"** rebrand, **"A GAME BY ALT-TEXT"**,
  a **"PREFER NON-FICTION?"** toggle, and Next.js config with `output: 'export'` +
  `basePath: '/alt-test'`. Candidate folders on the user's machine:
    - `/home/ubuntu/alt-test2`  ← most likely the current/authoritative one
    - `/home/ubuntu/Nextcloud - Luc/ALT-TEXT/03_Digital/ai-literature-game-multilingual-Sm9WX-temp`
  **FIRST TASK:** confirm which one matches the live site (grep next.config for
  `basePath`/`output: 'export'`; look for the theme switcher + non-fiction toggle in the
  components). Work in THAT folder. Ignore the GitHub `earnestm/obsidian-mind` branch and
  the `earnestm/miming` repo — both are stale.
- **DEPLOY:** `npm run build` (static export → `out/`), then upload the contents of `out/`
  to Hostinger `public_html/alt-test/` (File Browser or SFTP). Verify `next.config` keeps
  `output: 'export'` and `basePath: '/alt-test'` or the subpath will break.

## 1. WHAT THIS ZIP/FOLDER CONTAINS (`_sources_staging/`)
Verified, verbatim, human-written source excerpts (real "human" side of the game), each with
outlet + country + date + URL + license. These were gathered and quality-checked; they are
the portable asset. Files:
- `news.md` — 8 real (Canada/Wikinews CC BY, Ireland, Belgium, Canada/AFP, Croatia + bonus
  ANSA Italy, El País, Spain-econ) + Poland/Sztuczna Polska (needs URL)
- `investigative.md` — 3 real (Voxeurop EU/ES, DW Germany, DW/Netra Bangladesh)
- `speeches.md` — 4 real (Mattarella IT, Kyle UK, Starmer x2 UK — gov.uk OGL)
- `marketing.md` — 1 (Brussels Airlines)
- `white-papers.md` — 1 (Bitcoin whitepaper, verified real)
- `think-pieces.md` — 1 (Balkan Insight / Serbia)
- `policy-briefs.md` — 1 (EU Commission humanitarian Q&A)
- `press-releases.md` — 1 (EU Commission Europol release)
- `TELLS.md` — the user's curated "BANNED" style guide: ~70 categories of AI/generic-prose
  tells. Use it to write sharper hints and better AI foils.

Note: the 3 fully-built decks (News/Investigative/Speeches, as TypeScript with real excerpts +
AI foils + hints) were written into the STALE obsidian-mind copy at
`src/data/nf/{journalism,investigative,speeches}.ts`. If useful, copy those three files over;
otherwise rebuild from the .md excerpts here. Everything needed is in these .md files.

## 2. CONTENT RULES (do not violate)
1. Every "human" (isAI:false) passage must be GENUINE human text, **fetched from a real URL,
   quoted verbatim**. NEVER write a "human" passage from memory — a fabricated human sample
   poisons an AI-detection game. (Perplexity fabricated some earlier — e.g. a fake IKEA
   manual with a made-up URL. Verify everything against the live page.)
2. 80–160 words (marketing/abstracts may run shorter). Continuous verbatim span.
3. International, not US-only. Blend licenses: prefer CC / OGL / EU-reuse; short fair-use
   excerpts of © outlets OK. Put outlet + country + date + URL in the `source` field.
4. AI foils (isAI:true): YOU write them, contemporary register, no `source`. Cite specific
   tells from TELLS.md (Negation Formula, Triple-Beat Lists, False Range, Hollow Restraint,
   Faux-Intellectual Aphorism, AI vocabulary cluster, etc.).
5. `hint`: contrast *texture* — real = checkable specifics/idiosyncratic voice; AI = fluent
   genericity. Name the tell.
6. Target ~6–8 real + ~5–6 AI per deck for good replay (min 3 real + 2 AI to be playable).

## 3. DECKS TO FINISH (need real fetched excerpts — web access required)
Empty: Government notices, Instruction manuals, Grant proposals.
Top up to ~5–6: Marketing, White papers, Think pieces, Policy briefs, Press releases.
License-clean, non-US source veins that work well:
- gov.uk (OGL) speeches/notices/guidance; *.europa.eu & ec.europa.eu presscorner (EU reuse);
  canada.ca; food.gov.uk recalls; Wikinews (CC BY); theconversation.com (CC BY-ND);
  gtr.ukri.org & cordis.europa.eu (grant summaries/abstracts); w3.org/TR (specs);
  debian.org & kernel docs (manuals).

## 4. GAMEPLAY / GAMIFICATION (recommended, all zero-backend, ship-fast)
- **Mixed / Random mode** drawing across ALL decks — biggest replay multiplier.
- **Shareable result card** (Wordle-style grid + score + link, copy-to-clipboard) — growth engine.
- **Streak + combo multiplier** during play; best streak on results.
- **Local best score & games played** via localStorage — the no-server "leaderboard".
- Global leaderboard = LATER, and needs a backend. A CSV cannot be a live shared board on a
  static site. If wanted, use a SEPARATE Supabase project (not the user's existing one) — but
  it's a fast-follow, not launch-critical.

## 5. IMMEDIATE NEXT STEPS FOR THE NEW SESSION
1. Confirm the authoritative folder (see §0) and that it builds + matches the live site.
2. Fold in the finished/real content (copy the 3 decks or rebuild from the .md excerpts).
3. If web access is available, finish the remaining decks per §2–§3.
4. Optionally add the gamification quick wins (§4).
5. `npm run build`; upload `out/` to Hostinger `public_html/alt-test/`; verify live.

## 6. DO NOT
- Do NOT deploy the standalone `forgery-post.zip` that was sent earlier — it is STALE and
  would regress the live site (loses theme switcher, rebrand, non-fiction toggle).
- Do NOT push game code into `earnestm/obsidian-mind` (personal vault) or `miming` — dead ends.
