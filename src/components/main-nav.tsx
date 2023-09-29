import Image from "next/image"
import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"

import logo from "../../public/logo.svg"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <>
      <Link href="/" className="flex items-center space-x-4">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Logo for E. I. Morrow Co., Inc."
        />
        <span className="hidden font-heading font-bold md:inline-block">
          {siteConfig.title}
        </span>
      </Link>
      <div className="flex gap-6 md:gap-10">
        <nav className="hidden gap-6 md:flex ml-auto">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-lg font-medium text-foreground/70 hover:text-foreground sm:text-sm"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      {/* <button className="flex items-center space-x-2 md:hidden hover:scale-110 duration-300"></button> */}
    </>
  )
}
