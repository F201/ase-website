# ASELab Dashboard

Selamat datang di proyek ASELab Dashboard! Dokumen ini berisi panduan untuk berkontribusi pada proyek ini, termasuk cara submit commit, membuat pull request, debugging, dan build untuk produksi. Selain itu, terdapat juga konvensi penamaan untuk branch, variabel, dan fungsi.

## Daftar Isi
1. [Memulai](#memulai)
2. [Menjalankan Debugging Proyek](#menjalankan-debugging-proyek)
3. [Mengirimkan Commit](#mengirimkan-commit)
4. [Membuat Pull Request](#membuat-pull-request)
5. [Konvensi Penamaan](#konvensi-penamaan)
   - [Penamaan Branch](#penamaan-branch)
   - [Penamaan Variabel dan Fungsi](#penamaan-variabel-dan-fungsi)

## Memulai
1. **Clone Repository:**
   Pertama-tama, clone repository ini ke komputer Anda.
   ```bash
   git clone https://github.com/F201/ASELab-dashboard.git
   ```

2. **Install Dependencies:**
   Lalu, install dependencies yang diperlukan.
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   Jalankan server development untuk mulai bekerja.
   ```bash
   npm start
   ```

## Menjalankan Debugging Proyek
1. **Pergi ke Repository:**
   Arahkan terminal Anda ke direktori repository.
   ```bash
   cd [path ke repository Anda]
   ```

2. **Jalankan Proyek Secara Lokal:**
   Jalankan proyek di environment lokal Anda. Biasanya dengan perintah berikut:
   FE only
   ```bash
   cd [front end path] 
   npm run dev
   ```
   BE only
   ```bash
   cd [back end path] 
   npm run dev
   ```
   all
  ```
 start.bat
```
   production


## Mengirimkan Commit
Saat berkontribusi ke proyek ini, ikuti panduan berikut untuk mengirimkan commit:

1. **Buat Branch Baru:**
   Untuk setiap fitur atau perbaikan bug, buat branch baru dengan nama yang deskriptif.
   ```bash
   git checkout -b feature/nama-fitur-anda
   ```

2. **Lakukan Perubahan:**
   Lakukan perubahan pada kode sesuai dengan standar dan pedoman proyek ini.

3. **Commit Perubahan Anda:**
   Tulis pesan commit yang jelas dan singkat. Ikuti spesifikasi [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
   ```bash
   git add .
   git commit -m "feat: menambahkan deskripsi fitur baru"
   ```

4. **Push Perubahan Anda:**
   Push perubahan ke repository remote.
   ```bash
   git push origin feature/nama-fitur-anda
   ```

## Membuat Pull Request
Setelah Anda push perubahan, ikuti langkah-langkah berikut untuk membuat pull request:

1. **Navigasi ke Repository:**
   Buka repository GitHub di browser Anda.

2. **Buat Pull Request:**
   Klik tombol "New Pull Request" dan pilih branch Anda.

3. **Berikan Deskripsi:**
   Isi template pull request dengan deskripsi yang jelas tentang perubahan yang Anda buat dan nomor isu yang relevan.

4. **Minta Review:**
   Minta review dari anggota tim atau kontributor yang relevan.

5. **Tanggapi Umpan Balik:**
   Tanggapi umpan balik atau perubahan yang diminta dari reviewer.

6. **Merge Pull Request:**
   Setelah pull request Anda disetujui, merge ke branch utama.

## Konvensi Penamaan

### Penamaan Branch
Gunakan format berikut untuk penamaan branch:
- **Feature Branches:** `feature/short-description`
- **Bug Fix Branches:** `bugfix/short-description`
- **Hotfix Branches:** `hotfix/short-description`

### Penamaan Variabel dan Fungsi
Gunakan camelCase untuk nama variabel.
Gunakan nama yang deskriptif yang mencerminkan tujuan dari variabel/fungsi tersebut.

Contoh:
```javascript
let userName = "WahyuKakap";
const maxRetries = 5;
let isLoggedIn = true;
```

Dengan mengikuti panduan ini, kita bisa menjaga kode tetap rapi dan mudah dipahami. Selamat berkontribusi dan semoga sukses!