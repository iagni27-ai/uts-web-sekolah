import Image from "next/image";
import Link from "next/link";

/* ==========================================================================
   BeritaCard — kartu berita yang dipakai ulang untuk semua berita.
   Props: { berita } dengan struktur dari src/data/berita.js
   Gaya memakai kelas .news-card* dari globals.css (satu kartu dapat diklik
   penuh lewat stretched link pada .news-card-link).
   ========================================================================== */

// "2026-10-05" -> "5 Oktober 2026" (zona UTC agar server dan klien konsisten)
export function formatTanggal(tanggal) {
  const date = new Date(`${tanggal}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return tanggal;
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BeritaCard({ berita }) {
  const { id, judul, tanggal, kategori, gambar, gambarAlt, ringkasan, simulasi } =
    berita;

  return (
    <article className="news-card">
      <div className="news-card-media">
        {gambar ? (
          <Image
            src={gambar}
            alt={gambarAlt || `Gambar berita: ${judul}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          // Belum ada aset gambar: tampilkan panel netral, bukan foto generik.
          <div
            role="img"
            aria-label="Gambar berita belum tersedia"
            className="flex h-full w-full items-center justify-center bg-navy-100 text-xs font-semibold uppercase tracking-widest text-navy-400"
          >
            Foto belum tersedia
          </div>
        )}
        <span className="news-card-badge">{kategori}</span>
      </div>

      <div className="news-card-body">
        <p className="news-card-meta">
          <time dateTime={tanggal}>{formatTanggal(tanggal)}</time>
          {simulasi ? (
            <span className="ml-2 rounded bg-gold-100 px-1.5 py-0.5 text-[0.65rem] font-semibold text-gold-700">
              Contoh
            </span>
          ) : null}
        </p>
        <h3 className="news-card-title">{judul}</h3>
        <p className="news-card-excerpt">{ringkasan}</p>
        <Link
          className="news-card-link"
          href={`/berita/${id}`}
          aria-label={`Baca selengkapnya: ${judul}`}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}