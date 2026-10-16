import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  FileUp,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  Printer,
  X,
} from "lucide-react";

const phoneNumber = "+919844027757"; // Replace with your actual phone number

export function SiteHeader({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-black/95 text-white backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] w-[calc(100%_-_56px)] max-w-[1240px] items-center gap-8 max-lg:gap-5 max-md:min-h-[66px] max-md:w-[calc(100%_-_36px)] max-md:gap-2.5">
        <a className="inline-flex shrink-0 items-center gap-[11px] max-sm:gap-2" href="#top" onClick={closeMenu} aria-label="Creative Prints home">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-violet-700 to-fuchsia-600 text-white shadow-[0_6px_14px_#7c3aed35] max-md:h-[38px] max-md:w-[38px] max-sm:h-[34px] max-sm:w-[34px]">
            <Printer size={21} strokeWidth={2.1} />
          </span>
          <span className="flex flex-col gap-[3px]">
            <strong className="font-heading text-[17px] font-extrabold leading-[1.1] tracking-[-.6px] text-white max-md:text-[15px] max-sm:text-[13px]">Creative Prints</strong>
            <small className="text-[9px] uppercase tracking-[1.4px] text-violet-300 max-md:text-[8px] max-md:tracking-[1px] max-sm:text-[7px] max-sm:tracking-[.7px]">Complete Printing Solutions</small>
          </span>
        </a>

        <button
          className="hidden h-[37px] w-[37px] shrink-0 place-items-center rounded-lg border border-neutral-700 bg-[#151619] text-white max-md:grid max-sm:h-[34px] max-sm:w-[34px]"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`ml-auto flex items-center justify-start  mx-auto gap-[clamp(18px,2.5vw,34px)] max-lg:gap-[15px] max-md:absolute max-md:left-0 max-md:right-0 max-md:top-full max-md:hidden max-md:items-stretch max-md:flex-col max-md:gap-0 max-md:border-b max-md:border-neutral-800 max-md:bg-black max-md:px-[18px] max-md:pb-4 max-md:pt-2 max-md:shadow-xl${menuOpen ? " max-md:!flex" : ""}`} aria-label="Main navigation">
          <a className="text-[13px] font-semibold text-[#e1e3e6] transition-colors hover:text-violet-300 max-md:border-b max-md:border-neutral-800 max-md:px-2 max-md:py-3" href="#services" onClick={closeMenu}>Services</a>
          <a className="text-[13px] font-semibold text-[#e1e3e6] transition-colors hover:text-violet-300 max-md:border-b max-md:border-neutral-800 max-md:px-2 max-md:py-3" href="#our-work" onClick={closeMenu}>Our work</a>
          <a className="text-[13px] font-semibold text-[#e1e3e6] transition-colors hover:text-violet-300 max-md:border-b max-md:border-neutral-800 max-md:px-2 max-md:py-3" href="#why-us" onClick={closeMenu}>Why us</a>
          {/* <a className="text-[13px] font-semibold text-[#e1e3e6] transition-colors hover:text-violet-300 max-md:border-b max-md:border-neutral-800 max-md:px-2 max-md:py-3" href="#deliverables" onClick={closeMenu}>Deliverables</a> */}
          {/* <a className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-[13px] py-2.5 text-[13px] font-semibold text-violet-800 max-md:mt-2.5 max-md:justify-center" href="#quote" onClick={closeMenu}>Get a quote <ArrowUpRight size={14} /></a> */}
        </nav>

        <div className="ml-0 flex items-center gap-[9px] max-lg:gap-1.5 max-md:ml-auto">
          <a className="inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-lg border border-[#ded8eb] bg-white px-[17px] text-[13px] font-bold leading-tight text-[#303447] transition hover:-translate-y-px hover:border-violet-300 hover:text-violet-800 max-lg:min-h-[40px] max-lg:px-3 max-lg:text-[11px] max-md:hidden" href={`tel:${phoneNumber}`}>Call us</a>
          <a className="inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-600 px-[17px] text-[13px] font-bold leading-tight text-white shadow-[0_5px_12px_#7c3aed30] transition hover:-translate-y-px hover:from-violet-800 hover:to-fuchsia-700 max-lg:min-h-[40px] max-lg:px-3 max-lg:text-[11px] max-md:min-h-9 max-md:px-[11px] max-md:text-[10px] max-sm:px-[9px] max-sm:text-[9px]" href="#quote">Get a quote</a>
        </div>
      </div>
    </header>
  );
}

export function HeroSection({ slides, slide, setSlide }) {
  const currentSlide = slides[slide];

  return (
    <section
      className="relative flex h-[min(620px,44vw)] min-h-[clamp(430px,44vw,620px)] items-center overflow-hidden bg-gray-600 text-white max-md:h-[68vh] max-md:min-h-[455px] max-md:max-h-[580px] max-sm:h-[67vh] max-sm:min-h-[430px]"
      aria-label="Featured Creative Prints banners"
      aria-roledescription="carousel"
    >
      <img
        className="absolute inset-0 h-full w-full animate-[hero-image-in_.6s_ease_both] object-cover object-center max-md:object-[57%_center] max-sm:object-[60%_center]"
        src={currentSlide.image}
        alt={currentSlide.alt}
        key={currentSlide.image}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#101722e8_0%,#101722c9_35%,#10172254_66%,#10172212_100%)] max-md:bg-[linear-gradient(90deg,#101722df_0%,#101722b5_58%,#10172255_100%),linear-gradient(0deg,#10172270,transparent_60%)]" />
      <div className="relative z-[1] mx-auto w-[min(1160px,calc(100%_-_64px))] py-[60px] max-md:w-[calc(100%_-_40px)] max-md:pb-[78px] max-md:pt-[50px] max-sm:w-[calc(100%_-_30px)] max-sm:pt-[38px]" aria-live="polite">
        <span className="flex w-fit items-center gap-[9px] rounded-full border border-white/30 bg-[#10172256] px-3 py-2 text-[10px] font-bold uppercase tracking-[.65px] text-white max-md:gap-[7px] max-md:text-[8px] max-sm:max-w-full max-sm:px-[9px] max-sm:py-[7px] max-sm:text-[7px] max-sm:tracking-[.4px]">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#f2a651] shadow-[0_0_0_4px_#f2a65135]" /> {currentSlide.eyebrow} <span className="text-[#f3bd7b]">·</span>
        </span>
        <h1 className="mt-[22px] max-w-[650px] font-heading text-[clamp(42px,5vw,66px)] font-extrabold leading-[1.04] tracking-[-2.6px] drop-shadow-[0_3px_22px_#0005] max-md:mt-[18px] max-md:max-w-[540px] max-md:text-[clamp(39px,9vw,56px)] max-md:tracking-[-2px] max-sm:max-w-[350px] max-sm:text-[38px] max-sm:tracking-[-1.7px]">{currentSlide.title}</h1>
        <p className="mt-[15px] max-w-[495px] text-[15px] leading-[1.7] text-[#f0f1f2] drop-shadow-[0_2px_10px_#0008] max-md:max-w-[430px] max-md:text-[13px] max-sm:max-w-[330px] max-sm:text-xs">{currentSlide.caption}</p>
        {/* <a href="#quote" className="mt-[23px] inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-lg bg-[linear-gradient(135deg,#7b39c6cc,#b472cacc)] px-[17px] text-[13px] font-bold text-white shadow-[0_5px_12px_#d86a1629] transition hover:-translate-y-px hover:bg-[linear-gradient(135deg,#7b39c6,#b472ca)]max-sm:min-h-10 max-sm:text-[11px]">
          {currentSlide.action} <ArrowRight size={16} />
        </a> */}
         <div className="mt-5 flex items-center gap-5 max-md:flex-col-2">
          <a
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-white/60 bg-[#101722a8] px-4 text-[12px] font-bold text-white transition hover:border-white hover:bg-[#101722e8] lg:min-h-[48px] lg:min-w-[180px] lg:px-8 lg:text-[14px] max-md:w-full"
            href={`tel:${phoneNumber}`}
          >
            <PhoneCall size={16} />
            Call us
          </a>
          <a
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#20bf69] px-4 text-[12px] font-bold text-white transition hover:bg-[#18a958] lg:min-h-[48px] lg:min-w-[180px] lg:px-8 lg:text-[14px] max-md:w-full"
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-4 w-4"
              src="https://cdn.simpleicons.org/whatsapp/ffffff"
              alt=""
              aria-hidden="true"
            />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="absolute bottom-[25px] right-[max(32px,calc((100vw-1160px)/2))] z-[2] flex items-center gap-4 max-md:bottom-[18px] max-md:left-5 max-md:right-5 max-md:flex-col max-md:items-stretch max-md:gap-3 max-sm:bottom-[15px] max-sm:left-[15px] max-sm:right-[15px]">
       
        <div className="flex items-center justify-center gap-2">
          <button
            className="grid h-[34px] w-[34px] place-items-center rounded-full border border-white/55 bg-[#10172272] text-white transition hover:border-white hover:bg-[#101722c9]"
            type="button"
            onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
            aria-label="Previous banner"
          >
            <ArrowLeft size={17} />
          </button>
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`h-2 rounded-full transition-all ${slide === index ? "w-6 bg-white" : "w-2 bg-white/60"}`}
              onClick={() => setSlide(index)}
              aria-label={`Show banner ${index + 1}: ${item.title}`}
              aria-current={slide === index ? "true" : undefined}
            />
          ))}
          <button
            className="grid h-[34px] w-[34px] place-items-center rounded-full border border-white/55 bg-[#10172272] text-white transition hover:border-white hover:bg-[#101722c9]"
            type="button"
            onClick={() => setSlide((slide + 1) % slides.length)}
            aria-label="Next banner"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ services }) {
  return (
    <section className="w-full bg-[#d6d6d6] px-8 py-[76px] pb-[82px] text-[#20263a] max-md:px-5 max-md:py-[58px] max-md:pb-[62px] max-sm:px-[15px]" id="services">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-[30px] flex items-end justify-between gap-7 max-md:mb-[22px] max-md:flex-col max-md:items-start max-md:gap-[11px]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.1px] text-violet-800">PRINTING SOLUTIONS FOR EVERY BUSINESS
</p>
            <h2 className="mt-3 font-heading text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.14] tracking-[-1.6px] text-[#20263a] max-md:text-[32px] max-md:tracking-[-1.2px] max-sm:text-[29px]">All Your Printing Needs, <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent"> Under One Roof</span></h2>
          </div>
          <p className="max-w-[385px] text-[13px] leading-[1.7] text-[#596174] max-md:text-xs">From business essentials to custom packaging, discover high-quality printing solutions designed to bring your brand to life.
</p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:gap-[6px] max-sm:gap-[5px]">
          {services.map(({ name, description, image, imageAlt, icon: Icon }, index) => (
            <article className={`overflow-hidden rounded-[13px] border border-[#ebe9e4] bg-white shadow-[0_8px_24px_#29204a14] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_#29204a24] ${index === services.length - 2 ? "lg:col-start-2" : ""} ${index === services.length - 1 ? "lg:col-start-3" : ""}`} key={name}>
              <div className="relative h-[200px] overflow-hidden bg-[#f2eee8] max-lg:h-[250px] max-md:h-[clamp(125px,34vw,190px)] max-sm:h-[122px]">
                <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]" src={image} alt={imageAlt} loading="lazy" decoding="async" />
                <span className="absolute -bottom-px left-[15px] grid h-[38px] w-[38px] place-items-center rounded-t-[11px] bg-white text-violet-700 max-md:left-[10px] max-md:h-[31px] max-md:w-[31px]"><Icon size={19} /></span>
              </div>
              <div className="px-4 pb-[15px] pt-[17px] max-md:px-3 max-md:pb-3 max-md:pt-[13px] max-sm:px-[10px]">
                <div className="flex items-center justify-center text-[#9c5a26]"><h3 className="font-heading text-base font-bold tracking-[-.3px] text-ink max-md:text-[13px]">{name}</h3></div>
                {/* <p className="mt-2 min-h-[61px] text-[11px] leading-[1.65] text-[#737c86] max-md:min-h-[67px] max-md:text-[10px] max-md:leading-[1.55] max-sm:min-h-[76px] max-sm:text-[9px]">{description}</p> */}
                <div className="mt-[14px] flex items-center justify-between gap-[7px] border-t border-[#efeeeb] pt-3 max-md:mt-[0px] max-md:flex-col max-md:items-stretch">
                  <a
                    className="inline-flex min-h-9 w-full flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#20bf69] px-2 text-[10px] font-bold text-white transition hover:bg-[#18a958] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20bf69] max-md:gap-1 max-md:px-1.5 max-md:text-[9px]"
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi, I'd like a quote for ${name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp us about ${name}`}
                    title={`WhatsApp us about ${name}`}
                  >
                    <img
                      className="h-4 w-4 shrink-0"
                      src="https://cdn.simpleicons.org/whatsapp/ffffff"
                      alt=""
                      aria-hidden="true"
                    />
                    WhatsApp <ArrowRight size={14} className="shrink-0" />
                  </a>
                  <a
                    className="inline-flex min-h-9 w-full flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[linear-gradient(135deg,#7b39c6,#b472ca)] px-2 text-[10px] font-bold text-white transition hover:bg-[linear-gradient(135deg,#7b39c6,#b472ca)]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange max-md:gap-1 max-md:px-1.5 max-md:text-[9px]"
                    href="#quote"
                    aria-label={`Get a quote for ${name}`}
                  >
                    Get a quote <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection({ usps }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#d6d6d6] px-8 py-[72px] text-[#20263a] max-md:px-5 max-md:py-[52px] max-sm:px-[15px]" id="why-us" aria-labelledby="usp-heading">
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-violet-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="mx-auto max-w-[1160px]">
        <div className="relative z-[1] mb-9 flex items-end justify-between gap-6 max-md:mb-7 max-md:flex-col max-md:items-start max-md:gap-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.2px] text-violet-800"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />THE CREATIVE PRINTING ADVANTAGE</p>
            <h2 className="mt-3 font-heading text-[clamp(27px,3vw,38px)] font-bold leading-tight tracking-[-1.2px] text-[#20263a]" id="usp-heading">More Than Printing.<br className="hidden max-md:block" /> <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">We Bring Your <br></br>Brand to Life.
</span></h2>
          </div>
          <p className="max-w-[330px] pb-1 text-xs leading-[1.7] text-[#596174]">From selecting the right materials to the finishing touches, we focus on quality, customization, and dependable service at every step.
</p>
        </div>
        <div className="relative z-[1] grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:gap-3 max-[480px]:grid-cols-2">
          {usps.map(({ title, description, icon: Icon, subtitle }, index) => (
            <article className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[18px] border border-[#eeeaf5] bg-gradient-to-br from-white via-[#fcfaff] to-[#f3efff] p-5 text-[#20263a] shadow-[0_14px_32px_#29204a18] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_22px_42px_#35205b28] max-md:min-h-[235px] max-md:p-4 max-[480px]:min-h-0" key={title}>
              {/* <span className="pointer-events-none absolute -right-3 -top-5 font-heading text-[108px] font-extrabold leading-none text-violet-900/[.05] transition duration-300 group-hover:scale-110 group-hover:text-fuchsia-600/[.12]">0{index + 1}</span> */}
              <div className="relative flex items-start justify-center">
                <span className="relative grid h-[54px] w-[54px] place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-[0_7px_18px_#7c3aed35] transition duration-300 group-hover:rotate-[-5deg] max-md:h-[48px] max-md:w-[48px]"><Icon size={24} strokeWidth={1.8} /></span>
                {/* <span className="relative mt-1 text-[9px] font-bold tracking-[1.4px] text-white/45">0{index + 1} <span className="text-[#f1af64]">/</span> 04</span> */}
              </div>
              <h3 className="relative mt-5 font-heading text-[16px] text-center font-extrabold leading-snug tracking-[-.3px] text-[#20263a] max-md:mt-4 max-md:text-[14px]">{title}</h3>
              <p className="relative mt-2 min-h-[57px] text-center text-[11px] leading-[1.7] text-[#596174] max-md:min-h-[52px] max-md:text-[10px]">{description}</p>
              <div className="relative mt-auto flex items-center justify-center gap-2 border-t border-violet-100  pt-3 text-[9px] font-bold uppercase tracking-[.65px] text-violet-800"><span className="h-[5px] w-[5px] rounded-full bg-fuchsia-500 " />{subtitle}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ gallery }) {
  return (
    <section className="w-full bg-[#d6d6d6] px-8 py-[76px] pb-[82px] text-[#20263a] max-md:px-5 max-md:py-[58px] max-md:pb-[62px] max-sm:px-[15px]" id="deliverables">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="mb-[30px] font-heading text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.14] tracking-[-1.6px] max-md:mb-[22px] max-md:text-[32px] max-md:tracking-[-1.2px] max-sm:text-[29px]">Deliverables</h2>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-md:gap-[9px]">
          {gallery.map((item) => (
            <figure className="group aspect-square overflow-hidden rounded-xl bg-gray-700" key={item.image}>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkShowcaseSection({ projects }) {
  return (
    <section className="bg-[#d6d6d6] px-8 py-[76px] text-[#20263a] max-md:px-5 max-md:py-[58px] max-sm:px-[15px]" id="our-work">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-8 flex items-end justify-between gap-6 max-md:mb-6 max-md:flex-col max-md:items-start max-md:gap-3">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.2px] text-violet-800">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
          Good Ideas Deserve Great Printing
            </p>
            <h2 className="mt-3 font-heading text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.14] tracking-[-1.6px] max-md:text-[32px] max-md:tracking-[-1.2px] max-sm:text-[29px]">
             Print That Brings <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">Your Ideas to Life.</span>
            </h2>
          </div>
          <div className="flex max-w-[390px] items-center gap-3 max-md:max-w-[460px]">
            
            <p className="text-[12px] leading-[1.7] text-[#596174] max-sm:text-[11px]">
              Explore our collection of custom printing projects, from everyday business stationery and branded merchandise to packaging and promotional materials.

            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-[11px] max-[480px]:gap-2">
          {projects.map((project, index) => (
            <article
              className="group overflow-hidden rounded-[14px] border border-[#eeeaf5] bg-white shadow-[0_8px_22px_#29204a12] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_35px_#35205b24]"
              key={project.title}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f1f7]">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                />
                {/* <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#101722c9] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.7px] text-white max-sm:left-2 max-sm:top-2 max-sm:px-2 max-sm:text-[7px]">
                  {project.category}
                </span> */}
                {/* <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[#202a35] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#f6b86c] max-sm:bottom-2 max-sm:right-2 max-sm:h-7 max-sm:w-7">
                  <ArrowUpRight size={16} />
                </span> */}
              </div>
              <div className="flex items-start justify-center
               gap-3 px-3.5 py-3.5 max-sm:gap-2 max-sm:px-2.5 max-sm:py-3">
                {/* <span className="pt-0.5 text-[9px] font-bold tracking-[.7px] text-[#f6b86c]">
                  {String(index + 1).padStart(2, "0")}
                </span> */}
                <h3 className="font-heading text-[12px] font-bold leading-[1.45] text-[#303447] max-sm:text-[10px] text-center">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-5 rounded-xl border border-violet-100 bg-[#faf9ff] px-5 py-4 max-sm:flex-col max-sm:items-start max-sm:px-4">
          <p className="text-[12px] leading-[1.6] text-[#454b5c] max-sm:text-[11px]">
            Looking for the right printing solution for your business? Tell us what you need, and get a quote tailored to your Business.

          </p>
          <a className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-600 px-4 py-2.5 text-[11px] font-bold text-white transition hover:from-violet-800 hover:to-fuchsia-700" href="#quote">
            Get Quote <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection({ neighbourhoods, address }) {
  return (
    <section className="bg-[#d6d6d6] py-[78px] text-[#20263a] max-md:py-[60px]" id="area">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_64px))] grid-cols-[.92fr_1.08fr] items-center gap-[70px] max-lg:gap-10 max-md:w-[min(calc(100%_-_40px),560px)] max-md:grid-cols-1 max-md:gap-[27px] max-sm:w-[calc(100%_-_30px)]">
        <div>
          <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.1px] text-violet-800">Right around the corner</p>
          <h2 className="mt-3 font-heading text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.14] tracking-[-1.6px] text-[#20263a] max-md:text-[32px] max-md:tracking-[-1.2px] max-sm:text-[29px]">Made locally.<br /><span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">Delivered nearby.</span></h2>
          <p className="mt-[13px] max-w-[465px] text-xs leading-[1.75] text-[#596174] max-md:text-[11px]">Our workshop is in Vidyaranyapura, serving businesses and events throughout North Bengaluru. Delivery and installation can be arranged for your project.</p>
          <div className="mt-5 flex flex-wrap gap-[7px]">
            {neighbourhoods.map((area) => <span className="inline-flex items-center gap-1 rounded-full border border-[#e9e3d7] bg-white px-[9px] py-[7px] text-[9px] font-semibold text-[#505a63]" key={area}><MapPin className="text-[#b86b2d]" size={13} />{area}</span>)}
          </div>
          <div className="mt-[23px] flex items-start gap-3 rounded-[11px] border border-[#ece6da] bg-white p-[14px]">
            <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px] bg-[#fff3e4] text-[#b76726]"><MapPin size={19} /></span>
            <div><b className="text-[11px]">Visit our workshop</b><p className="mt-[5px] text-[10px] leading-[1.5] text-[#707982]">{address}</p></div>
            <a className="ml-auto text-[#a85c21]" href="https://maps.google.com/?q=113+Ramachandrapura+Main+Rd+Vidyaranyapura+Bengaluru" target="_blank" rel="noreferrer" aria-label="Open address in Google Maps"><ArrowUpRight size={17} /></a>
          </div>
          <p className="mt-3 flex items-center gap-[7px] text-[9px] text-[#596174]"><Clock3 className="text-violet-700" size={16} /> Mon–Sat: 9:00 AM–9:00 PM <span>·</span> Sun: 10:00 AM–4:00 PM</p>
        </div>
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-[#d7e0d8] bg-[#e9eee4] shadow-[0_12px_28px_#17202c12] max-md:min-h-[310px]" aria-label="Map showing the Bengaluru service area">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(31deg, transparent 48%, #fff 49%, #fff 51%, transparent 52%), linear-gradient(115deg, transparent 48%, #fff 49%, #fff 51%, transparent 52%)", backgroundSize: "80px 90px, 110px 80px" }} />
          <span className="absolute -left-[8%] top-[37%] h-[13px] w-[120%] -rotate-[26deg] border-y-2 border-white bg-[#e8d8b8] opacity-80" />
          <span className="absolute -left-[12%] top-[70%] h-[13px] w-[120%] rotate-[19deg] border-y-2 border-white bg-[#e8d8b8] opacity-80" />
          <span className="absolute left-1/4 top-[17%] h-[13px] w-[120%] rotate-[67deg] border-y-2 border-white bg-[#e8d8b8] opacity-80" />
          <span className="absolute -right-[15px] top-[4%] h-[110px] w-[220px] -rotate-[23deg] rounded-[50%] bg-[#c6e1e2]" />
          <div className="absolute left-[13%] top-[28%] text-[9px] font-bold tracking-[1.2px] text-[#7e9081]">YELAHANKA</div>
          <div className="absolute left-[19%] top-[70%] text-[9px] font-bold tracking-[1.2px] text-[#7e9081]">HEBBAL</div>
          <div className="absolute right-[24%] top-[20%] text-[9px] font-bold tracking-[1.2px] text-[#7e9081]">JAKKUR</div>
          <div className="absolute left-1/2 top-[49%] grid -translate-x-1/2 -translate-y-1/2 justify-items-center">
            <span className="grid h-[43px] w-[43px] rotate-[-45deg] place-items-center rounded-[50%_50%_50%_5px] border-4 border-white bg-[linear-gradient(135deg,#7b39c6cc,#b472cacc)] text-white shadow-[0_4px_12px_#17202c40]"><Printer className="rotate-45" size={18} /></span>
            <b className="relative z-[1] mt-[7px] whitespace-nowrap rounded bg-white px-2 py-[5px] text-[10px] shadow-[0_2px_8px_#17202c16]">Creative Prints</b>
            <small className="relative z-[1] mt-[3px] whitespace-nowrap rounded bg-white px-2 py-[5px] text-[8px] text-[#79837e] shadow-[0_2px_8px_#17202c16]">Vidyaranyapura</small>
          </div>
          <span className="absolute right-[18px] top-4 grid justify-items-center text-[9px] font-bold text-[#64736c]">N <ArrowUpRight size={15} /></span>
          <span className="absolute bottom-[14px] left-[14px] flex items-center gap-[6px] rounded-[7px] border border-[#dce5db] bg-white/90 px-[11px] py-[9px] text-[9px] font-bold text-[#44534b]"><MapPin size={14} /> Serving North Bengaluru</span>
        </div>
      </div>
    </section>
  );
}

export function QuoteSection({ whatsappLink, handleQuote, files, setFiles, notice }) {
  return (
    <section className="mx-auto grid w-full grid-cols-[.78fr_1fr] gap-[clamp(45px,8vw,110px)] bg-[#d6d6d6] px-[max(32px,calc((100vw-1160px)/2))] py-[86px] text-[#20263a] max-md:grid-cols-1 max-md:gap-[30px] max-md:px-5 max-md:py-[62px] max-sm:px-[15px]" id="quote">
      <div>
        <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.1px] text-violet-800">LET'S TALK PRINTING
</p>
        <h2 className="mt-3 font-heading text-[clamp(35px,4vw,48px)] font-bold leading-[1.14] tracking-[-1.6px] max-md:text-[39px]">Looking for Something to Print? <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">We Can Help!
</span></h2>
        <p className="mt-[15px] max-w-[360px] text-[13px] leading-[1.75] text-[#596174]">Need business cards, brochures, packaging, or something custom-made? Tell us what you have in mind, and we'll help you find the right printing solution at the right price.
</p>
        <div className="mt-[27px] grid gap-[9px] max-md:grid-cols-2 max-sm:grid-cols-1">
          <a className="flex items-center gap-[11px] rounded-[10px] border border-[#e8e3f0] bg-white p-[11px] text-[#303447] shadow-sm transition hover:border-violet-300 max-md:gap-[9px] max-md:p-[10px]" href={`tel:${phoneNumber}`}><span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-[9px] bg-violet-50 text-violet-700 max-md:h-[32px] max-md:w-[32px]"><MessageCircle size={18} /></span><span className="grid gap-[4px]"><small className="text-[11px] text-[#687083] max-md:text-[10px]">Prefer to speak with us?
</small><b className="text-[13px] text-[#303447] max-md:text-[11px]">+91 98440 27757</b></span><ArrowUpRight className="ml-auto text-violet-700" size={16} /></a>
          <a className="flex items-center gap-[11px] rounded-[10px] border border-[#e8e3f0] bg-white p-[11px] text-[#303447] shadow-sm transition hover:border-violet-300 max-md:gap-[9px] max-md:p-[10px]" href={whatsappLink} target="_blank" rel="noreferrer"><span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-[9px] bg-violet-50 text-violet-700 max-md:h-[32px] max-md:w-[32px]"><MessageCircle size={18} /></span><span className="grid gap-[4px]"><small className="text-[11px] text-[#687083] max-md:text-[10px]">Have questions about your printing needs?
</small><b className="text-[13px] text-[#303447] max-md:text-[11px]">Chat with our team on WhatsApp.
</b></span><ArrowUpRight className="ml-auto text-violet-700" size={16} /></a>
        </div>
        <div className="mt-[15px] flex items-center gap-[7px] text-[10px] text-[#596174]"><Check className="text-[#1d956a]" size={16} /> Our team will get back to you during business hours.
</div>
      </div>

      <form className="rounded-[15px] border border-[#ebe8e2] bg-white p-[25px] shadow-[0_12px_35px_#17202c0b] max-md:px-[15px] max-md:py-[19px]" onSubmit={handleQuote}>
        <div className="mb-5 flex items-baseline justify-between gap-2.5"><h3 className="font-heading text-[19px] font-bold tracking-[-.4px]">Request a quote</h3><p className="text-[9px] text-[#858c93]">Fields marked * are required.</p></div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-[14px]">
          <label className="grid gap-[7px] text-[14px] font-bold text-[#47515c]">Full name *<input className="h-10 w-full rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] text-[11px] font-normal text-[#25303a] outline-none placeholder:text-[#a2a7ac] focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
          <label className="grid gap-[7px] text-[14px] font-bold text-[#47515c]">Phone / WhatsApp *<input className="h-10 w-full rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] text-[11px] font-normal text-[#25303a] outline-none placeholder:text-[#a2a7ac] focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="phone" type="tel" autoComplete="tel" placeholder="+91" required /></label>
          <label className="col-span-full grid gap-[7px] text-[14px] font-bold text-[#47515c]">What do you need? *
            <select className="h-10 w-full rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] text-[11px] font-normal text-[#25303a] outline-none focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Flex printing</option><option>Vinyl graphics</option><option>Display boards</option><option>LED signage</option><option>Something else</option>
            </select>
          </label>
          <label className="grid gap-[7px] text-[14px] font-bold text-[#47515c]">Approx. size<input className="h-10 w-full rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] text-[11px] font-normal text-[#25303a] outline-none placeholder:text-[#a2a7ac] focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="dimensions" type="text" placeholder="e.g. 6 ft × 3 ft" /></label>
          <label className="grid gap-[7px] text-[14px] font-bold text-[#47515c]">Quantity<input className="h-10 w-full rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] text-[11px] font-normal text-[#25303a] outline-none placeholder:text-[#a2a7ac] focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="quantity" type="number" min="1" placeholder="1" /></label>
          <fieldset className="col-span-full m-0 flex items-center gap-2.5 border-0 p-0">
            <legend className="mb-2 text-[14px] font-bold text-[#47515c]">Will you need installation?</legend>
            <label className="inline-flex items-center gap-[5px] text-[14px] font-medium text-[#66717e]"><input className="accent-orange" type="radio" name="installation" value="Yes" /> Yes</label>
            <label className="inline-flex items-center gap-[5px] text-[14px] font-medium text-[#66717e]"><input className="accent-orange" type="radio" name="installation" value="No" defaultChecked /> No</label>
          </fieldset>
          <label className="col-span-full grid gap-[7px] text-[14px] font-bold text-[#47515c]">A few more details<textarea className="min-h-[78px] w-full resize-y rounded-[7px] border border-[#e2e1dd] bg-white px-[11px] py-[10px] text-[11px] font-normal text-[#25303a] outline-none placeholder:text-[#a2a7ac] focus:border-violet-500 focus:ring-[3px] focus:ring-violet-500/10" name="details" rows="3" placeholder="Tell us about the project, finish or deadline…" /></label>
          <label className="col-span-full flex min-h-[58px] cursor-pointer items-center gap-2.5 rounded-lg border border-dashed border-violet-200 bg-violet-50/50 px-[11px] py-[9px] text-violet-800 focus-within:outline focus-within:outline-[3px] focus-within:outline-violet-500/20">
            <FileUp size={18} /><span className="grid gap-[3px]"><b className="text-[14px] text-[#4c5660]">{files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : "Add artwork (optional)"}</b><small className="text-[14px] font-normal text-[#858e97]">PDF, AI, PSD, CDR, PNG or JPG</small></span>
            <input className="sr-only" type="file" accept=".pdf,.ai,.psd,.cdr,.png,.jpg,.jpeg" multiple onChange={(event) => setFiles(Array.from(event.target.files || []))} />
          </label>
        </div>
        {files.length > 0 && <p className="mt-2 break-words text-[9px] text-[#69737d]">{files.map((file) => file.name).join(", ")} · Attach these files in WhatsApp.</p>}
        <button className="mt-[14px] inline-flex min-h-[43px] w-full items-center justify-center gap-[9px] rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-600 px-[17px] text-[13px] font-bold text-white shadow-[0_5px_12px_#7c3aed30] transition hover:-translate-y-px hover:from-violet-800 hover:to-fuchsia-700" type="submit">Continue in WhatsApp <ArrowRight size={17} /></button>
        {notice && <p className="mt-2.5 text-[11px] leading-[1.5] text-[#12734f]" role="status">{notice}</p>}
      </form>
    </section>
  );
}

export function SiteFooter({ whatsappLink }) {
  return (
    <footer className="border-t border-neutral-800 bg-black pt-12 text-white">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_64px))] grid-cols-[1.35fr_.8fr_.95fr_.85fr] gap-[45px] pb-[39px] max-md:w-[min(calc(100%_-_40px),560px)] max-md:grid-cols-2 max-md:gap-x-[22px] max-md:gap-y-[29px] max-sm:w-[calc(100%_-_30px)] max-sm:gap-x-[15px]">
        <div className="max-md:col-span-full">
          <a className="inline-flex shrink-0 items-center gap-[11px] max-sm:gap-2" href="#top"><span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-violet-700 to-fuchsia-600 text-white shadow-[0_6px_14px_#7c3aed35] max-md:h-[38px] max-md:w-[38px] max-sm:h-[34px] max-sm:w-[34px]"><Printer size={21} /></span><span className="flex flex-col gap-[3px]"><strong className="font-heading text-[17px] font-extrabold leading-[1.1] tracking-[-.6px] text-white max-md:text-[15px] max-sm:text-[13px]">Creative Prints</strong><small className="text-[9px] uppercase tracking-[1.4px] text-violet-300 max-md:text-[8px] max-sm:text-[7px]">Complete Printing Solutions</small></span></a>
          <p className="mt-4 max-w-[270px] text-[11px] leading-[1.7] text-[#b5bec8]">Creative print solutions for local businesses, events and ideas worth sharing.</p>
          <a className="mt-[14px] inline-flex items-center gap-[7px] text-[10px] font-bold text-violet-700" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Say hello on WhatsApp <ArrowUpRight size={14} /></a>
        </div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1 font-heading text-xs font-bold">Explore</h3><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href="#services">Our services</a><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href="#our-work">Our work</a><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href="#why-us">Why choose us</a><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href="#deliverables">Deliverables</a></div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1 font-heading text-xs font-bold">Get in touch</h3><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href={`tel:${phoneNumber}`}>+91 9876543210</a><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a className="text-[10px] leading-[1.55] text-[#b5bec8] hover:text-violet-300" href="#quote">Request a quote</a><span className="text-[10px] leading-[1.55] text-[#b5bec8]">Vidyaranyapura, Bengaluru</span></div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1 font-heading text-xs font-bold">Workshop hours</h3><p className="text-[10px] leading-[1.7] text-[#aab4be]">Monday – Saturday<br /><b className="font-semibold text-white">9:00 AM – 9:00 PM</b></p><p className="text-[10px] leading-[1.7] text-[#aab4be]">Sunday<br /><b className="font-semibold text-white">10:00 AM – 4:00 PM</b></p></div>
      </div>
      <div className="mx-auto mb-0 flex min-h-12 w-[min(1160px,calc(100%_-_64px))] items-center justify-between border-t border-neutral-800 text-[9px] text-[#9da7b2] max-md:mb-[58px] max-md:w-[min(calc(100%_-_40px),560px)] max-sm:w-[calc(100%_-_30px)]"><span>© 2026 Creative Prints · Bengaluru</span><a className="inline-flex items-center gap-[5px] text-violet-300" href="#top">Back to top <ArrowDown className="rotate-180" size={14} /></a></div>
    </footer>
  );
}

export function QuickContact({ whatsappLink }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 hidden min-h-[58px] grid-cols-3 border-t border-[#e8e6e1] bg-white shadow-[0_-5px_18px_#17202c12] max-md:grid" aria-label="Quick contact">
      <a className="flex items-center justify-center gap-[7px] text-[10px] font-bold text-[#8a501e]" href={`tel:${phoneNumber}`}><PhoneCall size={18} /><span>Call</span></a>
      <a className="flex items-center justify-center gap-[7px] bg-[#20bf69] text-[10px] font-bold text-white" href={whatsappLink} target="_blank" rel="noreferrer"><img className="h-[18px] w-[18px]" src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" aria-hidden="true" /><span>WhatsApp</span></a>
      <a className="flex items-center justify-center gap-[7px] bg-[linear-gradient(135deg,#7b39c6cc,#b472cacc)] text-[10px] font-bold text-white" href="#quote"><FileUp size={18} /><span>Get a quote</span></a>
    </div>
  );
}
