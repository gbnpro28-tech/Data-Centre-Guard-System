// ============================================================================================
// 🛡️ TITANIUM SCRIPT AUDITOR - ECMASCRIPT MODULE (ESM) EDITION V5.0
// ============================================================================================
// Arsitektur ini dirancang khusus untuk lingkungan Node.js modern yang mengimplementasikan
// "type": "module". Penggunaan 'require' telah digantikan dengan 'import' secara absolut.
// ============================================================================================

import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

// Menetapkan konstanta target analisis secara dinamis dalam direktori operasional saat ini
const TARGET_FILE = './index.js';
const SYSTEM_PREFIX = '[TITANIUM_AUDITOR]';

console.log("=".repeat(80));
console.log(`🛡️  TITANIUM SCRIPT AUDITOR - ANALISIS STRUKTURAL KODE (ESM KERNEL)`);
console.log("=".repeat(80));
console.log(`${SYSTEM_PREFIX} Memulai inisialisasi diagnostik memori pada: ${TARGET_FILE}...`);

try {
    // Memvalidasi eksistensi berkas target sebelum melakukan alokasi memori buffer
    if (!fs.existsSync(TARGET_FILE)) {
        throw new Error(`Berkas target '${TARGET_FILE}' tidak terdeteksi di dalam direktori sistem.`);
    }

    // Memuat seluruh metrik teks ke dalam memori menggunakan enkripsi UTF-8 standar
    const rawSourceCode = fs.readFileSync(TARGET_FILE, 'utf8');
    const sourceLines = rawSourceCode.split('\n');
    
    // Alokasi variabel pelacakan keseimbangan matriks struktural (Scope Trackers)
    let bracketCounter = 0;      // Representasi keseimbangan kurung kurawal { }
    let parenthesisCounter = 0;  // Representasi keseimbangan tanda kurung ( )
    let totalLinesAnalyzed = 0;
    
    console.log(`${SYSTEM_PREFIX} Berkas berhasil dimuat. Total baris memori: ${sourceLines.length.toLocaleString()}`);
    console.log(`${SYSTEM_PREFIX} Mengeksekusi pemindaian anomali leksikal...`);
    console.log("-".repeat(80));

    // Iterasi komputasi baris demi baris menggunakan algoritma linier (O(N) Complexity)
    for (let index = 0; index < sourceLines.length; index++) {
        const currentLine = sourceLines[index];
        const sanitizedLine = currentLine.trim();
        
        // Melewati (Bypass) kalkulasi pada baris komentar absolut untuk mencegah false-positive
        if (sanitizedLine.startsWith('//') || sanitizedLine.startsWith('*')) {
            continue;
        }

        // Dekonstruksi karakter untuk mendeteksi penanda scope
        for (let charIndex = 0; charIndex < currentLine.length; charIndex++) {
            const char = currentLine[charIndex];
            
            if (char === '{') bracketCounter++;
            if (char === '}') bracketCounter--;
            if (char === '(') parenthesisCounter++;
            if (char === ')') parenthesisCounter--;
        }

        totalLinesAnalyzed++;

        // Sistem Pemutus Arus (Circuit Breaker) Otomatis:
        // Jika pada titik mana pun jumlah kurung tutup melebihi kurung buka, itu adalah fatal error
        if (bracketCounter < 0) {
            console.error(`\n❌ [ANOMALI STRUKTURAL FATAL TERDETEKSI]`);
            console.error(`   > Lokasi Kerusakan  : Sekitar Baris ${index + 1}`);
            console.error(`   > Cuplikan Kode     : ${sanitizedLine}`);
            console.error(`   > Deskripsi Teknis  : V8 Engine mendeteksi adanya kelebihan penutup Lexical Scope '}'.`);
            console.error(`   > Instruksi Resolusi: Hapus kurung tutup '}' pada baris tersebut atau pastikan baris di atasnya memiliki pembuka '{' yang valid.\n`);
            process.exit(1);
        }
    }

    // ============================================================================================
    // 📊 KESIMPULAN AUDIT & TELEMETRI HASIL DIAGNOSTIK
    // ============================================================================================
    console.log(`📊 LAPORAN DIAGNOSTIK AKHIR:`);
    console.log(`   > Total Baris Komputasi Aktif : ${totalLinesAnalyzed.toLocaleString()}`);
    console.log(`   > Sisa Kurung Kurawal { }     : ${bracketCounter}`);
    console.log(`   > Sisa Tanda Kurung ( )       : ${parenthesisCounter}`);
    console.log("-".repeat(80));

    if (bracketCounter > 0) {
        console.warn(`⚠️ [DEFISIT STRUKTURAL]: Arsitektur Anda kekurangan persis ${bracketCounter} buah kurung penutup '}'.`);
        console.warn(`💡 [TINDAKAN KOREKTIF]: Silakan gulir (scroll) 'index.js' ke baris paling bawah, lalu tambahkan sejumlah ${bracketCounter} buah tanda '}' tepat sebelum blok 'client.login()'.`);
    } else if (bracketCounter === 0 && parenthesisCounter === 0) {
        console.log(`✅ [STATUS INTEGRITAS MAX]: Sistem 100% simetris. Tidak terdeteksi adanya galat 'Unexpected end of input'.`);
        console.log(`   Anda kini dapat mengaktifkan 'node index.js' dengan aman.`);
    } else {
        console.warn(`⚠️ [PERINGATAN]: Terdapat anomali lain. Periksa kembali struktur '()' Anda jika nilainya tidak nol.`);
    }

} catch (diagnosticFault) {
    console.error(`\n❌ [KERNEL_PANIC] Kegagalan inisialisasi pada sistem Auditor:`);
    console.error(`   > Pesan Galat: ${diagnosticFault.message}`);
    console.error(`   > Pastikan Anda menjalankan skrip ini dari dalam folder root aplikasi Anda.`);
}
console.log("=".repeat(80));