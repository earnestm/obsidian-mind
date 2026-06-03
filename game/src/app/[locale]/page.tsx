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
  const t = await getTranslations({ locale, namespace: 'home' });
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
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-stone-900">
        <span className="text-stone-600 text-xs uppercase tracking-widest">Literary Challenge</span>
        <div className="flex items-center gap-1">
          <span className="text-stone-700 text-xs mr-2">{tn('changeLanguage')}:</span>
          {languageOptions.map((lang) => (
            <a
              key={lang.code}
              href={`/${lang.code}`}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                lang.active
                  ? 'text-amber-400 bg-amber-950/40'
                  : 'text-stone-600 hover:text-stone-300'
              }`}
            >
              {lang.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-8">
        <div className="text-center mb-12 max-w-xl">
          <h1 className="text-5xl sm:text-7xl font-serif font-semibold text-white mb-4 tracking-tight">
            {t('headline')}
          </h1>
          <p className="text-amber-400/80 text-lg font-serif italic mb-4">{t('tagline')}</p>
          <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">{t('subtitle')}</p>
        </div>

        <AuthorSelect authors={authors} locale={locale as Locale} t_choose={t('chooseAuthor')} t_rounds={t('rounds')} />
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-stone-800 text-xs">
        Texts from{' '}
        <a
          href="https://www.gutenberg.org"
          className="text-stone-700 hover:text-stone-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Gutenberg
        </a>
        . AI texts generated for educational purposes.
      </footer>
    </main>
  );
}
