import { notFound } from 'next/navigation';
import { getAuthorById } from '@/data/index';
import GameBoard from '@/components/GameBoard';
import type { Locale } from '@/types/game';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string; authorId: string }> };

const ALL_AUTHOR_IDS = [
  // en
  'austen', 'bronte', 'doyle', 'joyce', 'fielding', 'woolf', 'twain', 'hemingway', 'hammett',
  // fr
  'flaubert', 'maupassant', 'zola', 'sand', 'colette', 'proust', 'hugo',
  // de
  'kafka', 'goethe', 'mann', 'droste',
  // it
  'verga', 'manzoni', 'pirandello', 'deledda',
  // sr
  'njegos', 'karadzic', 'sekulic',
  // nf
  'speeches', 'advertising', 'journalism',
  'gov-notices', 'manuals', 'policy-briefs', 'white-papers',
  'grants', 'investigative', 'think-pieces', 'press-releases',
];

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_AUTHOR_IDS.map((authorId) => ({ locale, authorId })),
  );
}

export default async function GamePage({ params }: Props) {
  const { locale, authorId } = await params;
  const author = await getAuthorById(locale as Locale, authorId);
  if (!author) notFound();

  return (
    <main className="min-h-screen">
      <GameBoard author={author} locale={locale as Locale} />
    </main>
  );
}
