import { BannerSection } from "../../components/sections/BannerSection";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { TechSection } from "../../components/sections/TechSection";
import { ProjectSection } from "../../components/sections/ProjectSection";
import { DefaulTemplate } from "../../components/DefaulTemplate";


export const LandingPage = () =>{
    return(
    <>
    <DefaulTemplate>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
    </DefaulTemplate>
    
  </>
    )
}