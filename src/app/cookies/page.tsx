"use client";

export default function CookiesPage() {
    return (
        <section className="bg-lightBg py-20 px-6 md:px-20 text-graphite">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                <p className="text-lg mb-4">
                    This Cookie Policy explains how AffiSurge uses cookies and similar technologies when you visit our website. By using our site, you agree to the use of cookies as described in this policy.
                </p>

                {/* Section: What are cookies */}
                <h2 className="text-xl font-semibold mt-10 mb-2">What Are Cookies?</h2>
                <p className="mb-4">
                    Cookies are small text files stored on your device by your browser. They are widely used to make websites work more efficiently and to provide information to site owners.
                </p>

                {/* Section: Types of cookies */}
                <h2 className="text-xl font-semibold mt-10 mb-2">Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>
                        <strong>Essential Cookies:</strong> Required for the operation of our website. They include, for example, cookies that enable you to log into secure areas.
                    </li>
                    <li>
                        <strong>Performance Cookies:</strong> Help us understand how visitors use our site, so we can improve functionality and user experience.
                    </li>
                    <li>
                        <strong>Functional Cookies:</strong> Remember your preferences and settings to enhance your visit.
                    </li>
                    <li>
                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.
                    </li>
                </ul>

                {/* Section: Third-party cookies */}
                <h2 className="text-xl font-semibold mt-10 mb-2">Third-Party Cookies</h2>
                <p className="mb-4">
                    We may also use third-party services such as Google Analytics to collect and analyze usage data. These services may set their own cookies in accordance with their privacy policies.
                </p>

                {/* Section: Managing cookies */}
                <h2 className="text-xl font-semibold mt-10 mb-2">How to Manage Cookies</h2>
                <p className="mb-4">
                    You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.
                </p>

                <p className="mb-4">
                    To learn more about managing cookies, visit{" "}
                    <a
                        href="https://www.allaboutcookies.org/"
                        className="text-orangeAccent underline"
                        target="_blank"
                    >
                        www.allaboutcookies.org
                    </a>.
                </p>

                {/* Section: Updates */}
                <h2 className="text-xl font-semibold mt-10 mb-2">Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in law, technology, or our practices. The updated version will be posted on this page.
                </p>

                <p className="text-sm text-graphite/60 mt-12">
                    Last updated: April 2025
                </p>
            </div>
        </section>
    );
}
