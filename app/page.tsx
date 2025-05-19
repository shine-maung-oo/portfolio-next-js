import dynamic from "next/dynamic";
import { Metadata } from "next";

const AboutClient = dynamic(() => import("./AboutClient"), { ssr: true });

export const metadata: Metadata = {
  title: "Shine Maung Oo",
  description:
    "I'm web developer from Yangon, Myanmar,cworking in web development for website, web software and web application. I enjoy turning complex problems into simple, beautiful and intuitive designs",
  openGraph: {
    title: "Shine Maung Oo",
    description:
      "I'm web developer from Yangon, Myanmar,cworking in web development for website, web software and web application. I enjoy turning complex problems into simple, beautiful and intuitive designs",
    url: "https://shinemaungoo.vercel.app",
    siteName: "Shine Maung Oo Portfolio",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Resume - Shine Maung Oo",
      },
    ],
  },
  robots: "index,follow",
};

export default function Home() {
  return <AboutClient />;
}
