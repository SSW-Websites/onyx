import { useEffect } from "react";

export const GrowthTeamStorySection = (): JSX.Element => {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(179deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%),linear-gradient(0deg,rgba(59,76,91,1)_0%,rgba(59,76,91,1)_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
        <header className="flex w-full max-w-[953px] flex-col items-center text-center">
          <h2 className="[font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[0.95] tracking-[3px] text-white sm:text-[40px] sm:tracking-[4.5px] lg:text-[61.7px] lg:tracking-[6.79px]">
            SEE IF ONYX HOMES
            <br />
            IS THE RIGHT FIT
          </h2>
          <p className="mt-5 max-w-[953px] [font-family:'SF_Pro-Regular',Helvetica] text-[14px] font-normal leading-[1.35] tracking-[0] text-white sm:text-[18px] lg:mt-8 lg:text-[26px] lg:leading-normal">
            This is not a generic recruiting call. It&apos;s an interview to see
            if there&apos;s a fit on both sides. If you&apos;re looking for more
            structure, more opportunity, and a team that actually supports your
            growth, book a time below.
          </p>
        </header>
        <div className="mt-8 flex w-full justify-center sm:mt-10 lg:mt-[58px]">
          <div
            className="calendly-inline-widget w-full max-w-[974px]"
            data-url="https://calendly.com/d/cvs7-hd7-r63/intro-to-onyx-homes-ssw"
            style={{ minWidth: 320, height: 700 }}
            data-testid="iframe-calendly"
          />
        </div>
      </div>
    </section>
  );
};
