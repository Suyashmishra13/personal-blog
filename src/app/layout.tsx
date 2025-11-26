import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Personal Blog",
    description: "My personal thoughts and writings",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "bg-black text-white min-h-screen flex flex-col")}>
                <Navbar />
                <CustomCursor />
                <div className="flex-grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
