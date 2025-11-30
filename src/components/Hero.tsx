
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, CheckCircle, ChevronRight, Code2, Search, Clock, Home, TrendingUp, Rocket } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackBookCall, trackWhatsApp, trackPhoneCall, trackCalendlyEvent, trackSectionView } from "@/lib/analytics";
import { useState, useEffect } from "react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
// import LottieLoader from "@/components/LottieLoader"; // Commented out for performance testing

interface HeroProps {
  location?: string;
}

const Hero = ({ location }: HeroProps = {}) => {
  const { phone, facebookUrl, tagline } = useBusiness();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Load Elfsight widget script
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('elfsight-platform-js')) {
      const script = document.createElement('script');
      script.id = 'elfsight-platform-js';
      script.type = 'text/javascript';
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  
  const services = [
    {
      title: "Starter",
      description: "Perfect for businesses that need a reliable online presence with essential maintenance and hosting. Get your website indexed on Google and keep it running smoothly.",
      tagline: "\"I need a basic website up and running\"",
      icon: Home,
      price: "£39",
      priceNote: "per month",
      features: [
        "Hosting & Maintenance Included",
        "Critical Security Updates",
        "Get Found on Google (Indexed)",
        "SSL Certificate & Regular Backups",
        "Email Support",
        "Minor Content Updates (quoted separately)"
      ],
      popular: false
    },
    {
      title: "Growth",
      description: "The most popular choice for businesses ready to grow. Enhanced Google visibility, review strategy, and regular updates to help you attract more customers.",
      tagline: "\"I want more consistent business\"",
      icon: TrendingUp,
      price: "£79",
      priceNote: "per month",
      features: [
        "Everything in Starter, plus:",
        "Enhanced Google Visibility & Local SEO",
        "Google Business Profile Optimization",
        "Review Generation Strategy",
        "Regular Content Updates (up to 5/month)",
        "Analytics & Monthly Reports",
        "Priority Email Support"
      ],
      popular: true
    },
    {
      title: "Scale",
      description: "For businesses serious about rapid growth. Active SEO improvements, comprehensive Google Business Profile management, and social media strategy to accelerate your success.",
      tagline: "\"I need maximum visibility and growth\"",
      icon: Rocket,
      price: "£119",
      priceNote: "per month",
      features: [
        "Everything in Growth, plus:",
        "Active SEO & Ranking Improvements",
        "Advanced Google Business Profile Management",
        "Comprehensive Review Strategy & Monitoring",
        "Social Media Strategy",
        "Advanced Analytics & Reporting",
        "Unlimited Content Updates",
        "Dedicated Account Manager",
        "Quarterly Strategy Reviews"
      ],
      popular: false
    }
  ];
  
  const headline = location 
    ? <>Web Design & SEO<br />for <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">{location === 'Scotland' ? 'Scottish Businesses' : `${location} Businesses`}</span></>
    : <>Web Design & SEO<br />That Generate <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Real Customers</span></>;
  
  const trustNote = location 
    ? `Trusted by ${location === 'Scotland' ? 'Scottish' : location} businesses`
    : "Used by loads of local businesses";

  // Track section views when they come into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              trackSectionView(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const faqData = [
    {
      question: "How long does it take to get my website?",
      answer: "Usually within 48 hours once you're set up. Sometimes faster, sometimes a day or two longer if it's more complex, but I'll let you know upfront."
    },
    {
      question: "What's included in the Growth package (£79/month)?",
      answer: "Everything you need to grow online. Enhanced Google visibility, Google Business Profile optimization, review strategy, regular content updates (up to 5/month), hosting, maintenance, monthly analytics reports, and priority support. All included."
    },
    {
      question: "How are payments done?",
      answer: "Through Stripe mostly - it just takes your payment each month automatically. If that doesn't work for you, we can sort something else out. No big deal."
    },
    {
      question: "What if I don't like my website?",
      answer: "14-day money-back guarantee. If you're not happy with it, just let me know and I'll refund you. Simple as that."
    },
    {
      question: "Can you help with SEO and getting found on Google?",
      answer: "Yeah, definitely. I'll make sure you show up when people search locally, get your site fast and mobile-friendly, and help with your Google reviews so you rank better."
    },
    {
      question: "What if I need changes after launch?",
      answer: "No worries at all. Changes are included - whether that's updating text, adding pages, or tweaking the design. Just ask and I'll sort it."
    }
  ];

  // Calendly script will be loaded lazily by HomeContact component
  // Removed duplicate loading here

  const openCalendly = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };


  const handlePhoneClick = () => {
    trackCTA('phone', 'hero');
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    trackCTA('messenger', 'hero');
    window.open(facebookUrl, '_blank');
  };

  return (
    <>
      <section 
        id="home"
        data-section="Hero"
        className="relative min-h-screen flex items-center justify-start overflow-x-hidden"
        style={{ backgroundColor: '#eae6e8' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
            {/* Main Headline - Render immediately for LCP (no animation delay) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thicccboi font-bold !text-black mb-6 leading-tight">
              {headline}
            </h1>
            
            {/* Google Review */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2">
                {/* Google Logo */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  </div>
                {/* Verified Badge */}
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Free website preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>14 day money back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Trusted by loads of local businesses</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <a href="/contact">
              <Button 
                onClick={() => trackBookCall('hero')}
                className="relative bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white font-inter font-medium text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.4)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-xl before:opacity-60"
              >
                Get a free preview
              </Button>
              </a>
            </motion.div>
            </div>
            
            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end -mt-4 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.7 }}
                className="relative w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto flex items-center justify-center"
              >
                <img
                  src="/herocards.png"
                  alt="Web design and development showcase"
                  width="800"
                  height="800"
                  className="w-full h-auto max-w-full object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section data-section="Testimonial" className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-thicccboi font-semibold text-gray-900 leading-relaxed">
              Start getting <span className="text-blue-600">clients</span>. Stop wasting time <span className="text-blue-600">advertising</span>.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Layered Wave Section */}
      <section className="relative overflow-x-hidden hide-scrollbar" style={{ backgroundColor: '#eae6e8' }}>
        {/* Top Wave */}
        <svg className="block w-full rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>

        {/* Text above rectangle */}
        <div className="w-full py-2 hide-scrollbar" style={{ backgroundColor: '#3b82f6', marginTop: '-1px' }}>
          <div >
            <p className="text-white font-figtree font-medium text-xs sm:text-sm text-center">
              We've worked with loads of different businesses - cafes, tradespeople, healthcare, shops, all sorts
            </p>
          </div>
        </div>

        {/* Center Rectangle */}
        <div className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#3b82f6' }}>
          <div className="flex animate-scroll-infinite whitespace-nowrap">
            {/* First set of logos */}
            {[
              '/Logos/coffee-cup.svg',
              '/Logos/dirtworks.webp',
              '/Logos/logo-with-ange.webp',
              '/Logos/nk-logo.webp',
              '/Logos/rblogo.webp',
              '/Logos/remilogo.webp',
              '/Logos/rp-logo.webp',
              '/Logos/sclogo.webp'
            ].map((logo, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
                <img 
                  src={logo} 
                  alt={logo.includes('tasse') ? 'Tasse Coffee Co logo' : logo.includes('able') ? 'Able Health logo' : `Company logo ${i + 1}`}
                  loading="lazy"
                  width="56"
                  height="56"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  decoding="async"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {[
              '/Logos/coffee-cup.svg',
              '/Logos/dirtworks.webp',
              '/Logos/logo-with-ange.webp',
              '/Logos/nk-logo.webp',
              '/Logos/rblogo.webp',
              '/Logos/remilogo.webp',
              '/Logos/rp-logo.webp',
              '/Logos/sclogo.webp'
            ].map((logo, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
                <img 
                  src={logo} 
                  alt={logo.includes('tasse') ? 'Tasse Coffee Co logo' : logo.includes('able') ? 'Able Health logo' : `Company logo ${i + 1}`}
                  loading="lazy"
                  width="56"
                  height="56"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  decoding="async"
                  />
                </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <svg className="block w-full -mb-px" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>
      </section>

      {/* Google Reviews */}
      <section data-section="Google Reviews" className="py-24 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Elfsight Google Reviews Widget */}
          <div className="flex justify-center">
            <div className="elfsight-app-6d611b9b-92e1-4dd6-8023-d1abe744c5bb" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Free Website Demo Section */}
      <section data-section="Free Demo Video" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight"
            >
              Get a <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">free</span> website demo.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-700 font-figtree max-w-3xl mx-auto leading-relaxed"
            >
              Book a free demo, no strings attached. If you like it, you keep it. Plus there's a 14-day money-back guarantee if you change your mind.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed 
              videoId="TLP23s2cmEQ" 
              title="CodaPixel Website Demo"
            />
          </div>
          
          {/* CTA Button After Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <a href="/contact">
            <Button 
              onClick={() => trackBookCall('video_section')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-figtree font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get a free preview
            </Button>
            </a>
          </motion.div>
        </div>
      </section>


      {/* Websites that Generate Clients Section */}
      <section id="services" data-section="Services" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
                <div className="space-y-8">
                    <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight">
                    Websites that<br />
                    <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">generate clients</span>
                  </h2>
                  <p className="text-xl text-gray-700 font-figtree leading-relaxed">
                    As a professional website design company specializing in small business, we build sites that actually work - fast, mobile-friendly, and ranking on Google. You'll be able to see how many enquiries you're getting each month - that's the bit that matters.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">Book a quick call</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">I'll show you a preview</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">Launch it and keep it running</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <a href="/contact">
                    <Button 
                      onClick={() => trackBookCall('websites_generate_clients')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-figtree font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book a free demo
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right - Image */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="/rokman.webp"
                    alt="Websites that generate clients"
                    width="512"
                    height="360"
                    className="w-full h-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly Report Section */}
      <section id="analytics" data-section="Analytics" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 font-thicccboi leading-tight">
                Know What's Working, <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Instantly</span>
                </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-figtree leading-relaxed">
                You'll see how many people visit your site, how many enquiries you get, where they're coming from - all that stuff. Helps you figure out what's actually working.
              </p>
            </motion.div>

            {/* Left - Mobile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/phone.webp"
                alt="Mobile analytics preview"
                width="665"
                height="1216"
                className="mx-auto lg:mx-0 max-w-full w-full sm:w-full md:w-full lg:w-full"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 665px"
                decoding="async"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          </div>
                    </div>
      </section>

      {/* Duplicate Layered Wave Section */}
      <section className="relative overflow-x-hidden hide-scrollbar" style={{ backgroundColor: '#eae6e8' }}>
        {/* Top Wave */}
        <svg className="block w-full rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>

        {/* Center Rectangle with Text */}
        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center" style={{ backgroundColor: '#3b82f6' }}>
          <div className="text-center px-4">
            <h3 className="text-white font-figtree font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              14-Day Money-Back Guarantee
            </h3>
            <p className="text-white font-figtree font-medium text-sm sm:text-base md:text-lg leading-relaxed">
              Not happy with it? No problem - get a full refund within 14 days. No questions, no hassle.
                      </p>
                    </div>
                  </div>

        {/* Bottom Wave */}
        <svg className="block w-full -mb-px" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" data-section="Portfolio" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 font-thicccboi">
                Our <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Portfolio</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Portfolio Item 1 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/able_compressed.webp" 
                      alt="Able Health Website" 
                      width="665"
                      height="481"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">Able Health</h3>
                    <p className="text-gray-600 text-sm">Professional healthcare website design</p>
                  </div>
                </div>

                {/* Portfolio Item 2 - Tasse Coffee Co */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/tassecoffeeco.webp" 
                      alt="Tasse Coffee Co Website" 
                      width="665"
                      height="388"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">Tasse Coffee Co</h3>
                    <p className="text-gray-600 text-sm">Artisan coffee company website</p>
                    </div>
                </div>

                {/* Portfolio Item 3 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/holistics71.webp" 
                      alt="Holistics71 Website" 
                      width="665"
                      height="388"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">Holistics71</h3>
                    <p className="text-gray-600 text-sm">Modern holistic wellness platform</p>
                  </div>
                </div>

                {/* Portfolio Item 4 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/dirtydeeds.png" 
                      alt="Dirty Deeds Website" 
                      width="665"
                      height="388"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">Dirty Deeds</h3>
                    <p className="text-gray-600 text-sm">Professional cleaning services</p>
                    </div>
                </div>

                {/* Portfolio Item 5 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/proroof.webp" 
                      alt="ProRoof Website" 
                      width="665"
                      height="405"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">ProRoof</h3>
                    <p className="text-gray-600 text-sm">Professional roofing services</p>
                  </div>
                </div>

                {/* Portfolio Item 6 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="bg-white overflow-hidden aspect-[665/388]">
                    <img 
                      src="/Portfolio/sparklessite.webp" 
                      alt="Sparkle's Cleaning Service Website" 
                      width="665"
                      height="389"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-thicccboi">Sparkle's Cleaning Service</h3>
                    <p className="text-gray-600 text-sm">Professional cleaning services website & local SEO</p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-visible">
        <div className="container mx-auto max-w-7xl px-4 overflow-visible">
          {/* Black Friday Deal Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-6 shadow-2xl border-4 border-orange-500 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-orange-500 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-figtree">
                    Black Friday Special Offer
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-white font-figtree font-semibold">
                  Get <span className="text-orange-400 font-bold">50% OFF</span> your first month when you onboard before December 1st!
                </p>
                <p className="text-base md:text-lg text-orange-200 font-figtree mt-2 font-semibold">
                  Use promo code: <span className="text-orange-400 font-bold text-xl">DECEMBER1</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-figtree">
              Pricing
            </h2>
            <p className="text-xl text-gray-300 font-figtree mb-4 max-w-3xl mx-auto">
              Choose the package that fits your business needs. From essential hosting and maintenance to comprehensive growth strategies with active SEO, social media, and dedicated support.
            </p>
            <p className="text-lg text-blue-400 font-medium font-figtree">
              "{tagline}"
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-full relative"
              >
                <div className={`h-full relative flex flex-col rounded-3xl overflow-visible transition-all duration-300 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 shadow-2xl shadow-blue-500/50 scale-105 border-2 border-blue-400' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/20'
                }`}>
                  {/* Popular Badge - Positioned at top center of card */}
                  {service.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold font-figtree shadow-xl whitespace-nowrap">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Inner content container with overflow-hidden for rounded corners */}
                  <div className="h-full flex flex-col overflow-hidden rounded-3xl relative">

                    {/* Decorative gradient overlay for popular */}
                    {service.popular && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
                    )}

                    <div className={`p-8 flex flex-col flex-1 relative z-10 ${service.popular ? 'pt-10' : ''}`}>
                    {/* Package Title */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        {service.icon && (() => {
                          const IconComponent = service.icon;
                          return (
                            <div className={`p-2 rounded-xl ${service.popular ? 'bg-white/20' : 'bg-blue-600/20'}`}>
                              <IconComponent className={`w-6 h-6 ${service.popular ? 'text-white' : 'text-blue-400'}`} />
                            </div>
                          );
                        })()}
                        <CardTitle className={`text-2xl font-bold font-figtree ${service.popular ? 'text-white' : 'text-white'}`}>
                          {service.title}
                        </CardTitle>
                      </div>
                      {/* Tagline */}
                      {service.tagline && (
                        <p className={`text-sm font-figtree mt-2 leading-relaxed ${service.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                          {service.tagline}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-6xl font-bold font-figtree ${service.popular ? 'text-white' : 'text-white'}`}>
                          {service.price}
                        </span>
                      </div>
                      <p className={`text-sm font-figtree mt-1 ${service.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                        {service.priceNote}
                      </p>
                    </div>

                    {/* Features List */}
                    <CardContent className="flex-1 flex flex-col p-0 mb-8">
                      <div className="space-y-4 flex-1">
                        <ul className="space-y-3.5">
                          {service.features.map((feature, featureIndex) => {
                            const isHeader = feature.includes("Everything in") && feature.includes("plus:");
                            return (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <div className={`mt-0.5 flex-shrink-0 ${
                                  isHeader 
                                    ? service.popular ? 'text-yellow-200' : 'text-blue-300'
                                    : service.popular ? 'text-white' : 'text-blue-500'
                                }`}>
                                  <Check className={`w-5 h-5 ${isHeader ? 'opacity-80' : ''}`} strokeWidth={3} />
                                </div>
                                <span className={`text-sm font-figtree leading-relaxed ${
                                  isHeader 
                                    ? `font-bold ${service.popular ? 'text-yellow-200' : 'text-blue-300'}` 
                                    : service.popular ? 'text-white/90' : 'text-gray-300'
                                }`}>
                                  {feature}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </CardContent>

                    {/* CTA Button */}
                    <a href="/contact" className="mt-auto">
                      <Button className={`w-full font-figtree font-semibold py-4 rounded-xl transition-all duration-300 ${
                        service.popular 
                          ? 'bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                      }`}>
                        Get Started
                      </Button>
                    </a>
                  </div>

                    {/* Bottom accent line for popular */}
                    {service.popular && (
                      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-section="FAQ" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - FAQ */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-12 leading-tight">
                Frequently asked<br />
                <span className="ml-0 italic">questions</span>
              </h2>
              
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-300/30">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      aria-expanded={openFAQ === index}
                      aria-label={`${faq.question} - ${openFAQ === index ? 'Collapse' : 'Expand'}`}
                      className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50/50 rounded-lg px-2 -mx-2 transition-colors duration-200"
                    >
                      <p className="text-gray-700 text-lg font-figtree font-medium pr-4">{faq.question}</p>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFAQ === index ? 'rotate-90' : 'rotate-0'
                        }`} 
                      />
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 px-2">
                          <p className="text-gray-600 font-figtree leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="bg-gradient-to-b from-yellow-400 via-orange-500 to-purple-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Grainy texture overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] bg-repeat"></div>
                  
                  {/* Profile Picture */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                      {/* <LottieLoader 
                        src="https://lottie.host/d5d62b25-5fff-4af3-bfbd-f07d8d6b9e87/zZUgNVmBVU.lottie" 
                        style={{ width: '64px', height: '64px' }} 
                        autoplay 
                        loop
                      /> */}
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-white text-2xl font-thicccboi font-semibold mb-4 leading-tight">
                      Ready to Get Started?<br />
                      Get a free preview
                    </h3>
                    
                    {/* Buttons Container */}
                    <div className="flex flex-col gap-4">
                      {/* Button */}
                      <a 
                        href="/contact"
                        onClick={() => trackBookCall('faq')}
                        aria-label="Get a free preview from FAQ section"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        Get a free preview
                      </a>
                      
                      {/* WhatsApp Button */}
                      <a 
                        href="https://wa.me/447792145328"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsApp('faq')}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;










