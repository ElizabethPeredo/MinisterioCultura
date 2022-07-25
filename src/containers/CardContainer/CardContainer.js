import React from 'react'

export default function CardContainer({children}) {
  return (
    <section className="">
        <main className="grid col-auto 2xl:grid-cols-2 justify-center mx-4 mb-12 md:mb-20">
        {children}
        </main>
    </section>
  )
}