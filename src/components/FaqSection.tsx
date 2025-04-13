"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is affiliate marketing?",
        answer:
            "Affiliate marketing is a performance-based marketing strategy where businesses reward affiliates for generating sales or leads through their marketing efforts.",
    },
    {
        question: "How do I start an SEO campaign?",
        answer:
            "Starting an SEO campaign involves identifying keywords, optimizing website content, improving technical aspects of the site, and building high-quality backlinks to increase search engine rankings.",
    },
    {
        question: "What is the importance of social media in marketing?",
        answer:
            "Social media is essential for brand visibility and engagement. It allows businesses to connect with a larger audience, create relationships with customers, and drive traffic to websites through organic and paid strategies.",
    },
    {
        question: "How can content marketing help my business?",
        answer:
            "Content marketing helps build brand authority and trust by providing valuable, informative content to your audience. It helps in educating potential customers, nurturing leads, and improving conversions.",
    },
    {
        question: "Why should I use PPC advertising?",
        answer:
            "PPC (Pay-Per-Click) advertising provides businesses with immediate visibility in search results. It's a great way to drive targeted traffic to your website and quickly measure the effectiveness of your marketing efforts.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-lightBg py-20 px-6 md:py-32 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-graphite/80 mb-16">
                    Here are some frequently asked questions that might help clarify our services.
                </p>

                {/* FAQ list */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-lg font-semibold text-graphite">{faq.question}</h3>
                                <span className="text-xl text-orangeAccent">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </div>

                            {openIndex === index && (
                                <p className="mt-4 text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
