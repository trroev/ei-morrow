import {
  Inter,
  Nanum_Myeongjo,
  Playfair_Display,
  Source_Serif_4,
} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-heading",
})

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-heading",
})
