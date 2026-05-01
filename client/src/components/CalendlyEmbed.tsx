import { useEffect, useRef } from "react";

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const getUrlParam = (name: string): string | null => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };

    const getCookie = (name: string): string | null => {
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
      );
      return match ? decodeURIComponent(match[2]) : null;
    };

    const buildUtmParams = () => ({
      utmSource: getUrlParam("utm_source") || undefined,
      utmMedium: getUrlParam("utm_medium") || undefined,
      utmCampaign: getUrlParam("utm_campaign") || undefined,
      utmContent: getUrlParam("utm_content") || undefined,
      utmTerm:
        getCookie("_fbc") ||
        getUrlParam("fbclid") ||
        getUrlParam("utm_term") ||
        undefined,
    });

    const initWidget = () => {
      if (initialized.current) return;
      if (!containerRef.current) return;

      const Calendly = (window as any).Calendly;
      if (!Calendly) {
        console.error(
          "Calendly script loaded, but window.Calendly is still missing."
        );
        return;
      }

      Calendly.initInlineWidget({
        url: "https://calendly.com/d/cvs7-hd7-r63/intro-to-onyx-homes-ssw",
        parentElement: containerRef.current,
        utm: buildUtmParams(),
      });

      initialized.current = true;
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existing) {
      if ((window as any).Calendly) {
        initWidget();
      } else {
        existing.addEventListener("load", initWidget);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initWidget;
    script.onerror = () => {
      console.error("Failed to load Calendly widget.js");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[1100px] w-full sm:h-[1050px] lg:h-[1000px]"
      style={{ minWidth: 320 }}
      data-testid="iframe-calendly"
    />
  );
}
