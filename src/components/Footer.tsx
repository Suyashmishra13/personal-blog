"use client";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-white/40 text-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                >
                    Personal Blog
                </motion.div>
                <p>&copy; {new Date().getFullYear()} Suyash Mishra. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
