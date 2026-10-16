import React, { useEffect, useRef, useState } from "react";
import { Award, Printer, UsersRound } from "lucide-react";

const trustMetrics = [
  {
    value: 25,
    suffix: "+",
    label: "Years of experience",
    detail: "Printing expertise you can rely on",
    icon: Award,
  },
  {
    value: 1200,
    suffix: "+",
    label: "Clients served",
    detail: "Businesses who trust our team",
    icon: UsersRound,
  },
  {
    value: 5,
    suffix: " Lakh+",
    label: "Prints delivered",
    detail: "Ideas brought to life in print",
    icon: Printer,
  },
];

function CountUp({ target, started, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setCount(target);
      return undefined;
    }

    const duration = 1600;
    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;
      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [started, target]);

  return (
    <>
      {new Intl.NumberFormat("en-IN").format(count)}
      {suffix}
    </>
  );
}

export default function TrustSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStarted(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#89919c] px-8 py-[78px] text-[#20263a] max-md:px-5 max-md:py-[58px] max-sm:px-[15px]"
      ref={sectionRef}
      aria-labelledby="trust-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-fuchsia-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-[1160px]">
        <div className="mx-auto mb-9 max-w-[710px] text-center max-md:mb-7">
          <span className="inline-flex rounded-full border border-violet-200 bg-white/75 px-3 py-[7px] text-[9px] font-extrabold uppercase tracking-[1.2px] text-violet-800 shadow-sm">
            Experience you can count on
          </span>
          <h2
            className="mt-4 font-heading text-[clamp(29px,3.5vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px] text-[#20263a] max-md:text-[32px] max-sm:text-[28px]"
            id="trust-heading"
          >
            Printing Excellence{" "}
            <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Built on Trust
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-[1.8] text-[#30394b] max-md:text-[12px]">
            Great printing starts with experience and a commitment to quality.
            We&apos;re proud to help businesses bring their ideas to life, one
            print at a time.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:gap-3 max-[600px]:grid-cols-1">
          {trustMetrics.map(({ value, suffix, label, detail, icon: Icon }, index) => (
            <article
              className="group relative isolate overflow-hidden rounded-2xl border border-white/90 bg-gradient-to-br from-white via-[#faf8ff] to-[#eee8ff] p-6 text-center shadow-[0_16px_35px_#29204a30,0_3px_8px_#20263a18] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_22px_46px_#35205b40,0_5px_12px_#20263a20] max-md:p-5"
              key={label}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />
              <span className="absolute right-4 top-3 font-heading text-5xl font-extrabold leading-none text-violet-900/[.06]">
                0{index + 1}
              </span>
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-[0_7px_16px_#7c3aed45] transition group-hover:scale-105 group-hover:shadow-[0_10px_20px_#7c3aed55]">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="mt-4 font-heading text-[clamp(34px,4vw,48px)] font-extrabold leading-none tracking-[-1.5px] text-[#20263a] tabular-nums">
                <CountUp target={value} suffix={suffix} started={started} />
              </p>
              <h3 className="mt-3 font-heading text-[13px] font-extrabold text-violet-800">
                {label}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.6] text-[#596174]">
                {detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[800px] text-center text-[14px] leading-[1.75] text-[#30394b] max-sm:text-[10px]">
          Trusted by 1,200+ businesses for reliable printing, consistent
          quality, and professional results that bring their brands to life.
        </p>
      </div>
    </section>
  );
}
