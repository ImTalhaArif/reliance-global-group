"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

interface WaterWaveBoxProps {
  children: (methods: { update: () => void }) => ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
}

export default function WaterWaveBox({
  children,
  className,
  dropRadius,
  perturbance,
}: WaterWaveBoxProps) {
  return (
    <WaterWave
      className={className}
      dropRadius={dropRadius}
      perturbance={perturbance}
    >
      {(methods: { update: () => void }) => children(methods)}
    </WaterWave>
  );
}
