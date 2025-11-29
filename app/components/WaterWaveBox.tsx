"use client";

import React, { useEffect, useRef } from "react";
import WaterWave from "water-wave-effect";

export interface WaterWaveBoxProps {
  dropRadius?: number;
  perturbance?: number;
  children?: (methods: { update: () => void }) => React.ReactNode;
}

export default function WaterWaveBox({
  dropRadius = 20,
  perturbance = 0.03,
  children,
}: WaterWaveBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    waveRef.current = new WaterWave({
      el: containerRef.current,
      dropRadius,
      perturbance,
    });

    return () => {
      if (waveRef.current) waveRef.current.destroy();
    };
  }, [dropRadius, perturbance]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {children && children({ update: () => waveRef.current?.update() })}
    </div>
  );
}