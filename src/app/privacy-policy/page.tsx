"use client";

export default function PrivacyPolicyPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:px-20 text-graphite">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-lg mb-4">
                    We are committed to protecting your personal data and ensuring your privacy is respected.
                </p>

                <h2 className="text-xl font-semibold mt-10 mb-2">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Personal identification information (name, email address, phone number, etc.)</li>
                    <li>Usage data (pages visited, time spent on site, interactions)</li>
                    <li>Cookies and tracking technologies</li>
                </ul>

                <h2 className="text-xl font-semibold mt-10 mb-2">How We Use Your Information</h2>
                <p className="mb-4">
                    We use your data to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Provide and improve our services</li>
                    <li>Send newsletters or marketing updates (only with your consent)</li>
                    <li>Analyze usage for better performance</li>
                </ul>

                <h2 className="text-xl font-semibold mt-10 mb-2">Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, or delete your personal data. You may also object to certain processing activities.
                </p>

                <h2 className="text-xl font-semibold mt-10 mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this policy, please contact us at <a href="mailto:info@affisurge.com" className="text-orangeAccent underline">info@affisurge.com</a>.
                </p>

                <p className="text-sm text-graphite/60 mt-12">
                    Last updated: April 2025
                </p>
            </div>
        </section>
    );
}
