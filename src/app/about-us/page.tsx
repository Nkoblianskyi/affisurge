"use client";

import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    About Us
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    We are a passionate team of digital marketers who work with businesses of all sizes to drive growth through SEO, PPC, and more. Our goal is to help you succeed in the digital world by using cutting-edge strategies and delivering measurable results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24 mb-16">
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaUsers size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Teamwork</h3>
                        <p className="text-sm text-graphite/80">
                            We believe that collaboration is key. Our success comes from working together with clients and partners to create tailored strategies that bring results.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaLightbulb size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Innovation</h3>
                        <p className="text-sm text-graphite/80">
                            We are always looking for new ways to push the envelope. Our approach involves continuously adapting and implementing the latest trends and technologies in digital marketing.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaHandshake size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Integrity</h3>
                        <p className="text-sm text-graphite/80">
                            Transparency and trust are the foundation of our business. We are committed to building lasting relationships by always being honest, reliable, and ethical.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-80 md:h-96 mb-16">
                    <Image
                        src="/images/about-us.png"
                        alt="Our Team"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-graphite mb-6">
                    Our Mission
                </h3>
                <p className="text-sm md:text-base text-graphite/80 max-w-4xl mx-auto mb-12">
                    Our mission is to provide businesses with innovative and effective digital marketing strategies that not only increase online visibility but also drive measurable results. By focusing on SEO, PPC, social media marketing, and content creation, we help our clients grow and thrive in the digital world.
                </p>

                <div>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-md"
                        style={{
                            background: "linear-gradient(90deg, #7b8c65, #9cab8a)",
                            boxShadow: "0 6px 14px rgba(123, 140, 101, 0.35)",
                        }}
                    >
                        Get In Touch with Us <FaHandshake size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
