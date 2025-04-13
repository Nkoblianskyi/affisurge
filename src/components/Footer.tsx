"use client";

import Link from "next/link";

const services = [
    { label: "All Services", href: "/services" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "PPC Services", href: "/services/ppc" },
    { label: "Affiliate Services", href: "/services/affiliate" },
    { label: "Content Services", href: "/services/content" },
    { label: "Social Media Services", href: "/services/social-media" },
];

export default function Footer() {
    return (
        <footer className="bg-graphite text-lightBg pt-14 pb-8 px-6 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">AffiSurge</h3>
                    <p className="text-sm leading-relaxed">Lykourgou 12, Athina 105 51, Greece</p>
                    <p className="text-sm mt-1">info@affisurge.com</p>
                </div>

                {/* Explore Links */}
                <div>
                    <h4 className="font-medium text-lg mb-3">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Services List */}
                <div>
                    <h4 className="font-medium text-lg mb-3">Our Services</h4>
                    <ul className="space-y-2 text-sm">
                        {services.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:underline ">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h4 className="font-medium text-lg mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="/cookies" className="hover:underline">Cookies</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 text-center text-xs text-lightBg/60">
                © {new Date().getFullYear()} AffiSurge. All rights reserved.
            </div>
        </footer>
    );
}
