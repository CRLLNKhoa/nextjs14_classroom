import React from "react";
import Nav from "@/components/voteComponent/Nav"
import Footer from "@/components/voteComponent/Footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

	title: {
		template: "%s | Daily Vote",
		default: "Daily Vote",
	},
	authors: {
		name: "Lương Khoa",
	},

	description:
		"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
	openGraph: {
		title: "Daily Vote",
		description:
			"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "Daily Vote",
		images: "/logo.svg",
		type: "website",
	},
	keywords: ["luongkhoa"],
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <div className="max-w-lg lg:max-w-5xl w-[1200px] flex flex-col p-4">
        <Nav />
        {children}
        <Footer />
      </div>
    </main>
  );
}
