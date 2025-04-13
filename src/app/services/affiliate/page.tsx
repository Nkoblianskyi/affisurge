"use client";

import { Users, FileText, Search, Phone, BarChart2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const affiliateServices = [
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Affiliate program management",
        description:
            "We design and manage affiliate programs that drive results. From recruiting affiliates to managing relationships, we handle it all.",
    },
    {
        icon: <Search size={40} className="text-orangeAccent" />,
        title: "Affiliate marketing strategy",
        description:
            "We create and implement custom affiliate marketing strategies that help you grow your business, increase sales, and scale your affiliate program.",
    },
    {
        icon: <FileText size={40} className="text-orangeAccent" />,
        title: "Content creation",
        description:
            "We produce high-quality content that engages your audience, including blogs, articles, reviews, and promotional materials that amplify affiliate conversions.",
    },
    {
        icon: <Phone size={40} className="text-orangeAccent" />,
        title: "Influencer outreach",
        description:
            "Reach out to top influencers in your industry and build mutually beneficial relationships to expand the reach of your affiliate marketing program.",
    },
    {
        icon: <BarChart2 size={40} className="text-orangeAccent" />,
        title: "Compliance monitoring",
        description:
            "Ensure that all affiliates comply with your brand guidelines and legal requirements. We monitor affiliate activities to safeguard your reputation.",
    },
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Technical implementation",
        description:
            "Our team provides full technical support to implement affiliate tracking, analytics, and digital marketing solutions to maximize your marketing ROI.",
    },
    {
        icon: <FileText size={40} className="text-orangeAccent" />,
        title: "Reporting",
        description:
            "We offer detailed reporting and insights into affiliate performance, tracking conversions, sales, and ROI to help you make data-driven decisions.",
    },
];

export default function AffiliateServicesPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Заголовок */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Affiliate Services That Deliver. Fast.
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Boost your affiliate marketing efforts with our expert solutions. From creating affiliate programs to managing partnerships, we’re here to deliver results.
                </p>

                {/* Загальна ілюстрація */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/images/affiliate-image.png"
                        alt="Affiliate Services"
                        width={700}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Секція з Affiliate послугами */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {affiliateServices.map((service, index) => (
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
                        Get in Touch for Affiliate Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
