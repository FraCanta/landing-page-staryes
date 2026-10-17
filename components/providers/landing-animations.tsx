"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

export function LandingAnimations() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const motion = gsap.matchMedia();

    motion.add(MOTION_QUERY, () => {
      const responsiveContexts: Array<ReturnType<typeof gsap.matchMedia>> = [];
      const hero = document.querySelector<HTMLElement>(".staryes-hero");
      const benefits = document.querySelector<HTMLElement>(".staryes-benefits");
      const stepsSection = document.querySelector<HTMLElement>(".staryes-steps");
      const promotions = document.querySelector<HTMLElement>(".staryes-promotions");
      const registration = document.querySelector<HTMLElement>(".staryes-registration");
      const information = document.querySelector<HTMLElement>(".staryes-information");
      const footer = document.querySelector<HTMLElement>(".staryes-footer");
      const contentSections = [
        benefits,
        stepsSection,
        promotions,
        registration,
        information,
        footer,
      ].filter((section): section is HTMLElement => section !== null);

      if (hero) {
        const heroIntro = gsap.matchMedia(hero);
        responsiveContexts.push(heroIntro);

        const createHeroIntro = (phoneX: number, phoneY: number) => {
          const headerLogo = ".staryes-header__logo-slot";
          const headerDivider = ".staryes-header__divider";
          const headerPartner = ".staryes-header__partner";
          const headerCta = ".staryes-header__cta";
          const titleLines = ".staryes-hero__title-line";
          const description = ".staryes-hero__description";
          const phone = ".staryes-hero__device";
          const actions = gsap.utils.toArray<HTMLElement>(
            ".staryes-hero__actions > a",
          );

          gsap.set(headerLogo, { opacity: 0, y: -14 });
          gsap.set(headerDivider, { opacity: 0 });
          gsap.set(headerPartner, { opacity: 0, y: -10 });
          gsap.set(headerCta, { opacity: 0, y: -10 });
          gsap.set(titleLines, { opacity: 0, yPercent: 112 });
          gsap.set(description, { opacity: 0, y: 16 });
          gsap.set(actions, { opacity: 0, y: 12 });
          gsap.set(phone, { opacity: 0, x: phoneX, y: phoneY, scale: 0.94 });

          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(headerLogo, { opacity: 1, y: 0, duration: 0.62 }, 0)
            .to(headerDivider, { opacity: 1, duration: 0.4 }, 0.12)
            .to(headerPartner, { opacity: 1, y: 0, duration: 0.58 }, 0.12)
            .to(headerCta, { opacity: 1, y: 0, duration: 0.58 }, 0.24)
            .to(
              titleLines,
              { opacity: 1, yPercent: 0, duration: 0.68, stagger: 0.12 },
              0.42,
            )
            .to(
              phone,
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.1 },
              1.12,
            )
            .to(description, { opacity: 1, y: 0, duration: 0.55 }, 1.2)
            .to(
              actions,
              { opacity: 1, y: 0, duration: 0.52, stagger: 0.1 },
              1.68,
            );

        };

        heroIntro.add("(min-width: 64rem)", () => createHeroIntro(80, 35));
        heroIntro.add("(max-width: 63.999rem)", () => createHeroIntro(24, 18));

      }

      if (stepsSection) {
        const stepAnimations = gsap.matchMedia(stepsSection);
        responsiveContexts.push(stepAnimations);

        const setupStepProgress = (showConnectors: boolean) => {
          const steps = gsap.utils.toArray<HTMLElement>(".staryes-step");
          const markers = steps.map((step) =>
            step.querySelectorAll<HTMLElement>(
              ".staryes-step__number, .staryes-step__icon",
            ),
          );

          gsap.set(markers.flatMap((stepMarkers) => Array.from(stepMarkers)), {
            opacity: 0.62,
            scale: 0.96,
          });
          if (showConnectors) {
            gsap.set(steps.slice(0, -1), { "--step-line-progress": 0 });
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".staryes-step-list",
              start: "top 74%",
              end: "bottom 42%",
              scrub: 0.15,
              invalidateOnRefresh: true,
            },
          });

          const segment = showConnectors ? 1.8 : 1.2;
          steps.forEach((step, index) => {
            const position = index * segment;

            timeline.to(
              markers[index],
              { opacity: 1, scale: 1, duration: 0.6, ease: "none" },
              position,
            );

            if (showConnectors && index < steps.length - 1) {
              timeline.to(
                step,
                { "--step-line-progress": 1, duration: 0.65, ease: "none" },
                position + 0.6,
              );
            }

            if (index < steps.length - 1) {
              timeline.to(
                markers[index],
                { opacity: 0.62, scale: 0.96, duration: 0.35, ease: "none" },
                position + (showConnectors ? 1.25 : 0.85),
              );
            }
          });
        };

        stepAnimations.add("(min-width: 40rem)", () => setupStepProgress(true));
        stepAnimations.add("(max-width: 39.999rem)", () => setupStepProgress(false));

      }

      const sectionsContext = gsap.context(() => {
        contentSections.forEach((section) => {
          const textElements = gsap.utils.toArray<HTMLElement>(
            "h2, h3, p, .staryes-qr-card__caption, .staryes-footer__brand > span:last-child",
            section,
          );

          gsap.set(section, { opacity: 0 });
          gsap.set(textElements, {
            opacity: 0,
            y: 18,
            clipPath: "inset(100% 0 0 0)",
          });

          const reveal = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.out" },
          });

          reveal.to(section, { opacity: 1, duration: 0.65 }, 0);
          reveal.to(
            textElements,
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0 0 0)",
              duration: 0.72,
              stagger: 0.07,
            },
            0.08,
          );

          ScrollTrigger.create({
            trigger: section,
            start: section === footer ? "top bottom" : "top 88%",
            onEnter: () => reveal.play(),
            onEnterBack: () => reveal.play(),
            onLeaveBack: () => reveal.reverse(),
            onRefresh: (self) => {
              if (self.progress > 0) reveal.progress(1).pause();
            },
          });
        });
      });

      const refreshFrame = window.requestAnimationFrame(() =>
        ScrollTrigger.refresh(),
      );

      delete root.dataset.staryesMotion;

      return () => {
        window.cancelAnimationFrame(refreshFrame);
        sectionsContext.revert();
        responsiveContexts.forEach((context) => context.revert());
      };
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      delete root.dataset.staryesMotion;
    }

    return () => {
      motion.revert();
      delete root.dataset.staryesMotion;
    };
  }, []);

  return null;
}
