import Image from "next/image"

import eiMorrow from "../../public/ei_morrow.webp"

export default function IndexPage() {
  return (
    <>
      <section className="text-background">
        <div className="flex justify-center items-center py-4 lg:py-6">
          <p className="font-heading font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            &quot;A world without filters is chaos&quot; - E. I. Morrow
          </p>
        </div>
        <div className="relative h-96">
          <Image
            alt="E. I. Morrow building"
            src={eiMorrow}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            className="object-cover shadow-xl"
          />
        </div>
        <section className="flex flex-col justify-center mx-auto max-w-[50rem] text-center lg:py-8">
          <div className="flex flex-col gap-4 py-6">
            <p className="font-heading font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Filtration for every area of your plant, factory, or workshop!
            </p>
            <p className="sm:text-lg md:text-xl lg:text-2xl">
              Local Expertise at Reasonable Prices
            </p>
            <div className="flex w-full justify-center items-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 ring-offset-primary text-foreground bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-primary/90">
                Free Quote!
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4 p-6 bg-accent w-full">
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary border border-background" />
                <p className="text-xl text-center italic font-medium">
                  About Us
                </p>
              </div>
              <p className="text-left">
                <span className="font-semibold underline">E. I. Morrow</span>{" "}
                was founded in 1984, offering one product line to fulfill the
                need for clean, dry, compressed air. We grew quickly as the
                market for high quality, low cost filters and filtration
                products became apparent.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-muted w-full">
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary border border-background" />
                <p className="text-xl text-center italic font-medium">
                  Products
                </p>
              </div>
              <div className="text-left mx-auto">
                <li>Replacement Filters</li>
                <li>Air Filtration Products</li>
                <li>Filtration Systems</li>
                <li>Compressor Filters</li>
                <li>Filter Vessels</li>
                <li>Dust Collection Products</li>
                <li>EDM Products</li>
                <li>Paint Overspray Media</li>
                <li>and more...</li>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
