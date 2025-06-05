'use client';

import { dataExperience } from "./Experience.data";
import { BsCalendar2Fill } from "react-icons/bs";

export default function Experience({ id }: { id: string }) {
    return (
        <div id={id} className="flex flex-col mx-auto px-4 justify-center items-center min-h-[50vh] py-16 md:py-32">
            <h3 className="text-4xl font-bold my-10 text-center">Experiencia</h3>
            <div className="flex flex-col items-center">
                <ul className="relative border-l max-w-2xl">
                    {dataExperience.map(({ id, title, company, date, description }) => (
                        <li key={id} className="mb-8 md:mb-6 ml-6 flex items-start">
                            <span className="absolute flex items-center justify-center bg-grayBlue rounded-full -left-2 ring-4 ring-gray-600 w-4 h-4 mt-1">
                                <BsCalendar2Fill className="text-blueLight text-sm w-3 h-3" />
                            </span>
                            <div className="ml-2">
                                <h3 className="flex items-center gap-2 mb-1 text-xl font-bold text-secondary">
                                    {title}<span className="text-white">-</span>
                                    <span className="text-sm text-orangeLight">{company}</span>
                                </h3>
                                <time className="block mb-5 text-2lg font-semibold leading-snug text-blueLiDark">{date}</time>
                                <p className="mb-4 text-lg leading-snug">{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}