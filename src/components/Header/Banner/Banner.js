import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <>
            <section className="relative bg-color1 overflow-hidden p-6 h-screen">
                <section className="mt-10 p-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:w-1/2 lg:left-0 xl:mt-28 ">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Data to enrich your</span>
                            <span className="block text-color2 xl:inline">online business</span>
                        </h1>
                        <p className="mt-3 text-base text-txt-color1 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-color1 bg-color2 hover:bg-principal md:py-4 md:text-lg md:px-10">
                                    Live demo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.www.gob.pe/uploads/document/file/1025985/standard_prensa_-_01.jpg" alt="" />
                </section>
            </section>

        </>

    )
}