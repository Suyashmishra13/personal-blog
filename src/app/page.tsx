"use client";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

const blogs = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends in Next.js and React Server Components.",
        date: "2024-05-21",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        excerpt: "How to build beautiful, responsive layouts with utility classes.",
        date: "2024-05-18",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Why I Love TypeScript",
        excerpt: "Type safety is not just a feature, it's a lifestyle.",
        date: "2024-05-15",
        readTime: "4 min read",
    },
];

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center p-6 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                    My Personal Blog
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Thoughts, stories, and ideas on technology, design, and life.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {blogs.map((blog, index) => (
                    <SpotlightCard key={blog.id} className="h-full">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 h-full flex flex-col"
                        >
                            <div className="flex justify-between items-center text-xs text-white/40 mb-4">
                                <span>{blog.date}</span>
                                <span>{blog.readTime}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {blog.title}
                            </h2>
                            <p className="text-white/70 leading-relaxed flex-grow">
                                {blog.excerpt}
                            </p>
                        </motion.article>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}
