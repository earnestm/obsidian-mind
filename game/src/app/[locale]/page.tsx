import { getTranslations } from 'next-intl/server';
import { getAuthorsForLocale } from '@/data/index';
import type { Locale } from '@/types/game';
import { routing } from '@/i18n/routing';
import AuthorSelect from '@/components/AuthorSelect';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t  = await getTranslations({ locale, namespace: 'home' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const tl = await getTranslations({ locale, namespace: 'languages' });

  const authors = await getAuthorsForLocale(locale as Locale);

  const languageOptions = routing.locales.map((l) => ({
    code: l,
    label: tl(l),
    active: l === locale,
  }));

  return (
    <main className="min-h-screen flex flex-col">

      {/* Masthead nav */}
      <nav className="px-6 pt-5 pb-3 border-b border-paper-950">
        <div className="flex items-center justify-between mb-2">
          {/* Blackletter-style masthead */}
          <span className="font-display font-black text-sm uppercase tracking-widest text-paper-950">
            Literary Challenge
          </span>
          {/* Language pills */}
          <div className="flex items-center gap-1">
            {languageOptions.map((lang) => (
              <a
                key={lang.code}
                href={`/${lang.code}`}
                className={`font-display text-[0.6rem] uppercase tracking-widest px-2 py-1 border transition-colors ${
                  lang.active
                    ? 'border-paper-950 bg-paper-950 text-paper-100'
                    : 'border-paper-400 text-paper-600 hover:border-paper-950 hover:text-paper-950'
                }`}
              >
                {lang.label}
              </a>
            ))}
          </div>
        </div>
        {/* Double rule under masthead */}
        <div className="border-t-4 border-double border-paper-950" />
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center px-4 pt-10 pb-8">

        {/* Big editorial headline */}
        <div className="text-center mb-3 max-w-2xl">
          <h1 className="font-display font-black text-[clamp(3.5rem,12vw,7rem)] leading-[0.9] tracking-tight text-paper-950 uppercase mb-4">
            {t('headline')}
          </h1>
          {/* Decorative rule */}
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px flex-1 max-w-[4rem] bg-paper-950" />
            <p className="font-serif italic text-base text-paper-700">{t('tagline')}</p>
            <div className="h-px flex-1 max-w-[4rem] bg-paper-950" />
          </div>
          {/* Dashed box for description */}
          <div className="dashed-box max-w-md mx-auto mb-8">
            <p className="font-serif text-sm text-paper-800 leading-relaxed">{t('subtitle')}</p>
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

      {/* Footer rule */}
      <footer className="px-6 py-5 border-t border-paper-950 flex items-center justify-between">
        <p className="font-serif text-xs text-paper-600">
          Texts from{' '}
          <a href="https://www.gutenberg.org" className="underline hover:text-paper-950" target="_blank" rel="noopener noreferrer">
            Project Gutenberg
          </a>
          . AI texts generated for educational purposes.
        </p>
        <p className="font-display text-[0.55rem] uppercase tracking-widest text-paper-400">
          {authors.length} {t('authors')}
        </p>
      </footer>
    </main>
  );
}
