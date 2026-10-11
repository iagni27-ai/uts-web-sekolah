import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

// Alamat bersumber dari satu direktori data sekolah (tanpa nomor jalan dan
// kode pos). Lengkapi atau koreksi di sini setelah dikonfirmasi ke pihak sekolah.
const ADDRESS_LINES = ["Jalan Raya Pajajaran, Pulo Armin", "Kota Bogor, Jawa Barat"];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr] lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
            SMA
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-white">
            Kesatuan Bogor
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="font-sans text-sm font-semibold uppercase leading-normal tracking-[0.14em] text-gold-300">
            Navigasi
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-navy-200 underline-offset-4 transition-colors hover:text-white hover:underline hover:decoration-gold-500"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase leading-normal tracking-[0.14em] text-gold-300">
            Alamat
          </h2>
          <address className="mt-4 text-sm not-italic leading-relaxed">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs text-navy-300">
          &copy; {year} SMA Kesatuan Bogor
        </p>
      </div>
    </footer>
  );
}
