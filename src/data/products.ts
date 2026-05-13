export interface Product {
  id: string;
  name: string;
  category: "Enterprise Storage" | "Industrial Computing" | "High-Performance Memory" | "Network Infrastructure" | "AI & Edge Hardware" | "Embedded";
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
}

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/g, "");

const createProduct = (
  name: string, 
  category: Product['category'], 
  imageName: string, 
  galleryIndices: string[],
  desc: string,
  tags: string[] = []
): Product => {
  // Đường dẫn tuyệt đối trỏ vào thư mục public/assets/products/
  const baseAssetPath = "/assets/products/";
  
  return {
    id: slugify(name),
    name,
    category,
    tagline: `Enterprise-grade ${category} solutions for international trade.`,
    description: desc,
    image: `${baseAssetPath}${imageName}.jpg`,
    gallery: galleryIndices.map(idx => `${baseAssetPath}${idx}.jpg`),
    tags: [...tags, "B2B", "OEM/ODM", "Professional Grade"],
    specs: [
      { label: "Certification", value: "CE / FCC / RoHS" },
      { label: "Warranty", value: "International Warranty" },
      { label: "Compliance", value: "Standard Industry Protocols" },
      { label: "Shipping", value: "Global Logistics Support (FOB/DDP)" }
    ],
    features: [
      "Rigorous quality control and pre-shipment testing",
      "Optimized for high-performance and durability",
      "Standard form factors for wide compatibility",
      "Professional-grade components for enterprise reliability"
    ],
    applications: [
      "High-Performance Computing & Gaming",
      "Data Center & Cloud Infrastructure",
      "Industrial Automation & Edge Systems"
    ]
  };
};

export const products: Product[] = [
  createProduct(
    "NVMe Gen4 PCIe M.2 SSD 500GB",
    "Enterprise Storage",
    "1",
    ["1", "1.1", "1.2", "1.3"],
    "This PCIe Gen4 performance drive improves boot times and launches applications faster with speeds up to 5,000MB/s. Its slim M.2 2280 design is compatible with modern laptops and PCs, utilizing advanced cache technologies for responsive multitasking."
  ),
  createProduct(
    "High-Density Gen4x4 NVMe SSD 256GB",
    "Enterprise Storage",
    "2",
    ["2", "2.1", "2.2"],
    "An ultra-compact M.2 2280 PCIe Gen 4x4 SSD designed for efficiency in both laptop and desktop environments. Features high-speed interface connectivity and robust build quality for reliable business or personal use."
  ),
  createProduct(
    "Gaming Performance Gen4x4 NVMe SSD 1TB",
    "Enterprise Storage",
    "3",
    ["3", "3.1", "3.2", "3.3", "3.4"],
    "Utilizing the PCIe Gen4x4 high-speed interface, this drive delivers sequential read speeds up to 7,400MB/s. Equipped with SLC cache technology and 3D NAND TLC flash, it is ideal for high-end gaming, professional video editing, and high-performance computing."
  ),
  createProduct(
    "Quad PCIe 4.0 NVMe M.2 Adapter Card",
    "Network Infrastructure",
    "4",
    ["4","4.1", "4.2", "4.3", "4.4"],
    "An active host adapter powered by a PCIe 4.0 switch, supporting four M.2 NVMe drives in a single x8 slot. Includes an independent cooling fan and aluminum alloy plate for efficient heat dissipation and stable RAID configurations."
  ),
  createProduct(
    "4-Drive NVMe SSD to PCIe 3.0 Adapter",
    "Network Infrastructure",
    "5",
    ["5", "5.1", "5.2", "5.3"],
    "Add up to four NVMe SSDs to your system with a single x4 PCIe 3.0 slot. Features a resilient aluminum heatsink with thermal padding to prevent throttling and supports advanced power management protocols for maximum efficiency."
  ),
  createProduct(
    "Industrial SATA M.2 SSD 128GB",
    "Enterprise Storage",
    "6",
    [],
    "A reliable SATA B+M Key 2280 internal solid state drive designed for OS boot acceleration and seamless multitasking in industrial or legacy computing systems."
  ),
  createProduct(
    "Professional SATA III M.2 SSD 128GB",
    "Enterprise Storage",
    "7",
    ["7", "7.1", "7.2", "7.3"],
    "Features 3D NAND Flash technology for enhanced performance and endurance. Offers sequential read speeds up to 560 MB/s and includes a DDR3 DRAM cache and LDPC error correction to ensure data integrity in compact form factors."
  ),
  createProduct(
    "8GB DDR4 2133P ECC Server Memory",
    "High-Performance Memory",
    "8",
    ["8", "8.1", "8.2"],
    "High-reliability 8GB DDR4 ECC memory module operating at 2133P. Engineered for enterprise workstations and servers requiring error-correcting code for mission-critical data stability."
  ),
  createProduct(
    "16GB 2RX4 PC4-2400T DDR4 ECC REG RAM",
    "High-Performance Memory",
    "9",
    ["9", "9.1", "9.2", "9.3"],
    "Enterprise-grade 16GB DDR4 Registered RAM with PC4-2400T specifications. This dual-rank (2RX4) module is optimized for high-density server configurations and intensive computational workloads."
  ),
  createProduct(
    "32GB (2X16GB) RX2800 i4 Server Memory Kit",
    "High-Performance Memory",
    "10",
    ["10", "10.1"],
    "Premium 32GB memory kit consisting of two 16GB modules. Designed specifically for high-end server architectures, providing enhanced bandwidth and stability for localized data processing."
  ),
  createProduct(
    "4GB PC2-5300F DDR2 Fully Buffered ECC RAM",
    "High-Performance Memory",
    "11",
    ["11", "11.1"],
    "Specialized 4GB DDR2 Fully Buffered memory for legacy server systems. Features hardware-level error correction (ECC) and advanced signal buffering to maintain integrity in continuous 24/7 operations."
  ),
  createProduct(
    "64GB Total (4X16GB) PC3L-10600R Server RAM Lot",
    "High-Performance Memory",
    "12",
    ["12", "12.1"],
    "Bulk 64GB memory solution comprising four 16GB PC3L-10600R modules. Optimized for low-voltage power efficiency without compromising the high-capacity requirements of enterprise virtualization."
  ),
  createProduct(
    "16GB 2RX4 PC4-2400T Registered Memory",
    "High-Performance Memory",
    "13",
    ["13", "13.1", "13.2", "13.3"],
    "High-performance 16GB Registered DIMM for professional server environments. Supports PC4-2400T standards and dual-rank architecture for reliable throughput in multi-threaded application sectors."
  ),
  createProduct(
    "32GB (8X4GB) 2Rx4 High-Density RAM Set",
    "High-Performance Memory",
    "14",
    ["14"],
    "A comprehensive 32GB memory set utilizing eight 4GB high-density modules. Ideal for specific multi-channel server motherboards requiring balanced memory distribution for stable high-load performance."
  ),
  createProduct(
    "6-Port Layer 2 Web Managed Gigabit Switch",
    "Network Infrastructure",
    "15",
    ["15", "15.1", "15.2", "15.3"],
    "A versatile 6-port Layer 2 managed switch featuring 4 RJ45 gigabit ports and one-click reset functionality. Supports VLAN, jumbo frames up to 12KB, and a 60Gbps exchange capacity for high-speed local networking."
  ),
  createProduct(
    "5-Port Cloud Managed Smart Gigabit Switch",
    "Network Infrastructure",
    "16",
    ["16", "16.1", "16.2", "16.3"],
    "Plug-and-play 5-port managed gigabit switch with effortless app and web interface control. Features advanced QoS optimization, 802.1Q VLAN support, and professional-grade network protection mechanisms for desktop or wall-mount deployment."
  ),
  createProduct(
    "24-Port High-Density Managed Gigabit Hub",
    "Network Infrastructure",
    "17",
    ["17", "17.1", "17.2", "17.3", "17.4"],
    "Enterprise-scale 24-port managed gigabit switch designed for unlimited connectivity. Includes automatic cable quality detection, storm control, and port mirroring, providing high cost-effectiveness for large-scale business network infrastructures."
  ),
  createProduct(
    "Remote PDU Smart Power Switch (2-Outlet)",
    "Network Infrastructure",
    "18",
    ["18", "18.1", "18.2", "18.3", "18.4", "18.5"],
    "Innovative phone-activated remote power controller for distant PDU management. Allows users to power cycle or reboot equipment through standard telephone lines, ensuring reliability even when internet or network connections are unavailable."
  ),
  createProduct(
    "Instant On 8-Port Smart Managed Edge Switch",
    "Network Infrastructure",
    "19",
    ["19", "19.1", "19.2"],
    "Small business-optimized 8-port gigabit Ethernet switch with fast set-up and layer 2 security. Supports flexible mounting options and can be powered via external adapter or upstream PoE, perfect for evolving network demands at the edge."
  ),
  createProduct(
    "Offline LLM AI Inference Module (4GB+32GB)",
    "AI & Edge Hardware",
    "20",
    ["20", "20.1", "20.2"],
    "Professional-grade offline Large Language Model inference module featuring an AX630C processor, 4GB LPDDR4 RAM, and 32GB EMMC storage. This compact 54x54mm module is designed for local AI computation without requiring external network connectivity."
  ),
  createProduct(
    "AX630C Offline Large Language Model AI Module",
    "AI & Edge Hardware",
    "21",
    ["21", "21.1", "21.2"],
    "Standalone AI inference module powered by the AX630C processor for specialized Large Language Model tasks. Engineered for developers and industrial integrators looking to deploy private, high-performance AI edge solutions."
  ),
  createProduct(
    "Enterprise AI Inference Core Module AX630C",
    "AI & Edge Hardware",
    "22",
    ["22", "22.1", "22.2"],
    "Advanced AI module set with AX630C core, optimized for offline LLM processing. Features robust onboard storage and memory to handle complex neural network architectures in industrial measurement and data acquisition environments."
  ),
  createProduct(
    "Multimedia Wireless AI Interface Box (Android 10)",
    "AI & Edge Hardware",
    "23",
    ["23", "23.1", "23.2", "23.3"],
    "Multimedia AI box featuring an 8-core 2.3GHz CPU and MediaTek T610 GPU. Provides high-speed 4G connectivity, GPS integration, and dual Bluetooth 5.0 for seamless wireless CarPlay and Android Auto integration in automotive sectors."
  ),
  createProduct(
    "Octa-Core Wireless Smart AI Box (Android 12)",
    "AI & Edge Hardware",
    "24",
    ["24", "24.1", "24.2", "24.3"],
    "Smart-managed AI box powered by Qualcomm Snapdragon Octa-Core architecture. Offers 4GB RAM + 64GB ROM, LTE full netcom support, and an Android 12 environment designed for high-end vehicle multimedia upgrades with wireless connectivity."
  ),
  createProduct(
    "UltraScale+ FPGA Core Development Board",
    "Embedded",
    "25",
    ["25", "25.1", "25.2", "25.3"],
    "High-performance FPGA core board based on the UltraScale+ XCKU5P-1FFVB676 chip. Features onboard 8Gbit DDR4, 128Mbit FLASH, and an 8-layer PCB design with a 20A core DCDC chip for maximum operational stability in development environments."
  ),
  createProduct(
    "Altera Cyclone IV FPGA Core System Board",
    "Embedded",
    "26",
    ["26", "26.1", "26.2", "26.3"],
    "Professional FPGA development board featuring the Cyclone IV EP4CE6E22C8N system-on-chip. Built with industrial-grade plastic and lead-out IO ports for rapid prototyping, debugging, and integration into custom electronic hardware systems."
  )
];