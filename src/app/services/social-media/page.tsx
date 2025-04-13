"use client";

import { Users, Share2, MessageCircle, BarChart2, Target, Sliders, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialMediaServices = [
    {
        icon: <Users size={40} className="text-orangeAccent" />,
        title: "Account setup and optimization",
        description:
            "We help you create and optimize social media accounts to ensure maximum visibility and engagement for your business.",
    },
    {
        icon: <Share2 size={40} className="text-orangeAccent" />,
        title: "Content creation",
        description:
            "Our team creates engaging and relevant content for your social media platforms, including posts, stories, videos, and more.",
    },
    {
        icon: <MessageCircle size={40} className="text-orangeAccent" />,
        title: "Engagement with followers",
        description:
            "We engage with your followers through comments, direct messages, and other forms of interaction to build brand loyalty and community.",
    },
    {
        icon: <BarChart2 size={40} className="text-orangeAccent" />,
        title: "Social media strategy development and planning",
        description:
            "We help you develop a comprehensive social media strategy aligned with your overall marketing goals and business objectives.",
    },
    {
        icon: <Target size={40} className="text-orangeAccent" />,
        title: "Social media advertising",
        description:
            "We create and manage paid advertising campaigns on social media platforms to reach a wider audience and promote your products or services.",
    },
    {
        icon: <Sliders size={40} className="text-orangeAccent" />,
        title: "Analytics and reporting",
        description:
            "We track the performance of your social media campaigns and provide detailed reports on key metrics such as engagement, reach, and conversions.",
    },
];

export default function SocialMediaServicesPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Заголовок */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Conquer With Our Social Media Services
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Expand your brands reach and increase leads with our specialized social media services.
                </p>

                {/* Загальна ілюстрація */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/images/social-media-image.png"
                        alt="Social Media Services"
                        width={700}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Секція з Social Media послугами */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {socialMediaServices.map((service, index) => (
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
                        Get in Touch for Social Media Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
