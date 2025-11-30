import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Search, Clock, CheckCircle } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
// import LottieLoader from "@/components/LottieLoader"; // Commented out for performance testing

const ServicesPage = () => {
  const { tagline } = useBusiness();

  const services = [
    {
      title: "Custom Website",
      description: "Get online fast with our streamlined service. We'll customise a proven template with your logo, brand colours, and content, plus integrate contact forms and essential features for immediate customer connection.",
      icon: Code2,
      price: "£249",
      priceNote: "starting from",
      features: [
        "Unique design and branding",
        "Full content creation",
        "Advanced functionality",
        "Ongoing support & maintenance"
      ],
      popular: false
    },
    {
      title: "Website in a Day",
      description: "Bring your unique vision to life with a bespoke website. We start with a detailed consultation to understand your requirements, then deliver a custom online presence that perfectly reflects your brand in about two weeks.",
      icon: Clock,
      price: "£79",
      priceNote: "per month",
      features: [
        "Website launch within 24 hours",
        "Ongoing support and maintenance",
        "Analytics reports",
        "Unlimited updates (within reason)"
      ],
      popular: true
    },
    {
      title: "SEO & Paid Ads",
      description: "Drive traffic and leads through organic search and targeted advertising.",
      icon: Search,
      price: "£299",
      priceNote: "per month",
      features: [
        "On-page SEO optimization",
        "Local SEO & Google Maps",
        "Google Ads",
        "Meta (Facebook & Instagram) Ads",
        "Campaign setup & optimization",
        "Monthly reporting & insights"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-cleaning-background">
      <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-thicccboi">
              Web Design & SEO Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional web design and SEO services for small businesses. We build responsive websites that look great on phones, load fast, and help you rank on Google. Whether you need a quick launch or a custom website design company solution, we focus on what actually matters: getting your business found online and turning visitors into customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`h-full ${service.popular ? 'bg-blue-600' : 'bg-gray-800'} rounded-2xl p-6 hover:shadow-2xl transition-shadow flex flex-col relative`}>
                  {service.popular && (
                    <>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold font-figtree">
                          Most Popular
                        </span>
                      </div>
                      <div className="absolute -top-12 -right-12 w-64 h-64 z-0 opacity-80 pointer-events-none overflow-hidden">
                        <div className="w-full h-full">
                          {/* <LottieLoader 
                            src="https://lottie.host/cc114657-4a04-4659-bc22-5d6419171617/F0K7XG9usz.lottie" 
                            style={{ width: '100%', height: '100%' }} 
                            autoplay 
                            loop
                          /> */}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="mb-6 relative z-10">
                    <CardTitle className="text-white text-xl font-bold font-figtree mb-4">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white font-figtree">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-figtree">{service.priceNote}</p>
                  </div>
                  <CardContent className="flex-1 flex flex-col p-0 relative z-10">
                    <div className="space-y-4 mb-6 flex-1">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white font-figtree">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" className="mt-auto">
                      <Button className={`w-full ${service.popular ? 'bg-black hover:bg-gray-900' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg py-3 font-figtree`}>
                        Get a Quote
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Below Cards */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="pb-8"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-thicccboi leading-tight">
                "{tagline}"
              </p>
            </motion.div>
            <div className="space-y-4 text-gray-300 font-figtree leading-relaxed">
              <p className="text-lg">
                We've worked with all sorts of small businesses - cafes, tradespeople, healthcare practices, retail shops. They all had different needs but the same problem: they needed customers to find them online and actually get in touch. That's where responsive web design and SEO come in.
              </p>
              <p>
                The £79/month option is the most popular because it gets you online quickly without a big upfront cost. The custom build is if you want something specific or have more complex requirements. Web design and SEO services come in when you need traffic beyond just having a good site - you need to actually rank on Google.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Small Business Website Design Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 md:p-12 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-thicccboi">
                Website Design for Small Business
              </h2>
              <div className="space-y-6 text-gray-300 font-figtree leading-relaxed">
                <div>
                  <p className="text-lg">
                    We specialize in website design for small businesses. We know what small businesses need - something that works, doesn't cost a fortune, and actually brings in customers. That's what we build.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">What Small Businesses Need</h3>
                  <p>
                    Small business website design is different from big corporate sites. You don't need all the fancy features - you need something that loads fast, looks professional, and makes it easy for people to contact you. That's what we focus on.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Our Experience</h3>
                  <p>
                    We've worked with all sorts of small businesses - cafes, tradespeople, healthcare practices, retail shops, service companies. They all had different needs but the same goal: get found online and start bringing in customers. That's what good small business website design does.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Affordable Solutions</h3>
                  <p>
                    The £79/month option is perfect for small businesses because it gets you online quickly without a big upfront cost. You get a professional website, we keep it updated, and you can see how it's performing. No complicated contracts, no hidden fees - just a website that works for your business.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:order-2"
            >
              <div className="grid grid-cols-1 gap-4 rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <img
                    src="/Portfolio/able_compressed.webp"
                    alt="Able Health website"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <img
                    src="/Portfolio/tassecoffeeco.webp"
                    alt="Tasse Coffee Co website"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <img
                    src="/Portfolio/dirtydeeds.png"
                    alt="Dirty Deeds website"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Website Design Company Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/herocards.png"
                  alt="Professional website design company"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-900 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-thicccboi">
                Professional Website Design Company
              </h2>
              <div className="space-y-6 text-gray-300 font-figtree leading-relaxed">
                <div>
                  <p className="text-lg">
                    As a professional website design company, we focus on one thing: building websites that actually work for your business. Not just websites that look good - websites that bring in customers and help you grow.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">More Than Just Building Sites</h3>
                  <p>
                    Professional website design company services mean more than just building a site. It means understanding your business, knowing what your customers are looking for, and building something that connects the two. That's what we do.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Direct Communication</h3>
                  <p>
                    We're not a big agency with multiple layers and account managers. We're a professional website design company that works directly with you. You'll talk to us, we'll build your site, and we'll keep it running. Simple as that.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Results-Driven Approach</h3>
                  <p>
                    Whether you need a quick launch with the £79/month option or a custom build for something more complex, we approach every project the same way: professional website design that actually gets results. That's what makes a good professional website design company - results, not just pretty websites.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 md:p-12 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-thicccboi">
                What is SEO?
              </h2>
              <div className="space-y-6 text-gray-300 font-figtree leading-relaxed">
                <div>
                  <p className="text-lg">
                    SEO stands for Search Engine Optimization. Basically, it's making your website show up when people search for what you do on Google.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">How It Works</h3>
                  <p>
                    Think about it - when someone needs a plumber in Ayr, they'll probably Google "plumber Ayr" or "plumber near me". SEO is what makes your site appear in those results instead of your competitors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Local SEO</h3>
                  <p>
                    There are two main parts. First is local SEO - that's getting you to show up on Google Maps and in local search results. So if someone searches "web design Ayr", you want to be one of the first few results. That's usually where the enquiries come from.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">On-Page SEO</h3>
                  <p>
                    The other bit is on-page SEO. That means making sure your website is set up so Google actually understands what you do. Things like having the right keywords on your pages, making sure it loads fast, that kind of stuff. Sounds technical but it's mostly about having a well-built site with clear content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Why It Matters</h3>
                  <p>
                    The thing is, you could have the best website in the world but if nobody can find it, it's not much use. That's where SEO comes in - it's about making sure the right people find you when they're looking for what you offer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Timeline</h3>
                  <p>
                    It's not an overnight thing though. Takes a few weeks to start seeing results usually, sometimes a bit longer depending on how competitive your area is. But once you start ranking, the enquiries tend to come in consistently. That's the goal anyway.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/rokman.webp"
                  alt="SEO optimization and search results"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Responsive Web Design Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/phone.webp"
                  alt="Responsive web design on mobile devices"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-900 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-thicccboi">
                Responsive Web Design
              </h2>
              <div className="space-y-6 text-gray-300 font-figtree leading-relaxed">
                <div>
                  <p className="text-lg">
                    Every website we build is responsive - that means it looks great and works perfectly on phones, tablets, and desktops. Most of your customers are probably finding you on their phones anyway, so responsive web design isn't optional - it's essential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">How It Works</h3>
                  <p>
                    Responsive web design means your site adapts to whatever screen someone's using. A phone, a laptop, a tablet - it doesn't matter. The layout adjusts automatically so everything is easy to read, buttons are easy to tap, and your content looks professional on any device.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Google Rankings</h3>
                  <p>
                    Google actually prefers responsive websites too. They rank better in search results because they provide a better experience for users. So responsive web design isn't just about looking good - it helps you rank on Google as well.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-thicccboi">Built From The Start</h3>
                  <p>
                    We build all our websites with responsive design from the start. It's not something we add on later - it's built into every site from day one. That means your site will work perfectly whether someone's on a phone or a desktop, and Google will see that too.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-figtree">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-figtree">
              Tell us about your business and what you're trying to achieve. We'll show you what it would look like and how we can make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-figtree">
                  Get a Quote
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default ServicesPage;


