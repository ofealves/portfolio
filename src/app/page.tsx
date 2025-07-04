"use client"

import { Aboutme } from "@/componentes/aboutme";
import { Contact } from "@/componentes/Contact";
import { Footer } from "@/componentes/footer";
import { Hero } from "@/componentes/Hero";
import { Navbar } from "@/componentes/Navbar";
import { Projects } from "@/componentes/Projects";
import { Skills, } from "@/componentes/Skills";


const Page = () => {
  return (
    <div>
      
      
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Page;
