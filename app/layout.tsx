// components/Layout.tsx
import { ReactNode, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WaterWave from "react-water-wave";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <WaterWave className="absolute inset-0 z-0" dropRadius={20} perturbance={0.03}>
      {(methods) => (
        <div
          className="relative z-10 flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-200"
          onMouseMove={methods.update}
          onClick={methods.update}
        >
          {/* Header */}
          <Header toggleMobileMenu={() => setMobileMenuOpen(true)} />

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-32 px-6 relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to Reliance Global Group
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-blue-800 mb-8 max-w-2xl"
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

          {/* Main Content */}
          <main className="flex-1 z-10 px-6">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <Dialog
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-end bg-black/40"
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white w-3/4 max-w-sm h-full p-8 relative rounded-l-3xl shadow-2xl flex flex-col"
                >
                  <button
                    className="absolute top-5 right-5 text-2xl font-bold text-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ✕
                  </button>
                  <nav className="mt-16 flex flex-col gap-6 text-lg font-semibold text-blue-900">
                    <a href="#">Tours & Travels</a>
                    <a href="#">Jobs</a>
                    <a href="#">Healthcare</a>
                    <a href="#">Study Abroad</a>
                    <a href="#">Insurance</a>
                    <a href="#">Virtual University</a>
                  </nav>
                </motion.div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      )}
    </WaterWave>
  );
};

export default Layout;