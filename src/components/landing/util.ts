import type { CSSProperties } from "react";

/* reveal attr helper — mirrors the design's rev(): elements start hidden and the
   LandingApp rAF tween fades them in. --reveal-delay staggers siblings. */
export function rev(delay = 0): { "data-reveal": ""; style: CSSProperties } {
  return { "data-reveal": "", style: { ["--reveal-delay"]: `${delay}ms` } as CSSProperties };
}
