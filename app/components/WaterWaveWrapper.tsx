"use client";

import { ReactNode, useEffect, useState } from "react";

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
  dropRadius = 20,
  perturbance = 0.03,
}: WaterWaveWrapperProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [WaterWave, setWaterWave] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    import("react-water-wave").then((mod) => setWaterWave(() => mod.default));
  }, []);

  if (!isMounted || !WaterWave) return <>{children({ update: () => {} })}</>;

  return (
    <WaterWave className={className} dropRadius={dropRadius} perturbance={perturbance}>
      {(methods: Methods) => children(methods)}
    </WaterWave>
  );
};

export default WaterWaveWrapper;