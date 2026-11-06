import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://33alireza.github.io/Me/"),
    title: {
        default: "Alireza Yousefzadeh — Software Engineer",
        template: "%s | Alireza Yousefzadeh",
    },
    description: "Software Engineer & Geek - Building high-quality web & mobile applications and contributing to open-source projects.",
    openGraph: {
        title: "Alireza Yousefzadeh — Software Engineer",
        description: "Software Engineer & Geek - Building high-quality web & mobile applications and contributing to open-source projects.",
        url: "https://33alireza.github.io/Me/",
        siteName: "Alireza Yousefzadeh Portfolio",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Alireza Yousefzadeh — Software Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alireza Yousefzadeh — Software Engineer",
        description: "Software Engineer & Geek - Building high-quality web & mobile applications and contributing to open-source projects.",
        creator: "@AlirezaYouDev",
        images: ["/opengraph-image"],
    },
    icons: {
        icon: "/icon.svg",
        apple: "/apple-icon",
    },
};

export const viewport = {
    themeColor: "#0049FF",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                var storedTheme = localStorage.getItem('portfolio-theme');
                                var theme = storedTheme || 'dark';
                                document.documentElement.setAttribute('data-theme', theme);
                            } catch (e) {}
                        })();
                    `,
                }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        </head>
        <body
            className="bg-[var(--bg)] text-[var(--text)] font-['Syne',sans-serif] antialiased overflow-x-hidden selection:bg-[#0049FF] selection:text-white">
        {children}
        </body>
        </html>
    );
}