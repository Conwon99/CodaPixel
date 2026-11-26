// Extra content for each service page: who it's for, process, case studies, FAQs.
export const serviceExtras: Record<string, {
  forWho: string[];
  process: [string, string][];
  cases: string[];
  faqs: [string, string][];
}> = {
  websites: {
    forWho: [
      'You rely on word of mouth and want a steady flow of new customers.',
      'Your current site looks dated, loads slowly or doesn\'t work properly on a phone.',
      'People find you on Google but don\'t get in touch.',
      'You don\'t know how many enquiries your website actually brings in.',
    ],
    process: [
      ['Free demo', 'Tell us what you do and where you work. We mock up your new homepage so you can see it before paying anything.'],
      ['Build', 'We write the pages, add your photos and reviews, and build a page for each service you offer.'],
      ['Go live', 'We handle the domain, hosting and Google setup, and connect your forms and phone number to Leadzap.'],
      ['Grow', 'Every enquiry is tracked. We keep the site updated and show you what it\'s bringing in each month.'],
    ],
    cases: ['ek-power-washing', 'christies-exterior-cleaning'],
    faqs: [
      ['How long does a new website take?', 'Usually two to three weeks from saying yes to going live. Your free demo is normally ready within a few days.'],
      ['Do I need to write the content?', 'No. We write it for you, based on a quick chat about your services, the areas you cover and what makes you different.'],
      ['Will it work on phones?', 'Yes. Most of your customers will find you on a phone, so every site is built for mobile first, with click-to-call on every page.'],
      ['Can I see how many enquiries it brings in?', 'Yes. Every form, call and text is logged in Leadzap, your own lead dashboard, so you can see exactly what the site is doing.'],
      ['What if I already have a website?', 'We can rebuild it or improve what you have. We\'ll keep your domain and make sure you don\'t lose any Google rankings in the switch.'],
    ],
  },
  'local-seo': {
    forWho: [
      'Competitors show up on Google Maps and you don\'t.',
      'You come up in your own town but not the towns around it.',
      'You have good reviews but they aren\'t bringing in work.',
      'You want enquiries that keep coming without paying for every click.',
    ],
    process: [
      ['Free check', 'We check where you show on Google Maps right now, across your whole area, and show you who is beating you.'],
      ['Fix the basics', 'We sort out your Google Business Profile, service areas, photos and business details across the web.'],
      ['Build pages', 'We add pages for each service and town you cover, written around what locals actually search for.'],
      ['Report monthly', 'Each month you see where you rank on Maps, how many people found you and the enquiries it brought in.'],
    ],
    cases: ['jimbos-exterior-cleaning', 'anderson-roofing', 'rb-joinery'],
    faqs: [
      ['How long does local SEO take to work?', 'Most businesses see movement in the first month or two. RB Joinery went from barely showing to #1 for "joiner near me" across Kilmarnock in three months.'],
      ['What is the Google Maps "map pack"?', 'It\'s the box of three businesses that shows with a map when someone searches for a trade near them. Most calls go to those three, so that\'s where we aim to get you.'],
      ['Do I need a website for local SEO?', 'It helps a lot. Google trusts businesses with a proper website, and it gives customers somewhere to get in touch. We can build one as part of the work.'],
      ['How do reviews help?', 'More reviews, especially ones that mention the job and the town, help you rank higher on Maps and win the call when customers compare you.'],
      ['Can you guarantee #1?', 'Nobody can honestly guarantee a ranking. What we can show you is our results: Jimbo\'s is #1 on Google Maps across Irvine and Anderson Roofing is top 3 across Falkirk.'],
    ],
  },
  'meta-ads': {
    forWho: [
      'You need work in the diary this month, not in six months.',
      'You do visual work (before-and-afters) that stops people scrolling.',
      'You want to push a seasonal service, like Christmas lights or spring cleans.',
      'You want to know exactly what each enquiry costs you.',
    ],
    process: [
      ['Plan', 'We agree your budget, the services to push and the areas you want work in.'],
      ['Create', 'We turn your real photos and before-and-afters into ads, and set up a quick enquiry form or landing page.'],
      ['Launch', 'Ads go live to homeowners in your area. We watch them daily at the start and switch off anything that isn\'t working.'],
      ['Track', 'Every lead lands in Leadzap, so you see how many enquiries you got and what each one cost.'],
    ],
    cases: [],
    faqs: [
      ['How much should I spend on ads?', 'Most trades start between £5 and £15 a day. We\'ll suggest a budget based on your area and the jobs you want, and you can change it at any time.'],
      ['Is the ad spend included?', 'No. You pay Meta directly for the ads, so you always see exactly where your money goes. Our fee covers setting up and running the campaigns.'],
      ['How quickly will I get enquiries?', 'Often within the first few days. Ads are the fastest way to get the phone ringing while SEO builds up in the background.'],
      ['Do I need a Facebook page?', 'Yes, but if you don\'t have one we\'ll set it up for you.'],
    ],
  },
  'google-ads': {
    forWho: [
      'You want to show at the top of Google today, not wait for SEO.',
      'You have a high-value service, like roofs or driveways, where one job pays for the ads.',
      'You\'ve tried Google Ads before and it cost money without bringing in work.',
      'You want calls from people actively searching for your trade.',
    ],
    process: [
      ['Research', 'We find the searches your customers make, and the ones to block so you don\'t pay for the wrong clicks.'],
      ['Build', 'We set up campaigns by service and area, write the ads and build landing pages made to get calls.'],
      ['Launch', 'Your ads show at the top of Google in the areas you choose, at the times you want.'],
      ['Improve', 'Every call and form is tracked. We cut what doesn\'t work and put more into what does.'],
    ],
    cases: [],
    faqs: [
      ['How much do Google Ads cost?', 'You set the budget. Most trades start between £10 and £20 a day. You only pay when someone clicks your ad, and we\'ll recommend a starting budget for your area.'],
      ['Is the ad spend included?', 'No. You pay Google directly for clicks, so you always see where your money goes. Our fee covers setup and management.'],
      ['Why didn\'t Google Ads work for me before?', 'Usually it\'s paying for the wrong searches or sending people to a page that doesn\'t get calls. We block poor searches and build pages made to convert.'],
      ['Ads or SEO: which should I do?', 'Ads bring work in straight away; SEO builds enquiries that keep coming without paying per click. Many trades start with ads and add SEO so the ad spend can come down over time.'],
    ],
  },
};
