'use client';

import { useRouter } from '@/i18n/navigation';
import type { Author } from '@/types/game';
import type { Locale } from '@/types/game';
import Image from 'next/image';

interface Props {
  authors: Author[];
  locale: Locale;
  t_choose: string;
  t_rounds: string;
  t_random: string;
}

function AuthorCard({ author, onClick }: { author: Author; onClick: () => void }) {
  const initial = author.name.split(' ').pop()![0].toUpperCase();

  return (
    <button
      onClick={onClick}
      className="group text-left border border-paper-400 hover:border-paper-950 bg-paper-50 hover:bg-paper-100 transition-all duration-200 flex flex-col"
    >
      {/* Portrait area */}
      <div className="relative w-full overflow-hidden border-b border-paper-300 group-hover:border-paper-700 transition-colors">
        {author.image ? (
          <Image
            src={author.image}
            alt={author.name}
            width={300}
            height={400}
            className="author-portrait"
          />
        ) : (
          <div className="author-portrait-placeholder">
            <span className="font-display font-black text-5xl text-paper-400">{initial}</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-paper-950/0 group-hover:bg-paper-950/5 transition-colors" />
      </div>

      {/* Name block */}
      <div className="p-3 border-t-2 border-paper-950 flex-1 flex flex-col">
        <p className="font-display font-black text-base leading-tight uppercase tracking-tight text-paper-950 group-hover:text-paper-800">
          {author.name}
        </p>
        <p className="font-serif text-xs text-paper-600 mt-0.5">{author.years}</p>
        <p className="font-serif italic text-xs text-paper-500 mt-1.5 leading-snug">{author.knownFor}</p>
      </div>
    </button>
  );
}

export default function AuthorSelect({ authors, locale, t_choose, t_rounds, t_random }: Props) {
  const router = useRouter();

  const handleSelect = (authorId: string) => router.push(`/game/${authorId}`, { locale });
  const handleRandom = () => {
    const random = authors[Math.floor(Math.random() * authors.length)];
    handleSelect(random.id);
  };

  return (
    <div className="w-full max-w-4xl">
      <p className="font-display text-[0.6rem] uppercase tracking-[0.35em] text-paper-600 text-center mb-6">
        {t_choose}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} onClick={() => handleSelect(author.id)} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleRandom}
          className="px-10 py-3 border-2 border-paper-950 text-paper-950 font-display font-bold uppercase tracking-widest text-xs hover:bg-paper-950 hover:text-paper-100 transition-colors"
        >
          ✦ {t_random}
        </button>
        <p className="font-serif italic text-xs text-paper-500 mt-1">{t_rounds}</p>
      </div>
    </div>
  );
}
