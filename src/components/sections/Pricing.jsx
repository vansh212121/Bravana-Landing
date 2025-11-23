import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$1,200",
    audience: "For freelancers, new studios",
    features: [
      "Custom one-page Framer site",
      "Basic branding package",
      "Mobile-friendly responsive design",
      "Fast turnaround",
      "Light content guidance",
      "Email support",
    ],
    popular: false,
    href: "#",
  },
  {
    name: "Growth",
    price: "$2,500",
    audience: "Growing teams & businesses",
    features: [
      "Multi-page Framer Website",
      "Complete brand identity design",
      "SEO-ready site structure",
      "Copywriting assistance (light)",
      "CMS integration (Framer or custom)",
      "Priority email support",
    ],
    popular: true,
    href: "#",
  },
  {
    name: "Studio+",
    price: "$5,000",
    audience: "For established studios & agencies",
    features: [
      "Fully custom website",
      "Advanced web development",
      "Comprehensive brand system",
      "SEO strategy & keyword planning",
      "Ongoing design & tech support",
      "Team training for CMS and updates",
    ],
    popular: false,
    href: "#",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16">
          <p className="text-[13px] font-semibold leading-7 text-red-600 uppercase tracking-[0.1em] mb-5">
            Our Pricing
          </p>
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-black leading-[1.15]">
            Flexible pricing for every stage
          </h2>
          <p className="mt-5 text-[17px] md:text-[18px] leading-[1.6] text-[#757575] max-w-2xl mx-auto">
            Whether you're just starting out or scaling up, we offer plans that
            match your pace — with no hidden fees, ever.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-none md:grid-cols-3 items-start">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={tier.popular ? "relative" : ""}>
              <div
                className={`flex flex-col justify-between rounded-[24px] bg-white p-7 md:p-8 h-full ${
                  tier.popular
                    ? "ring-2 ring-red-600 shadow-[0_8px_30px_rgba(220,38,38,0.15)]"
                    : "shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-[22px] md:text-[24px] font-bold leading-tight text-black">
                      {tier.name}
                    </h3>
                    {tier.popular && (
                      <div className="rounded-full bg-red-600 px-3 py-1 shadow-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                          Popular
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#757575]">
                    {tier.audience}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-2">
                    <span className="text-[44px] md:text-[48px] font-bold tracking-tight text-black">
                      {tier.price}
                    </span>
                    <span className="text-[16px] font-medium leading-6 text-[#757575]">
                      /mo
                    </span>
                  </p>
                  <div className="w-full border-t border-gray-200 my-7"></div>
                  <ul
                    role="list"
                    className="space-y-3.5 text-[15px] leading-[1.6] text-[#1f1f1f]"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className="h-5 w-5 flex-none text-black mt-0.5"
                          aria-hidden="true"
                          strokeWidth={2.5}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.name}
                  className={`mt-8 flex items-center justify-center rounded-full px-7 py-3 text-[15px] font-medium leading-6 transition-all duration-300 gap-x-3 ${
                    tier.popular
                      ? "bg-black text-white hover:bg-black/90 hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      : "bg-white text-black ring-1 ring-inset ring-gray-300 hover:ring-gray-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  }`}
                >
                  <span>Get Started</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      tier.popular ? "bg-red-600" : "bg-black"
                    }`}
                  ></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
