import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Store,
  Tractor,
  Users,
  Banknote,
  Check,
  ClipboardCheck,
  FileText,
  SearchCheck,
  Wallet,
  Scale,
  Eye,
  Shield,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import SiteNavbar from "@/components/SiteNavbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GREEN = "#2E6B37";

const loanProducts = [
  {
    Icon: Store,
    title: "SME Working Capital",
    desc: "Short-term funding to help you manage daily operations, purchase stock, or handle seasonal demand.",
    features: ["Flexible repayment terms", "Quick approval process", "No hidden fees"],
  },
  {
    Icon: Tractor,
    title: "Equipment Financing",
    desc: "Specific loans for purchasing machinery, vehicles, or tools that increase your business productivity.",
    features: ["Asset-backed lending", "Competitive interest rates", "Direct payment to vendors"],
  },
  {
    Icon: Users,
    title: "Community Group Loans",
    desc: "Small-ticket loans designed for self-help groups and community collectives to foster mutual growth.",
    features: [
      "No collateral required (Group Guarantee)",
      "Financial literacy training included",
      "Empowering women entrepreneurs",
    ],
  },
  {
    Icon: Banknote,
    title: "Trade-Linked Finance",
    desc: "Supply chain financing for producers and farmers connected to the Zap Ceylon export network.",
    features: ["Linked to harvest/production cycles", "Guaranteed market access", "Fair pricing models"],
  },
];

const steps = [
  { Icon: ClipboardCheck, num: "1", title: "Consultation", desc: "Meet our officer to discuss your needs and check eligibility." },
  { Icon: FileText, num: "2", title: "Application", desc: "Submit basic ID proofs and business documents." },
  { Icon: SearchCheck, num: "3", title: "Assessment", desc: "We review your request quickly and fairly." },
  { Icon: Wallet, num: "4", title: "Disbursal", desc: "Funds are transferred directly to your account." },
];

const promises = [
  { Icon: Scale, label: "Fair Rates" },
  { Icon: Eye, label: "Full Transparency" },
  { Icon: Shield, label: "Data Privacy" },
];

export default function MicroFinance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNavbar currentPage="microfinance" />

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center pt-16 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)",
            filter: "blur(3px) brightness(0.5)",
            transform: "scale(1.05)",
          }}
        />
        {/* Blue-to-green gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,27,46,0.80) 0%, rgba(46,107,55,0.78) 100%)",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 container mx-auto px-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 leading-tight">
            Empowering Growth,<br />Building Futures
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Accessible financing solutions designed to support small businesses,
            entrepreneurs, and communities across Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              onClick={() => scrollTo("solutions")}
              className="uppercase font-bold tracking-widest px-8 py-6 h-auto"
              style={{ background: GREEN }}
            >
              View Loan Products
            </Button>
            <Button
              onClick={() => scrollTo("apply")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary uppercase font-bold tracking-widest px-8 py-6 h-auto bg-transparent"
            >
              Check Eligibility
            </Button>
          </div>
          <p className="text-white/70 text-sm italic">
            * All financing services are subject to regulatory approval, licensing, and credit assessment.
          </p>
        </motion.div>
      </section>

      {/* ── Why We Support Local Growth ── */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: GREEN }}>
              Why We Support Local Growth
            </h2>
            <div className="h-[3px] w-12 mx-auto mb-8 rounded-full" style={{ background: GREEN }} />
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              At Zap Ceylon, we believe that capital should not be a barrier to ambition. Our micro-finance
              division works to bridge the gap for those who need it most—offering responsible credit to
              upgrade equipment, stock inventory, or start a new venture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              We don't just lend money; we provide the financial foundation for sustainable livelihoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Financial Solutions ── */}
      <section id="solutions" className="py-20 bg-[#F0F7F1] text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
              Our Financial Solutions
            </h2>
            <p className="text-muted-foreground">
              Tailored specifically for the needs of Micro and SME sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProducts.map(({ Icon, title, desc, features }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 text-left shadow-sm border-t-4 border-t-[#2E6B37]"
              >
                <div className="mb-4">
                  <Icon className="w-9 h-9" style={{ color: GREEN }} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GREEN }} />
                      <span className="text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply ── */}
      <section id="apply" className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">How to Apply</h2>
            <p className="text-muted-foreground">A simple, transparent 4-step process.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map(({ Icon, num, title, desc }, idx) => (
              <motion.div
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Connector dots between steps */}
                {idx < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] text-gray-300 tracking-widest text-lg select-none">
                    - -
                  </span>
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md"
                  style={{ background: GREEN }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-secondary mb-2">
                  {num}. {title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Responsible Lending Promise ── */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Responsible Lending Promise
            </h2>
            <p className="text-white/65 mb-12 leading-relaxed">
              We are committed to ethical finance. We ensure that our loans help you grow, not burden
              you with unmanageable debt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              {promises.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <Icon className="w-10 h-10 text-primary" />
                  <span className="text-white font-semibold tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer (Micro-Finance variant) ── */}
      <footer className="bg-secondary text-white pt-20 pb-8" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            {/* Left */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-white font-extrabold text-2xl tracking-tight">ZAP</span>
                <span className="text-primary font-extrabold text-2xl tracking-tight">CEYLON</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs">
                A diversified business group focused on delivering high-quality products and services to the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"><WhatsAppIcon size={18} /></a>
              </div>
            </div>

            {/* Center */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="text-primary font-semibold hover:text-primary/80 transition-colors">Home</Link></li>
                <li><Link href="/sectors" className="text-white/70 hover:text-primary transition-colors">Our Sectors</Link></li>
                <li><Link href="/micro-finance" className="text-white/70 hover:text-primary transition-colors">Micro-Finance</Link></li>
                <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Finance Team</h4>
              <div className="space-y-4 text-white/70 text-sm mb-8">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>zapceylon@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Walasmulla, Sri Lanka</span>
                </div>
              </div>
              <Link href="/contact">
                <Button
                  className="uppercase font-bold tracking-widest w-full text-white"
                  style={{ background: GREEN }}
                >
                  Loan Enquiry
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>© 2026 Zap Ceylon. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
