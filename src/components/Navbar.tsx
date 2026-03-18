import { useState } from "react";
import { Box, Menu, X } from "lucide-react";
import logoImg from "@/assets/bodybuilding-emblem-and-gym-logo-design-template-free-vector.png";

const navItems = ["HOME", "SERVICES", "CLASSES", "ABOUT", "CONTACT"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 px-4 pt-6 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between bg-[#2a1e12] px-4 py-3 md:px-7">
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
              className="border-l border-black/40 px-5 py-2 text-lg font-display font-bold text-primary first:border-l-0 hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-3 rounded-xl bg-black px-5 py-2 text-lg font-display font-bold text-primary transition-colors hover:bg-primary hover:text-black"
          >
            JOIN NOW
            <Box className="h-5 w-5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto w-full max-w-[1120px] bg-[#2a1e12] border-t border-primary/20 px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-display font-semibold text-primary hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="inline-block mt-2 rounded-lg bg-black px-5 py-2 text-sm font-display font-bold text-primary">
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
