import Image from "next/image";
import Navbar from "./NavMenu/Navbar";


import Headerr from "./header/Header";
import Glass from "./glassmorphic/Glass";
import CustomWidgetsSection from "./Wil";
import FeaturesSection from "./card";

import Slider from "./slider/Slider";
import Switch from "./switch/Switch";
import Readmore from "./readmore/Readmore";

export default function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Navbar/>
          <Glass/>
          <CustomWidgetsSection/>
          <Headerr/>
          <FeaturesSection/>
          <Slider/>
          <Switch/>
          <Readmore/>
        
          
      
    </main>
    

  );
}
