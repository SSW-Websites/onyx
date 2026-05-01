import { Card, CardContent } from "@/components/ui/card";

type CoreValue = {
  id: string;
  title: string;
  paragraph: string;
};

const values: CoreValue[] = [
  {
    id: "team-player",
    title: "TEAM PLAYER",
    paragraph:
      "Collaboration leads to the biggest wins. Our culture celebrates when agents are open and share what is working.",
  },
  {
    id: "fail-forward",
    title: "FAIL FORWARD",
    paragraph:
      "Part of leveling up means that you'll be failing. Failing forward means that even when something doesn't work, you're making progress.",
  },
  {
    id: "action-taker",
    title: "ACTION TAKER",
    paragraph:
      "Productivity leads to deals. We focus on building an environment of productive people.",
  },
  {
    id: "growth-mindset",
    title: "GROWTH MINDSET",
    paragraph:
      "Growth has been a huge part of our company from day one. Constant improvement is what we strive for and is expected from our agents.",
  },
];

const BACKGROUND_IMAGE = "/figmaAssets/image-gain.png";

export const CoreValuesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f2f2f2] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center">
        <h2 className="text-center [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1.05] tracking-[3px] text-[#191919] sm:text-[40px] sm:tracking-[4.5px] lg:text-[56px] lg:tracking-[5px]">
          CORE VALUES
        </h2>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {values.map((value) => (
            <Card
              key={value.id}
              data-testid={`card-core-value-${value.id}`}
              className="flex h-full flex-col rounded-none border-0 bg-[#172734] shadow-none"
            >
              <CardContent className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden p-0 sm:min-h-[320px] lg:min-h-[360px]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  alt={value.title}
                  src={BACKGROUND_IMAGE}
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/55"
                />
                <div className="relative z-10 flex w-full flex-col items-center justify-center p-6 text-center sm:p-8 lg:p-7">
                  <h3 className="[font-family:'Montserrat',Helvetica] text-[22px] font-bold leading-[1.05] tracking-[1.5px] text-white sm:text-[26px] lg:text-[28px]">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-[280px] [font-family:'SF_Pro-Light',Helvetica] text-[15px] font-light leading-[1.4] tracking-[0] text-white sm:text-[16px] lg:text-[17px]">
                    {value.paragraph}
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
