

import {routing} from '@/i18n/routing';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Latin Ageing Association',
  description: "We're empowering individuals within the Bolivian and Latin community by providing a supportive and inclusive environment. We strive to enhance social health and well-being, foster cultural appreciation, and build lasting connections that unite us all in a shared sense of community.",
}
export default async function LocaleLayout({ 
  children, 
   
}:{ 
  children: React.ReactNode; 
   }) {

  return (
    <html>
      <body>

      <Navbar/>
          {children}

      <Footer/>
      </body>
    </html>
  );
}