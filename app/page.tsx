// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Layout from "./layout";
import dynamic from "next/dynamic";

const WaterWaveWrapper = dynamic(
  () => import("./components/WaterWaveWrapper"),
  { ssr: false }
);

export default function HomePage() {
  const services = [
    "Tours & Travels",
    "Jobs",
    "Healthcare",
    "Study Abroad",
    "Insurance",
    "Virtual University",
    "Medical Tourism",
    "Labs, Pharmacy, Ambulance",
  ];

  return (
    <Layout>
      {/* Services Section */}
      <section className="py-24 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <WaterWaveWrapper key={service} dropRadius={20} perturbance={0.03}>
            {(methods) => (
              <motion.div
                onMouseMove={() => methods.update()}
                onClick={() => methods.update()}
                className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {service}
                </h3>
                <p className="text-blue-800 text-sm">
                  Learn more about {service.toLowerCase()} and how RGG can help you.
                </p>
              </motion.div>
            )}
          </WaterWaveWrapper>
        ))}
      </section>
    </Layout>
  );
}