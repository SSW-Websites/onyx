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
      <div className="mx-auto flex w-full max-w-[937px] flex-col items-start text-left sm:items-center sm:text-center">
        <div className="mb-5 flex items-center justify-start sm:justify-center">
          <div className="flex items-center">
            {agentAvatars.map((avatar, index) => (
              <div
                key={avatar.src + index}
                className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-[2.34px] border-solid border-[#f2f2f2] bg-[#f9ffed] ${
                  index > 0 ? "-ml-[7px]" : ""
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
          <p className="ml-[13px] text-left [font-family:'SF_Pro-Medium',Helvetica] text-[19.6px] font-normal leading-[21.9px] tracking-[-0.98px] text-[#1f3040] max-sm:text-[14px] max-sm:leading-[18px] max-sm:tracking-[-0.4px]">
            <span className="font-medium tracking-[-0.19px]">
              For full-time real estate agents in
            </span>
            <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold tracking-[-0.19px]">
              {" "}
              OC, South LA, and Riverside
            </span>
          </p>
        </div>
        <h2 className="max-w-[937px] [font-family:'Montserrat',Helvetica] text-[36px] font-bold leading-[0.92] tracking-[3.2px] text-[#00020f] sm:text-[48px] sm:tracking-[5px] lg:text-[61.7px] lg:tracking-[6.79px]">
          BOOK YOUR INTERVIEW WITH ONYX HOMES
        </h2>
        <p className="mt-6 max-w-[863px] [font-family:'SF_Pro-Regular',Helvetica] text-[18px] font-normal leading-normal tracking-[0] text-[#00020f] sm:text-[22px] lg:mt-[28px] lg:text-[26px]">
          Meet with the team, get a clear look at the opportunity, and see if
          Onyx Homes is the right fit for your next step.
        </p>
        <Button
          type="button"
          onClick={() => document.getElementById("growth-team-story")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 h-auto min-h-[64px] w-full max-w-[750px] rounded-none bg-black px-6 py-5 hover:bg-black/90 active:bg-black/80 transition-colors sm:min-h-[88px] sm:px-10 sm:py-7 lg:mt-[41px] lg:min-h-[133px]"
        >
          <span className="[font-family:'Montserrat',Helvetica] text-[20px] font-bold leading-[1] tracking-[2.2px] text-[#f2f2f2] sm:text-[28px] sm:tracking-[3px] lg:text-[37.6px] lg:leading-[34.7px] lg:tracking-[4.14px]">
            BOOK YOUR INTERVIEW
          </span>
        </Button>
      </div>
    </section>
  );
};
