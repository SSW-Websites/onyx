export const OnyxOfferPacketSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f2f2f2] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 pt-[80px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center">
        <h2 className="text-center [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[1.05] tracking-[3px] sm:text-[40px] sm:tracking-[4.5px] lg:text-[56px] lg:tracking-[5px]">
          <span className="text-[#191919]">WE BELIEVE IN </span>
          <span className="text-[#a8a8a8]">TRANSPARENCY</span>
        </h2>

        <p className="mt-5 max-w-[820px] text-center [font-family:'SF_Pro-Regular',Helvetica] text-[14px] font-normal leading-[1.45] text-[#191919] sm:text-[16px] lg:text-[18px]">
          You are making a huge decision. We want to help make it easier for
          you. Below, you&apos;ll see a full breakdown of everything that we
          offer to our agents.
        </p>

        <div className="mt-8 w-full max-w-[1200px] sm:mt-10 lg:mt-12">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-[0_2px_8px_0_rgba(63,69,81,0.16)]"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.canva.com/design/DAGVMMSprl8/RTmLzearxyYb-zydZckDiA/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Onyx Homes - Agent Offer Packet"
              data-testid="iframe-canva-offer-packet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
