import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — GREENTECH IMPORT AND EXPORT COMPANY LIMITED" },
      { name: "description", content: "Get in touch with GREENTECH IMPORT AND EXPORT COMPANY LIMITED. Request quotes, discuss partnerships, or learn more about our global trading services." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05]">Let's build a <span className="text-gradient">global partnership</span>.</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Reach out to GREENTECH IMPORT AND EXPORT COMPANY LIMITED — our team replies within 24 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Mail, t: "Email", d: "contact@greentech-impex.com" },
            { icon: Phone, t: "Phone", d: "+1 (415) 555-0288" },
            { icon: MapPin, t: "Address", d: "International Trade Tower, Global HQ" },
            { icon: Clock, t: "Business Hours", d: "Mon–Fri · 09:00 – 18:00 GMT" },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full p-6 rounded-2xl glass hover:bg-primary/5 transition">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4"><it.icon className="w-5 h-5 text-primary" /></div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{it.t}</div>
                <div className="text-sm font-semibold">{it.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Send us a message</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Tell us about your project, requirements or partnership ideas.</p>
              {sent ? (
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 text-sm">Thank you — your message has been received. Our trade desk will respond within 24 business hours.</div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                  <input required type="email" placeholder="Email" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                  <input placeholder="Company" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                  <input placeholder="Country" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                  <select className="sm:col-span-2 px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40">
                    <option>General Inquiry</option><option>Request a Quote</option><option>OEM Partnership</option><option>Logistics & Trade</option>
                  </select>
                  <textarea required rows={5} placeholder="Your message" className="sm:col-span-2 px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 resize-none" />
                  <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold glow">
                    <Send className="w-4 h-4" /> Submit Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl overflow-hidden glass-strong p-2 relative min-h-[450px]">
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.5%2C37.7%2C-122.35%2C37.82&layer=mapnik"
                  className="w-full h-full grayscale-[50%] contrast-125"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4 flex gap-3 items-center">
                <Building2 className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">GREENTECH IMPORT AND EXPORT COMPANY LIMITED</div>
                  <div className="text-xs text-muted-foreground">International Trade Tower · Global HQ</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center mb-10"><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">FAQ</div><h2 className="text-3xl font-bold">Quick answers</h2></Reveal>
          <div className="space-y-3">
            {[
              ["How quickly will you reply?", "Within 24 business hours — most inquiries receive a response within a few hours."],
              ["Do you work with small businesses?", "Yes — we work with everyone from startups to multinational enterprises."],
              ["Can I visit your warehouse?", "Yes, please request an appointment via the contact form. Visits to our regional hubs are welcome."],
            ].map(([q, a], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-6 rounded-2xl glass">
                  <div className="font-semibold mb-1">{q}</div>
                  <div className="text-sm text-muted-foreground">{a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
