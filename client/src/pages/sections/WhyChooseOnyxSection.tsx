import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "1,000+ deals closed.",
  "Strong reputation across Southern California.",
  "Built to help agents spend more time selling and less time doing everything alone.",
];

const stats = [
  { label: "Sales Volume", value: "$915 M" },
  { label: "Deals Closed", value: "1,000+" },
  { label: "Since", value: "2020" },
];

export const WhyChooseOnyxSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto grid min-h-[806px] w-full max-w-[1920px] grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(420px,942px)]">
        <div className="flex flex-col items-center justify-start px-6 py-12 text-center sm:px-10 md:px-14 lg:items-start lg:px-8 lg:pt-[56px] lg:text-left xl:pl-10 xl:pt-[72px] 2xl:pl-20 2xl:pt-[85px]">
          <div className="w-full max-w-[820px]">
            <header className="max-w-full">
              <h2 className="[font-family:'Montserrat',Helvetica] text-[22px] font-bold uppercase leading-[1.05] tracking-[0.06em] text-black sm:text-[40px] sm:tracking-[0.08em] lg:text-[22px] lg:leading-[1.1] lg:tracking-[1px] [@media(min-width:1180px)]:text-[28px] [@media(min-width:1180px)]:tracking-[1.5px] xl:text-[34px] xl:tracking-[2px] [@media(min-width:1400px)]:text-[42px] [@media(min-width:1400px)]:tracking-[3px] 2xl:text-[52px] 2xl:tracking-[4px] [@media(min-width:1800px)]:text-[61.73px] [@media(min-width:1800px)]:tracking-[6.79px]">
                A TEAM
                <br />
                BUILT TO HELP AGENTS GROW
              </h2>
            </header>
            <div className="mt-6 max-w-[715px] [font-family:'SF_Pro-Regular',Helvetica] text-[16px] font-normal leading-[1.4] text-black sm:text-[18px] lg:mt-[36px] lg:text-[20px] lg:leading-[1.3] xl:text-[23px] 2xl:text-[26px] 2xl:leading-[1.25]">
              <p>
                Since 2020, Onyx Homes has helped serious agents grow with real
                production, real support, and a stronger team behind them.
              </p>
              <ul className="mt-6 inline-flex flex-col items-stretch gap-4 text-left lg:mt-8 lg:flex lg:gap-6 2xl:gap-7">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      strokeWidth={3}
                      className="mt-1 h-4 w-4 shrink-0 text-black lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              type="button"
              onClick={() => document.getElementById("growth-team-story")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 h-auto min-h-11 rounded-none bg-black px-8 py-4 [font-family:'Montserrat',Helvetica] text-[14px] font-bold uppercase tracking-[0.11em] text-white hover:bg-black/90 active:bg-black/80 transition-colors sm:px-10 lg:mt-10 lg:h-[112px] lg:min-h-0 lg:w-[485px] lg:px-0 lg:text-[24.3px] lg:leading-[22.4px] lg:tracking-[2.67px]"
            >
              BOOK YOUR INTERVIEW
            </Button>
          </div>
        </div>
        <Card className="relative h-full rounded-none border-0 shadow-none">
          <CardContent className="relative flex h-full min-h-[420px] items-center overflow-hidden p-0 lg:min-h-[806px]">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              alt="Onyx Homes team"
              src="/figmaAssets/screenshot-2026-04-16-at-7-05-09-pm-1.png"
              loading="lazy"
              width="942"
              height="806"
            />
            <div className="absolute inset-0 bg-[linear-gradient(210deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.73)_100%)]" />
            <div className="relative z-10 flex w-full flex-col px-6 py-10 sm:px-10 lg:px-[90px] lg:py-0">
              <div className="w-full max-w-[827px]">
                {stats.map((stat, index) => (
                  <div key={stat.label}>
                    <div
                      className={`[font-family:'SF_Pro-Light',Helvetica] text-[18px] font-light text-white sm:text-[22px] lg:text-[25.4px] ${
                        index === 0 ? "" : "mt-8 lg:mt-[33px]"
                      }`}
                    >
                      {stat.label}
                    </div>
                    <div
                      className={`[font-family:'Montserrat',Helvetica] text-[56px] font-bold leading-none text-white sm:text-[72px] lg:mt-[10px] lg:text-[108.2px] ${
                        index === 0
                          ? "mt-2 tracking-[-0.06em] lg:tracking-[-6.49px]"
                          : "mt-2 tracking-[0]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    {index < stats.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mt-6 h-px w-full max-w-[815px] bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.18)_55%,rgba(255,255,255,0)_92%)] lg:mt-[32px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
