# HANDOFF — Non-fiction deck rebuild (real, current, international sources)

**Goal:** the 11 non-fiction "decks" (`game/src/data/nf/*.ts`) must use REAL, contemporary
(2022–2026), internationally sourced, **human-written** passages on the "real" side,
paired with freshly written **contemporary** AI foils. The public-domain/period text was
rejected by the user as useless for learning ("AI approximates *contemporary* writing").

## Hard rules (do not violate)
1. Every `isAI: false` passage must be GENUINE human text, **fetched from a real URL and
   quoted verbatim** (WebFetch/defuddle). NEVER write a "human" passage yourself or from
   memory — a fabricated human sample poisons an AI-detection game. If you can't fetch it,
   don't ship it.
2. Excerpts **80–160 words** (marketing/abstracts may run shorter). Trim to a continuous
   span; verbatim.
3. **International, not US-only.** Blend licenses: prefer CC / Open Government Licence / EU
   reuse; short fair-use excerpts of © outlets are OK. Put outlet + country + date + URL in
   the `source` field (players verify on the reveal screen).
4. `isAI: true` foils: YOU write them, contemporary register, no `source`. Target current
   AI tells: hollow evenhandedness, "it's important to note", "in today's fast-paced world",
   tricolons, "not just X but Y", moralising closers, zero verifiable specifics.
5. `hint` (every snippet): contrast points at *texture*, not archaic diction — real =
   checkable specifics / idiosyncratic voice; AI = fluent genericity.
6. Match the existing `Author`/`Snippet` TypeScript shape. Aim for ~5 real + ~4 AI per deck
   (min 3 real + 2 AI to be playable).

## STATE

### Already REBUILT with real content + committed (branch a0db915). Can top up but not required:
- `journalism.ts` (News) — 5 real: Canada/Wikinews, Ireland, Belgium, Canada/AFP, Croatia + 4 AI
- `investigative.ts` — 3 real: Voxeurop(EU/ES), DW(DE), DW/Netra(BD) + 3 AI
- `speeches.ts` — 4 real: Mattarella(IT), Kyle(UK), Starmer x2(UK) + 4 AI  (2 Starmer; swap one if a different speaker is found)

### BANKED (verbatim excerpts saved in this folder's .md files) but NOT yet built into decks:
- Marketing → `marketing.md`: Brussels Airlines "Africa stays with you" (1)
- White papers → `white-papers.md`: Bitcoin whitepaper, verified real (1)
- Think pieces → `think-pieces.md`: Balkan Insight / Serbia (1)
- Policy briefs → `policy-briefs.md`: EU Commission humanitarian Q&A (1)
- Press releases → `press-releases.md`: EU Commission Europol release (1)
- Also in `news.md`: bonus items (ANSA Italy, El País, Spain-econ) + Sztuczna Polska/Poland (needs URL — try notesfrompoland.com)

### EMPTY — need ~5 real each:
- Government notices, Instruction manuals, Grant proposals
- And top up Marketing / White papers / Think pieces / Policy briefs / Press releases to ~5 each.

## CANDIDATE URLs to FETCH + VERIFY (user supplied via Perplexity — MUST verify verbatim; some were fabricated)
**Manuals:** debian.org/doc/manuals/debian-reference/ ; github.com/torvalds/linux/blob/master/Documentation/admin-guide/quickly-build-trimmed-linux.rst ; infradead.org/~mchehab/kernel_docs/admin-guide/kernel-parameters.html
**White papers:** w3.org/TR/did-core/ ; arxiv.org/html/2504.12034v1  (Bitcoin already banked)
**Grants:** gtr.ukri.org (open a project → plain-English summary) ; cordis.europa.eu (project abstract) ; euro-access.eu/en/calls/1640/ ; the CERV Daphne call-fiche PDF on ec.europa.eu
**Marketing:** mozilla.org/en-US/ ; killyourdarlings.com.au/article/what-i-wish-id-known-about-starting-a-newsletter/ ; readless.app/blog/best-paid-substack-newsletters-2026 ; morningbrew.com/daily/about
**REJECTED (fabricated by Perplexity — do NOT use):** the generic IKEA "wooden dowels" text with fake url ikea.com/assemblyinstructions; treat any vague grant/tech "excerpt" that reads like AI grant-speak as suspect until verified on the page.
**Gov notices (fetch fresh):** gov.uk guidance/notices, food.gov.uk recalls, *.europa.eu notices, canada.ca — all OGL/EU-reuse, non-US.
**More news/think/policy if topping up:** theconversation.com (CC BY-ND), wikinews, reputable international outlets.

## WIRING — already done, no code changes needed unless adding NEW deck ids:
- `src/data/index.ts` nf loader imports all 11: speeches, advertising, journalism, gov-notices,
  manuals, policy-briefs, white-papers, grants, investigative, think-pieces, press-releases.
- `src/app/[locale]/game/[authorId]/page.tsx` ALL_AUTHOR_IDS lists all 11 nf ids (+ literary).
- Keep the existing ids/filenames. `advertising.ts` is the Marketing deck (id 'advertising').

## FINISH
1. First verify egress works (fetch a gov.uk page). If EGRESS_BLOCKED, stop and tell the user
   the network policy still isn't applied.
2. Rebuild each remaining deck: real fetched excerpts + AI foils + hints.
3. `cd game && npx tsc --noEmit && npm run build` (must be exit 0, ~237 static pages).
4. Commit + push to branch `claude/ai-literature-game-multilingual-Sm9WX`.
5. Delete this `_sources_staging/` folder in the final commit (it's scaffolding, not app code).
6. Remind the user to sync `game/` → `earnestm/miming` for Vercel deploy.
