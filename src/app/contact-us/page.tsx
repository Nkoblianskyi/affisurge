'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Textarea, Button } from '@mantine/core';
import { Phone, User, Mail, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

const schema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(6, 'Phone number is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactUs() {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <section className="bg-lightBg py-16 px-6 md:py-28 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-graphite mb-4">
                    Join Us Today as a Partner!
                </h1>
                <p className="text-lg md:text-xl text-graphite/80 mb-12">
                    Discover the best growth opportunities and marketing support to elevate your business!
                </p>

                <form className="space-y-6 text-left" onSubmit={handleSubmit(onSubmit)}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">Full Name *</label>
                        <div className="relative">
                            <Input
                                {...register('fullName')}
                                size="lg"
                                radius="md"
                                placeholder="Enter your full name"
                                autoComplete="off"
                                classNames={{
                                    input: clsx(
                                        'w-full py-4 pl-12 pr-4 bg-lightBg border rounded-lg text-base focus:outline-none focus:ring-2',
                                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-khaki focus:ring-khaki'
                                    ),
                                }}
                            />
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki" />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">Email Address *</label>
                        <div className="relative">
                            <Input
                                {...register('email')}
                                type="email"
                                size="lg"
                                radius="md"
                                placeholder="Enter your email"
                                autoComplete="off"
                                classNames={{
                                    input: clsx(
                                        'w-full py-4 pl-12 pr-4 bg-lightBg border rounded-lg text-base focus:outline-none focus:ring-2',
                                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-khaki focus:ring-khaki'
                                    ),
                                }}
                            />
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki" />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">Phone Number *</label>
                        <div className="relative">
                            <Input
                                {...register('phone')}
                                type="tel"
                                size="lg"
                                radius="md"
                                placeholder="Enter your phone number"
                                autoComplete="off"
                                classNames={{
                                    input: clsx(
                                        'w-full py-4 pl-12 pr-4 bg-lightBg border rounded-lg text-base focus:outline-none focus:ring-2',
                                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-khaki focus:ring-khaki'
                                    ),
                                }}
                            />
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-khaki" />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-graphite mb-1">Message *</label>
                        <div className="relative">
                            <Textarea
                                {...register('message')}
                                size="lg"
                                radius="md"
                                placeholder="Type your message here..."
                                autoComplete="off"
                                minRows={6}
                                classNames={{
                                    input: clsx(
                                        'w-full py-4 pl-12 pr-4 bg-lightBg border rounded-lg text-base focus:outline-none focus:ring-2',
                                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-khaki focus:ring-khaki'
                                    ),
                                }}
                                styles={{ input: { resize: 'none' } }}
                            />
                            <MessageCircle size={18} className="absolute left-4 top-4 text-khaki" />
                        </div>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className="text-center pt-4">
                        <Button
                            type="submit"
                            size="lg"
                            loading={isSubmitting}
                            className="bg-orangeAccent hover:bg-orangeAccent/90 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 w-full sm:w-auto"
                        >
                            Send Message →
                        </Button>
                        {success && <p className="text-green-600 text-sm mt-2">Your message has been sent!</p>}
                    </div>
                </form>
            </div>
        </section>
    );
}
