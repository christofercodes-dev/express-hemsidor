
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-200/70">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-20">

                {/* Main footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center lg:justify-start"
                            aria-label="Express Hemsida - startsida"
                        >
                            <Image
                                src="/images/logo-transparent.svg"
                                alt="Express Hemsida"
                                width={180}
                                height={60}
                                className="w-auto h-16 object-contain"
                                priority
                            />
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500">
                            Vi bygger moderna hemsidor för företag som vill synas,
                            växa och få fler kunder online.
                        </p>

                        <Link
                            href="#kontakt"
                            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#08244c] group"
                        >
                            <span className="border-b border-[#08244c]/30 pb-1 group-hover:border-[#08244c] transition-colors">
                                Låt oss prata om ditt projekt
                            </span>
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-900 mb-5">
                            Utforska
                        </h3>

                        <ul className="space-y-3.5">
                            <li>
                                <Link
                                    href="#priser"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Våra priser
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#process"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Så fungerar det
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#case"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Våra projekt
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#om-oss"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Om oss
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-900 mb-5">
                            Tjänster
                        </h3>

                        <ul className="space-y-3.5">
                            <li>
                                <Link
                                    href="#kontakt"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Hemsidor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#kontakt"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Webbdesign
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#kontakt"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    SEO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#kontakt"
                                    className="text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    Support & underhåll
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-900 mb-5">
                            Kontakt
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:hej@ertforetag.se"
                                    className="inline-flex items-center gap-2.5 text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4 text-neutral-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                                        />
                                    </svg>
                                    hej@ertforetag.se
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+46701234567"
                                    className="inline-flex items-center gap-2.5 text-sm text-neutral-500 hover:text-[#08244c] transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4 text-neutral-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 3h4l2 5-3 2a16 16 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"
                                        />
                                    </svg>
                                    070-123 45 67
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="#kontakt"
                                className="inline-flex items-center justify-center rounded-full bg-[#08244c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#103563] transition-colors"
                            >
                                Kontakta oss
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-6 border-t border-neutral-200/70 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-neutral-400 text-center sm:text-left">
                        © 2026 Express Hemsida. Alla rättigheter förbehållna.
                    </p>

                    <div className="flex items-center justify-center gap-6">
                        <Link
                            href="/integritetspolicy"
                            className="text-xs text-neutral-400 hover:text-[#08244c] transition-colors"
                        >
                            Integritetspolicy
                        </Link>

                        <Link
                            href="/villkor"
                            className="text-xs text-neutral-400 hover:text-[#08244c] transition-colors"
                        >
                            Villkor
                        </Link>
                    </div>

                    <a
                        href="#"
                        className="hidden sm:inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-[#08244c] transition-colors"
                        aria-label="Tillbaka till toppen"
                    >
                        Till toppen
                        <span aria-hidden="true">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
