"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleConsent = (choice: "accepted" | "rejected") => {
        localStorage.setItem("cookie-consent", choice);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-graphite text-white px-4 py-6 md:px-8 z-50 shadow-md">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm md:text-base">
                    We use cookies to enhance your experience. Read more in our{" "}
                    <Link href="/cookies" className="underline text-orangeAccent hover:text-orangeAccent/80">
                        Cookie Policy
                    </Link>
                    .
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleConsent("accepted")}
                        className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleConsent("rejected")}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
}
