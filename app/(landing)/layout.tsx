import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bolivian Latin Age Association',
  description: "We're empowering individuals within the Bolivian and Latin community by providing a supportive and inclusive environment. We strive to enhance social health and well-being, foster cultural appreciation, and build lasting connections that unite us all in a shared sense of community.",
}



import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
 
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>

      <body>
        <NextIntlClientProvider messages={messages}>
          
        <Navbar/>
                    {children}
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}