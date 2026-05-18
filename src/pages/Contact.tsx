import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, ExternalLink } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const infoItems = [
  {
    Icon: MapPin,
    label: "Headquarters",
    lines: ["Walasmulla, Sri Lanka"],
  },
  {
    Icon: Mail,
    label: "Email Us",
    lines: ["zapceylon@gmail.com", "(Responses within 24 hours)"],
  },
  {
    Icon: Clock,
    label: "Business Hours",
    lines: ["Monday - Friday: 8:30 AM - 5:30 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
];

const departments = [
  "General Inquiry",
  "Export & Trade (Bulk Orders)",
  "Micro-Finance Application",
  "Construction & Infrastructure",
  "Partnership Proposal",
];

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Inquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNavbar currentPage="contact" />

      {/* ── Hero ── */}
      <section
        className="pt-16 flex flex-col items-center justify-center text-center py-24"
        style={{ background: "#0D1B2E" }}
      >
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Build Together
          </h1>
          <p className="text-white/65 text-lg leading-relaxed">
            Whether you need a reliable export partner, construction expertise, or financial support,
            our team is ready to assist you.
          </p>
        </motion.div>
      </section>

      {/* ── Get in Touch ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — info + map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-secondary mb-3">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                We value long-term partnerships. Reach out to us directly or visit our headquarters.
              </p>

              <div className="space-y-8 mb-10">
                {infoItems.map(({ Icon, label, lines }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary mb-1">{label}</p>
                      {lines.map((l, i) => (
                        <p key={i} className={`text-sm ${i === 0 ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <a
                  href="https://maps.google.com/?q=Walasmulla,Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 z-10 bg-white text-secondary text-xs font-semibold px-3 py-1.5 rounded-md shadow flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink size={12} />
                  Open in Maps
                </a>
                <iframe
                  title="Walasmulla, Sri Lanka"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63441.66!2d80.9793!3d6.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ee3c9c99c02b%3A0x4eed4ff32d37d0!2sWalasmulla%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                />
              </div>
            </motion.div>

            {/* Right — form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md border border-gray-100 border-t-4 border-t-primary overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Send a Message</h3>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#2E6B37]/15 flex items-center justify-center mx-auto mb-5">
                      <Mail className="w-8 h-8 text-[#2E6B37]" />
                    </div>
                    <h4 className="text-lg font-bold text-secondary mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground text-sm">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-primary text-sm font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 ..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Department / Interest</label>
                      <div className="relative">
                        <select
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors pr-10 cursor-pointer"
                        >
                          {departments.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help you today?"
                        required
                        rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-white uppercase font-bold tracking-widest py-6 h-auto rounded-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter currentPage="contact" />
    </div>
  );
}
