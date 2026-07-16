export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`icon-symbol ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
