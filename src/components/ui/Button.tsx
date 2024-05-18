import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-white text-black hover:bg-slate-300 active:bg-zinc-300/70 rounded-xl py-2 px-3",
  ghost:
    "text-slate-300 hover:text-white",
  crazy:
    "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-xl border border-blue-200/20 bg-blue-300/10 px-4 py-2 text-blue-200 outline-none ring-purple-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-xl after:bg-purple-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-300 hover:border-purple-200/40 hover:text-purple-300 after:hover:bg-opacity-15 focus:ring-2",
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
};

type NativeLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type SharedProps = {
  variant?: keyof typeof variantStyles
  className?: string
};

type ButtonProps = SharedProps & (NativeButtonProps | NativeLinkProps)
export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  const cn = clsx(
    "inline-flex items-center gap-2 justify-center outline-offset-2 transition active:transition-none duration-200 text-md",
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={cn} {...(props as any)} />
  ) : (
    <button className={cn} {...(props as any)} />
  )
};