/* Simple line glyph icons — ported from the design bundle. */
import type { SVGAttributes } from "react";

const s: SVGAttributes<SVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2.5" {...s} />
          <path d="M3.5 7.5 12 13l8.5-5.5" {...s} />
        </svg>
      );
    case "cal":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3.5" y="5" width="17" height="16" rx="2.5" {...s} />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" {...s} />
          <path d="M8.5 14.5l2 2 4-4" {...s} />
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 3h8l4 4v14H6z" {...s} />
          <path d="M14 3v4h4M9 12h6M9 16h6" {...s} />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 4h2l2 12h11l2-8H7" {...s} />
          <circle cx="9" cy="20" r="1.4" {...s} />
          <circle cx="18" cy="20" r="1.4" {...s} />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5 5L18 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...s} />
        </svg>
      );
    case "speaker":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 9v6h4l5 4V5L8 9z" {...s} />
          <path d="M16 9a4 4 0 0 1 0 6" {...s} />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="9" y="3" width="6" height="11" rx="3" {...s} />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" {...s} />
        </svg>
      );
    case "end":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 9c4-3 10-3 14 0l-2 3-3-1v-2c-1-.5-3-.5-4 0v2l-3 1z" {...s} />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 12 20 5l-5 15-3-6-8-2z" {...s} />
        </svg>
      );
    default:
      return null;
  }
}
