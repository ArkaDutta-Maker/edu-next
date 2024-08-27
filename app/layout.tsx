import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { Providers } from "./providers";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/20240602_104028.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-full">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="bg-gray-50 rounded-lg shadow-md dark:bg-gray-900">
              <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <Link
                    className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    href="/"
                  >
                    <Image
                      alt="Flowbite Logo"
                      className="rounded-full h-8"
                      height={32}
                      src="/20240602_104028.jpg"
                      width={32}
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Edu-Next
                    </span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                      <Link
                        className="hover:underline me-4 md:me-6"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline me-4 md:me-6" href="/#">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline me-4 md:me-6" href="/#">
                        Licensing
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/#">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <Link className="hover:underline" href="/">
                      Edu-Next™
                    </Link>
                    . All Rights Reserved.
                  </span>
                  <div className="flex mt-4 sm:justify-center gap-5 ml-3 sm:mx-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      someone@gmail.com
                    </span>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      +91 xxxxxxxx
                    </span>
                  </div>
                  <div className="flex mt-4 sm:justify-center gap-5 ml-3 sm:mx-0">
                    <Link className="-ml-3" href="/#">
                      <FaYoutube color={"red"} size={"1.5em"} />
                    </Link>
                    <Link href="/#">
                      <FaInstagram size={"1.5em"} />
                    </Link>
                    <Link href="/#">
                      <FaFacebook size={"1.5em"} />
                    </Link>
                    <Link href="/#">
                      <FaTwitter size={"1.5em"} />
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
