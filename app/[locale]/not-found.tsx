import {useTranslations} from 'next-intl';
 
export default function NotFoundPage() {
  const t = useTranslations('Homepage');
  return <h1>404 Not Found</h1>;
}