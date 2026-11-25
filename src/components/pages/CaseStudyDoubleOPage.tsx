// Page content component for the Double O Detailing case study (spam update audit & recovery)
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  TrendingDown,
  TrendingUp,
  ExternalLink,
  ArrowLeft,
  Search,
  Copy,
  Link2,
  FileX,
  ImageIcon,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

/*
 * TODO before publishing:
 * - Drop screenshots into /public/case-studies/ using the filenames in the ImageSlot components below,
 *   then swap each <ImageSlot> for an <img> (see the Jimbo's page for the exact markup).
 * - Fill in the "Early Results" figures once Search Console shows recovery data.
 * - Confirm Gordie is happy for the spam-update angle to be public.
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

const ImageSlot = ({ file, label }: { file: string; label: string }) => (
  <div className="aspect-[16/10] w-full bg-cleaning-primary/5 border-2 border-dashed border-cleaning-primary/30 flex flex-col items-center justify-center text-center p-6">
    <ImageIcon className="w-10 h-10 text-cleaning-primary/50 mb-2" />
    <p className="text-sm font-medium text-cleaning-text/70">{label}</p>
    <p className="text-xs text-cleaning-text/50 mt-1 font-mono">/case-studies/{file}</p>
  </div>
);

const auditFindings = [
  {
    icon: FileX,
    title: "Templated town × service doorway pages",
    stat: "193 URLs",
    text:
      "Every service had been duplicated across every town with the place name swapped in - /helensburgh/deep-cleans/, /balloch/deep-cleans/ and so on. Between them these pages earned 33 clicks, none more than 5. This is exactly the scaled, swapped-content pattern Google's spam systems target.",
  },
  {
    icon: MapPin,
    title: "Thin town hubs outside the real service area",
    stat: "11 hubs",
    text:
      "Town pages for places like Buchlyvie, Hyndland, Gartocharn and Fintry were getting 0-2 clicks at positions 30-55. They added nothing for customers and diluted the pages that mattered.",
  },
  {
    icon: Copy,
    title: "Duplicate URLs competing with each other",
    stat: "118 duplicates",
    text:
      "118 pages were indexed twice - with and without a trailing slash (e.g. /headlight-restoration and /headlight-restoration/) - plus duplicate packages and gallery pages. Google was splitting signals between copies of the same page.",
  },
  {
    icon: Search,
    title: "Main money services invisible on Google",
    stat: "0 clicks",
    text:
      "Paint correction, ceramic coating and full detail - the services Gordie actually wants - were sitting on page 3-4. Ceramic coatings got 89 impressions and zero clicks in 16 months. \"Ceramic coating glasgow\" ranked at 40.6.",
  },
  {
    icon: ShieldCheck,
    title: "Off-brand and broken templates",
    stat: "16 MB",
    text:
      "The /services/ page was still running a leftover watch-repair template, titles leaned on \"valet\" instead of detailing, there was no privacy policy or cookie consent, and the site was loading around 16 MB of images.",
  },
];

const fixes = [
  "~280 old URLs 301-redirected to the right page, with consistent canonicals and a sitewide trailing-slash redirect",
  "Duplicated service-by-town pages removed; the towns that earn clicks rewritten with genuinely unique local copy",
  "Watch-repair template on /services/ replaced with a proper services page",
  "Page titles and headings rebuilt around paint correction and ceramic coating - \"valet\" removed",
  "LocalBusiness structured data updated with the Killearn location and 49 reviews",
  "Service copy aligned with the actual packages (12-month, 2-year and 3-year ceramic)",
  "Images compressed from ~16 MB to 1.2 MB; privacy policy and cookie consent added",
  "Headlight and soft top pages - the site's best performers - now feed visitors into the main packages",
];

const nextSteps = [
  {
    title: "Citations",
    text: "Identical name, Killearn address and phone across Google Business Profile, Bing, Apple, Yell and 10+ UK directories.",
  },
  {
    title: "Genuine backlinks",
    text: "SONAX and UKDA profile links, local garages and dealers, Scottish car clubs and community sponsorships. No bought links.",
  },
  {
    title: "Proof on the money pages",
    text: "Before/after sliders, real jobs and service-specific reviews on paint correction, ceramic and full detail.",
  },
  {
    title: "Google Business Profile",
    text: "Weekly job posts, services with prices, and reviews that mention the service and the town.",
  },
];

const CaseStudyDoubleOPage = () => {
  return (
    <div className="min-h-screen bg-cleaning-background">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-cleaning-background to-white">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <a
                href="/case-studies/"
                className="inline-flex items-center gap-1 text-sm text-cleaning-primary hover:text-cleaning-accent mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Case Studies
              </a>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                {["SEO Audit", "Spam Update Recovery", "Killearn, Stirlingshire"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-cleaning-primary/10 text-cleaning-primary px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs font-medium bg-amber-100 text-amber-800 px-3 py-1 rounded-full inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Recovery in progress
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Double O Detailing
              </h1>
              <p className="text-xl text-cleaning-text/80 mb-4 max-w-2xl">
                How I audited a car detailing website hit by Google's August 2026 spam update, found what was dragging
                it down, and rebuilt it around the services that actually make the business money.
              </p>
              <a
                href="https://doubleodetailing.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cleaning-primary hover:text-cleaning-accent font-medium transition-colors"
              >
                doubleodetailing.co.uk <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stat Highlights */}
        <section className="py-12 border-y border-cleaning-border bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: TrendingDown, value: "-35%", label: "Impressions after the August 2026 spam update" },
                { icon: FileX, value: "~280", label: "Spammy & duplicate URLs cleaned up and redirected" },
                { icon: TrendingUp, value: "16MB → 1.2MB", label: "Page weight after image optimisation" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <s.icon className="w-8 h-8 text-cleaning-primary mx-auto mb-2" />
                  <div className="text-4xl font-bold text-cleaning-text font-thicccboi mb-1">{s.value}</div>
                  <p className="text-sm text-cleaning-text/70">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">The Challenge</h2>
              <p className="text-cleaning-text/80 mb-4">
                Double O Detailing is a car detailing unit in Killearn run by Gordie Graham, covering Loch Lomond,
                Bearsden, Milngavie and Glasgow North. Gordie wanted more enquiries for his high-value work - paint
                correction, gloss enhancement, ceramic coating and full details - and he wanted them from organic search,
                not ads.
              </p>
              <p className="text-cleaning-text/80">
                Instead, visibility was going the wrong way. Impressions fell from around 15,000 in August to 9,800 in
                September - right as Google rolled out its third confirmed spam update of 2026. That update didn't
                introduce new rules; it enforced the existing ones harder. So the question was: what on this site was
                breaking them?
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-10">
              <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                <ImageSlot file="doubleo-gsc-spam-drop.png" label="Search Console impressions graph showing the August 2026 drop" />
                <div className="p-4">
                  <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                    Google Search Console: The Spam Update Drop
                  </h3>
                  <p className="text-sm text-cleaning-text/70">
                    Impressions fell roughly 35% month-on-month, lining up with the August 2026 spam update rollout.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Audit */}
        <section className="py-16 bg-white border-y border-cleaning-border">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">The Audit</h2>
              <p className="text-cleaning-text/80 mb-8">
                I exported 16 months of Search Console data (July 2025 - November 2026) and went through it page by page:
                clicks, impressions and position for every URL, plus indexing, Manual Actions and Security Issues. No
                manual penalty - this was algorithmic. Here's what I found.
              </p>
              <div className="space-y-6">
                {auditFindings.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-cleaning-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                        <h3 className="font-semibold text-cleaning-text font-thicccboi">{f.title}</h3>
                        <span className="text-sm font-bold text-cleaning-primary font-thicccboi">{f.stat}</span>
                      </div>
                      <p className="text-cleaning-text/70 text-sm">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service visibility table */}
            <motion.div {...fadeUp} className="mt-12">
              <h3 className="font-semibold text-cleaning-text font-thicccboi mb-2">
                Where the clicks were actually coming from
              </h3>
              <p className="text-sm text-cleaning-text/70 mb-4">
                Niche add-ons were outperforming the main services by a mile - because few local detailers target them.
              </p>
              <div className="overflow-x-auto rounded-lg border border-cleaning-border">
                <table className="w-full text-sm">
                  <thead className="bg-cleaning-primary/5 text-cleaning-text">
                    <tr>
                      <th className="text-left p-3 font-semibold">Service page</th>
                      <th className="text-right p-3 font-semibold">Clicks</th>
                      <th className="text-right p-3 font-semibold">Impressions</th>
                      <th className="text-right p-3 font-semibold">Avg. position</th>
                    </tr>
                  </thead>
                  <tbody className="text-cleaning-text/80">
                    {[
                      ["Headlight restoration", "133", "2,936", "9.8"],
                      ["Engine bay detailing", "32", "1,533", "21.6"],
                      ["Soft top", "30", "503", "10.6"],
                      ["Paint correction", "4", "466", "26.6"],
                      ["Full detail", "0", "218", "36.1"],
                      ["Ceramic coatings", "0", "89", "33.7"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-cleaning-border">
                        <td className="p-3">{r[0]}</td>
                        <td className="p-3 text-right">{r[1]}</td>
                        <td className="p-3 text-right">{r[2]}</td>
                        <td className="p-3 text-right">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-cleaning-text/50 mt-2">Google Search Console, Jul 2025 - Nov 2026.</p>
            </motion.div>
          </div>
        </section>

        {/* The Fix */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">The Fix</h2>
              <p className="text-cleaning-text/80 mb-8">
                The aim was simple: remove everything that looked like scaled, templated content, consolidate the
                signals onto the pages that deserve to rank, and make those pages genuinely useful to someone choosing a
                detailer. Everything below went live between 11 and 14 November.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fixes.map((fix) => (
                  <li
                    key={fix}
                    className="flex gap-3 bg-white p-4 rounded-lg border border-cleaning-border shadow-sm text-sm text-cleaning-text/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cleaning-primary flex-shrink-0 mt-0.5" />
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
              <motion.div {...fadeUp}>
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <ImageSlot file="doubleo-before.png" label="Before: templated town × service page" />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">Before</h3>
                    <p className="text-sm text-cleaning-text/70">
                      The same page repeated across dozens of towns with only the place name changed.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp}>
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <ImageSlot file="doubleo-after.png" label="After: rebuilt service / town page" />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">After</h3>
                    <p className="text-sm text-cleaning-text/70">
                      One strong page per service, with real local content for the towns Gordie actually covers.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-16 bg-white border-y border-cleaning-border">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Rebuilding Trust: The Next 6 Months
              </h2>
              <p className="text-cleaning-text/80 mb-8">
                Cleaning up gets the site out of the spam filter's crosshairs. Ranking for ceramic and paint correction
                takes trust. After a spam update, that has to be earned the slow, clean way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nextSteps.map((s) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cleaning-primary/10 flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-cleaning-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cleaning-text mb-1 font-thicccboi">{s.title}</h3>
                      <p className="text-cleaning-text/70 text-sm">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Early Results */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-cleaning-text mb-4 font-thicccboi">Early Results</h2>
              <p className="text-cleaning-text/80 mb-10 max-w-3xl">
                {/* TODO: replace with real recovery figures */}
                [Placeholder] Recovery after a spam update is measured in months, not days. I'm tracking impressions and
                position for the three main service pages every month - this section will be updated as the data comes
                in. Target: ceramic coating and paint correction in the local top 10 within six months.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div {...fadeUp}>
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <ImageSlot file="doubleo-gsc-recovery.png" label="Search Console graph after the fixes" />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      Google Search Console: Recovery
                    </h3>
                    <p className="text-sm text-cleaning-text/70">[Placeholder caption]</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp}>
                <div className="bg-white rounded-lg border border-cleaning-border overflow-hidden shadow-sm">
                  <ImageSlot file="doubleo-rank-map.png" label="Local rank map for 'ceramic coating'" />
                  <div className="p-4">
                    <h3 className="font-semibold text-cleaning-text font-thicccboi mb-1">
                      Local Rank Map: Ceramic Coating
                    </h3>
                    <p className="text-sm text-cleaning-text/70">[Placeholder caption]</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cleaning-primary/5">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border text-center">
                <TrendingDown className="w-12 h-12 text-cleaning-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-cleaning-text mb-4 font-thicccboi">
                  Traffic Dropped After A Google Update?
                </h2>
                <p className="text-cleaning-text/80 mb-6">
                  If your enquiries have dried up and you're not sure why, I'll go through your Search Console data and
                  show you exactly what's holding the site back. Book a free chat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact/">
                    <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                      Get A Free Audit
                    </Button>
                  </a>
                  <a href="/case-studies/">
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

export default CaseStudyDoubleOPage;
