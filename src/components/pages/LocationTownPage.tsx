// Placeholder for LocationTown page content
// TODO: Extract main content from src/pages/LocationTown.tsx
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { useEffect } from "react";

interface LocationTownPageProps {
  town: string;
}

const LocationTownPage = ({ town }: LocationTownPageProps) => {
  const townName = town ? town.charAt(0).toUpperCase() + town.slice(1) : '';

  useEffect(() => {
    trackPageView(`Location ${townName} Page`);
  }, [townName]);

  return (
    <>
      <Hero location={townName} />
      
      {/* Services Content Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">
                Web Design Services for {townName} Businesses
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
                Running a business in {townName} means competing for local customers' attention. Your website needs to work harder - loading fast, looking great on phones, and making it easy for people to get in touch. That's what I build.
              </p>
              <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
                Most of your customers are probably finding you on their phones. That's why every site I build is mobile-first. It has to look good on a phone screen, load quickly even on slower connections, and make it dead simple to call or message you. That's what actually works.
              </p>
              <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
                I create websites that actually convert visitors into customers. Whether you're starting from scratch or redesigning an existing site, I focus on what matters: clear messaging, easy navigation, and strong calls-to-action that drive phone calls and enquiries.
              </p>
              <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
                Beyond just the website, I'll help with the basics that get you found online: local SEO, Google Business Profile, and social media. All tailored to what works for businesses in {townName} and the surrounding area. The goal is simple - when someone searches for what you do in {townName}, they find you, not your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in {townName}?</h3>
            <p className="text-gray-700 mb-3 font-figtree">
              Yeah, I work with businesses in {townName} and the surrounding areas. I've built sites for companies throughout Ayrshire, so I know what works locally.
            </p>
            <p className="text-gray-700 mb-3 font-figtree">
              I build custom websites optimized for local search, handle social media, and set up everything you need to get found online - including local SEO and Google Business Profile optimization. The local SEO bit is important because if someone searches "web design {townName}" or whatever your service is, you want to show up.
            </p>
            <p className="text-gray-700 font-figtree">
              Everything I do is tracked, so you can see what's working. Which pages are getting views, where enquiries are coming from, that kind of thing. Most people like seeing the numbers because it shows the site is actually doing its job.
            </p>
          </div>
        </div>
      </section>
      
      <HomeContact />
    </>
  );
};

export default LocationTownPage;

