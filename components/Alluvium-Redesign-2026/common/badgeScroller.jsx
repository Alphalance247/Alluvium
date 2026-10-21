"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Infinite auto-scrolling badge strip. The track holds two back-to-back
// copies of `badges`; auto-scroll nudges scrollLeft every frame and wraps it
// back by exactly one copy's width once it passes the midpoint, so the loop
// is seamless. Because it's a real overflow-x-auto element (not a CSS
// transform marquee), touch/trackpad/drag scrolling works natively - the
// auto-scroll just pauses while the user is hovering or touching it.
export default function BadgeScroller({ badges, className = "" }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const SPEED_PX_PER_FRAME = 0.6;
    let rafId;

    function tick() {
      if (!pausedRef.current) {
        const singleSetWidth = track.scrollWidth / 2;
        track.scrollLeft += SPEED_PX_PER_FRAME;
        if (track.scrollLeft >= singleSetWidth) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      ref={trackRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onPointerDown={pause}
      onPointerUp={resume}
      className={`flex items-center gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {[...badges, ...badges].map((badge, i) => (
        <div key={`${badge.name}-${i}`} className="flex h-12 flex-none items-center justify-center">
          <Image
            src={badge.logo}
            alt={badge.name}
            width={badge.width}
            height={badge.height}
            className="h-[53px] w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
