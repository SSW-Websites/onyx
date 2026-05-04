import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const agentAvatars = [
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-people-in-orange-county--611-1.png",
    alt: "Agent portrait",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -26,
    offsetY: -25,
  },
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-single-person-in-orange--611-3.png",
    alt: "Agent portrait",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -58,
    offsetY: -38,
  },
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-single-person-in-orange--611-3.png",
    alt: "Agent portrait",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -113,
    offsetY: -25,
  },
];

export const GrowthMetricsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f2f2f2] px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1085px] flex-col items-center">
        <div className="mb-5 flex w-full items-center justify-center">
          <div className="flex items-center">
            <div className="flex items-center">
              {agentAvatars.map((avatar, index) => (
                <div
                  key={`${avatar.src}-${index}`}
                  className={`relative h-6 w-6 shrink-0 overflow-hidden rounded-full border-[1.5px] border-[#f2f2f2] bg-[#f9ffed] sm:h-9 sm:w-9 sm:border-[2.34px] ${
                    index > 0 ? "-ml-[5px] sm:-ml-[7px]" : ""
                  }`}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="absolute max-w-none"
                    style={{
                      width: `${avatar.imgWidth}px`,
                      height: `${avatar.imgHeight}px`,
                      left: `${avatar.offsetX}px`,
                      top: `${avatar.offsetY}px`,
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="ml-2 whitespace-nowrap [font-family:'SF_Pro-Medium',Helvetica] text-[9.5px] font-normal tracking-[-0.2px] text-[#1f3040] sm:ml-[13px] sm:whitespace-normal sm:text-[15px] sm:leading-[18px] sm:tracking-[-0.65px] md:text-[19.6px] md:leading-[21.9px] md:tracking-[-0.98px]">
              <span className="font-medium tracking-[-0.19px]">
                For full-time real estate agents in
              </span>
              <span
                style={{ fontWeight: 800 }}
                className="tracking-[-0.19px]"
              >
                {" "} OC, South LA, and Inland Empire</span>
            </p>
          </div>
        </div>
        <header className="flex w-full max-w-[1045px] flex-col items-center text-center">
          <h2 className="[font-family:'Montserrat',Helvetica] text-[32px] font-bold uppercase leading-[0.92] tracking-[2.8px] text-black sm:text-[40px] sm:tracking-[3.8px] md:text-[52px] md:tracking-[5.2px] lg:text-[61.7px] lg:tracking-[6.79px]">Agents Join for the Leads. They Stay for Everything Else. </h2>
          <p className="mt-5 max-w-[975px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.3] text-black sm:text-[18px] md:mt-7 md:text-[22px] lg:text-[26px]">Sell $10M this year by plugging into a proven system. Sales Process, Leads, Built-in Accountability, and Support.</p>
        </header>
        <div className="mt-8 flex w-full max-w-[606px] items-center justify-center gap-2 md:mt-10">
          <img
            className="h-2 w-[15px] shrink-0"
            alt="Arrow"
            src="/figmaAssets/arrow-1.svg"
          />
          <p className="[font-family:'Montserrat',Helvetica] text-center text-[9px] font-bold leading-[1] tracking-[0] text-black sm:text-[11px] md:text-[14px] lg:text-[17.5px] lg:leading-[16.1px] whitespace-nowrap">
            WATCH THE VIDEO BELOW BEFORE BOOKING AN INTERVIEW
          </p>
          <img
            className="h-2 w-[15px] shrink-0"
            alt="Arrow"
            src="/figmaAssets/arrow-1.svg"
          />
        </div>
        <div className="mt-5 w-full max-w-[975px] aspect-video rounded-none overflow-hidden bg-[#1e1e1e]">
          <iframe
            className="w-full h-full"
            src="https://fast.wistia.net/embed/iframe/whl2a354qh?seo=true&videoFoam=true"
            title="Onyx Homes Agent Recruitment Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <Button
          type="button"
          onClick={() => document.getElementById("calendly-widget")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 h-auto rounded-none bg-black px-10 py-4 [font-family:'Montserrat',Helvetica] text-center text-[14px] font-bold uppercase tracking-[2px] text-[#f2f2f2] hover:bg-black/90 active:bg-black/80 transition-colors sm:text-[16px] sm:tracking-[2.2px] sm:px-14 sm:py-5 md:mt-10 lg:mt-[53px] lg:text-[20px] lg:tracking-[2.4px] lg:px-16 lg:py-6"
        >
          BOOK YOUR INTERVIEW
        </Button>
      </div>
    </section>
  );
};
