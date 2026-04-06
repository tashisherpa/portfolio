export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}