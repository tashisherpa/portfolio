import { profile } from "@/data/site";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {profile.name}
        </p>
        <SocialIcons size="sm" />
      </div>
    </footer>
  );
}