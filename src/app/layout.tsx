import "@/styles/globals.css"

import type { Metadata } from "next"
import { nanumMyeongjo, playfairDisplay, sourceSerif } from "@/assets/fonts"

export const metadata: Metadata = {
  title: "E. I. Morrow Co., Inc.",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${nanumMyeongjo.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
