"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Load WaterWave dynamically (client only)
const WaterWaveDynamic = dynamic(() => import("react-water-wave"), { ssr: false });

interface Methods {
  update: () => void;
}

interface WaterWaveWrapperProps {
  children: (methods: Methods) => ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
}

const WaterWaveWrapper = ({
  children,
  className,
  dropRadius,
  perturbance,
}: WaterWaveWrapperProps) => {
  // @ts-ignore
  return (
    <WaterWaveDynamic className={className} dropRadius={dropRadius} perturbance={perturbance}>
      {(methods: Methods) => children(methods)}
    </WaterWaveDynamic>
  );
};

export default WaterWaveWrapper;