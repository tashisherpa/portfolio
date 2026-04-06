import type { ExperienceItem } from "@/data/site";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute top-3 bottom-3 left-[calc(10.5rem+1.25rem-0.5px)] hidden w-px bg-zinc-200 dark:bg-zinc-700 sm:block"
        aria-hidden
      />
      <ul className="flex flex-col gap-12 sm:gap-14">
        {items.map((job) => (
          <li
            key={`${job.company}-${job.role}-${job.start}`}
            className="relative grid grid-cols-1 gap-3 sm:grid-cols-[minmax(10.5rem,max-content)_2.5rem_minmax(0,1fr)] sm:items-start sm:gap-x-0"
          >
            <p className="text-sm font-medium tabular-nums whitespace-nowrap text-zinc-500 dark:text-zinc-400 sm:pt-1 sm:text-right">
              {job.start}
              <span className="text-zinc-400 dark:text-zinc-500"> – </span>
              {job.end}
            </p>
            <div className="relative hidden justify-center sm:flex">
              <span
                className="z-[1] mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-zinc-300 bg-[var(--background)] ring-4 ring-[var(--background)] dark:border-zinc-600"
                aria-hidden
              />
            </div>
            <div className="min-w-0 border-l border-zinc-200 pl-4 dark:border-zinc-700 sm:border-l-0 sm:pl-0">
              <p className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {job.company}
              </p>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{job.role}</p>
              <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">{job.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
