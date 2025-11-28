"use client";

import { ReactNode, useEffect, useState } from "react";

interface Methods {
  update: () => void;
}

interface WaterEffectProps {
  children: (methods: Methods) => ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
}

export default function WaterEffect({
  children,
  className,
  dropRadius = 20,
  perturbance = 0.03,
}: WaterEffectProps) {
  const [WaterWave, setWaterWave] = useState<any>(null);

  useEffect(() => {
    import("react-water-wave").then((mod) => setWaterWave(() => mod.default));
  }, []);

  if (!WaterWave) {
    // fallback while loading or on server
    return <>{children({ update: () => {} })}</>;
  }

  return (
    <WaterWave className={className} dropRadius={dropRadius} perturbance={perturbance}>
      {(methods: Methods) => children(methods)}
    </WaterWave>
  );
}
