import { Button } from "@/components/ui/button";

const heroRecruitmentContent = {
  logo: {
    alt: "Onyx Homes",
    src: "/figmaAssets/image-1.png",
  },
  message: "Questions about joining the team? Call or text us at",
  phone: "(949) 867-6935",
};

export const HeroRecruitmentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[122px] w-full items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-[98px]">
        <div className="flex shrink-0 items-center">
          <img
            className="h-[42px] w-44 object-cover"
            alt={heroRecruitmentContent.logo.alt}
            src={heroRecruitmentContent.logo.src}
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 text-right">
          <p className="[font-family:'Inter',Helvetica] text-[15.8px] font-normal leading-[normal] tracking-[0] text-black">
            {heroRecruitmentContent.message}
          </p>
          <Button
            variant="outline"
            className="h-auto rounded-none border-[0.83px] border-black px-5 py-[13px] [font-family:'Inter',Helvetica] text-[15.8px] font-normal leading-[normal] tracking-[0] text-black hover:bg-transparent"
          >
            {heroRecruitmentContent.phone}
          </Button>
        </div>
      </div>
    </section>
  );
};
