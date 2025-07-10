"use client";
import Image from "next/image";
import React from "react";

type Item = { src: string; alt: string };

interface HorizontalScrollProps {
  items: Item[];
  itemWidth?: number;
  scrollDuration?: number;
}

export default function HorizontalScroll({
  items,
  itemWidth = 230,
  scrollDuration = 20,
}: HorizontalScrollProps) {
  // Calculate the exact distance for one set of items
  const scrollDistance = itemWidth * items.length;

  return (
    <div
      className="relative w-7xl overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="logo-scroll-container"
        style={
          {
            "--scroll-distance": `${scrollDistance}px`,
            "--scroll-duration": `${scrollDuration}s`,
          } as React.CSSProperties
        }
      >
        <div className="logo-scroll py-8">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="logo-item"
              style={{
                flex: "0 0 auto",
                width: itemWidth,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 2.5rem",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={itemWidth}
                height={60}
                style={{
                  userSelect: "none",
                  pointerEvents: "none",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
