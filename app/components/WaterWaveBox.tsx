"use client";

interface WaterWaveBoxProps {
  className?: string;
}

export default function WaterWaveBox({ className }: WaterWaveBoxProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "url('/your-image.jpg') center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 water-wave"></div>
    </div>
  );
}