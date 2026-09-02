// Page content component for the Chris - Your Man With A Van case study
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, ExternalLink, ArrowLeft, Search, Eye } from "lucide-react";

const CaseStudyChrisVanPage = () => {
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
                  Mauchline, Ayrshire
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Chris - Your Man With A Van
              </h1>
              <p className="text-xl text-cleaning-text/80 mb-4 max-w-2xl">
                How a man-with-a-van removals business near Mauchline went from big dead zones on the map to
                ranking on page 1 everywhere across its service area.
              </p>
              <a
                href="https://chrisyourmanwithavan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cleaning-primary hover:text-cleaning-accent font-medium transition-colors"
              >
                chrisyourmanwithavan.com <ExternalLink className="w-4 h-4" />
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
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">700%</div>
                <p className="text-sm text-cleaning-text/70">Increase in organic clicks</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Eye className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">36k</div>
                <p className="text-sm text-cleaning-text/70">Monthly search impressions</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <MapPin className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">0</div>
                <p className="text-sm text-cleaning-text/70">Dead zones left on the rank map</p>
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
                Chris - Your Man With A Van offers removals and man-with-a-van services around Mauchline and the
                surrounding East Ayrshire villages. The "before" rank map below shows a business that was ranking
                well immediately around its own base, but completely invisible - literally outside the top 20 - across
                a large chunk of the wider service area.
              </p>
              <p className="text-cleaning-text/80">
                For a removals business, that's a lot of lost jobs: homeowners a few villages over searching for a
                man with a van would never have found Chris at all. The goal was to close every one of those dead
                zones and turn the whole area into page-1 coverage.
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
                      Local removals keyword targeting
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Built out on-page content around the exact "man with a van" and removals searches used across
                      every village in the service area, not just the town Chris is based in.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Extending Google Business Profile reach
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Expanded the Google Business Profile service area and citations so the map pack picked Chris up
                      in the outlying villages that were previously blank on the rank map, not just next door.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cleaning-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">
                      Site-wide SEO fundamentals
                    </h3>
                    <p className="text-cleaning-text/70 text-sm">
                      Cleaned up site structure, speed and on-page SEO so every new visitor from the wider search
                      footprint landed on a site built to convert them into a booking.
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
                Organic clicks grew 700%, and every "20+" dead zone on the rank map closed up - the whole grid now
                ranks within the top 11, with strong page-1 positions right across the core service area. Here's the
                before and after, plus the Google Search Console data behind it.
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
                      src="/case-studies/chris-rankmap-before.png"
                      alt="Local rank map showing Chris - Your Man With A Van with a large 20+ unranked dead zone across part of the East Ayrshire service area"
                      width="1000"
                      height="1000"
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">Before: Dead Zones</h3>
                    <p className="text-sm text-cleaning-text/70">
                      A cluster of grid points came back "20+" - completely unranked - despite decent rankings right
                      around the business's own base.
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
                      After
                    </span>
                    <img
                      src="/case-studies/chris-rankmap-after.png"
                      alt="Local rank map showing Chris - Your Man With A Van ranking within the top 11 across the entire East Ayrshire service area after SEO"
                      width="1000"
                      height="1000"
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      After: Full Area Coverage
                    </h3>
                    <p className="text-sm text-cleaning-text/70">
                      Every dead zone gone - the entire grid now ranks in the top 11, with the strongest positions
                      right across the core Mauchline area.
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
                  src="/case-studies/chris-gsc-graph.png"
                  alt="Google Search Console graph showing Chris - Your Man With A Van clicks and impressions growing to 958 clicks and 36k impressions"
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
                    Weekly clicks and impressions climbing steadily to 958 total clicks and 36k impressions - the
                    700% increase in numbers.
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
                  Want To See Results Like Chris's?
                </h2>
                <p className="text-cleaning-text/80 mb-6">
                  If your business only shows up right on its own doorstep and disappears everywhere else, let's fix
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

export default CaseStudyChrisVanPage;
