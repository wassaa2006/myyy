# Web Data Diri 🌌

Website personal interaktif dengan animasi smooth dan background galaxy yang menampilkan informasi profil, pendidikan, kontak, dan hobi.

## 📸 Preview

Website ini menampilkan card yang muncul dengan animasi smooth saat menu navigasi diklik, dengan background galaxy yang aesthetic.

## ✨ Fitur

- **Navigasi Interaktif**: Menu navbar untuk berpindah antar section
- **Animasi Smooth**: Transisi fade-in dan scale saat card muncul
- **Desain Modern**: Glassmorphism effect dengan backdrop blur
- **Responsive Layout**: Tampilan terpusat dan rapi
- **Background Dinamis**: GIF galaxy sebagai background

## 🗂️ Struktur File

```
project/
│
├── 3.html          # File HTML utama
├── style.css       # File CSS untuk styling dan animasi
├── script.js       # File JavaScript untuk interaksi
└── assets/
    └── a3.gif      # Background image/gif
```

## 🚀 Cara Menggunakan

1. **Clone atau Download** repository ini
2. Pastikan file `a3.gif` ada di folder `D:/A3/assets/` atau sesuaikan path-nya
3. Buka file `3.html` di browser

## 📝 Struktur Konten

### Menu Navigasi:
- **Profil**: Informasi nama, umur, dan status
- **Pendidikan**: Program studi dan universitas
- **Kontak**: Email, WhatsApp, dan Instagram
- **Lainnya**: Hobi dan minat

## 🎨 Teknologi yang Digunakan

- HTML5
- CSS3 (Glassmorphism, Animations)
- JavaScript (Vanilla)

## 💡 Cara Kerja

1. Semua card awalnya disembunyikan (`display: none`)
2. Saat menu navbar diklik, fungsi `showCard(id)` dipanggil
3. Semua card disembunyikan terlebih dahulu
4. Card yang dipilih ditampilkan dengan animasi fade-in dan scale

## 🎯 Fitur Animasi

Card menggunakan transisi CSS:
- Opacity: 0 → 1
- Transform: translateY(20px) scale(0.97) → translateY(0) scale(1)
- Duration: 0.5s dengan easing smooth

## 🔧 Kustomisasi

### Mengubah Data Pribadi:
Edit bagian content di dalam setiap `<div class="card">` di file `3.html`

### Mengubah Warna:
Sesuaikan property `background` dan `color` di CSS

### Mengubah Background:
Ganti path image di tag `<img src="...">` pada class `.hero-bg`

## 📱 Kontak

- **Email**: ahmadalqossam2006@email.com
- **WhatsApp**: 0815-7150-215
- **Instagram**: @ahmad_izzuddin_

## 📄 Lisensi

Project ini dibuat untuk keperluan personal dan edukasi.

---

**Dibuat dengan ❤️ oleh Ahmad**

*Mahasiswa Teknik Informatika - STIKOM Muhammadiyah Batam*