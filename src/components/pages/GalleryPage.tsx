// Page content component for Gallery page
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";

const GalleryPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Able Health",
      description: "Professional healthcare website design with booking system",
      image: "/Portfolio/able_compressed.webp",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Tasse Coffee Co",
      description: "Artisan coffee company website with e-commerce integration",
      image: "/Portfolio/tassecoffeeco.webp",
      category: "Retail"
    },
    {
      id: 3,
      title: "Holistics71",
      description: "Modern holistic wellness platform with booking functionality",
      image: "/Portfolio/holistics71.webp",
      category: "Wellness"
    },
    {
      id: 4,
      title: "Dirty Deeds",
      description: "Professional cleaning services website",
      image: "/Portfolio/dirtydeeds.png",
      category: "Cleaning"
    },
    {
      id: 5,
      title: "ProRoof",
      description: "Professional roofing services with lead capture",
      image: "/Portfolio/proroof.webp",
      category: "Construction"
    },
    {
      id: 6,
      title: "Sparkle's Cleaning Service",
      description: "Professional cleaning services website with local SEO optimization",
      image: "/Portfolio/sparklessite.webp",
      category: "Services"
    }
  ];

  return (
    <div className="min-h-screen bg-cleaning-background">
      <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cleaning-background to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-6 font-thicccboi">
              Our Portfolio
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Real websites I've built for businesses across Ayrshire and beyond. Each project is different - some needed a quick online presence, others wanted full redesigns. Here's what I've done and what actually worked.
            </p>
            <p className="text-base text-cleaning-text/70 max-w-2xl mx-auto">
              I don't just build pretty websites. I build sites that actually bring in customers. Below you'll see projects from different industries - healthcare, retail, construction, services. They all had the same goal: get found online and turn visitors into customers. That's what happened.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-cleaning-border">
                  <div className="relative bg-white aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      width="800"
                      height="600"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      decoding="async"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-cleaning-text font-thicccboi">{item.title}</h3>
                      <span className="text-xs bg-cleaning-primary/10 text-cleaning-primary px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-cleaning-text/70 mb-3">{item.description}</p>
                    {item.id === 1 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Added online booking system so patients could schedule appointments directly. Site launched in 3 days, first booking came through within hours.
                      </p>
                    )}
                    {item.id === 2 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Built an e-commerce setup for their coffee subscriptions. Customers can order online now instead of just calling. Made it much easier for them to track orders too.
                      </p>
                    )}
                    {item.id === 3 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Needed a booking platform that synced with their calendar. I set that up plus local SEO so they'd show up when people searched for wellness services nearby.
                      </p>
                    )}
                    {item.id === 4 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Focused on lead capture - made it dead simple for people to request quotes. Phone number and contact form front and centre. Got enquiries from day one.
                      </p>
                    )}
                    {item.id === 5 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Roofing company wanted to rank for local searches. I built a fast site, optimized for mobile (most of their customers find them on phones), and set up their Google Business Profile properly.
                      </p>
                    )}
                    {item.id === 6 && (
                      <p className="text-xs text-cleaning-text/60 italic">
                        Cleaning service needed to compete with bigger companies. I did their site plus local SEO work - got them ranking on Google Maps in their area. Calls started coming in after a couple of weeks.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border text-center">
              <Monitor className="w-12 h-12 text-cleaning-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Ready to See Your Website Here?
              </h2>
              <p className="text-cleaning-text/80 mb-4">
                These aren't just portfolio pieces - these are real businesses getting real results. Some wanted more phone calls, others needed online bookings, a few just wanted something that looked professional and loaded fast.
              </p>
              <p className="text-cleaning-text/70 mb-6 text-sm">
                Every project starts with a chat about what you actually need. Not what I think you need, but what would actually help your business. Then we build it, launch it, and you start seeing the results. Simple as that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                    Get Started
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3">
                    View Services
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default GalleryPage;

