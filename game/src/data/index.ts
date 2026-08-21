import type { Author } from '@/types/game';
import type { Locale } from '@/types/game';

const authorLoaders: Record<Locale, () => Promise<Author[]>> = {
  en: async () => {
    const [austen, bronte, doyle, joyce, fielding, woolf, twain, hemingway, hammett] = await Promise.all([
      import('./en/austen').then((m) => m.default),
      import('./en/bronte').then((m) => m.default),
      import('./en/doyle').then((m) => m.default),
      import('./en/joyce').then((m) => m.default),
      import('./en/fielding').then((m) => m.default),
      import('./en/woolf').then((m) => m.default),
      import('./en/twain').then((m) => m.default),
      import('./en/hemingway').then((m) => m.default),
      import('./en/hammett').then((m) => m.default),
    ]);
    return [austen, bronte, doyle, joyce, fielding, woolf, twain, hemingway, hammett];
  },
  fr: async () => {
    const [flaubert, maupassant, zola, sand, colette, proust, hugo] = await Promise.all([
      import('./fr/flaubert').then((m) => m.default),
      import('./fr/maupassant').then((m) => m.default),
      import('./fr/zola').then((m) => m.default),
      import('./fr/sand').then((m) => m.default),
      import('./fr/colette').then((m) => m.default),
      import('./fr/proust').then((m) => m.default),
      import('./fr/hugo').then((m) => m.default),
    ]);
    return [flaubert, maupassant, zola, sand, colette, proust, hugo];
  },
  de: async () => {
    const [kafka, goethe, mann, droste] = await Promise.all([
      import('./de/kafka').then((m) => m.default),
      import('./de/goethe').then((m) => m.default),
      import('./de/mann').then((m) => m.default),
      import('./de/droste').then((m) => m.default),
    ]);
    return [kafka, goethe, mann, droste];
  },
  it: async () => {
    const [verga, manzoni, pirandello, deledda] = await Promise.all([
      import('./it/verga').then((m) => m.default),
      import('./it/manzoni').then((m) => m.default),
      import('./it/pirandello').then((m) => m.default),
      import('./it/deledda').then((m) => m.default),
    ]);
    return [verga, manzoni, pirandello, deledda];
  },
  sr: async () => {
    const [njegos, karadzic, sekulic] = await Promise.all([
      import('./sr/njegos').then((m) => m.default),
      import('./sr/karadzic').then((m) => m.default),
      import('./sr/sekulic').then((m) => m.default),
    ]);
    return [njegos, karadzic, sekulic];
  },
  nf: async () => {
    const [
      speeches, advertising, journalism, govNotices, manuals,
      policyBriefs, whitePapers, grants, investigative, thinkPieces, pressReleases,
    ] = await Promise.all([
      import('./nf/speeches').then((m) => m.default),
      import('./nf/advertising').then((m) => m.default),
      import('./nf/journalism').then((m) => m.default),
      import('./nf/gov-notices').then((m) => m.default),
      import('./nf/manuals').then((m) => m.default),
      import('./nf/policy-briefs').then((m) => m.default),
      import('./nf/white-papers').then((m) => m.default),
      import('./nf/grants').then((m) => m.default),
      import('./nf/investigative').then((m) => m.default),
      import('./nf/think-pieces').then((m) => m.default),
      import('./nf/press-releases').then((m) => m.default),
    ]);
    return [
      speeches, advertising, journalism, govNotices, manuals,
      policyBriefs, whitePapers, grants, investigative, thinkPieces, pressReleases,
    ];
  },
};

export async function getAuthorsForLocale(locale: Locale): Promise<Author[]> {
  return authorLoaders[locale]();
}

export async function getAuthorById(locale: Locale, id: string): Promise<Author | undefined> {
  const authors = await getAuthorsForLocale(locale);
  return authors.find((a) => a.id === id);
}
