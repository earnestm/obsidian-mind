import { notFound } from 'next/navigation';
import { getAuthorById } from '@/data/index';
import GameBoard from '@/components/GameBoard';
import type { Locale } from '@/types/game';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string; authorId: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ['austen', 'bronte', 'doyle', 'joyce', 'fielding', 'woolf',
     'flaubert', 'maupassant', 'zola',
     'kafka', 'goethe', 'mann',
     'verga', 'manzoni', 'pirandello',
     'njegos', 'karadzic'].map((authorId) => ({ locale, authorId })),
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
