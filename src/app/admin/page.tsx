"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Admin() {
    const [formData, setFormData] = useState({
        password: "",
        title: "",
        slug: "",
        excerpt: "",
        content: "",
    });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Saving...");

        try {
            const res = await fetch("/api/create-post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Success! Post created.");
                setFormData({ ...formData, title: "", slug: "", excerpt: "", content: "" });
            } else {
                const data = await res.json();
                setStatus(`Error: ${data.error}`);
            }
        } catch (error) {
            setStatus("Error: Failed to connect.");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl glass-panel p-8"
            >
                <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="password"
                        placeholder="Admin Password"
                        className="p-3 rounded bg-white/5 border border-white/10 text-white"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Post Title"
                        className="p-3 rounded bg-white/5 border border-white/10 text-white"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Slug (e.g., my-new-post)"
                        className="p-3 rounded bg-white/5 border border-white/10 text-white"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Excerpt"
                        className="p-3 rounded bg-white/5 border border-white/10 text-white h-24"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Content (Markdown)"
                        className="p-3 rounded bg-white/5 border border-white/10 text-white h-64 font-mono"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="p-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors"
                    >
                        Create Post
                    </button>
                    {status && <p className="text-center mt-4 text-white/80">{status}</p>}
                </form>
            </motion.div>
        </main>
    );
}
