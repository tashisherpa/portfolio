import Link from "next/link";
import { profile } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#tools", label: "Tools" },
];

const navLinkClass =
  "text-sm text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] dark:text-zinc-400 dark:hover:text-zinc-100";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/90 bg-[var(--background)]/85 backdrop-blur-md dark:border-zinc-800/90">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] dark:text-zinc-100"
        >
          Tashi Sherpa
        </Link>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
          <nav aria-label="Page sections" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {nav.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}