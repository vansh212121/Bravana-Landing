"use client";

import { CheckCircleIcon } from "lucide-react";
import { TalkButton } from "../ui/AnimatedButton";

const PricingSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16">
          <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-1">
            Our Pricing
          </p>
          <h2 className="text-[40px] md:text-[48px] font-semibold leading-[1.1] text-primary">
            Flexible pricing for every stage
          </h2>

          <p className="mt-4 text-[17px] md:text-[18px] text-secondary leading-[1.1] tracking-tight px-20">
            Whether you're just starting out or scaling up, we offer plans that
            match your pace — with no hidden fees, ever.
          </p>
        </div>

        {/* GRID */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-4 md:max-w-none md:grid-cols-3 items-start">
          {/* ---------- STARTER ---------- */}
          <div>
            <div className="flex flex-col justify-between rounded-[30px] bg-white p-7 md:p-8 h-full ">
              <div className="w-full">
                {/* Gray DIV (Full width edge-to-edge, touching the top) */}
                <div className="p-2">
                  <div
                    className="
                      bg-gray-100 rounded-[30px] p-4
                      -mt-7 md:-mt-8
                      -mx-7 md:-mx-8
                    "
                  >
                    <h3 className="text-[24px] font-medium text-primary">
                      Starter
                    </h3>

                    {/* price */}
                    <p className="flex items-baseline">
                      <span className="text-[44px] md:text-[48px] font-semibold text-primary">
                        $1,200
                      </span>
                      <span className="text-[40px] font-medium">/mo</span>
                    </p>

                    {/* subtext */}
                    <p className="text-[16px] text-secondary font-medium">
                      Freelancers, new studios
                    </p>
                  </div>
                </div>

                {/* ITEMS */}
                <ul className="space-y-2.5 text-[16px] text-primary mt-4">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Custom one-page Framer site</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Basic branding package</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Mobile-friendly responsive design</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Fast turnaround</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Light content guidance</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
              </div>

              <TalkButton text="Get Started" className="mt-8 bg-gray-100" />
            </div>
          </div>

          {/* ---------- GROWTH (POPULAR) ---------- */}
          <div className="relative shadow-black/50 shadow-2xl rounded-[30px]">
            {/* Badge */}
            <div
              className="
                absolute -top-3 left-1/2 -translate-x-1/2
                bg-red-500 text-white font-medium text-[13px] uppercase font-sans
                px-4 py-1 rounded-full 
                z-20
              "
            >
              Popular
            </div>

            <div className="flex flex-col justify-between rounded-[30px] bg-white p-7 md:p-8 h-full ring-2 ring-red-2">
              <div className="w-full">
                {/* Gray DIV  */}
                <div className="p-2">
                  <div
                    className="
            bg-gray-100 rounded-[30px] p-4
            -mt-7 md:-mt-8
            -mx-7 md:-mx-8
          "
                  >
                    <h3 className="text-[24px] font-medium text-primary">
                      Growth
                    </h3>

                    {/* price */}
                    <p className="flex items-baseline">
                      <span className="text-[44px] md:text-[48px] font-semibold text-primary">
                        $2,500
                      </span>
                      <span className="text-[40px] font-medium">/mo</span>
                    </p>

                    {/* subtext */}
                    <p className="text-[16px] text-secondary font-medium">
                      Growing teams & businesses
                    </p>
                  </div>
                </div>

                {/* ITEMS */}
                <ul className="space-y-2.5 text-[16px] text-primary mt-4">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Multi-page Framer website</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Complete brand identity design</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>SEO-ready site structure</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Copywriting assistance (light)</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>CMS integration (Framer or custom)</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Priority email support</span>
                  </li>
                </ul>
              </div>

              <TalkButton text="Get Started" variant="dark" className="mt-8" />
            </div>
          </div>

          {/* ---------- STUDIO+ ---------- */}
          <div>
            <div className="flex flex-col justify-between rounded-[30px] bg-white p-7 md:p-8 h-full ">
              <div className="w-full">
                {/* Gray DIV */}
                <div className="p-2">
                  <div
                    className="
                      bg-gray-100 rounded-[30px] p-4
                      -mt-7 md:-mt-8
                      -mx-7 md:-mx-8
                    "
                  >
                    <h3 className="text-[24px] font-medium text-primary">
                      Studio+
                    </h3>

                    {/* price */}
                    <p className="flex items-baseline">
                      <span className="text-[44px] md:text-[48px] font-semibold text-primary">
                        $5,000
                      </span>
                      <span className="text-[40px] font-medium">/mo</span>
                    </p>

                    {/* subtext */}
                    <p className="text-[16px] text-secondary font-medium">
                      Established studios & agencies
                    </p>
                  </div>
                </div>

                {/* ITEMS */}
                <ul className="space-y-2.5 text-[16px] text-primary mt-4">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Fully custom website</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Advanced web development</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Comprehensive brand system</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>SEO strategy & keyword planning</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Ongoing design & tech support</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Team training for CMS and updates</span>
                  </li>
                </ul>
              </div>

              <TalkButton text="Get Started" className="mt-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
