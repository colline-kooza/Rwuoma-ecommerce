"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "./ui/button"

export function SidebarNav({ className, items }) {
  const pathname = usePathname()

  return (
    <nav
      className={(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}