import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send, ZoomIn, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/$id")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-3">Product not found</h1>
        <Link to="/products" className="text-primary">← Back to products</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold mb-3">Something went wrong</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — GREENTECH IMPORT AND EXPORT COMPANY LIMITED` },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: typeof products[number] };
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 3);
  const finalRelated = related.length ? related : fallback;

  return (
    <Layout>
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all products
          </Link>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div
                  className="relative rounded-3xl overflow-hidden glass-strong p-2 group cursor-zoom-in"
                  onClick={() => setZoom(!zoom)}
                >
                  <motion.img
                    key={active}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: zoom ? 1.4 : 1 }}
                    transition={{ duration: 0.4 }}
                    src={product.gallery[active]}
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                  />
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </Reveal>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative rounded-xl overflow-hidden ring-2 transition ${active === i ? "ring-primary glow" : "ring-transparent opacity-70 hover:opacity-100"}`}
                  >
                    <img src={g} alt="" className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{product.category}</div>
                <h1 className="text-4xl font-bold leading-tight mb-4">{product.name}</h1>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary">{t}</span>
                  ))}
                </div>

                <div className="glass rounded-2xl p-5 mb-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Technical Specifications</div>
                  <dl className="grid grid-cols-1 gap-2.5 text-sm">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 py-1.5 border-b border-border/40 last:border-0">
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="font-medium text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold glow">
                    <Mail className="w-4 h-4" /> CONTACT US
                  </Link>
                  <a href="#inquiry" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:bg-primary/10 transition">
                    <Send className="w-4 h-4" /> Send Inquiry
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{f}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Application Scenarios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.applications.map((a, i) => (
                <div key={i} className="p-5 rounded-2xl glass">
                  <div className="text-sm font-medium">{a}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Product Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.gallery.map((g, i) => (
                <div key={i} className="rounded-2xl overflow-hidden glass aspect-square">
                  <img src={g} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="inquiry" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-2">Product Inquiry</h2>
              <p className="text-sm text-muted-foreground mb-6">Send us your requirements and we'll respond within 24 business hours.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent — our team will reply within 24 business hours."); }} className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                <input required type="email" placeholder="Email" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                <input placeholder="Company" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                <input placeholder="Country" className="px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40" />
                <textarea required placeholder={`Tell us about quantity & requirements for ${product.name}`} rows={5} className="sm:col-span-2 px-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 ring-primary/40 resize-none" />
                <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold glow">
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {finalRelated.map((p) => (
                <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="group relative block rounded-2xl overflow-hidden glass hover:bg-primary/5 transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-wider text-primary mb-1">{p.category}</div>
                    <div className="font-semibold group-hover:text-primary transition">{p.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
