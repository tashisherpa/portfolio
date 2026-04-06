export type SkillGroup = { label: string; items: string[] };

const chipClass =
  "inline-flex items-center rounded-full border border-zinc-200/90 bg-white/90 px-3.5 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition-[border-color,box-shadow,background-color] duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-700/90 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800";

export function SkillChips({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {group.label}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((label) => (
              <li key={`${group.label}-${label}`}>
                <span className={chipClass}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}