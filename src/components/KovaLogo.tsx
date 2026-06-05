export default function KovaLogo({ className = "h-8" }: { className?: string }) {
  return (
    // brightness-0 renders the brand mark solid black for the monochrome gallery look
    <img
      src="/kova-logo.svg"
      alt="Kova"
      className={`${className} w-auto brightness-0`}
    />
  );
}
