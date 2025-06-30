

import Navbar from "./_components/Navbar/Navbar";
import HeroSlider from "./_components/HeroSlider/HeroSlider";
import About from "./_components/About/About";
import OurProjects from "./_components/OurProjects/OurProjects";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import OurServices from "./_components/OurServices/OurServices";
import Reviwes from "./_components/Reviwes/Reviwes";
import Footer from "./_components/Footer/Footer";
import Contact from "./contact/Contact";
config.autoAddCss = false;



export default function Home() {

  return (
   <>


   <About/>

   <OurProjects/>
   <OurServices/>
   <Contact/>

   <Reviwes/>

  
      
   </>
  );
}
