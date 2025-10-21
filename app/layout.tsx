import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "KP Culinary Enterprises; Luxury Catering & Event Experiences",
  description:
    "KP Enterprises delivers unforgettable catering for weddings, corporate events, and private dinners. Book your event today!",
  keywords: [
    "Catering",
    "Luxury Events",
    "Weddings",
    "Corporate Catering",
    "Private Chef",
  ],
  authors: [{ name: "Mrs. Kelechi Pondi" }],
  openGraph: {
    title: "KP Culinary Enterprises Luxury Catering & Event Experiences",
    description:
      "From intimate dinners to grand events, KP Culinary crafts exquisite culinary experiences tailored to your occasion.",
    siteName: "KP Culinary",
    images: [
      {
        url: "/kp6.jpg",
        width: 1200,
        height: 630,
        alt: "KP Culinary Luxury Catering",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  metadataBase: new URL("https://kpcenterprises.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* SEO */}
        <link rel="canonical" href="https://kpcenterprises.com" />
        <meta
          name="description"
          content="KP Culinary delivers unforgettable catering for weddings, corporate events, and private dinners. Book your event today!"
        />
        <meta name="theme-color" content="#d4af37" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KP Culinary",
              image: "https://kpcenterprises.com/kp6.jpg",
              telephone: "+2347080215998",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot 2, 37th Street, DDPA Ugborikoko",
                addressLocality: "Uvwie",
                addressCountry: "NG",
              },
              url: "https://kpcenterprises.com",
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
