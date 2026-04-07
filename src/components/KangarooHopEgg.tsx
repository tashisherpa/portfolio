"use client";

import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/paths";

const EVENT = "kangaroo-hop-egg";
const KANGAROO_GIF = "/kangaroo-hop.gif";

const HOP_DURATION_MS = 4250;
const MAX_STAGGER_MS = 980;

const WIDTH_CLASSES = [
  "w-20 max-w-[min(34vw,7rem)] sm:w-24",
  "w-24 max-w-[min(38vw,8.5rem)] sm:w-28",
  "w-28 max-w-[min(42vw,9.5rem)] sm:w-36",
  "w-[5.25rem] max-w-[min(34vw,7rem)] sm:w-24",
  "w-[5.5rem] max-w-[min(36vw,8rem)] sm:w-28",
  "w-18 max-w-[min(30vw,6.25rem)] sm:w-22",
] as const;

type HerdRow = {
  delayMs: number;
  bottom: string;
  width: string;
};

function pickRandomWidths(count: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * WIDTH_CLASSES.length);
    out.push(WIDTH_CLASSES[idx] ?? WIDTH_CLASSES[0]);
  }
  return out;
}

function randomBottoms(
  count: number,
  min: number,
  max: number,
  minGap: number,
): number[] {
  const out: number[] = [];
  let guard = 0;
  while (out.length < count && guard < 400) {
    guard++;
    const y = min + Math.random() * (max - min);
    if (out.every((b) => Math.abs(b - y) >= minGap)) out.push(y);
  }
  while (out.length < count) {
    const slot = min + ((out.length + 0.5) / count) * (max - min);
    out.push(slot);
  }
  return out.sort((a, b) => a - b);
}

function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = array[i]!;
    array[i] = array[j]!;
    array[j] = t;
  }
  return array;
}

function makeHerdLayout(): HerdRow[] {
  const bottoms = randomBottoms(5, 4, 42, 3.6);
  const widths = pickRandomWidths(5);

  const raw = [0, 1, 2, 3, 4].map(() => Math.random() * MAX_STAGGER_MS);
  raw.sort((a, b) => a - b);
  const delays = raw.map((v) => Math.floor(v));

  const rows = bottoms.map((b, i) => ({
    bottom: `${b.toFixed(1)}vh`,
    delayMs: delays[i] ?? 0,
    width: widths[i] ?? WIDTH_CLASSES[0],
  }));

  return shuffleInPlace(rows);
}

export function KangarooHopEgg() {
  const [runKey, setRunKey] = useState<number | null>(null);

  const herdLayout = useMemo(() => {
    if (runKey === null) return null;
    return makeHerdLayout();
  }, [runKey]);

  useEffect(() => {
    const onHop = () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      setRunKey(Date.now());
    };
    window.addEventListener(EVENT, onHop);
    return () => window.removeEventListener(EVENT, onHop);
  }, []);

  useEffect(() => {
    if (runKey === null) return;
    const id = window.setTimeout(
      () => setRunKey(null),
      HOP_DURATION_MS + MAX_STAGGER_MS + 150,
    );
    return () => window.clearTimeout(id);
  }, [runKey]);

  if (runKey === null || herdLayout === null) return null;

  const src = withBasePath(KANGAROO_GIF);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99] overflow-hidden"
      aria-hidden
    >
      {herdLayout.map((row, i) => (
        // eslint-disable-next-line @next/next/no-img-element -- animated GIF easter egg
        <img
          key={`${runKey}-${i}`}
          src={src}
          alt=""
          width={160}
          height={160}
          draggable={false}
          className={`kangaroo-hop-sprite absolute left-0 h-auto select-none object-contain ${row.width}`}
          style={{
            bottom: row.bottom,
            animationDelay: `${row.delayMs}ms`,
          }}
        />
      ))}
    </div>
  );
}