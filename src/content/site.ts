// Site content for the Everglow-layout CodaPixel site.

export const services = [
  { n: '01', title: 'Websites', text: 'Fast, mobile-first sites built to get the phone ringing. Free demo before you pay.', href: '/services#websites' },
  { n: '02', title: 'Local SEO', text: 'Rank in Google Maps and organic results for the searches your customers make.', href: '/services#seo' },
  { n: '03', title: 'Google Ads', text: 'Campaigns and landing pages that bring in enquiries while SEO builds.', href: '/services#ads' },
  { n: '04', title: 'Lead tracking', text: 'Every form and call logged in Leadzap, so you see exactly what you get.', href: '/services#tracking' },
];

export const steps = [
  { title: 'Free demo', text: 'Tell us about your business. We mock up a preview of your new site, free.', tags: ['Quick chat', 'Site preview'] },
  { title: 'Build', text: 'We build the site around your services and the areas you cover, and get it live fast.', tags: ['Design', 'Copy'] },
  { title: 'Rank', text: 'Local SEO and your Google Business Profile get you found by people searching now.', tags: ['Google Maps', 'Service pages'] },
  { title: 'Track', text: 'Enquiries land in Leadzap and you get a monthly report on leads and rankings.', tags: ['Leadzap', 'Monthly report'] },
];

export const work = [
  { name: 'RB Joinery', tags: 'Website · Local SEO', image: '/Portfolio/rbjoinery.webp', href: '/case-studies/rb-joinery' },
  { name: 'Holistics71 with Ange', tags: 'Website · Branding', image: '/Portfolio/holistics71.webp' },
  { name: 'Tasse Coffee Co', tags: 'Website', image: '/Portfolio/tassecoffeeco.webp' },
  { name: 'Dirty Deeds', tags: 'Website · Ads', image: '/Portfolio/dirtydeeds.png' },
  { name: 'Sparkles', tags: 'Website', image: '/Portfolio/sparklessite.webp' },
];

export const caseStudies = [
  {
    slug: 'jimbos-exterior-cleaning', name: "Jimbo's Exterior Cleaning", place: 'Irvine, Ayrshire',
    title: 'From Invisible To Winning The Map Pack In Irvine.',
    text: 'Local SEO built to win the map pack and organic rankings for high-intent cleaning searches.',
    image: '/case-studies/jimbos-rank-map.png', stats: [['29x', 'Organic traffic'], ['#1', 'Google ranking']],
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

export const marquee = ['Web Design', 'Local SEO', 'Google Business Profile', 'Google Ads', 'Lead Tracking'];
