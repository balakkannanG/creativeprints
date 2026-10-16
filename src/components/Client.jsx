import React from "react";

const clientLogos = [
  { name: "Google", src: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Netflix", src: "https://cdn.simpleicons.org/netflix/E50914" },
  { name: "Apple", src: "https://cdn.simpleicons.org/apple/111111" },
  { name: "Nike", src: "https://cdn.simpleicons.org/nike/111111" },
  { name: "Adidas", src: "https://cdn.simpleicons.org/adidas/111111" },
  { name: "Coca-Cola", src: "https://cdn.simpleicons.org/cocacola/F40009" },
  { name: "Samsung", src: "https://cdn.simpleicons.org/samsung/1428A0" },
  { name: "Spotify", src: "https://cdn.simpleicons.org/spotify/1DB954" },
  { name: "McDonald's", src: "https://cdn.simpleicons.org/mcdonalds/DA291C" },
  { name: "Starbucks", src: "https://cdn.simpleicons.org/starbucks/00704A" },
];

function LogoGroup({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden}>
      {clientLogos.map(({ name, src }) => (
        <div
          className="flex h-[68px] w-[178px] shrink-0 items-center justify-center gap-3 rounded-xl border border-[#e9e7e2] bg-white px-5 shadow-[0_3px_12px_#17202c0a] max-sm:h-[58px] max-sm:w-[150px] max-sm:gap-2.5 max-sm:px-3"
          key={name}
        >
          <img
            className="h-7 w-7 shrink-0 object-contain max-sm:h-6 max-sm:w-6"
            src={src}
            alt={hidden ? "" : `${name} logo`}
            loading="lazy"
            decoding="async"
          />
          <span className="whitespace-nowrap font-heading text-[14px] font-extrabold tracking-[-.3px] text-[#303843] max-sm:text-[12px]">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Client() {
  return (
    <section
      className="overflow-hidden bg-[#d6d6d6] py-12 text-[#20263a] max-md:py-10"
      aria-labelledby="client-heading"
    >
      <div className="mx-auto mb-7 w-[min(1160px,calc(100%_-_64px))] text-center max-md:w-[calc(100%_-_40px)] max-sm:w-[calc(100%_-_30px)]">
        <p className="text-[10px] font-extrabold uppercase tracking-[1.3px] text-violet-700">
        PRINT INSPIRATION
        </p>
        <h2
          className="mt-2 font-heading text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-.8px] text-[#20263a]"
          id="client-heading"
        >
          Great Brands Start with a Lasting Impression.
        </h2>
        <p className="mt-2 text-[11px] text-[#596174]">
          Explore creative branding and print ideas that help businesses express their identity across every touchpoint.
        </p>
      </div>

      <div className="client-marquee overflow-hidden">
        <div className="client-marquee-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
