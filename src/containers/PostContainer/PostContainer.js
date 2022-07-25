import React from 'react'
import Link from 'next/link'

export default function PostContainer({ children }) {
    return (
        <section className="container__medium">
            <Link href='/Blog'>
                <a className="inline-block w-full sm:w-auto my-4 px-7 py-4 text-center font-medium bg-color1  text-txt-color1 hover:bg-color2 hover:text-txt-color2 rounded transition duration-250">Regresar</a>
            </Link>
            <hr/>
            <main className="my-6">
                {children}
            </main>
        </section>
    )
}