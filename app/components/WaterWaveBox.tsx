"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Import dynamically to avoid SSR crash
const WaterWaveDynamic = dynamic(() => import("react-water-wave"), { ssr: false });

// Define the types manually
interface Methods {
  update: () => void;
}

interface WaterWaveBoxProps {
  children: (methods: Methods) => ReactNode;
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
  // @ts-ignore — tell TypeScript to ignore typing
  return (
    <WaterWaveDynamic
      className={className}
      dropRadius={dropRadius}
      perturbance={perturbance}
    >
      {(methods: Methods) => children(methods)}
    </WaterWaveDynamic>
  );
}