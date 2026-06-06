import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'it', 'sr', 'nf'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
