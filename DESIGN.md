# Design Specification & Animation System

## 1. Color Palette & Visual Style

| Token Name | Hex Code / Value | Usage Context |
| :--- | :--- | :--- |
| **Primary Background** | `#FFFFFF` | Fondasi dasar kanvas halaman global. |
| **Section Deep Gradient** | `linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)` | Lapisan latar belakang gelap asimetris untuk seluruh strip kontainer konten. |
| **Accent Neon Green** | `#C3F301` / `#B4E00F` | Elemen penarik perhatian (Aksen teks "Hello!", tag tahun, dan tombol CTA). |
| **Text Gradient Light** | `linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)` | Judul section utama portofolio untuk efek logam futuristik. |
| **Muted Moly Grey** | `#C4C4C4` / `#8D9DAC` | Sub-deskripsi, teks sekunder, dan garis pembatas struktural (`border-color`). |

---

## 2. Typography System
* **Display Title (Branding):** `League Gothic`, Regular, $40\text{px}$, Line-height $48\text{px}$, Letter-spacing $0.1\text{em}$.
* **Expressive Aksen Accent:** `Knewave`, Regular, $64\text{px}$, Line-height $99\text{px}$.
* **Functional & Interface Text:** `Kdam Thmor Pro`, Regular, ukuran berjenjang ($40\text{px}$, $24\text{px}$, $20\text{px}$), Letter-spacing $0.1\text{em}$.
* **Academic Meta Text:** `SF Pro`, Italic, $17\text{px}$, Line-height $22\text{px}$, Letter-spacing $-0.43\text{px}$.

---

## 3. Structural Layout & CSS Fixes
Pada berkas Figma mentah, terdapat ketidakselarasan dimensi horizontal (lebar bervariasi antara $1440\text{px}$ hingga $1549\text{px}$) akibat penggunaan koordinat absolut. Implementasi pada Framer wajib merestrukturisasi parameter berikut:

* **Global Box Model Reset:** Ubah seluruh elemen `position: absolute` menjadi struktur aliran dokumen normal (`position: relative` atau `static` dalam flexbox/grid kontainer) kecuali untuk elemen dekoratif latar belakang dan floating navbar.
* **Horizontal Constraint Alignment:** Bungkus seluruh area konten utama dalam kontainer dengan batas lebar maksimal (`max-width: 1280px` atau `1300px`) dan margin otomatis `margin: 0 auto` untuk mencegah pemotongan konten pada layar monitor ultra-lebar.
* **Footer Correction:** Perbaiki koordinat elemen `Rectangle 79` dekoratif yang memiliki posisi negatif (`left: -240px`). Elemen ini harus diisolasi menggunakan properti `overflow: hidden` pada induk pembungkus section untuk menghindari kemunculan *horizontal scrollbar* berlebih pada peramban web.

---

## 4. Framer Animation Architecture

### 4.1. Scroll-Driven Parallax Background
Latar belakang menggunakan strip gradien multi-layer (`Rectangle 1`, `8`, `27`, `29`, `30`). 
* **Framer Target:** Gunakan properti `useScroll` dan `useTransform` untuk menggerakkan posisi vertikal (`y`) elemen gradien latar belakang secara perlahan dengan rasio kecepatan $0.15$ terhadap kecepatan scroll asli pengguna. Efek ini menciptakan kedalaman spasial tiga dimensi di balik kartu proyek arsitektur.

### 4.2. Staggered Bento Art Gallery Reveal
Bagian `My Art Gallery` (`top: 4164px`) memiliki puluhan gambar dengan elevasi bayangan tebal (`box-shadow` ganda dan `drop-shadow`).
* **Framer Motion Variant:**
    ```javascript
    const galleryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        }
    };
    const imageItemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 60, damping: 15 } 
        }
    };
    ```
* **Trigger:** Pemicu animasi diatur menggunakan konfigurasi `whileInView` dengan parameter `viewport={{ once: true, amount: 0.1 }}` saat pengguna menggulir mendekati area galeri seni.

### 4.3. Soft Skill Infinite Marquee Ticker
Deretan teks pada section `SKILLS` (`Frame 33`, `34`, `35`) disusun horizontal dengan panjang melampaui batas layar ($1728\text{px}$ dan $1549\text{px}$).
* **Framer Mechanism:** Elemen ini ditransformasikan menjadi komponen *Infinite Scrolling Loop*. Teks diduplikasi ke dalam sebuah flex-row wrapper bergerak konstan menggunakan properti animasi `animate={{ x: ["0%", "-50%"] }}` dengan transisi linear tanpa jeda (`ease: "linear"`, `duration: 25`, `repeat: Infinity`). Arah gerak dibuat selang-seling antar baris (Baris 1 bergerak ke kiri, Baris 2 bergerak ke kanan).

### 4.4. Hero Image Abstract Geometric Assembly
Kombinasi elemen visual asimetris pada Hero Section (`Frame 7`, `Ellipse 1`, `Ellipse 2`, `Rectangle 11`, `28`, `36`) dirakit secara dinamis saat halaman pertama kali dimuat (*initial mount*).
* **Animation Spec:** Komponen geometris bergerak masuk dari koordinat luar layar yang berbeda, kemudian menyatu membentuk bingkai foto profil utama dengan efek pegas pelan (*smooth spring scale* $0 \rightarrow 1$).