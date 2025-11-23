import Image from "next/image"
import Link from "next/link"
import React from "react"

const projects = [
  {
    title: "Naka",
    category: "Framer Development",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/XeuEHc5e9A2RWhGS9eRZxA0AX2I-7.webp",
    isFeatured: true,
    slug: "#",
    width: 560,
    height: 414
  },
  {
    title: "Signal Spark",
    category: "Branding Design",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/VxYKa2LSpSu0tC6kbD0eRVb7Y-8.webp",
    isFeatured: true,
    slug: "#",
    width: 560,
    height: 414
  },
  {
    title: "Lumenhaus",
    category: "Web Development",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/ZUergDl5oGrUXklAI4SzR0oqGHg-9.webp",
    isFeatured: false,
    slug: "#",
    width: 560,
    height: 414
  },
  {
    title: "Drift Bloom",
    category: "Branding Design",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/NIDYeO6HI3pb5edosggD8Q0Kg-10.webp",
    isFeatured: false,
    slug: "#",
    width: 560,
    height: 414
  }
]

const PortfolioCard = ({
  title,
  category,
  imageUrl,
  isFeatured,
  slug,
  width,
  height
}) => {
  return (
    <Link
      href={slug}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {isFeatured && (
        <div className="absolute top-5 right-5 z-10 rounded-full bg-red-600 py-1.5 px-4 shadow-md">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white">
            Featured
          </p>
        </div>
      )}
      <div className="overflow-hidden aspect-560/414 w-full">
        <Image
          src={imageUrl}
          alt={`Portfolio item: ${title}`}
          width={width}
          height={height}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-7 md:p-8">
        <h3 className="text-[22px] md:text-[24px] font-bold text-[#1f1f1f] leading-[1.3]">
          {title}
        </h3>
        <p className="mt-2 text-[15px] md:text-[16px] text-[#757575]">
          {category}
        </p>
      </div>
    </Link>
  )
}

const FeaturedWork = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 text-center mb-14 md:mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-red-600">
            Featured Work
          </p>
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] font-bold text-[#1f1f1f]">
            Work that speaks for itself
          </h2>
          <p className="max-w-[600px] text-[17px] md:text-[18px] text-[#757575] leading-[1.6]">
            Here's a glimpse of what Bravana-powered studios have brought to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects.map(project => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
