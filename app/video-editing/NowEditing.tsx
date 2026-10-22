"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_SECONDS = 17 * 60 + 36; // timeline length shown in the timecode (00:17:36:00)
const LOOP_MS = 20000; // real time the bar takes to run from start to end
const FPS = 24;

function toTimecode(progress: number) {
  const totalFrames = Math.floor(progress * TOTAL_SECONDS * FPS);
  const ff = totalFrames % FPS;
  const secs = Math.floor(totalFrames / FPS);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(Math.floor(secs / 3600))}:${p(Math.floor((secs % 3600) / 60))}:${p(secs % 60)}:${p(ff)}`;
}

export default function NowEditing() {
  const [progress, setProgress] = useState(0.67);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const tick = (now: number) => {
      setProgress(((now - start) % LOOP_MS) / LOOP_MS);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="now" aria-hidden="true">
      <div className="now-bar">
        <div className="now-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="now-row">
        <span>NOW EDITING</span>
        <span className="now-time">{toTimecode(progress)}</span>
      </div>
    </div>
  );
}
