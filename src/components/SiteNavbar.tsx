import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/logo_transparent.png";

interface SiteNavbarProps {
  currentPage?: "home" | "sectors" | "microfinance" | "aboutus" | "contact";
}

export default function SiteNavbar({ currentPage = "home" }: SiteNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (
    href: string,
    label: string,
    page: "home" | "sectors" | "microfinance" | "aboutus" | "contact"
  ) => {
    const isActive = currentPage === page;
    return (
      <Link
        href={href}
        className={`text-sm transition-colors ${
          isActive
            ? "text-primary font-semibold"
            : "text-secondary font-medium hover:text-primary"
        }`}
      >
        {label}
      </Link>
    );
  };

  const mobileLink = (
    href: string,
    label: string,
    page: "home" | "sectors" | "microfinance" | "aboutus" | "contact"
  ) => (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={`font-medium text-lg ${currentPage === page ? "text-primary font-semibold" : "text-secondary"}`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between" style={{ height: "64px" }}>
          <Link href="/" className="flex items-center overflow-hidden" style={{ height: "64px" }}>
            <img
              src={logoImg}
              alt="Zap Ceylon"
              style={{ height: "140px", width: "auto", marginTop: "-20px" }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLink("/", "Home", "home")}
            {navLink("/sectors", "Our Sectors", "sectors")}
            {navLink("/micro-finance", "Micro-Finance", "microfinance")}
            {navLink("/about", "About Us", "aboutus")}
            {navLink("/contact", "Contact", "contact")}
          </div>

          <button
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col space-y-6">
          {mobileLink("/", "Home", "home")}
          {mobileLink("/sectors", "Our Sectors", "sectors")}
          {mobileLink("/micro-finance", "Micro-Finance", "microfinance")}
          {mobileLink("/about", "About Us", "aboutus")}
          {mobileLink("/contact", "Contact", "contact")}
        </div>
      )}
    </>
  );
}
