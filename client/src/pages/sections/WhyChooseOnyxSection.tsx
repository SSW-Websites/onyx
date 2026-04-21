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
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 md:px-14 lg:px-16 xl:px-[88px]">
          <div className="w-full max-w-[715px]">
            <header className="max-w-[649px]">
              <h2 className="[font-family:'Montserrat',Helvetica] text-[38px] font-bold leading-[0.92] tracking-[0.12em] text-black sm:text-[48px] lg:text-[61.7px] lg:tracking-[6.79px]">
                A TEAM
                <br />
                BUILT TO HELP AGENTS GROW
              </h2>
            </header>
            <div className="mt-8 max-w-[715px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.35] text-black sm:text-[18px] lg:mt-[62px] lg:text-[26px]">
              <p>
                Since 2020, Onyx Homes has helped serious agents grow with real
                production, real support, and a stronger team behind them.
              </p>
              <ul className="mt-6 space-y-3 lg:mt-8 lg:space-y-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="[font-family:'Inter',Helvetica] text-base font-bold leading-none text-black lg:text-[26px]"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              type="button"
              onClick={() => document.getElementById("growth-team-story")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 h-auto min-h-11 rounded-none bg-black px-8 py-4 [font-family:'Montserrat',Helvetica] text-[14px] font-bold uppercase tracking-[0.11em] text-white hover:bg-black/90 active:bg-black/80 transition-colors sm:px-10 lg:mt-[66px] lg:min-h-28 lg:w-[485px] lg:text-[24.3px] lg:leading-[22.4px] lg:tracking-[2.67px]"
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
                      <img
                        className="mt-6 h-[1.2px] w-full max-w-[815px] lg:mt-[32px]"
                        alt="Line"
                        src="/figmaAssets/line-2.svg"
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
