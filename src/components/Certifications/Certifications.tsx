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
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };


    return (
        <div id={id} className="min-h-screen flex flex-col px-4 justify-center items-center w-full">
            <h3 className="text-4xl font-bold text-center mb-8">Certificaciones</h3>
            <div className="w-full">
                <div className="relative w-full max-w-4xl mx-auto px-2">
                    <div className="container mx-auto px-2">
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