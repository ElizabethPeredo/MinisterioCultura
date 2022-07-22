import React from 'react'

export default function CardContainer({children}) {
  return (
    <section className="">
        <main className="flex flex-wrap -mx-4 mb-12 md:mb-20 justify-center">
        {children}
        </main>
    </section>
  )
}