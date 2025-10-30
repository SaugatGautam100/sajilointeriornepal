import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script'; // Import the Script component
import './globals.css';
import AdSense from '@/components/AdSense'; // Assuming this component is correctly implemented

export const metadata: Metadata = {
  title: {
    default: 'Sajilo Interior - Your Dream Home Interior Solutions', // Stronger, more descriptive default title
    template: '%s | Sajilo Interior', // Template for dynamic page titles
  },
  description: 'Sajilo Interior offers bespoke interior design services in Nepal for homes and offices. From modern to traditional styles, we bring your vision to life with expert craftsmanship and innovative solutions. Get a free consultation today!', // More detailed and keyword-rich description
  keywords: ['Sajilo Interior', 'interior design Nepal', 'home interior Nepal', 'office interior Nepal', 'modern interior design', 'traditional interior design', 'interior decoration Kathmandu', 'best interior designers Nepal', 'interior solutions', 'custom interior design', 'residential interior', 'commercial interior'], // Added relevant keywords
  generator: 'Saugat Gautam and Sachnedra Shrestha',
  applicationName: 'Sajilo Interior',
  referrer: 'origin-when-cross-origin',
  creator: 'Saugat Gautam and Sachnedra Shrestha',
  publisher: 'Sajilo Interior',
  // Open Graph / Social Media Metadata (Crucial for sharing)
  openGraph: {
    title: 'Sajilo Interior - Your Dream Home Interior Solutions',
    description: 'Sajilo Interior offers bespoke interior design services in Nepal for homes and offices. From modern to traditional styles, we bring your vision to life with expert craftsmanship and innovative solutions.',
    url: 'https://www.sajilointerior.com', // Replace with your actual domain
    siteName: 'Sajilo Interior',
    images: [
      {
        url: 'https://www.sajilointerior.com/og-image.jpg', // Path to your Open Graph image (e.g., a logo or a beautiful interior design image)
        width: 1200,
        height: 630,
        alt: 'Sajilo Interior Logo and Beautiful Interior Design',
      },
      // You can add more images if needed
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter Card Metadata
  twitter: {
    card: 'summary_large_image',
    site: '@sajilointerior', // Your Twitter handle
    creator: '@saugatgautam', // Creator's Twitter handle
    title: 'Sajilo Interior - Your Dream Home Interior Solutions',
    description: 'Sajilo Interior offers bespoke interior design services in Nepal for homes and offices. From modern to traditional styles, we bring your vision to life with expert craftsmanship and innovative solutions.',
    images: ['https://www.sajilointerior.com/twitter-image.jpg'], // Path to your Twitter card image
  },
  // Canonical URL (optional, but good for SEO if you have similar content on different URLs)
  // You would typically set this dynamically in individual pages if needed
  // canonical: 'https://www.sajilointerior.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="-OMmEc1st9KCDiuGl0QbuSTEuRerGyNXlv5Jjj2DswA" />
      <meta name="google-adsense-account" content="ca-pub-5473443896068638" />
        {/* Google AdSense verification code - placed directly in <head> for immediate loading */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5473443896068638"
          crossOrigin="anonymous"
          strategy="afterInteractive" // 'afterInteractive' is a good balance for AdSense
        />
        {/* You might want to remove the AdSense component if you're directly including the script here,
            or ensure your AdSense component handles the script loading properly.
            If AdSense component is for displaying ad units, keep it. */}
      </head>
      <body>
        <Analytics />
        {children}
        {/* If AdSense component is for displaying ad units on specific pages, keep it */}
        {/* <AdSense pId='pub-5473443896068638'/> */}
      </body>
    </html>
  )
}