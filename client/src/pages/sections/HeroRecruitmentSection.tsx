const heroRecruitmentContent = {
  logo: {
    alt: "Onyx Homes",
    src: "/figmaAssets/image-1.png",
  },
};

export const HeroRecruitmentSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="mx-auto flex min-h-[80px] sm:min-h-[100px] lg:min-h-[122px] w-full max-w-[1920px] items-center px-5 py-4 sm:px-8 sm:py-5 lg:px-[98px]">
        <div className="flex shrink-0 items-center">
          <img
            className="h-[34px] sm:h-[42px] w-auto object-contain"
            alt={heroRecruitmentContent.logo.alt}
            src={heroRecruitmentContent.logo.src}
            width="176"
            height="42"
          />
        </div>
      </div>
    </header>
  );
};
