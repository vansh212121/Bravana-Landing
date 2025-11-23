"use client";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    type: "plain",
    quote:
      "Bravana completely transformed how we present ourselves online. The design feels bold yet refined, and we've had more inquiries in the past month than ever before.",
    name: "Jules Tanaka",
    title: "Co-Founder at Metric & Bloom",
    avatarUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/51AchCHbOikTVT3oqDxLSld44Y0-17.webp",
  },
  {
    type: "image",
    quote:
      "The Framer site they built was smooth, stunning, and ready to launch in no time. Totally seamless.",
    name: "Leo Ramirez",
    title: "Creative Director at Synthex",
    backgroundUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/tZDSMJcEeqIiUZR5a7ObowMuhxA-14.webp",
  },
  {
    type: "plain",
    quote:
      "Working with Bravana felt like an extension of our own team. The process was collaborative, thoughtful, and efficient. The final result gave our brand new energy to the next level.",
    name: "Nia Morgan",
    title: "Head of Design at Cloudline",
    avatarUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/51AchCHbOikTVT3oqDxLSld44Y0-17.webp",
  },
  {
    type: "image",
    quote:
      "Bravana gave our brand the edge it needed: clear, bold, and exactly what we envisioned.",
    name: "Mira Keston",
    title: "Founder at Novahaus Studio",
    backgroundUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/eXyrZYddEDYd8bz60XVJ6NcDk-15.webp",
  },
  {
    type: "plain",
    quote:
      "We came in with a rough idea of what we wanted, and Bravana turned it into something far beyond our expectations. The branding work is timeless, and the dev side is solid.",
    name: "Jules Tanaka",
    title: "Co-Founder at Novahaus Studio",
    avatarUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/eXyrZYddEDYd8bz60XVJ6NcDk-15.webp",
  },
  {
    type: "image",
    quote:
      "We felt supported every step of the way. Bravana delivered more than just a website, they delivered momentum.",
    name: "Evan Solari",
    title: "Founder at Solari Design Co.",
    backgroundUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/YZbm42k42xiUHfvUHmcmCcmsQ4-16.webp",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 md:mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-red-600 mb-5">
            Testimonials
          </p>
          <h2 className="text-[40px] md:text-[48px] font-bold leading-[1.15] text-black">
            Kind words from{" "}
            <span
              className="inline-block translate-y-1 text-[36px] md:text-[44px]"
              role="img"
              aria-label="smiling face with hearts"
            >
              🥰
            </span>{" "}
            clients
          </h2>
          <p className="mt-5 text-[17px] md:text-[18px] text-[#757575] leading-[1.6]">
            We've partnered with studios, founders, and creatives who value
            design that works, here's what they had to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const isImageCard = testimonial.type === "image";

  return (
    <div
      className={`relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[24px] p-7 md:p-8 ${
        isImageCard
          ? "text-white"
          : "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300"
      }`}
    >
      {isImageCard && testimonial.backgroundUrl && (
        <>
          <Image
            src={testimonial.backgroundUrl}
            alt={`Testimonial from ${testimonial.name}`}
            fill
            className="z-0 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 z-0 bg-black/50"></div>
        </>
      )}
      <div className="relative z-10 flex flex-grow flex-col">
        <Quote
          className={`h-7 w-7 ${
            isImageCard ? "text-white/30" : "text-gray-200"
          }`}
          fill={isImageCard ? "rgba(255,255,255,0.15)" : "rgb(229, 231, 235)"}
        />
        <p
          className={`mt-5 flex-grow text-[17px] md:text-[18px] leading-[1.6] ${
            isImageCard ? "text-white" : "text-[#1f1f1f]"
          }`}
        >
          {testimonial.quote}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex items-center gap-3">
          {testimonial.avatarUrl && (
            <Image
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <p
              className={`font-semibold text-[15px] ${
                isImageCard ? "text-white" : "text-black"
              }`}
            >
              {testimonial.name}
            </p>
            <p
              className={`text-[14px] ${
                isImageCard ? "text-white/80" : "text-[#757575]"
              }`}
            >
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
