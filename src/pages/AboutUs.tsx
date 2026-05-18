import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target,
  Rocket,
  Eye,
  Scale,
  BadgeCheck,
  Users,
  Lightbulb,
  Leaf,
  ShieldHalf,
} from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const pmv = [
  {
    Icon: Target,
    title: "Our Purpose",
    desc: "To build a trusted business ecosystem that delivers value and innovation—supporting clients and communities through ethical trade.",
  },
  {
    Icon: Rocket,
    title: "Our Mission",
    desc: "To provide dependable, compliant, and customer-focused solutions across our business pillars—driven by quality systems and skilled teams.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    desc: "To become a recognized Sri Lankan business group serving global markets through sustainable trade and smart infrastructure.",
  },
];

const values = [
  { Icon: Scale, label: "Integrity", desc: "We do business responsibly and ethically." },
  { Icon: BadgeCheck, label: "Quality", desc: "Consistent, export-grade standards." },
  { Icon: Users, label: "Commitment", desc: "We listen, respond, and deliver reliably." },
  { Icon: Lightbulb, label: "Innovation", desc: "Improving through technology and modern thinking." },
  { Icon: Leaf, label: "Sustainability", desc: "Balancing growth with social responsibility." },
];

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNavbar currentPage="aboutus" />

      {/* ── Hero ── */}
      <section className="relative h-[52vh] min-h-[320px] flex flex-col items-center justify-center text-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)",
            filter: "blur(2px) brightness(0.35)",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,46,0.65)" }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <nav className="flex items-center justify-center space-x-2 text-white/70 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Zap Ceylon</span>
          </nav>
        </motion.div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Who We Are</h2>
              <div className="h-[3px] w-12 mb-8 rounded-full bg-primary" />
              <p className="text-muted-foreground leading-relaxed mb-5">
                Zap Ceylon is a diversified business group focused on delivering high-quality products and
                services across global trade, agriculture, gems, construction, renewable energy, and digital
                innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We aim to connect opportunities between Sri Lanka and international markets—responsibly,
                efficiently, and with strong operational discipline.
              </p>
              <div className="border-l-4 border-primary pl-5 bg-gray-50 py-5 pr-5 rounded-r-lg">
                <p className="font-semibold text-secondary mb-3">We operate on two primary fronts:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>
                    <span className="font-semibold text-secondary">Export &amp; Trade: </span>
                    Building reliable supply chains and export-grade processes.
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">Micro-Financing: </span>
                    Empowering SMEs through structured financial support (Subject to approvals).
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right — office meeting image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Zap Ceylon team meeting"
                className="w-full h-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Purpose / Mission / Vision ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pmv.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.12 }}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="flex justify-center mb-5">
                  <Icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Core Values ── */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide our every decision.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map(({ Icon, label, desc }, idx) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#2E6B37] flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-secondary mb-2">{label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance & Compliance ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-secondary rounded-2xl px-8 py-14 text-center"
          >
            <ShieldHalf className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Governance &amp; Compliance
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto">
              Zap Ceylon is committed to operating within all applicable legal and regulatory frameworks.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
              Where activities require approvals, licensing, or permits (specifically in financial services
              and specific export categories), operations are carried out only after securing the necessary
              authorizations. We prioritize strong governance practices, risk management, and transparent
              business conduct.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Work With Us ── */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Work With Us</h2>
            <p className="text-secondary/80 mb-10 leading-relaxed">
              We welcome partnerships with suppliers, manufacturers, exporters, and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="uppercase font-bold tracking-widest px-8 py-6 h-auto bg-secondary text-white hover:bg-secondary/90">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white uppercase font-bold tracking-widest px-8 py-6 h-auto bg-transparent"
                >
                  Partnership Discussion
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter currentPage="aboutus" />
    </div>
  );
}
