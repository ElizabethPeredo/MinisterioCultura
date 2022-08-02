import Link from "next/link";
import Pie from "../Pie/Pie";

export default function Card({ post }) {
    return (
        <>
            <div className={`card-post ${post.frontmatter.type}`}>
                <div className="m-6 flex flex-col bg-white rounded-lg border shadow-lg dark:bg-white">
                    <div className="relative">
                        <div className="absolute m-1 align-center flex justify-center">
                            <Pie percentage={`${post.frontmatter.avance}`} colour="green" />
                        </div>
                        <img className="object-cover w-full max-h-48 rounded-t-lg" src={post.frontmatter.cover_image} alt="" />

                    </div>
                    <div className="py-3 px-6 h-auto">
                        <span className="card-tag inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-color1 mr-2 mb-2">{post.frontmatter.type}</span>

                        <p className="mb-2 text-coolGray-500 dark:text-principal font-medium" data-config-id="auto-txt-15-1" data-path="0.0.2.1.2">{post.frontmatter.date}</p>

                        <h5 className="leading-6 mb-2 text-txt-color1 dark:text-principal">{post.frontmatter.title}</h5>

                        <h6 className="block text-lg font-bold text-txt-color1 dark:text-principal mr-2 mb-2">PIM: {post.frontmatter.pim}</h6>

{/*
                        <div className="m-1 align-center flex justify-center">
                            <Pie percentage={`${post.frontmatter.avance}`} colour="green" />
                        </div>
*/}

                        <Link href={`/blog/${post.slug}`}>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-color2 rounded-lg hover:bg-hv-color2 focus:ring-4 focus:outline-none focus:ring-color2-300 dark:bg-color2 dark:hover:bg-hv-color1">Leer más</a>
                        </Link>


                    </div>
                </div>
            </div>
        </>





    )
}