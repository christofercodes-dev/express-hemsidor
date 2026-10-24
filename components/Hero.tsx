import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Frosted overlay */}
        <div className="absolute inset-0 bg-[#1e3a5f]/50 backdrop-blur-[2px]" />
        {/* Soft gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">

        {/* Small label */}
        <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-white-500 mb-10">
          Webbyrå för ambitiösa företag
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white mb-8">
          Hemsidor som
          <br />
          driver tillväxt
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white-600 leading-relaxed max-w-2xl mx-auto mb-14">
          Vi designar och bygger moderna, snabba och strategiskt utformade
          webbplatser för företag som vill synas tydligare och sälja mer online.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center h-13 px-8 bg-[#0081e8] text-white text-[15px] font-medium rounded-full hover:bg-[#162d4a] transition-colors duration-300 min-w-[220px]"
          >
            Boka gratis konsultation
          </a>
          <a
            href="#case"
            className="inline-flex items-center justify-center h-13 px-8 text-white-900 text-[15px] font-medium rounded-full border border-neutral-300 hover:border-neutral-400 hover:bg-white/60 transition-all duration-300 min-w-[220px]"
          >
            Se utvalda projekt
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-20 pt-10 border-t border-neutral-200/60 flex justify-center">
          <Image
            src="/images/logo-transparent.svg"
            alt="Express Hemsida"
            width={200}
            height={100}
            className="h-45 w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}