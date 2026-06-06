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
  const initial = author.name[0].toUpperCase();

  return (
    <button onClick={onClick} className="author-card">
      {author.image ? (
        <Image
          src={author.image}
          alt={author.name}
          width={300}
          height={400}
          className="author-portrait"
        />
      ) : (
        <div className="author-portrait-placeholder">{initial}</div>
      )}
      <div style={{
        padding: '10px 12px',
        borderTop: '2px solid var(--ink)',
        flex: 1,
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 14,
          lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-.01em',
          color: 'var(--ink)', margin: '0 0 3px',
        }}>
          {author.name}
        </p>
        <p style={{ fontStyle: 'italic', fontSize: 12, color: 'var(--ink-2)', margin: 0 }}>
          {author.years}
        </p>
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
    <div>
      <p className="kicker" style={{ marginBottom: 16 }}>{t_choose}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: 12,
        marginBottom: 24,
      }}>
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} onClick={() => handleSelect(author.id)} />
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <button
          onClick={handleRandom}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
            letterSpacing: '0.06em', fontSize: 16, padding: '14px 32px',
            background: 'var(--ink)', color: 'var(--paper)', border: 'none',
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'background 0.15s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#000')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'var(--ink)')}
        >
          ✦ {t_random}
        </button>
        <p style={{ fontStyle: 'italic', fontSize: 12, color: 'var(--ink-3)', margin: 0 }}>
          {t_rounds}
        </p>
      </div>
    </div>
  );
}
