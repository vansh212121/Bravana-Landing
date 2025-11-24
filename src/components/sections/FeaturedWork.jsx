import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Naka",
    category: "Framer Development",
    imageUrl: "/assets/feature4.avif",
    isFeatured: true,
    slug: "#",
    width: 560,
    height: 414,
  },
  {
    title: "Signal Spark",
    category: "Branding Design",
    imageUrl: "/assets/feature3.avif",
    isFeatured: true,
    slug: "#",
    width: 560,
    height: 414,
  },
  {
    title: "Lumenhaus",
    category: "Web Development",
    imageUrl: "/assets/feature2.avif",
    isFeatured: false,
    slug: "#",
    width: 560,
    height: 414,
  },
  {
    title: "Drift Bloom",
    category: "Branding Design",
    imageUrl: "/assets/feature1.avif",
    isFeatured: false,
    slug: "#",
    width: 560,
    height: 414,
  },
];

const PortfolioCard = ({
  title,
  category,
  imageUrl,
  isFeatured,
  slug,
  width,
  height,
}) => {
  return (
    <Link
      href={slug}
      className="group relative flex flex-col overflow-hidden rounded-[45px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    >
      {isFeatured && (
        <div className="absolute top-9 right-7 z-10 rounded-full bg-red-2 py-1.5 px-4 shadow-md">
          <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-white">
            Featured
          </p>
        </div>
      )}
      <div className="relative overflow-hidden aspect-560/414 w-full rounded-[45px]">
        <Image
          src={imageUrl}
          alt={`Portfolio item: ${title}`}
          width={width}
          height={height}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-7 md:p-8">
        <h3 className="text-[22px] md:text-[22px] font-medium text-premium leading-[1.3]">
          {title}
        </h3>
        <div className="flex">
          <p className="mt-2 text-[15px] md:text-[18px] text-secondary">
            {category}
          </p>
          <ArrowRight
            className={cn(
              "ml-auto w-8 h-8 text-secondary",
              "opacity-0 -translate-x-2 transition-all duration-300 ease-out",
              "group-hover:opacity-100 group-hover:translate-x-0 group-hover:-rotate-45"
            )}
          />
        </div>
      </div>
    </Link>
  );
};

const FeaturedWork = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 text-center mb-14 md:mb-16">
          <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-1">
            Featured Work
          </p>
          <h2 className="text-[40px] md:text-[48px] lg:text-[48px] leading-[1.15] font-semibold text-primary">
            Work that speaks for itself
          </h2>
          <p className="max-w-[400px] text-[17px] md:text-[18px] text-secondary leading-[1.1]">
            Here's a glimpse of what Bravana-powered studios have brought to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
