# Framer Development Prompt

## System Context & Tech Stack
Anda adalah pengembang web ahli yang berspesialisasi dalam Framer, React, dan Framer Motion. Tugas Anda adalah membangun halaman portofolio interaktif tingkat tinggi berdasarkan spesifikasi desain CSS Figma yang disediakan. 

Situs ini adalah portofolio arsitektur interaktif milik **Adinda Muthia Hanifah** dengan struktur visual bertema gelap (*dark mode*) asimetris, aksen hijau neon, dan tipografi bertipe arsitektural brutalist modern.

---

## Instructions for Building the Portfolio Page

### 1. Layout Restructuring & Refactoring Rules
* **Do NOT use raw absolute positioning for layout blocks.** Figma menggunakan koordinat absolut (`top`, `left`, `width: 1440px`) karena berbasis kanvas statis. Anda wajib mengonversi seluruh struktur layout utama menjadi komponen fleksibel yang responsif menggunakan CSS Flexbox dan CSS Grid di Framer.
* **Width & Responsiveness:** Atur kontainer utama halaman portfolio pada lebar `width: 100%`. Batasi lebar area baca konten internal menggunakan `max-width: 1280px` dengan posisi tengah otomatis (`margin-left: auto; margin-right: auto;`).
* **Overflow Guard:** Terapkan properti `overflow-x: hidden` pada elemen root portofolio untuk mengamankan halaman dari kebocoran layout akibat komponen lingkaran dekoratif (`Ellipse 1`, `2`) atau posisi negatif dekorasi horizontal (`left: -240px`).

### 2. Implementation Guide per Section

#### Global Navigation (`Frame 3`)
* Ubah kontainer absolute menjadi komponen navigasi melayang (*fixed sticky top navbar*).
* Gunakan parameter latar belakang glassmorphism: `background: linear-gradient(90deg, rgba(91, 114, 135, 0.4) 0%, rgba(234, 236, 241, 0.4) 100%)`, tambahkan properti `backdrop-filter: blur(5px)`, dan radius sudut `border-radius: 50px`.
* Terapkan animasi interaktif hover skala kecil (`whileHover={{ scale: 1.03 }}`) pada navbar.

#### Hero Section (`HERO SECTION` & `Frame 8`)
* Implementasikan teks utama menggunakan font `League Gothic` untuk teks "PORTFOLIO" dan tipe aksen `Knewave` untuk teks "Hello!". Terapkan isian teks gradien transparan sesuai instruksi figma (`-webkit-background-clip: text; -webkit-text-fill-color: transparent;`).
* **Hero Image Assembly:** Satukan komponen foto profil (`Rectangle 27`, gambar `FDSSG.png`) dengan elemen geometri pendukung (`Ellipse 1`, `Ellipse 2`, `Rectangle 11`, `28`, `36`). Jalankan animasi perakitan (*assembly animation*) saat dimuat: komponen geometris bergerak masuk secara perlahan dari arah asimetris berlawanan menuju posisi koordinat akhir mereka dengan efek transisi spring melambat.

#### About Me & Software Skills Grid (`top: 815px`)
* Gunakan struktur dua kolom horizontal untuk desktop yang akan runtuh menjadi satu kolom vertikal pada tampilan mobile. Kolom kiri menampilkan foto profil sekunder (`Rectangle 26`, gambar `DINN.png`), kolom kanan memuat profil narasi serta grid keahlian perangkat lunak (`Frame 25`).
* Ubah deretan logo software (`Rectangle 37` hingga `48`) menjadi grid responsif otomatis (`display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));`). Tambahkan transisi animasi hover timbul `whileHover={{ y: -6, scale: 1.05 }}` pada tiap item logo.

#### Architectural Projects Showcase (`top: 1757px`)
* Susun 4 kartu proyek utama (*The Terra, The Playbook Library, Linea Verde, Warmy Bedroom*) dalam satu baris horizontal flex-row yang dapat digulir (*draggable/scrollable row*) pada layar kecil, atau bertransisi menjadi format 2x2 Grid.
* **Card Animation Specification:** Setiap kartu proyek wajib merespons gerakan kursor pengguna dengan menerapkan efek interaksi kartu 3D (*Tilt Effect*). Manfaatkan hook `useMotionValue`, `useTransform`, dan event handler `onMouseMove` untuk memanipulasi rotasi sumbu X dan Y kartu secara dinamis berdasarkan posisi relatif koordinat kursor. Tombol CTA `READ MORE` harus bertransisi mengubah opasitas gradien warna saat disentuh kursor.

#### Graphic Design Carousel Grid (`top: 2653px`)
* Rakit susunan galeri desain publikasi organisasi (`Frame 28`, `30`, `31`) menjadi sistem grid multi-baris interaktif. Terapkan efek elevasi bayangan tajam sesuai spesifikasi desain Figma: `filter: drop-shadow(4px 6px 5px rgba(0, 0, 0, 0.8))`.

#### Infinite Skills Ticker Marquee (`top: 3370px`)
* Ubah baris data teks keahlian manual arsitektur dan desain komunikasi (`Frame 33`, `34`, `35`) menjadi rangkaian komponen baris teks berjalan melingkar tanpa akhir (*Infinite Horizontal Marquee Ticker*). 
* Gunakan konfigurasi transisi linear murni (`ease: "linear"`, `repeat: Infinity`) dengan durasi konstan agar teks bergerak mulus secara horizontal. Buat arah pergerakan baris pertama dan kedua saling berlawanan arah untuk menciptakan dinamika visual.

#### Experiences Timeline Section (`top: 3599px`)
* Ubah jajaran `Frame 37`, `38`, `39` menjadi modul timeline vertikal yang bersih. Garis pembatas abu-abu mendatar (`Line 4`, `border: 2px solid #919191`) harus bertransisi memanjang terisi warna hijau neon dari kiri ke kanan menggunakan pemicu animasi scroll `whileInView` ketika pengguna membaca deskripsi riwayat pengalaman kerja tersebut.

#### Bento Grid Art Gallery (`top: 4164px`)
* Kelompokkan seluruh koleksi elemen gambar acak (`Rectangle 65` hingga `82`) ke dalam satu kesatuan kontainer berstruktur layout **Bento Grid** atau **Masonry Layout** asimetris.
* Pertahankan karakteristik visual bayangan ganda unik dari figma (`box-shadow: 2px 2px 7px 1px rgba(176, 222, 12, 0.5), 10px 10px 6px rgba(0, 0, 0, 0.7)`).
* Jalankan animasi kemunculan elemen galeri secara bertahap (*staggered reveal animation*). Ketika kontainer galeri memasuki area pandang layar (*viewport*), setiap gambar di dalamnya akan muncul bergantian dari bawah ke atas dengan jeda interval waktu singkat antar elemen.

---

## Output Expectation
Hasilkan struktur kode komponen halaman portofolio yang bersih, modular, aman, bebas dari bug tabrakan koordinat absolut, serta dioptimalkan secara khusus untuk ekosistem Framer Canvas / Framer Motion API.