'use client';

import Image from "next/image";
import Slider from "react-slick";
import { dataCertifications } from "./Certification.data";

export default function Certifications({ id }: { id: string }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div id={id} className="container mx-auto py-8 px-4">
            <h3 className="text-4xl font-bold text-center">Certificaciones</h3>
            <div className="flex flex-col lg:items-center">
                <div className="relative max-w-full sm:max-w-sm md:max-w-lg lg:max-w-5xl px-2 py-2">
                    <div className="container mx-auto py-6 sm:py-8 px-2 sm:px-4">
                        <Slider {...settings}>
                            {dataCertifications.map((cert) => (
                                <div key={cert.id} className="px-0"> {/* Elimina el padding horizontal */}
                                    <a
                                        href={cert.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                          className="focus:outline-none focus:border-none"
                                    >
                                        <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={300}
                                        height={200}
                                        className="mx-auto cursor-pointer h-48 object-contain"
                                    />
                                    </a>
                                  
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}