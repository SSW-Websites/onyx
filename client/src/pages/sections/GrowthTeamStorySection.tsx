import CalendlyEmbed from "@/components/CalendlyEmbed";

export const GrowthTeamStorySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f2f2f2] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        <h2 className="text-center [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1.05] tracking-[3px] text-[#191919] sm:text-[40px] sm:tracking-[4.5px] lg:text-[56px] lg:tracking-[5px]">
          SCHEDULE YOUR INTERVIEW
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="flex flex-col text-[#191919]">
            <h3 className="[font-family:'SF_Pro-Bold',Helvetica] text-[26px] font-bold leading-[1.15] tracking-[0] sm:text-[32px] lg:text-[38px]">
              This is not a recruiting call, this is an interview.
            </h3>
            <p className="mt-5 [font-family:'SF_Pro-Regular',Helvetica] font-normal sm:text-[17px] lg:text-[18px] text-[26px]">
              You won&apos;t hear a sales pitch from us. Everything you want to
              know about our team is in our &lsquo;Level up your Business&rsquo;
              flip-book below. You can see our compensation model, training
              &amp; even lead sources.
            </p>
            <p className="mt-5 [font-family:'SF_Pro-Regular',Helvetica] text-[16px] font-normal leading-[1.55] sm:text-[17px] lg:text-[18px]">
              We are not for everyone. We offer a lot from our agents and we
              expect a lot in return.
            </p>
            <ul className="mt-5 flex flex-col gap-2 [font-family:'SF_Pro-Regular',Helvetica] text-[16px] font-normal leading-[1.55] sm:text-[17px] lg:text-[18px]">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#191919]"
                />
                <span>We only hire full-time agents</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#191919]"
                />
                <span>Our agents follow our proven process</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#191919]"
                />
                <span>All agents are Team Players</span>
              </li>
            </ul>
            <p className="mt-5 [font-family:'SF_Pro-Regular',Helvetica] text-[16px] font-normal leading-[1.55] sm:text-[17px] lg:text-[18px]">
              If you feel like you want to take the next step and book your
              interview, schedule the day and time that works best for you.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};
