// Page content component for the RB Joinery case study
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, ExternalLink, ArrowLeft, Search, Trophy } from "lucide-react";

const CaseStudyRBJoineryPage = () => {
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
                  Kilmarnock, Ayrshire
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-4 font-thicccboi">
                RB Joinery
              </h1>
              <p className="text-xl text-cleaning-text/80 mb-4 max-w-2xl">
                How a Kilmarnock joinery business went from invisible on Google Maps to ranking across the entire
                local area in just three months.
              </p>
              <a
                href="https://rbjoinery.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cleaning-primary hover:text-cleaning-accent font-medium transition-colors"
              >
                rbjoinery.com <ExternalLink className="w-4 h-4" />
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
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">5x</div>
                <p className="text-sm text-cleaning-text/70">Increase in organic traffic</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <MapPin className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">3 mo</div>
                <p className="text-sm text-cleaning-text/70">To go from unranked to area-wide coverage</p>
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
                <p className="text-sm text-cleaning-text/70">Ranking for "joiner near me"</p>
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
                RB Joinery is a joinery and carpentry business serving Kilmarnock and the surrounding Ayrshire
                villages. Before this campaign, the site barely showed up on Google - the "before" rank map below
                tells the story: almost every grid point across the local area came back outside the top 20 results,
                with the business only visible right on its own doorstep.
              </p>
              <p className="text-cleaning-text/80">
                For a trade business, that's the difference between the phone ringing and it staying silent -
                especially for a term like "joiner near me", which is exactly what homeowners type when they need
                work done now. The goal was to turn that map red-to-green across the whole service area, with
                "joiner near me" ranking #1 as the benchmark.
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
                      Local service page SEO
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Built out dedicated, keyword-targeted pages around the joinery and carpentry services people
                      actually search for locally - with "joiner near me" as the primary target - instead of one
                      generic "services" page trying to rank for everything.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Google Business Profile &amp; map pack optimization
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Rebuilt the Google Business Profile properly - categories, service areas and consistent
                      citations - so the business showed up in the map pack across Kilmarnock, not just at its exact
                      address.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      On-page and technical fixes
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Cleaned up site speed, structure and on-page SEO fundamentals so Google could crawl and rank
                      the site properly - the groundwork that made the local push actually stick.
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
                Organic traffic grew 5x, and within three months RB Joinery went from nowhere on the map to ranking
                #1 for "joiner near me" across Kilmarnock and the surrounding villages. Here's the before and after,
                straight from the rank tracker, plus the Google Search Console data behind it.
              </p>
            </motion.div>

            {/* Before / After Rank Maps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <div className="relative">
                    <span className="absolute top-3 left-3 z-10 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                      Before
                    </span>
                    <img
                      src="/case-studies/rbjoinery-rankmap-before.png"
                      alt="Local rank map showing RB Joinery ranking outside the top 20 for 'joiner near me' across almost all of Kilmarnock before SEO"
                      width="1000"
                      height="1000"
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">Before: Barely Ranking</h3>
                    <p className="text-sm text-cleaning-text/70">
                      Almost every point on the map came back 20+ for "joiner near me" (outside the top 20 results)
                      - only visible right at the business's own location.
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
                  <div className="relative">
                    <span className="absolute top-3 left-3 z-10 text-xs font-semibold bg-cleaning-primary text-white px-3 py-1 rounded-full">
                      After (3 months)
                    </span>
                    <img
                      src="/case-studies/rbjoinery-rankmap-after.png"
                      alt="Local rank map showing RB Joinery ranking #1 for 'joiner near me' across Kilmarnock and surrounding villages after three months of SEO"
                      width="1000"
                      height="1000"
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      After: Area-Wide Coverage
                    </h3>
                    <p className="text-sm text-cleaning-text/70">
                      Top-8 rankings for "joiner near me" across almost the entire grid, with #1-#3 positions right
                      around the core Kilmarnock service area.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* GSC Graph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm max-w-3xl">
                <img
                  src="/case-studies/rbjoinery-gsc-graph.png"
                  alt="Google Search Console graph showing RB Joinery clicks and impressions growing over time"
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
                    Weekly clicks and impressions trending upward alongside the rank map improvement - the 5x
                    organic traffic increase in numbers.
                  </p>
                </div>
              </div>
            </motion.div>
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
                  Want To See Results Like RB Joinery's?
                </h2>
                <p className="text-cleaning-text/80 mb-6">
                  If your trade business isn't showing up on the map when local customers search, let's fix that.
                  Book a free chat and I'll show you exactly where you stand.
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

export default CaseStudyRBJoineryPage;
