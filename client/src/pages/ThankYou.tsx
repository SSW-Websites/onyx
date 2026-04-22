import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AgentCriteriaSection } from "./sections/AgentCriteriaSection";
import { HeroRecruitmentSection } from "./sections/HeroRecruitmentSection";

const checklist = [
  "Confirm the calendar invite in your inbox",
  "Add the interview to your calendar",
  "Watch the short video below before the call",
  "Come ready with questions",
];

export const ThankYou = (): JSX.Element => {
  return (
    <main className="relative flex w-full flex-col bg-white">
      <HeroRecruitmentSection />

      <section
        aria-label="Thank you confirmation"
        className="w-full bg-[#f2f2f2] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1085px] flex-col items-center text-center">
          <h1 className="max-w-[920px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-black sm:text-[44px] sm:leading-[0.92] sm:tracking-[4.5px] lg:text-[58px] lg:tracking-[5.5px]">
            THANKS, YOUR INTERVIEW WITH ONYX HOMES IS SCHEDULED.
          </h1>
          <p className="mt-5 max-w-[820px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.4] text-black sm:text-[18px] md:mt-6 md:text-[20px] lg:text-[22px]">
            You&rsquo;re booked. Here&rsquo;s what to do before your interview:
          </p>
          <ul className="mx-auto mt-4 flex w-fit list-disc flex-col gap-1 pl-5 text-left [font-family:'SF_Pro-Regular',Helvetica] text-[14px] font-normal leading-[1.5] text-black sm:text-[16px] md:mt-6 md:text-[18px] lg:text-[20px]">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8 w-full max-w-[975px] aspect-video rounded-none overflow-hidden bg-[#1e1e1e]">
            <div className="flex h-full w-full items-center justify-center">
              <svg
                aria-hidden="true"
                className="h-16 w-16 text-white/40 sm:h-20 sm:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <AgentCriteriaSection />

      <section
        aria-label="Why this conversation matters"
        className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
          <h2 className="text-center [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1] tracking-[2px] text-black sm:text-[40px] sm:tracking-[3px] lg:text-left lg:text-[52px] lg:leading-[0.95] lg:tracking-[4.5px]">
            WHY THIS CONVERSATION IS WORTH YOUR TIME
          </h2>
          <p className="max-w-[640px] text-center [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-black sm:text-[18px] lg:mx-0 lg:text-left lg:text-[20px] lg:leading-[1.45]">
            Onyx Homes is built for serious agents who want more than just a
            place to hang their license. This interview is designed to show you
            how the opportunity works and see if there&rsquo;s a fit on both
            sides.
          </p>
        </div>
      </section>

      <section
        aria-label="Join the free community"
        className="relative w-full bg-[linear-gradient(178deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)]"
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="max-w-[520px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-white sm:text-[40px] sm:tracking-[3px] lg:text-[52px] lg:tracking-[4px]">
              WANT EXTRA VALUE BEFORE THE CALL?
            </h2>
            <p className="mt-5 max-w-[520px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white sm:text-[17px] lg:text-[18px]">
              Join Christian Stubbs&rsquo; free Skool Community, Start to Finish
              in Real Estate, for practical training on sales, marketing, and
              leadership.
            </p>
            <p className="mt-4 max-w-[520px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white sm:text-[17px] lg:text-[18px]">
              Inside, you&rsquo;ll get free courses, weekly live calls, and
              access to Christian, his team, and a community of agents focused
              on growth.
            </p>
            <Button
              type="button"
              asChild
              className="mt-8 h-auto min-h-0 rounded-none bg-white px-8 py-4 text-black shadow-none transition-colors hover:bg-gray-100 active:bg-gray-200 sm:px-10 sm:py-5"
            >
              <a
                href="https://www.skool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] text-[14px] font-bold uppercase tracking-[2px] text-black sm:text-[16px] sm:tracking-[2.5px]"
              >
                Join the Free Community
              </a>
            </Button>
          </div>
          <Card className="overflow-hidden rounded-none border-0 bg-transparent shadow-none">
            <CardContent className="relative aspect-[4/3] w-full p-0 lg:aspect-[5/4]">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center"
                alt="Onyx Homes team"
                src="/figmaAssets/screenshot-2026-04-16-at-7-05-09-pm-1.png"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full bg-[#d5d5d5]">
        <Card className="rounded-none border-0 bg-transparent shadow-none">
          <CardContent className="flex min-h-28 items-center justify-center px-4 py-6">
            <p className="whitespace-nowrap font-['SF_Pro-Regular',sans-serif] text-center text-[11px] sm:text-lg sm:whitespace-normal lg:text-[26px] font-normal leading-normal text-[#00020f]">
              Christian Stubbs | Realtor® CA | DRE LIC# 02082942 | Onyx Homes
            </p>
          </CardContent>
        </Card>
      </footer>
    </main>
  );
};

export default ThankYou;
