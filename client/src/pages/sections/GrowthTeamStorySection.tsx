import CalendlyEmbed from "@/components/CalendlyEmbed";

export const GrowthTeamStorySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f2f2f2] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        <h2 className="text-center [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1.05] tracking-[3px] text-[#191919] sm:text-[40px] sm:tracking-[4.5px] lg:text-[56px] lg:tracking-[5px]">
          SCHEDULE YOUR INTERVIEW
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="flex flex-col text-black">
            <h3 className="[font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[1.15] tracking-[0] text-black sm:text-[32px] lg:text-[38px]">
              This is not a recruiting call, this is an interview.
            </h3>
            <div className="mt-6 [font-family:'SF_Pro-Regular',Helvetica] text-[16px] font-normal leading-[1.4] text-black sm:text-[18px] lg:text-[20px] lg:leading-[1.3] xl:text-[23px] 2xl:text-[26px] 2xl:leading-[1.25]">
              <p>You won't hear a sales pitch from us. Everything you want to know about our team is in our ‘Level up your Business’ flip-book above. You can see our compensation model, training & even lead sources.</p>
              <p className="mt-6">
                We are not for everyone. We offer a lot from our agents and we
                expect a lot in return.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-black"
                  />
                  <span>We only hire full-time agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-black"
                  />
                  <span>Our agents follow our proven process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-black"
                  />
                  <span>All agents are Team Players</span>
                </li>
              </ul>
              <p className="mt-6">
                If you feel like you want to take the next step and book your
                interview, schedule the day and time that works best for you.
              </p>
            </div>
          </div>

          <div
            id="calendly-widget"
            className="flex w-full scroll-mt-24 justify-center lg:-mt-12 lg:justify-end"
          >
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};
