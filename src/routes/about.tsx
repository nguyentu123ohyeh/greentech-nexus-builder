import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Globe2, Award, Users, Building2, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — GREENTECH IMPORT AND EXPORT COMPANY LIMITED" },
      { name: "description", content: "Learn about GREENTECH IMPORT AND EXPORT COMPANY LIMITED — an international technology trading enterprise with 18+ years of global experience." },
    ],
  }),
});

function About() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About the Company</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
              Building <span className="text-gradient">global technology trade</span> with engineered trust.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              GREENTECH IMPORT AND EXPORT COMPANY LIMITED is an international technology trading enterprise with deep
              expertise across computer components, industrial systems, networking and AI hardware — supplying
              enterprises in 120+ countries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden glass-strong p-2">
              <img src="/assets/thumb/Modern tech company office environment with sleek design, computers, innovative workspace, professional technology atmosphere.jpg" alt="Corporate office" className="w-full h-[500px] object-cover rounded-2xl" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Company Introduction</div>
            <h2 className="text-4xl font-bold mb-6">A trading partner engineered for international scale</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2007, GREENTECH IMPORT AND EXPORT COMPANY LIMITED has grown from a regional component
              trader into a globally connected technology enterprise — operating multilingual trade desks,
              bonded warehousing and verified OEM partnerships across continents.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our customers include datacenter operators, industrial manufacturers, government agencies,
              integrators and distributors who depend on consistent quality, transparent documentation and
              on-time worldwide delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "To make premium technology accessible to enterprises everywhere through reliable, transparent international trade." },
            { icon: Eye, title: "Vision", desc: "To become the world's most trusted bridge between technology makers and global markets." },
            { icon: Heart, title: "Core Values", desc: "Integrity, engineering rigour, customer obsession and long-term partnership." },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full p-8 rounded-3xl glass glow-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 glow"><it.icon className="w-5 h-5 text-primary-foreground" /></div>
                <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">International Capabilities</div>
            <h2 className="text-4xl font-bold">What we do, end-to-end</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Global sourcing through verified OEM and tier-1 suppliers",
              "Pre-shipment quality inspection with photo/video reporting",
              "Multi-modal international logistics (air, sea, rail, express)",
              "Trade documentation, HS coding and customs clearance support",
              "OEM, ODM and white-label manufacturing for partners",
              "Multi-currency invoicing and structured trade finance",
              "Bonded warehousing across four global hubs",
              "Multilingual technical pre-sales and after-sales support",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="p-5 rounded-2xl glass flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl glass-strong p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                ["Global", "Import & Export"],
                ["B2B", "Product Sourcing"],
                ["OEM/ODM", "Supply Support"],
                ["Multi-Category", "Hardware Trade"],
              ].map(([n, l], i) => (
                <div key={i}>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" alt="Warehouse" className="rounded-2xl aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=80" alt="Containers" className="rounded-2xl aspect-square object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=600&q=80" alt="Logistics" className="rounded-2xl aspect-square object-cover -mt-4" />
              <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80" alt="Office" className="rounded-2xl aspect-square object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Facilities</div>
            <h2 className="text-4xl font-bold mb-6">Bonded warehouses, regional hubs, global reach</h2>
            <p className="text-muted-foreground leading-relaxed">
              From our manufacturing partnerships in Asia-Pacific to bonded warehouses across Europe and North America,
              our facilities are tuned for speed, traceability and inspection — ensuring every shipment moves with confidence.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
