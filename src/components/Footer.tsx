"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-graphite text-lightBg py-10 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">AffiSurge</h3>
                    <p className="text-sm">Lykourgou 12, Athina 105 51, Greece</p>
                    <p className="text-sm">info@affisurge.com</p>
                </div>
                <div>
                    <h4 className="font-medium mb-2">Explore</h4>
                    <ul className="space-y-1">
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:opacity-75">Facebook</a>
                        <a href="#" className="hover:opacity-75">LinkedIn</a>
                        <a href="#" className="hover:opacity-75">Twitter</a>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 font-medium mb-2">
                        <Link href="/privacy-policy" className="hover:opacity-75">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:opacity-75">Cookies</Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-xs text-lightBg/60">© {new Date().getFullYear()} AffiSurge. All rights reserved.</div>
        </footer>
    );
}
