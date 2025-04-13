"use client";

import { FileText, PenTool, Search, BarChart2, Users, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contentServices = [
    {
        icon: <FileText size={40} className="text-orangeAccent" />,
        title: "Content strategy development",
        description:
            "We help you build a customized content marketing strategy aligned with your business goals, ensuring it generates engagement and measurable results.",
    },
    {
        icon: <PenTool size={40} className="text-orangeAccent" />,
        title: "Content creation",
        description:
            "Our team crafts high-quality content, from blog posts and articles to infographics and social media content, aimed at attracting and engaging your target audience.",
    },
    {
        icon: <Search size={40} className="text-orangeAccent" />,
        title: "Content optimization",
        description:
            "We optimize your content for search engines and social media platforms, improving visibility and ensuring your content reaches the right audience at the right time.",
    },
    {
        icon: <BarChart2 size={40} className="text-orangeAccent" />,
        title: "Content distribution",
        description:
            "We ensure your content reaches the widest possible audience by distributing it across the best-performing channels, including social media, email, and paid advertising.",
    },
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Content management",
        description:
            "Our team manages your content pipeline and workflows, ensuring consistency and quality across all platforms while improving operational efficiency.",
    },
    {
        icon: <Phone size={40} className="text-orangeAccent" />,
        title: "Content marketing consulting",
        description:
            "We provide expert guidance on content marketing strategies, tactics, and best practices to help you align your content with your business goals.",
    },
];

export default function ContentServicesPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Заголовок */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Content Services That Actually Work
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Unlock the full potential of your content with our specialized services. We craft personalized strategies that drive traffic, engagement, and conversions.
                </p>

                {/* Загальна ілюстрація */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/images/seo-content.png"
                        alt="Content Services"
                        width={700}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Секція з Content послугами */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {contentServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-6"
                        >
                            <div className="flex justify-center items-center bg-orangeAccent/10 p-4 rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-graphite">{service.title}</h3>
                            <p className="text-sm text-graphite/80">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Заклик до дії */}
                <div className="mt-16">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-md"
                        style={{
                            background: "linear-gradient(90deg, #7b8c65, #9cab8a)",
                            boxShadow: "0 6px 14px rgba(123, 140, 101, 0.35)",
                        }}
                    >
                        Get in Touch for Content Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
