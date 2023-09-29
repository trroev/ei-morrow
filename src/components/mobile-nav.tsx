"use client"

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { useLockBody } from "@/hooks/use-lock-body"

import logo from "../../public/logo.svg"

interface MobileNavProps {
  items?: NavItem[]
  onClose?: () => void
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  useLockBody()

  const handlLinkClick = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md bg-background/75 animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-background p-4 shadow-md">
        <Link
          href="/"
          className="flex items-center space-x-4"
          onClick={handlLinkClick}
        >
          <Image
            src={logo}
            width={75}
            height={75}
            alt="Logo for E. I. Morrow Co., Inc."
          />
          <span className="hidden sm:inline-block font-heading font-medium">
            {siteConfig.title}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center rounded-md p-2 text-sm text-foreground/70 font-medium transition-colors hover:text-foreground"
              onClick={handlLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
