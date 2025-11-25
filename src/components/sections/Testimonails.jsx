"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

// -------------------------
// DATA
// -------------------------
const testimonials = [
  {
    type: "plain",
    quote:
      "Bravana completely transformed how we present ourselves online. The design feels bold yet refined, and we've had more inquiries in the past month than ever before.",
    name: "Jules Tanaka",
    title: "Co-Founder at Metric & Bloom",
    avatarUrl: "/assets/img1.avif",
  },
  {
    type: "image",
    quote:
      "The Framer site they built was smooth, stunning, and ready to launch in no time. Totally seamless.",
    name: "Leo Ramirez",
    title: "Creative Director at Synthex",
    backgroundUrl: "/assets/testimonials1.avif",
  },
  {
    type: "plain",
    quote:
      "Working with Bravana felt like an extension of our own team. The process was collaborative, thoughtful, and efficient. The final result gave our brand new energy to the next level.",
    name: "Nia Morgan",
    title: "Head of Design at Cloudline",
    avatarUrl: "/assets/img1.avif",
  },
  {
    type: "image",
    quote:
      "Bravana gave our brand the edge it needed: clear, bold, and exactly what we envisioned.",
    name: "Mira Keston",
    title: "Founder at Novahaus Studio",
    backgroundUrl: "/assets/testimonials2.avif",
  },
  {
    type: "plain",
    quote:
      "We came in with a rough idea of what we wanted, and Bravana turned it into something far beyond our expectations. The branding work is timeless, and the dev side is solid.",
    name: "Jules Tanaka",
    title: "Co-Founder at Novahaus Studio",
    avatarUrl: "/assets/img1.avif",
  },
  {
    type: "image",
    quote:
      "We felt supported every step of the way. Bravana delivered more than just a website, they delivered momentum.",
    name: "Evan Solari",
    title: "Founder at Solari Design Co.",
    backgroundUrl: "/assets/testimonials3.avif",
  },
];

// -------------------------
// PAGE COMPONENT
// -------------------------
const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14 md:mb-16">
          <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-1">
            Testimonials
          </p>
          <h2 className="text-[40px] md:text-[48px] font-semibold leading-[1.1] text-primary">
            Kind words from{" "}
            <div className="inline-block translate-y-1 -rotate-6 bg-red-2 rounded-2xl p-1 shadow shadow-black/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 64 64"
                role="img"
                aria-label="Smiley face"
              >
                {/* Outer soft circle */}
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.2"
                  strokeOpacity="0.35"
                />

                {/* Eyes */}
                <circle cx="22" cy="26" r="4" fill="white" />
                <circle cx="42" cy="26" r="4" fill="white" />

                {/* Smile */}
                <path
                  d="M18 38 C26 50, 38 50, 46 38"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>{" "}
            clients
          </h2>
          <p className="mt-4 text-[17px] md:text-[18px] text-secondary leading-[1.1] tracking-tight px-20">
            We've partnered with studios, founders, and creatives who value
            design that works — here's what they had to say.
          </p>
        </div>

        {/* MOBILE VIEW (Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* DESKTOP VIEW (Explicit 3 Columns for T-I-T / I-T-I Pattern) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 md:gap-8 items-start">
          {/* COLUMN 1: Plain (Top), Image (Bottom) */}
          <div className="flex flex-col gap-6 md:gap-8 mt-10">
            <TestimonialCard testimonial={testimonials[0]} />
            <TestimonialCard testimonial={testimonials[3]} />
          </div>

          {/* COLUMN 2: Image (Top), Plain (Bottom) */}
          <div className="flex flex-col gap-6 md:gap-8 -mt-10">
            <TestimonialCard testimonial={testimonials[1]} />
            <TestimonialCard testimonial={testimonials[4]} />
          </div>

          {/* COLUMN 3: Plain (Top), Image (Bottom) */}
          <div className="flex flex-col gap-6 md:gap-8 mt-10">
            <TestimonialCard testimonial={testimonials[2]} />
            <TestimonialCard testimonial={testimonials[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// -------------------------
// ROUTER COMPONENT
// -------------------------
const TestimonialCard = ({ testimonial }) => {
  return testimonial.type === "image" ? (
    <ImageTestimonialCard testimonial={testimonial} />
  ) : (
    <PlainTestimonialCard testimonial={testimonial} />
  );
};

// -------------------------
// IMAGE TESTIMONIAL CARD
// -------------------------
const ImageTestimonialCard = ({ testimonial }) => {
  return (
    // Exact CSS from your "Perfect CSS" block
    <div className="relative flex h-full min-h-[530px] flex-col overflow-hidden rounded-[35px] p-7 md:p-8 text-white">
      <Image
        src={testimonial.backgroundUrl}
        alt={`Testimonial from ${testimonial.name}`}
        width={400}
        height={400}
        className="absolute inset-0 w-full h-full z-0 object-cover"
      />
      {/* Exact overlay from "Perfect CSS" */}
      <div className="absolute inset-0 z-0 bg-gray-50/5" />

      <div className="relative z-10 flex grow flex-col mt-60">
        <Quote className="h-7 w-7 text-white" />

        <p className="mt-5 grow text-[17px] md:text-[22px] leading-[1.2] text-white">
          {testimonial.quote}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-[16px] text-white">
              {testimonial.name}
            </p>
            <p className="text-[16px] text-white">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------
// PLAIN TESTIMONIAL CARD
// -------------------------
const PlainTestimonialCard = ({ testimonial }) => {
  return (
    // Exact CSS from your "Perfect CSS" block
    <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[35px] bg-gray-100 p-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ">
      {/* Inner white card that matches full width - Exact CSS */}
      <div className="bg-white w-full h-auto rounded-[35px] px-6 py-6">
        <Quote className="h-7 w-7 text-secondary" />

        <p className="mt-5 text-[17px] md:text-[22px] leading-[1.2] text-primary">
          {testimonial.quote}
        </p>
      </div>

      {/* Footer - Exact CSS */}
      <div className="mt-auto flex items-center gap-3 px-3 pt-4 pb-3">
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
          <p className="font-semibold text-[16px] text-primary">
            {testimonial.name}
          </p>
          <p className="text-[16px] text-secondary">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};
