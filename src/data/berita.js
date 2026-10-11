/* ==========================================================================
   Data berita lokal — SMAS Kesatuan Bogor

   Berita di bawah bersumber dari pemberitaan media dan publikasi sekolah.
   Item bertanda `simulasi: false` adalah berita nyata dan tidak menampilkan
   label "Contoh". Item `simulasi: true` (jika ada) hanya contoh tampilan.

   CATATAN: tanggal yang diberi komentar "TODO" belum diketahui pasti dan
   masih berupa perkiraan. Ganti dengan tanggal sebenarnya.

   Struktur item:
   {
     id: string unik (huruf kecil, angka, tanda hubung) — dipakai di /berita/[id]
     judul: string
     tanggal: "YYYY-MM-DD"
     kategori: string
     gambar: string path lokal di /public (mis. "/images/berita/x.jpg") atau null
     gambarAlt: string deskripsi gambar (dipakai jika `gambar` terisi)
     ringkasan: string
     isi: string[] — satu elemen per paragraf
     simulasi: boolean
   }
   ========================================================================== */

const berita = [
  {
    id: "paskibra-kibarkan-merah-putih-di-tugu-kujang",
    judul: "Paskibra SMA Kesatuan Bogor Kibarkan Merah Putih di Tugu Kujang",
    tanggal: "2025-08-22",
    kategori: "Kegiatan Sekolah",
    gambar: "/images/paskibra.jpg",
    gambarAlt:
      "Pasukan pengibar bendera berbaris di depan Tugu Kujang, Kota Bogor, saat upacara pengibaran Merah Putih",
    ringkasan:
      "Paskibra SMA Kesatuan, Gana Bimantara, mengibarkan Sang Saka Merah Putih di Tugu Kujang bertepatan dengan HUT ke-76 sekolah.",
    isi: [
      "Suasana khidmat menyelimuti kawasan Tugu Kujang, Kota Bogor, Kamis (22/8/2025), ketika Pasukan Pengibar Bendera (Paskibra) SMA Kesatuan, Gana Bimantara, mendapat kehormatan mengibarkan Sang Saka Merah Putih. Momen istimewa ini bertepatan dengan peringatan Hari Ulang Tahun (HUT) ke-76 SMA Kesatuan yang berdiri sejak 1949.",
      "Kepala SMA Kesatuan Bogor, Lia Oktapia, mengungkapkan rasa bangganya atas kesempatan bersejarah ini. Setiap tahun, sekolah rutin memperingati hari jadinya melalui rangkaian kegiatan seperti tabur bunga di makam pendiri sekolah dan doa bersama di lingkungan sekolah. Namun, upacara kali ini terasa berbeda karena dilaksanakan di salah satu ikon Kota Bogor.",
    ],
    simulasi: false,
  },
  {
    id: "winter-camp-2025-di-tiongkok",
    judul: "SMP-SMA Kesatuan Bogor Kirim Siswa Ikut Program Winter Camp 2025 di Tiongkok",
    // TODO: tanggal pelaksanaan belum diketahui, ini hanya perkiraan.
    tanggal: "2025-01-15",
    kategori: "Program Internasional",
    gambar: "/images/wintercampc.webp",
    gambarAlt:
      "Siswa peserta Winter Camp berfoto bersama dengan pose simbol hati di depan backdrop merah di Tiongkok",
    ringkasan:
      "Puluhan siswa SMA dan SMP Kesatuan Bogor mengikuti program tahunan Winter Camp 2025 untuk mengenal budaya Tiongkok dan mengasah bahasa Mandarin.",
    isi: [
      "Sekolah Kesatuan Bogor, melalui jenjang SMA dan SMP, kembali menunjukkan komitmennya dalam memperkaya pengalaman belajar siswa dengan memberangkatkan puluhan murid ke Tiongkok. Para siswa tersebut mengikuti program tahunan Winter Camp 2025, sebuah kegiatan yang dirancang untuk mengenalkan budaya Tiongkok secara mendalam sekaligus mengasah kemampuan bahasa Mandarin mereka di negara asalnya.",
    ],
    simulasi: false,
  },
  {
    id: "edufair-2025-29-kampus-dihadirkan",
    judul:
      "Edufair SMA Kesatuan Bogor: 29 Kampus Dihadirkan, Lulusan Diharap Pilih Jurusan Berdasarkan Potensi",
    tanggal: "2025-10-16",
    kategori: "Kegiatan Akademik",
    gambar: "/images/edufair.jpg",
    gambarAlt:
      "Foto bersama guru, siswa, dan perwakilan kampus di depan banner Education Fair SMA Kesatuan Bogor",
    ringkasan:
      "Edufair di lapangan sekolah menghadirkan 29 kampus untuk membantu siswa kelas akhir mendapatkan informasi yang akurat dan sesuai potensi.",
    isi: [
      "SMA Kesatuan Bogor menggelar program Edufair di lapangan sekolah, Jalan Pulo Armen, Baranangsiang, Kota Bogor, pada Kamis (16/10/2025), dengan tujuan memandu siswa kelas akhir mendapatkan informasi kampus yang akurat dan sesuai potensi.",
      "Kegiatan tahunan ini kembali dihelat untuk membekali siswa-siswi dengan wawasan komprehensif dari berbagai institusi, memastikan keputusan melanjutkan studi diambil secara matang dan sesuai dengan bakat individu.",
    ],
    simulasi: false,
  },
  {
    id: "kesatuan-peduli-korban-gempa-cianjur",
    judul: "Kesatuan Peduli, Berbagi Kasih Bersama Korban Gempa Cianjur",
    tanggal: "2022-12-15",
    kategori: "Kepedulian Sosial",
    gambar: "/images/cianjur.jpg",
    gambarAlt:
      "Perwakilan siswa menyerahkan bantuan kepada warga di posko pengungsian korban gempa Cianjur",
    ringkasan:
      "OSIS/MPK SMA Kesatuan Bogor menggalang bantuan dan menyerahkannya langsung kepada warga terdampak gempa di Cianjur.",
    isi: [
      "Bencana gempa bumi yang terjadi hari Senin (21/11/2022) pukul 13.21 WIB dengan pusat gempa berada di 10 km barat daya Kabupaten Cianjur, Provinsi Jawa Barat, menyebabkan korban jiwa dan infrastruktur desa hancur di beberapa lokasi cukup parah. Menurut Badan Meteorologi, Klimatologi, dan Geofisika (BMKG), gempa bumi ini berkekuatan magnitudo 5,6 dengan pemicu patahan atau sesar Cugenang.",
      "Tentunya hal tersebut menyentuh empati kita untuk ikut berpartisipasi dalam membantu dan menolong sesama. Perasaan turut berduka karena bencana ini dan sebagai bentuk rasa peduli, mendorong OSIS/MPK SMA Kesatuan Bogor berinisiatif untuk bergerak, mengajak seluruh siswa-siswi di lingkungan SMA Kesatuan, memberikan bantuan baik materi maupun nonmateri. Dalam hal ini sekolah menggalang bantuan yang dibutuhkan oleh warga yang berada di pengungsian.",
      "Pada Rabu (15/12/2022), perwakilan siswa berkunjung untuk memberikan bantuan yang telah dikumpulkan secara langsung. “Kami melakukan peninjauan ke daerah terdampak bencana dan daerah yang kami kunjungi adalah Kampung Ciherang, Desa Ciputri, dan SD Negeri Citamiang, salah satu Sekolah Penggerak di wilayah Cianjur”, ungkap Luthfan dan kawan-kawan.",
      "Di sini tampak rumah warga hancur, hampir rata dengan tanah dengan kerusakan 98%. Siswa sekolah harus belajar di sekolah darurat yang dibuat oleh TNI dan menurut Ibu Neis yang menjadi koordinator warga menjelaskan, “Anak-anak harus belajar dirolling satu hari hanya untuk dua kelas”. Selain itu, siswa membantu pihak TNI memasak makanan untuk korban gempa, yang dilakukan oleh Davina, Eca, dan kawan lainnya.",
      "Bencana ini ternyata tidak terlalu berdampak pada semangat anak. Dalam situasi bencana, semangat anak-anak SD Kampung Sarongge Kidul untuk belajar masih sangat terasa. Bapak Madjolehan Sukadi yang didampingi Bapak Supri Yana memberikan motivasi kepada anak-anak SD, “Semoga masa depan kalian jauh lebih baik dan cerah ya, dan kalian bisa jadi orang hebat karena kalian semua sudah bisa melewati kondisi bencana seperti ini”.",
      "Pihak sekolah setempat mengucapkan terima kasih atas kunjungan siswa dan siswi SMA Kesatuan Bogor. “Semoga kunjungan ini menjadi motivasi bagi semuanya untuk menumbuhkan semangat anak-anak belajar lebih baik lagi”, ujar Kepala Sekolah SD Negeri Citamiang. Penyerahan bantuan diterima langsung oleh perwakilan warga Sarongge Kidul RT/RW 01/08 dan Kampung Ciherang Panembong Desa Ciputri. Usai sudah OSIS/MPK SMA Kesatuan melakukan kunjungan dengan harapan kepedulian ini tidak berhenti sampai di sini, dan kegiatan peduli kasih ini dapat menjadi kebiasaan bagi semua siswa.",
    ],
    simulasi: false,
  },
  {
    id: "siswa-diterima-di-ptn-2022-2023",
    judul: "Siswa dan Siswi SMA Kesatuan yang Berhasil Diterima di PTN",
    // TODO: tanggal publikasi belum diketahui, ini hanya perkiraan.
    tanggal: "2022-06-15",
    kategori: "Prestasi",
    gambar: "/images/ptn.jpg",
    gambarAlt:
      "Poster ucapan selamat bagi siswa SMA Kesatuan Bogor yang diterima di perguruan tinggi negeri tahun ajaran 2022-2023",
    ringkasan:
      "SMA Kesatuan Bogor mengucapkan selamat kepada siswa dan siswi yang diterima di perguruan tinggi negeri tahun ajaran 2022-2023.",
    isi: [
      "SMA Kesatuan Bogor mengucapkan selamat kepada siswa dan siswi yang diterima di perguruan tinggi negeri (PTN) untuk tahun ajaran 2022-2023.",
      "Poster pengumuman memuat nama siswa beserta perguruan tinggi negeri tujuan masing-masing.",
    ],
    simulasi: false,
  },
  {
    id: "masa-pengenalan-lingkungan-sekolah",
    judul: "Kegiatan Masa Pengenalan Lingkungan Sekolah SMA Kesatuan Bogor",
    // TODO: tanggal pelaksanaan belum diketahui, ini hanya perkiraan.
    tanggal: "2022-07-18",
    kategori: "Kegiatan Siswa",
    gambar: "/images/mpls.jpg",
    gambarAlt:
      "Siswa baru mengikuti permainan kelompok saat Masa Pengenalan Lingkungan Sekolah di lapangan sekolah",
    ringkasan:
      "SMA Kesatuan Bogor menyelenggarakan Masa Pengenalan Lingkungan Sekolah (MPLS) bagi siswa baru.",
    isi: [
      "SMA Kesatuan Bogor menyelenggarakan Masa Pengenalan Lingkungan Sekolah (MPLS) bagi siswa baru.",
      "Dalam dokumentasi kegiatan, para siswa mengikuti permainan kelompok di lapangan sekolah.",
    ],
    simulasi: false,
  },
];

export default berita;

/** Semua berita, diurutkan dari yang terbaru. */
export function getAllBerita() {
  return [...berita].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}

/** Satu berita berdasarkan id, atau undefined jika tidak ada. */
export function getBeritaById(id) {
  return berita.find((item) => item.id === id);
}

/** Beberapa berita terbaru (default 3), mis. untuk halaman Home. */
export function getBeritaTerbaru(jumlah = 3) {
  return getAllBerita().slice(0, jumlah);
}