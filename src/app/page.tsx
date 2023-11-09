import Image from "next/image"

import eiMorrow from "../../public/ei_morrow.webp"

export default function IndexPage() {
  return (
    <div className="text-background">
      <section>
        <div className="flex items-center justify-center py-4 lg:py-6">
          <p className="px-2 font-heading text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
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
      </section>
      <section className="mx-auto flex max-w-[50rem] flex-col justify-center text-center">
        <div className="flex flex-col gap-4 py-6">
          <p className="font-heading text-xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
            Filtration for every area of your plant, factory, or workshop!
          </p>
          <p className="sm:text-lg md:text-xl lg:text-2xl">
            Local Expertise at Reasonable Prices
          </p>
          <div className="flex w-full items-center justify-center">
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-foreground ring-offset-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Free Quote!
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-stretch">
          <div className="flex w-full max-w-[25rem] flex-col gap-4 bg-accent p-6">
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full border border-background bg-secondary" />
              <p className="text-center text-xl font-medium italic">About Us</p>
            </div>
            <p className="text-left text-sm sm:text-base">
              <span className="font-semibold underline">E. I. Morrow</span> was
              founded in 1984, offering one product line to fulfill the need for
              clean, dry, compressed air. We grew quickly as the market for high
              quality, low cost filters and filtration products became apparent.
            </p>
          </div>
          <div className="flex w-full max-w-[25rem] flex-col gap-4 bg-muted p-6">
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full border border-background bg-primary" />
              <p className="text-center text-xl font-medium italic">Products</p>
            </div>
            <div className="mx-auto text-left text-sm sm:text-base">
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
    </div>
  )
}
