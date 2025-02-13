
import {   Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue, } from '@/components/ui/select';
import clsx from 'clsx';
import {useTransition} from 'react';
import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/services/locale';
import { CheckIcon, LanguagesIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
type Props = {
  defaultValue: string;
  items: Array<{value: string; label: string}>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    redirect(`/${value}`)
  }

  return (<>
<Select defaultValue={defaultValue} onValueChange={onChange}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="es">Español</SelectItem>
    <SelectItem value="en">English</SelectItem>
  </SelectContent>
</Select>

       </>
  );
}