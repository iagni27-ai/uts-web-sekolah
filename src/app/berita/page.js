import Link from "next/link";
import BeritaCard from "../../components/BeritaCard";
import { getAllBerita } from "../../data/berita";

/* ==========================================================================
   Halaman daftar berita — SMA Kesatuan Bogor
   Data berasal dari src/data/berita.js (tidak diduplikasi di sini).
   Layout sudah menyediakan <main id="konten">, jadi halaman ini berupa
   fragment tanpa <main> sendiri.
   ========================================================================== */

export const metadata = {
  title: "Berita",
  description: "Kabar dan informasi terbaru dari SMA Kesatuan Bogor.",
};

export default function BeritaPage() {
  const daftarBerita = getAllBerita();
  const adaSimulasi = daftarBerita.some((berita) => berita.simulasi);

  return (
    <>
      {/* Header halaman */}
      <section className="section section-dark">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-200">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            <span aria-hidden="true" className="mx-2 text-gold-300">
              /
            </span>
            <span aria-current="page" className="text-white">
              Berita
            </span>
          </nav>

          <p className="eyebrow">Berita</p>
          <h1 className="max-w-3xl">Berita SMA Kesatuan Bogor</h1>
          <p className="lead max-w-2xl">
            Kabar dan informasi terbaru seputar kegiatan akademik, kegiatan
            siswa, pendidikan karakter, ekstrakurikuler, dan prestasi di
            lingkungan sekolah.
          </p>
        </div>
      </section>

      {/* Daftar berita */}
      <section className="section section-alt">
        <div className="container-page">
          {/* Dihapus otomatis setelah semua berita bertanda simulasi: false */}
          {adaSimulasi ? (
            <p
              role="note"
              className="mb-8 rounded-xl border border-dashed border-gold-400 bg-gold-50 p-4 text-sm text-muted sm:p-5"
            >
              <span className="mr-2 inline-flex rounded-md bg-gold-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
                Contoh
              </span>
              Berita bertanda “Contoh” adalah simulasi untuk keperluan
              tampilan dan bukan kejadian nyata. Berita resmi sekolah akan
              menggantikannya.
            </p>
          ) : null}

          {daftarBerita.length > 0 ? (
            <div className="grid-cards">
              {daftarBerita.map((berita) => (
                <BeritaCard key={berita.id} berita={berita} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">
              Belum ada berita yang dipublikasikan.
            </p>
          )}
        </div>
      </section>
    </>
  );
}