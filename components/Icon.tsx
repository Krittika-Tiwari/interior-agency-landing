import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

/** Decorative icon exported from the Figma design, rendered at its native size */
export function Icon({ src, width, height, className = "" }: Props) {
  return <Image src={src} alt="" width={width} height={height} unoptimized className={`shrink-0 ${className}`} />;
}

/** Same icon used as a mask so it takes the current text colour (for active states) */
export function MaskIcon({ src, width, height, className = "" }: Props) {
  const mask = `url(${src}) center / 100% 100% no-repeat`;
  const style: CSSProperties = { width, height, mask, WebkitMask: mask };
  return <span aria-hidden="true" style={style} className={`block shrink-0 bg-current ${className}`} />;
}
