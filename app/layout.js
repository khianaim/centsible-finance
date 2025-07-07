import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Centsible Finance",
  description: "Smarter Money Moves. Powered by AI.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
           <footer className="bg-[#fafff7] py-3">
            <div className="container mx-auto px-4 text-center text-black/60 text-sm">
              <p className="font-semibold"> © 2025 Centsible Finance</p>
              <p className="text-xs text-black/40 ">Developer & Designer - K. Mannix</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
