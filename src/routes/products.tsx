import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — GREENTECH IMPORT AND EXPORT COMPANY LIMITED" },
      { name: "description", content: "Explore 22 premium technology products distributed by GREENTECH IMPORT AND EXPORT COMPANY LIMITED — SSDs, GPUs, industrial PCs, networking and AI hardware." },
    ],
  }),
});

const PER_PAGE = 9;

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const q = query.toLowerCase();
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const slice = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <Layout>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Catalogue</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-5">Products & Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore 22 enterprise-grade products distributed worldwide by GREENTECH IMPORT AND EXPORT COMPANY LIMITED.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 glass-strong rounded-2xl p-4 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  placeholder="Search products, tags, categories..."
                  className="w-full pl-11 pr-4 py-3 bg-input rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCat(c); setPage(1); }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                      cat === c ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow" : "glass hover:bg-primary/10"
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
          <div className="flex items-center justify-between mb-8 text-sm text-muted-foreground">
            <div>{filtered.length} products · Page {currentPage} of {totalPages}</div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${cat}-${query}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {slice.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link to="/products/$id" params={{ id: p.id }} className="group relative block rounded-2xl overflow-hidden glass hover:bg-primary/5 transition h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary backdrop-blur">{p.category}</div>
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass-strong flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="font-semibold mb-1 group-hover:text-primary transition">{p.name}</div>
                      <div className="text-xs text-muted-foreground mb-3 line-clamp-2">{p.tagline}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {slice.length === 0 && (
                <div className="col-span-full text-center py-20 text-muted-foreground">No products match your filters.</div>
              )}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg glass disabled:opacity-30 hover:bg-primary/10 transition flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-semibold transition ${
                    currentPage === i + 1 ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow" : "glass hover:bg-primary/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg glass disabled:opacity-30 hover:bg-primary/10 transition flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
