
import { Heading } from "../components/Heading"
import { MaxWidthWrapper } from "../components/max-width-wrapper"
import { ShinyButton } from "../components/ShinyButton";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Banner } from "../components/Banner";
import { MasonaryGrid } from "../components/MasonaryGrid";
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home({ params: { locale } }: {params: {locale: "en"| "es"}}) {
  setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <>
      
     <section className="relative bg-home-banner bg-cover bg-center h-[70vh] sm:h-[70vh] pb-16">
        <MaxWidthWrapper className="text-center ">
          <div className="absolute right-0 my-20 sm:mb-56 sm:bottom-0 sm:mr-6 ">
            <Heading className="">
              <span className="leading-loose sm:leading-none text-white text-6xl bg-brand-700  md:p-7 rounded-md block">Latin Ageing Association</span>
            </Heading>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <Heading className="text-brand-700 text-center my-20">{t('callToAction')}</Heading>
        </MaxWidthWrapper>
      </section>

      <section className="relative sm:py-4 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative">
              <div className="relative flex h-full flex-col">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-4xl font-medium tracking-tight text-brand-950 max-lg:text-center pb-8">
                    {t('aboutUs')}
                  </p>
                  <p className="mt-2 max-w-lg text-2xl text-gray-600 max-lg:text-center font-sans">{t('introduction')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <Image className="size-full object-cover object-center"
                  src="/fc758102-96f0-4e4e-bb88-263432aaf482.JPG"
                  alt="Bolivian Latin Aging Association UK"
                  fill />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section >

      <section className="relative">
        <MaxWidthWrapper>
          <Banner />
        </MaxWidthWrapper>
      </section>

      <section className="my-16">
        <MasonaryGrid />
        </section>

      <section className="relative sm:py-2 bg-white mb-12">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <ShinyButton
            href="https://www.facebook.com/people/Latin-Age-Uk/100090506665209/"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
            Contact Us
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

