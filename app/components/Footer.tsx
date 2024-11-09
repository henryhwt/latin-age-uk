import Link from "next/link"
import { MaxWidthWrapper } from "@/app/components/max-width-wrapper"

import Image from "next/image"


export const Footer = async () => {


  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
         <p className="text-xs text-gray-500">
          © 2024 BLAS UK is a community interest company based in London, UK.
          <br/>
          Registered company limited by guarantee (Company No. 14658220). 
          </p>

          <div className="h-full flex items-center space-x-4">

        

          <Link href="https://www.facebook.com/people/Latin-Age-Uk/100090506665209/" className="z-30 opacity-100 hover:opacity-100 ">
          <Image
            aria-hidden
            src="./facebook.svg"
            
            alt="Globe icon"
            width={30}
            height={30}
            
          />
            </Link>



            <Link href="https://www.instagram.com/latinageuk">
          <Image
            aria-hidden
            src="./instagram.svg"
            
            alt="Globe icon"
            width={30}
            height={30}
          />
            </Link>



            <Link href="https://twitter.com/latinageuk">
          <Image
            aria-hidden
            src="./x.svg"
            
            alt="Globe icon"
            width={30}
            height={30}
          />
            </Link>

          {/* <Button size="sm" variant="default">
                    About Us
                  </Button> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

