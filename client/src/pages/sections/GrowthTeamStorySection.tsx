import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const calendarColumns = [
  {
    day: "MON",
    dates: ["", "7", "14", "21", "28"],
  },
  {
    day: "TUE",
    dates: ["1", "8", "15", "22", "29"],
  },
  {
    day: "WED",
    dates: ["2", "9", "16", "23", "30"],
  },
  {
    day: "THU",
    dates: ["3", "10", "17", "24"],
  },
  {
    day: "FRI",
    dates: ["4", "11", "18", "25"],
  },
  {
    day: "SAT",
    dates: ["5", "12", "19", "26"],
  },
  {
    day: "SUN",
    dates: ["6", "13", "20", "27"],
  },
];

const highlightedDates = new Set(["23", "24", "25", "26", "29", "30"]);
const dottedDates = new Set(["22"]);

export const GrowthTeamStorySection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(179deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%),linear-gradient(0deg,rgba(59,76,91,1)_0%,rgba(59,76,91,1)_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
        <header className="flex w-full max-w-[953px] flex-col items-center text-center">
          <h2 className="[font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[0.95] tracking-[3px] text-white sm:text-[40px] sm:tracking-[4.5px] lg:text-[61.7px] lg:tracking-[6.79px]">
            SEE IF ONYX HOMES
            <br />
            IS THE RIGHT FIT
          </h2>
          <p className="mt-5 max-w-[953px] [font-family:'SF_Pro-Regular',Helvetica] text-[14px] font-normal leading-[1.35] tracking-[0] text-white sm:text-[18px] lg:mt-8 lg:text-[26px] lg:leading-normal">
            This is not a generic recruiting call. It&apos;s an interview to see
            if there&apos;s a fit on both sides. If you&apos;re looking for more
            structure, more opportunity, and a
            team that actually supports your growth, book a time below.
          </p>
        </header>
        <div className="mt-8 flex w-full justify-center sm:mt-10 lg:mt-[58px]">
          <Card className="w-full max-w-[974px] rounded-[20.51px] border-[0.85px] border-[#1a1a1a1a] bg-white shadow-[0px_10.25px_22.21px_#0000001a,0px_40.16px_40.16px_#00000017,0px_89.71px_53.83px_#0000000d,0px_159.77px_64.08px_#00000003,0px_250.34px_70.06px_transparent]">
            <CardContent className="p-0">
              <div className="grid min-h-[720px] grid-cols-1 lg:grid-cols-[487px_1px_minmax(0,1fr)]">
                <aside className="flex flex-col justify-between p-[29px]">
                  <div className="flex flex-col gap-[29.22px]">
                    <div className="flex flex-col gap-[29.22px]">
                      <div className="flex flex-col gap-[9.74px]">
                        <h3 className="[font-family:'SF_Pro-Bold',Helvetica] text-[34.1px] font-bold leading-[51.1px] tracking-[0] text-[#191919]">
                          Reservation Page
                        </h3>
                      </div>
                      <div className="flex flex-col gap-[14.61px]">
                        <div className="flex items-center gap-[9.74px]">
                          <img
                            className="h-[24.35px] w-[24.35px]"
                            alt="Duration"
                            src="/figmaAssets/icon-2.svg"
                          />
                          <p className="flex-1 [font-family:'SF_Pro-Bold',Helvetica] text-[19.5px] font-bold leading-[29.2px] tracking-[0] text-[#1a1a1a99]">
                            30 min
                          </p>
                        </div>
                        <div className="flex items-center gap-[9.74px]">
                          <img
                            className="h-[24.35px] w-[24.35px]"
                            alt="Phone call"
                            src="/figmaAssets/vertical-container.svg"
                          />
                          <p className="flex-1 [font-family:'SF_Pro-Bold',Helvetica] text-[19.5px] font-bold leading-[29.2px] tracking-[0] text-[#1a1a1a99]">
                            Phone call
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="max-w-[428.56px] [font-family:'SF_Pro-Regular',Helvetica] text-[19.5px] font-normal leading-[29.2px] tracking-[0] text-[#191919]">
                      This is an example of a meeting you would have with a
                      potential customer to demonstrate your product.
                    </p>
                  </div>
                  <footer className="flex w-full max-w-[428.56px] items-start justify-between gap-4">
                    <button
                      type="button"
                      className="[font-family:'SF_Pro-Regular',Helvetica] text-[17px] font-normal leading-[25.6px] tracking-[0] text-[#0069ff]"
                    >
                      Cookie settings
                    </button>
                    <button
                      type="button"
                      className="[font-family:'SF_Pro-Regular',Helvetica] text-[17px] font-normal leading-[25.6px] tracking-[0] text-[#191919]"
                    >
                      Report abuse
                    </button>
                  </footer>
                </aside>
                <div className="hidden bg-[#1a1a1a1a] lg:block" />
                <section className="flex flex-col p-[29px] pt-[39px] lg:pl-[30px] lg:pr-[38px]">
                  <h3 className="[font-family:'SF_Pro-Bold',Helvetica] text-[24.4px] font-bold leading-[36.5px] tracking-[0] text-[#191919]">
                    Select a Date &amp; Time
                  </h3>
                  <div className="mt-[29px] flex flex-col gap-[19.48px]">
                    <div className="flex w-full max-w-[418.82px] items-center justify-between">
                      <button type="button" aria-label="Previous month">
                        <img
                          className="h-[46.27px] w-[46.27px]"
                          alt="Previous"
                          src="/figmaAssets/previous.svg"
                        />
                      </button>
                      <p className="[font-family:'SF_Pro-Regular',Helvetica] text-[19.5px] font-normal leading-[29.2px] tracking-[0] text-[#191919]">
                        April 2024
                      </p>
                      <button type="button" aria-label="Next month">
                        <img
                          className="h-[46.27px] w-[46.27px]"
                          alt="Next"
                          src="/figmaAssets/next.svg"
                        />
                      </button>
                    </div>
                    <div className="grid w-full max-w-[418.82px] grid-cols-7 gap-x-[7.31px]">
                      {calendarColumns.map((column) => (
                        <div
                          key={column.day}
                          className="flex flex-col items-center gap-[19.48px]"
                        >
                          <div className="[font-family:'SF_Pro-Regular',Helvetica] text-center text-[14.6px] font-normal leading-[14.6px] tracking-[0] text-[#191919]">
                            {column.day}
                          </div>
                          <div className="flex flex-col items-center gap-[9.74px]">
                            {column.dates.map((date, index) => {
                              const isHighlighted = highlightedDates.has(date);
                              const hasDot = dottedDates.has(date);

                              return (
                                <button
                                  key={`${column.day}-${date || index}`}
                                  type="button"
                                  aria-label={
                                    date
                                      ? `${column.day} ${date}`
                                      : `${column.day} empty`
                                  }
                                  disabled={!date}
                                  className={`relative flex h-[53.57px] w-[53.57px] items-center justify-center rounded-[1216.28px] ${
                                    isHighlighted
                                      ? "bg-[#0069ff14]"
                                      : "bg-transparent"
                                  } ${!date ? "cursor-default" : "cursor-pointer"}`}
                                >
                                  <span
                                    className={`[font-family:'SF_Pro-Regular',Helvetica] text-center text-[19.5px] leading-[29.2px] tracking-[0] ${
                                      isHighlighted
                                        ? "[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#0060e6]"
                                        : "font-normal text-[#1a1a1a9c]"
                                    }`}
                                  >
                                    {date}
                                  </span>
                                  {hasDot && (
                                    <span className="absolute bottom-[10px] h-[5px] w-[5px] rounded-[2.44px] bg-[#1a1a1a9c]" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-[34px] flex flex-col gap-[7.31px]">
                    <h4 className="[font-family:'SF_Pro-Bold',Helvetica] text-[19.5px] font-bold leading-[29.2px] tracking-[0] text-[#191919]">
                      Time zone
                    </h4>
                    <button
                      type="button"
                      className="flex w-fit items-center gap-[4.87px]"
                    >
                      <span className="flex items-center gap-[14.61px]">
                        <img
                          className="h-[17.05px] w-[17.05px]"
                          alt="Time zone"
                          src="/figmaAssets/icon.svg"
                        />
                        <span className="[font-family:'SF_Pro-Regular',Helvetica] text-center text-[17px] font-normal leading-[25.6px] tracking-[0] text-[#191919]">
                          Central European Time (8:11pm)
                        </span>
                      </span>
                      <img
                        className="h-[9.74px] w-[9.74px]"
                        alt="Expand"
                        src="/figmaAssets/icon-1.svg"
                      />
                    </button>
                  </div>
                  <div className="mt-auto pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-auto rounded-[1216.28px] border-[1.22px] border-[#191919] bg-transparent px-[19.48px] py-[14.61px] [font-family:'SF_Pro-Regular',Helvetica] text-[17px] font-normal leading-[25.6px] tracking-[0] text-[#191919] hover:bg-transparent"
                    >
                      <img
                        className="h-[19.48px] w-[19.48px]"
                        alt="Troubleshooting"
                        src="/figmaAssets/icon-3.svg"
                      />
                      Troubleshooting
                    </Button>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
