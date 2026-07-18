import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Nehemiah Foundation International Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <p className="font-display font-semibold text-sm leading-tight">
                  Nehemiah Foundation
                </p>
                <p className="text-xs text-primary-foreground/70">International</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering individuals and communities through agricultural development, 
              skill acquisition, and cooperative society support across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Programs", href: "/programs" },
                { name: "Projects", href: "/projects" },
                { name: "Register for Training", href: "/register" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                "Agricultural Training",
                "Tech Skills Development",
                "Business & Entrepreneurship",
                "Cooperative Support",
              ].map((program) => (
                <li key={program}>
                  <span className="text-primary-foreground/80 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium text-primary-foreground mb-1">Abuja Office:</p>
                  <p>Adisa Plaza, Block B, Suite 2B,</p>
                  <p>No 39 David Ejoor Crescent,</p>
                  <p>Gudu District, Abuja, FCT</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+2348123223339"
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors block"
                  >
                    +234-812 322 3339
                  </a>
                  <a
                    href="tel:+2347044680182"
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors block"
                  >
                    +234-704 468 0182
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@nehemiahfoundation.org"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  info@nehemiahfoundation.org
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Nehemiah Foundation International. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
