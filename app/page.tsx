

import { Heading } from "./components/Heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { ShinyButton } from "./components/ShinyButton";
import Image from "next/image";
import { Banner } from "./components/Banner";
import { MasonaryGrid } from "./components/MasonaryGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {


  return (
    <>
      
     <section className="relative bg-home-banner bg-cover bg-center h-[70vh] sm:h-[70vh] pb-16">
        <MaxWidthWrapper className="text-center ">
          <div className="absolute right-0 my-20 sm:mb-56 sm:bottom-0 sm:mr-6 ">
            <Heading className="">
              <span className="leading-loose sm:leading-none text-white text-6xl bg-brand-700  md:p-7 rounded-md block">Latin Ageing UK C.I.C</span>
            </Heading>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-brand-700 py-10 mb-4">
  <MaxWidthWrapper>
  <Heading className="text-white text-center">Join us in rediscovering joy and vitality in every moment!</Heading>
</MaxWidthWrapper>
</section>

      <section className="relative sm:py-4 bg-brand-25 mb-4">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative">
              <div className="relative flex h-full flex-col">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-4xl font-medium tracking-tight text-brand-950 max-lg:text-center pb-8">
           About Us 
                  </p>
                  <p className="mt-2 max-w-lg text-2xl text-gray-600 max-lg:text-center font-sans"> At Latin Ageing UK C.I.C, we empower individuals aged 50 and over to embrace vibrant social lives and enhance their well-being. Our engaging activities foster connection, creativity, and a sense of community. From fitness classes to cultural outings, we provide opportunities for personal growth and friendship, ensuring that every participant feels valued and inspired.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <Image className="size-full object-cover object-center"
                  src="./dress.jpg"
                  alt="Bolivian Latin Aging Association UK"
                  fill />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section >

<section className="bg-brand-700 py-10 mb-4">
  <MaxWidthWrapper>
    <div className="flex flex-col md:flex-row justify-evenly items-center p-2 sm:my-2 ">
  <h2 className="text-white text-center text-2xl font-bold">Healthwatch Southwark: 1 Year Update of our Latin American Access Report!</h2>
                 <Button variant={"outline"} asChild className="px-8 mt-4 md:mt-0 ">
                        <Link href={'https://www.healthwatchsouthwark.org/news/2024-10-02/1-year-update-our-latin-american-access-report'}>
                            Read Now
                        </Link>
                    </Button>
                    </div>
</MaxWidthWrapper>
</section>


<section>
  <div className="columns-1 sm:columns-2 gap-4 mx-4 my-10">
    <div><Image className="w-full object-cover rounded-lg" src="./creativitycommunitywellbeing.jpg" alt="image creativity community wellbeing" width={100} height={100}/></div>

    <div><Image className="w-full object-cover rounded-lg" src="./communityhealth.jpg" alt="community health" width={100} height={100}/></div>
  </div>
</section>



      <section>
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

