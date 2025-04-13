"use client";

import { Input, Textarea, Button } from "@mantine/core";
import { Phone, User, Mail, MessageCircle } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="bg-lightBg py-16 px-6 md:py-28 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-graphite mb-4">
                    Join Us Today as a Partner!
                </h1>
                <p className="text-lg md:text-xl text-graphite/80 mb-12">
                    Discover the best growth opportunities and marketing support to elevate your business!
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">
                            Full Name *
                        </label>
                        <div className="relative">
                            <Input
                                size="lg"
                                radius="md"
                                placeholder="Enter your full name"
                                autoComplete="off"
                                classNames={{
                                    input:
                                        "w-full py-4 pl-12 pr-4 bg-lightBg border border-khaki rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-khaki",
                                }}
                            />
                            <User
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">
                            Email Address *
                        </label>
                        <div className="relative">
                            <Input
                                size="lg"
                                radius="md"
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="off"
                                classNames={{
                                    input:
                                        "w-full py-4 pl-12 pr-4 bg-lightBg border border-khaki rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-khaki",
                                }}
                            />
                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">
                            Phone Number *
                        </label>
                        <div className="relative">
                            <Input
                                size="lg"
                                radius="md"
                                type="tel"
                                placeholder="Enter your phone number"
                                autoComplete="off"
                                classNames={{
                                    input:
                                        "w-full py-4 pl-12 pr-4 bg-lightBg border border-khaki rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-khaki",
                                }}
                            />
                            <Phone
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">
                            Message *
                        </label>
                        <div className="relative">
                            <Textarea
                                size="lg"
                                radius="md"
                                placeholder="Type your message here..."
                                autoComplete="off"
                                minRows={6}
                                classNames={{
                                    input:
                                        "w-full py-4 pl-12 pr-4 bg-lightBg border border-khaki rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-khaki",
                                }}
                                styles={{
                                    input: {
                                        resize: "none",
                                    },
                                }}
                            />
                            <MessageCircle
                                size={18}
                                className="absolute left-4 top-4 text-khaki"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="text-center pt-4">
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-orangeAccent hover:bg-orangeAccent/90 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 w-full sm:w-auto"
                        >
                            Send Message →
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
