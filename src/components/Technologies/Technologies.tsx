'use client';

import { technologies } from "./Technologies.data";

export default function Technologies({ id }: { id: string }) {
    return (
        <div className="container mx-auto py-8 px-4">
            <h3 className="text-3xl sm:text-4xl font-bold my-6 sm:my-10 text-center">Tecnologías</h3>
            <div className="flex flex-col lg:items-center">
                <div className="relative max-w-full sm:max-w-md md:max-w-lg lg:max-w-7xl rounded-[20px] sm:rounded-[30px] px-2 py-2 overflow-visible shadow-xl bg-blueCard border border-blueCardLight">
                    <div className="container mx-auto py-6 sm:py-8 px-2 sm:px-4">
                        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6 gap-y-6 sm:gap-y-8">
                            {technologies.map(({ id, name, icon, background, color }) => (
                                <div key={id} className="relative group transition-transform duration-300 hover:scale-105">
                                    <span className="hidden group-hover:block absolute text-xs font-medium px-2.5 py-0.5 rounded-sm dark:bg-gray-700"
                                        style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}`, top: '-30px', whiteSpace: 'nowrap', minWidth: 'fit-content'}}>
                                        {name}
                                    </span>
                                    <button
                                        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-transparent font-semibold rounded-2xl sm:rounded-3xl group-hover:border group-hover:bg-opacity-20"
                                        style={{ background: background, border: `2px solid transparent` }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.border = `2px solid ${color}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.border = `2px solid transparent`;
                                        }}
                                    >
                                        <img src={icon} alt={name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" style={{ objectFit: 'contain', width: '46px', height: '46px' }}/>
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