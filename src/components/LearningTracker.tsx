import type { CurrentFocus } from "@/data/site";

export function LearningTracker({ data }: { data: CurrentFocus }) {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      {data.blurb ? (
        <p className="text-sm leading-relaxed text-zinc-600">{data.blurb}</p>
      ) : null}
      <ul className={data.blurb ? "mt-8 flex flex-col gap-8" : "flex flex-col gap-8"}>
        {data.tracks.map((track) => (
          <li key={track.topic}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium text-zinc-900">{track.topic}</p>
              <span className="tabular-nums text-xs font-medium text-zinc-500">
                {track.progress}%
              </span>
            </div>
            <div
              className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100"
              role="progressbar"
              aria-valuenow={track.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${track.topic} progress`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-sky-400 transition-[width] duration-500"
                style={{ width: `${Math.min(100, Math.max(0, track.progress))}%` }}
              />
            </div>
            {track.detail ? (
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{track.detail}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
