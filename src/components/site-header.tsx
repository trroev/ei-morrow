"use client"

import { useState } from "react"

import { navConfig } from "@/config/nav"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <MainNav items={navConfig.navItems} />
        {nav && <MobileNav items={navConfig.navItems} onClose={handleNav} />}
        <button
          className="flex items-center space-x-2 md:hidden hover:scale-110 duration-300"
          onClick={handleNav}
        >
          {nav ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>
    </header>
  )
}
