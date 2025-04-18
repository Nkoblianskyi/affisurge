'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/getBlogPosts';

// Сторінка посту, що використовує use() для params
export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const posts = use(getBlogPosts()); // ⛔️ Але getBlogPosts async → тільки SSR. Альтернатива — передавати дані через props або cache

    const post = posts.find((p) => p.link.endsWith(slug));

    if (!post) return notFound();

    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-6">
                    {post.title}
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-8">{post.date}</p>
                <p className="text-base text-graphite/80 mb-8">{post.description}</p>

                {post.fullDescription && (
                    <div className="mb-8 text-base text-graphite/80">
                        {post.fullDescription.split('\n').map((para, idx) => (
                            <p key={idx} className="mb-4">{para}</p>
                        ))}
                    </div>
                )}

                {post.imgSrc && (
                    <div>
                        <Image
                            src={post.imgSrc}
                            alt={post.title}
                            width={800}
                            height={450}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
