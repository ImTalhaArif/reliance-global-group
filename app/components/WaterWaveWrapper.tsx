"use client"; // Ensure this runs only on client

import dynamic from "next/dynamic";
import { ReactNode } from "react";

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

const WaterWaveWrapper = ({ children, className, dropRadius, perturbance }: WaterWaveWrapperProps) => {
  return (
    <WaterWaveDynamic
      className={className}
      dropRadius={dropRadius}
      perturbance={perturbance}
    >
      {(methods: Methods) => children(methods)}
    </WaterWaveDynamic>
  );
};

export default WaterWaveWrapper;
