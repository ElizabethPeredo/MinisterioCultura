import React from 'react'

export default function CardContainer({children}) {
  return (
    <section className="">
        <main className="grid col-auto md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center mx-4 mb-12 md:mb-20">
        {children}
        </main>
    </section>
  )
}