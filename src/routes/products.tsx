import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  component: ProductsRouteComponent,
  head: () => ({
    meta: [
      { title: "Products — GREENTECH IMPORT AND EXPORT COMPANY LIMITED" },
      {
        name: "description",
        content:
          "Explore premium technology products distributed by GREENTECH...",
      },
    ],
  }),
});

const PER_PAGE = 9;

function ProductsRouteComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const normalizedPath = pathname.replace(/\/$/, "");

  if (normalizedPath !== "/products") {
    return <Outlet />;
  }

  return <ProductsPage />;
}

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const q = query.toLowerCase().trim();

      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchQ;
    });
  }, [query, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const slice = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <Layout>
      <section className="relative overflow-hidden py-16">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Catalogue _
            </div>
            <h1 className="mb-5 text-5xl font-black uppercase italic tracking-tighter lg:text-7xl">
              Products & Solutions
            </h1>
            <p className="max-w-2xl border-l-2 border-primary/30 pl-4 text-lg text-white/60">
              Explore enterprise-grade hardware distributed worldwide by
              GREENTECH. Built for industrial reliability.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong mt-10 flex flex-col gap-6 rounded-2xl border border-white/5 p-4 shadow-2xl lg:flex-row">
              <div className="group relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-primary" />
                <input
                  suppressHydrationWarning
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search hardware, tags, specs..."
                  className="w-full rounded-xl border border-white/5 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm outline-none transition-all focus:ring-2 ring-primary/40"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    suppressHydrationWarning
                    key={c}
                    type="button"
                    onClick={() => {
                      setCat(c);
                      setPage(1);
                    }}
                    className={`rounded-xl px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                      cat === c
                        ? "scale-105 bg-primary text-black shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                        : "glass text-white/50 hover:bg-white/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              {filtered.length} units identified · Page {currentPage}/
              {totalPages}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isMounted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-32">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="text-[10px] uppercase tracking-widest text-white/20">
                  Syncing database...
                </span>
              </div>
            ) : (
              <motion.div
                key={`${currentPage}-${cat}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {slice.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to="/products/$id"
                      params={{ id: String(p.id) }}
                      className="glass group relative block h-full overflow-hidden rounded-[2rem] border border-white/5 shadow-xl transition-all duration-500 hover:border-primary/30 active:scale-[0.98]"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-white">
                          <img
                            src={p.image}
                            alt={p.name}
                            loading="lazy"
                            className="h-full w-full object-contain p-4 opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                          />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                        <div className="absolute left-4 top-4 rounded-lg border border-primary/20 bg-primary/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary backdrop-blur-md">
                          {p.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-2 text-xl font-black uppercase italic tracking-tighter transition-colors group-hover:text-primary">
                          {p.name}
                        </div>

                        <div className="mb-6 line-clamp-2 text-xs font-light italic text-white/50">
                          {p.tagline}
                        </div>

                        <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                          {p.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter text-white/30 transition-colors group-hover:border-primary/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {slice.length === 0 && (
                  <div className="col-span-full rounded-[3rem] border-2 border-dashed border-white/5 py-32 text-center">
                    <div className="mb-4 text-4xl">∅</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                      No matching hardware found in current sector.
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {totalPages > 1 && isMounted && (
            <div className="mt-20 flex items-center justify-center gap-3">
              <button
                suppressHydrationWarning
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="glass flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 transition hover:bg-primary/10 disabled:opacity-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    suppressHydrationWarning
                    key={i}
                    type="button"
                    onClick={() => setPage(i + 1)}
                    className={`h-12 w-12 rounded-xl text-xs font-black transition-all duration-300 ${
                      currentPage === i + 1
                        ? "scale-110 bg-primary text-black shadow-[0_0_25px_rgba(74,222,128,0.3)]"
                        : "glass border border-white/5 text-white/40 hover:bg-white/10"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                suppressHydrationWarning
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="glass flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 transition hover:bg-primary/10 disabled:opacity-20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}