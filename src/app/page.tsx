import Experience from "@/components/Experience/Experience";
import OnMy from "@/components/OnMy/OnMy";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";


export default function Home() {
  return (
    <div className="w-full mx-auto">
      <OnMy id="home"/>
      <Experience id="experience"/>  
      <Projects id="proyects"/>
      <Technologies id="technologies"/>
    </div>
  );
}


