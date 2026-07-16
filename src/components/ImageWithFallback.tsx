"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed border-green-900/30 bg-white p-4 text-center text-sm text-green-900/60 dark:border-green-100/20 dark:bg-green-100/5 dark:text-green-100/50 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span>
          Image not found
          <br />
          <code className="text-xs">{src}</code>
          <br />
          {label}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />;
}
