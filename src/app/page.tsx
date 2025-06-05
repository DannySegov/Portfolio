import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import OnMy from "@/components/OnMy/OnMy";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Link from "next/link";
import { IconData } from "@/components/Icon/Icon.data"; // Importar el array de datos

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen first-line:mx-auto px-4 flex flex-col items-center justify-center py-16 md:py-32">
        <div className="max-w-6xl w-full mx-auto text-center font-bold space-y-4 md:space-y-5">
          <h1 className="text-6xl md:text-8xl">Daniela Salazar</h1>
          <h3 className="text-3xl md:text-5xl text-secondary">Desarrollador Frontend</h3>

          <Link href="/pdf/Certifications/CV-Daniela-Carolina-Salazar-Segoviano.pdf" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white font-bold hover:bg-secondary hover:text-white hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-secondary/80 rounded-full text-lg px-20 py-2.5 text-center me-2 my-2 border-2 border-secondary dark:focus:ring-secondary/80">
              Ver CV
            </button>
          </Link>

          <div className="flex flex-row my-10 text-center items-center justify-center space-x-4">
            {IconData.map(({ Icon, name, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <Icon className="text-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <OnMy id="onMy" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Technologies id="technologies" />
      <Certifications id="certifications" />
      <Contact id="contact" />
    </div>
  );
}


