"use client";

import Link from "next/link";

import { Logo } from "@/components/common/Logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/config/navigation-items";

export default function Header() {
  const scrolled = useScrollTop();

  return (
    <nav
      aria-label="Header"
      className={cn(
        "bg-transparent fixed top-0 left-0 right-0 z-[100] p-4 md:px-6", scrolled && "bg-black/80 border-b border-neutral-800 shadow-sm backdrop-blur-lg"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <Logo className="h-8 md:h-10 w-auto hover:rotate-180 duration-700" />
          <span className="sr-only">
            DabAZ Home Page
          </span>
        </Link>
        <ul className="flex gap-6">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center hover:text-neutral-200 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
