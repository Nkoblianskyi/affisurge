"use client";

import { Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-lightBg py-20 md:py-28 px-4 md:px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                <h1 className="text-3xl md:text-5xl font-extrabold text-graphite leading-tight md:leading-[1.2] tracking-tight">
                    Empowering Growth Through <br />
                    <span className="text-orangeAccent">Affiliate Marketing</span>
                </h1>

                <p className="text-base md:text-lg text-graphite/80 mt-6 max-w-xl">
                    Accelerate your success with intelligent, results-driven affiliate strategies built to grow with you.
                </p>

                <Link href="/contact-us">
                    <Button
                        size="md"
                        radius="md"
                        className="mt-10 px-6 py-3 text-white font-semibold text-sm bg-orangeAccent hover:bg-orangeAccent/90 shadow-lg transition-all flex items-center gap-2"
                    >
                        LET’S GROW TOGETHER <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
