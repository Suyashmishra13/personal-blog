import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { title, content, password, slug, excerpt } = await request.json();

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        const REPO_OWNER = "Suyashmishra13"; // Replace with actual username if dynamic
        const REPO_NAME = "personal-blog";
        const PATH = `src/content/${slug}.mdx`; // Saving as MDX

        if (!GITHUB_TOKEN) {
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const fileContent = `---
title: "${title}"
date: "${new Date().toISOString().split('T')[0]}"
excerpt: "${excerpt}"
---

${content}`;

        // 1. Get current SHA if file exists (to update) or null (to create)
        // For simplicity, we'll assume creating new files for now.

        const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${PATH}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: `Create post: ${title}`,
                content: Buffer.from(fileContent).toString("base64"),
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.message }, { status: response.status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
