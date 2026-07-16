const stars = {
  southSudan:
    "0.45,0.78 0.50,0.93 0.66,0.93 0.53,1.03 0.58,1.18 0.45,1.08 0.32,1.18 0.37,1.03 0.24,0.93 0.40,0.93",
  ethiopia:
    "1.5,0.78 1.55,0.93 1.71,0.93 1.58,1.03 1.63,1.18 1.5,1.08 1.37,1.18 1.42,1.03 1.29,0.93 1.45,0.93",
};

function SouthSudanFlag() {
  return (
    <svg viewBox="0 0 3 2" className="h-full w-full" aria-hidden="true">
      <rect width="3" height="2" fill="#fff" />
      <rect width="3" height="0.6" fill="#000" />
      <rect y="0.66" width="3" height="0.68" fill="#da121a" />
      <rect y="1.4" width="3" height="0.6" fill="#078930" />
      <polygon points="0,0 1.1,1 0,2" fill="#0f47af" />
      <polygon points={stars.southSudan} fill="#fcdd09" />
    </svg>
  );
}

function RwandaFlag() {
  return (
    <svg viewBox="0 0 3 2" className="h-full w-full" aria-hidden="true">
      <rect width="3" height="2" fill="#20603d" />
      <rect width="3" height="1.2" fill="#00a1de" />
      <rect y="1.2" width="3" height="0.2" fill="#fad201" />
      <circle cx="2.3" cy="0.5" r="0.28" fill="#e5be01" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 2.3 + Math.cos(angle) * 0.3;
        const y1 = 0.5 + Math.sin(angle) * 0.3;
        const x2 = 2.3 + Math.cos(angle) * 0.42;
        const y2 = 0.5 + Math.sin(angle) * 0.42;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#e5be01"
            strokeWidth="0.05"
          />
        );
      })}
    </svg>
  );
}

function EthiopiaFlag() {
  return (
    <svg viewBox="0 0 3 2" className="h-full w-full" aria-hidden="true">
      <rect width="3" height="0.667" fill="#078930" />
      <rect y="0.667" width="3" height="0.667" fill="#fcdd09" />
      <rect y="1.333" width="3" height="0.667" fill="#da121a" />
      <circle cx="1.5" cy="1" r="0.45" fill="#0f47af" />
      <polygon points={stars.ethiopia} fill="#fcdd09" />
    </svg>
  );
}

const flags = {
  SS: SouthSudanFlag,
  RW: RwandaFlag,
  ET: EthiopiaFlag,
};

export default function FlagIcon({
  country,
  className = "",
}: {
  country: keyof typeof flags;
  className?: string;
}) {
  const Flag = flags[country];
  return (
    <span
      className={`inline-block overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.15)] ${className}`}
    >
      <Flag />
    </span>
  );
}
