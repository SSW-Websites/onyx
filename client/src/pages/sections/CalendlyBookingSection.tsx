import { useEffect } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL = "https://calendly.com/d/cvs7-hd7-r63/intro-to-onyx-homes-ssw";

export const CalendlyBookingSection = (): JSX.Element => {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      aria-label="Book your interview"
      className="relative w-full overflow-hidden bg-[linear-gradient(179deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="max-w-[900px] text-center [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-white sm:text-[40px] sm:tracking-[3px] md:text-[48px] lg:text-[58px] lg:tracking-[5px]">
          BOOK YOUR INTERVIEW
        </h2>
        <p className="mt-5 max-w-[720px] text-center [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white/85 sm:text-[17px] lg:text-[18px]">
          Pick a time that works for you and we&rsquo;ll meet to see if Onyx
          Homes is the right fit.
        </p>
        <div
          className="calendly-inline-widget mt-8 w-full overflow-hidden bg-white"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
          data-testid="calendly-widget"
        />
      </div>
    </section>
  );
};
