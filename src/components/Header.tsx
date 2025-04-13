"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    { label: "All Services", href: "/services" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "PPC Services", href: "/services/ppc" },
    { label: "Affiliate Services", href: "/services/affiliate" },
    { label: "Content Services", href: "/services/content" },
    { label: "Social Media Services", href: "/services/social-media" },
];

export default function Header() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Додаємо тип для menuRef
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Закрити меню при кліку поза його межами
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Відкривати/закривати меню по кліку
    const toggleServicesMenu = () => {
        setIsServicesOpen(prevState => !prevState);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* ЛОГОТИП */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-khaki">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="text-khaki tracking-wide">AFFISURGE</span>
                </Link>

                {/* НАВІГАЦІЯ */}
                <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
                    <Link href="/" className="text-gray-800 hover:text-khaki transition">
                        Home
                    </Link>

                    {/* ДРОП */}
                    <div
                        className="relative"
                        ref={menuRef} // додаємо реф для меню
                    >
                        <button
                            className="flex items-center gap-1 text-khaki hover:text-khaki/90 transition"
                            onClick={toggleServicesMenu}
                        >
                            Services <ChevronDown size={16} />
                        </button>

                        {isServicesOpen && (
                            <div className="absolute top-full left-0 mt-3 bg-white rounded-lg shadow-xl w-64 p-5 z-50">
                                <ul className="space-y-3">
                                    {services.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="block text-sm text-khaki hover:underline transition"
                                                onClick={() => setIsServicesOpen(false)} 
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link href="/blog" className="text-gray-800 hover:text-khaki transition">
                        Blog
                    </Link>
                    <Link href="/about-us" className="text-gray-800 hover:text-khaki transition">
                        About Us
                    </Link>
                    <Link href="/contact-us" className="text-gray-800 hover:text-khaki transition">
                        Contact us
                    </Link>
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-md"
                        style={{
                            background: "linear-gradient(90deg, #7b8c65, #9cab8a)",
                            boxShadow: "0 6px 14px rgba(123, 140, 101, 0.35)",
                        }}
                    >
                        GET A QUOTE <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
