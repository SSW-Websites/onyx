import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sideCards = [
  {
    title: "WHY DO AGENTS GET STUCK",
    underline: true,
    borderClass:
      "[border-image:linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.27)_100%)_1]",
  },
  {
    title: "WHAT AGENTS GAIN AT ONYX HOMES",
    underline: false,
    borderClass:
      "[border-image:linear-gradient(270deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,1)_100%)_1]",
  },
];

export const InterviewCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(179deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)]">
      <div className="relative mx-auto flex min-h-[400px] w-full max-w-[1920px] flex-col px-6 pb-12 pt-12 sm:min-h-[917px] sm:px-10 sm:pb-0 sm:pt-20 lg:px-14 xl:px-16">
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-[235px] w-[237px] -translate-x-1/2 bg-[#589eff] blur-[237.75px]" />
        <header className="relative z-10 grid grid-cols-1 gap-6 pb-8 text-center sm:gap-8 sm:pb-12 sm:text-left lg:grid-cols-[minmax(0,809px)_minmax(320px,485px)] lg:items-start lg:justify-between lg:gap-10 lg:pb-24">
          <h2 className="mx-auto max-w-[809px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2.5px] text-white sm:mx-0 sm:text-[48px] sm:leading-[0.92] sm:tracking-[5.2px] lg:text-[61.7px] lg:tracking-[6.79px]">
            WHY SERIOUS AGENTS CHOOSE ONYX HOMES
          </h2>
          <div className="flex justify-center sm:justify-start lg:justify-center">
            <Button
              type="button"
              onClick={() => document.getElementById("growth-team-story")?.scrollIntoView({ behavior: "smooth" })}
              className="h-auto min-h-0 w-full max-w-[485px] rounded-none bg-white px-6 py-7 text-black shadow-[0px_-4px_10px_#010e1940,0px_-12px_18px_#010e1930,0px_-28px_24px_#010e1920] transition-colors hover:bg-gray-50 active:bg-gray-100 sm:min-h-28 sm:py-10 sm:shadow-[0px_-5px_11px_#010e195e,0px_-20px_20px_#010e1952,0px_-44px_27px_#010e1930,0px_-79px_31px_#010e190f,0px_-123px_34px_#010e1903]"
            >
              <span className="w-full [font-family:'Montserrat',Helvetica] text-center text-[18px] font-bold leading-[22.4px] tracking-[2px] text-black sm:text-[20px] lg:text-[24.3px] lg:tracking-[2.67px]">
                BOOK YOUR INTERVIEW
              </span>
            </Button>
          </div>
        </header>
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-4 sm:gap-0 sm:border sm:border-b-0 sm:border-white/20 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            className={`flex h-full flex-col rounded-none border border-white/20 bg-transparent shadow-none sm:border-y-0 sm:border-l-0 sm:border-r sm:border-transparent ${sideCards[0].borderClass}`}
          >
            <CardContent className="flex min-h-[120px] flex-1 items-center justify-center p-6 sm:min-h-[360px] sm:justify-start sm:p-8 lg:min-h-[380px] lg:p-10">
              <h3
                className={`max-w-[393px] text-center [font-family:'Montserrat',Helvetica] text-[20px] font-bold leading-[1.05] tracking-[0] text-white sm:text-left sm:text-[42px] sm:leading-[0.95] lg:text-[50px] ${
                  sideCards[0].underline ? "underline" : ""
                }`}
              >
                {sideCards[0].title}
              </h3>
            </CardContent>
          </Card>

          <Card className="flex h-full flex-col rounded-none border border-white/20 bg-[#172734] shadow-none sm:border-x sm:border-y-0 sm:border-[#ebf3ff] sm:col-span-2 lg:col-span-1">
            <CardContent className="relative flex min-h-[180px] flex-1 overflow-hidden p-0 sm:min-h-[360px] lg:min-h-[380px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                alt="Onyx Homes"
                src="/figmaAssets/image-9.png"
                loading="lazy"
                width="487"
                height="491"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(47.69deg,rgba(238,247,255,0.92)_36.7%,rgba(238,247,255,0.55)_75%,rgba(24,39,53,0)_100%)]"
              />
              <div className="relative z-10 mt-auto flex w-full flex-col justify-end p-8 lg:p-[41px]">
                <h3 className="mb-6 max-w-[351px] [font-family:'Montserrat',Helvetica] text-[22px] font-bold leading-[0.95] tracking-[0] text-[#233240] sm:text-[34px] sm:leading-[0.9] lg:text-[40px] lg:leading-[36.1px]">
                  WHAT WE GIVE YOU INSTEAD
                </h3>
                <p className="max-w-[409px] [font-family:'SF_Pro-Bold',Helvetica] text-[18px] font-normal leading-normal tracking-[0] text-[#233240] sm:text-[20px] lg:text-[22px]">
                  <span className="font-bold text-[#233240]">Onyx Homes</span>
                  <span className="[font-family:'SF_Pro-Light',Helvetica] font-light text-[#233240]">
                    {" "}
                    gives you a proven sales process, team-generated
                    opportunities, and accountability that keeps you moving,
                    plus the support you need to focus on what you do best:
                    selling.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`flex h-full flex-col rounded-none border border-white/20 bg-transparent shadow-none sm:border-y-0 sm:border-l sm:border-r-0 sm:border-transparent ${sideCards[1].borderClass}`}
          >
            <CardContent className="flex min-h-[120px] flex-1 items-center justify-center p-6 sm:min-h-[360px] sm:justify-start sm:p-8 lg:min-h-[380px] lg:p-10">
              <h3
                className={`max-w-[393px] text-center [font-family:'Montserrat',Helvetica] text-[20px] font-bold leading-[1.05] tracking-[0] text-white sm:text-left sm:text-[42px] sm:leading-[0.95] lg:text-[50px] ${
                  sideCards[1].underline ? "underline" : ""
                }`}
              >
                {sideCards[1].title}
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
