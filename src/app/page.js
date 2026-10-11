import Link from "next/link";
import BeritaCard from "../components/BeritaCard";
import FotoSekolah from "../components/FotoSekolah";
import { getBeritaTerbaru } from "../data/berita";

/* ==========================================================================
   Halaman Home — SMA Kesatuan Bogor

   Memakai design system dari globals.css:
   .section / .section-alt / .section-dark, .container-page, .section-header,
   .eyebrow, .lead, .btn (+ .btn-gold, .btn-outline-light, .btn-secondary),
   .card, .grid-cards, .news-card.
   Layout sudah menyediakan <main id="konten">, jadi halaman ini tidak
   membuat <main> sendiri.
   ========================================================================== */

/* --------------------------------------------------------------------------
   DATA KONTEN
   Teks bersifat umum dan tidak memuat klaim yang belum terverifikasi
   (akreditasi, jumlah siswa, prestasi, tahun berdiri, dll).
   -------------------------------------------------------------------------- */

// TODO (aset): letakkan foto asli sekolah di /public/images/ lalu isi path-nya,
// contoh: "/images/hero-sekolah.jpg". Selama null, hero menampilkan panel
// placeholder agar gambar generik tidak dikira foto asli sekolah.
const HERO_IMAGE = "/images/smakes.webp";
const HERO_IMAGE_ALT =
  "Gedung SMA Kesatuan Bogor dengan taman di halaman tengah";

const NILAI_PENDIDIKAN = [
  {
    judul: "Berkualitas",
    isi: "Mendorong proses belajar yang terarah dan bermakna, agar setiap siswa terus berkembang secara akademik.",
  },
  {
    judul: "Profesional",
    isi: "Menumbuhkan sikap disiplin, tanggung jawab, dan etos kerja yang siap menghadapi jenjang berikutnya.",
  },
  {
    judul: "Berkarakter",
    isi: "Menanamkan integritas, kepedulian, dan sikap saling menghargai dalam keseharian di sekolah.",
  },
];

// Berita terbaru berasal dari src/data/berita.js (data tidak diduplikasi di sini).
// Item bertanda `simulasi: true` otomatis diberi label "Contoh" oleh BeritaCard.
const JUMLAH_BERITA_HOME = 3;

/* --------------------------------------------------------------------------
   KOMPONEN KECIL
   -------------------------------------------------------------------------- */

// spacing: "none" (jarak diatur grid induk) | "tight" (diikuti paragraf/tombol)
function SectionHeader({ label, title, description, center = false, spacing }) {
  const jarak = spacing === "none" ? "mb-0" : spacing === "tight" ? "mb-6" : "";
  return (
    <div
      className={`section-header ${center ? "section-header-center" : ""} ${jarak}`}
    >
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="lead">{description}</p> : null}
    </div>
  );
}

/* --------------------------------------------------------------------------
   HALAMAN
   -------------------------------------------------------------------------- */

export default function Home() {
  const beritaTerbaru = getBeritaTerbaru(JUMLAH_BERITA_HOME);

  return (
    <>
      {/* 1. HERO ---------------------------------------------------------- */}
      <section className="section section-dark">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">Selamat Datang di</p>
            <h1>SMA Kesatuan Bogor</h1>
            <p className="mt-4 font-display text-xl text-gold-300 sm:text-2xl">
              Membangun Generasi Berkualitas, Profesional dan Berkarakter
            </p>
            <p className="lead max-w-xl">
              Kami berkomitmen menghadirkan lingkungan belajar yang mendukung
              siswa untuk berprestasi, bertanggung jawab, dan berakhlak baik.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn btn-gold btn-lg">
                Tentang Sekolah
              </Link>
              <Link href="/berita" className="btn btn-outline-light btn-lg">
                Lihat Berita
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-card-hover lg:aspect-[5/4]">
              <FotoSekolah src={HERO_IMAGE} alt={HERO_IMAGE_ALT} priority />
            </div>
            {/* aksen emas dekoratif */}
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-2xl border-2 border-gold-500/60 sm:block"
            />
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN ------------------------------------------------------ */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeader
              label="Sambutan"
              title="Pengantar dari Sekolah"
              spacing="none"
            />
          </div>
          <div className="lg:col-span-3">
            {/* TODO: ganti dengan sambutan resmi Kepala Sekolah (nama dan
                jabatan) setelah naskahnya dikonfirmasi pihak sekolah. */}
            <div className="border-l-4 border-gold-500 pl-6">
              <p className="text-lg text-ink">
                Selamat datang di situs resmi SMA Kesatuan Bogor. Melalui
                situs ini, kami ingin memperkenalkan sekolah kepada siswa,
                orang tua, dan masyarakat, serta berbagi informasi dan kabar
                terbaru dari lingkungan sekolah.
              </p>
              <p className="mt-4 text-lg text-ink">
                Kami percaya bahwa pendidikan yang baik tidak hanya membentuk
                kecerdasan, tetapi juga sikap dan karakter. Semoga situs ini
                bermanfaat bagi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RINGKASAN PROFIL --------------------------------------------- */}
      <section className="section section-alt">
        <div className="container-page">
          <SectionHeader
            spacing="tight"
            label="Profil Sekolah"
            title="Mengenal SMA Kesatuan Bogor"
            description="SMA Kesatuan Bogor adalah sekolah menengah atas swasta yang berlokasi di Kota Bogor. Kami mengusung semangat membangun generasi yang berkualitas, profesional, dan berkarakter."
          />
          {/* TODO: tambahkan data profil resmi (alamat, NPSN, visi, misi)
              setelah diverifikasi pihak sekolah. */}
          <Link href="/about" className="btn btn-secondary">
            Baca Profil Lengkap
          </Link>
        </div>
      </section>

      {/* 4. NILAI PENDIDIKAN --------------------------------------------- */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            center
            label="Nilai Pendidikan"
            title="Nilai yang Kami Pegang"
            description="Tiga nilai dari tagline sekolah menjadi arah dalam kegiatan belajar dan pembinaan siswa."
          />
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {NILAI_PENDIDIKAN.map((nilai, index) => (
              <div key={nilai.judul} className="card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5">{nilai.judul}</h3>
                <p className="mt-3 text-sm text-muted">{nilai.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. BERITA TERBARU + TOMBOL SEMUA BERITA ----------------------- */}
      <section className="section section-alt">
        <div className="container-page">
          <SectionHeader
            label="Berita"
            title="Berita Terbaru"
            description="Kabar dan informasi terbaru dari SMA Kesatuan Bogor."
          />

          <div className="grid-cards">
            {beritaTerbaru.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/berita" className="btn btn-primary btn-lg">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA PENUTUP --------------------------------------------------- */}
      <section className="section section-dark">
        <div className="container-page">
          <div className="section-header section-header-center mb-0 sm:mb-0 lg:mb-0">
            <p className="eyebrow">Mari Terhubung</p>
            <h2>Kenali SMA Kesatuan Bogor Lebih Dekat</h2>
            <p className="lead">
              Pelajari profil sekolah atau ikuti kabar terbaru dari lingkungan
              kami.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/about" className="btn btn-gold btn-lg">
                Tentang Sekolah
              </Link>
              <Link href="/berita" className="btn btn-outline-light btn-lg">
                Lihat Berita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}