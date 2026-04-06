/** Inline script so theme is set before first paint (App Router). */
export function ThemeInitScript() {
  const code =
    "(function(){try{var t=localStorage.getItem('theme');var dark=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',dark);}catch(e){}})();";
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}