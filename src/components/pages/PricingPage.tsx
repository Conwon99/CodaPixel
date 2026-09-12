import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Home, TrendingUp, Rocket } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackBookCall } from "@/lib/analytics";

const services = [
  {
    title: "Starter",
    tagline: "Perfect for businesses that need a professional website without a large upfront cost.",
    icon: Home,
    price: "£89",
    priceNote: "per month",
    ctaLabel: "Get Started",
    features: [
      "Professional, mobile-friendly website",
      "Hosting included",
      "Website maintenance",
      "SSL/security",
      "Contact forms",
      "Basic on-page SEO setup",
      "Up to 1 hour of website updates each month",
      "Ongoing technical support"
    ],
    popular: false
  },
  {
    title: "Growth",
    tagline: "For businesses that want to increase their visibility on Google and generate a consistent flow of enquiries.",
    icon: TrendingUp,
    price: "£249",
    priceNote: "per month",
    ctaLabel: "Grow My Business",
    features: [
      "Everything in Starter, plus:",
      "Local SEO",
      "Google Business Profile optimisation",
      "Targeted service and location pages",
      "Keyword tracking",
      "Google Search Console monitoring",
      "Review generation strategy",
      "Monthly SEO improvements",
      "Monthly performance reporting",
      "Unlimited website updates"
    ],
    popular: true
  },
  {
    title: "Full Service",
    tagline: "Our complete lead generation package for businesses that want us to handle their online growth.",
    icon: Rocket,
    price: "£879",
    priceNote: "per month",
    extraNote: "Advertising spend is separate.",
    ctaLabel: "Get More Leads",
    features: [
      "Everything in Growth, plus:",
      "Google Ads management",
      "Campaign setup and optimisation",
      "Conversion tracking",
      "Landing page creation",
      "Call and enquiry tracking",
      "Ongoing ad testing",
      "SEO + paid advertising working together",
      "Priority support",
      "Complete lead generation strategy"
    ],
    popular: false
  }
];

const PricingPage = () => {
  const { tagline } = useBusiness();

  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* Pricing Section */}
        <section id="pricing" data-section="Pricing" className="pt-32 pb-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-visible">
          <div className="container mx-auto max-w-7xl px-4 overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-figtree">
                Simple Pricing. Built to Generate Results.
              </h1>
              <p className="text-xl text-gray-300 font-figtree mb-4 max-w-3xl mx-auto">
                Choose the package that best fits your business. Whether you need a professional website, want to generate more enquiries through Google, or want us to handle your entire online marketing strategy, we've got you covered.
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
                        {service.extraNote && (
                          <p className={`text-xs font-figtree mt-1 italic ${service.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                            {service.extraNote}
                          </p>
                        )}
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
                          {service.ctaLabel}
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

            {/* Not Sure Which Package CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-16 max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-figtree">
                Not Sure Which Package Is Right for You?
              </h3>
              <p className="text-gray-300 font-figtree mb-8 max-w-2xl mx-auto">
                Tell us about your business and where you want to grow. We'll recommend the package that makes the most sense for you - without trying to sell you services you don't need.
              </p>
              <a href="/contact">
                <Button
                  onClick={() => trackBookCall('pricing_not_sure')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-figtree font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book a Free Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
