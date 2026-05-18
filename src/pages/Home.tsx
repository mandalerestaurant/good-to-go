import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  DollarSign, 
  Ship, 
  Leaf, 
  Diamond, 
  Building2, 
  Zap, 
  Monitor, 
  Truck, 
  Heart, 
  FileText,
  CheckSquare,
  RefreshCw,
  TrendingUp,
  Handshake,
  MessageCircle,
} from "lucide-react";
import heroBg from "@assets/image_1779013905888.png";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SiteNavbar currentPage="home" />

      {/* Hero Section */}
      <section id="top" className="relative h-[100dvh] flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            filter: "blur(6px) brightness(0.08)",
            transform: "scale(1.08)"
          }}
        />
        <div className="absolute inset-0 z-10 bg-[#0D1B2E]/70" />
        
        <div className="container relative z-20 mx-auto px-4 text-center flex flex-col items-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-[56px] font-bold text-white mb-6 leading-tight max-w-4xl"
          >
            Connecting Sri Lanka to the World
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-[600px] leading-relaxed"
          >
            Zap Ceylon is a multi-sector business group delivering trusted solutions in global trade, agriculture, infrastructure, and inclusive finance.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link href="/sectors">
              <Button className="bg-primary hover:bg-primary/90 text-white uppercase font-bold tracking-widest px-8 py-6 h-auto">
                Our Sectors
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary uppercase font-bold tracking-widest px-8 py-6 h-auto bg-transparent">
                Partner With Us
              </Button>
            </Link>
          </motion.div>
          <motion.p
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.6 }}
            className="text-white/70 text-sm font-medium tracking-wide"
          >
            Internationally Focused • Compliance-Driven • Quality-First
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-white" id="about">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">A Partner Built for Modern Business</h2>
            <div className="h-[3px] w-[50px] bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Zap Ceylon, we bridge the gap between local production and global demand. From sourcing export-ready spices to delivering smart infrastructure and structured financing, we operate with one goal: <strong className="text-secondary font-bold">create real value with integrity and efficiency.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Column CTA */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Export CTA */}
        <div className="flex-1 bg-secondary text-white py-20 px-8 md:px-16 flex flex-col items-start justify-center">
          <Globe className="text-primary w-12 h-12 mb-6" />
          <h3 className="text-3xl font-bold mb-4">Export & International Trade</h3>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
            From Sri Lanka to global markets with standards that travel. We source, process, and export spices, tea, coconut products, and gems with a quality-driven approach.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary uppercase font-bold tracking-widest bg-transparent mb-4">
              Request Export Quote
            </Button>
          </Link>
          <p className="text-white/60 text-sm italic">* High-value natural products & essential oils</p>
        </div>

        {/* Micro-finance CTA */}
        <div className="flex-1 bg-[#2E6B37] text-white py-20 px-8 md:px-16 flex flex-col items-start justify-center" id="microfinance">
          <DollarSign className="text-primary w-12 h-12 mb-6" />
          <h3 className="text-3xl font-bold mb-4">Micro-Financing & Inclusion</h3>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
            Practical financing solutions designed to empower small businesses and communities. We support entrepreneurship through responsible lending principles.
          </p>
          <Link href="/micro-finance">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2E6B37] uppercase font-bold tracking-widest bg-transparent mb-4">
              Micro-Finance Enquiries
            </Button>
          </Link>
          <p className="text-white/60 text-sm italic">* Subject to regulatory approvals & licensing</p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-[#F5F5F7]" id="sectors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Business Pillars</h2>
            <p className="text-lg text-muted-foreground">One Group. Multiple Capabilities.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: <Ship />, title: "Global Trade & Supply", desc: "Import/Export of raw materials, machinery, electronics, and finished goods for local and global markets." },
              { icon: <Leaf />, title: "Agriculture & Natural Products", desc: "Sustainable sourcing of spices, coconut, tea, and high-value nutraceuticals with export-grade packaging." },
              { icon: <Diamond />, title: "Gems & Precious Materials", desc: "Trusted sourcing, cutting, polishing, and valuation of Sri Lankan gems for international buyers." },
              { icon: <Building2 />, title: "Construction & Infrastructure", desc: "Civil works, property development, smart city technologies, and facility management." },
              { icon: <Zap />, title: "Renewable Energy", desc: "Solar, wind, EV solutions, and circular economy recycling initiatives driving a greener future." },
              { icon: <Monitor />, title: "Digital & Creative Tech", desc: "Software, AI, automation, web design, and digital marketing to modernize business presence." },
              { icon: <Truck />, title: "Logistics & Operations", desc: "Warehousing, cold-chain storage, transport services, and specialized marine logistics." },
              { icon: <Heart />, title: "Health & Professional Services", desc: "Healthcare initiatives, wellness, education training, and compliance consulting." },
              { icon: <FileText />, title: "Financial & Corporate", desc: "Trade finance support, corporate secretarial, and structured advisory services (Subject to approvals)." },
            ].map((pillar, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-secondary hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/5 rounded-lg flex items-center justify-center text-secondary mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/sectors">
              <Button className="bg-secondary hover:bg-secondary/90 text-white uppercase font-bold tracking-widest px-8 py-6 h-auto">
                View All Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Zap Ceylon */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Zap Ceylon?</h2>
            <p className="text-lg text-white/70">Built on governance, risk management, and operational discipline.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              { icon: <CheckSquare className="w-8 h-8 text-primary" />, title: "Compliance First", desc: "We prioritize regulation and export-grade documentation." },
              { icon: <RefreshCw className="w-8 h-8 text-primary" />, title: "Sustainability", desc: "Green energy and circular economy practices." },
              { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Tech-Driven", desc: "Data, AI, and automation for efficiency." },
              { icon: <Handshake className="w-8 h-8 text-primary" />, title: "Partnership Led", desc: "Long-term relationships, not just transactions." },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/5 rounded-full">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">How We Work</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          >
            {[
              { num: "1", title: "Understand", desc: "We assess your product needs, timelines, and compliance requirements." },
              { num: "2", title: "Plan & Execute", desc: "Sourcing, processing, documentation, packaging, and logistics." },
              { num: "3", title: "Support & Scale", desc: "Continuous improvement, repeat supply, and long-term partnership." },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center text-2xl font-bold text-secondary mb-6">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serving Banner */}
      <div className="bg-[#F5F5F7] py-6 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground uppercase">
            Serving: Importers & Exporters • Retail & Wholesale • Hospitality • Construction • Agriculture • Government & Institutions
          </p>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}