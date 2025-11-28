"use client";
// app/page.tsx
import Layout from "./layout";
import { motion } from "framer-motion";
import WaterWaveWrapper from "./components/WaterWaveWrapper";

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
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Reliance Global Group
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-blue-800 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our services in travel, healthcare, education, and more.
        </motion.p>
        <motion.button
          className="bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <WaterWaveWrapper key={service} dropRadius={20} perturbance={0.03}>
            {(methods) => (
              <motion.div
                onMouseMove={methods.update}
                onClick={methods.update}
                className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service}</h3>
                <p className="text-blue-800 text-sm">
                  Learn more about {service.toLowerCase()} and how RGG can help you.
                </p>
              </motion.div>
            )}
          </WaterWaveWrapper>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-blue-100 to-blue-300 text-center rounded-3xl mx-6">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to start your journey with RGG?
        </motion.h3>
        <motion.button
          className="bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.button>
      </section>
    </Layout>
  );
}