'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  
  const currentLocale = ['en', 'es'].includes(pathSegments[1]) ? pathSegments[1] : 'en';
  
  const otherLocales = ['en', 'es'].filter(locale => locale !== currentLocale);
  
  const getNewPath = (locale:string) => {
    if (['en', 'es'].includes(pathSegments[1])) {
      return `/${locale}${pathname.substring(3)}`;
    }
    return `/${locale}${pathname}`;
  };

  return (
    <div>
      <button>
      {otherLocales.map(locale => (
        <Link key={locale} href={getNewPath(locale)}>
          <button>{locale == 'en' ? "English" : "Español"}</button>
        </Link>
      ))}
      </button>
    </div>
  );
};

export default LanguageSwitcher;