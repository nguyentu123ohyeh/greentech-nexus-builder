import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass-strong rounded-2xl px-5 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-lg" : ""}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
              <Globe2 className="w-5 h-5 text-primary-foreground" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/40 animate-pulse-glow" />
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Greentech</div>
              <div className="text-sm font-semibold text-gradient -mt-0.5">Import & Export Co. Ltd</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.div
                      layoutId="navactive"
                      className="absolute inset-0 rounded-lg bg-primary/15 ring-1 ring-primary/30 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition glow"
            >
              Get a Quote
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 space-y-1"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary/10"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
