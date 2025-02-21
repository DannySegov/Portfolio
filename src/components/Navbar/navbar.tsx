'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";
import { RiMenu3Line } from 'react-icons/ri';
import { dataHeader } from './Header.data';
import { MotionTransition } from '../MotionTransition/MotionTransition';

export const navbar = () => {

    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false); // Estado para abrir y cerrar el menu movil

    return (
        <MotionTransition>
            <nav className='flex flex-wrap items-center justify-between mex-w-5xl p-4 mx-auto md:py-8'>
                <Link href='/' className=' flex items-center'>
                    <Image src="/public/next.svg" alt="Logo" width="150" height="40" />
                </Link>
                <RiMenu3Line className='block text-3xl md:hidden cursor-pointer' onClick={() => setIsOpenMenuMobile(!isOpenMenuMobile)} /> {/* Icono de menu para mobile se ejecuta la función setIsOpenMenuMobile negando el value definido como el state*/}

                <div className={`${isOpenMenuMobile ? 'block' : 'hidden'} w-full md:block md:w-auto`}> {/* Si el estado es true se muestra el menu, si es false se oculta */}
                    <div className='flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-2 md:mt-0 md:border-0'> {/* Se define el menu */}
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className='px-4 transition-all duration-500 ease-in-out'>
                                <Link href={idLink} className='text-lg hover:text-secondary'>{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </MotionTransition>
    )
}

export default navbar;