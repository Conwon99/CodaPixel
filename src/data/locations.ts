// Town pages that are kept. Each has content specific to that town.
// Only add a town here when there is something real and specific to say about it
// (a client result, a genuine local angle). Templated town-swap pages are a doorway
// pattern and were removed in Nov 2026 - see public/_redirects.

export interface TownFaq {
  q: string;
  a: string;
}

export interface TownCaseStudy {
  name: string;
  href: string;
  result: string;
}

export interface TownData {
  slug: string;
  name: string;
  title: string;
  description: string;
  heading: string;
  intro: string[];
  whoHeading: string;
  who: string[];
  nearby: string[];
  caseStudy?: TownCaseStudy;
  faqs: TownFaq[];
}

export const towns: TownData[] = [
  {
    slug: 'ayr',
    name: 'Ayr',
    title: 'Web Design Ayr | Websites & Local SEO | CodaPixel',
    description:
      'Web design, local SEO and digital marketing for Ayr businesses. Fast mobile sites, Google Business Profile set-up and lead tracking. Free website demo.',
    heading: 'Web design and digital marketing in Ayr',
    intro: [
      "Ayr is South Ayrshire's main town, which means it's also where the competition for local searches is heaviest. Search \"plumber Ayr\" or \"roofer Ayr\" and you'll see the map pack filled by businesses that have put the work into their Google Business Profile and website - not always the best tradesperson.",
      'CodaPixel is listed in Ayr, so this is home turf. I build fast, mobile-first websites for Ayr businesses and pair them with the local SEO that gets you into that map pack: service pages written for how people in Ayr actually search, a properly set-up Google Business Profile, and tracking so you can see which calls and enquiries came from the website.',
    ],
    whoHeading: 'Digital marketing for Ayr businesses',
    who: [
      "Most of the businesses I work with are trades and local services - exterior cleaners, joiners, roofers, landscapers - who get most of their work from people searching on their phone. For them, \"digital marketing\" mostly means three things: showing up on Google Maps, a website that turns a visit into a call, and enough reviews to be the obvious choice.",
      "If you also want paid ads, I can run Google or Meta campaigns alongside the SEO, but I'll only recommend it when the numbers make sense for your type of work.",
    ],
    nearby: ['Alloway', 'Prestwick', 'Troon', 'Doonfoot', 'Annbank'],
    faqs: [
      {
        q: 'How long does it take to rank in Ayr?',
        a: "For a new or poorly optimised site, expect the first movement on Google Maps within 1-3 months and steadier results by 3-6 months. Ayr is more competitive than the smaller Ayrshire towns, so it depends on your trade and how strong the top three already are - I'll show you where you stand before you commit.",
      },
      {
        q: 'Do I need ads as well as SEO?',
        a: "Not always. For most Ayr trades, ranking on Google Maps brings in steadier, cheaper enquiries than ads. Ads make sense when you need work quickly or want to target a high-value service - I'll tell you honestly which fits.",
      },
    ],
  },
  {
    slug: 'troon',
    name: 'Troon',
    title: 'Web Design Troon | Websites & Local SEO | CodaPixel',
    description:
      'Web design and local SEO for Troon businesses - trades, hospitality and golf tourism. Fast mobile sites, Google Business Profile and tracking. Free demo.',
    heading: 'Web design for Troon businesses',
    intro: [
      "Troon's a small town with an outsized number of visitors, thanks to the harbour, the beaches and Royal Troon. That gives local businesses two very different audiences: residents who need a tradesperson this week, and visitors who are searching from somewhere else entirely before they arrive.",
      'A good Troon website handles both. For trades, that means a fast mobile page with your phone number front and centre and service pages that rank for "Troon" and the villages around it. For hospitality and tourism, it means great photos, clear booking and showing up when people search from outside Ayrshire.',
    ],
    whoHeading: 'Covering Troon and the surrounding villages',
    who: [
      "A lot of Troon tradespeople work across Barassie, Loans, Dundonald and into Prestwick and Irvine. Rather than building a thin page for every village, I build one strong Troon page and a Google Business Profile with the right service area, which is how Google actually decides who shows up on the map.",
    ],
    nearby: ['Barassie', 'Loans', 'Dundonald', 'Prestwick', 'Irvine'],
    faqs: [
      {
        q: 'Do I need a separate page for every village I cover?',
        a: "No - and doing that is one of the quickest ways to get a site hit by a Google spam update. One good Troon page, a properly set service area on your Google Business Profile, and real reviews from customers in those villages will do far more.",
      },
      {
        q: 'Can you help a Troon hospitality business with bookings?',
        a: 'Yes. I can add booking or enquiry forms, connect to the booking system you already use, and track which searches and pages lead to bookings.',
      },
    ],
  },
  {
    slug: 'prestwick',
    name: 'Prestwick',
    title: 'Web Design Prestwick | Websites & Local SEO | CodaPixel',
    description:
      'Web design and local SEO for Prestwick businesses. Mobile-first sites, Google Business Profile optimisation and lead tracking. Book a free website demo.',
    heading: 'Web design for Prestwick businesses',
    intro: [
      'Prestwick sits right between Ayr and Troon, and a lot of searches here show results from both. If your website and Google Business Profile only mention Ayr, or say nothing about where you work at all, you can lose Prestwick customers to businesses a few miles further away.',
      "I build websites that make it clear to Google - and to customers - that you serve Prestwick: a page written for Prestwick searches, your Google Business Profile service area set correctly, and reviews that mention the work you've done locally.",
    ],
    whoHeading: 'Who I work with in Prestwick',
    who: [
      "Mostly trades and local service businesses that rely on phone calls - from cleaners and joiners to garden and home improvement companies. Every site comes with call and form tracking, so you can see exactly how many enquiries it's bringing in each month.",
    ],
    nearby: ['Monkton', 'Ayr', 'Troon', 'Annbank', 'Mossblown'],
    faqs: [
      {
        q: "I'm based in Prestwick but work all over Ayrshire - which town should my site target?",
        a: 'Your Google Business Profile ranks strongest around your address, so Prestwick and the closest towns first. A wider service area is covered with good service pages and reviews rather than a page per town.',
      },
      {
        q: 'How much does a website cost?',
        a: 'Plans start from £89/month for a professional website with hosting and maintenance included. Local SEO and Google Business Profile work are part of the Growth plan - see the pricing page for the full breakdown.',
      },
    ],
  },
  {
    slug: 'kilmarnock',
    name: 'Kilmarnock',
    title: 'Web Design Kilmarnock | Websites & Local SEO | CodaPixel',
    description:
      "Web design, local SEO and digital marketing for Kilmarnock businesses. See how RB Joinery reached #1 for 'joiner near me' across Kilmarnock in 3 months.",
    heading: 'Web design and digital marketing in Kilmarnock',
    intro: [
      "Kilmarnock is East Ayrshire's biggest town, and the place where I've got the clearest proof of what local SEO can do. RB Joinery came to me barely visible on Google Maps. Three months later they were ranking #1 for \"joiner near me\" right across Kilmarnock and the surrounding villages, with organic traffic up 5x.",
      "That's the approach I take with every Kilmarnock business: a fast, mobile-first website, service pages built around how people in Kilmarnock search, a properly optimised Google Business Profile, and rank tracking across the whole town - not just your street.",
    ],
    whoHeading: 'Digital marketing for Kilmarnock businesses',
    who: [
      "I also build and look after the website for Remi Roofing, a Kilmarnock roofer, so I know the local trades market well. Most Kilmarnock trades get their work from Google Maps and word of mouth - digital marketing for them means ranking in the map pack, turning visits into calls, and building reviews.",
    ],
    nearby: ['Hurlford', 'Kilmaurs', 'Stewarton', 'Crosshouse', 'Galston'],
    caseStudy: {
      name: 'RB Joinery',
      href: '/case-studies/rb-joinery/',
      result: "#1 for 'joiner near me' across Kilmarnock in 3 months, 5x organic traffic",
    },
    faqs: [
      {
        q: 'How did RB Joinery rank across all of Kilmarnock?',
        a: 'A rebuilt service-focused website, a fully optimised Google Business Profile and steady review generation. The case study has the before and after rank maps.',
      },
      {
        q: 'Do you work with businesses outside Kilmarnock town?',
        a: 'Yes - Hurlford, Kilmaurs, Stewarton, Galston and the rest of East Ayrshire.',
      },
    ],
  },
  {
    slug: 'irvine',
    name: 'Irvine',
    title: 'Web Design Irvine | Websites & Local SEO | CodaPixel',
    description:
      "Web design and local SEO for Irvine businesses. See how Jimbo's Exterior Cleaning grew organic traffic 29x and ranked #1 for 'roof cleaner Irvine'.",
    heading: 'Web design and local SEO in Irvine',
    intro: [
      "Irvine is North Ayrshire's largest town, and for trades it's a busy market. Jimbo's Exterior Cleaning is a good example of what's possible here: after rebuilding the site and working on local SEO, their organic traffic grew 29x and they reached #1 on Google for \"roof cleaner Irvine\" and \"gutter cleaner Irvine\".",
      'Every Irvine site I build follows the same playbook: fast and mobile-first, a clear page for each service, a Google Business Profile set up properly, and tracking so you know how many calls and enquiries the website brings in.',
    ],
    whoHeading: 'Covering Irvine and North Ayrshire',
    who: [
      'Irvine businesses usually work across Kilwinning, Dreghorn, Springside and down towards Troon. Ranking across that area comes from one strong Irvine page, the right Google Business Profile service area and reviews from real customers - not dozens of near-identical village pages.',
    ],
    nearby: ['Kilwinning', 'Dreghorn', 'Springside', 'Stevenston', 'Troon'],
    caseStudy: {
      name: "Jimbo's Exterior Cleaning",
      href: '/case-studies/jimbos-exterior-cleaning/',
      result: "29x organic traffic, #1 for 'roof cleaner Irvine' and 'gutter cleaner Irvine'",
    },
    faqs: [
      {
        q: "What did you do for Jimbo's Exterior Cleaning?",
        a: 'A new website built around each service, local SEO for Irvine and the surrounding towns, and Google Business Profile work. The full breakdown, with rank maps and Search Console data, is in the case study.',
      },
      {
        q: 'How quickly will I see enquiries?',
        a: "Most Irvine trades see movement on Google Maps within 1-3 months. You'll get a monthly report showing rankings, calls and form enquiries.",
      },
    ],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
