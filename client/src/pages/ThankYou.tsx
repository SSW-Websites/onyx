import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AgentCriteriaSection } from "./sections/AgentCriteriaSection";
import { CoreValuesSection } from "./sections/CoreValuesSection";
import { HeroRecruitmentSection } from "./sections/HeroRecruitmentSection";
import { OnyxOfferPacketSection } from "./sections/OnyxOfferPacketSection";

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
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#233240] sm:h-16 sm:w-16 md:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="max-w-[920px] [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-black sm:text-[44px] sm:leading-[0.92] sm:tracking-[4.5px] lg:text-[58px] lg:tracking-[5.5px]">
            THANKS, YOUR INTERVIEW WITH ONYX HOMES IS SCHEDULED.
          </h1>
          <div className="mx-auto mt-8 w-full max-w-[620px] border border-black/10 bg-white px-6 py-6 sm:mt-10 sm:px-10 sm:py-8 md:px-12 md:py-10">
            <p className="[font-family:'Montserrat',Helvetica] text-[14px] font-bold uppercase tracking-[1.5px] text-[#233240] sm:text-[16px] sm:tracking-[2px]">
              Before your interview:
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-left [font-family:'SF_Pro-Regular',Helvetica] text-[14px] font-normal leading-[1.5] text-black sm:mt-6 sm:gap-4 sm:text-[16px] md:text-[18px]">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 shrink-0 text-[#233240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full max-w-[975px] aspect-video overflow-hidden bg-black sm:mt-10">
            <iframe
              src="https://fast.wistia.net/embed/iframe/tz3rioagbp?seo=true&videoFoam=true"
              title="Onyx Homes interview prep"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="h-full w-full border-0"
              data-testid="iframe-thankyou-video"
            />
          </div>
        </div>
      </section>

      <CoreValuesSection />

      <OnyxOfferPacketSection />

      <AgentCriteriaSection />

      <section
        aria-label="Why this conversation matters"
        className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,520px)_1fr] md:gap-10 lg:gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="max-w-[520px] [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1] tracking-[2px] text-black sm:text-[40px] sm:tracking-[3px] md:text-[36px] md:tracking-[3px] lg:text-[52px] lg:leading-[0.95] lg:tracking-[4.5px]">
              WHY THIS CONVERSATION IS WORTH YOUR TIME
            </h2>
          </div>
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <p className="max-w-[640px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-black sm:text-[18px] lg:text-[20px] lg:leading-[1.45]">
              Onyx Homes is built for serious agents who want more than just a
              place to hang their license. This interview is designed to show
              you how the opportunity works and see if there&rsquo;s a fit on
              both sides.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Join the free community"
        className="relative w-full bg-[linear-gradient(178deg,rgba(59,76,91,1)_0%,rgba(32,46,59,1)_100%)] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 [grid-template-areas:'title''image''content'] md:items-center md:gap-10 md:[grid-template-areas:'title_image''content_image'] md:grid-cols-[minmax(0,520px)_1fr] lg:gap-x-16">
          <h2 className="max-w-[520px] [grid-area:title] text-center [font-family:'Montserrat',Helvetica] text-[26px] font-bold leading-[0.95] tracking-[2px] text-white sm:text-[40px] sm:tracking-[3px] md:text-left md:text-[36px] md:tracking-[3px] lg:text-[52px] lg:tracking-[4px]">
            THE VISION FOR ONYX HOMES
          </h2>
          <Card className="[grid-area:image] overflow-hidden rounded-none border-0 bg-transparent shadow-none">
            <CardContent className="relative aspect-[4/3] w-full p-0 lg:aspect-[5/4]">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center"
                alt="Onyx Homes team"
                src="/figmaAssets/screenshot-2026-04-16-at-7-05-09-pm-1.png"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <div className="flex flex-col items-center text-center [grid-area:content] md:items-start md:text-left">
            <p className="max-w-[520px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white sm:text-[17px] lg:text-[18px]">
              We believe the &lsquo;traditional brokerage&rsquo; model is broken. Agents have been set up for failure for a long time. Our mission is to change that.
            </p>
            <p className="mt-4 max-w-[520px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white sm:text-[17px] lg:text-[18px]">
              Real estate agents should only have to focus on what they do best. Selling. Agents shouldn&rsquo;t have to do everything on their own. Onyx Homes provides a proven sales process, built-in accountability and the leads. We are looking for agents that are willing to follow our proven process and put in the work that is required to be successful.
            </p>
            <p className="mt-4 max-w-[520px] [font-family:'SF_Pro-Regular',Helvetica] text-[15px] font-normal leading-[1.5] text-white sm:text-[17px] lg:text-[18px]">
              The Vision for Onyx Homes is to become the Team that sells more homes than any other in Orange County. We will achieve that by constantly re-investing into the value we add to our agents. By giving our agents more value, we will give our customers a better experience.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#d5d5d5]">
        <Card className="rounded-none border-0 bg-transparent shadow-none">
          <CardContent className="flex min-h-28 items-center justify-center px-4 py-6">
            <p className="whitespace-nowrap font-['SF_Pro-Regular',sans-serif] text-center text-[11px] sm:whitespace-normal sm:text-[15px] lg:text-[18px] font-normal leading-normal text-[#00020f]">
              Christian Stubbs | Realtor® CA | DRE LIC# 02082942 | Onyx Homes
            </p>
          </CardContent>
        </Card>
      </footer>
    </main>
  );
};

export default ThankYou;
