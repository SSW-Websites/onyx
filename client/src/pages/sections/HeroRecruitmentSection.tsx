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
    <header className="w-full bg-white border-b border-gray-100">
      <div className="mx-auto flex min-h-[80px] sm:min-h-[100px] lg:min-h-[122px] w-full max-w-[1920px] items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 lg:px-[98px]">
        <div className="flex shrink-0 items-center">
          <img
            className="h-[34px] sm:h-[42px] w-auto object-contain"
            alt={heroRecruitmentContent.logo.alt}
            src={heroRecruitmentContent.logo.src}
            width="176"
            height="42"
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <p className="hidden md:block font-['Inter',sans-serif] text-[15.8px] font-normal leading-normal text-black">
            {heroRecruitmentContent.message}
          </p>
          <a
            href="tel:9498676935"
            className="flex items-center justify-center border border-black px-4 py-2 sm:px-5 sm:py-3 font-['Inter',sans-serif] text-[13px] sm:text-[15.8px] font-normal leading-normal text-black hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {heroRecruitmentContent.phone}
          </a>
        </div>
      </div>
    </header>
  );
};
