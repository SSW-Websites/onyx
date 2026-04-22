import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "$915M+",
    label: "SALES VOLUME",
  },
  {
    value: "6 YEARS",
    label: "HELPING AGENTS GROW",
  },
  {
    value: "1K+",
    label: "DEALS CLOSED",
  },
];

export const AgentCriteriaSection = (): JSX.Element => {
  return (
    <section
      aria-label="Agent performance statistics"
      className="w-full bg-[linear-gradient(178deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-3 sm:px-6 lg:px-8">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid min-h-[181px] grid-cols-3 items-center gap-x-6 sm:gap-x-10 lg:gap-x-16">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-w-0 flex-col items-center justify-center px-4 py-8 text-center sm:px-8 lg:px-12 ${
                    index < stats.length - 1 ? "border-r border-white/60" : ""
                  }`}
                >
                  <p className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[30px] leading-none tracking-[3px] sm:text-[40px] sm:tracking-[4.4px] lg:text-[53px] lg:tracking-[5.83px]">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-2 [font-family:'Montserrat',Helvetica] font-bold text-white text-[12px] leading-[1.15] tracking-[0.6px] sm:text-[14px] sm:tracking-[0.7px] lg:text-[20.6px] lg:leading-[49px] lg:tracking-[1.03px] ${
                      stat.label === "HELPING AGENTS GROW"
                        ? "whitespace-normal lg:whitespace-nowrap"
                        : "whitespace-nowrap"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
