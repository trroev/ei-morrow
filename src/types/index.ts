import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types"

interface NavItem {
  title: string
  href: string
}

export interface NavConfig {
  navItems: NavItem[]
}

export interface SiteConfig {
  title: string
  description: string
  author: string[]
  website: string
  keywords: string[]
  url: string
  openGraph: {
    title: string
    description: string
    url: string
    site_name: string
    images: string
    type: OpenGraphType
    locale: string
  }
  icons: {
    icon: string
    shortcut: string
    apple: string
  }
  links: string
  manifest: string
}
