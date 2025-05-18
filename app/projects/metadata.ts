// /app/projects/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shine Maung Oo",
  description:
    "Explore a collection of Shine Maung Oo’s projects, showcasing skills and accomplishments in web development and design.",
  openGraph: {
    title: "Projects | Shine Maung Oo",
    description: "Explore a collection of Shine Maung Oo’s projects.",
    url: "https://shinemaungoo.vercel.app/projects",
    siteName: "Shine Maung Oo Portfolio",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Projects - Shine Maung Oo",
      },
    ],
  },
  robots: "index,follow",
};
