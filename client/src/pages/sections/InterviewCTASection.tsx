import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type CardData = {
  id: string;
  title: string;
  paragraph: JSX.Element;
  image: string;
};

const cards: CardData[] = [
  {
    id: "process",
    title: "Proven Sales Process",
    paragraph: (
      <>
        Turn more leads into clients with a clear path filled with opportunities
        and support.
      </>
    ),
    image: "/figmaAssets/image-stuck.png",
  },
  {
    id: "leads",
    title: "Lead Opportunities",
    paragraph: (
      <>
        Get busy, fast. Leverage our marketing efforts and partnerships to grow.
      </>
    ),
    image: "/figmaAssets/image-instead.png",
  },
  {
    id: "accountability",
    title: "Built-in Accountability",
    paragraph: (
      <>
        To keep you on the right track. Our benchmarks and standards keep you on
        a path to success.
      </>
    ),
    image: "/figmaAssets/image-gain.png",
  },
  {
    id: "support",
    title: "Support",
    paragraph: (
      <>
        Leadership and mentorship so you stay focused on selling.
        <br />
        &nbsp;
      </>
    ),
    image: "/figmaAssets/image-support.png",
  },
];

export const InterviewCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(179deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)]">
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col px-6 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-20 lg:px-14 lg:pb-20 xl:px-16">
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-[235px] w-[237px] -translate-x-1/2 bg-[#589eff] blur-[237.75px]" />
        <header className="relative z-10 grid grid-cols-1 gap-6 pb-8 text-center sm:gap-8 sm:pb-12 sm:text-left lg:grid-cols-[minmax(0,809px)_minmax(320px,485px)] lg:items-start lg:justify-between lg:gap-10 lg:pb-24">
          <h2 className="mx-auto max-w-[809px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2.5px] text-white sm:mx-0 sm:text-[48px] sm:leading-[0.92] sm:tracking-[5.2px] lg:text-[61.7px] lg:tracking-[6.79px]">
            WHY SERIOUS AGENTS CHOOSE ONYX HOMES
          </h2>
          <div className="flex justify-center sm:justify-start lg:justify-center">
            <Button
              type="button"
              onClick={() =>
                document
                  .getElementById("calendly-widget")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-auto min-h-0 w-full max-w-[485px] rounded-none bg-white px-6 py-4 text-black shadow-[0px_2px_6px_#010e1920,0px_4px_12px_#010e1915] transition-colors hover:bg-gray-50 active:bg-gray-100 sm:py-5 sm:shadow-[0px_3px_8px_#010e1925,0px_6px_16px_#010e1918]"
            >
              <span className="w-full [font-family:'Montserrat',Helvetica] text-center text-[16px] font-bold leading-[1.2] tracking-[2px] text-black sm:text-[18px] lg:text-[20px] lg:tracking-[2.2px]">
                BOOK YOUR INTERVIEW
              </span>
            </Button>
          </div>
        </header>
        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              data-testid={`card-${card.id}`}
              className="flex h-full flex-col rounded-none border border-white/20 bg-[#172734] shadow-none"
            >
              <CardContent className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden p-0 sm:min-h-[320px] lg:min-h-[360px]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  alt={card.title}
                  src={card.image}
                  loading="lazy"
                />
                <div className="relative z-10 flex w-full flex-col items-center justify-center p-6 text-center sm:p-8 lg:p-7">
                  <h3 className="[font-family:'Montserrat',Helvetica] text-[22px] font-bold leading-[1.05] tracking-[0] text-[#233240] sm:text-[26px] lg:text-[28px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[280px] [font-family:'SF_Pro-Light',Helvetica] text-[15px] font-light leading-[1.35] tracking-[0] text-[#233240] sm:text-[16px] lg:text-[17px]">
                    {card.paragraph}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
