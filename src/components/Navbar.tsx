import { useState } from "react";
import { Box, Menu, X } from "lucide-react";
import logoImg from "@/assets/bodybuilding-emblem-and-gym-logo-design-template-free-vector.png";

const navItems = ["HOME", "SERVICES", "CLASSES", "ABOUT", "CONTACT"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-4 pt-4 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between rounded-2xl border border-primary/25 bg-[#2a1e12]/95 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-sm md:px-7">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="leading-none">
            <p className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-[2rem]">Fit Zone</p>
            <p className="font-display text-lg font-bold uppercase tracking-wide text-primary md:text-xl">Unisex</p>
          </div>
          <img
            src={logoImg}
            alt="Fitness Sports Center logo"
            className="h-12 w-12 object-contain md:h-16 md:w-16"
          />
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative border-l border-black/40 px-5 py-2 text-lg font-display font-bold text-primary transition-colors first:border-l-0 hover:text-primary-foreground after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-8"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-3 rounded-xl bg-black px-5 py-2 text-lg font-display font-bold text-primary transition-colors duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-black"
          >
            JOIN NOW
            <Box className="h-5 w-5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-primary transition-transform duration-300 hover:scale-105 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-1 w-full max-w-[1120px] rounded-b-2xl border border-t-0 border-primary/25 bg-[#2a1e12]/95 px-6 pb-4 shadow-[0_14px_30px_rgba(0,0,0,0.25)] md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block border-b border-black/30 py-3 text-sm font-display font-semibold tracking-wide text-primary transition-colors hover:text-primary-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2 text-sm font-display font-bold text-primary transition-colors hover:bg-primary hover:text-black"
          >
            JOIN NOW
            <Box className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
