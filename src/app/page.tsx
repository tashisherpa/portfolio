import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillChips } from "@/components/SkillChips";
import { SocialIcons } from "@/components/SocialIcons";
import { profile, experience, education, skillGroups } from "@/data/site";
import { withBasePath } from "@/lib/paths";

const linkClass =
  "font-medium text-[var(--accent)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export default function Home() {
  const resumeHref = withBasePath("/resume.pdf");

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <section
        id="about"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-zinc-800/90 dark:bg-zinc-900/50 sm:p-10"
        aria-labelledby="about-heading"
      >
        <h1
          id="about-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100"
        >
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <SocialIcons />
          <a className={linkClass} href={resumeHref} download>
            Download resume
          </a>
        </div>
      </section>

      <div className="flex flex-col gap-20 pt-20 sm:pt-24">
        <Section id="experience" title="Experience">
          <ExperienceTimeline items={experience} />
        </Section>

        <Section id="education" title="Education">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{education.school}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.location}</p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.start}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {education.note}
          </p>
        </Section>

        <Section id="tools" title="Tools">
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Languages, frameworks, cloud platforms, and everyday tooling — aligned with what I use on the job and in projects.
          </p>
          <SkillChips groups={skillGroups} />
        </Section>
      </div>
    </main>
  );
}