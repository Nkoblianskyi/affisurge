"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../page";

export default function BlogPost() {
    const params = useParams();
    const slug = params?.slug;

    if (!slug) return <p>Loading...</p>;

    // Знаходимо пост за slug (порівнюємо з кінцем лінка)
    const post = blogPosts.find((post) => post.link.endsWith(slug as string));

    if (!post) return <p>Post not found.</p>;

    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-6">
                    {post.title}
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-8">{post.date}</p>

                <p className="text-base text-graphite/80 mb-8">{post.description}</p>

                <div className="mb-8">
                    <p className="text-base text-graphite/80">{post.fullDescription}</p>
                </div>

                <div>
                    <Image
                        src={post.imgSrc}
                        alt={post.title}
                        width={800}
                        height={450}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
