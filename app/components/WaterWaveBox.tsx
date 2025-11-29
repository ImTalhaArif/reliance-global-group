"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

// Dynamically import WaterWave
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false,
});

interface WaterWaveBoxProps {
  imageUrl: string;
  className?: string;
}

const WaterWaveBox: FC<WaterWaveBoxProps> = ({ imageUrl, className }) => {
  return (
    <div className={className}>
      {/* WaterWave DOES NOT SUPPORT CHILDREN */}
      {/* NO JSX INSIDE */}
      <WaterWave
        imageUrl={imageUrl}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default WaterWaveBox;