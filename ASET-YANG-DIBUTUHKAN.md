# Daftar Aset yang Perlu Disediakan — SMAS Kesatuan Bogor

Saat ini folder `public/` **kosong**. Semua slot gambar memakai placeholder
yang jelas berlabel (bukan foto generik). Gunakan hanya aset resmi/dokumentasi
asli sekolah. Taruh file di `public/images/` lalu isi path-nya di file terkait.

| # | Aset | Simpan sebagai | Dipakai di | Cara memasang | Rasio / ukuran |
|---|------|----------------|-----------|---------------|----------------|
| 1 | Logo sekolah (SVG disarankan, atau PNG transparan) | `public/images/logo-sekolah.svg` | Navbar, Footer | Pasang di `src/components/Navbar.js` dan `Footer.js` (file ini belum saya terima) | Persegi atau horizontal; PNG min. 512 px |
| 2 | Favicon / ikon aplikasi | `src/app/icon.png` (atau `favicon.ico`) | Tab browser | Letakkan file di `src/app/`, Next.js membacanya otomatis | 512 × 512 px |
| 3 | Foto utama gedung/halaman sekolah | `public/images/hero-sekolah.jpg` | Hero Home | `HERO_IMAGE` di `src/app/page.js` | Lanskap, rasio 5:4 sampai 4:3, min. 1600 px lebar |
| 4 | Foto lingkungan sekolah untuk profil | `public/images/profil-sekolah.jpg` | About, bagian Profil | `GAMBAR_PROFIL` di `src/app/about/page.js` | Lanskap 16:9, min. 1400 px lebar |
| 5 | Foto fasilitas (satu per fasilitas resmi) | `public/images/fasilitas/<nama>.jpg` | About, bagian Fasilitas | Tambahkan item ke `FASILITAS` (saat ini kartu tanpa gambar) | 16:9 |
| 6 | Foto kegiatan/program (satu per program resmi) | `public/images/program/<nama>.jpg` | About, bagian Program | Tambahkan item ke `PROGRAM` | 16:9 |
| 7 | Foto berita (satu per berita) | `public/images/berita/<id-berita>.jpg` | Kartu berita Home & /berita, detail berita | Isi `gambar` dan `gambarAlt` di `src/data/berita.js` | 16:9, min. 1200 px lebar |

Catatan:
- Isi `gambarAlt` dengan deskripsi foto yang sebenarnya (apa yang terlihat).
- Setelah berita asli masuk, ubah `simulasi: true` menjadi `false` (atau hapus
  item contoh) agar label "Contoh" hilang.
- Data teks resmi yang masih placeholder (visi, misi, sejarah, fasilitas,
  program, kontak, NPSN, akreditasi, yayasan) tercantum di komentar `TODO`
  pada `src/app/about/page.js`.
