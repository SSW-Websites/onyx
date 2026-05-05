import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const heroRecruitmentContent = {
  logo: {
    alt: "Onyx Homes",
    src: "/figmaAssets/image-1.png",
  },
};

export const HeroRecruitmentSection = (): JSX.Element => {
  const [location] = useLocation();
  const isThankYou = location.startsWith("/thank-you");

  const handleBookClick = () => {
    const target = document.getElementById("calendly-widget");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#calendly-widget";
    }
  };

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
        {!isThankYou && (
          <Button
            type="button"
            onClick={handleBookClick}
            data-testid="button-navbar-book"
            className="h-auto rounded-none bg-black px-5 py-3 [font-family:'Montserrat',Helvetica] text-[11px] font-bold uppercase tracking-[1.5px] text-white hover:bg-black/90 active:bg-black/80 transition-colors sm:px-8 sm:py-4 sm:text-[13px] sm:tracking-[2px] lg:px-10 lg:text-[14px] lg:tracking-[2.2px]"
          >
            Book Your Interview
          </Button>
        )}
      </div>
    </header>
  );
};
