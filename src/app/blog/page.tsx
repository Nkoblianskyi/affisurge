"use client";

import Image from "next/image";
import Link from "next/link";

export const blogPosts = [
    {
        title: "Maximizing Your ROI with SEO Strategies",
        date: "April 15, 2025",
        description:
            "Learn how to utilize the best SEO practices to maximize your ROI. Our guide covers advanced strategies that will help your business thrive in search rankings.",
        fullDescription:
            "Maximizing ROI with SEO strategies involves a series of on-page and off-page tactics. From improving keyword targeting, creating high-quality content, to optimizing user experience, all of these elements contribute to achieving a significant return on investment. By implementing these strategies, you can gain higher rankings and attract more organic traffic, ultimately boosting your ROI.",
        imgSrc: "/images/seo-strategies.png",
        link: "/blog/maximizing-roi-seo-strategies",
    },
    {
        title: "The Power of PPC Campaigns in 2025",
        date: "April 18, 2025",
        description:
            "Discover the power of PPC campaigns for your business. This article explores how to build highly effective PPC strategies that drive qualified traffic to your site.",
        fullDescription:
            "PPC campaigns, when done right, can generate immediate results by targeting users actively searching for products or services you offer. In 2025, it's essential to leverage the latest ad platforms and algorithms to drive qualified traffic. Through smart targeting, optimized bidding strategies, and compelling ad copy, businesses can increase conversions and maximize their ad spend efficiency.",
        imgSrc: "/images/ppc-image.png",
        link: "/blog/power-of-ppc-campaigns",
    },
    {
        title: "Affiliate Marketing: Growing Your Business Through Partnerships",
        date: "April 20, 2025",
        description:
            "Affiliate marketing is one of the most powerful tools for driving business growth. Learn how to develop effective affiliate programs and grow your network.",
        fullDescription:
            "Affiliate marketing allows you to leverage the reach and influence of others to drive traffic and sales to your website. By partnering with influencers, content creators, and other businesses, you can expand your audience and increase your revenue. This article explores how to create an effective affiliate program, track affiliate performance, and optimize for maximum success.",
        imgSrc: "/images/affiliate-marketing.png",
        link: "/blog/growing-with-affiliate-marketing",
    },
    {
        title: "Creating Compelling Content for Better Engagement",
        date: "April 22, 2025",
        description:
            "Content is king. Learn how to craft content that engages and converts your audience. Our guide shows how to create high-impact articles, blogs, and videos.",
        fullDescription:
            "Compelling content helps to grab the attention of your audience and keep them engaged. In this article, we’ll explore strategies for creating engaging blog posts, articles, and videos that will not only attract your audience but also persuade them to take action. We will focus on the importance of value-driven content and how it can lead to long-term success for your brand.",
        imgSrc: "/images/content-creation.png",
        link: "/blog/creating-compelling-content",
    },
    {
        title: "Building a Strong Online Presence with Social Media Marketing",
        date: "April 25, 2025",
        description:
            "In this article, we explore how to leverage social media platforms to create a powerful online presence that engages and retains customers.",
        fullDescription:
            "Social media marketing is an essential part of digital marketing strategies. This article will walk you through the process of building a strong social media presence for your brand. By understanding your audience and creating content tailored to each platform, you can drive engagement, build brand loyalty, and generate conversions through organic and paid campaigns.",
        imgSrc: "/images/social-media-marketing.png",
        link: "/blog/social-media-marketing-strategy",
    },
    {
        title: "How to Optimize Your Website for Mobile Users",
        date: "April 28, 2025",
        description:
            "With the growing importance of mobile usage, this article offers key insights into optimizing your website for mobile devices to ensure a seamless user experience.",
        fullDescription:
            "As mobile usage continues to increase, optimizing your website for mobile devices is more important than ever. In this article, we will cover the key aspects of mobile optimization, such as responsive design, fast loading times, and improved usability. We’ll also show you how to enhance the mobile experience to improve user engagement and drive more conversions.",
        imgSrc: "/images/mobile-optimization.png",
        link: "/blog/mobile-optimization-strategy",
    },
];

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
