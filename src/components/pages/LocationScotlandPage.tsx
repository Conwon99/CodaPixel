import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationScotlandPage = () => {
  useEffect(() => {
    trackPageView('Location Scotland Page');
  }, []);

  return (
    <>
      <Hero location="Scotland" />
      {/* Services Content Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">
              Web Design Services Across Scotland
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              Most of my clients are trades and local service businesses in Ayrshire, but I work with businesses across Scotland too - the work is done remotely, over the phone and WhatsApp, so where you're based doesn't change much. What matters is that your website and Google Business Profile are built around the area you actually serve.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              I build websites that work for Scottish businesses. Fast, mobile-friendly sites with clear messaging that actually convert visitors into customers. I'll also handle the basics: local SEO so you show up when people search locally, Google Business Profile, and social media to keep your online presence going.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              Outside Ayrshire, one example is <a href="/case-studies/double-o-detailing/" className="text-blue-700 underline">Double O Detailing</a> in Killearn, Stirlingshire, where I audited the site after the August 2026 spam update and removed around 280 doorway and duplicate pages.
            </p>
          </div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Scotland?</h3>
            <p className="text-gray-700 font-figtree">Yeah, I work with businesses all over Scotland. I build custom websites optimized for local search, handle social media, and set up everything you need to get found online - local SEO and Google Business Profile stuff. Wherever you are, I'll focus your site on the towns you really cover rather than spinning up a page for every city.</p>
          </div>
        </div>
      </section>

      <HomeContact />

      {/* Scottish Cities Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-thicccboi">
              Covering All of Scotland
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              Ayrshire is home base. See the Ayrshire page for the towns I cover most, or get in touch wherever you are in Scotland.
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
              {[
                { name: 'Ayrshire', link: '/locations/ayrshire/' },
                { name: 'Case studies', link: '/case-studies/' }
              ].map((city) => (
                <a key={city.name} href={city.link} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{city.name}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LocationScotlandPage;

