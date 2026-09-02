// Page content component for Case Studies page
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    slug: "jimbos-exterior-cleaning",
    title: "Jimbo's Exterior Cleaning",
    url: "jimboscleaning.com",
    category: "SEO",
    description:
      "Local SEO campaign for an exterior cleaning company in Irvine, Ayrshire - built to win the map pack and organic rankings for high-intent cleaning searches.",
    image: "/case-studies/jimbos-gsc-graph.png",
    stats: [
      { label: "Organic traffic", value: "12x" },
      { label: "Google ranking", value: "#1" },
    ],
  },
  {
    id: 2,
    slug: "rb-joinery",
    title: "RB Joinery",
    url: "rbjoinery.com",
    category: "SEO",
    description:
      "Local SEO campaign for a joinery and carpentry business in Kilmarnock, Ayrshire - turned a site that barely ranked anywhere into one covering the whole local area.",
    image: "/case-studies/rbjoinery-rankmap-after.png",
    stats: [
      { label: "Organic traffic", value: "5x" },
      { label: "Local coverage", value: "3 months" },
    ],
  },
];

const CaseStudiesPage = () => {
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
                SEO Case Studies
              </h1>
              <p className="text-xl text-cleaning-text/80 mb-8">
                Real SEO campaigns for real local businesses. Here's the traffic, rankings and Google Search Console
                data behind the results - no vague promises, just what actually happened.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <a href={`/case-studies/${study.slug}`} className="block group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-cleaning-border h-full">
                      <div className="relative bg-cleaning-text aspect-[16/10] overflow-hidden">
                        <img
                          src={study.image}
                          alt={`${study.title} organic traffic growth chart`}
                          width="1200"
                          height="750"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          decoding="async"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-xl font-semibold text-cleaning-text font-thicccboi">
                            {study.title}
                          </h2>
                          <span className="text-xs bg-cleaning-primary/10 text-cleaning-primary px-2 py-1 rounded-full">
                            {study.category}
                          </span>
                        </div>
                        <p className="text-sm text-cleaning-text/70 mb-4">{study.description}</p>
                        <div className="flex flex-wrap gap-4 mb-4">
                          {study.stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold text-cleaning-primary font-thicccboi">
                                {stat.value}
                              </span>
                              <span className="text-xs text-cleaning-text/60">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-cleaning-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Read the case study <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </a>
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
                <TrendingUp className="w-12 h-12 text-cleaning-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-cleaning-text mb-4 font-thicccboi">
                  Want Results Like This For Your Business?
                </h2>
                <p className="text-cleaning-text/80 mb-6">
                  Every case study here started with a business that wasn't showing up on Google. If you're in the
                  same spot, let's talk about what SEO could actually do for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                      Get Started
                    </Button>
                  </a>
                  <a href="/services">
                    <Button
                      variant="outline"
                      className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3"
                    >
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

export default CaseStudiesPage;
