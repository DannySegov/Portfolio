'use client';

import { projects } from "./Projects.data";

export default function Projects({ id }: { id: string }) {
    return (
        <div id={id} className="container mx-auto py-8 px-4">
            <h3 className="text-4xl font-bold my-10 text-center">Proyectos</h3>
            <div className="max-w-3xl mx-auto right-30 text-lg text-justify">
                <p>
                    Cada uno de estos proyectos representa el resultado de mi dedicación, aprendizaje constante y pasión por el desarrollo web. Desde la idea inicial hasta el producto final, he puesto el corazón en transformar conceptos en soluciones digitales funcionales y atractivas.
                    Te invito a explorarlos, inspirarte y descubrir cómo convierto líneas de código en experiencias reales. ¡Bienvenido a mi mundo de proyectos de software!
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 relative sm:left-56 ">
                {projects.map(({ id, name, description, image, tags, type }, index) => (
                    <div key={id} className={`relative rounded-[30px] overflow-hidden shadow-xl bg-blueCard border border-blueCardLight transform transition-transform duration-300 hover:scale-105 ${index === 2 ? "sm:col-span-2 flex flex-col sm:flex-row items-center" : "max-w-sm"}`}>
                        <div className="absolute top-2 left-2 p-3">
                            <span className="inline-block bg-grayTransparent backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-white">
                                {type}
                            </span>
                        </div>
                        {index === 2 ? (
                            // Diseño especial para la tercera tarjeta
                            <>
                                <img className="px-1 py-1 rounded-[30px] w-full sm:w-1/2" src={image} alt={name} />
                                <div className="p-6 sm:w-1/2">
                                    <div className="font-bold text-xl text-secondary mb-2">{name || "Project Name"}</div>
                                    <p className="text-white text-base mb-4">
                                        {description || "Descripción no disponible."}
                                    </p>
                                    <div className="flex flex-wrap">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="inline-block bg-blueTag rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className="px-1 py-1 rounded-[30px] w-full" src={image} alt={name} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl text-secondary mb-2">{name || "Project Name"}</div>
                                    <p className="text-white text-base">
                                        {description || "Descripción no disponible."}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="inline-block bg-blueTag rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}