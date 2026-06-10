# Product Requirement Document (PRD)

## Project Title
**Adinda Muthia Hanifah – Interactive Architecture & Design Portfolio**

---

## 1. Project Overview & Objectives
Membangun platform portofolio digital berbasis web berperforma tinggi untuk **Adinda Muthia Hanifah**, seorang mahasiswa arsitektur dan desainer multi-disiplin. Situs ini berfungsi sebagai representasi visual interaktif yang menggabungkan presisi teknis arsitektur dengan kreativitas desain grafis. 

### Core Goals:
* **High-Fidelity Interaction:** Mengubah layout statis Figma berketinggian ekstrem ($5829\text{px}$) menjadi pengalaman scrolling SPA (*Single Page Application*) yang fluida menggunakan **Framer / Framer Motion**.
* **Dynamic Storytelling:** Menyajikan proyek arsitektur utama melalui transisi halaman detail yang mulus tanpa interupsi *hard reload*.
* **Optimal Media Delivery:** Memastikan ratusan aset gambar (rendering arsitektur, feeds organisasi, sketsa tangan) dimuat secara asinkron dengan kompresi web modern tanpa menurunkan ketajaman visual.

---

## 2. Target Audience & User Personas
1.  **Recruiters / Studio Principals:** Arsitek senior atau manajer HRD yang mencari talenta magang/junior dengan kemampuan *software skill* yang solid dan pemahaman spasial yang baik.
2.  **Organizational Stakeholders:** Klien atau organisasi kampus yang membutuhkan jasa kurasi konten media sosial dan desain komunikasi visual.

---

## 3. Information Architecture & Page Flow
Situs dirancang sebagai sistem arsitektur informasi vertikal terintegrasi berbasis koordinat posisi Figma:

* **Global Navigation:** Floating glassmorphic navbar (`top: 28px`) dengan blur filter dan identitas brand **A’MtHanf**.
* **Hero Section (`top: 136px`):** Introduksi visual asimetris dengan tipografi ekspresif "PORTFOLIO" dan "Hello!".
* **About & Tech Stack (`top: 815px`):** Narasi personal, status akademis (Arsitektur Universitas Lampung), dan grid keahlian perangkat lunak.
* **Architectural Projects (`top: 1757px`):** Showcase 4 proyek utama (*The Terra, The Playbook Library, Linea Verde, Warmy Bedroom*) dalam bentuk kartu interaktif yang dapat diklik menuju sub-halaman detail proyek.
* **Graphic Design Gallery (`top: 2653px`):** Kompilasi multi-baris aset visual publikasi organisasi (Kominfo, Himatur, FOSSI).
* **Experiences Timeline (`top: 3599px`):** Rekam jejak profesional sebagai Asisten Laboratorium Arsitektur dan peran struktural media internal kampus.
* **My Art Gallery (`top: 4164px`):** Koleksi seni manual, ilustrasi realistik, dan sketsa arsitektural asimetris (bento-grid style).
* **Footer & CTA (`top: 5439px`):** Blok kolaborasi "Ready To Collaborate?" dan tautan eksternal (LinkedIn, Instagram, YouTube).

---

## 4. Functional Requirements & Interaction Specs

### 4.1. Navigation & Routing
* **SPA Smooth Scrolling:** Klik pada tautan navigasi (PROJECT, SKILLS, EXPERIENCES) memicu scroll animasi otomatis ke section target berdasarkan ID elemen.
* **Nested Project Router:** Klik tombol `READ MORE` pada kartu proyek arsitektur membuka view detail proyek secara *overlay animation* atau dynamic sub-route tanpa memuat ulang aset global halaman utama.

### 4.2. Media & Performance
* **Lazy Loading Strategy:** Seluruh gambar pada Graphic Design Grid dan Art Gallery wajib menggunakan instruksi pemuatan tertunda (*lazy load*) dan *progressive loading placeholder*.
* **Asset Compression:** Gambar berformat `.png` dan `.jpg` dari Figma harus dikonversi ke format `.webp` atau `.avif` untuk menekan ukuran berkas di bawah $200\text{KB}$ per item.

### 4.3. Accessibility & Typography
* **Font Integration:** Memuat Google Web Fonts: *Kdam Thmor Pro* (untuk teks fungsional/teknis), *League Gothic* (branding), dan *Knewave* (aksen ekspresif).

---

## 5. Non-Functional Requirements
* **Framework Selection:** React Core dengan Framer (Framer Canvas) atau Next.js / Vite + Framer Motion untuk penanganan animasi tingkat lanjut.
* **Layout Adaptability:** Desain orisinal Figma berbasis koordinat absolut desktop $1440\text{px}$ harus ditransisikan ke sistem *Fluid CSS Grid* dan *Flexbox* agar sepenuhnya responsif di perangkat mobile dan tablet.