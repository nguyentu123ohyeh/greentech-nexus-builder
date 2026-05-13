import { Link } from "@tanstack/react-router";
import { Globe2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
              <Globe2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Greentech</div>
              <div className="font-semibold text-gradient">Import & Export Co. Ltd</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            GREENTECH IMPORT AND EXPORT COMPANY LIMITED powers global technology trade with verified components,
            enterprise reliability and worldwide logistics coverage.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook].map((I, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/15 hover:text-primary transition"
              >
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Capabilities</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Global Sourcing & OEM</li>
            <li>International Logistics</li>
            <li>Quality Inspection</li>
            <li>Trade Compliance</li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Reach Us</div>
          <div className="flex gap-3 text-sm"><Mail className="w-4 h-4 text-primary mt-0.5" /> sales@greentechimportexport.com</div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GREENTECH IMPORT AND EXPORT COMPANY LIMITED · All rights reserved.
      </div>
    </footer>
  );
}
