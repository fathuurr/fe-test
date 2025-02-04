```markdown
# Aplikasi Next.js dengan App Router

Ini adalah aplikasi Next.js yang menggunakan App Router. Berikut adalah instruksi untuk menjalankan aplikasi dan menangani masalah yang mungkin terjadi terkait dengan beberapa package.

## Prasyarat

Sebelum memulai, pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di sistem Anda. Jika belum, silakan unduh dan instal versi LTS terbaru.

## Langkah-langkah untuk Menjalankan Aplikasi

1. **Clone repositori:**
   Pertama, clone repositori ini ke mesin lokal Anda:

   ```bash
   git clone <URL_REPOSITORI>
   ```

2. **Masuk ke direktori proyek:**
   Pindah ke dalam folder proyek yang baru saja Anda clone.

   ```bash
   cd <nama-folder-proyek>
   ```

3. **Install dependensi:**
   Jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

   ```bash
   npm install
   ```

4. **Jalankan aplikasi:**
   Setelah dependensi terpasang, jalankan aplikasi dengan perintah berikut:

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di `http://localhost:3000`.

## Menangani Masalah Umum

Jika Anda menghadapi masalah dengan beberapa package seperti `sweetalert`, `axios`, `chartjs`, atau `react-chartjs-2`, berikut adalah solusi yang dapat dicoba:

### 1. **Masalah dengan `sweetalert`:**
Jika terjadi masalah dengan `sweetalert` seperti "module not found" atau error terkait lainnya, Anda dapat menginstalnya terlebih dahulu:

   ```bash
   npm install sweetalert2
   ```

Setelah itu, coba jalankan aplikasi kembali.

### 2. **Masalah dengan `axios`:**
Jika Anda mengalami masalah dengan `axios` seperti "module not found" atau error lainnya, Anda bisa menginstalnya dengan cara berikut:

   ```bash
   npm install axios
   ```

Kemudian jalankan aplikasi kembali setelah pemasangan selesai.

### 3. **Masalah dengan `chart.js`:**
Jika aplikasi gagal karena `chart.js`, pastikan package ini terinstal dengan benar:

   ```bash
   npm install chart.js
   ```

Setelah menginstalnya, jalankan aplikasi kembali.

### 4. **Masalah dengan `react-chartjs-2`:**
Jika ada masalah dengan `react-chartjs-2`, Anda perlu menginstal package ini terlebih dahulu:

   ```bash
   npm install react-chartjs-2
   ```

Setelah pemasangan selesai, aplikasi akan dapat berjalan tanpa masalah terkait dengan package tersebut.

## Alasan Menggunakan Chart.js

Kenapa saya memilih `Chart.js` untuk visualisasi data di aplikasi ini? Karena, jujur saja, `Chart.js` itu super mudah dipakai dan ringan. Library ini sangat fleksibel, bisa bikin berbagai jenis chart seperti bar, line, pie, dan banyak lagi, semuanya dengan sedikit kode.


## Membuat Build Produksi

Jika Anda ingin membangun aplikasi untuk produksi, gunakan perintah berikut:

```bash
npm run build
```

Setelah build selesai, Anda bisa menjalankan aplikasi produksi dengan:

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000` pada mode produksi.


