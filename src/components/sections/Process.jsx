const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start by understanding your vision, goals, and audience to lay a solid foundation.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We map out the strategy, structure, and creative direction to bring your project to life.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Our team designs and builds with precision, ensuring every detail aligns with your brand.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We launch your project with confidence and provide ongoing support to ensure success.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-red-600 mb-5">
            OUR PROCESS
          </p>
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#1f1f1f] leading-[1.15]">
            How we work
          </h2>
          <p className="mt-5 text-[17px] md:text-[18px] text-[#757575] leading-[1.6]">
            Our proven process ensures that every project is delivered with
            clarity, precision, and impact.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Step Number */}
              <div className="text-[88px] md:text-[96px] font-bold text-red-600 leading-none opacity-15">
                {step.number}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f1f1f] mb-3 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#757575] leading-[1.65]">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-5 w-10 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
