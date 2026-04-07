"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CANDIES = ["🍬", "🍭", "🍫", "🍪", "🧁", "🍰", "🎀", "🍩"] as const;

type CandyPiece = {
  id: string;
  left: number;
  top: number;
  emoji: string;
  delay: number;
  duration: number;
  drift: string;
  rotate: string;
  size: number;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function isInteractiveTarget(node: EventTarget | null): boolean {
  if (!node || !(node instanceof Element)) return false;
  return !!node.closest(
    'a, button, input, select, textarea, [role="button"], [contenteditable="true"]',
  );
}

export function CandyRainEgg() {
  const [pieces, setPieces] = useState<CandyPiece[]>([]);
  const reducedMotion = usePrefersReducedMotion();
  const idRef = useRef(0);

  const spawn = useCallback(
    (clientX: number, clientY: number) => {
      if (reducedMotion) return;

      const burst = 36;
      const next: CandyPiece[] = [];

      for (let i = 0; i < burst; i++) {
        idRef.current += 1;
        const id = `candy-${idRef.current}-${i}`;
        // Wider radial spawn so the burst starts loose, not piled on the cursor
        const angle = Math.random() * Math.PI * 2;
        const radius = 40 + Math.random() * 100;
        const left = clientX + Math.cos(angle) * radius;
        const top = clientY + Math.sin(angle) * radius * 0.5;
        const driftPx = (Math.random() - 0.5) * 180;
        const rotateDeg = (Math.random() - 0.5) * 720;

        next.push({
          id,
          left,
          top,
          emoji: CANDIES[Math.floor(Math.random() * CANDIES.length)] ?? "🍬",
          delay: Math.random() * 0.12,
          duration: 2 + Math.random() * 1.4,
          drift: `${driftPx}px`,
          rotate: `${rotateDeg}deg`,
          size: 1.15 + Math.random() * 0.85,
        });
      }

      setPieces((prev) => [...prev, ...next]);

      const maxMs =
        Math.max(...next.map((p) => (p.delay + p.duration) * 1000)) + 200;
      window.setTimeout(() => {
        const drop = new Set(next.map((p) => p.id));
        setPieces((prev) => prev.filter((p) => !drop.has(p.id)));
      }, maxMs);
    },
    [reducedMotion],
  );

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!e.altKey) return;
      if (e.button !== 0) return;
      if (isInteractiveTarget(e.target)) return;
      e.preventDefault();
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("pointerdown", onPointerDown, true);
    return () => window.removeEventListener("pointerdown", onPointerDown, true);
  }, [spawn]);

  if (pieces.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="candy-rain-piece absolute select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}rem`,
            lineHeight: 1,
            ["--candy-drift" as string]: p.drift,
            ["--candy-rotate" as string]: p.rotate,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
