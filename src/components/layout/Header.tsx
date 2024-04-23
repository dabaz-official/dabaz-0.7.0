import Link from "next/link";

import { Logo } from "@/components/common/Logo";

export default function Header() {
  return (
    <nav
      aria-label="Header"
      className="px-4 py-2 md:px-6 md:py-4 fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-neutral-800"
    >
      <Link href="/">
        <Logo className="h-10 w-auto" />
        <span className="sr-only">
          DabAZ Home Page
        </span>
      </Link>
        
    </nav>
  )
}