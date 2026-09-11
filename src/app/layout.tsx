import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import JsonLd from "@/components/seo/JsonLd";
import ThemeToggle from "@/components/common/ThemeToggle";
import { BUSINESS_CONFIG } from "@/data/business";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090c",
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.siteUrl),
  title: {
    default: "Har Har Taxi Services | Taxi Service in Jabalpur",
    template: "%s | Har Har Taxi Services",
  },
  description:
    "Book a taxi in Jabalpur for local and outstation travel. Har Har Taxi Services offers comfortable cars, professional drivers and easy phone/WhatsApp booking.",
  keywords: [
    "Taxi Service in Jabalpur",
    "Taxi Services in Jabalpur",
    "Best Taxi Service in Jabalpur",
    "Cab Service in Jabalpur",
    "Taxi Booking in Jabalpur",
    "Cab Booking in Jabalpur",
    "Local Taxi Jabalpur",
    "Outstation Taxi Jabalpur",
    "Airport Taxi Jabalpur",
    "Railway Station Taxi Jabalpur",
    "One Way Taxi Jabalpur",
    "Round Trip Taxi Jabalpur",
    "Car Rental in Jabalpur",
    "Jabalpur Cab Service"
  ],
  authors: [{ name: "Har Har Taxi Services" }],
  creator: "Har Har Taxi Services",
  publisher: "Har Har Taxi Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Har Har Taxi Services | Taxi Service in Jabalpur",
    description:
      "Reliable taxi service in Jabalpur for local and outstation trips. Clean AC cars, verified drivers, transparent per-km billing.",
    url: BUSINESS_CONFIG.siteUrl,
    siteName: BUSINESS_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Har Har Taxi Services | Taxi Service in Jabalpur",
    description:
      "Comfortable local and outstation taxi booking with professional drivers in Jabalpur. WhatsApp booking available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BUSINESS_CONFIG.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={BUSINESS_CONFIG.siteUrl} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
        <JsonLd pageType="Home" />
        <Navbar />
        <main className="flex-grow pt-16 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        {/* Floating Quick Theme Switcher */}
        <ThemeToggle variant="floating" />
      </body>
    </html>
  );
}
