import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Nordic Living",
      category: "Företagshemsida",
      description: "En ren och modern hemsida för ett skandinaviskt designföretag med fokus på konvertering.",
      tags: ["Design", "Utveckling", "SEO"],
      result: "Mer förfrågningar via webben",
      image: "/images/hantverkare.jpeg",

    },
    {
      title: "Aura Finance",
      category: "Fintech",
      description: "Strategisk webbplats för ett finansbolag med tydlig struktur och stark trovärdighet.",
      tags: ["Design", "Utveckling", "CMS"],
      result: "Tydligare erbjudande & högre förtroende",
      image: "/images/hantverkare.jpeg",

    },
    {
      title: "Haven Studio",
      category: "Byrå & Konsult",
      description: "Portfoliobaserad hemsida som lyfter fram tjänster och tidigare arbeten på ett elegant sätt.",
      tags: ["Design", "Utveckling"],
      result: "Starkare varumärkeskänsla online",
      image: "/images/hantverkare.jpeg",
    },
  ];

  return (
    <section id="case" className="py-28 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#08244c] mb-5">
              Utvalda projekt
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1e3a5f]">
              Några av våra senaste arbeten
            </h2>
          </div>
          <a
            href="#kontakt"
            className="text-[14px] font-medium text-[#1e3a5f] hover:text-[#162d4a] transition-colors underline underline-offset-4"
          >
            Vill du se fler projekt? Hör av dig
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <article key={project.title} className="group cursor-pointer">
              {/* Image */}
              <div className="aspect-[16/11] rounded-2xl mb-7 overflow-hidden relative shadow-sm bg-neutral-200">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-200/90 to-neutral-300/70 group-hover:scale-105 transition-transform duration-700 ease-out" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-[13px] font-medium text-[#08244c]">
                    {project.category}
                  </p>
                  <span className="text-neutral-300">•</span>
                  <p className="text-[13px] text-[#08244c]">
                    {project.result}
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-[#1e3a5f] transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-[15px] text-[#08244c] leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-medium text-[#08244c] bg-white border border-neutral-200 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}