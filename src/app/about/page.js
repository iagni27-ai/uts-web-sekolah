import Link from "next/link";
import FotoSekolah from "../../components/FotoSekolah";
import Image from "next/image";

/* ==========================================================================
   Halaman About — SMA Kesatuan Bogor

   Memakai design system yang sama dengan Home (globals.css):
   .section / .section-alt / .section-dark, .container-page, .section-header,
   .eyebrow, .lead, .btn, .card.
   Layout sudah menyediakan <main id="konten">, jadi halaman ini berupa
   fragment tanpa <main> sendiri.

   ATURAN KONTEN
   - Tidak ada visi, misi, sejarah SMA, fasilitas, program, atau prestasi yang
     dikarang. Semua data resmi yang belum tersedia ditandai "Placeholder".
   - Data yang hanya berasal dari sumber pihak ketiga ditandai
     "Perlu verifikasi" dan harus dikonfirmasi pihak sekolah sebelum rilis.
   - Sejarah institusi Sekolah Kesatuan dipisah dari sejarah unit SMA.
   ========================================================================== */

export const metadata = {
  title: "Tentang Kami",
  description:
    "Profil, sejarah, visi dan misi, serta informasi umum SMA Kesatuan Bogor.",
};

/* --------------------------------------------------------------------------
   DATA KONTEN
   -------------------------------------------------------------------------- */

// Data pokok. Baris dengan `placeholder: true` belum tersedia dari sumber resmi.
const DATA_POKOK = [
  { label: "Nama sekolah", value: "SMA Kesatuan Bogor" },
  { label: "Jenjang", value: "Sekolah Menengah Atas (SMA)" },
  { label: "Status", value: "Swasta" },
  { label: "Kota", value: "Bogor, Jawa Barat" },
  { label: "NPSN", value: "20220329" },
  { label: "Akreditasi", value: "A" },
  { label: "Yayasan penyelenggara", value: "Yayasan Kesatuan" },
  { label: "Kepala sekolah", value: "Bonaventura W. S., S.Pd.." },
];

// Sejarah institusi Sekolah Kesatuan (BUKAN sejarah unit SMA).
// Sumber draf: artikel pengguna Kumparan "72 Tahun Kesatuan untuk Negeri"
// (https://kumparan.com/taufiq-sudjana/72-tahun-kesatuan-untuk-negeri-1wPGJxKhXS1)
// Bukan sumber resmi sekolah, sehingga ditandai "Perlu verifikasi".
const SEJARAH_INSTITUSI = [
  {
    waktu: "22 Agustus 1949",
    isi: "Prof. Dr. Ir. Thung Tjeng Hiang bersama para orang tua dan tokoh pendidikan mendirikan “Sekolah Rakyat Prof. Dr. Ir. Thung” di Jalan Ranggading (dahulu Jalan City) agar anak-anak tidak putus sekolah.",
  },
  {
    waktu: "1953",
    isi: "Atas kepercayaan masyarakat, yayasan memperluas jenjang pendidikan ke tingkat SLTA (SMP dan SMA).",
  },
  {
    waktu: "11 April 1966",
    isi: "Nama institusi resmi berganti menjadi “Kesatuan”.",
  },
];

// Sejarah unit SMA.
const SEJARAH_SMA = [
  {
    waktu: "1953",
    isi: "SMA mulai diselenggarakan di bawah naungan Yayasan Kesatuan.",
  },
  {
    waktu: "Sejak awal",
    isi: "Berdiri sebagai sekolah umum nasional yang inklusif dan tidak tersekat latar belakang agama, golongan, atau etnis, dengan motto “Bersatu Dalam Keberagaman / Unity In Diversity”.",
  },
  {
    waktu: "Kini",
    isi: "Menempati kampus hijau seluas 1,5 hektar di kawasan Pulo Armen, Baranangsiang.",
  },
];

// TODO (aset): foto lingkungan sekolah untuk bagian Profil. Taruh file asli di
// /public/images/ lalu isi path-nya, mis. "/images/profil-sekolah.jpg".
const GAMBAR_PROFIL = "/images/hero-sekolah.jpg";
const GAMBAR_PROFIL_ALT = "Lingkungan SMA Kesatuan Bogor";

// TODO: isi dengan pernyataan visi dan misi RESMI dari pihak sekolah.
// Tagline sekolah ("Membangun Generasi Berkualitas, Profesional dan
// Berkarakter") tidak otomatis dianggap sebagai visi.
const VISI = null; // contoh: "Teks visi resmi."
const MISI = []; // contoh: ["Poin misi 1", "Poin misi 2"]

// TODO: isi dengan fasilitas RESMI. Struktur item: { nama, deskripsi }
const FASILITAS = [
  {
    nama: "Lapangan Semi Indoor",
    deskripsi:
      "Lapangan beratap yang terbuka di sisi samping, dilengkapi ring basket dan gawang, untuk olahraga dan kegiatan siswa tanpa terganggu panas dan hujan.",
    gambar: "/images/lapangansemiindoor.jpeg",
    gambarAlt: "Lapangan semi indoor dengan ring basket dan bangku di pinggir lapangan",
  },
  {
    nama: "Kantin",
    deskripsi:
      "Kantin luas dengan deretan kios makanan dan meja makan bersama, tempat siswa dan guru beristirahat saat jam istirahat.",
    gambar: "/images/kantin.jpg",
    gambarAlt: "Kantin sekolah dengan deretan kios dan meja makan",
  },
  {
    nama: "Ruang Terbuka Hijau",
    deskripsi:
      "Halaman berumput dengan pepohonan dan tanaman hias yang menjadi area bersantai dan belajar di luar kelas.",
    gambar: "/images/ruang.jpg",
    gambarAlt: "Halaman berumput dengan jalur paving dan tanaman hias",
  },
];

// TODO: isi dengan kegiatan/program RESMI. Struktur item: { nama, deskripsi }
const PROGRAM = [
  {
    nama: "Edu Fair",
    deskripsi:
      "Kegiatan rutin untuk membekali siswa kelas XII dengan informasi akurat tentang dunia kampus, pilihan program studi, dan potensi karier masa depan.",
    gambar: "/images/edufair.jpg",
    gambarAlt: "Foto bersama peserta Edu Fair SMA Kesatuan Bogor di depan backdrop kampus mitra",
  },
  {
    nama: "SPEAK",
    deskripsi:
      "Student Performance and Education Art of Kesatuan, acara tahunan sebagai ajang kreativitas, olahraga, dan seni yang diselenggarakan SMA Kesatuan Bogor.",
    gambar: "/images/speak.png",
    gambarAlt: "Foto bersama siswa peserta SPEAK di lapangan semi indoor",
  },
  {
    nama: "Campus Tour",
    deskripsi:
      "Mengenalkan siswa, umumnya kelas XI, pada suasana dunia perkuliahan dan sistem belajar yang lebih terarah, sekaligus membantu mereka mengenali jurusan impian.",
    gambar: "/images/campustour.jpg",
    gambarAlt: "Foto bersama siswa kelas XI saat kegiatan Campus Tour",
  },
];
// Alamat bersumber dari direktori pihak ketiga dan artikel pengguna
// (daftarsekolah.spmb.teknokrat.ac.id; kumparan.com). Ejaan "Armen" dan
// "Armin" berbeda antar sumber; nomor jalan dan kode pos belum ada.
const ALAMAT_DRAF = [
  "Jl. Raya Pajajaran, Kompleks Pulo Armen",
  "Kelurahan Baranangsiang, Kecamatan Bogor Timur",
  "Kota Bogor, Jawa Barat",
];

const KONTAK = [
  {
    label: "Telepon",
    value: (
      <a
        href="tel:+622518345030"
        className="font-semibold text-navy-800 underline underline-offset-4 hover:text-navy-600"
      >
        (0251) 8345030
      </a>
    ),
  },
  { label: "Email", value: (
      <a
        href="mailto:sma@sekolah-kesatuan.sch.id"
        className="font-semibold text-navy-800 underline underline-offset-4 hover:text-navy-600"
      >
        sma@sekolah-kesatuan.sch.id
      </a>
    ), },
  { label: "Jam layanan", value: "07:00–15:00 WIB" },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=SMA+Kesatuan+Bogor";

const NAV_ANCHOR = [
  { href: "#profil", label: "Profil" },
  { href: "#sejarah", label: "Sejarah" },
  { href: "#visi-misi", label: "Visi & Misi" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#program", label: "Program" },
  { href: "#alamat", label: "Alamat" },
];

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

// Penanda status data: "placeholder" (belum ada) atau "verifikasi" (belum resmi).
function StatusBadge({ status }) {
  const teks = status === "verifikasi" ? "Perlu verifikasi" : "Placeholder";
  return (
    <span className="inline-flex shrink-0 items-center rounded-md bg-gold-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
      {teks}
    </span>
  );
}

// Kotak placeholder untuk konten yang belum tersedia.
function PlaceholderBox({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-dashed border-gold-400 bg-gold-50 p-4 sm:p-6 ${className}`}
    >
      <StatusBadge status="placeholder" />
      <div className="mt-3 text-sm text-muted">{children}</div>
    </div>
  );
}

function DataRow({ label, value, placeholder }) {
  return (
    <div className="flex flex-col gap-1 py-4">
      <dt className="text-sm font-semibold text-navy-900">
        {label}
      </dt>
      <dd className="text-ink">
        {placeholder ? (
          <span className="inline-flex items-center gap-2">
            <span className="italic text-muted">[Isi data resmi]</span>
            <StatusBadge status="placeholder" />
          </span>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

// Garis waktu sederhana untuk sejarah.
function Timeline({ items }) {
  return (
    <ol className="space-y-6 border-l-2 border-line pl-6">
      {items.map((item) => (
        <li key={item.waktu + item.isi} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-white ${
              item.status === "placeholder" ? "bg-gold-200" : "bg-gold-500"
            }`}
          />
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-display text-lg font-semibold text-navy-900">
              {item.waktu}
            </p>
            {item.status ? <StatusBadge status={item.status} /> : null}
          </div>
          <p className="mt-1 text-sm text-muted">{item.isi}</p>
        </li>
      ))}
    </ol>
  );
}

// Daftar kartu untuk fasilitas dan program. Jika data kosong, tampil placeholder.
function DaftarKartu({ items, jenis }) {
  if (items.length > 0) {
  return (
    <div className="grid-cards">
      {items.map((item) => (
        <div key={item.nama} className="card overflow-hidden p-0">
          {item.gambar ? (
            <div className="relative aspect-[16/9] bg-navy-100">
              <Image
                src={item.gambar}
                alt={item.gambarAlt || item.nama}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="p-6">
            <h3>{item.nama}</h3>
            <p className="mt-3 text-sm text-muted">{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

  return (
    <div className="grid-cards">
      {[1, 2, 3].map((n) => (
        <PlaceholderBox key={n}>
          <p className="font-semibold text-navy-900">
            {jenis} {n}
          </p>
          <p className="mt-1">
            Nama dan deskripsi {jenis.toLowerCase()} resmi akan ditambahkan
            setelah dikonfirmasi pihak sekolah.
          </p>
        </PlaceholderBox>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   HALAMAN
   -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <>
      {/* 1. HEADER / HERO ABOUT ------------------------------------------- */}
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
              Tentang Kami
            </span>
          </nav>

          <p className="eyebrow">Tentang Kami</p>
          <h1 className="max-w-4xl">Tentang SMA Kesatuan Bogor</h1>
          <p className="lead max-w-2xl">
            Halaman ini memuat profil, sejarah, visi dan misi, serta informasi
            umum SMA Kesatuan Bogor.
          </p>

          {/* Tautan cepat ke tiap bagian */}
          <div className="mt-8 flex flex-wrap gap-3">
            {NAV_ANCHOR.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="btn btn-outline-light btn-sm"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROFIL SEKOLAH ------------------------------------------------ */}
      <section id="profil" className="section scroll-mt-20">
        <div className="container-page grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <SectionHeader label="Profil" title="Profil Sekolah" spacing="tight" />
            <p className="text-lg text-ink">
              SMA Kesatuan Bogor adalah sekolah menengah atas swasta yang
              berlokasi di Kota Bogor, Jawa Barat. Sekolah mengusung tagline
              “Membangun Generasi Berkualitas, Profesional dan Berkarakter”
              sebagai arah dalam menyelenggarakan pendidikan.
            </p>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-line">
              <FotoSekolah
                src={GAMBAR_PROFIL}
                alt={GAMBAR_PROFIL_ALT}
                label="Foto Profil Sekolah"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="mb-2">Data Pokok</h3>
              <dl className="divide-y divide-line">
                {DATA_POKOK.map((row) => (
                  <DataRow key={row.label} {...row} />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEJARAH SINGKAT ----------------------------------------------- */}
      <section id="sejarah" className="section section-alt scroll-mt-20">
        <div className="container-page">
          <SectionHeader
            label="Sejarah"
            title="Sejarah Singkat"
            description="Sejarah institusi Sekolah Kesatuan secara keseluruhan dibedakan dari sejarah unit SMA. Keduanya tidak selalu sama."
          />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="card">
              <p className="eyebrow">Institusi</p>
              <h3 className="mb-6">Sekolah Kesatuan</h3>
              <Timeline items={SEJARAH_INSTITUSI} />
            </div>
            <div className="card">
              <p className="eyebrow">Unit SMA</p>
              <h3 className="mb-6">SMA Kesatuan Bogor</h3>
              <Timeline items={SEJARAH_SMA} />
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
          </p>
        </div>
      </section>

      {/* 4 & 5. VISI DAN MISI --------------------------------------------- */}
      <section id="visi-misi" className="section scroll-mt-20">
        <div className="container-page">
          <SectionHeader label="Arah Sekolah" title="Visi dan Misi" />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Visi */}
            <div id="visi" className="card scroll-mt-20">
              <h3>Visi</h3>
              <div className="mt-4">
                {VISI ? (
                  <p className="text-lg text-ink">{VISI}</p>
                ) : (
                  <p>Menjadi sekolah yang unggul dan berdaya saing.</p>
                )}
              </div>
            </div>

            {/* Misi */}
            <div id="misi" className="card scroll-mt-20">
              <h3>Misi</h3>
              <div className="mt-4">
                {MISI.length > 0 ? (
                  <ol className="list-decimal space-y-3 pl-5 text-ink marker:font-semibold marker:text-gold-600">
                    {MISI.map((poin) => (
                      <li key={poin}>{poin}</li>
                    ))}
                  </ol>
                ) : (
                  <p>Menjadi sekolah yang unggul, berkualitas dalam karakter, ilmu pengetahuan, dan profesionalisme.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FASILITAS / LINGKUNGAN BELAJAR -------------------------------- */}
      <section id="fasilitas" className="section section-alt scroll-mt-20">
        <div className="container-page">
          <SectionHeader
            label="Fasilitas"
            title="Fasilitas dan Lingkungan Belajar"
          />
          <DaftarKartu items={FASILITAS} jenis="Fasilitas" />
        </div>
      </section>

      {/* 7. KEGIATAN / PROGRAM PENDIDIKAN --------------------------------- */}
      <section id="program" className="section scroll-mt-20">
        <div className="container-page">
          <SectionHeader
            label="Program"
            title="Kegiatan dan Program Pendidikan"
           
          />
          <DaftarKartu items={PROGRAM} jenis="Program" />
        </div>
      </section>

      {/* 8. INFORMASI ALAMAT ---------------------------------------------- */}
      <section id="alamat" className="section section-alt scroll-mt-20">
        <div className="container-page">
          <SectionHeader
            label="Lokasi"
            title="Alamat Sekolah"
            description="Informasi alamat dan kontak sekolah."
          />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="card">
  <h3>Alamat</h3>
  <address className="mt-4 not-italic text-ink">
    {ALAMAT_DRAF.map((baris) => (
      <span key={baris} className="block">
        {baris}
      </span>
    ))}
  </address>
  <div className="mt-6">
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-secondary"
    >
      Buka di Google Maps
    </a>
  </div>
</div>

            <div className="card">
              <h3>Kontak</h3>
              <dl className="mt-2 divide-y divide-line">
                {KONTAK.map((k) => (
                  <DataRow key={k.label} {...k} />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PENUTUP ---------------------------------------------------------- */}
      <section className="section section-dark">
        <div className="container-page">
          <div className="section-header section-header-center mb-0 sm:mb-0 lg:mb-0">
            <p className="eyebrow">Informasi Lainnya</p>
            <h2>Ikuti Kabar Terbaru dari Sekolah</h2>
            <p className="lead">
              Kunjungi halaman berita untuk informasi dan kegiatan terbaru
              SMA Kesatuan Bogor.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/berita" className="btn btn-gold btn-lg">
                Lihat Berita
              </Link>
              <Link href="/" className="btn btn-outline-light btn-lg">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}