"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const seoServices = [
    {
        title: "On-page optimization",
        description:
            "We ensure that the content of your website is well-optimized, improving the user experience and keeping the search engines in mind.",
        imgSrc: "/images/seo-on-page.png",
    },
    {
        title: "Keyword research",
        description:
            "Through comprehensive keyword research, we identify the best opportunities to target for your business and help you rank higher in search results.",
        imgSrc: "/images/seo-keyword-research.png",
    },
    {
        title: "Content strategy & Content creation",
        description:
            "After creating a content strategy, we optimize your website’s content, providing high-quality articles, blogs, and videos that engage users.",
        imgSrc: "/images/seo-content.png",
    },
    {
        title: "Competitor research",
        description:
            "We analyze your competitors, identifying their strengths and weaknesses, and formulate strategies to outperform them in search rankings.",
        imgSrc: "/images/seo-competitor.png",
    },
    {
        title: "Site audit",
        description:
            "A detailed technical audit of your site helps us identify potential issues that could be hindering your website’s performance and rankings.",
        imgSrc: "/images/seo-site-audit.png",
    },
    {
        title: "Off-page optimization",
        description:
            "We focus on building backlinks and creating an off-page strategy that helps to boost your website’s authority and increase its online presence.",
        imgSrc: "/images/seo-off-p.png",
    },
    {
        title: "Reporting",
        description:
            "We provide detailed reports on your website’s performance, tracking your rankings, traffic, and other critical SEO metrics to ensure long-term success.",
        imgSrc: "/images/seo-reporting.png",
    },
];

export default function SEOServicesPage() {
    return (
        <section className="bg-lightBg py-16 md:py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Mind-Blowing SEO Services - Dominate the SERP
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Unlock your websites full potential with our powerful SEO strategies.
                    We specialize in optimizing websites to drive traffic and achieve high
                    search engine rankings.
                </p>

                {/* SEO Services Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {seoServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-6 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={service.imgSrc}
                                    alt={service.title}
                                    width={300}
                                    height={200}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="object-center"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-graphite">{service.title}</h3>
                            <p className="text-sm text-graphite/80">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-md"
                        style={{
                            background: "linear-gradient(90deg, #7b8c65, #9cab8a)",
                            boxShadow: "0 6px 14px rgba(123, 140, 101, 0.35)",
                        }}
                    >
                        Get in Touch for SEO Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
