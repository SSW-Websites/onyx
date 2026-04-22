import { Card, CardContent } from "@/components/ui/card";
import { AgentCriteriaSection } from "./sections/AgentCriteriaSection";
import { FitAssessmentSection } from "./sections/FitAssessmentSection";
import { GrowthMetricsSection } from "./sections/GrowthMetricsSection";
import { GrowthTeamStorySection } from "./sections/GrowthTeamStorySection";
import { HeroRecruitmentSection } from "./sections/HeroRecruitmentSection";
import { InterviewCTASection } from "./sections/InterviewCTASection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { WhyChooseOnyxSection } from "./sections/WhyChooseOnyxSection";

const sections = [
  { id: "hero-recruitment", component: HeroRecruitmentSection },
  { id: "growth-metrics", component: GrowthMetricsSection },
  { id: "agent-criteria", component: AgentCriteriaSection },
  { id: "fit-assessment", component: FitAssessmentSection },
  { id: "growth-team-story", component: GrowthTeamStorySection },
  { id: "why-choose-onyx", component: WhyChooseOnyxSection },
  { id: "interview-cta", component: InterviewCTASection },
  { id: "site-footer", component: SiteFooterSection },
];

export const Desk = (): JSX.Element => {
  return (
    <main className="relative flex w-full flex-col bg-white">
      {sections.map(({ id, component: SectionComponent }) => (
        <section key={id} id={id} data-id={id} className="relative w-full">
          <SectionComponent />
        </section>
      ))}

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
