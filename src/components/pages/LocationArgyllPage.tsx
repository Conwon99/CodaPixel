import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationArgyllPage = () => {
  useEffect(() => {
    trackPageView('Location Argyll Page');
  }, []);

  const towns = [
    'Oban',
    'Campbeltown',
    'Dunoon',
    'Rothesay',
    'Helensburgh',
    'Lochgilphead',
    'Inveraray',
    'Tarbert',
    'Tobermory'
  ];

  return (
    <>
      <Hero location="Argyll" />

      {/* Argyll Towns Section */}
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
              Serving All of Argyll
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              From Oban and Campbeltown to Dunoon and Rothesay - I've helped businesses all over Argyll get online and start bringing in customers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {towns.map((town) => (
                <a key={town} href={`/locations/${town.toLowerCase()}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{town}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">
              Web Design Services for Argyll Businesses
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              Argyll businesses often have two different audiences: locals who need you all year round, and tourists who visit during peak season. Your website needs to work for both - whether you're a café in Oban, a hotel in Campbeltown, or a service provider in Dunoon.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              I build websites that work for Argyll businesses. Fast, mobile-friendly sites that show off what makes your business special - whether that's great photos for tourists or clear service pages for locals. Plus I'll handle the basics: local SEO, Google Business Profile, and social media.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              From Oban to Campbeltown, Dunoon to Rothesay, and everywhere in between - I get what Argyll businesses need online. I work with businesses across the region, including Oban, Campbeltown, Dunoon, Rothesay, Helensburgh, and all over Argyll and Bute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Argyll?</h3>
            <p className="text-gray-700 font-figtree">Yeah, I work with businesses throughout Argyll and Bute. I build custom websites optimized for local search, handle social media, and set up everything you need to get found online - local SEO and Google Business Profile stuff. I've worked with businesses in Oban, Campbeltown, Dunoon, Rothesay, Helensburgh, and loads of other places around Argyll.</p>
          </motion.div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default LocationArgyllPage;


