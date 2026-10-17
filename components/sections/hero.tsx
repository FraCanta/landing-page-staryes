import { Icon } from "@iconify/react";
import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { SiteHeader } from "@/components/layout/site-header";
import { landingLinks } from "@/config/landing-links";

export function Hero() {
  return (
    <section className="staryes-hero" aria-labelledby="hero-title">
      <div
        className="staryes-hero__stadium"
        aria-hidden="true"
        data-asset-slot="stadium"
      >
        <picture className="staryes-hero__stadium-picture">
          <source
            media="(max-width: 39.999rem)"
            srcSet="/assets/staryes/hero_stadio4_mobile.png"
          />
          <Image
            src="/assets/staryes/hero_stadio4.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="staryes-hero__stadium-image"
          />
        </picture>
      </div>
      {/* <div
        className="staryes-hero__player"
        aria-hidden="true"
        data-asset-slot="player"
      >
        <Image
          src="/assets/staryes/calciatore.png"
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 58vw, (max-width: 1023px) 32vw, 28vw"
          className="staryes-hero__asset-image"
        />
      </div>*/}
      <div
        className="staryes-hero__device"
        aria-hidden="true"
        data-asset-slot="smartphone"
      >
        <Image
          src="/assets/staryes/phone.png"
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 48vw, (max-width: 1023px) 29vw, 26vw"
          className="staryes-hero__asset-image"
        />
      </div>

      <SiteHeader />

      <div className="staryes-hero__content">
        <div className="staryes-hero__copy">
          <h1 id="hero-title" className="staryes-hero__title">
            <span>Apri il tuo conto</span>
            <span>Staryes</span>
            <span className="staryes-hero__title-accent">con Bar Lamanna</span>
          </h1>
          <p className="staryes-hero__description">
            Registrati online in pochi minuti e inizia a conoscere il mondo
            Staryes. Semplice, sicuro e sempre con te.
          </p>
          <div className="staryes-hero__actions">
            <ActionLink
              href={landingLinks.registration}
              icon={<Icon icon="ph:arrow-right-bold" width={20} height={20} />}
              size="lg"
            >
              Registrati ora
            </ActionLink>
            <ActionLink
              href={landingLinks.promotions}
              size="lg"
              variant="secondary"
              icon={<Icon icon="ph:arrow-right-bold" width={20} height={20} />}
            >
              Scopri le promozioni
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
