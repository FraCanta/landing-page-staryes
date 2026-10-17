import { Icon } from "@iconify/react";
import Image from "next/image";
import { landingLinks } from "@/config/landing-links";
import { ActionLink } from "@/components/ui/action-link";

const benefits = [
  {
    icon: "ph:user",
    title: "Iscrizione online",
    image: "/assets/staryes/iscrizione_online.png",
    imageAlt: "Smartphone con la procedura guidata di iscrizione Staryes sullo sfondo di uno stadio",
    description:
      "La procedura di registrazione è disponibile online da computer, smartphone o tablet.",
  },
  {
    icon: "ph:trophy",
    title: "Sport, live, casinò e virtuali",
    image: "/assets/staryes/sport_live.png",
    imageAlt: "Quattro pannelli dedicati a sport, live, casinò e giochi virtuali in uno stadio",
    description:
      "Le principali categorie di gioco disponibili sulla piattaforma Staryes.",
  },
  {
    icon: "ph:diamond",
    title: "Accesso semplice",
    image: "/assets/staryes/accesso_semplice.png",
    imageAlt: "Smartphone con i passaggi per dati personali, documento e verifica",
    description:
      "La registrazione segue una procedura guidata sulla piattaforma.",
  },
  {
    icon: "ph:star",
    title: "Esperienza completa",
    image: "/assets/staryes/esperienza_completa.png",
    imageAlt: "Smartphone con le sezioni Staryes di sport, live, casinò e virtuali",
    description:
      "Informazioni sulle funzionalità e sulle promozioni disponibili, secondo le condizioni previste.",
  },
];

const steps = [
  {
    icon: "ph:clipboard-text",
    title: "Inserisci i tuoi dati",
    description:
      "Compila il modulo di registrazione direttamente sulla piattaforma Staryes.",
  },
  {
    icon: "ph:user",
    title: "Completa la registrazione",
    description: "Segui le indicazioni previste per creare il tuo conto.",
  },
  {
    icon: "ph:shield-check",
    title: "Verifica dell’identità",
    description:
      "Completa la procedura di identificazione richiesta dalla piattaforma.",
  },
];

const informationItems = [
  {
    icon: "ph:star",
    title: "Piattaforma completa",
    description: "Sport, live, casinò e virtuali",
  },
  {
    icon: "ph:device-mobile",
    title: "Sempre con te",
    description: "Da computer, smartphone e tablet",
  },
  {
    icon: "ph:identification-card",
    title: "Registrazione e verifica",
    description: "Segui le procedure previste",
  },
  {
    icon: "ph:headset",
    title: "Informazioni e assistenza",
    description: "Consulta i canali disponibili",
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return <p className="staryes-eyebrow">{children}</p>;
}

export function BenefitsSection() {
  return (
    <section className="staryes-benefits" aria-labelledby="benefits-title">
      <div className="staryes-section-inner">
        <div className="staryes-section-heading staryes-section-heading--center">
          <SectionEyebrow>Perché registrarti</SectionEyebrow>
          <h2 id="benefits-title">
            <span className="staryes-benefits__title-lead">Tutto il mondo Staryes,</span>{" "}
            <span>in un solo conto</span>
          </h2>
        </div>
        <ul className="staryes-benefit-grid">
          {benefits.map((benefit) => (
            <li className="staryes-benefit-card" key={benefit.title}>
              <div className="staryes-benefit-card__media">
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1199px) 43vw, 22vw"
                  className="staryes-benefit-card__image"
                />
              </div>
              <div className="staryes-benefit-card__icon" aria-hidden="true">
                <Icon icon={benefit.icon} width={30} height={30} />
              </div>
              <div className="staryes-benefit-card__body">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RegistrationStepsSection() {
  return (
    <section className="staryes-steps" aria-labelledby="steps-title">
      <div className="staryes-section-inner staryes-steps__layout">
        <div className="staryes-section-heading staryes-steps__intro">
          <SectionEyebrow>Come registrarsi</SectionEyebrow>
          <h2 id="steps-title">
            Tre semplici <span>passaggi</span>
          </h2>
          <p>Apri il tuo conto Staryes con Bar Lamanna in pochi minuti.</p>
        </div>
        <ol className="staryes-step-list">
          {steps.map((step, index) => (
            <li className="staryes-step" key={step.title}>
              <div className="staryes-step__top">
                <span className="staryes-step__number">{index + 1}</span>
                <span className="staryes-step__icon" aria-hidden="true">
                  <Icon icon={step.icon} width={34} height={34} />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function QrCard({
  image,
  alt,
  caption,
  href,
}: {
  image: string;
  alt: string;
  caption: string;
  href: string;
}) {
  return (
    <a className="staryes-qr-card" href={href}>
      <Image
        className="staryes-qr-card__image"
        src={image}
        alt={alt}
        width={512}
        height={512}
        unoptimized
      />
      <span className="staryes-qr-card__caption">{caption}</span>
    </a>
  );
}

export function PromotionsSection() {
  return (
    <section className="staryes-promotions" aria-labelledby="promotions-title">
      <div className="staryes-section-inner staryes-promotions__layout">
        <div className="staryes-promotions__copy">
          <h2 id="promotions-title">
            Promozioni <span>Staryes</span>
          </h2>
          <p>
            Consulta le promozioni disponibili sulla piattaforma Staryes e le
            relative condizioni.
          </p>
          <ActionLink
            href={landingLinks.promotions}
            variant="secondary"
            size="md"
            className="staryes-promotions__cta"
            icon={<Icon icon="ph:arrow-right-bold" width={18} height={18} />}
          >
            Scopri le promozioni
          </ActionLink>
        </div>
        <div
          className="staryes-promotions__asset-slot"
          aria-hidden="true"
          data-asset-slot="promotions"
        />
        <QrCard
          image="/assets/staryes/qr-code-promozioni-staryes.jpeg"
          alt="QR code per aprire le promozioni Staryes"
          caption="Scansiona il QR code Promozioni"
          href={landingLinks.promotions}
        />
      </div>
    </section>
  );
}

export function RegistrationQrSection() {
  return (
    <section className="staryes-registration" aria-labelledby="registration-title">
      <div className="staryes-section-inner staryes-registration__layout">
        <div className="staryes-registration__copy">
          <SectionEyebrow>Registrazione online</SectionEyebrow>
          <h2 id="registration-title">
            Inquadra <span>il QR code</span>
          </h2>
          <p>
            Per accedere alla procedura di registrazione Staryes,
            <br /> utilizza il QR code oppure il collegamento dedicato.
          </p>
          <ActionLink
            href={landingLinks.registration}
            size="md"
            icon={<Icon icon="ph:arrow-right-bold" width={18} height={18} />}
          >
            Registrati online
          </ActionLink>
        </div>
        <QrCard
          image="/assets/staryes/qr-code-registrazione-staryes.jpeg"
          alt="QR code per avviare la registrazione Staryes"
          caption="Scansiona il QR code Registrazione"
          href={landingLinks.registration}
        />
        <div
          className="staryes-registration__asset-slot"
          aria-hidden="true"
          data-asset-slot="registration-scene"
        />
      </div>
    </section>
  );
}

export function InformationStrip() {
  return (
    <section className="staryes-information" aria-label="Informazioni Staryes">
      <div className="staryes-section-inner staryes-information__grid">
        {informationItems.map((item) => (
          <div className="staryes-information__item" key={item.title}>
            <Icon
              className="staryes-information__icon"
              icon={item.icon}
              width={36}
              height={36}
              aria-hidden="true"
            />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="staryes-footer">
      <div className="staryes-section-inner staryes-footer__inner">
        <div className="staryes-footer__brand">
          <Image
            src="/staryes-logo-per-sfondo-chiaro.svg"
            alt="Staryes"
            width={209}
            height={55}
          />
          <span className="staryes-footer__divider" aria-hidden="true" />
          <span><span>con</span> Bar Lamanna</span>
        </div>
        <div className="staryes-footer__notice">
          <span className="staryes-footer__age">18+</span>
          <p>Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica.</p>
        </div>
      </div>
    </footer>
  );
}
