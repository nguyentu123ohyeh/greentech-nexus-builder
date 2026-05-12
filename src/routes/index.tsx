import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Cpu, Globe2, ShieldCheck, Truck, Network, Boxes, Sparkles,
  Factory, Award, Zap, Layers, ChevronDown, CircuitBoard, Server, MapPin, Plus, Star,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Layout>
      <Hero />
      <BrandIntro />
      <TechShowcase />
      <WhyChooseUs />
      <Categories />
      <GlobalNetwork />
      <Logistics />
      <Stats />
      <Timeline />
      <Strengths />
      <ImportExport />
      <TechHighlights />
      <FeaturedProducts />
      <Industries />
      <Testimonials />
      <Certifications />
      <Coverage />
      <FAQ />
      <CTABanner />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden -mt-24 pt-32 pb-32">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-primary mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Global Technology Trade · Est. Worldwide
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Powering the world's <br />
              <span className="text-gradient">technology supply chain</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              GREENTECH IMPORT AND EXPORT COMPANY LIMITED connects manufacturers, distributors and enterprises
              across continents — delivering premium computer components, industrial systems and AI hardware
              with engineered reliability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/products" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold glow hover:opacity-90 transition">
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:bg-primary/10 transition">
                About the Company
              </Link>
            </motion.div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[["120+", "Countries"], ["18yrs", "Trade Experience"], ["10K+", "B2B Clients"]].map(([n, l], i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
                  <div className="text-3xl font-bold text-gradient">{n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2 animate-pulse-glow">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Advanced electronics circuit board"
                className="rounded-2xl w-full h-[520px] object-cover"
              />
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"><CircuitBoard className="w-5 h-5 text-primary" /></div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Live shipment</div>
                  <div className="text-sm font-semibold">SHA → ROT · Container TX-2891</div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-semibold bg-primary/20 text-primary">IN TRANSIT</span>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 glass-strong rounded-2xl p-4 flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-accent" />
              <div className="text-xs"><div className="font-semibold">120+ Markets</div><div className="text-muted-foreground">Active routes</div></div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <div className="text-xs"><div className="font-semibold">ISO 9001</div><div className="text-muted-foreground">Quality Verified</div></div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-20 flex justify-center text-muted-foreground">
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}

function BrandIntro() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Company</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                A trusted bridge between <span className="text-gradient">global tech makers</span> and the world.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                GREENTECH IMPORT AND EXPORT COMPANY LIMITED is an international technology trading enterprise
                specializing in the cross-border distribution of high-performance computer components, industrial
                computing platforms, networking infrastructure and emerging AI hardware.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a multilingual team operating from strategic hubs and a verified network of OEM partners,
                we provide end-to-end procurement, quality inspection, compliance and global logistics — built
                on transparency and engineered reliability.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TechShowcase() {
  const items = [
    { icon: CircuitBoard, title: "Components", desc: "SSDs, RAM, GPUs, CPUs and motherboards from premium tier suppliers." },
    { icon: Server, title: "Industrial Systems", desc: "Rugged industrial PCs, edge servers and embedded modules for harsh environments." },
    { icon: Network, title: "Network Infrastructure", desc: "Enterprise switching, 10G/100G transceivers and 5G connectivity hardware." },
    { icon: Cpu, title: "AI & Embedded", desc: "Edge AI accelerators, FPGA boards and IoT devices for next-gen applications." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Technology Showcase</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Engineered for the modern enterprise</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="relative h-full p-7 rounded-2xl glass glow-border overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 ring-1 ring-primary/30">
                  <it.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: ShieldCheck, title: "Verified Quality", desc: "Multi-stage inspection at origin and pre-shipment, full traceability on every SKU." },
    { icon: Globe2, title: "Global Reach", desc: "Active customer base across 120+ countries with localized fulfilment partners." },
    { icon: Truck, title: "Logistics Excellence", desc: "FCL, LCL, air & express options optimized by lane and Incoterm." },
    { icon: Award, title: "Certified Operations", desc: "ISO 9001 quality management plus product CE / FCC / RoHS compliance." },
    { icon: Zap, title: "Fast Quotations", desc: "Structured RFQ workflow returning detailed offers within 24 business hours." },
    { icon: Layers, title: "OEM Capabilities", desc: "White-label, custom firmware, packaging and BOM optimization at scale." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Six reasons clients keep coming back</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full p-6 rounded-2xl glass hover:bg-primary/5 transition group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { name: "Storage & Memory", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80", count: "SSD · RAM · NAS" },
    { name: "Graphics & Compute", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=80", count: "GPU · CPU · AI" },
    { name: "Industrial Systems", img: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8d?auto=format&fit=crop&w=900&q=80", count: "Industrial PC · Edge" },
    { name: "Networking", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80", count: "Switch · 5G · Fiber" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Featured Categories</div>
            <h2 className="text-4xl lg:text-5xl font-bold">Built around four core verticals</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
        </Reveal>
        <div className="grid grid-cols-12 gap-4 auto-rows-[260px]">
          {cats.map((c, i) => (
            <Reveal key={i} delay={i * 0.08} className={`relative col-span-12 sm:col-span-6 ${i === 0 ? "lg:col-span-5 lg:row-span-2" : "lg:col-span-" + (i === 1 ? "7" : i === 2 ? "4" : "3")}`}>
              <Link to="/products" className="group relative block h-full rounded-3xl overflow-hidden glass">
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-wider text-primary mb-2">{c.count}</div>
                  <div className="text-2xl font-bold">{c.name}</div>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass-strong flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalNetwork() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Global Network</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">A worldwide trading lattice</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From Asia-Pacific manufacturing clusters to North American distribution hubs and European service centers,
              our trade lanes are tuned for predictable lead times and resilient sourcing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["Asia Pacific", "Primary sourcing"], ["Europe", "Distribution & RMA"], ["North America", "Regional fulfilment"], ["MEA & LATAM", "Emerging markets"]].map(([t, d], i) => (
                <div key={i} className="p-4 rounded-xl glass flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-xs text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl glass-strong p-8 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative w-full h-full">
                {[
                  [20, 30], [70, 25], [45, 50], [80, 60], [25, 70], [60, 78], [50, 18],
                ].map(([x, y], i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="relative w-3 h-3 rounded-full bg-primary glow">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    </div>
                  </motion.div>
                ))}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="1">
                      <stop offset="0" stopColor="oklch(0.72 0.19 152)" stopOpacity="0.6" />
                      <stop offset="1" stopColor="oklch(0.85 0.22 138)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M20,30 Q45,5 70,25 T80,60" stroke="url(#lg)" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
                  <path d="M45,50 Q60,40 80,60" stroke="url(#lg)" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
                  <path d="M25,70 Q40,60 60,78" stroke="url(#lg)" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Logistics() {
  const items = [
    { icon: Truck, title: "Multi-modal", desc: "Air · Sea · Rail · Express" },
    { icon: Boxes, title: "Bonded Warehousing", desc: "Strategic hubs in 4 regions" },
    { icon: ShieldCheck, title: "Trade Compliance", desc: "HS coding, customs, certs" },
    { icon: Network, title: "Track & Trace", desc: "Real-time visibility per SKU" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">International Logistics</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Moving high-value cargo with confidence</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/40 transition">
                <it.icon className="w-7 h-7 text-primary mb-4" />
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [["120+", "Countries Served"], ["10K+", "Active B2B Clients"], ["$280M", "Annual Trade Volume"], ["18 yrs", "Industry Experience"]];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl glass-strong p-10 lg:p-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(([n, l], i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    ["2007", "Founded as a regional component trading firm"],
    ["2012", "Expanded into European and North American markets"],
    ["2016", "Launched dedicated industrial computing division"],
    ["2020", "Achieved ISO 9001 certification & opened Rotterdam hub"],
    ["2023", "Entered AI hardware and edge computing distribution"],
    ["2026", "Operating in 120+ countries with 10K+ clients"],
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Journey</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Eighteen years of building global trust</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-10">
            {events.map(([year, text], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`relative flex flex-col lg:flex-row items-start gap-6 ${i % 2 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2 lg:px-10">
                    <div className="glass rounded-2xl p-6">
                      <div className="text-xs font-bold text-primary tracking-widest mb-2">{year}</div>
                      <div className="text-base">{text}</div>
                    </div>
                  </div>
                  <div className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow" />
                  <div className="lg:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  const items = [
    { title: "Quality DNA", desc: "Every shipment passes structured inspection points before leaving origin." },
    { title: "Engineering Mindset", desc: "Technical pre-sales engineers translate requirements into the right BOM." },
    { title: "Financial Stability", desc: "Decades of profitable operation funding inventory and credit terms." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent glow-border">
              <div className="text-5xl font-bold text-gradient mb-4">0{i + 1}</div>
              <div className="text-xl font-semibold mb-2">{it.title}</div>
              <p className="text-muted-foreground">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ImportExport() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="relative h-full rounded-3xl overflow-hidden glass-strong p-2">
            <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80" alt="Container shipping" className="w-full h-full min-h-[420px] object-cover rounded-2xl" />
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[["FCL", "Full Container"], ["LCL", "Consolidation"], ["Air", "Express"]].map(([t, s], i) => (
                <div key={i} className="glass-strong rounded-xl p-3 text-center">
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Import & Export</div>
          <h2 className="text-4xl font-bold mb-6">Two-way trade. One trusted partner.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you are importing components into your home market or exporting branded systems globally,
            our trade desk handles every step — from sourcing and inspection to documentation, customs and last-mile delivery.
          </p>
          <ul className="space-y-3">
              {["Door-to-door fulfilment under EXW, FOB, CIF, DDP", "Multi-currency invoicing and trade finance support", "Pre-shipment inspection with photo & video reports", "Complete export documentation, certificates and HS coding"].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-primary" /></div>
                  <span className="text-sm text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
        </Reveal>
      </div>
    </section>
  );
}

function TechHighlights() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Product Technology</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Performance you can specify with confidence</h2>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { t: "PCIe 5.0 & DDR5 Ready", d: "Latest-generation interfaces validated for sustained workloads." },
            { t: "Industrial-grade durability", d: "Wide-temperature, fanless and IP-rated platforms." },
            { t: "AI-accelerated compute", d: "Edge inference modules from 8 to 275 TOPS." },
          ].map((x, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative p-7 rounded-3xl glass overflow-hidden">
                <Factory className="w-7 h-7 text-primary mb-4" />
                <div className="text-lg font-semibold mb-2">{x.t}</div>
                <p className="text-sm text-muted-foreground">{x.d}</p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(0, 6);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Featured Products</div>
            <h2 className="text-4xl lg:text-5xl font-bold">A glimpse of our catalogue</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View all 22 products <ArrowRight className="w-4 h-4" /></Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <Link to="/products/$id" params={{ id: p.id }} className="group relative block rounded-2xl overflow-hidden glass hover:bg-primary/5 transition">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary backdrop-blur">{p.category}</div>
                </div>
                <div className="p-5">
                  <div className="font-semibold mb-1 group-hover:text-primary transition">{p.name}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">{p.tagline}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const inds = ["Datacenter & Cloud", "Industrial Automation", "Smart City & IoT", "Telecom & 5G", "Education & Research", "Energy & Utilities", "Defense & Aerospace", "Retail & POS"];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Industry Applications</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Trusted across critical sectors</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inds.map((n, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="p-6 rounded-2xl glass text-center hover:bg-primary/10 transition">
                <div className="w-10 h-10 mx-auto rounded-lg bg-primary/15 flex items-center justify-center mb-3"><Factory className="w-5 h-5 text-primary" /></div>
                <div className="text-sm font-medium">{n}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "Greentech's quality control is on another level — every container arrives exactly as inspected.", a: "Procurement Director", c: "European Distribution Group" },
    { q: "Their engineering team helped us optimize the BOM for our edge computing rollout. True technology partner.", a: "VP Engineering", c: "IoT Solutions Provider" },
    { q: "Fast quotes, transparent docs, on-time deliveries. They've become an extension of our supply chain.", a: "Supply Chain Lead", c: "Datacenter Operator" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Client Voices</div>
          <h2 className="text-4xl lg:text-5xl font-bold">What partners say</h2>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full p-7 rounded-3xl glass">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-base leading-relaxed mb-6">"{x.q}"</p>
                <div className="text-sm font-semibold">{x.a}</div>
                <div className="text-xs text-muted-foreground">{x.c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = ["ISO 9001", "CE", "FCC", "RoHS", "REACH", "Customs AEO"];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Certifications & Compliance</div>
          <h2 className="text-3xl lg:text-4xl font-bold">Audited, certified, internationally recognised</h2>
        </Reveal>
        <Reveal>
          <div className="rounded-3xl glass-strong p-10 grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {certs.map((c, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-2 ring-1 ring-primary/30"><Award className="w-6 h-6 text-primary" /></div>
                <div className="text-xs font-semibold tracking-wider">{c}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Coverage() {
  const regions = ["North America", "Latin America", "Europe", "Middle East", "Africa", "South Asia", "East Asia", "Oceania"];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Worldwide Supply Coverage</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Active in every major region</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regions.map((r, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="relative p-6 rounded-2xl glass overflow-hidden group">
                <Globe2 className="w-7 h-7 text-primary mb-3" />
                <div className="font-semibold">{r}</div>
                <div className="text-xs text-muted-foreground mt-1">Active trade lanes</div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ["What's the typical MOQ?", "MOQ depends on the SKU and supplier — we negotiate flexible MOQs for both sample orders and full container shipments."],
    ["Which Incoterms do you support?", "EXW, FOB, CIF, CFR and DDP are all available. Our team will advise the most cost-effective route per lane."],
    ["Do you provide pre-shipment inspection?", "Yes. Every order includes structured QC with photo/video reporting before release for shipment."],
    ["How quickly can I get a quotation?", "Detailed RFQs are returned within 24 business hours, including pricing, lead time and logistics options."],
    ["Can you handle OEM / private label?", "Yes — we offer custom firmware, branded packaging, and BOM optimisation for OEM partners worldwide."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Frequently Asked</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Answers for international buyers</h2>
        </Reveal>
        <div className="space-y-3">
          {items.map(([q, a], i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 rounded-2xl glass hover:bg-primary/5 transition">
                <div className="flex justify-between items-start gap-4">
                  <div className="font-semibold">{q}</div>
                  <Plus className={`w-5 h-5 text-primary shrink-0 transition ${open === i ? "rotate-45" : ""}`} />
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0, marginTop: open === i ? 12 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </motion.div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 glass-strong">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ready to source globally?</h2>
                <p className="text-muted-foreground max-w-xl">Get a structured quotation from GREENTECH IMPORT AND EXPORT COMPANY LIMITED within 24 business hours.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold glow hover:opacity-90 transition">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
