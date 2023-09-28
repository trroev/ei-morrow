import Link from "next/link"

import { navConfig } from "@/config/nav"

import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <MainNav items={navConfig.navItems} />
      </div>
    </header>
  )
}
