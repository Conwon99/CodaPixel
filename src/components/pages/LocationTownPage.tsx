import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { townBySlug } from "@/data/locations";
import { useEffect } from "react";

interface LocationTownPageProps {
  town: string;
}

const LocationTownPage = ({ town }: LocationTownPageProps) => {
  const data = townBySlug(town);

  useEffect(() => {
    if (data) trackPageView(`Location ${data.name} Page`);
  }, [data]);

  if (!data) return null;

  return (
    <>
      <Hero location={data.name} trustNote="Trusted by Ayrshire businesses" />

      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">{data.heading}</h2>
              {data.intro.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">{p}</p>
              ))}
              {data.caseStudy && (
                <a
                  href={data.caseStudy.href}
                  className="mt-4 block rounded-xl border border-blue-200 bg-blue-50 p-5 hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 font-figtree">
                    {data.name} case study
                  </p>
                  <p className="text-xl font-bold text-gray-900 font-thicccboi">{data.caseStudy.name}</p>
                  <p className="text-gray-700 font-figtree">{data.caseStudy.result} →</p>
                </a>
              )}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-thicccboi">{data.whoHeading}</h2>
              {data.who.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">{p}</p>
              ))}
              <p className="text-gray-700 font-figtree">
                <span className="font-semibold">Also covering:</span> {data.nearby.join(', ')}.{' '}
                <a href="/locations/ayrshire/" className="text-blue-700 underline">All Ayrshire areas</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          {data.faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">{f.q}</h3>
              <p className="text-gray-700 font-figtree">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default LocationTownPage;
