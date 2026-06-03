'use client';

import { useRouter } from '@/i18n/navigation';
import type { Author } from '@/types/game';
import type { Locale } from '@/types/game';

interface Props {
  authors: Author[];
  locale: Locale;
  t_choose: string;
  t_rounds: string;
}

export default function AuthorSelect({ authors, locale, t_choose, t_rounds }: Props) {
  const router = useRouter();

  const handleSelect = (authorId: string) => {
    router.push(`/game/${authorId}`, { locale });
  };

  const handleRandom = () => {
    const random = authors[Math.floor(Math.random() * authors.length)];
    handleSelect(random.id);
  };

  return (
    <div className="w-full max-w-3xl">
      <p className="text-stone-600 text-xs uppercase tracking-widest text-center mb-5">
        {t_choose}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {authors.map((author) => (
          <button
            key={author.id}
            onClick={() => handleSelect(author.id)}
            className="group flex flex-col items-start p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-800/60 hover:bg-stone-800/80 transition-all duration-200 text-left"
          >
            <span className="text-white font-serif text-base group-hover:text-amber-300 transition-colors">
              {author.name}
            </span>
            <span className="text-stone-600 text-xs mt-0.5">{author.years}</span>
            <span className="text-stone-500 text-xs mt-2 italic leading-snug">{author.knownFor}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleRandom}
          className="w-full max-w-xs py-3 rounded-xl border border-stone-700 hover:border-amber-700 text-stone-400 hover:text-amber-400 text-sm font-medium transition-all duration-200"
        >
          ✦ Random Author
        </button>
        <p className="text-stone-800 text-xs">{t_rounds}</p>
      </div>
    </div>
  );
}
