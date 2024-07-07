"use client";

import CkEditor from "./components/Editor/page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6">
            <CkEditor />
        </main>
    );
}
