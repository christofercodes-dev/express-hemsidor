
export default function Pricing() {
  const plans = [

    {
      name: "Liten",
      price: "3 995",
      monthlyPrice: "299",
      description:
        "Perfekt för företag som behöver en professionell och modern närvaro online.",
      features: [
        "Modern design",
        "Kontaktformulär",
        "Grundläggande SEO",
        "Mobilanpassad",
        "1 månads support",
      ],
      cta: "Välj Liten",
      highlighted: false,
    },
    {
      name: "Mellan",
      price: "6 995",
      monthlyPrice: "499",
      description:
        "För företag som vill växa och få fler förfrågningar via sin hemsida.",
      features: [
        "Allt i Liten",
        "Upp till 4 sidor",
        "Konverteringsoptimerad design",
        "Blogg / nyheter",
        "Utökad SEO",
        "3 månaders support",
      ],
      cta: "Välj Mellan",
      highlighted: true,
    },
    {
      name: "Stor",
      price: "9 995",
      monthlyPrice: "799",
      description:
        "Komplett lösning för företag som vill ha en stark och skalbar digital plattform.",
      features: [
        "Allt i Mellan",
        "Skräddarsydd design",
        "Obegränsat antal sidor",
        "Avancerad SEO",
        "CMS (ni kan uppdatera själva)",
        "Prestandaoptimering",
        "6 månaders support",
      ],
      cta: "Välj Stor",
      highlighted: false,
    },
  ];

  return (
    <section
      id="priser"
      className="py-28 bg-[#08244c] relative overflow-hidden"
    >
      {/* Soft glow accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-blue-200/80 mb-5">
            Priser
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-white mb-5">
            Tydliga paket.
            <br />
            Inga överraskningar.
          </h2>

          <p className="text-blue-100/80 text-lg leading-relaxed">
            Välj det paket som passar ert företag bäst.
            Priserna avser månadskostnad.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col backdrop-blur-md border transition-all duration-300 ${plan.highlighted
                  ? "bg-white/15 border-white/25 shadow-xl md:scale-[1.02]"
                  : "bg-white/10 border-white/15 hover:bg-white/15"
                }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#08244c] text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  Mest populär
                </span>
              )}

              {/* Plan name, price and description */}

              <div className="mb-8 text-center">
                <h3 className="text-lg font-medium mb-5 text-white">
                  {plan.name}
                </h3>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-base text-blue-200/80">
                    kr
                  </span>
                </div>

                <p className="text-sm text-blue-200/70 mt-2">
                  Engångskostnad
                </p>

                <div className="w-12 h-px bg-white/20 mx-auto my-5" />

                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-2xl font-semibold text-white">
                    {plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-blue-200/80">
                    kr/mån
                  </span>
                </div>

                <p className="text-xs text-blue-200/60 mt-2 mb-6">
                  Löpande månadskostnad
                </p>

                <p className="text-[15px] leading-relaxed text-blue-100/80">
                  {plan.description}
                </p>
              </div>


              {/* Features */}
              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[14px]"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-200/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-blue-50/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`inline-flex items-center justify-center h-11 rounded-full text-[14px] font-medium transition-colors duration-200 ${plan.highlighted
                    ? "bg-white text-[#08244c] hover:bg-blue-50"
                    : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-blue-200/70 mt-12">
          Behöver ni något mer skräddarsytt?{" "}
          <a
            href="#kontakt"
            className="underline underline-offset-2 text-white hover:text-blue-100 transition-colors"
          >
            Hör av er så tar vi fram en offert
          </a>
          .
        </p>
      </div>
    </section>
  );
}
