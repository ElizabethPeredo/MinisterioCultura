import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <>
            <section className="relative bg-color1 overflow-hidden p-6 h-screen">
                <section className="mt-10 p-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:w-1/2 lg:left-0 xl:mt-28 ">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">UNIDAD EJECUTORA N° 008</span>
                            <span className="block text-color2 xl:inline">PROYECTOS ESPECIALES</span>
                        </h1>
                        <p className="mt-3 text-base text-txt-color1 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        El Ministerio de Cultura es una institución reconocida como eje fundamental del desarrollo sostenible del país, que promueve la ciudadanía intercultural, la integración social y la protección del patrimonio cultural de la nación, facilitando un mayor acceso a la población, a los productos culturales y artísticos y afianzando la identidad peruana.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link href={{ pathname: "/Blog" }}>
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-color1 bg-color2 hover:bg-principal md:py-4 md:text-lg md:px-10">
                                    Blog
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex items-center p-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-56 md:h-56 lg:h-4/6 lg:w-full" src="https://cdn.www.gob.pe/uploads/document/file/1025985/standard_prensa_-_01.jpg" alt="" />
                </section>
            </section>

        </>

    )
}