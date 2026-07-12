"use client";

import Image, { type ImageProps } from "next/image";

export default function ImageWithFallback(props: ImageProps) {
  return (
    <Image
      {...props}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}
