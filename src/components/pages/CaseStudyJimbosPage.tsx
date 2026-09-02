// Page content component for the Jimbo's Exterior Cleaning case study
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Trophy, MapPin, ExternalLink, ArrowLeft, Search } from "lucide-react";

const CaseStudyJimbosPage = () => {
  return (
    <div className="min-h-screen bg-cleaning-background">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-cleaning-background to-white">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <a
                href="/case-studies"
                className="inline-flex items-center gap-1 text-sm text-cleaning-primary hover:text-cleaning-accent mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Case Studies
              </a>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium bg-cleaning-primary/10 text-cleaning-primary px-3 py-1 rounded-full">
                  SEO
                </span>
                <span className="text-xs font-medium bg-cleaning-primary/10 text-cleaning-primary px-3 py-1 rounded-full">
                  Local Business
                </span>
                <span className="text-xs font-medium bg-cleaning-primary/10 text-cleaning-primary px-3 py-1 rounded-full">
                  Irvine, Ayrshire
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Jimbo's Exterior Cleaning
              </h1>
              <p className="text-xl text-cleaning-text/80 mb-4 max-w-2xl">
                How a local exterior cleaning business went from barely visible on Google to ranking #1 for the
                searches that actually bring in paying customers.
              </p>
              <a
                href="https://jimboscleaning.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cleaning-primary hover:text-cleaning-accent font-medium transition-colors"
              >
                jimboscleaning.com <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stat Highlights */}
        <section className="py-12 border-y border-cleaning-border bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <TrendingUp className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">12x</div>
                <p className="text-sm text-cleaning-text/70">Increase in organic traffic</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Trophy className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">#1</div>
                <p className="text-sm text-cleaning-text/70">Ranking for "roof cleaner irvine"</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Trophy className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">#1</div>
                <p className="text-sm text-cleaning-text/70">Ranking for "gutter cleaner irvine"</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">
                The Challenge
              </h2>
              <p className="text-cleaning-text/80 mb-4">
                Jimbo's Exterior Cleaning offers roof cleaning, gutter cleaning and exterior washing across Irvine
                and the wider Ayrshire area. Like a lot of local tradespeople, the business relied almost entirely on
                word of mouth and repeat customers - the website wasn't bringing in new enquiries because it wasn't
                being found for the searches that mattered.
              </p>
              <p className="text-cleaning-text/80">
                The goal was straightforward: get Jimbo's showing up on Google for the exact terms local homeowners
                were typing in - "roof cleaner Irvine", "gutter cleaner Irvine" and the surrounding area terms - and
                turn that visibility into real, trackable clicks and calls.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Strategy */}
        <section className="py-16 bg-white border-y border-cleaning-border">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-6 font-thicccboi">
                The Strategy
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Local keyword targeting
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Built out on-page SEO around the exact service + location searches Jimbo's customers use, like
                      "roof cleaner Irvine" and "gutter cleaner Irvine", instead of generic industry terms nobody was
                      searching for.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Local map coverage
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Google Business Profile optimization and location-based signals to build consistent visibility
                      across Irvine and the surrounding towns, not just a single postcode.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Technical and content foundations
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      A fast, mobile-friendly site structure with clear service pages, so traffic from search actually
                      converted into enquiries once it landed.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Results */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">The Results</h2>
              <p className="text-cleaning-text/80 mb-10 max-w-3xl">
                Organic traffic grew 12x, and Jimbo's now ranks #1 on Google for "roof cleaner Irvine" and "gutter
                cleaner Irvine" - the two highest-intent searches in the local market. Here's the data straight from
                Google Search Console and the local rank tracking.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <img
                    src="/case-studies/jimbos-gsc-graph.png"
                    alt="Google Search Console graph showing Jimbo's Exterior Cleaning clicks and impressions growing over time"
                    width="1200"
                    height="750"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      Google Search Console: Clicks &amp; Impressions
                    </h3>
                    <p className="text-sm text-cleaning-text/70">
                      Weekly clicks and impressions climbing steadily as rankings improved - clear evidence of the
                      12x organic traffic increase.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <img
                    src="/case-studies/jimbos-rank-map.png"
                    alt="Local rank map showing Jimbo's Exterior Cleaning ranking #1 across Irvine and the surrounding Ayrshire area"
                    width="1000"
                    height="1000"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      Local Rank Map: #1 Across Irvine
                    </h3>
                    <p className="text-sm text-cleaning-text/70">
                      Every grid point ranking #1 for target keywords across the Irvine service area - consistent
                      visibility, not a single lucky search.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                  Want To See Results Like Jimbo's?
                </h2>
                <p className="text-cleaning-text/80 mb-6">
                  If your business isn't showing up for the searches your customers are actually using, let's fix
                  that. Book a free chat and I'll show you exactly where you stand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                      Get Started
                    </Button>
                  </a>
                  <a href="/case-studies">
                    <Button
                      variant="outline"
                      className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3"
                    >
                      View All Case Studies
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

export default CaseStudyJimbosPage;
