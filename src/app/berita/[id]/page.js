import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatTanggal } from "../../../components/BeritaCard";
import { getAllBerita, getBeritaById } from "../../../data/berita";

/* ==========================================================================
   Detail berita — /berita/[id]
   Next.js 16 (App Router): `params` adalah Promise dan WAJIB di-await, baik di
   komponen halaman maupun di generateMetadata. Akses sinkron sudah dihapus.
   Data berasal dari src/data/berita.js; isi berita tidak disalin ke sini.
   ========================================================================== */

// Pra-render semua ID yang ada. ID lain tetap diproses saat request dan
// berakhir di notFound() (404).
export function generateStaticParams() {
  return getAllBerita().map((berita) => ({ id: berita.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = getBeritaById(id);

  if (!berita) {
    return { title: "Berita Tidak Ditemukan" };
  }

  return {
    title: berita.judul,
    description: berita.ringkasan,
    openGraph: {
      title: berita.judul,
      description: berita.ringkasan,
      type: "article",
      publishedTime: berita.tanggal,
      ...(berita.gambar ? { images: [berita.gambar] } : {}),
    },
    // Berita simulasi tidak perlu diindeks mesin pencari.
    ...(berita.simulasi ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = getBeritaById(id);

  if (!berita) {
    notFound();
  }

  const { judul, tanggal, kategori, gambar, gambarAlt, isi, simulasi } = berita;

  return (
    <>
      {/* Header artikel */}
      <section className="section section-dark">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-200">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            <span aria-hidden="true" className="mx-2 text-gold-300">
              /
            </span>
            <Link href="/berita" className="hover:text-white">
              Berita
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-md bg-gold-500 px-2.5 py-1 text-xs font-semibold text-navy-950">
              {kategori}
            </span>
            <time dateTime={tanggal} className="text-navy-200">
              {formatTanggal(tanggal)}
            </time>
          </div>
          <h1 className="mt-4 max-w-3xl">{judul}</h1>
        </div>
      </section>

      {/* Isi artikel */}
      <section className="section">
        <article className="container-page max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-line bg-navy-100">
            {gambar ? (
              <Image
                src={gambar}
                alt={gambarAlt || `Gambar berita: ${judul}`}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label="Gambar berita belum tersedia"
                className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-widest text-navy-400"
              >
                Foto belum tersedia
              </div>
            )}
          </div>

          {simulasi ? (
            <p
              role="note"
              className="mb-8 rounded-xl border border-dashed border-gold-400 bg-gold-50 p-4 text-sm text-muted sm:p-5"
            >
              <span className="mr-2 inline-flex rounded-md bg-gold-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
                Contoh
              </span>
              Ini adalah berita simulasi untuk keperluan tampilan, bukan
              kejadian nyata.
            </p>
          ) : null}

          <div className="space-y-5 text-lg text-ink">
            {isi.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <Link href="/berita" className="btn btn-secondary">
              <span aria-hidden="true">←</span> Kembali ke Berita
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}