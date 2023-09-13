import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

export interface SiteConfig {
  title: string;
  description: string;
  author: string[];
  website: string;
  keywords: string[];
  url: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    site_name: string;
    images: string;
    type: OpenGraphType;
    locale: string;
  };
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
  };
  links: string;
  manifest: string;
}
