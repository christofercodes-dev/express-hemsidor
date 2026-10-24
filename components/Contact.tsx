'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Tack! Vi återkommer så snart vi kan.');
  };

  return (
    <section id="kontakt" className="py-28 bg-[#f5f6f8] relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#08244c]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#08244c]/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left – Text */}
          <div className="lg:pt-4">
            <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#08244c] mb-5">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1e3a5f] mb-6">
              Låt oss prata
              <br />
              om ert projekt
            </h2>
            <p className="text-[#08244c] text-lg leading-relaxed mb-12 max-w-md">
              Berätta kort om vad ni behöver så återkommer vi inom en arbetsdag 
              med nästa steg.
            </p>

            <div className="space-y-5">
              <a 
                href="mailto:hej@ertforetag.se"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-neutral-200/60 hover:border-[#1e3a5f]/20 hover:bg-white transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#08244c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a5f]/15 transition-colors">
                  <svg className="w-5 h-5 text-[#08244c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#08244c] mb-0.5">E-post</p>
                  <p className="text-[#08244c] font-medium">hej@ertforetag.se</p>
                </div>
              </a>

              <a 
                href="tel:+46701234567"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-neutral-200/60 hover:border-[#1e3a5f]/20 hover:bg-white transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#08244c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a5f]/15 transition-colors">
                  <svg className="w-5 h-5 text-[#08244c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#08244c] mb-0.5">Telefon</p>
                  <p className="text-[#08244c] font-medium">070-123 45 67</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right – Frosted form card */}
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-3xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-600 mb-2">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white/80 text-[#08244c] placeholder:text-[#] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/15 focus:border-[#1e3a5f]/40 transition"
                  placeholder="Ditt namn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-600 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/15 focus:border-[#1e3a5f]/40 transition"
                  placeholder="namn@foretag.se"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-neutral-600 mb-2">
                  Företag <span className="text-neutral-400">(valfritt)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/15 focus:border-[#1e3a5f]/40 transition"
                  placeholder="Företagsnamn"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-600 mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/80 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/15 focus:border-[#1e3a5f]/40 transition resize-none"
                  placeholder="Berätta kort om ert projekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#0081e8] text-white text-[15px] font-medium rounded-full hover:bg-[#162d4a] transition-colors duration-200"
              >
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}