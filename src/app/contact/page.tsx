"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl glass-panel p-8"
            >
                <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
                <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-white/5 rounded-lg overflow-hidden">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfD-F9w-F9w-F9w/viewform?embedded=true"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        className="w-full h-full"
                    >
                        Loading…
                    </iframe>
                </div>
            </motion.div>
        </main>
    );
}
