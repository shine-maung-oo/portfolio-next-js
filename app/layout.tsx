import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "./globals.css";
import "@/public/assets/css/style.css";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { Download } from "@/components/download";
import { ReduxProvider } from "@/store/reduxProvider";
import HelperScript from "@/utils/helperScript";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
  icons: {
    icon: [
      // { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <HelperScript />
        <ReduxProvider>
          <main>
            <Sidebar />
            <div className="main-content">
              <Navbar />
              {children}
              <SpeedInsights />
              <Download />
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
