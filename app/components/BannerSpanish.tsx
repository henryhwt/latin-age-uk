import { Button } from "@/components/ui/button";
import Link from "next/link";




export const BannerSpanish = () => {
    return (
<div className="bg-brand-700 rounded-md">
<div className="flex flex-col md:flex-row justify-between items-center p-10 sm:my-4 my-4">
    <div className=""><p className="text-white font-bold text-2xl py-4">Descubra más sobre BLAS UK en el sitio web del Consejo de Southwark</p>
        <p className="text-white"> Y descargue un folleto descargable de forma gratuita con más información sobre la Asociación Boliviana de Envejecimiento Latino, así como otras organizaciones y servicios en Southwark que apoyan el envejecimiento saludable para los residentes mayores de 50 años. </p></div>
    <div className="px-12">
         <Button variant={"outline"} asChild className="px-8">
            <Link href={'https://www.southwark.gov.uk/adult-social-care/living-independently/get-support-home'}> 
            Aprender más
            
             </Link>
            </Button> 

    </div>
</div>
</div>
    )
}