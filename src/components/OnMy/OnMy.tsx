'use client';

export default function OnMy({ id }: { id: string }) {
    return (
        <div id={id} className="flex flex-col mx-auto px-4 justify-center items-center min-h-[50vh] py-16 md:py-32">
            <h3 className="text-4xl font-bold text-center">Sobre mi</h3>
            <div className="max-w-3xl mx-auto right-30 text-lg text-justify">
                <p className="mt-5 text-lg">
                Desarrollador Frontend con mas de 3 años de experiencia, conocimientos 
                en lenguajes de programación como Java, JavaScript, Typescript, Python 
                y frameworks como Angular y NextJs. También cuento con conocimientos 
                en administración de base de datos como MySQL, SQL y PostgreSQL. 
                Motivada para llevar mi carrera a un nuevo nivel. Especializado en la 
                resolución de problemas, trabajo en equipo y aprendo rápido todo tipo de nuevas tecnologías. 
                </p>
                </div>
        </div>
    )
}