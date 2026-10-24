import Image from 'next/image';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Uppstart & analys",
      description:
        "Vi börjar med ett samtal där vi lär känna ert företag, målgrupp och mål. Därefter tar vi fram en tydlig plan för projektet.",
    },
    {
      number: "02",
      title: "Design & koncept",
      description:
        "Ni får se designförslag som är anpassade efter ert varumärke. Vi finjusterar tills ni är helt nöjda med känslan och strukturen.",
    },
    {
      number: "03",
      title: "Utveckling",
      description:
        "Vi bygger en snabb, stabil och mobilvänlig hemsida. Allt utvecklas med moderna tekniker och fokus på prestanda.",
    },
    {
      number: "04",
      title: "Lansering & support",
      description:
        "När allt är klart lanserar vi hemsidan och ser till att ni kan ta över den tryggt. Support ingår enligt valt paket.",
    },
  ];

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left – Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/i1.png"
              alt="Så här går det till"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right – Text */}
          <div>
            <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#08244c]/70 mb-5">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#08244c] mb-4">
              Så här går det till
            </h2>
            <p className="text-[#08244c]/80 text-lg leading-relaxed mb-12">
              En tydlig och trygg process från första samtal till färdig hemsida.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-semibold tracking-tight text-[#08244c]/25">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#08244c] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[#08244c]/75 leading-relaxed text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}