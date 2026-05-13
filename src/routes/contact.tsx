import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

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
      <section className="relative py-20 overflow-hidden text-center">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05]">
              Let's build a <span className="text-gradient">global partnership</span>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to GREENTECH IMPORT AND EXPORT COMPANY LIMITED — our team replies within 24 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info Cards - Căn giữa hàng */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap justify-center gap-5">
          {[
            { icon: Mail, t: "Email", d: "sales@greentechimportexport.com" },
            { icon: Clock, t: "Business Hours", d: "Mon–Fri · 09:00 – 18:00 GMT" },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full p-6 rounded-2xl glass hover:bg-primary/5 transition min-w-[280px]">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 mx-auto">
                  <it.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{it.t}</div>
                <div className="text-sm font-semibold">{it.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form Section - Đã xóa Map và căn giữa tuyệt đối */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6"> 
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 lg:p-12 shadow-2xl border border-white/5">
              <div className="flex flex-col items-center text-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Send us a message</h2>
                <p className="text-sm text-muted-foreground">
                  Tell us about your project, requirements or partnership ideas.
                </p>
              </div>

              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-2xl bg-primary/10 border border-primary/30 text-center"
                >
                  <div className="text-primary font-bold text-lg mb-2">Message Sent Successfully!</div>
                  <div className="text-sm opacity-80">Our trade desk will respond within 24 business hours.</div>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid sm:grid-cols-2 gap-5 text-left">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Full Name</label>
                    <input required placeholder="Name" className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Email Address</label>
                    <input required type="email" placeholder="name@company.com" className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Company</label>
                    <input placeholder="Company Name" className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Country</label>
                    <input placeholder="Your Country" className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 transition-all" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Inquiry Type</label>
                    <select className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 appearance-none">
                      <option>General Inquiry</option>
                      <option>Request a Quote</option>
                      <option>OEM Partnership</option>
                      <option>Logistics & Trade</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest ml-1 text-muted-foreground">Message</label>
                    <textarea required rows={5} placeholder="How can we help you?" className="w-full px-4 py-3.5 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 resize-none transition-all" />
                  </div>
                  <button className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-xl hover:opacity-90 transition-all active:scale-[0.98]">
                    <Send className="w-4 h-4" /> SUBMIT MESSAGE
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ vẫn giữ nguyên ở dưới */}
      <section className="py-16 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Quick answers</h2>
          </Reveal>
          <div className="grid gap-4">
            {[
              ["How quickly will you reply?", "Within 24 business hours — most inquiries receive a response within a few hours."],
              ["Do you work with small businesses?", "Yes — we work with everyone from startups to multinational enterprises."],
              ["Can I visit your warehouse?", "Yes, please request an appointment via the contact form. Visits to our regional hubs are welcome."],
            ].map(([q, a], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-6 rounded-2xl glass hover:border-primary/20 transition-colors">
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
