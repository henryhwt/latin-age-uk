
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { setRequestLocale } from 'next-intl/server';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latin Ageing Association',
  description:
    "We're empowering individuals within the Bolivian and Latin community by providing a supportive and inclusive environment. We strive to enhance social health and well-being, foster cultural appreciation, and build lasting connections that unite us all in a shared sense of community.",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'es';
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Fetch messages based on the locale; ensure you pass 'locale'
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <Navbar />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}