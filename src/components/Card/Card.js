import Link from "next/link";

export default function Card({ post }) {
    return (

        <>
            <div className={`card-post ${post.frontmatter.type} m-6 flex flex-col bg-white rounded-lg border shadow-lg w-3/4 md:flex-row md:min-w-3xl md:max-w-3xl lg:max-w-2xl dark:bg-white`}>

                <img className="object-cover rounded-t-lg h-52 md:w-2/6 md:h-auto md:rounded-none md:rounded-l-lg" src={post.frontmatter.cover_image} alt="" />

                <div className="py-3 px-6 md:w-4/6">

                    <span className="card-tag inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-color1 mr-2 mb-2">{post.frontmatter.type}</span>

                    <p className="mb-2 text-coolGray-500 dark:text-principal font-medium" data-config-id="auto-txt-15-1" data-path="0.0.2.1.2">{post.frontmatter.date}</p>

                    <h5 className="leading-6 mb-2 text-txt-color1 dark:text-principal">{post.frontmatter.title}</h5>

                    <span className="block text-lg font-bold text-txt-color1 dark:text-principal mr-2 mb-2">PIM: {post.frontmatter.pim}</span>

                    <Link href={`/blog/${post.slug}`}>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-color2 rounded-lg hover:bg-color2-800 focus:ring-4 focus:outline-none focus:ring-color2-300 dark:bg-color2-600 dark:hover:bg-hv-color1 dark:focus:ring-color2-800">Leer más</a>
                    </Link>
                </div>
            </div>
        </>





    )
}