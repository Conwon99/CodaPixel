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
              Scottish businesses face unique challenges - whether you're competing with national chains in Glasgow, targeting tourists in Edinburgh, or serving local communities in Aberdeen. Your website needs to connect with Scottish customers while standing out online.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              We build websites that work for Scottish businesses. Fast-loading, mobile-friendly sites with clear messaging that converts visitors into customers. We also handle the essentials: local SEO so you show up in local searches, Google Business Profile optimization, and social media management to keep your online presence active.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              From Glasgow to Edinburgh, Aberdeen to Inverness, and everywhere in between - we work with businesses across Scotland to create websites that drive real results. Serving Glasgow, Edinburgh, Aberdeen, Dundee, Inverness, Stirling, Perth, Dunfermline, and all major Scottish cities.
            </p>
          </div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Scotland?</h3>
            <p className="text-gray-700 font-figtree">Yes, we work with businesses across Scotland. We create custom websites optimized for local search, handle social media management, and set up everything needed to get found online - including local SEO and Google Business Profile optimization. We serve businesses throughout Scotland, including Glasgow, Edinburgh, Aberdeen, Dundee, Inverness, Stirling, Perth, and Dunfermline.</p>
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
              From the Highlands to the Lowlands, we help Scottish businesses succeed online with professional web design and SEO services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Ayrshire', link: '/locations/ayrshire' },
                { name: 'Argyll', link: '/locations/argyll' },
                { name: 'Glasgow', link: '/locations/glasgow' },
                { name: 'Edinburgh', link: '/locations/edinburgh' },
                { name: 'Aberdeen', link: '/locations/aberdeen' },
                { name: 'Dundee', link: '/locations/dundee' },
                { name: 'Inverness', link: '/locations/inverness' },
                { name: 'Stirling', link: '/locations/stirling' },
                { name: 'Perth', link: '/locations/perth' },
                { name: 'Dunfermline', link: '/locations/dunfermline' }
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

