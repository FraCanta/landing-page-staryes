import { Icon } from "@iconify/react";
import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { landingLinks } from "@/config/landing-links";

export function SiteHeader() {
  return (
    <header className="staryes-header">
      <div className="staryes-header__inner">
        <div className="staryes-header__brand">
          <Image
            className="staryes-header__logo-slot"
            src="/staryes-logo-per-sfondo-chiaro.svg"
            alt="Staryes"
            width={209}
            height={55}
            priority
          />
          <span className="staryes-header__divider" aria-hidden="true" />
          <span className="staryes-header__partner">
            <span>con</span> Bar Lamanna
          </span>
        </div>
        <ActionLink
          href={landingLinks.registration}
          className="staryes-header__cta"
          icon={<Icon icon="ph:arrow-right-bold" width={18} height={18} />}
          size="sm"
        >
          Registrati ora
        </ActionLink>
      </div>
    </header>
  );
}
