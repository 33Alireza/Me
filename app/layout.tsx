import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Alireza Yousefzadeh — Software Engineer",
    description: "Software Engineer & Geek - Building high-quality web & mobile applications and contributing to open-source projects.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        </head>
        <body
            className="bg-[#020205] text-[#F0F4FF] font-['Syne',sans-serif] antialiased overflow-x-hidden selection:bg-[#0049FF] selection:text-white">
        {children}
        </body>
        </html>
    );
}