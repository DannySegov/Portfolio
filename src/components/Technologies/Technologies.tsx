'use client';

import { technologies } from "./Technologies.data";

export default function Technologies({ id }: { id: string }) {
    return (
        <div className="container mx-auto py-8 px-4">
            <h3 className="text-4xl font-bold my-10 text-center">Tecnologías</h3>
            <div className="flex flex-col items-center">
                <div className="relative max-w-sm rounded-[30px] px-1 py-1 overflow-visible shadow-xl bg-blueCard border border-blueCardLight">
                    <div className="container mx-auto py-8 px-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {technologies.map(({ id, name, icon, background }) => (
                                <div key={id} className="relative transition-transform duration-300 hover:scale-105">
                                    <button
                                        className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 rounded-full hover:border hover:border-blue-500 hover:bg-blue-500"
                                        style={{
                                            background: background, // Usa el fondo dinámico
                                            borderRadius: "9999px", // Asegura que el borde también sea completamente redondeado
                                        }}
                                    >
                                        <img
                                            src={icon}
                                            alt={name}
                                            className="rounded-full"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}