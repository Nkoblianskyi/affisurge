"use client";

import { Phone, BarChart2, Users, FileText, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ppcServices = [
    {
        icon: <Search size={40} className="text-orangeAccent" />,
        title: "Keyword research and selection",
        description:
            "We help identify the most relevant and cost-effective keywords for your PPC campaigns, ensuring you're targeting the right audience and maximizing results.",
    },
    {
        icon: <BarChart2 size={40} className="text-orangeAccent" />,
        title: "Campaign setup and optimization",
        description:
            "Our team sets up and optimizes campaigns, adjusting settings and budgets to deliver maximum ROI and achieve your business goals efficiently.",
    },
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Performance reporting and analysis",
        description:
            "Track and analyze campaign performance through detailed reports on key metrics like click-through rates, conversion rates, cost per conversion, and more.",
    },
    {
        icon: <FileText size={40} className="text-orangeAccent" />,
        title: "Ad copy creation",
        description:
            "Crafting compelling ad copies that align with your brand voice, driving users to take action and increasing your ad performance.",
    },
    {
        icon: <Phone size={40} className="text-orangeAccent" />,
        title: "Landing page optimization",
        description:
            "We ensure that your landing pages are designed to convert visitors into leads or customers, enhancing the user experience and improving overall campaign effectiveness.",
    },
];

export default function PPCPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Заголовок */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    PPC Services - Campaigns That Convert
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Unlock the potential of your business with our targeted PPC services. From strategy to performance reporting, we help you achieve exceptional ROI.
                </p>

                {/* Загальна ілюстрація */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/images/ppc-image.png" // Ваша загальна картинка
                        alt="PPC Services"
                        width={700}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Секція з PPC послугами */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {ppcServices.map((service, index) => (
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
                        Get in Touch for PPC Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
