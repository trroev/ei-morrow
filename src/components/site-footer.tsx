import Image from "next/image"
import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"

import logo from "../../public/logo.svg"

interface SiteFooterProps {
  items?: NavItem[]
}

export function SiteFooter({ items }: SiteFooterProps) {
  return (
    <footer>
      <div className="container">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-6 lg:py-8">
          <div className="space-y-4 md:flex md:items-center md:justify-between">
            <Link
              href="/"
              className="flex items-center justify-center space-x-4 sm:justify-start"
            >
              <Image
                src={logo}
                width={85}
                height={85}
                alt="Logo for E. I. Morrow Co., Inc."
              />
              <div className="hidden sm:inline-block">
                <span className="font-heading font-bold">
                  {siteConfig.title}
                </span>
                <p className="text-xs leading-normal text-foreground/80 sm:text-sm">
                  Providing High Quality Filtration since 1984
                </p>
              </div>
            </Link>
            <nav className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-foreground/80 sm:justify-start md:mb-0 md:gap-6">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className=" hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <hr className="my-4 border-foreground sm:mx-auto md:my-6 lg:my-8" />
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col text-sm">
              <a
                href="tel:+12693459251"
                aria-label="Link to make a phone call to E. I. Morrow at 12693459251"
              >
                (269) 345-9251
              </a>
              <a
                href="https://tinyurl.com/EI-Morrow-Location"
                aria-label="Link to Google Maps location for E. I. Morrow"
              >
                3325 Ravine Rd, Kalamazoo, MI 49006
              </a>
            </div>
            <span className="block text-sm text-foreground/80">
              &copy;2023 E. I. Morrow Co., Inc. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
