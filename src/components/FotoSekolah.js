import Image from "next/image";

/* ==========================================================================
   FotoSekolah — slot foto sekolah yang dipakai ulang (hero Home, profil About).

   Induknya yang menentukan rasio dan sudut, contoh:
     <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
       <FotoSekolah src={...} alt={...} />
     </div>

   - `src` terisi  -> menampilkan foto lokal dari /public dengan object-cover.
   - `src` kosong  -> panel placeholder yang jujur, bukan gambar generik yang
                      bisa disangka dokumentasi asli sekolah.
   ========================================================================== */

export default function FotoSekolah({
  src,
  alt,
  label = "Foto Sekolah",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${label} (belum diisi)`}
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-8 text-center"
    >
      <span className="h-px w-16 bg-gold-400" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
        {label}
      </p>
      <p className="max-w-xs text-sm text-navy-200">
        Foto asli SMAS Kesatuan Bogor akan ditampilkan di area ini.
      </p>
      <span className="h-px w-16 bg-gold-400" />
    </div>
  );
}