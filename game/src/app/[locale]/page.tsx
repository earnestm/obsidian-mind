import { getTranslations } from 'next-intl/server';
import { getAuthorsForLocale } from '@/data/index';
import type { Locale } from '@/types/game';
import { ROUNDS_PER_GAME } from '@/types/game';
import { routing } from '@/i18n/routing';
import AuthorSelect from '@/components/AuthorSelect';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function SunMark() {
  return (
    <svg width="54" height="27" viewBox="0 0 54 27">
      <g stroke="var(--brick)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <path d="M3 26 H51" />
        <path d="M27 26 V7" />
        <path d="M27 7 L18 26 M27 7 L36 26 M27 7 L11 26 M27 7 L43 26 M27 7 L27 26" />
      </g>
    </svg>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t  = await getTranslations({ locale, namespace: 'home' });
  const tl = await getTranslations({ locale, namespace: 'languages' });

  const authors = await getAuthorsForLocale(locale as Locale);

  const languageOptions = routing.locales.map((l) => ({
    code: l,
    label: tl(l),
    active: l === locale,
  }));

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Masthead nav */}
      <nav style={{ padding: '14px 20px 0' }}>
        <div className="meta-bar">
          <span style={{ fontStyle: 'italic' }}>Est. MMXXVI</span>
          <span className="ornament"><i /><i /><i /></span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {languageOptions.map((lang) => (
              <a
                key={lang.code}
                href={`/${lang.code === routing.defaultLocale ? '' : lang.code}`}
                className={`lang-pill${lang.active ? ' active' : ''}`}
              >
                {lang.label}
              </a>
            ))}
          </div>
        </div>
        <hr className="rule-double" />
      </nav>

      {/* Content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '32px 20px 56px',
      }}>
        <div
          className="stack"
          style={{ width: '100%', maxWidth: 640, '--gap': '20px' } as React.CSSProperties}
        >
          <p className="kicker">{t('kicker')}</p>

          <h1 className="nameplate" style={{ fontSize: 'clamp(3rem, 13vw, 5.5rem)' }}>
            {t('headline')}
          </h1>

          <div>
            <hr className="rule-thin" />
            <p className="dateline">{t('tagline')}</p>
            <hr className="rule-thin" />
          </div>

          <p className="dropcap">{t('subtitle')}</p>

          {/* Stamp */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <figure className="stamp" style={{ margin: 0 }}>
              <div className="inner">
                <div style={{ width: 54, height: 27, margin: '0 auto 6px', overflow: 'hidden' }}>
                  <SunMark />
                </div>
                <div className="sig">Real or AI?</div>
                <div className="meta">Est. MMXXVI</div>
              </div>
            </figure>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <div className="n">{ROUNDS_PER_GAME}</div>
              <div className="l">Rounds</div>
            </div>
            <div className="stat">
              <div className="n">{authors.length}</div>
              <div className="l">{t('authors')}</div>
            </div>
            <div className="stat">
              <div className="n">0</div>
              <div className="l">Mercy</div>
            </div>
          </div>

          <AuthorSelect
            authors={authors}
            locale={locale as Locale}
            t_choose={t('chooseAuthor')}
            t_rounds={t('rounds')}
            t_random={t('randomChallenge')}
          />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '12px 20px', borderTop: '1px solid rgba(27,25,17,.3)' }}>
        <div className="meta-bar" style={{ paddingBottom: 0 }}>
          <span style={{ fontStyle: 'italic' }}>
            Texts from{' '}
            <a
              href="https://www.gutenberg.org"
              style={{ color: 'inherit' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Gutenberg
            </a>
            . AI texts for educational purposes.
          </span>
          <span>{t('rounds')}</span>
        </div>
      </footer>
    </main>
  );
}
