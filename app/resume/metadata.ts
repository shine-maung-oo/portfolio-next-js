import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Resume | Shine Maung Oo",
  description:
    "Download and view Shine Maung Oo’s resume. Experience, education, and technical skills.",
  openGraph: {
    title: "Resume | Shine Maung Oo",
    description: "Download and view Shine Maung Oo’s resume.",
    url: "https://shinemaungoo.vercel.app/resume",
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