import { Button } from "@/components/ui/button";

import Link from "next/link";

export const Banner = () => {

    return (

        <div className="bg-brand-700 rounded-md">
            <div className="flex flex-col md:flex-row justify-between items-center p-10 sm:my-4 my-4">
                <div className=""><p className="text-white font-bold text-2xl py-4">Discover more about LAUK CIC on the Southwark Council website</p>
                    <p className="text-white">And download a free downloadable booklet with more information about the Latin Ageing UK C.I.C - as well as other organisations and services in Southwark that support healthy ageing for residents aged 50+.</p></div>
                <div className="px-12">
                    <Button variant={"outline"} asChild className="px-8 mt-4 md:mt-0">
                        <Link href={'https://www.southwark.gov.uk/adult-social-care/living-independently/get-support-home'}>
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
        </div>


    )

}