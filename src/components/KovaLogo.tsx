export default function KovaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="90"
      height="32"
      viewBox="0 0 90 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#1a1a2e"
      >
        Kova
      </text>
      <circle cx="78" cy="8" r="4" fill="#6b5afc" />
    </svg>
  );
}
