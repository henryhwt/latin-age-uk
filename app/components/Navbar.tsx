import Link from "next/link";
import { MaxWidthWrapper } from "@/app/components/max-width-wrapper";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";



export const Navbar = async () => {


  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 
                   bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-2xl sm:text-1xl text-brand-700">
          LAA  <span className="text-brand-600">UK</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
      

            <Link href="https://www.facebook.com/profile.php?id=100090506665209" className="z-30 opacity-100 hover:opacity-100">
              <Image
                aria-hidden
                src="./facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>

            <Link href="https://www.instagram.com/latinageinguk">
              <Image
                aria-hidden
                src="./instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>

            <Link href="https://twitter.com/latinageuk">
              <Image
                aria-hidden
                src="./x.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </Link>

            <LanguageSwitcher />

          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};