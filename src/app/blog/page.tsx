"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../../public/mocks/blog-post";



export default function BlogPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Marketing Insights Blog
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Stay updated with the latest trends, strategies, and case studies in the world of digital marketing,
                    SEO, and PPC campaigns. Read expert opinions and insights to boost your marketing efforts.
                </p>

                {/* Статті */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-6"
                        >
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={post.imgSrc}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-graphite">{post.title}</h3>
                            <p className="text-sm text-graphite/80">{post.description}</p>
                            <Link
                                href={post.link}
                                className="text-orangeAccent hover:text-orangeAccent/90 transition"
                            >
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
