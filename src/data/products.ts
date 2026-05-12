export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
}

const img = (q: string, sig: number) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=80&sig=${sig}`;

// Curated unsplash photo IDs — tech/electronics themed
const photos = [
  "photo-1518770660439-4636190af475", // circuit
  "photo-1591488320449-011701bb6704", // ssd
  "photo-1555680202-c86f0e12f086", // ram
  "photo-1591799264318-7e6ef8ddb7ea", // gpu
  "photo-1587202372775-e229f172b9d7", // motherboard
  "photo-1587829741301-dc798b83add3", // cooler
  "photo-1593640408182-31c70c8268f5", // mini pc
  "photo-1551703599-6b3e8379aa8d", // industrial
  "photo-1605773527852-c546a8584ea3", // psu
  "photo-1606664515524-ed2f786a0bd6", // network
  "photo-1558494949-ef010cbdcc31", // server
  "photo-1531492746076-161ca9bcad58", // accessories
  "photo-1550751827-4bd374c3f58b", // ai chip
  "photo-1517336714731-489689fd1ca8", // embedded
  "photo-1573164713988-8665fc963095", // smart device
  "photo-1518770660439-4636190af475",
  "photo-1591488320449-011701bb6704",
  "photo-1555680202-c86f0e12f086",
  "photo-1591799264318-7e6ef8ddb7ea",
  "photo-1587202372775-e229f172b9d7",
  "photo-1587829741301-dc798b83add3",
  "photo-1593640408182-31c70c8268f5",
];

const productDefs = [
  ["Helix NVMe Pro 2TB SSD", "Storage", "Ultra-low latency PCIe 4.0 enterprise SSD", ["NVMe", "PCIe 4.0", "Enterprise"]],
  ["Quantum DDR5 RAM 64GB Kit", "Memory", "High-frequency 6400MHz workstation memory", ["DDR5", "ECC", "Workstation"]],
  ["AuroraForce RTX Workstation GPU", "Graphics", "AI-accelerated professional graphics card", ["AI", "Ray Tracing", "Pro"]],
  ["TitanX Z890 Gaming Motherboard", "Motherboard", "Premium overclocking gaming platform", ["LGA1851", "DDR5", "WiFi 7"]],
  ["CryoStream 360 Liquid Cooler", "Cooling", "Triple-fan AIO with anti-leak coldplate", ["AIO", "360mm", "ARGB"]],
  ["NanoCore Mini PC i9", "Mini PC", "Compact powerhouse for hybrid workspaces", ["Compact", "Mini-ITX", "Office"]],
  ["IronEdge Industrial PC IPX-700", "Industrial PC", "Fanless rugged computer for harsh sites", ["Rugged", "Fanless", "IP65"]],
  ["VoltCore Platinum 1200W PSU", "Power", "80+ Platinum modular power supply", ["1200W", "Modular", "Platinum"]],
  ["MeshLink 10G Enterprise Switch", "Networking", "24-port 10GbE managed network switch", ["10GbE", "Managed", "L3"]],
  ["VaultArray NAS 8-Bay", "Storage", "Enterprise NAS storage with hot-swap bays", ["NAS", "RAID", "Enterprise"]],
  ["EchoMech RGB Mechanical Keyboard", "Accessories", "Hot-swap pro mechanical keyboard", ["Hotswap", "RGB", "Wireless"]],
  ["NeuroCompute AI Inference Module", "AI Hardware", "Edge AI accelerator for vision pipelines", ["Edge AI", "TOPS", "Vision"]],
  ["PulseEmbed SoM-X1 Module", "Embedded", "ARM-based system-on-module for IoT", ["ARM", "SoM", "IoT"]],
  ["GridSense Smart Sensor Hub", "Smart Devices", "Industrial IoT sensor aggregator", ["IoT", "Smart", "LoRa"]],
  ["FlowGate 5G Industrial Router", "Networking", "Rugged 5G router for field deployment", ["5G", "Rugged", "Cellular"]],
  ["StealthDrive U.2 Enterprise SSD 8TB", "Storage", "Datacenter-grade U.2 NVMe storage", ["U.2", "Datacenter", "NVMe"]],
  ["OrbitCore Server Motherboard", "Motherboard", "Dual-socket EPYC server platform", ["EPYC", "Dual Socket", "Server"]],
  ["VertexBlade Workstation Tower", "Industrial PC", "Render and simulation workstation", ["Workstation", "Render", "CAD"]],
  ["PhotonRack 1U Server Chassis", "Industrial PC", "1U short-depth edge server chassis", ["1U", "Edge", "Rack"]],
  ["BladeLink Fiber Transceiver", "Networking", "100G QSFP28 long-range transceiver", ["100G", "QSFP28", "Fiber"]],
  ["AuraView Touch Industrial Panel 15.6\"", "Smart Devices", "Capacitive industrial HMI display", ["HMI", "Touch", "Industrial"]],
  ["SparkBoard FPGA Dev Kit", "Embedded", "FPGA prototyping board for engineers", ["FPGA", "DevKit", "RTL"]],
];

export const products: Product[] = productDefs.map(([name, category, tagline, tags], i) => {
  const main = img(photos[i], i + 1);
  return {
    id: `${i + 1}-${(name as string).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/g, "")}`,
    name: name as string,
    category: category as string,
    tagline: tagline as string,
    description:
      `${name} is engineered by GREENTECH IMPORT AND EXPORT COMPANY LIMITED's global sourcing network to deliver enterprise-grade reliability for international clients. Built with premium components, it meets the needs of demanding industrial, commercial, and datacenter environments worldwide.`,
    image: main,
    gallery: [main, img(photos[(i + 4) % photos.length], i + 50), img(photos[(i + 7) % photos.length], i + 100), img(photos[(i + 11) % photos.length], i + 150)],
    tags: tags as string[],
    specs: [
      { label: "Form Factor", value: "Industry Standard" },
      { label: "Certification", value: "CE / FCC / RoHS" },
      { label: "Operating Temp", value: "-10°C ~ 70°C" },
      { label: "Warranty", value: "3-Year Global" },
      { label: "Origin", value: "International OEM Partners" },
      { label: "MOQ", value: "Negotiable" },
    ],
    features: [
      "Premium-grade components sourced through verified global partners",
      "Rigorous quality control before international shipment",
      "Optimized for 24/7 enterprise and industrial workloads",
      "Comprehensive technical documentation and support",
    ],
    applications: [
      "Datacenter & Cloud Infrastructure",
      "Industrial Automation & Manufacturing",
      "Smart City & IoT Deployments",
      "Enterprise IT Procurement",
    ],
  };
});
