import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export const Banner = () => {
    const t = useTranslations('HomePage');
    const locale = useLocale();

    return (

        <div className="bg-brand-700 rounded-md">
            <div className="flex flex-col md:flex-row justify-between items-center p-10 sm:my-4 my-4">
                <div className=""><p className="text-white font-bold text-2xl py-4">{t('discoverMore')}</p>
                    <p className="text-white">{t('download')} </p></div>
                <div className="px-12">
                    <Button variant={"outline"} asChild className="px-8">
                        <Link href={'https://www.southwark.gov.uk/adult-social-care/living-independently/get-support-home'}>
                            {t('learnMore')}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

    )

}