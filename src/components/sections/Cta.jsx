import Image from "next/image"

const CtaSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <Image
            src="https://framerusercontent.com/images/7C9oP64a3BLAiyf8j3Pxtp9E.webp"
            alt="Abstract red ribbon graphic on a black background"
            width={1232}
            height={480}
            quality={95}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="relative z-10 flex min-h-[380px] md:min-h-[440px] lg:min-h-[480px] flex-col justify-center p-10 sm:p-14 md:p-16 lg:p-20">
            <h2 className="max-w-xl text-[42px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1]">
              Ready to build something brave?
            </h2>
            <a
              href="#"
              className="mt-8 md:mt-10 inline-flex items-center gap-x-3 self-start rounded-full bg-white px-7 py-3 text-[15px] font-medium text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <span>Let's Talk</span>
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
