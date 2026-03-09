export default function KovaLogo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src="/kova-logo.svg"
      alt="Kova"
      className={`${className} w-auto`}
    />
  );
}
