# AI Interface for Ollama

Antarmuka web sederhana untuk berinteraksi dengan model AI Deepseek melalui Ollama. Proyek ini memungkinkan pengguna untuk mengakses dan berinteraksi dengan model AI melalui browser.

## Prasyarat

Sebelum menginstal, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/)
- [Ollama](https://ollama.ai/)
- Model Deepseek di Ollama

## Instalasi

1. Clone repositori

```bash
git clone https://github.com/eddyyucca/AI_Interface.git
cd AI_Interface
```

2. Instal dependensi

```bash
npm install
```

## Cara Menjalankan

1. Pastikan Ollama dengan model Deepseek sudah berjalan di sistem Anda

2. Jalankan server

```bash
node server.js
```

3. Buka browser dan akses

```
http://localhost:3000
```

## Struktur Proyek

```
├── node_modules/     # Dependensi proyek
├── public/          # File-file statis
│   ├── index.html   # Halaman utama interface
│   ├── script.js    # Logika client-side
│   └── style.css    # Styling interface
├── package.json     # Konfigurasi proyek
├── package-lock.json
├── README.md
└── server.js        # Server Node.js
```

## Fitur

- Interface web yang user-friendly
- Integrasi dengan Ollama
- Dukungan untuk model Deepseek
- Komunikasi real-time antara client dan server

## Troubleshooting

### Masalah Umum dan Solusi

1. Ollama tidak terdeteksi

   - Pastikan Ollama berjalan di background
   - Periksa status Ollama dengan command `ollama list`

2. Server tidak bisa diakses

   - Pastikan port 3000 tidak digunakan oleh aplikasi lain
   - Periksa firewall settings

3. Model Deepseek tidak merespon
   - Pastikan model sudah terinstal dengan `ollama pull deepseek`
   - Restart Ollama service

## Konfigurasi Ollama

### Windows

1. Instal Ollama

   - Download installer dari [Ollama Releases](https://github.com/ollama/ollama/releases)
   - Jalankan file installer Windows (.msi)
   - Restart komputer setelah instalasi

2. Pull model Deepseek

```bash
ollama pull deepseek
```

3. Verifikasi instalasi

```bash
ollama list
```

### Linux

1. Instal Ollama

```bash
curl https://ollama.ai/install.sh | sh
```

2. Jalankan service Ollama

```bash
systemctl start ollama
```

3. Pull model Deepseek

```bash
ollama pull deepseek
```

4. Verifikasi instalasi

```bash
ollama list
```

### macOS

1. Instal Ollama

   - Download aplikasi dari [Ollama.ai](https://ollama.ai)
   - Pindahkan ke folder Applications
   - Buka aplikasi Ollama

2. Pull model Deepseek

```bash
ollama pull deepseek
```

3. Verifikasi instalasi

```bash
ollama list
```

### Catatan Tambahan

- Windows: Pastikan WSL2 terinstal untuk performa terbaik
- Linux: Pastikan GPU drivers terinstal jika ingin menggunakan GPU
- macOS: Mendukung Apple Silicon (M1/M2/M3) dan Intel processors

## Kontak

Eddy Yucca - [GitHub](https://github.com/eddyyucca)

Project Link: [https://github.com/eddyyucca/AI_Interface](https://github.com/eddyyucca/AI_Interface)

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.
