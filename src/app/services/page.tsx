"use client";

import { FaSearch, FaBullhorn, FaLaptop, FaHandshake, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    We offer a range of digital marketing services designed to help your business grow. From SEO and PPC to Affiliate Marketing, Content, and Social Media services, we tailor our approach to meet your needs.
                </p>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
                    {/* SEO Service */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaSearch size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">SEO Optimization</h3>
                        <p className="text-sm text-graphite/80">
                            We specialize in improving search engine rankings, increasing organic traffic, and optimizing your website for the best performance.
                        </p>
                        <Link href="/services/seo" className="text-orangeAccent hover:text-orangeAccent/90 transition">Learn More</Link>
                    </div>

                    {/* PPC Service */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaChartBar size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">PPC Campaigns</h3>
                        <p className="text-sm text-graphite/80">
                            Our pay-per-click strategies drive immediate traffic, enhance conversions, and improve ROI through targeted ad campaigns.
                        </p>
                        <Link href="/services/ppc" className="text-orangeAccent hover:text-orangeAccent/90 transition">Learn More</Link>
                    </div>

                    {/* Affiliate Service */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaBullhorn size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Affiliate Marketing</h3>
                        <p className="text-sm text-graphite/80">
                            Leverage affiliate partnerships to drive sales and traffic. We design programs that expand your reach and maximize performance.
                        </p>
                        <Link href="/services/affiliate" className="text-orangeAccent hover:text-orangeAccent/90 transition">Learn More</Link>
                    </div>

                    {/* Content Service */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaLaptop size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Content Creation</h3>
                        <p className="text-sm text-graphite/80">
                            Our content marketing services help create valuable, engaging content that attracts, informs, and converts your target audience.
                        </p>
                        <Link href="/services/content" className="text-orangeAccent hover:text-orangeAccent/90 transition">Learn More</Link>
                    </div>

                    {/* Social Media Service */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl space-y-4">
                        <FaHandshake size={40} className="text-orangeAccent mb-4" />
                        <h3 className="text-xl font-semibold text-graphite">Social Media Marketing</h3>
                        <p className="text-sm text-graphite/80">
                            Engage with your audience on social platforms like Facebook, Instagram, and LinkedIn to build brand loyalty and drive conversions.
                        </p>
                        <Link href="/services/social-media" className="text-orangeAccent hover:text-orangeAccent/90 transition">Learn More</Link>
                    </div>
                </div>

                {/* Section Image */}
                <div className="relative w-full h-80 md:h-96 mb-16 mt-16">
                    <Image
                        src="/images/services-image.png"
                        alt="Our Services"
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-contain rounded-lg"
                    />
                </div>

                {/* Services Overview */}
                <div className="text-center">
                    <p className="text-lg md:text-xl text-graphite/80 max-w-4xl mx-auto mb-12">
                        Whether you are looking to enhance your search engine rankings, drive more targeted traffic through PPC, or engage your audience through content and social media, we are here to help. Explore each service for more details.
                    </p>
                </div>

                {/* Contact Call to Action */}
                <div>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-md"
                        style={{
                            background: "linear-gradient(90deg, #7b8c65, #9cab8a)",
                            boxShadow: "0 6px 14px rgba(123, 140, 101, 0.35)",
                        }}
                    >
                        Get In Touch for Custom Solutions <FaHandshake size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
