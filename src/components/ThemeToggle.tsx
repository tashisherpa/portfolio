"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getDomTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function subscribeTheme(onChange: () => void) {
  const handler = () => onChange();
  window.addEventListener("theme-change", handler);
  return () => window.removeEventListener("theme-change", handler);
}

const KANGAROO_EVENT = "kangaroo-hop-egg";
const SPAM_WINDOW_MS = 1400;
const SPAM_COUNT = 3;
const KANGAROO_COOLDOWN_MS = 2800;

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getDomTheme,
    () => "light" as Theme,
  );

  const spamTimesRef = useRef<number[]>([]);
  const lastKangarooRef = useRef(0);

  const toggle = useCallback(() => {
    const next: Theme = getDomTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    window.dispatchEvent(new Event("theme-change"));

    const now = Date.now();
    const times = spamTimesRef.current.filter((t) => now - t < SPAM_WINDOW_MS);
    times.push(now);
    spamTimesRef.current = times;
    if (times.length >= SPAM_COUNT) {
      spamTimesRef.current = [];
      if (now - lastKangarooRef.current >= KANGAROO_COOLDOWN_MS) {
        lastKangarooRef.current = now;
        window.dispatchEvent(new CustomEvent(KANGAROO_EVENT));
      }
    }
  }, []);

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        strokeLinecap="round"
      />
    </svg>
  );
}