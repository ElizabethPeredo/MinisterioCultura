import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../src/components/Header/Banner/Banner'
import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>UE008</title>
                <meta charset="utf-8" />
                <meta name="keywords" content="" />
                <meta name="author" content="Elizabet Peredo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href=
                    "https://1.bp.blogspot.com/-LmbmbqscZWQ/X6CvNGsOxsI/AAAAAAABl3Y/DzTEHPZnFFU465lVL3Q7A-LOHDlbeNCRwCLcBGAsYHQ/s960/mcultura-logo.jpg"
                    type="image/x-icon"></link>
            </Head>
            <Banner />
        </>

    )
}
