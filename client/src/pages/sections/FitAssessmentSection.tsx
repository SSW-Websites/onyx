import { Card, CardContent } from "@/components/ui/card";

const assessmentItems = [
  "FULL-TIME IN REAL ESTATE",
  "BASED IN OC, SOUTH LA, OR RIVERSIDE",
  "OPEN TO FOLLOWING A PROVEN PROCESS",
  "LOOKING FOR TEAM-GENERATED OPPORTUNITIES",
  "READY FOR MORE ACCOUNTABILITY AND SUPPORT",
];

export const FitAssessmentSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Card className="h-auto w-full border-0 bg-transparent shadow-none rounded-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(180px,443px)_1fr] md:gap-4 lg:gap-6">
              <header className="flex items-center justify-center md:justify-end md:pr-4 lg:pr-5">
                <h2 className="text-center md:text-right [font-family:'Montserrat',Helvetica] font-bold text-black text-[24px] leading-[0.95] tracking-[2px] sm:text-[44px] sm:leading-[0.92] sm:tracking-[4.5px] lg:text-[61.7px] lg:tracking-[6.79px]">
                  THIS
                  <br />
                  IS FOR AGENTS
                  <br />
                  WHO ARE SERIOUS
                  <br />
                  ABOUT GROWTH
                </h2>
              </header>
              <div className="border-l border-black/30 pl-3 sm:pl-4 md:pl-5">
                <ul className="m-0 list-none p-0">
                  {assessmentItems.map((item, index) => (
                    <li
                      key={item}
                      className="border-t border-black/15 first:border-t border-b-0 last:border-b border-black/15"
                    >
                      <div
                        className={[
                          "flex items-center [font-family:'Montserrat',Helvetica] font-bold text-black tracking-[0]",
                          index === 2
                            ? "min-h-[62px] text-[18px] leading-[1.15] sm:min-h-[72px] sm:text-[24px] lg:min-h-[84px] lg:text-[37px] lg:leading-[100.1px]"
                            : "min-h-[52px] text-[12px] leading-[1.2] sm:min-h-[60px] sm:text-[18px] lg:min-h-[85px] lg:text-[27.7px] lg:leading-[75.1px]",
                        ].join(" ")}
                      >
                        <span>{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
