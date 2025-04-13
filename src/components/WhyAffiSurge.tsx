"use client";

import { Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyAffiSurge() {
    return (
        <section className="bg-white py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Зображення */}
                <div className="relative w-full h-[300px] md:h-[380px]">
                    <Image
                        src="/images/hy-affisurge.webp"
                        alt="Why AffiSurge"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Текст */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-graphite leading-tight mb-4">
                        Why Team Up with <span className="text-orangeAccent">AffiSurge?</span>
                    </h2>
                    <p className="text-base text-graphite/80 leading-relaxed mb-3">
                        Our experienced team has helped brands across e-commerce, SaaS, and affiliate sectors scale with smart, conversion-focused strategies.
                    </p>
                    <p className="text-base text-graphite/80 leading-relaxed mb-6">
                        At AffiSurge, we go beyond marketing — we deliver performance. From driving traffic to generating leads, our tailored campaigns produce measurable impact.
                    </p>
                    <Button
                        size="md"
                        className="bg-orangeAccent hover:bg-orangeAccent/90 text-white px-5 py-3 rounded-md shadow-md flex items-center gap-2"
                    >
                        START SCALING NOW <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
