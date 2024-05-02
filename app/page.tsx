"use client";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push("/auth/login"), 50);
    }, [router]);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-100">
            <Spin size="large" />
        </main>
    );
}
