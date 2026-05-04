import { Button } from "@/components/ui/button";

const agentAvatars = [
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-people-in-orange-county--611-1.png",
    alt: "Agent portrait 1",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -26,
    offsetY: -25,
  },
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-single-person-in-orange--611-3.png",
    alt: "Agent portrait 2",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -58,
    offsetY: -38,
  },
  {
    src: "/figmaAssets/freepik--make-3-different-photos-of-single-person-in-orange--611-3.png",
    alt: "Agent portrait 3",
    imgWidth: 150,
    imgHeight: 86,
    offsetX: -113,
    offsetY: -25,
  },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[937px] flex-col items-center text-center">
        <div className="mb-5 flex items-center justify-center">
          <div className="flex items-center">
            {agentAvatars.map((avatar, index) => (
              <div
                key={avatar.src + index}
                className={`relative h-6 w-6 shrink-0 overflow-hidden rounded-full border-[1.5px] border-solid border-[#f2f2f2] bg-[#f9ffed] sm:h-9 sm:w-9 sm:border-[2.34px] ${
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
          <p className="ml-2 whitespace-nowrap text-left [font-family:'SF_Pro-Medium',Helvetica] text-[9.5px] font-normal tracking-[-0.2px] text-[#1f3040] sm:ml-[13px] sm:whitespace-normal sm:text-[19.6px] sm:leading-[21.9px] sm:tracking-[-0.98px]">
            <span className="font-medium tracking-[-0.19px]">
              For full-time real estate agents in
            </span>
            <span
              style={{ fontWeight: 800 }}
              className="tracking-[-0.19px]"
            >
              {" "}
              OC, South LA, and Riverside
            </span>
          </p>
        </div>
        <h2 className="max-w-[937px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-[#00020f] sm:text-[48px] sm:leading-[0.92] sm:tracking-[5px] lg:text-[61.7px] lg:tracking-[6.79px]">
          BOOK YOUR INTERVIEW WITH ONYX HOMES
        </h2>
        <p className="mt-6 max-w-[863px] [font-family:'SF_Pro-Regular',Helvetica] text-[18px] font-normal leading-normal tracking-[0] text-[#00020f] sm:text-[22px] lg:mt-[28px] lg:text-[26px]">
          Meet with the team, get a clear look at the opportunity, and see if
          Onyx Homes is the right fit for your next step.
        </p>
        <Button
          type="button"
          onClick={() => document.getElementById("calendly-widget")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 h-auto min-h-[48px] w-full max-w-[750px] rounded-none bg-black px-6 py-4 hover:bg-black/90 active:bg-black/80 transition-colors sm:min-h-[56px] sm:px-10 sm:py-5 lg:mt-[41px] lg:min-h-[72px]"
        >
          <span className="[font-family:'Montserrat',Helvetica] text-[16px] font-bold leading-[1] tracking-[2px] text-[#f2f2f2] sm:text-[20px] sm:tracking-[2.2px] lg:text-[24px] lg:leading-[1] lg:tracking-[2.6px]">
            BOOK YOUR INTERVIEW
          </span>
        </Button>
      </div>
    </section>
  );
};
