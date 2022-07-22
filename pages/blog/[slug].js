import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Modal from '../../src/components/Modal/Modal'
import PostContainer from '../../src/containers/PostContainer/PostContainer'
import Script from 'next/script'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content, }) {

    return (
        <>
            <section className="container__medium mb-6 p-0 flex flex-col md:flex-row bg-white  dark:bg-color1">
                <main className="p-6 lg:auto" >
                    <h3 className="" id="title">{title}</h3>
                    <kbd>Fecha de actualización: {date}</kbd>
                </main>
                <hr/>
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-1/2" src={cover_image} alt='' />
            </section>

            <PostContainer>
                <Modal />
                <section dangerouslySetInnerHTML=
                    {{ __html: marked.parse(content), }}
                >

                </section>
                <hr />


            </PostContainer>


        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}