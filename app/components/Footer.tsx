// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 mt-12 bg-white/30 backdrop-blur-md text-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 shadow-inner">
      <p className="text-sm">&copy; {new Date().getFullYear()} Reliance Global Group. All rights reserved.</p>

      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-700 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-700 transition-colors">
          Terms of Service
        </a>
        <a href="#" className="hover:text-blue-700 transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
