"use client";

import { Phone, Globe, Users, FileText, Cloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Тип для зберігання значень трансформації
interface TransformData {
    translateX: number;
    translateY: number;
    rotate: number;
}

const expertise = [
    {
        icon: <Phone size={40} className="text-orangeAccent" />,
        title: "PPC Marketing",
        description:
            "Our team specializes in PPC campaigns that help you achieve maximum results. We optimize your campaigns to achieve the best ROI through analytics and precise targeting.",
        imgSrc: "/images/ppc-image.png",
    },
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Affiliate Marketing",
        description:
            "Affiliate marketing is at the heart of our strategy. We help create or optimize programs that work for your business. From development to scaling, we're here to deliver maximum results.",
        imgSrc: "/images/affiliate-image.png",
    },
    {
        icon: <FileText size={40} className="text-orangeAccent" />,
        title: "Content Marketing",
        description:
            "We create content that captivates and converts. Our content strategies help attract new clients through articles, blogs, and newsletters. Content is key to attracting and retaining your audience.",
        imgSrc: "/images/content-image.png",
    },
    {
        icon: <Globe size={40} className="text-orangeAccent" />,
        title: "SEO",
        description:
            "With our SEO strategies, your site will not only be visible but also popular in search engines. We develop and implement strategies to achieve high rankings in search results.",
        imgSrc: "/images/seo-image.png",
    },
    {
        icon: <Cloud size={40} className="text-orangeAccent" />,
        title: "Social Media Marketing",
        description:
            "Our social media strategies help brands build strong connections with their audience, driving organic traffic and paid campaigns to expand your digital influence.",
        imgSrc: "/images/social-media-image.png",
    },
];

export default function ExpertiseSection() {
    const [randomTransforms, setRandomTransforms] = useState<TransformData[]>([]);

    useEffect(() => {
        // Generate random transforms for each item
        setRandomTransforms(
            expertise.map(() => ({
                translateX: Math.random() * 10,
                translateY: Math.random() * 10,
                rotate: Math.random() * 15 - 7, // rotate between -7deg and 7deg
            }))
        );
    }, []);

    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24 relative">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Our Expertise: Marketing Solutions That Drive Results
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    We specialize in marketing solutions that deliver real results. Our expertise spans key channels such as SEO, PPC, and social media, helping you achieve the best outcomes.
                </p>

                {/* Expertise content with chaotic positioning */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24 relative">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-6 transform transition-all duration-300"
                            style={{
                                position: "relative",
                                zIndex: "0",
                                transform: `translate(${randomTransforms[index]?.translateX}px, ${randomTransforms[index]?.translateY}px) rotate(${randomTransforms[index]?.rotate}deg)`,
                            }}
                        >
                            <div className="absolute top-0 left-0 right-0 -z-10">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.title}
                                    width={300}
                                    height={200}
                                    className="object-cover rounded-lg opacity-30"
                                />
                            </div>
                            <div className="flex justify-center items-center bg-orangeAccent/10 p-4 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-graphite">{item.title}</h3>
                            <p className="text-sm text-graphite/80">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
