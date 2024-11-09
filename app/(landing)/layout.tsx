import { ReactNode } from "react"
import { Navbar} from "@/app/components/Navbar"
import { Footer } from "../components/Footer"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bolivian Latin Age Association',
  description: "We're empowering individuals within the Bolivian and Latin community by providing a supportive and inclusive environment. We strive to enhance social health and well-being, foster cultural appreciation, and build lasting connections that unite us all in a shared sense of community.",
}








const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}

export default Layout