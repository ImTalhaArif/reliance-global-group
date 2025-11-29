"use client";

import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

// Dynamically import WaterWave only on the client
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false,
});

interface WaterWaveBoxProps {
  imageUrl: string;
  className?: string;
  children?: ReactNode;
}

const WaterWaveBox: FC<WaterWaveBoxProps> = ({
  imageUrl,
  className,
  children,
}) => {
  return (
    <div className={className}>
      {/* WaterWave DOES NOT SUPPORT function children */}
      <WaterWave
        style={{ width: "100%", height: "100%" }}
        imageUrl={imageUrl}
      >
        {/* Only normal JSX children */}
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </WaterWave>
    </div>
  );
};

export default WaterWaveBox;