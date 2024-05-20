"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { Logo } from "@/components/common/Logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { navigationItems } from "@/config/navigation-items";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTop();

  return (
    <nav
      aria-label="Header"
      className={clsx(
        "fixed top-0 left-0 right-0 z-[100] p-4 sm:px-6", scrolled && "bg-black/40 border-b-[1px] border-white/10 shadow-sm backdrop-blur-lg"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-between font-medium text-white sm:flex-row sm:items-center">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group z-[1001]"
          >
            <Logo className="h-6 sm:h-8 w-auto group-hover:rotate-180 duration-500" />
            <p className="text-xl sm:text-2xl font-medium tracking-tight duration-500">
              DabAZ
            </p>
            <span className="sr-only">
              DabAZ Home Page
            </span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white sm:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="-mr-2" />
            <span className="sr-only">
              Open menu
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-[999] flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-500 ease-in-out motion-reduce:transition-none sm:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-2 top-4 mb-4 block p-2 text-3xl text-white sm:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <X />
            <span className="sr-only">
              Close menu
            </span>
          </button>

          <div className="grid justify-items-end gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 text-2xl first:mt-8 text-slate-300 hover:text-white duration-300 font-normal"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="mailto:dabaz@dabaz.me"
              onClick={() => setOpen(false)}
              className="block px-3 text-2xl first:mt-8 text-slate-300 hover:text-white duration-300 font-normal"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-6 items-center">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Button
              variant="ghost"
              href={item.href}
              className="font-normal"
            >
              {item.label}
            </Button>
          </li>
        ))}
          <Button
            variant="crazy"
            href="mailto:dabaz@dabaz.me"
            className="font-normal"
          >
            Contact
          </Button>
        </ul>
      </div>
    </nav>
  );
};
