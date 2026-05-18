import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Building2,
  Cpu,
  Leaf,
  Diamond,
  HardHat,
  Truck,
  Monitor,
  Check,
} from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tabs = [
  { id: "trade", label: "TRADE & GOODS", Icon: Globe },
  { id: "infrastructure", label: "INFRASTRUCTURE", Icon: Building2 },
  { id: "services", label: "SERVICES & TECH", Icon: Cpu },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-5">
      {items.map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Check className="w-4 h-4 text-[#2E6B37] shrink-0" />
          <span className="text-secondary text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
}

function DimensionLabel({ number }: { number: string }) {
  return (
    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">
      CORE DIMENSION {number}
    </p>
  );
}

const NAVBAR_H = 64;
const SUBNAV_H = 56;
const SCROLL_OFFSET = NAVBAR_H + SUBNAV_H + 20;

function SubNavBar({
  fixed,
  activeTab,
  onTabClick,
}: {
  fixed: boolean;
  activeTab: string;
  onTabClick: (id: string) => void;
}) {
  return (
    <div
      className={`z-40 bg-secondary shadow-md ${
        fixed ? "fixed left-0 right-0 border-b border-white/10" : "w-full border-b border-white/10"
      }`}
      style={fixed ? { top: NAVBAR_H } : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 sm:space-x-8">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => onTabClick(id)}
              className={`flex items-center space-x-2 py-4 px-3 sm:px-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors border-b-2 ${
                activeTab === id
                  ? "text-primary border-primary"
                  : "text-white/60 border-transparent hover:text-white"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sectors() {
  const [activeTab, setActiveTab] = useState("trade");
  const [subNavFixed, setSubNavFixed] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    trade: null,
    infrastructure: null,
    services: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fix the sub-nav to the top once the hero scrolls out of view
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBotY = heroRef.current.getBoundingClientRect().bottom;
      setSubNavFixed(heroBotY <= NAVBAR_H);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the active tab as the user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    Object.entries(sectionRefs.current).forEach(([id, el]) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNavbar currentPage="sectors" />

      {/* Hero Banner — sub-nav is embedded at its natural bottom */}
      <section ref={heroRef} className="bg-secondary pt-36 pb-0 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-4 max-w-3xl pb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Industries &amp; Expertise
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            We combine deep local knowledge with global operational standards to
            deliver value across three core business dimensions.
          </p>
        </motion.div>

        {/* Sub-nav at its natural position inside the hero */}
        {!subNavFixed && (
          <SubNavBar fixed={false} activeTab={activeTab} onTabClick={scrollToSection} />
        )}
      </section>

      {/* Reserve height so content doesn't jump when sub-nav goes fixed */}
      {subNavFixed && <div style={{ height: SUBNAV_H }} />}

      {/* Fixed sub-nav — appears below main navbar once hero scrolls away */}
      {subNavFixed && (
        <SubNavBar fixed={true} activeTab={activeTab} onTabClick={scrollToSection} />
      )}

      {/* ── CORE DIMENSION 01 — Global Trade & Natural Products ── */}
      <section
        id="trade"
        ref={(el) => { sectionRefs.current.trade = el; }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <DimensionLabel number="01" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Global Trade &amp; Natural Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connecting Sri Lankan excellence to the world through export-grade
              supply chains and ethical sourcing.
            </p>
          </motion.div>

          {/* Agriculture & Export — image left, text right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20"
          >
            <div className="rounded-2xl overflow-hidden h-72 lg:h-96 shadow-sm bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
                alt="Ceylon spices and agriculture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-6">
              <Leaf className="text-[#2E6B37] w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Agriculture &amp; Export
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-1">
                We manage the journey from farm to port. Our focus is on
                high-value, processed agricultural products that meet
                international food safety standards.
              </p>
              <CheckList
                items={[
                  "Ceylon Spices (Cinnamon, Pepper)",
                  "Coconut & Tea Products",
                  "Essential Oils & Extracts",
                  "Export Compliance Documentation",
                ]}
              />
            </div>
          </motion.div>

          {/* Gems & Precious Materials — text left, image right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="lg:pr-6 order-2 lg:order-1">
              <Diamond className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Gems &amp; Precious Materials
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-1">
                Sri Lanka is the island of gems. We provide a transparent bridge
                for international buyers to source authentic, certified stones
                directly from the source.
              </p>
              <CheckList
                items={[
                  "Blue Sapphires & Rubies",
                  "Cutting & Polishing",
                  "Gem Valuation Services",
                  "Secure Logistics",
                ]}
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-72 lg:h-96 shadow-sm order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Precious gems and jewelry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thin separator */}
      <div className="h-2 bg-[#F5F5F7]" />

      {/* ── CORE DIMENSION 02 — Infrastructure & Energy ── */}
      <section
        id="infrastructure"
        ref={(el) => { sectionRefs.current.infrastructure = el; }}
        className="py-20 bg-[#F5F5F7]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <DimensionLabel number="02" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Infrastructure &amp; Energy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building the physical and digital foundations for modern life,
              from smart cities to green power.
            </p>
          </motion.div>

          {/* Construction & Smart Cities — image left, text right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20"
          >
            <div className="rounded-2xl overflow-hidden h-72 lg:h-96 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction and smart cities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-6">
              <HardHat className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Construction &amp; Smart Cities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-1">
                Beyond traditional building, we integrate smart technology into
                property development. We handle everything from civil works to
                facility management.
              </p>
              <CheckList
                items={[
                  "Residential & Commercial",
                  "Renovation & Interiors",
                  "Smart Building Systems",
                  "Landscaping",
                ]}
              />
            </div>
          </motion.div>

          {/* Logistics & Mobility — text left, image right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="lg:pr-6 order-2 lg:order-1">
              <Truck className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Logistics &amp; Mobility
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-1">
                Moving goods efficiently requires precision. Our logistics arm
                handles complex transport needs, including cold-chain and
                specialised cargo.
              </p>
              <CheckList
                items={[
                  "Warehousing",
                  "Cold Storage Chain",
                  "Fleet Management",
                  "Drone-enabled Solutions",
                ]}
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-72 lg:h-96 shadow-sm order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
                alt="Logistics and modern city"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thin separator */}
      <div className="h-2 bg-white" />

      {/* ── CORE DIMENSION 03 — Technology & Financial Services ── */}
      <section
        id="services"
        ref={(el) => { sectionRefs.current.services = el; }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <DimensionLabel number="03" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Technology &amp; Financial Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses through digital transformation and financial
              inclusion.
            </p>
          </motion.div>

          {/* Digital & Creative Tech — image left, text + CTA right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-2xl overflow-hidden h-72 lg:h-96 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Digital and creative tech workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-6">
              <Monitor className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Digital &amp; Creative Tech
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-1">
                We are the digital engine for modern businesses. From coding
                complex software to crafting compelling brand stories, we bring
                ideas to life.
              </p>
              <CheckList
                items={[
                  "AI & Automation",
                  "Web & App Development",
                  "Digital Marketing",
                  "Cybersecurity Audits",
                ]}
              />
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white uppercase font-bold tracking-widest px-8 py-6 h-auto">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
