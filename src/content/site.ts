// Site content for the Everglow-layout CodaPixel site.

export const services = [
  { n: '01', title: 'Websites', text: 'Fast, mobile-first sites built to get the phone ringing. Free demo before you pay.', href: '/services/websites/' },
  { n: '02', title: 'Local SEO', text: 'Rank in Google Maps and organic results for the searches your customers make.', href: '/services/local-seo/' },
  { n: '03', title: 'Meta Ads', text: 'Facebook and Instagram ads that put your work in front of local homeowners and bring in enquiries fast.', href: '/services/meta-ads/' },
  { n: '04', title: 'Google Ads', text: 'Search campaigns and landing pages that put you at the top of Google when customers are ready to book.', href: '/services/google-ads/' },
];

export const steps = [
  { title: 'Free demo', text: 'Tell us about your business. We mock up a preview of your new site, free.', tags: ['Quick chat', 'Site preview'] },
  { title: 'Build', text: 'We build the site around your services and the areas you cover, and get it live fast.', tags: ['Design', 'Copy'] },
  { title: 'Rank', text: 'Local SEO and your Google Business Profile get you found by people searching now.', tags: ['Google Maps', 'Service pages'] },
  { title: 'Track', text: 'Enquiries land in Leadzap and you get a monthly report on leads and rankings.', tags: ['Leadzap', 'Monthly report'] },
];

export const work = [
  { name: "Jimbo's Exterior Cleaning", tags: 'Website · Local SEO', image: '/Portfolio/live/jimbos.webp', href: '/case-studies/jimbos-exterior-cleaning/' },
  { name: 'Ayrshire Fencing Group', tags: 'Website · Local SEO', image: '/Portfolio/live/ayrshire-fencing.webp' },
  { name: 'RB Joinery', tags: 'Website · Local SEO', image: '/Portfolio/live/rb-joinery.webp', href: '/case-studies/rb-joinery/' },
  { name: 'Double O Detailing', tags: 'Website · SEO audit', image: '/Portfolio/live/double-o.webp', href: '/case-studies/double-o-detailing/' },
  { name: 'EK Power Washing', tags: 'Website · Local SEO', image: '/Portfolio/live/ek-power-washing.webp', href: '/case-studies/ek-power-washing/' },
  { name: "Christie's Exterior Cleaning", tags: 'Website · Local SEO', image: '/Portfolio/live/christies.webp', href: '/case-studies/christies-exterior-cleaning/' },
  { name: 'Cutting Edge Landscaping', tags: 'Website', image: '/Portfolio/live/cutting-edge.webp' },
  { name: 'Remi Roofing Solutions', tags: 'Website', image: '/Portfolio/live/remi-roofing.webp' },
];

export const caseStudies = [
  {
    slug: 'jimbos-exterior-cleaning', name: "Jimbo's Exterior Cleaning", place: 'Irvine, Ayrshire',
    title: '#1 On Google, Getting 2–3 Jobs A Week.',
    text: 'Local SEO built to win the map pack and organic rankings for high-intent cleaning searches.',
    image: '/case-studies/jimbos-rank-map.png', video: '/video/jimbos-hero.mp4', poster: '/video/jimbos-hero-poster.jpg', leadsFor: "Jimbo's Cleaning", stats: [['16.7%', 'Visits to enquiries'], ['49/49', '#1 on Google Maps']],
  },
  {
    slug: 'ek-power-washing', name: 'EK Power Washing', place: 'East Kilbride, South Lanarkshire',
    title: '32 Enquiries In 7 Weeks At A 35% Conversion Rate.',
    text: 'A new website and local SEO for an East Kilbride exterior cleaner, with every form, call and text tracked.',
    image: '/case-studies/ek-power-washing-mappack.webp', leadsFor: 'EK Power Washing', stats: [['35.1%', 'Visits to enquiries'], ['2.8x', 'Clicks from Google']],
  },
  {
    slug: 'rb-joinery', name: 'RB Joinery', place: 'Kilmarnock, Ayrshire',
    title: '#1 For "Joiner Near Me" Across Kilmarnock In 3 Months.',
    text: 'A joinery business that went from invisible on Google Maps to ranking across the whole local area.',
    image: '/case-studies/rbjoinery-rankmap-after.png', stats: [['5x', 'Organic traffic'], ['#1', 'Joiner near me']],
  },
  {
    slug: 'christies-exterior-cleaning', name: "Christie's Exterior Cleaning", place: 'Mayfield, Midlothian',
    title: '23 Enquiries In 10 Weeks From A Brand New Site.',
    text: 'Website and local SEO for a Midlothian gutter and roof cleaner, turning 17% of Google visitors into enquiries.',
    image: '/Portfolio/live/christies.webp', stats: [['17%', 'Visits to enquiries'], ['+59%', 'Google visibility']],
  },
  {
    slug: 'anderson-roofing', name: 'Anderson Roofing & Building', place: 'Falkirk',
    title: 'Top 3 On Google Maps For "New Roof" Across Falkirk.',
    text: 'Local SEO for a Falkirk roofer: top 3 on Maps at 46 of 49 grid points and a 15% visit-to-enquiry rate.',
    image: '/case-studies/anderson-roofing-mappack.webp', stats: [['46/49', 'Top 3 on Google Maps'], ['15%', 'Visits to enquiries']],
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
  ['Where are you based?', 'We are based in Ayrshire and work with businesses in Ayr, Troon, Prestwick, Kilmarnock, Irvine, Glasgow and right across Scotland. Most work is done remotely, and we are happy to meet locally in Ayrshire.'],
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
    seoTitle: 'Website Design Ayrshire & Scotland for Trades | CodaPixel',
    seoDesc: 'Fast, mobile-first websites for Scottish trade businesses, built to turn visitors into enquiries. Free demo before you pay.',
  },
  {
    slug: 'local-seo', n: '02', title: 'Local SEO', h1: 'Get Found First When Locals Search.',
    lead: 'Rank in Google Maps and organic results for the searches your customers actually make.',
    image: '/case-studies/rbjoinery-rankmap-after.png',
    intro: 'When someone searches "joiner near me" or "gutter cleaning Irvine", they are ready to book. Local SEO puts you in front of them, in the map pack and the organic results, across the whole area you cover.',
    overview: 'We optimise your Google Business Profile, build service pages that target the searches that bring in work, earn reviews and keep your business details consistent across directories. Rankings are tracked with grid maps, and you see the leads that come from it in Leadzap. RB Joinery went from barely ranking to #1 for "joiner near me" across Kilmarnock in three months.',
    deliverables: ['Google Business Profile optimisation', 'Service pages built around real searches', 'Review generation strategy', 'Local citations and consistency checks', 'Monthly rankings and Search Console reports'],
    seoTitle: 'Local SEO Ayrshire & Scotland for Trades | CodaPixel',
    seoDesc: 'Rank in Google Maps and organic search for the local searches that bring in work. Google Business Profile, service pages and reviews.',
  },
  {
    slug: 'meta-ads', n: '03', title: 'Meta Ads', h1: 'Facebook And Instagram Ads That Bring In Jobs.',
    lead: 'Put your work in front of local homeowners and bring in enquiries within days.',
    image: '/Portfolio/live/ek-power-washing.webp',
    intro: 'SEO takes months to build. Meta Ads can fill the diary this week. We run Facebook and Instagram campaigns aimed at homeowners in the areas you cover, using your real before-and-after work.',
    overview: 'We set up the campaigns, write and design the ads, build lead forms or landing pages and test what works. Every lead is logged in Leadzap, so you know exactly what each pound of ad spend brought in. Ad spend is separate and paid directly to Meta.',
    deliverables: ['Campaign setup and audience targeting', 'Ad creative from your real work', 'Lead forms and landing pages', 'Ongoing testing and optimisation', 'Leads and cost per lead tracked in Leadzap'],
    seoTitle: 'Facebook & Instagram Ads for Trades, Ayrshire | CodaPixel',
    seoDesc: 'Facebook and Instagram ads for Scottish trade businesses, built to bring in enquiries fast, with every lead tracked.',
  },
  {
    slug: 'google-ads', n: '04', title: 'Google Ads', h1: 'Be At The Top Of Google When Customers Are Ready.',
    lead: 'Search campaigns and landing pages for the moment someone needs your trade.',
    image: '/Portfolio/live/christies.webp',
    intro: 'Google Ads puts you above the results for searches like "roof repair Kilmarnock" the moment someone needs it. It is the fastest way to win high-intent jobs while your SEO builds.',
    overview: 'We build tightly targeted search campaigns around your services and areas, write the ads, create landing pages that convert and set up call and form tracking. You get a clear monthly report of leads and cost per lead from Leadzap, not a pile of click charts. Ad spend is separate and paid directly to Google.',
    deliverables: ['Search campaign setup by service and area', 'Ad copy and keyword research', 'Landing pages built to convert', 'Call and form conversion tracking', 'Monthly lead and cost-per-lead reports'],
    seoTitle: 'Google Ads Management Ayrshire for Trades | CodaPixel',
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
    stats: [['16.7%', 'Visits to enquiries'], ['49/49', '#1 on Maps: gutter, roof, driveway'], ['29x', 'Organic traffic']],
    sections: [
      ['The Challenge', ["Jimbo's Exterior Cleaning offers roof cleaning, gutter cleaning and exterior washing across Irvine and the wider Ayrshire area. Like a lot of local tradespeople, the business relied almost entirely on word of mouth and repeat customers. The website wasn't bringing in new enquiries because it wasn't being found for the searches that mattered.", "The goal was straightforward: get Jimbo's showing up on Google for the exact terms local homeowners were typing in, and turn that visibility into real, trackable clicks and calls."]],
      ['The Strategy', ['Local keyword targeting: on-page SEO built around the exact service and location searches Jimbo\'s customers use, instead of generic industry terms nobody was searching for.', 'Local map coverage: Google Business Profile optimisation and location signals to build consistent visibility across Irvine and the surrounding towns, not just a single postcode.', 'Technical and content foundations: a fast, mobile-friendly site with clear service pages, so traffic from search actually converted into enquiries.']],
      ['The Results', ['Organic traffic grew 29x, and Jimbo\'s now ranks #1 on Google for "roof cleaner Irvine" and "gutter cleaner Irvine", the two highest-intent searches in the local market.', 'On Google Maps, Jimbo\'s is #1 at all 49 points of a 7×7 grid around Irvine for gutter, roof and driveway cleaning, and #1 at 35 of 49 for window cleaning (average position 1.3).', 'In the latest month (25 Oct – 24 Nov 2026), Google Search sent 78 visits and 13 of them became website enquiries: a 16.7% conversion rate. Visibility rose 8% to 4,661 impressions, and "roof cleaning ayrshire" climbed from 6 to 3.']],
    ],
    figures: [['/case-studies/jimbos-mappack.webp', 'Google Maps rank map: "gutter cleaning"', '7×7 grid, 3 km around Irvine. #1 at all 49 points, average position 1.0.'], ['/case-studies/jimbos-gsc-graph.png', 'Google Search Console: clicks & impressions', 'Weekly clicks and impressions climbing steadily as rankings improved.']],
  },
  'ek-power-washing': {
    name: 'EK Power Washing', h1: '32 Enquiries In 7 Weeks At A 35% Conversion Rate.', url: 'https://ekpowerwashing.co.uk', urlLabel: 'ekpowerwashing.co.uk',
    lead: 'How an East Kilbride exterior cleaner turned a new website into 32 tracked enquiries in seven weeks, with more than a third of Google visitors getting in touch.',
    image: '/Portfolio/live/ek-power-washing.webp', leadsFor: 'EK Power Washing',
    meta: [['Client', 'EK Power Washing'], ['Location', 'East Kilbride'], ['Trade', 'Exterior cleaning'], ['Services', 'Website · Local SEO']],
    stats: [['35.1%', 'Visits to enquiries'], ['2.8x', 'Clicks from Google'], ['#1', 'Maps: artificial grass cleaning']],
    sections: [
      ['The Challenge', ['EK Power Washing cleans driveways, patios, gutters and artificial grass across East Kilbride and South Lanarkshire, and installs Christmas lights in the winter. The business needed a website that would rank for local searches and actually turn visitors into booked jobs.', 'It also needed proof: every form, call and text tracked, so the owner could see exactly what the site was bringing in.']],
      ['The Strategy', ['Service pages for each job people search for: driveway, patio, gutter, render, artificial grass and Christmas light installation, each built around East Kilbride searches.', 'Google Business Profile work so the business shows on Maps for the services it already does well.', 'Full lead tracking through Leadzap: website forms, a tracked phone number and missed-call text-back, so no enquiry is lost.']],
      ['The Results', ['Between 6 October and 24 November 2026 the site brought in 32 enquiries: 21 website forms and 10 calls and texts, plus a missed call answered automatically by text-back. Google Search sent 77 visits in the latest four weeks, and 35.1% of them became an enquiry.', 'Comparing the first two weeks with the last two, Google impressions rose 55% to 1,734, clicks grew 2.8x from 19 to 54, and the site now appears for 169 different searches, up from 117. Christmas light installation alone brought 23 enquiries, and "christmas light installation east kilbride" ranks #1.', 'On Google Maps, EK Power Washing shows at all 49 points of a 7×7 grid around East Kilbride for artificial grass cleaning: #1 at 32 points and #2 at 16, an average position of 1.4.']],
    ],
    figures: [['/case-studies/ek-power-washing-mappack.webp', 'Google Maps rank map: "artificial grass cleaning"', '7×7 grid, 3 km around East Kilbride. #1 at 32 points, #2 at 16, average position 1.4.']],
  },
  'christies-exterior-cleaning': {
    name: "Christie's Exterior Cleaning", h1: '23 Enquiries In 10 Weeks From A Brand New Site.', url: 'https://christiegutteringservice.com', urlLabel: 'christiegutteringservice.com',
    lead: 'How a Midlothian gutter and roof cleaning business got 23 tracked enquiries in its first ten weeks, with 17% of Google visitors getting in touch.',
    image: '/Portfolio/live/christies.webp',
    meta: [['Client', "Christie's Exterior Cleaning Ltd"], ['Location', 'Mayfield, Midlothian'], ['Trade', 'Gutter & roof cleaning'], ['Services', 'Website · Local SEO']],
    stats: [['23', 'Enquiries in 10 weeks'], ['17%', 'Visits to enquiries'], ['+59%', 'Google visibility']],
    sections: [
      ['The Challenge', ["Christie's cleans gutters, roofs, driveways and patios from Mayfield across Midlothian, Edinburgh and the Lothians. It's a competitive market, with Edinburgh searches dominated by bigger, established firms.", 'The goal was a site that would start bringing in enquiries straight away and build towards the bigger Edinburgh searches over time.']],
      ['The Strategy', ['A fast website with a page for each service, written around the gutter and roof cleaning searches people make across Midlothian and Edinburgh.', 'Google Business Profile optimisation around Mayfield, with gutter cleaning as the lead service.', 'Lead tracking through Leadzap: website forms, a tracked phone number and missed-call text-back.']],
      ['The Results', ['From 14 September to 19 November 2026 the business received 23 enquiries: 16 website forms and 7 calls and texts, with 3 missed calls answered automatically by text-back. 135 visits came from Google Search, and 17% of them became an enquiry.', 'Comparing the first two weeks with the last two, Google impressions rose 59% to 1,765, the site now appears for 190 searches (up from 156), and weekly gutter impressions grew 2.4x from 177 to 431. "gutter cleaning penicuik" climbed from 22 to 13 and "gutter cleaning edinburgh" from 43 to 33.', 'On Google Maps, Christie\'s shows at 46 of 49 grid points around Mayfield for gutter cleaning, the strongest of its services.']],
    ],
    figures: [],
  },
  'anderson-roofing': {
    name: 'Anderson Roofing & Building', h1: 'Top 3 On Google Maps For "New Roof" Across Falkirk.', url: 'https://anderson-roofing.co.uk', urlLabel: 'anderson-roofing.co.uk',
    lead: 'How a Falkirk roofer reached the top 3 on Google Maps at 46 of 49 grid points for new roofs, with 15% of Google visitors becoming an enquiry.',
    image: '/case-studies/anderson-roofing-mappack.webp',
    meta: [['Client', 'Anderson Roofing & Building'], ['Location', 'Falkirk'], ['Trade', 'Roofing & building'], ['Services', 'Website · Local SEO']],
    stats: [['46/49', 'Top 3 on Maps: new roof'], ['15%', 'Visits to enquiries'], ['+55%', 'Google visibility']],
    sections: [
      ['The Challenge', ['Anderson Roofing & Building covers new roofs, roof repairs, flat roofing, gutters and roughcasting around Falkirk and Stirlingshire. Roofing is one of the most competitive local trades on Google, with established firms holding the map pack.', 'The business needed to show up on Maps across Falkirk, not just next to the yard, and to track every call and form so it could see what was working.']],
      ['The Strategy', ['Service pages for each roofing job, written around the Falkirk searches homeowners actually make.', 'Google Business Profile optimisation so the business ranks across the whole town on Maps.', 'Lead tracking through Leadzap: website forms, a tracked phone number and missed-call text-back.']],
      ['The Results', ['On Google Maps, Anderson ranks in the top 3 for "new roof" at 46 of 49 points on a 7×7 grid around the Falkirk yard, and #1 at 26 of them (average position 1.9). For "roofer" and "roof repairs" it shows at all 49 points with an average position of 3.7.', 'From 25 September to 24 November 2026 the business received 9 enquiries from 60 Google Search visits, a 15% conversion rate, including roof repairs, gutter repairs and a new roof.', 'Comparing the first two weeks with the last two, Google impressions rose 55% to 1,735. "roof repairs falkirk" impressions grew from 28 to 115 a fortnight while its position improved from 39 to 26, and "roughcasters falkirk" jumped from 60 to 20.']],
    ],
    figures: [['/case-studies/anderson-roofing-mappack.webp', 'Google Maps rank map: "new roof"', '7×7 grid, 3 km around the Falkirk yard. Top 3 at 46 of 49 points, #1 at 26, average position 1.9.']],
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
