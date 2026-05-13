import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Send,
  ZoomIn,
  CheckCircle2,
  Loader2,
  CircuitBoard,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/$id")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = products.find((p) => String(p.id) === params.id);

    if (!product) {
      throw notFound();
    }

    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.product.name ?? "Product"} — GREENTECH IMPORT AND EXPORT`,
      },
      {
        name: "description",
        content: loaderData?.product.tagline ?? "",
      },
    ],
  }),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setActive(0);
    setZoom(false);
  }, [product.id]);

  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const finalRelated = related.length
    ? related
    : products.filter((p) => p.id !== product.id).slice(0, 3);

  if (!isClient) {
    return (
      <Layout>
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/products"
            className="group mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 transition-all hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Hardware Sector
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <Reveal>
                <div
                  className="glass-strong group relative cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 p-2 shadow-2xl"
                  onClick={() => setZoom((v) => !v)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${product.id}-${active}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: zoom ? 1.15 : 1,
                        transition: { duration: 0.4, ease: "circOut" },
                      }}
                      exit={{ opacity: 0 }}
                      src={gallery[active] || product.image}
                      alt={product.name}
                      className="aspect-[4/3] w-full rounded-[1.5rem] bg-white object-contain p-6"
                    />
                  </AnimatePresence>

                  <div className="glass-strong absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-4 gap-4">
                {gallery.map((g, i) => (
                  <button
                    suppressHydrationWarning
                    key={`${g}-${i}`}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setZoom(false);
                    }}
                    className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent ring-2 transition-all duration-300 ${
                      active === i
                        ? "scale-95 ring-primary shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                        : "opacity-40 ring-transparent hover:scale-105 hover:opacity-100"
                    }`}
                  >
                    <img src={g} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  <div className="h-px w-8 bg-primary/30" />
                  Industrial Specification _
                </div>

                <h1 className="mb-4 text-4xl font-black uppercase italic leading-none tracking-tighter text-white md:text-5xl">
                  {product.name}
                </h1>

                <p className="mb-8 border-l-4 border-primary/20 pl-6 text-lg italic leading-relaxed text-white/50">
                  {product.tagline}
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="glass-strong relative mb-8 overflow-hidden rounded-[2rem] border border-white/5 bg-black/20 p-8">
                  <div className="absolute right-0 top-0 rotate-12 p-4 opacity-5">
                    <CircuitBoard className="h-24 w-24 text-primary" />
                  </div>

                  <div className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    Hardware Matrix
                  </div>

                  <dl className="relative z-10 space-y-4">
                    {product.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"
                      >
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                          {s.label}
                        </dt>
                        <dd className="text-sm font-black italic text-white">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-5 font-black uppercase tracking-widest text-black shadow-[0_15px_30px_-10px_rgba(74,222,128,0.4)] transition-all hover:scale-[1.03] active:scale-95"
                  >
                    <Mail className="h-4 w-4" />
                    Order Dispatch
                  </Link>

                  <a
                    href="#inquiry"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    <Send className="h-4 w-4 text-primary" />
                    Request RFQ
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-white/[0.01] py-24">
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-20 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-black uppercase italic tracking-tighter text-white">
              <span className="text-primary">//</span>
              Technical Overview
            </h2>
            <p className="text-xl font-light leading-relaxed text-white/50">
              {product.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-black uppercase italic tracking-tighter text-white">
              <span className="text-primary">//</span>
              Key Capabilities
            </h2>

            <div className="grid gap-4">
              {product.features.map((f, i) => (
                <div
                  key={i}
                  className="group flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-primary/20 hover:bg-white/[0.05]"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-sm font-medium leading-relaxed text-white/70">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="inquiry" className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="glass-strong rounded-[3rem] border border-white/5 bg-black/20 p-10 shadow-3xl lg:p-14">
              <h2 className="mb-2 text-center text-4xl font-black uppercase italic tracking-tighter text-white">
                Dispatch Inquiry
              </h2>

              <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-white/30">
                Procurement Desk Replies within 24 business hours
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Inquiry logged. Sector response incoming.");
                }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div className="space-y-2">
                  <label className="ml-2 text-[9px] uppercase tracking-widest text-white/30">
                    Full Name
                  </label>
                  <input
                    suppressHydrationWarning
                    required
                    placeholder="AGENT NAME"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-mono text-sm text-white outline-none focus:ring-1 ring-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[9px] uppercase tracking-widest text-white/30">
                    Email Endpoint
                  </label>
                  <input
                    suppressHydrationWarning
                    required
                    type="email"
                    placeholder="CONTACT@HQ.COM"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-mono text-sm text-white outline-none focus:ring-1 ring-primary/50"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="ml-2 text-[9px] uppercase tracking-widest text-white/30">
                    Mission Requirements
                  </label>
                  <textarea
                    suppressHydrationWarning
                    required
                    placeholder={`LOG QUANTITY & TECHNICAL SPECS FOR ${product.name.toUpperCase()}`}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-mono text-sm text-white outline-none focus:ring-1 ring-primary/50"
                  />
                </div>

                <button
                  suppressHydrationWarning
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-emerald-500 px-8 py-5 font-black uppercase tracking-widest text-black shadow-xl transition-all hover:opacity-90 active:scale-95 sm:col-span-2"
                >
                  <Send className="h-5 w-5" />
                  TRANSMIT INQUIRY
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">
                Related Sector Hardware
              </h2>
              <Link
                to="/products"
                className="text-[10px] font-black uppercase tracking-widest text-primary transition-colors hover:text-white"
              >
                View All Catalogue
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {finalRelated.map((p) => (
                <Link
                  key={p.id}
                  to="/products/$id"
                  params={{ id: String(p.id) }}
                  className="glass group block overflow-hidden rounded-[2rem] border border-white/5 shadow-xl transition-all duration-500 hover:border-primary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <div className="mb-2 text-[9px] font-black uppercase tracking-widest text-primary">
                      {p.category}
                    </div>
                    <div className="text-xl font-black uppercase italic tracking-tighter text-white transition-colors group-hover:text-primary">
                      {p.name}
                    </div>
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