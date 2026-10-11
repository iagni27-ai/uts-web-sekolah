"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

// Letakkan file logo di /public/images/logo-kesatuan.png
const LOGO_SRC = "/images/logosmakes.png";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  // Menu mobile dianggap terbuka hanya selama halaman masih sama dengan saat
  // menu dibuka. Berpindah halaman (termasuk tombol back/forward) otomatis
  // menutup menu tanpa perlu useEffect + setState.
  const [openOnPath, setOpenOnPath] = useState(null);
  const isOpen = openOnPath === pathname;
  const toggleRef = useRef(null);

  // Tutup dengan tombol Escape, lalu kembalikan fokus ke tombol menu.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenOnPath(null);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo + wordmark. alt kosong karena teks di sampingnya sudah
            menyebut nama sekolah (hindari dibaca dua kali oleh screen reader). */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={LOGO_SRC}
            alt=""
            width={44}
            height={44}
            priority
            className="h-9 w-9 shrink-0 object-contain md:h-11 md:w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-700">
              SMA
            </span>
            <span className="mt-1 font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-navy-600 md:text-xl">
              Kesatuan Bogor
            </span>
          </span>
        </Link>

        {/* Navigasi desktop dan tablet */}
        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold-500 after:transition-transform after:duration-200 motion-reduce:transition-none motion-reduce:after:transition-none ${
                      active
                        ? "text-navy-900 after:scale-x-100"
                        : "text-navy-600 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Tombol menu mobile */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-navy-50 md:hidden"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpenOnPath(isOpen ? null : pathname)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Panel menu mobile */}
      <div
        id="menu-mobile"
        hidden={!isOpen}
        className="border-t border-line bg-white md:hidden"
      >
        <nav aria-label="Navigasi seluler" className="container-page py-3">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpenOnPath(null)}
                    className={`block rounded-lg border-l-2 px-4 py-3 text-base font-semibold transition-colors ${
                      active
                        ? "border-gold-500 bg-navy-50 text-navy-900"
                        : "border-transparent text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}