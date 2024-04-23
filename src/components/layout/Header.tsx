"use client";

import Link from "next/link";

import { Logo } from "@/components/common/Logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/config/navigation-items";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const scrolled = useScrollTop();

  return (
    <nav
      aria-label="Header"
      className={cn(
        "bg-transparent fixed top-0 left-0 right-0 z-[100] p-4 md:px-6", scrolled && "bg-black/80 border-b border-neutral-800 shadow-sm backdrop-blur-lg"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-between font-medium text-white md:flex-row md:items-center">
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <Logo className="h-6 md:h-8 w-auto group-hover:rotate-180 duration-500" />
          <p className="text-xl md:text-2xl font-bold tracking-tight">
            DabAZ
          </p>
          <span className="sr-only">
            DabAZ Home Page
          </span>
        </Link>
        <ul className="flex gap-6 items-center">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Button
              variant="ghost"
              href={item.href}
            >
              {item.label}
            </Button>
          </li>
        ))}
          <Button
            variant="crazy"
            href="mailto:dabaz@dabaz.me"
          >
            Contact
          </Button>
        </ul>
      </div>
    </nav>
  );
};
