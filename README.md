# Sistem Informasi Rencana Aksi & Bukti Dukung SKP Harian

Aplikasi web berbasis **Google Apps Script** untuk mencatat uraian tugas harian sebagai bukti dukung SKP. **PWA-enabled** — bisa dipasang di HP seperti aplikasi native!

**Tema:** Modern Premium (Linear/Notion/Apple/Presence style) - Putih Bersih
**Versi:** 2.2.0 (PWA Edition)

---

## ✨ Fitur v2.2 (PWA)

### 📱 PWA (Progressive Web App)
- **Bisa dipasang di HP** seperti aplikasi native
- **Icon di layar utama** dengan logo aplikasi
- **Full screen mode** — tanpa address bar browser
- **Splash screen** otomatis saat dibuka
- **Caching offline** — bisa dibuka tanpa internet (data terakhir)
- **Install prompt** otomatis muncul di Android Chrome
- **iOS Support** — petunjuk "Add to Home Screen" untuk Safari
- **Safe area aware** — adapts dengan notch & home indicator

### 🎨 Dashboard Modern (Presence Style)
- Hero banner gradient dengan greeting personal
- Date card + weekly dots progress (Senin-Jumat)
- 3 circular stats animated (Kehadiran, Minggu Ini, Total Bukti)
- Quick actions 2x3 grid dengan 6 menu berwarna
- Ringkasan total dengan 4 stat cards

### 👤 Profil Pegawai Lengkap
- Nama, NIP, Pangkat, Golongan, Jabatan, Unit Kerja, Tempat/Tanggal Lahir
- Foto profil diambil dari kamera HP
- Tampil di header aplikasi & laporan cetak

### 🖨️ Laporan Cetak Profesional
- Kop surat dengan foto profil 3x4
- Identitas pegawai lengkap
- Urutan: Profil → Rencana → Kegiatan → Bukti → Ringkasan → Tanda Tangan

---

## 📁 Struktur File (13 file)

```
skp-bukti-dukung/
├── appsscript.json              # Manifest dengan scopes
├── Code.gs                      # Entry point + inisialisasi 6 sheet
├── Database.gs                  # Helper CRUD spreadsheet
├── RencanaAksiService.gs        # Service rencana aksi
├── KegiatanHarianService.gs     # Service kegiatan harian
├── BuktiDukungService.gs        # Service upload foto bukti
├── ProfilService.gs             # Service profil + foto pegawai (auto-create sheet)
├── RekapService.gs              # Service rekap bulanan + data profil
├── Index.html                   # ⭐ PWA: meta tags + manifest inline + SW
├── Styles.html                  # Modern Premium theme + PWA install UI
├── App.html                     # Dashboard Presence style + semua halaman
├── Print.html                   # Kop surat + foto profil
└── README.md                    # Panduan ini
```

---

## 🚀 Cara Deploy

### Langkah 1: Buat Spreadsheet Baru
1. Buka [sheets.google.com](https://sheets.google.com) → bikin spreadsheet baru
2. Beri nama: `Database SKP Bukti Dukung`

### Langkah 2: Buka Apps Script Editor
- Klik **Extensions → Apps Script**

### Langkah 3: Update appsscript.json
1. Klik ⚙️ **Project Settings** → centang **"Show appsscript.json manifest file in editor"**
2. Buka file `appsscript.json` → timpa isinya dengan isi dari project

### Langkah 4: Salin Semua File Backend (.gs)
Buat file baru (klik `+` → Script) untuk masing-masing:
- `Code` ← paste `Code.gs`
- `Database` ← paste `Database.gs`
- `RencanaAksiService` ← paste `RencanaAksiService.gs`
- `KegiatanHarianService` ← paste `KegiatanHarianService.gs`
- `BuktiDukungService` ← paste `BuktiDukungService.gs`
- `ProfilService` ← paste `ProfilService.gs`
- `RekapService` ← paste `RekapService.gs`

### Langkah 5: Salin File HTML
Buat file HTML (klik `+` → HTML) untuk:
- `Index` ← paste `Index.html` (sudah termasuk PWA meta tags + SW)
- `Styles` ← paste `Styles.html`
- `App` ← paste `App.html`
- `Print` ← paste `Print.html`

### Langkah 6: Inisialisasi Database
1. Pilih fungsi **`initializeSystem`** di dropdown
2. Klik **Run** (▶)
3. Authorize: pilih akun → **Advanced → Go to (unsafe) → Allow**
4. 6 sheet akan dibuat: RencanaAksi, KegiatanHarian, BuktiDukung, Pengguna, **ProfilPegawai**, LogAktivitas

### Langkah 7: Deploy Web App
1. Klik **Deploy → New deployment** → ⚙️ → **Web app**
2. Isi:
   - **Description**: `SKP Bukti Dukung v2.2 PWA`
   - **Execute as**: Me
   - **Who has access**: Only myself (atau Anyone with Google Account)
3. **Deploy** → salin **Web app URL**

---

## 📱 Cara Pasang di HP (PWA Install)

### 🤖 Android (Chrome / Edge)

1. Buka URL web app di **Chrome** HP
2. Login dengan akun Google
3. Tunggu 3 detik → **banner "Pasang Aplikasi"** akan muncul di bawah
4. Klik **"Pasang"** → muncul popup konfirmasi
5. Klik **"Pasang"** lagi
6. ✅ Aplikasi muncul di **layar utama HP** dengan icon!

**Alternatif manual:**
- Buka menu **⋮** (kanan atas Chrome)
- Pilih **"Add to Home screen"** atau **"Install app"**
- Klik **"Pasang"**

### 🍎 iOS (Safari)

1. Buka URL web app di **Safari** HP
2. Login dengan akun Google
3. Setelah 5 detik, akan muncul toast: **"💡 Untuk pasang: tap Share → Add to Home Screen"**
4. Tap tombol **Share** (kotak panah ke atas, di tengah bawah)
5. Pilih **"Add to Home Screen"**
6. Klik **"Add"** (atas kanan)
7. ✅ Aplikasi muncul di **layar utama iPhone** dengan icon!

### 🖥️ Desktop (Chrome / Edge)

1. Buka URL web app di Chrome/Edge desktop
2. Klik icon **Install** (⊕) di address bar kanan
3. Atau klik menu **⋮ → Install "SKP Bukti Dukung"**
4. ✅ Aplikasi jadi window standalone di desktop

---

## ✅ Cek PWA Berhasil Terpasang

Setelah install, ciri-ciri aplikasi berjalan sebagai PWA:

1. **Tidak ada address bar browser** — full screen
2. **Icon di layar utama** dengan logo SKP Bukti
3. **Splash screen** biru saat dibuka
4. **Status bar HP** warna biru gelap (`#1e3a8a`)
5. **Bottom nav floating** tidak ketutup home indicator
6. **Bisa dibuka offline** (data terakhir di-cache)

---

## 📱 Cara Pakai

### 1. Buka dari Layar Utama
- Tap icon **SKP Bukti** di home screen HP
- Aplikasi terbuka full screen (tanpa browser)

### 2. Isi Profil (Pertama Kali)
- Menu **Profil** → klik **Edit** → isi semua data
- Klik ikon kamera di avatar → ambil foto dari HP

### 3. Buat Rencana Aksi
- Menu **Rencana** → klik **+ Tambah Rencana Aksi**

### 4. Input Kegiatan Harian
- Klik tombol **+ (FAB)** di tengah bottom nav
- Pilih rencana aksi → isi uraian → ambil foto

### 5. Cetak Rekap Bulanan
- Menu **Rekap** → pilih bulan/tahun → klik **Cetak / PDF**

---

## 🛠️ Troubleshooting PWA

### ❌ Banner install tidak muncul
**Penyebab & Solusi:**
1. **Sudah pernah dismiss** — clear localStorage atau buka di incognito
2. **Sudah terinstall** — cek layar utama
3. **iOS Safari** — iOS tidak support auto prompt, pakai Share → Add to Home Screen manual
4. **Browser tidak support** — pakai Chrome/Edge terbaru

### ❌ Icon tidak muncul di home screen
**Solusi:**
- Pastikan sudah deploy **versi baru** (bukan cuma save)
- Clear cache browser: Chrome → History → Clear browsing data
- Hapus shortcut lama, install ulang

### ❌ Aplikasi tidak bisa dibuka offline
**Solusi:**
- Buka online dulu sekali supaya SW ter-register
- Cek di Chrome: `chrome://inspect/#devices` → lihat Service Workers
- Apps Script ada batasan caching, jadi offline hanya untuk UI (data tetap butuh internet)

### ❌ Service Worker gagal register
**Normal di Apps Script!** — pesan "SW registration failed" di console itu wajar. Aplikasi tetap berjalan, hanya caching offline yang terbatas. Fitur install PWA tetap berfungsi.

### ❌ Di iOS, PWA tidak fullscreen
**Solusi:**
- Hapus shortcut lama dari home screen
- Buka di Safari → Share → Add to Home Screen lagi
- Pastikan pakai Safari (bukan Chrome iOS)

---

## ❓ FAQ

### Q: Apakah PWA ini bisa dikirim ke Play Store / App Store?
A: Tidak langsung. Untuk Play Store, bisa pakai **PWABuilder** (pwabuilder.com) untuk generate APK TWA dari URL web app. Untuk App Store, perlu proses lebih rumit.

### Q: Apakah data tersimpan offline?
A: **Tidak.** Data tetap disimpan di Google Spreadsheet. Caching PWA hanya untuk UI agar aplikasi tetap bisa dibuka saat koneksi lambat/terputus. Saat online kembali, data otomatis sinkron.

### Q: Foto profil ikut ter-cache?
A: **Ya**, foto profil & bukti dukung dari Google Drive ikut di-cache browser. Tapi kalau foto dihapus dari Drive, cache juga akan hilang.

### Q: Kenapa di iOS tidak bisa auto-install?
A: **Apple policy** — iOS tidak mengizinkan auto prompt install PWA. User harus manual via Share → Add to Home Screen. Aplikasi sudah berikan petunjuk otomatis via toast.

### Q: Apakah install PWA butuh internet?
A: **Ya**, untuk proses install butuh internet (download icon & manifest). Setelah terpasang, bisa dibuka offline (cached).

---

## 🎨 Fitur Lengkap

### Modul Aplikasi
- ✅ **Dashboard** (Presence style): Hero + Date + Circular Stats + Quick Actions
- ✅ **Rencana Aksi**: CRUD rencana + progres tracking
- ✅ **Input Kegiatan**: Form + upload foto + tautan
- ✅ **Riwayat**: Timeline + filter bulan/tahun/rencana
- ✅ **Rekap**: Preview + cetak PDF dengan kop surat
- ✅ **Profil**: Data pegawai + foto dari kamera

### PWA Features
- ✅ Installable di Android, iOS, Desktop
- ✅ Standalone display mode
- ✅ Custom icon & splash screen
- ✅ Theme color untuk status bar
- ✅ Safe area aware (notch & home indicator)
- ✅ Service Worker (Network First strategy)
- ✅ Offline UI caching
- ✅ Install prompt UI
- ✅ iOS install instructions

---

## 🔧 Update Aplikasi

Kalau sudah deploy & ingin update:

1. **Replace file** yang berubah di editor Apps Script
2. **Save** (Ctrl+S)
3. **Deploy → Manage deployments → Edit → New version → Deploy**
4. **Refresh PWA** di HP:
   - Tutup aplikasi sepenuhnya (swipe up)
   - Buka lagi dari icon di home screen
   - Atau clear cache: Settings → Apps → SKP Bukti → Clear Cache

---

Selamat menggunakan! 🚀📱
