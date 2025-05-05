/* eslint-disable @next/next/no-img-element */
"use client";

/**
 * ----------------------------------------------------------------
 * Custom Image component
 *
 * 🎯 Obiettivo:
 * Usare sempre UN solo componente per gestire immagini in modo automatico,
 * sia SVG che immagini raster (PNG, JPG, WebP).
 *
 * ⚡ Comportamento:
 * - Se il file è un SVG ➔ renderizza un <img> normale (più leggero, più veloce)
 * - Se il file è PNG/JPG/WebP ➔ usa <NextImage> di next/image (ottimizzazione automatica)
 *
 * 📦 Vantaggi:
 * - Centralizzazione totale della gestione immagini
 * - Supporta statiche locali (public/) e remote (es: da Sanity) senza modifiche extra
 * - Compatibile con `fill`, `sizes`, `priority`
 *
 * 🚀 Regole:
 * - SVG: <img> ➔ non ha ottimizzazione, più rapido, nessun problema di fill/size obbligato
 * - PNG/JPG/WebP: <NextImage> ➔ ottimizzato da Next.js (responsive, lazy, blur-up se serve)
 *
 * ----------------------------------------------------------------
 */

import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  onLoad?: () => void;
};

export default function Image({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  fill = false,
  onLoad,
}: ImageProps) {
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={onLoad}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      priority={priority}
      sizes={sizes}
      fill={fill}
      onLoad={onLoad}
    />
  );
}
