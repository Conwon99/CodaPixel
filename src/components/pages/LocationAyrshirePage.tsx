import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationAyrshirePage = () => {
  useEffect(() => {
    trackPageView('Location Ayrshire Page');
  }, []);

  return (
    <>
      <Hero location="Ayrshire" />
      {/* Services Content Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">
              Web Design Services for Ayrshire Businesses
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              Running a business in Ayrshire means you've got different types of customers - tourists down at Ayr's seafront, families in Kilmarnock, professionals in Irvine. Your website needs to work for all of them, and stand out from everyone else competing for the same customers.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              I build websites that actually work for Ayrshire businesses. That means fast pages that look good on phones (most of your customers will be on mobile anyway), clear calls-to-action that get people to contact you, and local SEO that helps you show up when people search for what you do around here.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
              Beyond just the website, I'll help with your social media and Google Business Profile - the basic stuff that helps local customers find you online. I work with businesses in Ayr, Prestwick, Troon, Kilmarnock, Irvine, and all over Ayrshire.
            </p>
          </div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Ayrshire?</h3>
            <p className="text-gray-700 font-figtree">Yeah, I work with businesses all over Ayrshire. Whether you need your first website, want to redo an existing one, or just need help getting found online - I can help. I've done sites for businesses in Ayr, Prestwick, Troon, Kilmarnock, Irvine, Mauchline, Maybole, Girvan, and loads of other places around here.</p>
          </div>
        </div>
      </section>
      
      {/* Ayrshire Locations Section */}
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
              Serving All of Ayrshire
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              From the coast at Ayr and Troon to the towns like Kilmarnock and Irvine - I've helped businesses all over Ayrshire get online and start getting customers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['Ayr', 'Prestwick', 'Troon', 'Kilmarnock', 'Irvine', 'Mauchline', 'Maybole', 'Girvan'].map((town) => (
                <a key={town} href={`/locations/${town.toLowerCase()}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{town}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default LocationAyrshirePage;

