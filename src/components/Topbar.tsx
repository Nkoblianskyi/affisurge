"use client";
import { Mail, MapPin } from "lucide-react";

export default function Topbar() {
    return (
        <div className="bg-khaki text-white text-sm py-2 px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                    <Mail size={16} /> info@affisurge.com
                </span>
                <span className="flex items-center gap-1">
                    <MapPin size={16} /> Athens, Greece
                </span>
            </div>
        </div>
    );
}