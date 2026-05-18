import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

interface SiteFooterProps {
  currentPage?: "home" | "sectors" | "microfinance" | "aboutus" | "contact";
}

export default function SiteFooter({ currentPage }: SiteFooterProps) {
  const linkClass = (page: string) =>
    `transition-colors text-sm ${
      currentPage === page
        ? "text-primary font-semibold"
        : "text-white/70 hover:text-primary"
    }`;

  return (
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
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={linkClass("home")}
                >
                  Home
                </Link>
              </li>
              <li><Link href="/about" className={linkClass("aboutus")}>About Us</Link></li>
              <li><Link href="/sectors" className={linkClass("sectors")}>Our Sectors</Link></li>
              <li><Link href="/micro-finance" className={linkClass("microfinance")}>Micro-Finance</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contact Support</Link></li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
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
              <Button className="bg-primary hover:bg-primary/90 text-white uppercase font-bold tracking-widest w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© 2026 Zap Ceylon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
