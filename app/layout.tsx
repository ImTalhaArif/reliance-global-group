// components/Layout.tsx
import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WaterWave from "react-water-wave";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* WaterWave effect over the whole page */}
      <WaterWave className="absolute inset-0 z-0" image="" dropRadius={20} perturbance={0.02}>
        {(methods) => (
          <div
            className="relative z-10 flex flex-col min-h-screen"
            onMouseMove={methods.update}
            onClick={methods.update}
          >
            <Header toggleMobileMenu={() => setMobileMenuOpen(true)} />

            <main className="flex-1 z-10 relative">{children}</main>

            <Footer />
          </div>
        )}
      </WaterWave>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white w-3/4 max-w-sm h-full p-6 relative rounded-l-3xl"
            >
              <button
                className="absolute top-5 right-5 text-2xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
              <nav className="mt-10 flex flex-col gap-6 text-lg">
                <a href="#">Tours & Travels</a>
                <a href="#">Jobs</a>
                <a href="#">Healthcare</a>
                <a href="#">Study Abroad</a>
                <a href="#">Insurance</a>
              </nav>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;