import type { Metadata } from "next";
import { AuthProvider } from "./context/AuthContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatBox from "./components/chatBox/chatbox";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roomify - Find Your Perfect Room",
  description: "Roomify is a room rental platform that connects tenants with landlords, making it easy to find and rent rooms. Browse listings, view property details, and contact landlords directly through our user-friendly interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <ChatBox/>
      </body>
    </html> 
  );
}