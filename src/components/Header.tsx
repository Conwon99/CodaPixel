
import { Phone, Menu, X, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackBookCall, trackCTA } from "@/lib/analytics";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { name, phone, facebookUrl } = useBusiness();

  // Calendly script will be loaded lazily by HomeContact component
  // Removed duplicate loading here

  const openCalendly = () => {
    trackBookCall('header');
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    trackCTA('phone', 'header');
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    trackCTA('messenger', 'header');
    window.open(facebookUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element doesn't exist, navigate to home and then scroll
      window.location.href = `/#${elementId}`;
    }
  };

  const handleScrollToOnMobile = (elementId: string) => {
    setIsMobileMenuOpen(false);
    handleScrollTo(elementId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/C logo.webp" 
              alt="CodaPixel Logo"
              className="h-12 w-auto"
              width="120"
              height="48"
              loading="eager"
            />
          </a>
          
          {/* Right-aligned Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <a 
                href="/"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Home
              </a>
              <a 
                href="/services"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Services
              </a>
              <button 
                onClick={() => handleScrollTo('portfolio')}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Portfolio
              </button>
              <a 
                href="/contact"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://x.com/CodaPixelDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/codapixel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/codapixel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Desktop CTA */}
            <a href="/contact">
              <Button 
                className="relative bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white px-6 py-2 font-medium rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.4)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-xl before:opacity-60"
              >
                Get Free Preview
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cleaning-border">
            <nav className="flex flex-col items-start space-y-4 mt-4">
              <a 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left w-full text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Home
              </a>
              <a 
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left w-full text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Services
              </a>
              <button 
                onClick={() => handleScrollToOnMobile('portfolio')}
                className="text-left w-full text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Portfolio
              </button>
              <a 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left w-full text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex flex-col items-start space-y-4 mt-4">
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://x.com/CodaPixelDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/codapixel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/codapixel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[#3b82f6] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a href="/contact" className="w-full sm:w-auto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  onClick={() => trackBookCall('mobile_menu')}
                  className="relative bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white px-6 py-3 font-figtree font-medium w-full sm:w-auto rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.4)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-xl before:opacity-60"
                >
                  Get Free Preview
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
