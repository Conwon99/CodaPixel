// Site content for the Everglow-layout CodaPixel site.

export const services = [
  { n: '01', title: 'Websites', text: 'Fast, mobile-first sites built to get the phone ringing. Free demo before you pay.', href: '/services/websites' },
  { n: '02', title: 'Local SEO', text: 'Rank in Google Maps and organic results for the searches your customers make.', href: '/services/local-seo' },
  { n: '03', title: 'Meta Ads', text: 'Facebook and Instagram ads that put your work in front of local homeowners and bring in enquiries fast.', href: '/services/meta-ads' },
  { n: '04', title: 'Google Ads', text: 'Search campaigns and landing pages that put you at the top of Google when customers are ready to book.', href: '/services/google-ads' },
];

export const steps = [
  { title: 'Free demo', text: 'Tell us about your business. We mock up a preview of your new site, free.', tags: ['Quick chat', 'Site preview'] },
  { title: 'Build', text: 'We build the site around your services and the areas you cover, and get it live fast.', tags: ['Design', 'Copy'] },
  { title: 'Rank', text: 'Local SEO and your Google Business Profile get you found by people searching now.', tags: ['Google Maps', 'Service pages'] },
  { title: 'Track', text: 'Enquiries land in Leadzap and you get a monthly report on leads and rankings.', tags: ['Leadzap', 'Monthly report'] },
];

export const work = [
  { name: "Jimbo's Exterior Cleaning", tags: 'Website · Local SEO', image: '/Portfolio/live/jimbos.webp', href: '/case-studies/jimbos-exterior-cleaning' },
  { name: 'Ayrshire Fencing Group', tags: 'Website · Local SEO', image: '/Portfolio/live/ayrshire-fencing.webp' },
  { name: 'RB Joinery', tags: 'Website · Local SEO', image: '/Portfolio/live/rb-joinery.webp', href: '/case-studies/rb-joinery' },
  { name: 'Double O Detailing', tags: 'Website · SEO audit', image: '/Portfolio/live/double-o.webp', href: '/case-studies/double-o-detailing' },
  { name: 'EK Power Washing', tags: 'Website · Local SEO', image: '/Portfolio/live/ek-power-washing.webp' },
  { name: "Christie's Exterior Cleaning", tags: 'Website · Local SEO', image: '/Portfolio/live/christies.webp' },
  { name: 'Cutting Edge Landscaping', tags: 'Website', image: '/Portfolio/live/cutting-edge.webp' },
  { name: 'Remi Roofing Solutions', tags: 'Website', image: '/Portfolio/live/remi-roofing.webp' },
];

export const caseStudies = [
  {
    slug: 'jimbos-exterior-cleaning', name: "Jimbo's Exterior Cleaning", place: 'Irvine, Ayrshire',
    title: '#1 On Google, Getting 2–3 Jobs A Week.',
    text: 'Local SEO built to win the map pack and organic rankings for high-intent cleaning searches.',
    image: '/case-studies/jimbos-rank-map.png', video: '/video/jimbos-hero.mp4', poster: '/video/jimbos-hero-poster.jpg', leadsFor: "Jimbo's Cleaning", stats: [['29x', 'Organic traffic'], ['#1', 'Google ranking']],
  },
  {
    slug: 'rb-joinery', name: 'RB Joinery', place: 'Kilmarnock, Ayrshire',
    title: '#1 For "Joiner Near Me" Across Kilmarnock In 3 Months.',
    text: 'A joinery business that went from invisible on Google Maps to ranking across the whole local area.',
    image: '/case-studies/rbjoinery-rankmap-after.png', stats: [['5x', 'Organic traffic'], ['#1', 'Joiner near me']],
  },
  {
    slug: 'chris-your-man-with-a-van', name: 'Your Man With A Van', place: 'Mauchline, Ayrshire',
    title: 'Search Visibility That Turned Into Real Bookings.',
    text: 'Local SEO for a removals business that grew organic clicks 700% and filled the diary.',
    image: '/case-studies/chris-gsc-graph.png', stats: [['+700%', 'Clicks'], ['36k', 'Impressions']],
  },
  {
    slug: 'double-o-detailing', name: 'Double O Detailing', place: 'Killearn, Stirlingshire',
    title: 'Recovering A Site Hit By Google’s Spam Update.',
    text: 'Found and removed the doorway and duplicate pages dragging the site down, then rebuilt it lean.',
    image: '', stats: [['~280', 'URLs cleaned up'], ['-93%', 'Page weight']],
  },
];

// Real Google reviews (Google Maps, CodaPixel, 5.0 from 12 reviews). Excerpts are verbatim.
export const reviews = [
  { name: 'William McCarroll', role: 'Ayrshire Fencing Group', text: 'He listened to my ideas and preferences, gave me advice and pretty much nailed it first time… Had a few leads already after just a couple of weeks.' },
  { name: 'Dirty Deeds', role: 'Google review', text: 'Since partnering with them, I’ve been receiving upwards of 10 + extra leads per week directly through my website.' },
  { name: 'Double-O Detailing', role: 'Google review', text: 'Thorough and professional throughout the entire process, and has a multitude of knowledge when it comes to web design and SEO.' },
  { name: 'Jim Catterson', role: 'Google review', text: 'Absolutely brilliant experience from start to finish. The website was designed exactly how I wanted—clean, professional, and easy to use.' },
  { name: 'Gordie Graham', role: 'Google review', text: 'Delivers top class results, keeps you informed at all times, and is a master of SEO and web design.' },
  { name: 'Andrew Morley', role: 'Google review', text: 'I wanted to use someone local instead of a national company, & he’s been nothing short of brilliant!' },
];

export const allReviews = [
  ...reviews,
  { name: 'Brett Curran', role: 'Google review', text: 'My website was made & published immaculately with a very Fast Turn Around. Would recommend any Business’s to get in touch you won’t be disappointed!' },
  { name: 'lami supreme', role: 'Google review', text: 'Connor has a great work ethnic by creating a very professional website which has created so much more work opportunities for my company.' },
  { name: 'Yoga71 with Ange', role: 'Holistics71 with Ange', text: 'He listened carefully to my branding needs… The ongoing monthly support to keep my website up to date is excellent.' },
  { name: 'Scott Campbell', role: 'Google review', text: 'Very professional I would highly recommend him to anyone needing a website for there business and its been getting me alot of potential customers.' },
  { name: 'Christophe Paulet', role: 'Google review', text: 'I strongly recommend Connor. Very professional, very reactive and reliable.' },
  { name: 'Cameron Freed', role: 'Google review', text: 'Fast, reliable service thank you!!' },
];

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps?cid=15261828920523268496';

export const plans = [
  { name: 'Starter', blurb: 'A professional website without a large upfront cost.', price: 89, features: ['Mobile-friendly website', 'Hosting, SSL and maintenance', 'Contact forms', 'Basic on-page SEO', '1 hour of updates a month'] },
  { name: 'Growth', blurb: 'Get found on Google and bring in a steady flow of enquiries.', price: 249, hot: true, features: ['Everything in Starter', 'Local SEO', 'Google Business Profile optimisation', 'Review generation strategy', 'Monthly SEO work and reporting', 'Unlimited website updates'] },
  { name: 'Full Service', blurb: 'We run your whole lead generation. Ad spend is separate.', price: 879, features: ['Everything in Growth', 'Google Ads management', 'Landing pages', 'Call and enquiry tracking', 'Ongoing ad testing', 'Priority support'] },
];

export const faqs = [
  ['Do I have to pay anything upfront?', 'No. Our monthly plans spread the cost so you get a professional site without a big upfront bill, and we mock up a free demo before you commit.'],
  ['How long until I see leads?', 'Ads can bring enquiries within days. Local SEO usually takes a few months to build; RB Joinery ranked #1 for "joiner near me" in Kilmarnock within three months.'],
  ['Who do you work with?', 'Mostly trade and home-service businesses across Scotland: cleaners, joiners, roofers, fencers, detailers and more.'],
  ['How do I know it is working?', 'Every form enquiry and tracked call is logged in Leadzap, our lead dashboard, and you get a monthly report with leads, rankings and Search Console data.'],
  ['Can I make changes to my site?', 'Yes. Updates are included in every plan. Just send what you need changing and we sort it.'],
];

export const clientLogos = [
  { name: 'RB Joinery', src: '/brand/clients/rb-joinery.webp' },
  { name: 'Remi Roofing Solutions', src: '/brand/clients/remi-roofing.webp' },
  { name: 'Holistics71 with Ange', src: '/brand/clients/holistics71.webp' },
  { name: 'RP Build & Landscape', src: '/brand/clients/rp-build.webp' },
  { name: 'Sparkles Cleaning Service', src: '/brand/clients/sparkles.webp' },
  { name: 'SC Auto Detailing', src: '/brand/clients/sc-auto.webp' },
  { name: 'Dirtworks Landscaping', src: '/brand/clients/dirtworks.webp' },
];

// ===== Service pages =====
export const servicePages = [
  {
    slug: 'websites', n: '01', title: 'Websites', h1: 'Websites That Turn Visitors Into Enquiries.',
    lead: 'Fast, mobile-first websites for trade businesses, with a free demo before you pay a penny.',
    image: '/Portfolio/live/rb-joinery.webp',
    intro: 'Most trade websites look fine but never ring the phone. We build sites around one job: turning a local search into a call or a quote request. Clear services, real photos of your work, reviews front and centre, and a quote form on every page.',
    overview: 'We start with a free demo so you can see your new site before committing. Once you are happy, we write the copy, build the pages for each service you offer, connect your forms to Leadzap and get you live. Hosting, SSL and updates are included in every plan.',
    deliverables: ['Free design demo before you commit', 'A page for each service you offer', 'Quote forms and click-to-call on every page', 'Hosting, SSL and ongoing updates', 'Every enquiry tracked in Leadzap'],
    seoTitle: 'Website Design for Trades in Scotland | CodaPixel',
    seoDesc: 'Fast, mobile-first websites for Scottish trade businesses, built to turn visitors into enquiries. Free demo before you pay.',
  },
  {
    slug: 'local-seo', n: '02', title: 'Local SEO', h1: 'Get Found First When Locals Search.',
    lead: 'Rank in Google Maps and organic results for the searches your customers actually make.',
    image: '/case-studies/rbjoinery-rankmap-after.png',
    intro: 'When someone searches "joiner near me" or "gutter cleaning Irvine", they are ready to book. Local SEO puts you in front of them, in the map pack and the organic results, across the whole area you cover.',
    overview: 'We optimise your Google Business Profile, build service pages that target the searches that bring in work, earn reviews and keep your business details consistent across directories. Rankings are tracked with grid maps, and you see the leads that come from it in Leadzap. RB Joinery went from barely ranking to #1 for "joiner near me" across Kilmarnock in three months.',
    deliverables: ['Google Business Profile optimisation', 'Service pages built around real searches', 'Review generation strategy', 'Local citations and consistency checks', 'Monthly rankings and Search Console reports'],
    seoTitle: 'Local SEO for Trades in Scotland | CodaPixel',
    seoDesc: 'Rank in Google Maps and organic search for the local searches that bring in work. Google Business Profile, service pages and reviews.',
  },
  {
    slug: 'meta-ads', n: '03', title: 'Meta Ads', h1: 'Facebook And Instagram Ads That Bring In Jobs.',
    lead: 'Put your work in front of local homeowners and bring in enquiries within days.',
    image: '/Portfolio/live/ek-power-washing.webp',
    intro: 'SEO takes months to build. Meta Ads can fill the diary this week. We run Facebook and Instagram campaigns aimed at homeowners in the areas you cover, using your real before-and-after work.',
    overview: 'We set up the campaigns, write and design the ads, build lead forms or landing pages and test what works. Every lead is logged in Leadzap, so you know exactly what each pound of ad spend brought in. Ad spend is separate and paid directly to Meta.',
    deliverables: ['Campaign setup and audience targeting', 'Ad creative from your real work', 'Lead forms and landing pages', 'Ongoing testing and optimisation', 'Leads and cost per lead tracked in Leadzap'],
    seoTitle: 'Meta Ads for Trades | Facebook & Instagram Ads | CodaPixel',
    seoDesc: 'Facebook and Instagram ads for Scottish trade businesses, built to bring in enquiries fast, with every lead tracked.',
  },
  {
    slug: 'google-ads', n: '04', title: 'Google Ads', h1: 'Be At The Top Of Google When Customers Are Ready.',
    lead: 'Search campaigns and landing pages for the moment someone needs your trade.',
    image: '/Portfolio/live/christies.webp',
    intro: 'Google Ads puts you above the results for searches like "roof repair Kilmarnock" the moment someone needs it. It is the fastest way to win high-intent jobs while your SEO builds.',
    overview: 'We build tightly targeted search campaigns around your services and areas, write the ads, create landing pages that convert and set up call and form tracking. You get a clear monthly report of leads and cost per lead from Leadzap, not a pile of click charts. Ad spend is separate and paid directly to Google.',
    deliverables: ['Search campaign setup by service and area', 'Ad copy and keyword research', 'Landing pages built to convert', 'Call and form conversion tracking', 'Monthly lead and cost-per-lead reports'],
    seoTitle: 'Google Ads for Trades in Scotland | CodaPixel',
    seoDesc: 'Google Ads search campaigns and landing pages for Scottish trade businesses, with every call and enquiry tracked.',
  },
];

// ===== Case study detail pages =====
export const caseDetails = {
  'jimbos-exterior-cleaning': {
    name: "Jimbo's Exterior Cleaning", h1: '#1 On Google, Getting 2–3 Jobs A Week.', url: 'https://jimboscleaning.com', urlLabel: 'jimboscleaning.com',
    lead: 'How a local exterior cleaning business went from barely visible on Google to ranking #1 for the searches that bring in paying customers.',
    video: '/video/jimbos-hero.mp4', poster: '/video/jimbos-hero-poster.jpg', leadsFor: "Jimbo's Cleaning",
    meta: [['Client', "Jimbo's Exterior Cleaning"], ['Location', 'Irvine, Ayrshire'], ['Trade', 'Exterior cleaning'], ['Services', 'Website · Local SEO']],
    stats: [['29x', 'Organic traffic'], ['#1', '"roof cleaner irvine"'], ['#1', '"gutter cleaner irvine"']],
    sections: [
      ['The Challenge', ["Jimbo's Exterior Cleaning offers roof cleaning, gutter cleaning and exterior washing across Irvine and the wider Ayrshire area. Like a lot of local tradespeople, the business relied almost entirely on word of mouth and repeat customers. The website wasn't bringing in new enquiries because it wasn't being found for the searches that mattered.", "The goal was straightforward: get Jimbo's showing up on Google for the exact terms local homeowners were typing in, and turn that visibility into real, trackable clicks and calls."]],
      ['The Strategy', ['Local keyword targeting: on-page SEO built around the exact service and location searches Jimbo\'s customers use, instead of generic industry terms nobody was searching for.', 'Local map coverage: Google Business Profile optimisation and location signals to build consistent visibility across Irvine and the surrounding towns, not just a single postcode.', 'Technical and content foundations: a fast, mobile-friendly site with clear service pages, so traffic from search actually converted into enquiries.']],
      ['The Results', ['Organic traffic grew 29x, and Jimbo\'s now ranks #1 on Google for "roof cleaner Irvine" and "gutter cleaner Irvine", the two highest-intent searches in the local market. Here is the data straight from Google Search Console and the local rank tracking.']],
    ],
    figures: [['/case-studies/jimbos-gsc-graph.png', 'Google Search Console: clicks & impressions', 'Weekly clicks and impressions climbing steadily as rankings improved.'], ['/case-studies/jimbos-rank-map.png', 'Local rank map: #1 across Irvine', 'Every grid point ranking #1 for target keywords across the Irvine service area.']],
  },
  'rb-joinery': {
    name: 'RB Joinery', h1: '#1 For "Joiner Near Me" Across Kilmarnock In 3 Months.', url: 'https://rbjoinery.com', urlLabel: 'rbjoinery.com',
    lead: 'How a Kilmarnock joinery business went from invisible on Google Maps to ranking across the entire local area in three months.',
    image: '/Portfolio/live/rb-joinery.webp', leadsFor: 'RB Joinery',
    meta: [['Client', 'RB Joinery'], ['Location', 'Kilmarnock, Ayrshire'], ['Trade', 'Joinery & building'], ['Services', 'Website · Local SEO']],
    stats: [['5x', 'Organic traffic'], ['3 mo', 'Unranked to area-wide'], ['#1', '"joiner near me"']],
    sections: [
      ['The Challenge', ['RB Joinery is a joinery and carpentry business serving Kilmarnock and the surrounding Ayrshire villages. Before this campaign the site barely showed up on Google: almost every point on the local rank map came back outside the top 20, with the business only visible right on its own doorstep.', 'For a trade business, that is the difference between the phone ringing and it staying silent, especially for a term like "joiner near me", which is exactly what homeowners type when they need work done now.']],
      ['The Strategy', ['Local service page SEO: dedicated pages around the joinery and carpentry services people search for locally, with "joiner near me" as the primary target, instead of one generic page trying to rank for everything.', 'Google Business Profile and map pack optimisation: categories, service areas and consistent citations rebuilt so the business showed up across Kilmarnock, not just at its exact address.', 'On-page and technical fixes: site speed, structure and SEO fundamentals cleaned up so Google could crawl and rank the site properly.']],
      ['The Results', ['Organic traffic grew 5x, and within three months RB Joinery went from nowhere on the map to ranking #1 for "joiner near me" across Kilmarnock and the surrounding villages.']],
    ],
    figures: [['/case-studies/rbjoinery-rankmap-before.png', 'Before: barely ranking', 'Almost every point came back 20+ for "joiner near me".'], ['/case-studies/rbjoinery-rankmap-after.png', 'After 3 months: area-wide coverage', 'Top-8 rankings across almost the entire grid, with #1–#3 around Kilmarnock.'], ['/case-studies/rbjoinery-gsc-graph.png', 'Google Search Console: clicks & impressions', 'Clicks and impressions trending upward alongside the rank map improvement.']],
  },
  'chris-your-man-with-a-van': {
    name: 'Your Man With A Van', h1: 'Organic Clicks Up 700% For A Local Removals Business.', url: 'https://chrisyourmanwithavan.com', urlLabel: 'chrisyourmanwithavan.com',
    lead: 'How a man-with-a-van removals business near Mauchline grew organic clicks by 700%, turning search visibility into real bookings.',
    meta: [['Client', 'Chris – Your Man With A Van'], ['Location', 'Mauchline, Ayrshire'], ['Trade', 'Removals'], ['Services', 'Local SEO']],
    stats: [['+700%', 'Organic clicks'], ['36k', 'Monthly impressions'], ['958', 'Total organic clicks']],
    sections: [
      ['The Challenge', ['Chris offers removals and man-with-a-van services around Mauchline and the surrounding East Ayrshire villages. Before this campaign the site barely showed up in organic search: Search Console recorded only a trickle of clicks and impressions, week after week.', 'For a removals business that is a lot of lost jobs. The goal was to turn that trickle of organic traffic into a steady stream of real enquiries.']],
      ['The Strategy', ['Local removals keyword targeting: on-page content around the exact man-with-a-van and removals searches used across every village in the service area.', 'Extending Google Business Profile reach: an expanded service area and citations so Chris showed up across the outlying villages, not just next door.', 'Site-wide SEO fundamentals: structure, speed and on-page SEO cleaned up so every new visitor landed on a site built to convert them into a booking.']],
      ['The Results', ['Organic clicks grew 700%, climbing to 958 total clicks and 36k impressions.']],
    ],
    figures: [['/case-studies/chris-gsc-graph.png', 'Google Search Console: clicks & impressions', 'Weekly clicks and impressions climbing to 958 clicks and 36k impressions.']],
  },
} as const;
