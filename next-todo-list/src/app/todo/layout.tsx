"use client";
import Navbar from "@/components/layout/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TodoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextUIProvider>
            <div className="relative min-h-screen">
                <Navbar />
                <main className="relative max-h-screen h-screen">
                    <div className="w-full h-full pt-20">{children}</div>
                </main>
            </div>
        </NextUIProvider>
    );
}
