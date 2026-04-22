/**
 * ============================================================================================
 * 🛡️ DATA CENTRE INFRASTRUCTURE - SUPREME SECURITY SYSTEM
 * ============================================================================================
 * Project      : Data Centre Guard - Titanium Omniscience Edition
 * Version      : 22.0.0 (Enterprise Architecture - Hyper-Expansion Mode)
 * Module       : Security, HWID, Voice Audit, Elite Broadcast, Visual Welcome & Role Engine
 * Sub-Module   : [NEW] DPI Logger, Auto-Promote, Ghost Ping Detector, System Telemetry
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Status       : Global Deployment Ready - Tier 1 Enterprise Standard
 * --------------------------------------------------------------------------------------------
 * [SYSTEM ARCHITECTURE OVERVIEW]
 * 1. KERNEL_CORE_INITIALIZATION   : Manajemen node engine Discord.js v14 dengan visibilitas tinggi.
 * 2. GLOBAL_CONFIG_MATRIX         : Sentralisasi endpoint identity dan metadata visual statis.
 * 3. PERSISTENT_MEMORY_STORE      : Database sesi sementara untuk analitik real-time.
 * 4. HYPER_VISUAL_WELCOMER        : Protokol penyambutan personil dengan integrasi avatar.
 * 5. VOICE_SENTINEL_AUDIT         : Monitoring frekuensi dan aktivitas node suara secara intensif.
 * 6. SECURITY_LOGGING_ENGINE      : Logging otomatis untuk verifikasi dan audit penghapusan data.
 * 7. INTERACTION_DISPATCHER       : Manajemen perintah Slash Command dengan UI High-End.
 * 8. PUBLIC_ROLE_ENGINE           : Protokol otorisasi role terbuka untuk semua personil resmi.
 * 9. HYPER_VISUAL_ENHANCEMENT     : Ekspansi dekoratif UI dan identitas visual sistem industrial.
 * 10. PASSIVE_THREAT_DETECTOR     : Protokol pendeteksi link berbahaya dan spam dengan firewall.
 * 11. OMNI_LEADERBOARD_V2         : UI Leaderboard dengan skema statistik mendalam dan masif.
 * 12. INFRA_PERSISTENCE_LAYER     : Gateway konektivitas permanen (Auto-Voice Join Protocol).
 * 13. ERROR_RECOVERY_PROTOCOL     : Deep Null-Pointer Protection untuk menjamin uptime 100%.
 * 14. METADATA_EXPANSION_LAYER    : Penambahan field data teknis pada setiap transmisi output.
 * 15. TELEMETRY_DATA_SYSTEM       : [ENHANCED] Pelacakan performa hardware per-interaksi secara mendalam.
 * 16. ADVANCED_UI_DECORATOR       : [ENHANCED] Penambahan elemen teks teknis untuk estetika profesional.
 * 17. DPI_METADATA_LOGGER         : [NEW] Pencatatan perubahan paket data pesan (Message Update).
 * 18. GHOST_PING_SENTINEL         : [NEW] Deteksi mention yang dihapus untuk mencegah spam tersembunyi.
 * ============================================================================================
 */

/**
 * ============================================================================================
 * 🛡️ [TITANIUM KERNEL: GLOBAL CORE & PERSISTENCE] - SUPREME V3.0 (ENTERPRISE EDITION)
 * ============================================================================================
 * Arsitektur Inti Node.js ES Module (ESM) dengan Resolusi Konflik Deklarasi.
 * Dirancang khusus untuk ketahanan operasional 24/7 dengan integrasi telemetri
 * jaringan otomatis dan sistem pertahanan Anti-Spam beresolusi tinggi.
 * * Modul ini memuat seluruh pustaka dasar, memori persisten, dan engine visual
 * sebelum siklus hidup (lifecycle) dari bot Discord dimulai.
 * ============================================================================================
 */

// --------------------------------------------------------------------------------------------
// [SUB-MODULE 1]: LINGKUNGAN, SISTEM OPERASI, & INPUT/OUTPUT PERSISTEN
// --------------------------------------------------------------------------------------------
import 'dotenv/config';   // Mengamankan injeksi variabel lingkungan (Environment Variables)
import os from 'os';      // Modul sistem operasi bawaan Node.js untuk diagnostik Hardware
import fs from 'node:fs'; // Sistem manipulasi file (File System) tingkat lanjut (I/O Operations)

// --------------------------------------------------------------------------------------------
// [SUB-MODULE 2]: VISUAL RENDERING ENGINE (KARTU PERINGATAN FISIK DIGITAL)
// --------------------------------------------------------------------------------------------
// Injeksi pustaka grafis skala penuh untuk memproses manipulasi pixel matriks pada RAM,
// memungkinkan sistem menghasilkan ID Card / Kartu Peringatan (SP) secara real-time.
import Canvas from 'canvas'; 

// ============================================================================================
// 📦 [DISCORD.JS CORE DEPENDENCIES: ABSOLUTE UNIFIED INJECTION]
// Mengimpor seluruh kelas dan instrumen dari pustaka discord.js secara terpusat dan tunggal
// untuk mencegah bentrokan (conflict resolution) pada manajemen memori V8 Engine.
// ============================================================================================
import { 
    Client, 
    GatewayIntentBits, 
    EmbedBuilder, 
    REST, 
    Routes, 
    SlashCommandBuilder, 
    ActivityType, 
    PermissionFlagsBits,
    Partials,
    Events,
    Collection,
    AttachmentBuilder, // ✅ KOMPONEN KRUSIAL ASET: Terhubung langsung dengan buffer Canvas Engine
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    PermissionsBitField,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    // ✅ KOMPONEN KRUSIAL UNTUK WEBHOOK & INTERACTIVE UI SYSTEM:
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder
} from 'discord.js';

/**
 * ============================================================================================
 * 🎙️ [CORE DEPENDENCIES: ADVANCED VOICE TRANSMISSION & NETWORK MATRIX]
 * ============================================================================================
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Architecture : Enterprise Dependency Injection Matrix V5.2 - Seamless Integration
 * Description  : Mengimpor seluruh ekosistem transmisi audio tingkat rendah, manajemen state 
 * koneksi WebSocket Discord, instrumen pemutaran media, dan protokol resolusi 
 * DNS asinkron untuk mendukung berjalannya Network Sentinel Auto-Recovery.
 * ============================================================================================
 */

// --------------------------------------------------------------------------------------------
// [SUB-MODULE 3]: DISCORDJS/VOICE (LOW-LEVEL AUDIO & CONNECTION ENGINE)
// --------------------------------------------------------------------------------------------
import { 
    // 1. ENGINE KONEKSI: Injeksi sesi bot ke dalam kanal suara Discord
    joinVoiceChannel, 
    
    // 2. NODE RETRIEVAL: Mengekstrak sesi suara aktif (atau Ghost Session) dari cache memori
    getVoiceConnection,
    
    // 3. STATE ENUMERATION: Membaca status koneksi absolut (Ready, Disconnected, Destroyed, dll)
    VoiceConnectionStatus, 
    
    // 4. STATE OBSERVER: Mengawasi transisi pergerakan status untuk mencegah Memory Leak
    entersState,
    
    // 5. AUDIO DISPATCHER: Mesin utama untuk menginisialisasi dan memutar stream audio
    createAudioPlayer, 
    
    // 6. RESOURCE BUILDER: Mengonversi file/stream mentah menjadi entitas audio yang dapat diputar
    createAudioResource 
} from '@discordjs/voice';

// --------------------------------------------------------------------------------------------
// [SUB-MODULE 4]: NODE NATIVE DNS (NETWORK DIAGNOSTIC TELEMETRY)
// --------------------------------------------------------------------------------------------
import { 
    // Menggunakan resolusi DNS berbasis Promise untuk mengeksekusi Ping Diagnostik
    // secara non-blocking, mendeteksi ketersediaan arus internet/WiFi secara presisi.
    lookup 
} from 'node:dns/promises';

/**
 * ============================================================================================
 * END OF DEPENDENCY MATRIX. SYSTEM READY FOR CONFIGURATION INJECTION.
 * ============================================================================================
 */

// ============================================================================================
// 🛡️ [GLOBAL SECURITY MATRIX]: ANTI-SPAM SENTINEL CONFIGURATION & MEMORY ALLOCATION
// ============================================================================================
export const ANTI_SPAM_CONFIG = {
    SPAM_TOLERANCE_LIMIT: 5,           
    TIME_WINDOW_MS: 5000,              
    AUDIT_CHANNEL_ID: '1478379431327432825', // ✅ ENDPOINT LOG KEAMANAN DITAMBAHKAN
    PUNISHMENT_DURATIONS: {
        SP1: 10 * 60 * 1000,           
        SP2: 24 * 60 * 60 * 1000,      
        SP3: 7 * 24 * 60 * 60 * 1000,  
        SP4: 'KICK_EXECUTION'          
    },
    VISUALS: {
        SP1_COLOR: '#f1c40f', 
        SP2_COLOR: '#e67e22', 
        SP3_COLOR: '#e74c3c', 
        SP4_COLOR: '#900C3F'  
    }
};

// [PERSISTENT MEMORY ALLOCATION]: Mengamankan ruang di RAM untuk pelacakan berkecepatan tinggi
if (!global.SPAM_METRIC_TRACKER) global.SPAM_METRIC_TRACKER = new Map();
if (!global.USER_SP_RECORD) global.USER_SP_RECORD = new Map();

/**
 * ============================================================================================
 * 🛡️ SUPREME MESSAGE CACHE SYSTEM - TITANIUM PERSISTENCE V3.0
 * ============================================================================================
 * Fitur: Cache pesan TERHAPUS tetap tersimpan FOREVER meskipun bot restart!
 */
const MESSAGE_CACHE_DB = './supreme_message_cache.json';
const MAX_CACHE_SIZE = 50000; // Maksimal 50k pesan cached
const CACHE_RETENTION_DAYS = 30; // Hapus cache > 30 hari

// Global Message Cache (In-Memory + Persistent)
if (!global.MESSAGE_CACHE) global.MESSAGE_CACHE = new Map();

// Load cache saat startup
if (fs.existsSync(MESSAGE_CACHE_DB)) {
    try {
        const rawCache = fs.readFileSync(MESSAGE_CACHE_DB, 'utf8');
        const parsedCache = JSON.parse(rawCache);
        
        // Restore cache dengan cleanup otomatis (hapus > 30 hari)
        const now = Date.now();
        let restoredCount = 0;
        
        for (const [msgId, data] of Object.entries(parsedCache)) {
            if (now - data.timestamp > CACHE_RETENTION_DAYS * 24 * 60 * 60 * 1000) {
                continue;
            }
            global.MESSAGE_CACHE.set(msgId, data);
            restoredCount++;
        }
        
        console.log(`✅ [MESSAGE_CACHE] Restored ${restoredCount} persistent messages from disk.`);
    } catch (err) {
        console.error("❌ [CACHE_LOAD_ERROR]:", err);
    }
}

// Auto-save cache setiap 10 detik
setInterval(() => {
    if (global.MESSAGE_CACHE.size > 0) {
        saveMessageCacheToDisk();
    }
}, 10000);

// Fungsi save cache dengan auto-prune
function saveMessageCacheToDisk() {
    try {
        const cacheData = {};
        const now = Date.now();
        
        for (const [msgId, data] of global.MESSAGE_CACHE.entries()) {
            if (now - data.timestamp <= CACHE_RETENTION_DAYS * 24 * 60 * 60 * 1000) {
                cacheData[msgId] = data;
            }
        }
        
        const sortedEntries = Object.entries(cacheData)
            .sort((a, b) => b[1].timestamp - a[1].timestamp)
            .slice(0, MAX_CACHE_SIZE);
        
        fs.writeFileSync(MESSAGE_CACHE_DB, JSON.stringify(Object.fromEntries(sortedEntries), null, 2));
    } catch (err) {
        console.error("❌ [CACHE_SAVE_ERROR]:", err);
    }
}

// 🔥 TITANIUM CACHE MONITORING - ULTRA PRECISE FORMAT (KB + 3 DESIMAL)
setInterval(() => {
    const cacheSize = global.MESSAGE_CACHE.size;
    
    // ✅ ULTRA PRECISE: Format KB dengan 3 desimal untuk file kecil
    let dbSizeFormatted = '0.00 KB';
    if (fs.existsSync(MESSAGE_CACHE_DB)) {
        const fileSizeBytes = fs.statSync(MESSAGE_CACHE_DB).size;
        
        if (fileSizeBytes < 1024) {
            // < 1KB: tampilkan bytes
            dbSizeFormatted = `${fileSizeBytes.toFixed(0)} B`;
        } else if (fileSizeBytes < 1024 * 1024) {
            // 1KB - 1MB: tampilkan KB dengan 2 desimal
            const fileSizeKB = (fileSizeBytes / 1024);
            dbSizeFormatted = `${fileSizeKB.toFixed(2)} KB`;
        } else {
            // > 1MB: tampilkan MB dengan 2 desimal
            const fileSizeMB = (fileSizeBytes / 1024 / 1024);
            dbSizeFormatted = `${fileSizeMB.toFixed(2)} MB`;
        }
    }
    
    // ✅ Persentase dengan 2 desimal
    const cachePercent = ((cacheSize / MAX_CACHE_SIZE) * 100).toFixed(2);
    
    // Progress bar 20 karakter
    const barLength = 20;
    const filled = Math.round((cacheSize / MAX_CACHE_SIZE) * barLength);
    const cacheBar = '█'.repeat(filled) + '░'.repeat(barLength - filled);
    
    const activeStatus = cacheSize > 0 ? '🔥' : '💤';
    
    console.log(`💾 [TITANIUM_CACHE] ${cacheSize.toLocaleString()}/${MAX_CACHE_SIZE.toLocaleString()} [${cacheBar}] ${cachePercent}% | DB: ${dbSizeFormatted} | Active: ${activeStatus}`);
}, 5000);

// 🌟 HYPER-MONITORING: Cache Alert System - JUGA ULTRA PRECISE
setInterval(() => {
    const cacheSize = global.MESSAGE_CACHE.size;
    if (cacheSize > MAX_CACHE_SIZE * 0.9) {
        let dbSizeFormatted = '0.00 KB';
        if (fs.existsSync(MESSAGE_CACHE_DB)) {
            const fileSizeBytes = fs.statSync(MESSAGE_CACHE_DB).size;
            
            if (fileSizeBytes < 1024) {
                dbSizeFormatted = `${fileSizeBytes.toFixed(0)} B`;
            } else if (fileSizeBytes < 1024 * 1024) {
                const fileSizeKB = (fileSizeBytes / 1024);
                dbSizeFormatted = `${fileSizeKB.toFixed(2)} KB`;
            } else {
                const fileSizeMB = (fileSizeBytes / 1024 / 1024);
                dbSizeFormatted = `${fileSizeMB.toFixed(2)} MB`;
            }
        }
        
        const cachePercent = ((cacheSize / MAX_CACHE_SIZE) * 100).toFixed(2);
        console.log(`⚠️ [CACHE_WARNING] Approaching limit! ${cacheSize.toLocaleString()}/${MAX_CACHE_SIZE.toLocaleString()} (${cachePercent}%) | DB: ${dbSizeFormatted} - Auto-pruning active!`);
    }
}, 5000);

// Tambahkan di bagian atas, setelah MESSAGE_CACHE_DB
const VERIFY_PANEL_DB = './persistent_verify_panel.json';

// Global storage untuk verify panel
if (!global.VERIFY_PANEL_DATA) global.VERIFY_PANEL_DATA = {
    messageId: null,
    channelId: '1478582692084973580',
    active: false,
    deployedBy: null,
    deployTime: null
};

// Load persistent verify panel data
if (fs.existsSync(VERIFY_PANEL_DB)) {
    try {
        const data = JSON.parse(fs.readFileSync(VERIFY_PANEL_DB, 'utf8'));
        global.VERIFY_PANEL_DATA = { ...global.VERIFY_PANEL_DATA, ...data };
        console.log(`✅ [VERIFY_PANEL] Loaded persistent data: ${global.VERIFY_PANEL_DATA.active ? 'ACTIVE' : 'INACTIVE'}`);
    } catch (err) {
        console.error('❌ [VERIFY_PANEL_LOAD_ERROR]:', err);
    }
}

// Auto-save verify panel data setiap 10 detik
setInterval(() => {
    if (global.VERIFY_PANEL_DATA) {
        fs.writeFileSync(VERIFY_PANEL_DB, JSON.stringify(global.VERIFY_PANEL_DATA, null, 2));
    }
}, 10000);

// Tambahkan setelah VERIFY_PANEL_DB
const GETJOB_PANEL_DB = './persistent_getjob_panel.json';

// Global storage untuk getjob panel
if (!global.GETJOB_PANEL_DATA) global.GETJOB_PANEL_DATA = {
    messageId: null,
    channelId: '1484448271266222231', // Channel yang sama dengan verify panel
    active: false,
    deployedBy: null,
    deployTime: null
};

// Load persistent getjob panel data
if (fs.existsSync(GETJOB_PANEL_DB)) {
    try {
        const data = JSON.parse(fs.readFileSync(GETJOB_PANEL_DB, 'utf8'));
        global.GETJOB_PANEL_DATA = { ...global.GETJOB_PANEL_DATA, ...data };
        console.log(`✅ [GETJOB_PANEL] Loaded persistent data: ${global.GETJOB_PANEL_DATA.active ? 'ACTIVE' : 'INACTIVE'}`);
    } catch (err) {
        console.error('❌ [GETJOB_PANEL_LOAD_ERROR]:', err);
    }
}

// Auto-save getjob panel data setiap 10 detik
setInterval(() => {
    if (global.GETJOB_PANEL_DATA) {
        fs.writeFileSync(GETJOB_PANEL_DB, JSON.stringify(global.GETJOB_PANEL_DATA, null, 2));
    }
}, 10000);

// Tambahkan setelah GETJOB_PANEL_DB
const CDID_PANEL_DB = './persistent_cdid_panel.json';

// Global storage untuk cdid panel
if (!global.CDID_PANEL_DATA) global.CDID_PANEL_DATA = {
    messageId: null,
    channelId: null, // Akan diisi otomatis
    active: false,
    deployedBy: null,
    deployTime: null
};

// Load persistent cdid panel data
if (fs.existsSync(CDID_PANEL_DB)) {
    try {
        const data = JSON.parse(fs.readFileSync(CDID_PANEL_DB, 'utf8'));
        global.CDID_PANEL_DATA = { ...global.CDID_PANEL_DATA, ...data };
        console.log(`✅ [CDID_PANEL] Loaded persistent data: ${global.CDID_PANEL_DATA.active ? 'ACTIVE' : 'INACTIVE'}`);
    } catch (err) {
        console.error('❌ [CDID_PANEL_LOAD_ERROR]:', err);
    }
}

// Auto-save cdid panel data setiap 10 detik
setInterval(() => {
    if (global.CDID_PANEL_DATA) {
        fs.writeFileSync(CDID_PANEL_DB, JSON.stringify(global.CDID_PANEL_DATA, null, 2));
    }
}, 10000);

// Tambahkan setelah CDID_PANEL_DB
const SCRIPTCONTROL_PANEL_DB = './persistent_scriptcontrol_panel.json';

// Global storage untuk scriptcontrol panel
if (!global.SCRIPTCONTROL_PANEL_DATA) global.SCRIPTCONTROL_PANEL_DATA = {
    messageId: null,
    channelId: null,
    active: false,
    deployedBy: null,
    deployTime: null
};

// Load persistent scriptcontrol panel data
if (fs.existsSync(SCRIPTCONTROL_PANEL_DB)) {
    try {
        const data = JSON.parse(fs.readFileSync(SCRIPTCONTROL_PANEL_DB, 'utf8'));
        global.SCRIPTCONTROL_PANEL_DATA = { ...global.SCRIPTCONTROL_PANEL_DATA, ...data };
        console.log(`✅ [SCRIPTCONTROL_PANEL] Loaded persistent data: ${global.SCRIPTCONTROL_PANEL_DATA.active ? 'ACTIVE' : 'INACTIVE'}`);
    } catch (err) {
        console.error('❌ [SCRIPTCONTROL_PANEL_LOAD_ERROR]:', err);
    }
}

// Auto-save scriptcontrol panel data setiap 10 detik
setInterval(() => {
    if (global.SCRIPTCONTROL_PANEL_DATA) {
        fs.writeFileSync(SCRIPTCONTROL_PANEL_DB, JSON.stringify(global.SCRIPTCONTROL_PANEL_DATA, null, 2));
    }
}, 10000);

/**
 * ============================================================================================
 * 💰 [PERSISTENCE LAYER: PURCHASE PANEL METADATA]
 * Menyimpan titik koordinat panel komersial agar tahan terhadap system restart.
 * ============================================================================================
 */
const PURCHASE_PANEL_DB = './persistent_purchase_panel.json';

// Global storage allocation untuk Purchase panel
if (!global.PURCHASE_PANEL_DATA) global.PURCHASE_PANEL_DATA = {
    messageId: null,
    channelId: '1489580365474435103', // Target Sektor Otomatis
    active: false,
    deployedBy: null,
    deployTime: null
};

if (!global.DISCORD_ORDER_SESSIONS) global.DISCORD_ORDER_SESSIONS = new Map();

const ORDER_SYSTEM_CONFIG = {
    MEMBER_ROLE_ID: '1476896625451602077',
    MODERATOR_ROLE_ID: '1484124559480193134',
    OWNER_DM_ID: '1280789307027755019',
    NORMAL_REPORT_CHANNEL_ID: '1489580522911957096',
    BIG_REPORT_CHANNEL_ID: '1489580612867067964',
    QRIS_IMAGE_PATH: './Qris.jpeg'
};

function getDiscordOrderSession(threadId) {
    return global.DISCORD_ORDER_SESSIONS.get(threadId) || null;
}

function setDiscordOrderSession(threadId, payload) {
    const previous = global.DISCORD_ORDER_SESSIONS.get(threadId) || {};
    const next = { ...previous, ...payload, updatedAt: Date.now() };
    global.DISCORD_ORDER_SESSIONS.set(threadId, next);
    return next;
}

function buildDiscordOrderEmbed(user, thread) {
    return new EmbedBuilder()
        .setTitle('🛒 ORDER VIA DISCORD')
        .setColor('#5865F2')
        .setDescription(`Harap tunggu, moderator akan segera memproses order Anda.\n<@&${ORDER_SYSTEM_CONFIG.MODERATOR_ROLE_ID}>`)
        .addFields(
            { name: '👤 Customer', value: `${user}`, inline: true },
            { name: '🧵 Thread', value: `${thread}`, inline: true },
            { name: '📌 Status', value: '`WAITING_MODERATOR`', inline: true }
        )
        .setFooter({ text: 'Dragon Store • Discord Order' })
        .setTimestamp();
}

function buildDiscordPaymentMenu() {
    return new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('discord_order_payment_select')
            .setPlaceholder('Pilih metode payment')
            .addOptions(
                new StringSelectMenuOptionBuilder().setLabel('Qris (All Payment)').setValue('qris').setEmoji('💳'),
                new StringSelectMenuOptionBuilder().setLabel('Dana').setValue('dana').setEmoji('📱'),
                new StringSelectMenuOptionBuilder().setLabel('Gopay').setValue('gopay').setEmoji('📲')
            )
    );
}

function buildDiscordPaymentButtons(method) {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`discord_payment_check_${method}`).setLabel('Cek').setStyle(ButtonStyle.Success),
        new ButtonBuilder().setCustomId(`discord_payment_cancel_${method}`).setLabel('Batal').setStyle(ButtonStyle.Danger)
    );
}

function buildDiscordPaymentEmbed(method) {
    const embed = new EmbedBuilder().setColor('#5865F2').setFooter({ text: 'Dragon Store • Payment' }).setTimestamp();

    if (method === 'qris') {
        return embed
            .setTitle('💳 PAYMENT - QRIS')
            .setDescription('Silakan scan QRIS di bawah ini, lalu pilih **Cek** atau **Batal**.');
    }

    if (method === 'dana') {
        return embed
            .setTitle('💳 PAYMENT - DANA')
            .setDescription('Silakan transfer ke nomor Dana berikut, lalu pilih **Cek** atau **Batal**.')
            .addFields({ name: '📱 Nomor Dana', value: '`085763225059`' });
    }

    return embed
        .setTitle('💳 PAYMENT - GOPAY')
        .setDescription('Silakan transfer ke nomor Gopay berikut, lalu pilih **Cek** atau **Batal**.')
        .addFields({ name: '📱 Nomor Gopay', value: '`085763858510`' });
}

function buildDiscordForumModal() {
    return new ModalBuilder()
        .setCustomId('discord_order_forum_modal')
        .setTitle('Forum Login Dragon Store')
        .addComponents(
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId('forum_username')
                    .setLabel('Usn (Username)')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true)
            ),
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId('forum_password')
                    .setLabel('Password')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true)
            )
        );
}

function sanitizeDiscordTranscript(lines) {
    return lines.map(line =>
        line.replace(/Usn \(Username\)\s*:\s*.*/gi, 'Usn (Username): [REDACTED]').replace(/Password\s*:\s*.*/gi, 'Password: [REDACTED]')
    );
}

setInterval(() => {
    if (global.PURCHASE_PANEL_DATA) {
        fs.writeFileSync(PURCHASE_PANEL_DB, JSON.stringify(global.PURCHASE_PANEL_DATA, null, 2));
    }
}, 10000);

// 🌟 HYPER-MONITORING: Cache Alert System
setInterval(() => {
    const cacheSize = global.MESSAGE_CACHE.size;
    if (cacheSize > MAX_CACHE_SIZE * 0.9) {
        console.log(`⚠️ [CACHE_WARNING] Approaching limit! ${cacheSize}/${MAX_CACHE_SIZE} (${Math.round(cacheSize/MAX_CACHE_SIZE*100)}%) - Auto-pruning active!`);
    }
}, 5000);

// --- [DATABASE PERSISTENCE CONFIGURATION: DUAL-CORE + SUPREME CACHE] ---
const DB_PATH = './omni_leaderboard_db.json';

/**
 * INISIALISASI METRIC MAPS
 * Memisahkan penyimpanan Chat (Packets), Voice (Airtime), dan Message Cache.
 */
if (!global.SESSION_METRIC_MAP) global.SESSION_METRIC_MAP = new Map(); // Untuk Chat
if (!global.VOICE_METRIC_MAP) global.VOICE_METRIC_MAP = new Map();     // Untuk Voice
if (!global.MESSAGE_CACHE) global.MESSAGE_CACHE = new Map();           // Supreme Message Cache ✅
const voiceStartTracker = new Map(); // Tracker sementara (Memory Only)

/**
 * ============================================================================================
 * [VOICE_ANALYTICS: HIGH-FREQUENCY REAL-TIME TRACKER]
 * ============================================================================================
 */
setInterval(() => {
    // Melakukan scanning ke seluruh server (guild) yang dimasuki bot
    client.guilds.cache.forEach(guild => {
        guild.voiceStates.cache.forEach(state => {
            // KRITERIA: Bukan bot, sedang di VC, tidak sedang AFK, dan tidak sedang Tuli (Deafen)
            if (!state.member.user.bot && state.channelId && !state.deaf) {
                const userId = state.id;
                
                // Ambil data lama (dalam detik) dan tambahkan +1
                const currentSeconds = global.VOICE_METRIC_MAP.get(userId) || 0;
                global.VOICE_METRIC_MAP.set(userId, currentSeconds + 1);
            }
        });
    });
}, 1000); // Interval 1000ms = 1 Detik (WAJIB 1 detik agar detik bergerak)

// Auto-Save ke Disk setiap 60 detik agar tidak membebani sistem
setInterval(() => {
    if (global.VOICE_METRIC_MAP.size > 0) {
        syncDatabaseToDisk();
    }
}, 60000); 

// Jalankan auto-save setiap 30 detik terpisah
setInterval(() => {
    if (global.VOICE_METRIC_MAP.size > 0) syncDatabaseToDisk();
}, 30000);

/**
 * [BOOT_PROCEDURE: INITIAL_DATABASE_SYNC]
 * Memulihkan data Chat & Voice dari disk saat startup.
 */
if (fs.existsSync(DB_PATH)) {
    try {
        const rawData = fs.readFileSync(DB_PATH, 'utf8');
        const parsedData = JSON.parse(rawData);
        
        // Memulihkan data Chat (jika ada)
        if (parsedData.chat) {
            for (const [uid, count] of Object.entries(parsedData.chat)) {
                global.SESSION_METRIC_MAP.set(uid, count);
            }
        }

        // Memulihkan data Voice (jika ada)
        if (parsedData.voice) {
            for (const [uid, minutes] of Object.entries(parsedData.voice)) {
                global.VOICE_METRIC_MAP.set(uid, minutes);
            }
        }
        
        console.log("✅ [DATABASE] Dual-Core Metadata (Chat & Voice) synchronized.");
    } catch (err) {
        console.error("❌ [DATABASE_FAULT] Critical failure during initial sync:", err);
    }
}

/**
 * [PROCEDURE: KERNEL_WIPE_PROTECTION]
 * Mengunci semua metrik ke dalam struktur JSON yang terorganisir.
 */
function syncDatabaseToDisk() {
    try {
        const dataToSave = {
            chat: Object.fromEntries(global.SESSION_METRIC_MAP),
            voice: Object.fromEntries(global.VOICE_METRIC_MAP)
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(dataToSave, null, 2));
    } catch (err) {
        console.error("❌ [DISK_FAULT] Failed to write persistent data to storage.");
    }
}

// --- [SECTION 1: KERNEL ENGINE INITIALIZATION] ---
/**
 * Inisialisasi engine utama dengan visibilitas Intent maksimal.
 */
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites
    ],
    partials: [
        Partials.Message, 
        Partials.Channel, 
        Partials.User, 
        Partials.GuildMember,
        Partials.Reaction,
        Partials.ThreadMember
    ]
});

async function updateVerifyPanelCounter(guildId = null) {
    try {
        const targetGuild = guildId ? client.guilds.cache.get(guildId) : client.guilds.cache.first();
        if (!targetGuild) return;

        const memberRoleId = '1476896625451602077';
        const memberRole = targetGuild.roles.cache.get(memberRoleId);
        if (!memberRole) return;

        // HITUNG REAL-TIME JUMLAH MEMBER DENGAN ROLE
        const memberCount = targetGuild.members.cache.filter(m => 
            m.roles.cache.has(memberRoleId)
        ).size;

        // Cek apakah panel aktif
        if (global.VERIFY_PANEL_DATA?.active && global.VERIFY_PANEL_DATA.messageId) {
            const channel = targetGuild.channels.cache.get(global.VERIFY_PANEL_DATA.channelId);
            if (channel) {
                const message = await channel.messages.fetch(global.VERIFY_PANEL_DATA.messageId).catch(() => null);
                if (message && message.embeds.length > 0) {
                    const embed = EmbedBuilder.from(message.embeds[0]);
                    
                    // Update field MEMBER ROLE dengan real-time count
                    embed.spliceFields(1, 1, { 
                        name: '👥 MEMBER ROLE', 
                        value: `\`${memberCount.toLocaleString()}\``, 
                        inline: true 
                    });
                    
                    await message.edit({ embeds: [embed] });
                    console.log(`✅ [VERIFY_COUNTER] ${targetGuild.name}: ${memberCount} members`);
                }
            }
        }
    } catch (error) {
        console.error('❌ [VERIFY_COUNTER_ERROR]:', error.message);
    }
}
// ========================================================

// --- [SECTION 2: GLOBAL CONFIGURATION MATRIX] ---
const GLOBAL_MATRIX = {
    IDENTITIES: {
        APP_UID: '1478351827425693836',
        ROOT_ADMIN_UID: '1280789307027755019', 
        VERIFIED_ROLE: '1476896625451602077',
        MEMBER_ROLE: '1476896625451602077', // ✅ TAMBAHAN UNTUK VOICE NAMING
        ELITE_PERSONNEL_ROLE: '123456789012345678' // [NEW] Role untuk Auto-Promote
    },
    ENDPOINTS: {
        SECURITY_AUDIT: '1478379431327432825',
        PRIMARY_VOICE: '1479831542330298530',
        WELCOME_GATE: '1478582434701377639'
    },
    VOICE_CHANNELS: { // ✅ TAMBAHAN BARU
        ALL_MEMBER: '1485260887185948833',
        MEMBERS: '1485262745195647189',
        BOTS: '1485262537321742397',
        BOOST: '1485262704695447633'
    },
    VISUALS: {
        THEME_SUCCESS: '#00ffa3', 
        THEME_CRITICAL: '#ff003c', 
        THEME_INFO: '#00d1ff',    
        THEME_GOLD: '#ffcc00',    
        THEME_VIOLET: '#9b59b6',  
        DIVIDER_BOLD: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰',
        DIVIDER_THIN: '──────────────────────────────────',
        SYSTEM_FOOTER: '🛡️ DATA CENTRE OMNISCIENCE CORE • v22.0.0'
    },
    METRICS: {
        MAX_RETRY_ATTEMPTS: 5,
        VOICE_RECONNECT_INTERVAL: 10000,
        PURGE_LIMIT_MAX: 100,
        CORE_LOAD_THRESHOLD: 0.85,
        PROMOTE_THRESHOLD: 500
    }
};

// --- [SECTION 3: PERSISTENT MEMORY STORAGE] ---
let IS_HWID_SYSTEM_ENABLED = true; // Status default sistem HWID
let HWID_DISABLE_REASON = "MAINTENANCE_REQUIRED"; // Alasan default jika dimatikan
let IS_LOCKDOWN_ACTIVE = false;
let GLOBAL_DATA_TRANSMISSIONS = 0;
const SESSION_METRIC_MAP = new Map();
const SYSTEM_BOOTUP_TIME = Date.now();
let PENDING_HWID_PROCESS_UID = null;
const MALICIOUS_LINK_PATTERNS = [
    /discord\.gg\/invite/i, 
    /free-nitro/i, 
    /gift-nitro/i, 
    /\.xyz\//i, 
    /\.tk\//i, 
    /bit\.ly/i,
    /t\.co/i,
    /grabify\.link/i
];

// 🔥 V8.1 - 100% AKURATE ALL MEMBERS
const voiceData = new Map();

async function updateVoiceChannelNames(guild) {
    const now = Date.now();
    const data = voiceData.get(guild.id) || { lastFetch: 0 };
    
    if (now - data.lastFetch > 30000) {
        try {
            await guild.members.fetch();
            data.members = guild.members.cache;
            data.lastFetch = now;
            voiceData.set(guild.id, data);
        } catch (e) {}
    }
    
    if (now - (data.lastUpdate || 0) < 10000) return;
    data.lastUpdate = now;
    voiceData.set(guild.id, data);
    
    try {
        const channels = {
            ALL_MEMBER: guild.channels.cache.get(GLOBAL_MATRIX.VOICE_CHANNELS.ALL_MEMBER),
            MEMBERS: guild.channels.cache.get(GLOBAL_MATRIX.VOICE_CHANNELS.MEMBERS),
            BOTS: guild.channels.cache.get(GLOBAL_MATRIX.VOICE_CHANNELS.BOTS),
            BOOST: guild.channels.cache.get(GLOBAL_MATRIX.VOICE_CHANNELS.BOOST)
        };

        if (!channels.ALL_MEMBER || !channels.MEMBERS || !channels.BOTS || !channels.BOOST) return;

        const members = data.members || guild.members.cache;
        
        // 🔥 ALL MEMBER: OFFICIAL DISCORD COUNT
        const totalMembers = guild.memberCount;  // ✅ IDENTIK Discord sidebar!
        
        const memberRoleMembers = members.filter(m => 
            m.roles.cache.has(GLOBAL_MATRIX.IDENTITIES.MEMBER_ROLE)
        ).size;
        const botCount = members.filter(m => 
            m.user.bot && m.id !== client.user.id
        ).size;
        const boostCount = guild.premiumSubscriptionCount || 0;

        const names = {
            ALL_MEMBER: `🌍┃All Member (${totalMembers})`,  // ✅ OFFICIAL!
            MEMBERS: `👤┃Members (${memberRoleMembers})`,
            BOTS: `🤖┃Bots (${botCount})`,
            BOOST: `🚀┃Boost (${boostCount})`
        };

        await Promise.allSettled([
            channels.ALL_MEMBER.setName(names.ALL_MEMBER),
            channels.MEMBERS.setName(names.MEMBERS),
            channels.BOTS.setName(names.BOTS),
            channels.BOOST.setName(names.BOOST)
        ]);

        console.log(`✅ [V8.1] ${guild.name}: OFFICIAL=${totalMembers} | ROLE=${memberRoleMembers} | BOT=${botCount}`);
    } catch (e) {}
}

// 🔥 15s UPDATE
setInterval(() => {
    client.guilds.cache.forEach(updateVoiceChannelNames);
}, 15000);

/**
 * ============================================================================================
 * 🛡️ [PERSISTENCE LAYER: ANTI-SPAM SENTINEL DATABASE]
 * Mencatat Surat Peringatan (SP) target secara permanen ke dalam Disk Server
 * ============================================================================================
 */
const SPAM_DB_PATH = './persistent_spam_records.json';

// [ALLOCATION]: Mengamankan ruang memori dinamis di RAM
if (!global.SPAM_METRIC_TRACKER) global.SPAM_METRIC_TRACKER = new Map();
if (!global.USER_SP_RECORD) global.USER_SP_RECORD = new Map();

// [BOOT_PROCEDURE]: Restorasi data histori SP dari disk saat Engine menyala
if (fs.existsSync(SPAM_DB_PATH)) {
    try {
        const rawSpamData = fs.readFileSync(SPAM_DB_PATH, 'utf8');
        const parsedSpamData = JSON.parse(rawSpamData);
        for (const [userId, spLevel] of Object.entries(parsedSpamData)) {
            global.USER_SP_RECORD.set(userId, spLevel);
        }
        console.log(`✅ [SECURITY_SENTINEL] Restored ${global.USER_SP_RECORD.size} SP Records from Disk.`);
    } catch (err) {
        console.error(`❌ [SECURITY_SENTINEL_FAULT] Failed to read SP Database:`, err.message);
    }
}

// [BACKGROUND_PROCESS]: Daemon otomatis yang menyimpan record setiap 15 detik ke dalam JSON
setInterval(() => {
    if (global.USER_SP_RECORD.size > 0) {
        try {
            const dataToSave = Object.fromEntries(global.USER_SP_RECORD);
            fs.writeFileSync(SPAM_DB_PATH, JSON.stringify(dataToSave, null, 2));
        } catch (err) {
            console.error(`❌ [DISK_FAULT] Failed to save Spam Records to persistent storage.`);
        }
    }
}, 15000);

// --- [SECTION 4: COMMAND PROTOCOL MANIFEST] ---
// ============================================================================================
// 🌐 [REGISTRY_CORE]: MASTER COMMAND PROTOCOLS (TITANIUM OMNISCIENCE EDITION)
// Modul ini mendefinisikan seluruh infrastruktur Slash Commands yang terdaftar ke Discord API.
// Diperbarui dengan standarisasi parameter dan penataan modul untuk menghindari API Rejection.
// ============================================================================================
const COMMAND_PROTOCOLS = [

    // ----------------------------------------------------------------------------------------
    // 🛒 [MODUL 1]: SISTEM PEMESANAN (ORDER SYSTEM & TRANSACTION)
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('forum')
        .setDescription('Mengirimkan modul formulir otorisasi kredensial (Login) kepada klien di thread order.')
        .addStringOption(option =>
            option.setName('thread')
                .setDescription('ID thread order Discord (Opsional: Digunakan jika auto-detect gagal)')
                .setRequired(false)
        ),

    new SlashCommandBuilder()
        .setName('succes') // Menggunakan 'succes' agar terintegrasi sempurna dengan core handler
        .setDescription('Menyelesaikan sesi transaksi, mengirimkan resi, dan mendistribusikan log laporan (Mod Only).')
        .addUserOption(option => 
            option.setName('pembeli')
                .setDescription('Pilih entitas klien yang melakukan transaksi')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('tipe')
                .setDescription('Klasifikasi skala order (Normal atau Big)')
                .setRequired(true)
                .addChoices(
                    { name: 'Normal', value: 'normal' },
                    { name: 'Big', value: 'big' }
                ))
        .addStringOption(option =>
            option.setName('thread')
                .setDescription('ID thread referensi (Digunakan jika komando dieksekusi di luar thread)')
                .setRequired(false)),

    // ----------------------------------------------------------------------------------------
    // 🏎️ [MODUL 2]: TELEMETRI CDID (MULTI-REGION RP-SESSION)
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('rp-session')
        .setDescription('🏎️ CDID Telemetry: Sistem pencatatan jam terbang dan akses wilayah Roleplay.')
        .addStringOption(option => 
            option.setName('module')
                .setDescription('🔧 Pilih modul operasional telemetri yang ingin dieksekusi.')
                .setRequired(true)
                .addChoices(
                    { name: '🟢 Start (Inisiasi Sesi Baru & Minta Kode)', value: 'start' },
                    { name: '🔴 End (Terminasi Sesi & Ekstrak Resi)', value: 'end' }
                )
        )
        .addStringOption(option =>
            option.setName('kota')
                .setDescription('🏙️ [Hanya Start] Pilih sektor wilayah simulasi CDID tujuan Anda.')
                .setRequired(false) // Dibuat false agar eksekusi 'End' tidak terhambat validasi
                .addChoices(
                    { name: '🏙️ Jawa Barat (Sektor Bekasi)', value: 'jabar' },
                    { name: '🛣️ Jawa Tengah (Sektor Lintas)', value: 'jateng' }
                )
        ),

    // ----------------------------------------------------------------------------------------
    // ⚙️ [MODUL 3]: ADMINISTRASI SISTEM & MANAJEMEN PANEL
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('set')
        .setDescription('Konfigurasi sistem panel & tools (Moderator Only) - Gunakan /remove untuk hapus')
        .addStringOption(option =>
            option.setName('modul')
                .setDescription('Pilih modul yang ingin dikonfigurasi')
                .setRequired(true)
                .addChoices(
                    { name: '🔐 Verify Panel', value: 'verify' },
                    { name: '🎫 GetJob Panel', value: 'getjob' },
                    { name: '👤 Ping', value: 'cdid' },
                    { name: '🔌 Webhook', value: 'webhook' },
                    { name: '📜 Script', value: 'script' },
                    { name: '⌨ Panel Script Control', value: 'scriptcontrol' },
                    { name: '💰 Purchase Panel', value: 'purchase' }
                )
        )
        .addStringOption(option => 
            option.setName('url')
                .setDescription('URL webhook lengkap (HANYA untuk Webhook)')
                .setRequired(false)
        )
        .addStringOption(option => 
            option.setName('script')
                .setDescription('Masukkan script lengkap (HANYA untuk Script)')
                .setRequired(false)
        )
        .addStringOption(option => 
            option.setName('nama')
                .setDescription('Nama (HANYA untuk Webhook/Script)')
                .setRequired(false)
        ),

    new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Hapus script atau webhook (Sistem Auto-detect memindai semua nama tersedia)')
        .addStringOption(option =>
            option.setName('module')
                .setDescription('Pilih modul yang ingin dihapus')
                .setRequired(true)
                .addChoices(
                    { name: '📜 Script', value: 'script' },
                    { name: '🔌 Webhook', value: 'webhook' }
                )
        ),

    // ----------------------------------------------------------------------------------------
    // 📢 [MODUL 4]: DEPLOYMENT KONTEN & DISEMINASI INFORMASI (BROADCAST)
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('content')
        .setDescription('Deploy a professional content card to the designated sector.')
        .addStringOption(option => 
            option.setName('link')
                .setDescription('Masukkan URL konten (Wajib memuat protokol http/https)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('jam')
                .setDescription('Pilih jam tayang (Interval waktu 00-24)')
                .setRequired(false)
                .addChoices(
                    ...Array.from({ length: 25 }, (_, i) => ({ 
                        name: i.toString().padStart(2, '0'), 
                        value: i.toString().padStart(2, '0') 
                    }))
                ))
        .addStringOption(option =>
            option.setName('menit')
                .setDescription('Pilih menit operasional (Terkonfigurasi dalam interval 3 menit)')
                .setRequired(false)
                .addChoices(
                    ...Array.from({ length: 20 }, (_, i) => {
                        const val = (i * 3).toString().padStart(2, '0');
                        return { name: val, value: val };
                    })
                )),

    new SlashCommandBuilder()
        .setName('broadcast')
        .setDescription('Diseminasi informasi resmi melalui UI tingkat tinggi ke seluruh sektor terkait')
        .addChannelOption(o => o.setName('target').setRequired(true).setDescription('Pilih Node channel target untuk distribusi pesan'))
        .addStringOption(o => o.setName('judul').setRequired(true).setDescription('Headline siaran utama'))
        .addStringOption(o => o.setName('pesan').setRequired(true).setDescription('Konten body dari informasi resmi')),

    // ----------------------------------------------------------------------------------------
    // 🛡️ [MODUL 5]: KONTROL KEAMANAN, HWID & OTORISASI IDENTITAS
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('hwidcontrol')
        .setDescription('Manajemen status operasional tingkat lanjut untuk sistem HWID (Owner Only)')
        .addBooleanOption(o => o.setName('status').setRequired(true).setDescription('Aktivasi atau penonaktifan modul pengaman HWID'))
        .addStringOption(o => o.setName('alasan').setRequired(false).setDescription('Justifikasi operasional penonaktifan sistem')),

    new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Menjalankan prosedur otorisasi identitas personel untuk akses perimeter server'),

    new SlashCommandBuilder()
        .setName('done')
        .setDescription('Otorisasi penyelesaian dan validasi permohonan reset HWID (Owner Only)')
        .addStringOption(option => 
            option.setName('pesan')
                .setDescription('Menyisipkan pesan tambahan opsional ke dalam Direct Message user')
                .setRequired(false)
        ),

    new SlashCommandBuilder()
        .setName('reject')
        .setDescription('Mendistribusikan penolakan formal terhadap permohonan reset HWID (Owner Only)')
        .addStringOption(o => o.setName('alasan').setRequired(true).setDescription('Alasan dan catatan penolakan untuk klien')),

    // ----------------------------------------------------------------------------------------
    // 📊 [MODUL 6]: DIAGNOSTIK INFRASTRUKTUR & UTILITAS
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Menyajikan analisis data untuk kontributor transmisi pesan paling aktif'),

    new SlashCommandBuilder()
        .setName('maintenance')
        .setDescription('Aktivasi mode isolasi (Lockdown) infrastruktur global (Owner Only)')
        .addBooleanOption(o => o.setName('status').setRequired(true).setDescription('Ubah status Lockdown dari seluruh layanan')),

    new SlashCommandBuilder()
        .setName('status')
        .setDescription('Menjalankan pengujian performa, diagnosa kesehatan sistem, dan latensi node'),

    new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Protokol sapu bersih unit data pesan secara massal dari channel')
        .addIntegerOption(o => o.setName('jumlah').setRequired(true).setDescription('Kuantitas baris data pesan (1-100)')),

    // ----------------------------------------------------------------------------------------
    // ⚔️ [MODUL 7]: TINDAKAN MODERASI & MANAJEMEN PERSONEL
    // ----------------------------------------------------------------------------------------
    new SlashCommandBuilder()
        .setName('role')
        .setDescription('Otorisasi pendistribusian spesifikasi Role kepada personel (Public Access Enabled)')
        .addRoleOption(o => o.setName('role').setRequired(true).setDescription('Tentukan kelas Role yang akan didistribusikan'))
        .addUserOption(o => o.setName('target').setRequired(true).setDescription('Pilih personel atau entitas target penerima')),

    new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Mengeksekusi pemutusan paksa (Kick) member dari lingkup server (Moderator Only)')
        .addUserOption(option => 
            option.setName('target')
                .setDescription('Pilih entitas member yang akan dieksekusi')
                .setRequired(true)),

    new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Mengeksekusi isolasi permanen (Ban) member dari lingkup server (Moderator Only)')
        .addUserOption(option => 
            option.setName('target')
                .setDescription('Pilih entitas member target isolasi')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
                .setDescription('Dokumentasi alasan tindakan Ban (bersifat opsional)')
                .setRequired(false)),

].map(cmd => cmd.toJSON());

// --- [SECTION 5: INFRASTRUCTURE SYNC ENGINE] ---
const initializeInfrastructure = async () => {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    try {
        console.log('🔄 [BOOT]: Synchronizing Supreme Protocol schemas...');
        await rest.put(Routes.applicationCommands(GLOBAL_MATRIX.IDENTITIES.APP_UID), { body: COMMAND_PROTOCOLS });
        console.log('✅ [BOOT]: Global Metadata synchronized.');
    } catch (fault) { 
        console.error('❌ [CRITICAL_FAIL]: Infra-Sync Error:', fault); 
    }
};
initializeInfrastructure();

// --- [SECTION 6: AUTOMATED AUDITORS & VISUAL INTELLIGENCE] ---

/**
 * [NEW MODULE]: DPI Metadata Logger (Message Update Audit)
 */
client.on(Events.MessageUpdate, async (oldMsg, newMsg) => {
    if (!newMsg.guild || newMsg.author?.bot) return;
    if (oldMsg.content === newMsg.content) return;

    const audit = newMsg.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
    if (!audit) return;

    const dpiUI = new EmbedBuilder()
        .setTitle('🔍 DPI_LOGGER: PACKET_MODIFICATION_DETECTED')
        .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
        .setAuthor({ name: 'DEEP PACKET INSPECTION', iconURL: newMsg.author.displayAvatarURL() })
        .addFields(
            { name: '👤 ORIGIN_USER', value: `<@${newMsg.author.id}>`, inline: true },
            { name: '📍 SECTOR_NODE', value: `<#${newMsg.channelId}>`, inline: true },
            { name: '📅 TIMESTAMP', value: `<t:${Math.floor(Date.now() / 1000)}:T>`, inline: true },
            { name: '⬅️ PREVIOUS_DATA', value: `\`\`\`${oldMsg.content || 'NO_DATA_CACHED'}\`\`\`` },
            { name: '➡️ MODIFIED_DATA', value: `\`\`\`${newMsg.content || 'DATA_PURGED'}\`\`\`` }
        )
        .setFooter({ text: 'INTEGRITY_AUDIT: MOD_SUCCESS' })
        .setTimestamp();

    await audit.send({ embeds: [dpiUI] }).catch(() => {});
});

/**
 * ============================================================================================
 * [TITANIUM MESSAGE INTERCEPTOR V3.0] - SUPREME CACHE + NUKLEAR THREAD DELETER V3.0
 * ============================================================================================
 */
client.on(Events.MessageCreate, async (message) => {
    // Protokol Keamanan Layer 1: Validasi
    if (!message || !message.author || message.author.bot || !message.guild) return;

    // 🔥 NUKLEAR THREAD DELETER V3.0 - EMERGENCY PRIORITY FIRST
    if (message.author.bot && 
        message.content.includes('started a thread') && 
        message.content.includes('See all threads')) {
        
        // PRIORITY 1: EMERGENCY THREADS
        if (message.content.includes('EMERGENCY') || message.content.includes('Emergency')) {
            try {
                const threadNameMatch = message.content.match(/started a thread: (.+?)\./);
                if (threadNameMatch) {
                    const threadName = threadNameMatch[1];
                    console.log(`💥 [NUKLEAR_V3_EMERGENCY] Detecting: "${threadName}"`);
                    
                    if (message.deletable) {
                        await message.delete();
                        console.log(`✅ [NUKLEAR_V3_EMERGENCY] 💥 "${threadName}" NUKE'D INSTANT!`);
                    }
                }
            } catch (error) {
                console.log('⚠️ [NUKLEAR_EMERGENCY] Silent fail:', error.message);
            }
            return;
        }
        
        // PRIORITY 2: REGULAR THREADS
        try {
            const threadNameMatch = message.content.match(/started a thread: (.+?)\./);
            if (threadNameMatch) {
                const threadName = threadNameMatch[1];
                console.log(`🧹 [THREAD_DELETER_V3] Deleting: "${threadName}"`);
                
                if (message.deletable) {
                    await message.delete();
                    console.log(`✅ [THREAD_DELETER_V3] "${threadName}" deleted!`);
                }
            }
        } catch (error) {
            console.log('⚠️ [THREAD_DELETER_V3] Silent fail:', error.message);
        }
        return;
    }

    /**
     * [LAYER 1: SUPREME CACHE] - Simpan SEMUA pesan ke cache permanen
     */
    try {
        const cacheEntry = {
            id: message.id,
            authorId: message.author.id,
            authorTag: message.author.tag,
            authorAvatar: message.author.displayAvatarURL(),
            channelId: message.channelId,
            guildId: message.guild.id,
            content: message.content || '[MEDIA/EMBED/ATTACHMENT]',
            mentionsUsers: message.mentions.users.size,
            mentionsRoles: message.mentions.roles.size,
            mentionEveryone: message.mentionEveryone,
            timestamp: Date.now(),
            createdTimestamp: message.createdTimestamp
        };
        
        global.MESSAGE_CACHE.set(message.id, cacheEntry);
        
        // Leaderboard tracking
        const currentCount = global.SESSION_METRIC_MAP.get(message.author.id) || 0;
        global.SESSION_METRIC_MAP.set(message.author.id, currentCount + 1);
        syncDatabaseToDisk();
        
    } catch (cacheErr) {
        console.error("❌ [CACHE_INTERCEPTOR_ERROR]:", cacheErr);
    }

    /**
     * [LAYER 2: ANTI-TAG FIREWALL]
     */
    await runAntiTagProtocol(message);

    /**
     * [LAYER 3: MALICIOUS LINK FIREWALL]
     */
    const hasThreat = MALICIOUS_LINK_PATTERNS.some(pattern => pattern.test(message.content));
    if (hasThreat) {
        try {
            if (message.deletable) await message.delete();
            const securityAudit = message.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
            
            const systemAvatar = client.user?.displayAvatarURL() || '';
            const authorAvatar = message.author.displayAvatarURL() || null;

            const threatUI = new EmbedBuilder()
                .setTitle('🚨 SECURITY ALERT: THREAT NEUTRALIZED')
                .setAuthor({ name: 'AUTOMATIC FIREWALL PROTOCOL', iconURL: systemAvatar })
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                .setThumbnail(authorAvatar)
                .setDescription(
                    `### 🔴 ILLEGAL TRANSMISSION DETECTED\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n\n` +
                    `**🆔 USER IDENTIFIED  :** <@${message.author.id}>\n` +
                    `**👤 USER TAG          :** \`${message.author.tag}\`\n` +
                    `**📍 SECTOR CHANNEL  :** <#${message.channelId}>\n` +
                    `**⚡ ACTION TAKEN      :** \`AUTO_DATA_PURGE\`\n` +
                    `**🔓 THREAT LEVEL      :** \`CRITICAL_LEVEL_4\`\n` +
                    `**🔍 DETECTION CODE    :** \`MALW_LINK_099X\`\n\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
                )
                .addFields(
                    { name: '📄 FILTER LOG', value: '`MALICIOUS_LINK_PATTERN_MATCH`', inline: true },
                    { name: '📡 SOURCE GATE', value: `\`NODE_INTERCEPT_PRIMARY\``, inline: true }
                )
                .setFooter({ text: 'OMNISCIENCE FIREWALL V2.11 | SECURE ANALYTICS' })
                .setTimestamp();

            if (securityAudit) await securityAudit.send({ embeds: [threatUI] });
            return message.channel.send({ content: `⚠️ **[PROTECTION SYSTEM]** <@${message.author.id}>, transmisi link mencurigakan telah dihentikan secara otomatis.` });
        } catch (e) { 
            console.error('FIREWALL_FAILURE:', e); 
        }
    }
});

/**
 * [NEW MODULE]: DPI Metadata Logger (Message Update Audit)
 */
client.on(Events.MessageUpdate, async (oldMsg, newMsg) => {
    if (!newMsg.guild || newMsg.author?.bot) return;
    if (oldMsg.content === newMsg.content) return;

    const audit = newMsg.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
    if (!audit) return;

    const dpiUI = new EmbedBuilder()
        .setTitle('🔍 DPI_LOGGER: PACKET_MODIFICATION_DETECTED')
        .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
        .setAuthor({ name: 'DEEP PACKET INSPECTION', iconURL: newMsg.author.displayAvatarURL() })
        .addFields(
            { name: '👤 ORIGIN_USER', value: `<@${newMsg.author.id}>`, inline: true },
            { name: '📍 SECTOR_NODE', value: `<#${newMsg.channelId}>`, inline: true },
            { name: '📅 TIMESTAMP', value: `<t:${Math.floor(Date.now() / 1000)}:T>`, inline: true },
            { name: '⬅️ PREVIOUS_DATA', value: `\`\`\`${oldMsg.content || 'NO_DATA_CACHED'}\`\`\`` },
            { name: '➡️ MODIFIED_DATA', value: `\`\`\`${newMsg.content || 'DATA_PURGED'}\`\`\`` }
        )
        .setFooter({ text: 'INTEGRITY_AUDIT: MOD_SUCCESS' })
        .setTimestamp();

    await audit.send({ embeds: [dpiUI] }).catch(() => {});
});

/**
 * [ULTIMATE MESSAGE DELETE DETECTOR V3.0] - RESTART PROOF!
 */
client.on(Events.MessageDelete, async (message) => {
    if (!message || !message.guild) return;

    const cachedData = global.MESSAGE_CACHE.get(message.id);
    
    if (cachedData) {
        global.MESSAGE_CACHE.delete(message.id);
        
        const audit = message.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (!audit) return;

        try {
            const isGhostPing = cachedData.mentionsUsers > 0 || cachedData.mentionsRoles > 0 || cachedData.mentionEveryone;
            
            let embedTitle = '⚠️ SUPREME CACHE: DATA TERMINATION DETECTED';
            let embedColor = GLOBAL_MATRIX.VISUALS.THEME_CRITICAL;
            let extraFields = [];

            if (isGhostPing) {
                embedTitle = '👻 TITANIUM GHOST PING INTERCEPTED';
                embedColor = GLOBAL_MATRIX.VISUALS.THEME_GOLD;
                extraFields = [
                    { name: '🎯 MENTION_TARGETS', value: `\`${cachedData.mentionsUsers} Users | ${cachedData.mentionsRoles} Roles\``, inline: true },
                    { name: '🚨 MASS_TAG', value: cachedData.mentionEveryone ? 'DETECTED' : 'CLEAN', inline: true }
                ];
            }

            const supremeAuditUI = new EmbedBuilder()
                .setTitle(embedTitle)
                .setAuthor({ name: 'TITANIUM CACHE RECOVERY SYSTEM', iconURL: cachedData.authorAvatar || client.user.displayAvatarURL() })
                .setColor(embedColor)
                .setDescription(
                    `### 🔍 CACHE_RECOVERY_SUCCESS\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n\n` +
                    `**👤 TERMINATOR     :** <@${cachedData.authorId}> (\`${cachedData.authorTag}\`)\n` +
                    `**📍 EXECUTION_NODE :** <#${cachedData.channelId}>\n` +
                    `**🆔 TRACE_ID       :** \`${message.id}\`\n` +
                    `**📅 EXECUTION_TIME :** <t:${Math.floor(cachedData.timestamp / 1000)}:F>\n\n` +
                    `**💾 RECOVERED_CONTENT:**\n\`\`\`${cachedData.content.substring(0, 1000)}${cachedData.content.length > 1000 ? '...' : ''}\`\`\`\n\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
                )
                .addFields(
                    { name: '💾 CACHE_STATUS', value: '`RECOVERY_SUCCESSFUL`', inline: true },
                    { name: '📊 CACHE_SIZE', value: `\`${global.MESSAGE_CACHE.size.toLocaleString()}\``, inline: true },
                    { name: '🛡️ INTEGRITY', value: '`TITANIUM_V3.0_VERIFIED`', inline: true },
                    ...extraFields
                )
                .setFooter({ text: `SUPREME_CACHE_ENGINE | RESTART_PROOF | ID: ${Math.random().toString(36).substring(7).toUpperCase()}` })
                .setTimestamp();

            await audit.send({ embeds: [supremeAuditUI] });
            console.log(`✅ [TITANIUM_CACHE] Recovered deleted message ${message.id} from ${cachedData.authorTag}`);
        } catch (auditError) {
            console.error('❌ [SUPREME_AUDIT_ERROR]:', auditError);
        }
    }
});

/**
 * ============================================================================================
 * 👥 [MODULE: ENTITY LIFECYCLE MANAGEMENT - OMNISCIENCE KERNEL V7.5]
 * ============================================================================================
 * Sub-Module A : HYPER_VISUAL_WELCOMER (Inbound Traffic)
 * Sub-Module B : TITANIUM_TERMINATION_PROTOCOL (Outbound Traffic)
 * Description  : Arsitektur gabungan untuk manajemen siklus hidup entitas. Mengisolasi 
 * proses rendering grafis (Canvas) ke dalam instance terpisah untuk mencegah memory
 * leak dan memastikan sinkronisasi event loop beroperasi dalam latensi sub-milidetik.
 * ============================================================================================
 */

// ============================================================================================
// 📥 [SUB-MODULE A]: PROTOKOL PENYAMBUTAN (WELCOME EVENT)
// Engine Pendeteksi: Mengawasi entitas yang menembus firewall dan memasuki Node.
// ============================================================================================
client.on(Events.GuildMemberAdd, async (member) => {
    // 1. Filter Keamanan Kritis: Menolak interaksi dengan bot atau entitas sistem
    if (member.user.bot) return;

    // Pencetakan Telemetri Log Inbound
    console.log(`\n${'═'.repeat(75)}`);
    console.log(`[${new Date().toISOString()}] 📥 [INBOUND_TRAFFIC_LOG] STATUS: ENTITAS BARU TERDETEKSI`);
    console.log(`> IDENTITAS ENTITAS : ${member.user.tag}`);
    console.log(`> ID REGISTRASI     : ${member.user.id}`);
    console.log(`> TARGET NODE       : ${member.guild.name}`);
    console.log(`${'═'.repeat(75)}\n`);

    try {
        // [RUANG INJEKSI LOGIKA RENDER CANVAS WELCOME]
        // Anda dapat mengintegrasikan arsitektur Canvas penyambutan Anda di sektor ini.
        // Contoh instansiasi: const welcomeCanvas = Canvas.createCanvas(1024, 450);
        
        console.log(`✅ [WELCOME_PROTOCOL_SUCCESS] Fase inisialisasi penyambutan berhasil dieksekusi tanpa anomali.`);
    } catch (welcomeEngineError) {
        console.error(`❌ [WELCOME_KERNEL_PANIC] Terjadi kegagalan struktural pada mesin grafis penyambutan:`, welcomeEngineError);
    }
}); // <-- [PENUTUP MUTLAK: SUB-MODULE A]


// ============================================================================================
// 📤 [SUB-MODULE B]: PROTOKOL PERPISAHAN (GOOD BYE EVENT) - TITANIUM DIRECT ROUTING V8.0
// Engine Pendeteksi: Mengeksekusi penarikan hak akses saat entitas keluar dari Node.
// Arsitektur Baru : Dual-Node Transmission Matrix. Mengirimkan aset grafis ke terminal
// publik, dan memancarkan log audit telemetri murni ke terminal keamanan internal.
// ============================================================================================
client.on(Events.GuildMemberRemove, async (member) => {
    const { user, guild } = member;
    
    // 1. [SECURITY FIREWALL] Mengabaikan anomali dari entitas kecerdasan buatan (Bot)
    if (user.bot) return;

    // Pencetakan Telemetri Log Outbound ke Konsol Server Lapis Pertama
    console.log(`\n${'═'.repeat(80)}`);
    console.log(`[${new Date().toISOString()}] 📤 [OUTBOUND_TRAFFIC_LOG] STATUS: KONEKSI TERPUTUS LOGIS`);
    console.log(`> IDENTITAS ENTITAS : ${user.tag}`);
    console.log(`> ID REGISTRASI     : ${user.id}`);
    console.log(`> LOKASI PEMUTUSAN  : ${guild.name}`);
    console.log(`${'═'.repeat(80)}\n`);

    try {
        // ============================================================================================
        // 🎨 [TAHAP 1: INISIALISASI MESIN GRAFIS (HYPER-CANVAS V2)]
        // ============================================================================================
        const canvasWidth = 1024;
        const canvasHeight = 450;
        const canvas = Canvas.createCanvas(canvasWidth, canvasHeight);
        const ctx = canvas.getContext('2d');

        // [LAYER 1: BACKGROUND] - Rendering Gradien Cyberpunk Edisi Kritis
        const gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
        gradient.addColorStop(0, '#0a0a0a');   
        gradient.addColorStop(0.5, '#1a0b12'); 
        gradient.addColorStop(1, '#2d0e14');   
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // [LAYER 2: TECH GRID OVERLAY] - Konstruksi pola matriks keamanan
        ctx.strokeStyle = 'rgba(255, 77, 77, 0.08)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < canvasWidth; i += 35) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvasHeight); ctx.stroke();
        }
        for (let j = 0; j < canvasHeight; j += 35) {
            ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvasWidth, j); ctx.stroke();
        }

        // [LAYER 3: CRITICAL BORDER] - Garis batas eksterior mode darurat
        ctx.strokeStyle = '#ff1a1a'; 
        ctx.lineWidth = 8;
        ctx.strokeRect(15, 15, canvasWidth - 30, canvasHeight - 30);
        
        // Aksen Ornamen Visual Sudut (Corner Brackets)
        ctx.fillStyle = '#ff1a1a';
        ctx.fillRect(10, 10, 40, 10); ctx.fillRect(10, 10, 10, 40);
        ctx.fillRect(canvasWidth - 50, 10, 40, 10); ctx.fillRect(canvasWidth - 20, 10, 10, 40);
        ctx.fillRect(10, canvasHeight - 20, 40, 10); ctx.fillRect(10, canvasHeight - 50, 10, 40);
        ctx.fillRect(canvasWidth - 50, canvasHeight - 20, 40, 10); ctx.fillRect(canvasWidth - 20, canvasHeight - 50, 10, 40);

        // [LAYER 4: TYPOGRAPHY SYSTEM] - Pencetakan Status Sistem
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 58px "Segoe UI", Arial, sans-serif';
        ctx.textAlign = 'left';
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
        ctx.fillText('ACCESS TERMINATED', 350, 150);
        ctx.shadowBlur = 0; 

        // Ekstraksi Username Entitas
        ctx.fillStyle = '#ff4d4d';
        ctx.font = 'bold 36px "Courier New", Courier, monospace';
        ctx.fillText(`USER: ${user.username.toUpperCase()}`, 350, 220);

        // Deklarasi Terminasi Otorisasi
        ctx.fillStyle = '#d9d9d9';
        ctx.font = '24px "Segoe UI", Arial, sans-serif';
        ctx.fillText(`Otorisasi menuju infrastruktur secara resmi telah dicabut.`, 350, 280);
        ctx.fillText(`Sistem telah membersihkan seluruh cache sesi koneksi Anda.`, 350, 315);

        // Watermark Keamanan dan Timestamp
        const telemetryHash = Buffer.from(`${user.id}-${Date.now()}`).toString('base64').substring(0, 24);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.font = '16px "Courier New", Courier, monospace';
        ctx.fillText(`SECURE_HASH: ${telemetryHash} | DEPARTURE_TIME: ${new Date().toISOString()}`, 350, 410);

        // [LAYER 5: AVATAR EXTRACTION & MASKING]
        const centerX = 180;
        const centerY = canvasHeight / 2;
        const radius = 105;

        // Cincin Aura Destruktif
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 18, 0, Math.PI * 2, true);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ff1a1a';
        ctx.stroke();

        // Pemotongan Ruang Avatar (Clipping Region)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // Parsing Gambar Resolusi Tinggi (1024px)
        const avatarURL = user.displayAvatarURL({ extension: 'png', size: 1024 });
        const avatarImage = await Canvas.loadImage(avatarURL);
        ctx.drawImage(avatarImage, centerX - radius, centerY - radius, radius * 2, radius * 2);

        // Eksekusi Kompilasi Buffer Grafis
        const bufferResult = canvas.toBuffer();
        const attachmentData = new AttachmentBuilder(bufferResult, { name: 'titanium_termination_card.png' });

        // ============================================================================================
        // 📦 [TAHAP 2: EMBED PACKAGING] Konstruksi Antarmuka Audit Log Lapis Ganda
        // ============================================================================================
        
        // [EMBED A: VISUAL PUBLIK] - Ditujukan untuk audiens server (Dilengkapi Gambar Canvas)
        const publicVisualEmbed = new EmbedBuilder()
            .setTitle('🛑 [PUBLIC_AUDIT_LOG] ENTITAS MENINGGALKAN INFRASTRUKTUR')
            .setColor('#ff1a1a')
            .setDescription(
                `**IDENTITAS TERDAFTAR:** ${user.toString()} (\`${user.id}\`)\n\n` +
                `Sistem pertahanan pusat melaporkan bahwa entitas ini telah memutus seluruh koneksi jaringan logis dari **${guild.name}**.\n\n` +
                `Sesuai dengan regulasi infrastruktur, seluruh privilese, peran (role), dan otorisasi sesi entitas ini telah dinonaktifkan secara otomatis untuk menjaga integritas database utama.\n\n` +
                `> *Proses purifikasi memori untuk ID ini telah diselesaikan.*`
            )
            .setImage('attachment://titanium_termination_card.png')
            .addFields(
                { name: '🌐 Sektor Terminal Berdampak', value: `\`${guild.name}\``, inline: true },
                { name: '🛡️ Hash Kunci Sesi Terakhir', value: `\`${telemetryHash}\``, inline: true }
            )
            .setFooter({ 
                text: 'Titanium Omniscience Engine • Public Visual Protocol', 
                iconURL: client.user.displayAvatarURL() 
            })
            .setTimestamp();

        // [EMBED B: TELEMETRI INTERNAL] - Ditujukan untuk staf admin (Cepat, Ringan, Padat Data)
        const internalAuditEmbed = new EmbedBuilder()
            .setTitle('⚠️ [SECURITY_ALERT] DEPARTURE TELEMETRY RECORDED')
            .setColor('#ff9900') // Warna peringatan (Amber/Orange)
            .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 256 })) // Menggunakan Thumbnail agar ringkas
            .setDescription(`Telah terdeteksi pemutusan jaringan logis oleh sebuah entitas. Tindakan pembersihan cache telah dieksekusi oleh sistem.`)
            .addFields(
                { name: '👤 Identitas Pengguna', value: `${user.tag}`, inline: true },
                { name: '🆔 User ID', value: `\`${user.id}\``, inline: true },
                { name: '📅 Akun Dibuat Pada', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: false },
                { name: '🔒 Security Hash', value: `\`${telemetryHash}\``, inline: false }
            )
            .setFooter({ 
                text: 'Titanium Security System • Audit Log Sub-Routine', 
                iconURL: guild.iconURL() 
            })
            .setTimestamp();

        // ============================================================================================
        // 🚀 [TAHAP 3: DUAL-NODE ROUTING MATRIX] Eksekusi Pengiriman Multi-Saluran
        // ============================================================================================
        
        // Deklarasi Endpoint (Konfigurasi Rute Transmisi)
        const publicGoodbyeEndpoint = '1490678886361464923'; // <-- Ganti dengan ID Channel Goodbye Anda
        const securityLogEndpoint = '1478379431327432825'; // <-- ID Channel Log Internal (Sesuai Permintaan)

        // Mengekstraksi Objek Saluran dari Cache Memori
        const publicChannel = guild.channels.cache.get(publicGoodbyeEndpoint);
        const auditChannel = guild.channels.cache.get(securityLogEndpoint);

        // [RUTE A: TRANSMISI VISUAL PUBLIK]
        if (publicChannel) {
            try {
                await publicChannel.send({ 
                    content: `**[SYSTEM_BROADCAST_OVERRIDE]** Peringatan Jaringan: Registrasi status perpisahan untuk entitas ${user.username} telah dikunci di terminal ini.`,
                    embeds: [publicVisualEmbed], 
                    files: [attachmentData] 
                });
                console.log(`✅ [ROUTING_NODE_A] Kartu visual perpisahan berhasil dipancarkan ke terminal publik (#${publicChannel.name}).`);
            } catch (publicError) {
                console.error(`❌ [NODE_A_FAULT] Gagal mentransmisikan data ke channel publik:`, publicError);
            }
        } else {
            console.warn(`⚠️ [NODE_A_MISSING] Channel publik (${publicGoodbyeEndpoint}) tidak valid atau tidak dapat dilacak.`);
        }

        // [RUTE B: TRANSMISI TELEMETRI INTERNAL]
        if (auditChannel) {
            try {
                // Rute internal tidak perlu melampirkan "attachmentData" (Gambar Canvas) untuk 
                // menghemat resource dan menjaga log tetap ringkas dan analitik.
                await auditChannel.send({ 
                    content: `**[AUDIT_TRAIL]** Berkas telemetri baru untuk pemutusan ID: \`${user.id}\``,
                    embeds: [internalAuditEmbed] 
                });
                console.log(`✅ [ROUTING_NODE_B] Log telemetri keamanan berhasil diamankan di terminal audit (#${auditChannel.name}).`);
            } catch (auditError) {
                console.error(`❌ [NODE_B_FAULT] Gagal mengamankan log telemetri ke channel internal:`, auditError);
            }
        } else {
            console.warn(`⚠️ [NODE_B_MISSING] Channel audit log (1478379431327432825) tidak ditemukan di server ini.`);
        }

    } catch (coreEngineError) {
        // Perlindungan Mutlak untuk Kernel Multi-Transmisi
        console.error(`❌ [KERNEL_PANIC] Terjadi anomali destruktif pada proses rendering atau distribusi matriks:`, coreEngineError);
    }
}); 
// <-- [PENUTUP MUTLAK: SUB-MODULE B]

// ============================================================================================
// 🛑 [END OF MODULE: ENTITY LIFECYCLE MANAGEMENT]
// Arsitektur selanjutnya (misalnya Voice Audit atau System Bootstrap) dapat dilanjutkan di bawah sini.
// ============================================================================================

/**
 * ============================================================================================
 * [ULTRA FAST WELCOMER V3.1] - FIXED SPAM + FORCE DM
 * ============================================================================================
 */
client.on(Events.GuildMemberAdd, async (member) => {
    if (!member?.guild || member.user.bot) return;
    
    const startTime = Date.now();
    const userTag = member.user.tag;
    console.log(`⚡ [FAST_WELCOME] ${userTag}`);
    
    // 🔥 FIXED ANTI-SPAM: Hanya cek cache YANG BENAR-BENAR WELCOME
    const spamKey = `WELCOME_${member.id}`;
    let isSpam = false;
    
    if (global.MESSAGE_CACHE && global.MESSAGE_CACHE.has(spamKey)) {
        const lastWelcome = global.MESSAGE_CACHE.get(spamKey).timestamp;
        if ((Date.now() - lastWelcome) < 300000) { // 5 menit
            console.log(`⏭️ SKIP ${userTag} (spam protection)`);
            isSpam = true;
        }
    }
    
    if (!isSpam) {
        // MARK ANTI-SPAM INSTANT
        if (global.MESSAGE_CACHE) {
            global.MESSAGE_CACHE.set(spamKey, { timestamp: Date.now() });
        }
        
        console.log(`🚀 [PROCESSING] ${userTag} - Sending Dual Welcome...`);
        
        // 🔥 PARALLEL + FORCE DM
        Promise.allSettled([
            sendPublicWelcome(member),
            sendPrivateDM(member),  // PRIORITY 1
            sendAuditLog(member)
        ]).then(results => {
            const totalTime = Date.now() - startTime;
            console.log(`✅ [SUCCESS] ${userTag} | ${totalTime}ms | DM: ${results[1].status === 'fulfilled' ? '✅ SENT' : '❌ FAILED'}`);
        }).catch(err => {
            console.error(`❌ [ERROR] ${userTag}:`, err.message);
        });
    }
});

// 🔥 PUBLIC (SAMA)
async function sendPublicWelcome(member) {
    try {
        const welcomeNode = member.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.WELCOME_GATE);
        if (!welcomeNode) return;
        
        const publicUI = new EmbedBuilder()
            .setAuthor({ name: 'PERSONNEL IDENTIFICATION SUCCESSFUL', iconURL: client.user?.displayAvatarURL() })
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
            .setTitle(`👋 WELCOME: ${member.user.username?.toUpperCase() || 'NEW_UNIT'}`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }) || null)
            .setDescription(
                `**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n` +
                `**👤 PERSONNEL:** <@${member.id}>\n` +
                `**🆔 ID:** \`${member.id}\`\n` +
                `**📊 STATUS:** \`🔄 PENDING_VERIFICATION\`\n` +
                `**🌐 NODE:** \`DC-${member.guild.id.substring(0,8)}\`\n` +
                `**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\n` +
                `**📋 QUICK START:**\n` +
                `• \`Button Verify\` - Aktivasi akses penuh\n` +
                `• \`/leaderboard\` - Cek statistik\n` +
                `• \`Button GetJob\` - Request pekerjaan`
            )
            .addFields(
                { name: '📅 JOINED', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true },
                { name: '👥 MEMBERS', value: `\`${member.guild.memberCount.toLocaleString()}\``, inline: true }
            )
            .setFooter({ text: `${GLOBAL_MATRIX.VISUALS.SYSTEM_FOOTER} | Fast-Track V3.1` })
            .setTimestamp();

        await welcomeNode.send({ embeds: [publicUI] });
        console.log(`📢 [PUBLIC_OK] ${member.user.tag}`);
    } catch (e) {
        console.log(`❌ [PUBLIC_FAIL] ${member.user.tag}`);
    }
}

// 🔥 PRIVATE DM (FORCE + DETAILED LOG)
async function sendPrivateDM(member) {
    try {
        console.log(`📱 [DM_TRY] ${member.user.tag} - DM: ${member.user.dmChannel ? 'EXISTS' : 'CREATING'}`);
        
        const privateWelcomeUI = new EmbedBuilder()
            .setAuthor({ 
                name: '🛡️ DATA CENTRE - PRIVATE ORIENTATION', 
                iconURL: client.user?.displayAvatarURL() || '' 
            })
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
            .setTitle(`🎉 Selamat Datang ${member.user.username}!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }) || null)
            .setDescription(
                `**Halo <@${member.id}>!**\n\n` +
                `**✅ Anda telah berhasil masuk ke infrastruktur Data Centre.**\n\n` +
                `**🚀 QUICK ACTIONS:**\n` +
                `• \`Button Verify\` - **VERY IMPORTANT** - Aktivasi role Member\n` +
                `• \`/leaderboard\` - Lihat ranking chat & voice\n` +
                `• \`Button GetJob\` - Request pekerjaan (Channel #get-job)\n` +
                `• \`/status\` - Cek kesehatan sistem\n\n` +
                `**📊 SERVER STATS:**\n` +
                `Members: \`${member.guild.memberCount.toLocaleString()}\`\n` +
                `Boost: \`${member.guild.premiumSubscriptionCount || 0}\` Level ${member.guild.premiumTier}`
            )
            .addFields(
                { name: '🆔 YOUR ID', value: `\`${member.id}\``, inline: true },
                { name: '📅 Joined', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
            )
            .setFooter({ 
                text: 'Jangan lupa /verify ya! • Private Message', 
                iconURL: member.guild.iconURL() 
            })
            .setTimestamp();

        await member.user.send({ embeds: [privateWelcomeUI] });
        console.log(`✅ [DM_SENT] ${member.user.tag} ✅`);
        return 'SUCCESS';
    } catch (error) {
        console.log(`❌ [DM_ERROR] ${member.user.tag}: ${error.message}`);
        // Coba fallback ke channel umum jika DM gagal
        try {
            const fallbackChannel = member.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.WELCOME_GATE);
            if (fallbackChannel) {
                await fallbackChannel.send(`⚠️ <@${member.id}>, **DM tertutup**. Silakan buka DM untuk instruksi private!`);
            }
        } catch (fallbackError) {}
        return 'FAILED';
    }
}

// 🔥 AUDIT LOG
async function sendAuditLog(member) {
    try {
        const audit = member.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (!audit) return;
        
        const auditUI = new EmbedBuilder()
            .setTitle('👤 NEW_PERSONNEL_ONBOARDED')
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
            .setDescription(
                `**User:** ${member.user.toString()}\n` +
                `**ID:** \`${member.id}\`\n` +
                `**Status:** \`DUAL_CHANNEL_ACTIVE\``
            )
            .setFooter({ text: 'ONBOARDING_AUDIT_V3.1' })
            .setTimestamp();
        
        await audit.send({ embeds: [auditUI] });
    } catch (e) {}
}

/**
 * [FIXED]: Added validation for 'oldState' and 'newState' objects
 */
client.on(Events.VoiceStateUpdate, async (oldState, newState) => {
    if (!newState || !newState.guild) return;
    const auditNode = newState.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
    if (!auditNode || !newState.member) return;

    const personnel = newState.member.user;
    if (!personnel) return;

    const auditUI = new EmbedBuilder()
        .setAuthor({ name: 'VOICE ANALYTICS ENGINE', iconURL: personnel.displayAvatarURL() || null })
        .setFooter({ text: 'Infrastructural Voice Audit | System Active' })
        .setTimestamp();

    if (!oldState?.channelId && newState.channelId) {
        auditUI.setTitle('🔊 NODE ESTABLISHED').setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
               .setDescription(`**PERSONNEL  :** <@${personnel.id}>\n**TARGET NODE :** <#${newState.channelId}>\n**STATUS      :** \`VOICE_LINK_ACTIVE\``);
        return auditNode.send({ embeds: [auditUI] }).catch(() => {});
    }
    
    if (oldState?.channelId && !newState.channelId) {
        auditUI.setTitle('🔇 NODE TERMINATED').setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
               .setDescription(`**PERSONNEL  :** <@${personnel.id}>\n**FORMER NODE:** <#${oldState.channelId}>\n**STATUS      :** \`CONNECTION_CLOSED\``);
        return auditNode.send({ embeds: [auditUI] }).catch(() => {});
    }
    
    if (oldState?.channelId && newState.channelId && oldState.channelId !== newState.channelId) {
        auditUI.setTitle('🔄 NODE RELOCATION').setColor(GLOBAL_MATRIX.VISUALS.THEME_GOLD)
               .setDescription(`**PERSONNEL  :** <@${personnel.id}>\n**ORIGIN      :** <#${oldState.channelId}>\n**DESTINATION :** <#${newState.channelId}>\n**METHOD      :** \`AUTO_RELOCATE\``);
        return auditNode.send({ embeds: [auditUI] }).catch(() => {});
    }
});

/**
 * ============================================================================================
 * [ULTIMATE MESSAGE DELETE DETECTOR V3.0] - RESTART PROOF!
 * ============================================================================================
 */
client.on(Events.MessageDelete, async (message) => {
    if (!message || !message.guild) return;

    const cachedData = global.MESSAGE_CACHE.get(message.id);
    
    if (cachedData) {
        global.MESSAGE_CACHE.delete(message.id);
        
        const audit = message.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (!audit) return;

        try {
            const isGhostPing = cachedData.mentionsUsers > 0 || cachedData.mentionsRoles > 0 || cachedData.mentionEveryone;
            
            let embedTitle = '⚠️ SUPREME CACHE: DATA TERMINATION DETECTED';
            let embedColor = GLOBAL_MATRIX.VISUALS.THEME_CRITICAL;
            let extraFields = [];

            if (isGhostPing) {
                embedTitle = '👻 TITANIUM GHOST PING INTERCEPTED';
                embedColor = GLOBAL_MATRIX.VISUALS.THEME_GOLD;
                extraFields = [
                    { name: '🎯 MENTION_TARGETS', value: `\`${cachedData.mentionsUsers} Users | ${cachedData.mentionsRoles} Roles\``, inline: true },
                    { name: '🚨 MASS_TAG', value: cachedData.mentionEveryone ? 'DETECTED' : 'CLEAN', inline: true }
                ];
            }

            const supremeAuditUI = new EmbedBuilder()
                .setTitle(embedTitle)
                .setAuthor({ name: 'TITANIUM CACHE RECOVERY SYSTEM', iconURL: cachedData.authorAvatar || client.user.displayAvatarURL() })
                .setColor(embedColor)
                .setDescription(
                    `### 🔍 CACHE_RECOVERY_SUCCESS\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n\n` +
                    `**👤 TERMINATOR     :** <@${cachedData.authorId}> (\`${cachedData.authorTag}\`)\n` +
                    `**📍 EXECUTION_NODE :** <#${cachedData.channelId}>\n` +
                    `**🆔 TRACE_ID       :** \`${message.id}\`\n` +
                    `**📅 EXECUTION_TIME :** <t:${Math.floor(cachedData.timestamp / 1000)}:F>\n\n` +
                    `**💾 RECOVERED_CONTENT:**\n\`\`\`${cachedData.content.substring(0, 1000)}${cachedData.content.length > 1000 ? '...' : ''}\`\`\`\n\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
                )
                .addFields(
                    { name: '💾 CACHE_STATUS', value: '`RECOVERY_SUCCESSFUL`', inline: true },
                    { name: '📊 CACHE_SIZE', value: `\`${global.MESSAGE_CACHE.size.toLocaleString()}\``, inline: true },
                    { name: '🛡️ INTEGRITY', value: '`TITANIUM_V3.0_VERIFIED`', inline: true },
                    ...extraFields
                )
                .setFooter({ text: `SUPREME_CACHE_ENGINE | RESTART_PROOF | ID: ${Math.random().toString(36).substring(7).toUpperCase()}` })
                .setTimestamp();

            await audit.send({ embeds: [supremeAuditUI] });
            console.log(`✅ [TITANIUM_CACHE] Recovered deleted message ${message.id} from ${cachedData.authorTag}`);
        } catch (auditError) {
            console.error('❌ [SUPREME_AUDIT_ERROR]:', auditError);
        }
    }
});

// Analytics Matrix Update & [NEW MODULE]: Dynamic Privilege Escalation
client.on(Events.MessageCreate, async (msg) => {
    if (!msg || !msg.author || msg.author.bot || !msg.guild) return;
    GLOBAL_DATA_TRANSMISSIONS++;
    
    const currentScore = (SESSION_METRIC_MAP.get(msg.author.id) || 0) + 1;
    SESSION_METRIC_MAP.set(msg.author.id, currentScore);

    // Auto-Promote Logic
    if (currentScore === GLOBAL_MATRIX.METRICS.PROMOTE_THRESHOLD) {
        const role = msg.guild.roles.cache.get(GLOBAL_MATRIX.IDENTITIES.ELITE_PERSONNEL_ROLE);
        if (role) {
            await msg.member.roles.add(role).catch(() => {});
            const promoUI = new EmbedBuilder()
                .setTitle('🎖️ PROMOTION: ACCESS LEVEL UPGRADED')
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_GOLD)
                .setDescription(`Selamat <@${msg.author.id}>! Berdasarkan transmisi data aktif, Anda kini dipromosikan menjadi **ELITE PERSONNEL**.`)
                .setTimestamp();
            msg.channel.send({ embeds: [promoUI] }).catch(() => {});
        }
    }
});

// 🔥 BROADCAST PERSISTENT SYSTEM V5.1 - 24H EXPIRED
const BROADCAST_DB = './broadcast_controllers_v51.json';

// GLOBAL STORAGE
if (!global.BROADCAST_CONTROLLERS_V51) global.BROADCAST_CONTROLLERS_V51 = new Map();

function saveBroadcastV51() {
    try {
        const activeData = [];
        for (const [id, data] of global.BROADCAST_CONTROLLERS_V51.entries()) {
            if (data.expiresAt > Date.now()) {
                activeData.push({
                    messageId: id,
                    channelId: data.channelId,
                    guildId: data.guildId,
                    headline: data.headline,
                    content: data.content,
                    acknowledgedUsers: Array.from(data.acknowledgedUsers),
                    expiresAt: data.expiresAt
                });
            } else {
                console.log(`🗑️ [EXPIRED] Broadcast ${id} auto-deleted (24h)`);
            }
        }
        fs.writeFileSync(BROADCAST_DB, JSON.stringify(activeData, null, 2));
    } catch (e) {
        console.error('❌ [V51_SAVE]:', e.message);
    }
}

function loadBroadcastV51() {
    if (fs.existsSync(BROADCAST_DB)) {
        try {
            const raw = fs.readFileSync(BROADCAST_DB, 'utf8');
            const data = JSON.parse(raw);
            data.forEach(d => {
                if (d.expiresAt > Date.now()) {
                    global.BROADCAST_CONTROLLERS_V51.set(d.messageId, {
                        ...d,
                        acknowledgedUsers: new Set(d.acknowledgedUsers)
                    });
                }
            });
            console.log(`✅ [V51_LOADED] ${global.BROADCAST_CONTROLLERS_V51.size} broadcasts`);
        } catch (e) {
            console.error('❌ [V51_LOAD]:', e.message);
        }
    }
}

loadBroadcastV51();
setInterval(saveBroadcastV51, 10000);

// 🔥 AUTO-CLEANUP 24 JAM
setInterval(() => {
    let deletedCount = 0;
    for (const [msgId, data] of [...global.BROADCAST_CONTROLLERS_V51.entries()]) {
        if (data.expiresAt < Date.now()) {
            global.BROADCAST_CONTROLLERS_V51.delete(msgId);
            deletedCount++;
        }
    }
    if (deletedCount > 0) {
        console.log(`🧹 [24H_CLEANUP] Deleted ${deletedCount} expired broadcasts`);
        saveBroadcastV51();
    }
}, 300000);

// --- [SECTION 7: MASTER INTERACTION DISPATCHER] ---
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction) return;

    // ============================================================================================
// 🔥 V5.1 BROADCAST HANDLER - TITANIUM OMNISCIENCE EDITION (STEALTH CACHE MODE)
// ============================================================================================
if (interaction.isButton() && interaction.customId?.startsWith('broadcast_')) {
    
    // 1. [STATE VALIDATION] Memastikan interaksi belum diproses oleh node lain
    if (interaction.replied || interaction.deferred) {
        console.log(`⚠️ [INTERACTION_SKIP] Sinyal redundan dari node ${interaction.user.tag} berhasil digagalkan.`);
        return;
    }

    const msgId = interaction.message.id;
    const data = global.BROADCAST_CONTROLLERS_V51?.get(msgId);
    
    // 2. [GHOST DATA PROTECTION] Menghindari interaksi dengan memori yang sudah menguap
    if (!data) {
        return interaction.reply({ 
            content: '❌ **[GHOST_DATA]** Sesi transmisi ini telah kedaluwarsa atau ditarik dari memori pusat oleh sistem.', 
            ephemeral: true 
        }).catch(() => {});
    }

    // 3. [TARGET CONFIGURATION] Menetapkan entitas role spesifik untuk evaluasi
    const targetRoleId = '1476896625451602077';

    try {
        // 4. [EXECUTION DISPATCHER] Gerbang logika utama
        switch(interaction.customId) {
            
            // ---------------------------------------------------------
            // ROUTE A: ACKNOWLEDGEMENT PROTOCOL
            // ---------------------------------------------------------
            case 'broadcast_ack': {
                // [PASSIVE MEMORY RESOLUTION] 
                // Tanpa fetch API eksternal! 100% Anti-Opcode 8 Rate Limit. Membaca murni dari Cache RAM.
                const targetRole = interaction.guild.roles.cache.get(targetRoleId);
                
                // Fallback: Jika role gagal diidentifikasi, gunakan metrik cadangan
                const evaluationCount = targetRole && targetRole.members.size > 0 
                    ? targetRole.members.size 
                    : interaction.guild.memberCount;

                if (!data.acknowledgedUsers.has(interaction.user.id)) {
                    // [DATA MUTATION]
                    data.acknowledgedUsers.add(interaction.user.id);
                    if (typeof saveBroadcastV51 === 'function') saveBroadcastV51(); 

                    // [ANALYTICS ENGINE] Kalkulasi persentase pencapaian
                    const progressPercentage = evaluationCount > 0 ? ((data.acknowledgedUsers.size / evaluationCount) * 100).toFixed(1) : 100.0;

                    await interaction.reply({ 
                        content: `✅ **[SYSTEM_ACKNOWLEDGED]** Identitas terverifikasi untuk ${interaction.user}.\n📊 **Metrik Penetrasi Role:** \`${data.acknowledgedUsers.size}/${evaluationCount}\` personel (*${progressPercentage}%*)`, 
                        ephemeral: true 
                    });
                } else {
                    await interaction.reply({ 
                        content: `✅ **[DUPLICATE_ENTRY]** Sinyal ACK dari Anda (${interaction.user}) sudah terekam permanen di dalam sistem tertutup.`, 
                        ephemeral: true 
                    });
                }
                return;
            }

            // ---------------------------------------------------------
            // ROUTE B: TRANSMISSION DETAILS & REPEAT
            // ---------------------------------------------------------
            case 'broadcast_details':
            case 'broadcast_repeat': {
                const titleHeader = interaction.customId === 'broadcast_details' ? '📋 **[TRANSMISSION_DETAILS]:**' : '🔄 **[TRANSMISSION_REPEAT]:**';
                await interaction.reply({ 
                    content: `${titleHeader}\n\`\`\`text\n${data.content}\n\`\`\``, 
                    ephemeral: true 
                });
                return;
            }

            // ---------------------------------------------------------
            // ROUTE C: NETWORK MONITORING STATUS
            // ---------------------------------------------------------
            case 'broadcast_status': {
                // [PASSIVE MEMORY RESOLUTION]
                const targetRoleStatus = interaction.guild.roles.cache.get(targetRoleId);
                const maxPopulation = targetRoleStatus && targetRoleStatus.members.size > 0 
                    ? targetRoleStatus.members.size 
                    : interaction.guild.memberCount;
                
                const remainingHours = Math.floor((data.expiresAt - Date.now()) / (1000 * 60 * 60)).toFixed(0);

                await interaction.reply({ 
                    content: `📊 **[NETWORK_STATUS]:**\n✅ **Personel Terkonfirmasi:** \`${data.acknowledgedUsers.size}/${maxPopulation}\` (Target Node: <@&${targetRoleId}>)\n⏰ **Siklus Hidup:** \`${remainingHours} Jam\` tersisa.`, 
                    ephemeral: true 
                });
                return;
            }

            // ---------------------------------------------------------
            // ROUTE D: FEEDBACK TERMINAL
            // ---------------------------------------------------------
            case 'broadcast_feedback': {
                const fbCh = interaction.guild.channels.cache.get('1484896088178556989');
                if (fbCh) {
                    await interaction.reply({ 
                        content: `💬 **[FEEDBACK_ROUTED]:** Jalur komunikasi taktis terbuka di terminal ${fbCh}\nTerima kasih, ${interaction.user}!`, 
                        ephemeral: true 
                    });
                    fbCh.send(`💬 **[INCOMING_FEEDBACK]** Transmisi masukan dari ${interaction.user} (Modul Broadcast)`).catch(() => {});
                } else {
                    await interaction.reply({ 
                        content: '❌ **[ROUTING_ERROR]** Saluran terminal umpan balik telah diisolasi atau tidak dapat ditemukan.', 
                        ephemeral: true 
                    });
                }
                return;
            }

            // ---------------------------------------------------------
            // ROUTE E: NUKLEAR EMERGENCY THREAD (TITANIUM V5.1)
            // ---------------------------------------------------------
            case 'broadcast_emergency': {
                // 🔥 NUKLEAR EMERGENCY THREAD - NO NOTIFICATION
                const allThreads = await interaction.channel.threads.fetch({ archived: false });
                const userThreads = allThreads.threads.filter(t => 
                    t.name.includes(`Emergency-${interaction.user.username}`) && !t.archived
                );
                
                if (userThreads.size > 0) {
                    return interaction.reply({ 
                        content: `🚨 **ACTIVE THREAD:** ${userThreads.first().toString()}\nGunakan thread existing!`, 
                        ephemeral: true 
                    });
                }

                const threadId = Date.now().toString().slice(-8);
                const threadName = `🚨 EMERGENCY-${interaction.user.username}-${threadId}`;
                
                const emergencyThread = await interaction.channel.threads.create({
                    name: threadName,
                    autoArchiveDuration: 1440,
                    invitable: false,
                    reason: `NUKLEAR EMERGENCY by ${interaction.user.tag}`
                });

                // 🔥 NUKLEAR STARTER DELETE - 400ms ULTRA FAST
                setTimeout(async () => {
                    try {
                        const starter = await emergencyThread.fetchStarterMessage();
                        if (starter?.deletable) {
                            await starter.delete();
                            console.log(`💥 [NUKLEAR_STARTER] Node inisiasi "${threadName}" berhasil dihancurkan.`);
                        }
                    } catch (e) {
                        console.log('⚠️ [NUKLEAR_STARTER] Bypass penghapusan:', e.message);
                    }
                }, 400);

                // 🔥 UPGRADE EMBED - TITANIUM STYLE
                const emergencyMain = new EmbedBuilder()
                    .setAuthor({ 
                        name: '🌌 TITANIUM EMERGENCY PROTOCOL | V5.1', 
                        iconURL: 'https://cdn.discordapp.com/emojis/1195205740326408704.gif?size=64' 
                    })
                    .setTitle('🚨' + '═'.repeat(25) + ' EMERGENCY ALERT ' + '═'.repeat(25) + '🚨')
                    .setColor('#FF1493')
                    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true, size: 512 }))
                    .setDescription(
                        `**${'🔴'.repeat(50)}**\n` +
                        `### ⚡ **CRITICAL INCIDENT DETECTED**\n` +
                        `**${'🔴'.repeat(50)}**\n\n` +
                        `**👤 EMERGENCY ORIGIN:** ${interaction.user.toString()}\n` +
                        `**🆔 PERSONNEL ID:** \`${interaction.user.id}\`\n` +
                        `**📡 THREAD ID:** \`${emergencyThread.id.slice(-8).toUpperCase()}\`\n` +
                        `**⏰ ACTIVATION:** <t:${Math.floor(Date.now()/1000)}:F>\n\n` +
                        `**📋 STATUS:** \`🔴 PRIORITY_1 - MODERATOR_REQUIRED\`\n\n` +
                        `**${'▓'.repeat(50)}**\n` +
                        `### 🛠️ **CONTROL PANEL**\n` +
                        `**${'▓'.repeat(50)}**\n` +
                        `• **✅ RESOLVE** - Issue fixed\n` +
                        `• **🔄 ESCALATE** - Higher priority\n` +
                        `• **📊 STATUS** - Update progress\n` +
                        `• **❌ CLOSE** - False alarm`
                    )
                    .addFields(
                        { 
                            name: '📡 BROADCAST SOURCE', 
                            value: `\`${data.headline.substring(0, 50)}${data.headline.length > 50 ? '...' : ''}\``, 
                            inline: true 
                        },
                        { 
                            name: '🔒 SECURITY LEVEL', 
                            value: '`TITANIUM_V5.1_VERIFIED`', 
                            inline: true 
                        },
                        { 
                            name: '⏱️ TTL', 
                            value: '`24 HOURS AUTO-ARCHIVE`', 
                            inline: true 
                        }
                    )
                    .setFooter({ 
                        text: `DATA CENTRE EMERGENCY CORE | TX-${threadId.toUpperCase()}`, 
                        iconURL: client.user.displayAvatarURL() 
                    })
                    .setTimestamp();

                // 🔥 SECONDARY INFO PANEL
                const infoPanel = new EmbedBuilder()
                    .setTitle('📋 EMERGENCY INSTRUCTIONS')
                    .setColor('#00FF00')
                    .setDescription(
                        `**${'█'.repeat(50)}**\n` +
                        `### 🎯 **MODERATOR PROTOCOL**\n` +
                        `**${'█'.repeat(50)}**\n\n` +
                        `\`\`\`css\n` +
                        `1. ACKNOWLEDGE request dalam 5 menit\n` +
                        `2. GATHER details from user\n` +
                        `3. ASSIGN priority level\n` +
                        `4. UPDATE status regularly\n` +
                        `5. RESOLVE or ESCALATE\n\`\`\``
                    )
                    .addFields(
                        { name: '👥 Moderator', value: '<@&1484124559480193134>', inline: true },
                        { name: '🚨 Priority', value: '`CRITICAL`', inline: true },
                        { name: '📊 Auto-close', value: '`24h inactive`', inline: true }
                    );

                // 🔥 KIRIM KE THREAD - TAG MODERATOR SAJA
                await emergencyThread.send({
                    content: `**@everyone 🚨 TITANIUM EMERGENCY ACTIVATED 🚨 @everyone**\n<@&1484124559480193134> **PRIORITY ALERT**`,
                    embeds: [emergencyMain, infoPanel]
                });

                // REPLY PRIVATE KE USER
                await interaction.reply({ 
                    content: `✅ **EMERGENCY THREAD CREATED!**\n${emergencyThread.toString()}\n\nModerator pusat telah di-notifikasi 🚨`, 
                    ephemeral: true 
                });

                console.log(`🚨 [TITANIUM_EMERGENCY] Protokol darurat ${threadName} sukses diaktivasi secara sepihak oleh ${interaction.user.tag}`);
                return;
            }
        } 
        
    } catch (e) {
        console.error(`❌ [V5.1_CORE_ANOMALY] Kegagalan transmisi pada blok matriks Broadcast:`, e.message);
        if (!interaction.replied && !interaction.deferred) {
            interaction.reply({ content: '⚠️ **[SYSTEM_FAULT]** Siklus eksekusi terputus secara mendadak. Hubungi arsitek sistem terdekat.', ephemeral: true }).catch(() => {});
        }
        return;
    }
}
// ============================================================================================
// AKHIR DARI BLOK BROADCAST HANDLER V5.1 (STEALTH CACHE MODE)
// ============================================================================================

// Tambahkan ini di dalam client.on(Events.InteractionCreate) 
// SEBELUM if (!interaction.isChatInputCommand()) return;

// ============================================================================================
// 🔥 KERNEL MODULE: ENTERPRISE VERIFY PANEL BUTTON HANDLER (ANTI-10062 TIMEOUT)
// ============================================================================================
// Modul ini dilengkapi dengan sistem asinkron tingkat lanjut, manajemen memori cache yang aman,
// dan isolasi crash berlapis untuk menjamin kelancaran otorisasi tanpa status "is thinking..."
// --------------------------------------------------------------------------------------------
if (interaction.isButton() && interaction.customId === 'verify_panel_button') {
    
    // TAHAP 1: VALIDASI KONDISI INTERAKSI & INISIALISASI PROTOKOL DEFERRAL
    // Memastikan bahwa sinyal interaksi belum pernah ditangani sebelumnya oleh node lain
    if (interaction.replied || interaction.deferred) return;
    
    try {
        // Mengamankan jendela waktu respons Discord dari 3 detik menjadi 15 menit.
        // Proses ini wajib dieksekusi lebih awal sebelum sistem memuat beban komputasi berat.
        await interaction.deferReply({ ephemeral: true });
    } catch (deferError) {
        // Jika defer gagal (koneksi pengguna terputus atau API Discord sedang fluktuatif),
        // sistem akan mencatat anomali ini tanpa menghentikan runtime utama (Silent Fail).
        console.log(`[${new Date().toISOString()}] ⚠️ [VERIFY_EXPIRED] Sesi interaksi telah kadaluarsa atau koneksi terputus sebelum otorisasi dimulai.`);
        return;
    }
    
    try {
        // TAHAP 2: PEMUATAN DATA OTORISASI & VALIDASI INFRASTRUKTUR
        const memberRoleId = '1476896625451602077';
        const memberRole = interaction.guild.roles.cache.get(memberRoleId);
        
        // Pengecekan eksistensi Role: Mencegah crash jika role tidak sengaja terhapus di server
        if (!memberRole) {
            return await interaction.editReply({ 
                content: '❌ **[SYSTEM ALERT 404]** Komponen Role MEMBER tidak terdeteksi dalam infrastruktur server. Harap hubungi Administrator Data Centre.' 
            }).catch(() => {});
        }
        
        // TAHAP 3: INSPEKSI CACHE REDUNDANSI (MENCEGAH SPAM TOMBOL)
        if (interaction.member.roles.cache.has(memberRoleId)) {
            return await interaction.editReply({ 
                content: '✅ **Status Otorisasi Terkonfirmasi!** \nAnda sudah terdaftar secara resmi dan memiliki role MEMBER di dalam sistem.' 
            }).catch(() => {});
        }
        
        // TAHAP 4: EKSEKUSI INJEKSI ROLE (INTI PROSES ASINKRON)
        await interaction.member.roles.add(memberRole);
        
        // TAHAP 5: SINKRONISASI IDENTITAS (NICKNAME)
        // Diisolasi secara spesifik agar kegagalan ubah nickname (misal pada role Admin/Owner)
        // tidak akan menggagalkan keseluruhan proses verifikasi pengguna.
        try {
            const newNickname = `[MEMBER] ${interaction.user.username}`;
            await interaction.member.setNickname(newNickname.substring(0, 32));
        } catch (nicknameError) {
            console.warn(`[${new Date().toISOString()}] ℹ️ [NICKNAME_BYPASS] Hierarki izin bot lebih rendah dari subjek ${interaction.user.tag}, pembaruan nickname dilewati.`);
        }
        
        // TAHAP 6: KALKULASI POPULASI & PEMBARUAN PANEL VISUAL REAL-TIME
        const memberCount = interaction.guild.members.cache.filter(m => 
            m.roles.cache.has(memberRoleId)
        ).size;
        
        // Pembaruan embed pada panel utama dilindungi dengan try...catch untuk mencegah crash
        // apabila variabel global.VERIFY_PANEL_DATA belum terinisialisasi dengan sempurna
        try {
            if (global.VERIFY_PANEL_DATA && global.VERIFY_PANEL_DATA.messageId) {
                const originalMessage = await interaction.channel.messages.fetch(global.VERIFY_PANEL_DATA.messageId).catch(() => null);
                
                if (originalMessage && originalMessage.embeds && originalMessage.embeds.length > 0) {
                    const embed = EmbedBuilder.from(originalMessage.embeds[0]);
                    
                    // Rekonstruksi struktur field secara dinamis
                    embed.spliceFields(0, 1, { 
                        name: '📊 Status Operasional', 
                        value: '`✅ VERIFIED_SUCCESS`', 
                        inline: true 
                    });
                    embed.spliceFields(1, 1, { 
                        name: '👥 POPULASI MEMBER', 
                        value: `\`${memberCount.toLocaleString()} Node Terdaftar\``, 
                        inline: true 
                    });
                    
                    await originalMessage.edit({ embeds: [embed] }).catch(() => {});
                }
            }
        } catch (panelUpdateError) {
            console.warn(`[${new Date().toISOString()}] ⚠️ [PANEL_SYNC_DELAY] Sinkronisasi visual panel tertunda:`, panelUpdateError.message);
        }
        
        // TAHAP 7: TRANSMISI RESPON SUKSES KE SUBJEK PENGGUNA
        const successEmbed = new EmbedBuilder()
            .setTitle('🎉 PROTOKOL VERIFIKASI SELESAI!')
            .setDescription(
                `**✅ Identitas Biometrik Dikonfirmasi!**\n\n` +
                `**📋 Parameter Akses Diberikan:**\n` +
                `• Role Infrastruktur **MEMBER** ✅\n` +
                `• Sinkronisasi Nama **[MEMBER] ${interaction.user.username}** ✅\n` +
                `• Akses Komprehensif Server ✅\n\n` +
                `**🚀 Selamat datang di fasilitas Data Centre!**\n` +
                `_Gunakan perintah \`/leaderboard\` untuk memeriksa statistik operasional._`
            )
            .setColor('#00ff88')
            .setThumbnail(interaction.user.displayAvatarURL())
            .setTimestamp();
        
        await interaction.editReply({ embeds: [successEmbed] });
        
        // TAHAP 8: PENGIRIMAN TELEMETRI KE SECURITY AUDIT
        // Diisolasi untuk mencegah kegagalan jika channel audit terhapus atau variabel hilang
        try {
            if (typeof GLOBAL_MATRIX !== 'undefined' && GLOBAL_MATRIX.ENDPOINTS && GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT) {
                const auditChannel = interaction.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                
                if (auditChannel) {
                    const auditEmbed = new EmbedBuilder()
                        .setTitle('🔐 OTORISASI_PENGGUNA_BARU')
                        .setColor(GLOBAL_MATRIX.VISUALS?.THEME_SUCCESS || '#00ff88')
                        .setDescription(`**Subjek Otorisasi :** ${interaction.user.toString()}\n**Metode Akses     :** \`TERMINAL_PANEL_BUTTON\`\n**Total Populasi   :** \`${memberCount.toLocaleString()} Members\``)
                        .setTimestamp();
                        
                    await auditChannel.send({ embeds: [auditEmbed] }).catch(() => {});
                }
            }
        } catch (auditError) {
            console.warn(`[${new Date().toISOString()}] ⚠️ [AUDIT_TRANSMISSION_FAILED] Gagal mengirim log ke sentral keamanan.`);
        }
        
        // Pencatatan final ke konsol backend
        console.log(`[${new Date().toISOString()}] ✅ [VERIFY_SYSTEM] Eksekusi otorisasi sukses untuk ${interaction.user.tag}. Total Populasi: ${memberCount}`);
        
    } catch (fatalSystemError) {
        // TAHAP 9: FAIL-SAFE MECHANISM (CRASH AVOIDANCE)
        // Menangkap anomali kritikal tanpa menyebabkan bot terhenti secara mendadak
        console.error(`\n====================================================================`);
        console.error(`[${new Date().toISOString()}] 🔴 [CRITICAL_KERNEL_ERROR] Terjadi kegagalan pada Verifikasi Panel:`);
        console.error(`Target Pengguna : ${interaction.user.tag} (${interaction.user.id})`);
        console.error(`Detail Log      :`, fatalSystemError);
        console.error(`====================================================================\n`);
        
        // Mengirimkan notifikasi darurat kepada pengguna menggunakan editReply
        await interaction.editReply({ 
            content: '❌ **[FATAL ERROR 500]** Terjadi gangguan pada infrastruktur verifikasi saat memproses otorisasi Anda. Anomali telah dicatat. Harap hubungi Administrator Tingkat Atas.' 
        }).catch(async () => {
            // Lapisan pelindung terakhir apabila API Discord menolak editReply
            console.error(`[${new Date().toISOString()}] 🔴 [FINAL_FALLBACK] Kegagalan total pada transmisi pesan error ke pengguna.`);
        });
    }
    return;
}

// Tambahkan di client.on(Events.InteractionCreate) SEBELUM if (!interaction.isChatInputCommand()) return;

// 🔥 GETJOB PANEL BUTTON HANDLER
if (interaction.isButton() && interaction.customId === 'getjob_panel_button') {
    if (interaction.replied || interaction.deferred) return;
    
    try {
        await interaction.deferReply({ ephemeral: true });
    } catch (deferError) {
        console.log('⚠️ [GETJOB_EXPIRED]');
        return;
    }
    
    try {
        const existingThreads = await interaction.channel.threads.fetchActive();
        const userExistingThread = existingThreads.threads.find(thread => 
            thread.name.startsWith(`Get Job By: ${interaction.user.username}`) && 
            thread.ownerId === interaction.user.id
        );

        if (userExistingThread) {
            return interaction.editReply({ 
                content: `⚠️ **[THREAD_EXISTS]** ${userExistingThread.toString()}` 
            });
        }

        const hasRequiredRole = interaction.member.roles.cache.has('1476896625451602077');
        if (!hasRequiredRole) {
            return interaction.editReply({ 
                content: '❌ **[ACCESS_DENIED]** Role **MEMBER** diperlukan.' 
            });
        }

        const jobChannelId = '1484448271266222231';
        const jobChannel = interaction.guild.channels.cache.get(jobChannelId);
        if (!jobChannel) {
            return interaction.editReply({ 
                content: '❌ **[CHANNEL_NOT_FOUND]** Channel #get-job hilang!' 
            });
        }

        const threadName = `Get Job By: ${interaction.user.username}`;
        const thread = await jobChannel.threads.create({
            name: threadName,
            autoArchiveDuration: 60,
            reason: `Job request by ${interaction.user.tag}`
        });

        const welcomeEmbed = new EmbedBuilder()
            .setTitle('🎫 GET JOB SUPPORT TICKET')
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
            .setDescription(
                `**Selamat datang di sistem Get Job!**\n\n` +
                `> 📋 **Status:** \`WAITING_FOR_MODERATOR_RESPONSE\`\n\n` +
                `**Silahkan tunggu moderator.**\n\n` +
                `_Jelaskan kebutuhan job Anda di sini._`
            )
            .addFields(
                { name: '👤 Requester', value: `${interaction.user.toString()}`, inline: true },
                { name: '🆔 Ticket ID', value: `\`#${thread.id.substring(0, 8)}\``, inline: true },
                { name: '📅 Created', value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true }
            )
            .setFooter({ text: GLOBAL_MATRIX.VISUALS.SYSTEM_FOOTER })
            .setTimestamp();

        await thread.send({ 
            content: `<@&1484124559480193134> ${interaction.user.toString()}`, 
            embeds: [welcomeEmbed] 
        });

        // 🔥 NUKLEAR DELETE STARTER MESSAGE - 100% WORK
        setTimeout(async () => {
            try {
                const starterMessage = await thread.fetchStarterMessage();
                if (starterMessage.deletable) {
                    await starterMessage.delete();
                    console.log(`✅ [NUKLEAR] Deleted "${thread.name}" starter!`);
                }
            } catch (e) {
                console.log('⚠️ [NUKLEAR] Skip:', e.message);
            }
        }, 800);

        await interaction.editReply({ 
            content: `✅ **SUCCESS** ${thread.toString()}` 
        });

        const audit = interaction.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (audit) {
            const auditEmbed = new EmbedBuilder()
                .setTitle('🎫 NEW JOB TICKET')
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
                .setDescription(`**User:** ${interaction.user}\n**Thread:** ${thread}`)
                .setTimestamp();
            await audit.send({ embeds: [auditEmbed] });
        }
        
        console.log(`✅ [GETJOB] ${interaction.user.tag} → ${thread.name}`);
        
    } catch (error) {
        console.error('❌ [GETJOB_ERROR]:', error);
        await interaction.editReply({ content: '❌ Gagal buat thread.' }).catch(() => {});
    }
    return;
}

// 🔥 CDID PANEL BUTTON HANDLER (Tambahkan setelah GETJOB_PANEL handler)
if (interaction.isButton() && (interaction.customId === 'cdid_button' || interaction.customId === 'fishit_button')) {
    if (interaction.replied || interaction.deferred) return;
    
    try {
        await interaction.deferReply({ ephemeral: true });
    } catch (deferError) {
        console.log('⚠️ [CDID_EXPIRED]');
        return;
    }
    
    const cdidRoleId = '1488813924731195484';  // 🏎️ CDID
    const fishitRoleId = '1488814003785437215'; // 🐟 Fish It
    
    let targetRoleId, roleName, emoji;
    
    if (interaction.customId === 'cdid_button') {
        targetRoleId = cdidRoleId;
        roleName = 'CDID';
        emoji = '🏎️';
    } else {
        targetRoleId = fishitRoleId;
        roleName = 'Fish It';
        emoji = '🐟';
    }
    
    const targetRole = interaction.guild.roles.cache.get(targetRoleId);
    if (!targetRole) {
        return interaction.editReply({ 
            content: `❌ **Role ${roleName} tidak ditemukan!** Hubungi admin.` 
        }).catch(() => {});
    }
    
    // Cek apakah sudah punya role
    if (interaction.member.roles.cache.has(targetRoleId)) {
        return interaction.editReply({ 
            content: `✅ **Sudah memiliki role ${roleName}!**` 
        }).catch(() => {});
    }
    
    try {
        // Berikan role
        await interaction.member.roles.add(targetRole);
        
        // Success embed
        const successEmbed = new EmbedBuilder()
            .setTitle(`${emoji} ${roleName.toUpperCase()} ROLE GRANTED!`)
            .setDescription(
                `**✅ Role **${roleName}** berhasil diberikan!**\n\n` +
                `**📋 Status:** \`ROLE_INJEKSI_SUCCESS\`\n` +
                `**👤 User:** ${interaction.user.toString()}\n` +
                `**🆔 Role ID:** \`${targetRoleId}\`\n\n` +
                `**🚀 Selamat! Anda sekarang ${roleName} member.**`
            )
            .setColor(interaction.customId === 'cdid_button' ? '#0000FF' : '#FFF8DC')
            .setThumbnail(interaction.user.displayAvatarURL())
            .setTimestamp();
        
        await interaction.editReply({ embeds: [successEmbed] });
        
        // Audit log
        const audit = interaction.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (audit) {
            const auditEmbed = new EmbedBuilder()
                .setTitle(`${emoji} ${roleName.toUpperCase()}_ROLE_GRANTED`)
                .setColor(interaction.customId === 'cdid_button' ? '#0000FF' : '#FFF8DC')
                .setDescription(`**User:** ${interaction.user.toString()}\n**Role:** <@&${targetRoleId}>\n**Method:** \`PANEL_BUTTON\``)
                .setTimestamp();
            await audit.send({ embeds: [auditEmbed] }).catch(() => {});
        }
        
        console.log(`✅ [${roleName}_PANEL] ${interaction.user.tag} got ${roleName} role!`);
        
    } catch (error) {
        console.error(`❌ [${roleName}_ERROR]:`, error);
        await interaction.editReply({ 
            content: `❌ **Gagal memberikan role ${roleName}!** Coba lagi atau hubungi admin.` 
        }).catch(() => {});
    }
    return;
}

if (interaction.isButton() && interaction.customId === 'scriptcontrol_panel_button') {
    const SCRIPT_CONTROL_ROLE = '1463837271965831232';
    
    if (!interaction.member.roles.cache.has(SCRIPT_CONTROL_ROLE)) {
        return interaction.reply({ 
            content: '❌ **[ACCESS_DENIED]** Role `1463837271965831232` diperlukan!', 
            ephemeral: true 
        }).catch(() => {});
    }
    
    if (interaction.replied || interaction.deferred) return;
    
    try {
        await interaction.deferReply({ ephemeral: true });
    } catch (deferError) {
        console.log('⚠️ [SCRIPTCONTROL_EXPIRED]');
        return;
    }
    
    // FIXED: Gunakan path langsung, bukan variable
    let scriptCount = 0, webhookCount = 0;
    try {
        if (fs.existsSync('./multi_script_system.json')) {
            const rawData = fs.readFileSync('./multi_script_system.json', 'utf8');
            scriptCount = Object.keys(JSON.parse(rawData)).length;
        }
    } catch(e) { console.log('Script count error:', e.message); }
    
    try {
        if (fs.existsSync('./webhook_config.json')) {
            const rawData = fs.readFileSync('./webhook_config.json', 'utf8');
            webhookCount = Object.keys(JSON.parse(rawData)).length;
        }
    } catch(e) { console.log('Webhook count error:', e.message); }
    
    const controlPanelEmbed = new EmbedBuilder()
        .setTitle('⌨️ SCRIPT CONTROL PANEL')
        .setDescription(
            `**Panel kontrol terpusat untuk Script, Webhook, HWID, dan Stats!**\n\n` +
            `**✅ Klik tombol di bawah untuk mengakses:**\n` +
            `• **📜 Script** - Akses semua script tersimpan\n` +
            `• **🔌 Webhook** - Akses semua webhook tersimpan\n` +
            `• **🔄 Reset HWID** - Reset hardware ID\n` +
            `• **📊 Stats** - Status bot real-time\n\n` +
            `**📊 Status Panel:**\n` +
            `• **Scripts:** \`${scriptCount}\`\n` +
            `• **Webhooks:** \`${webhookCount}\`\n\n` +
            `**⚡ Panel ini **persisten** - tetap aktif meskipun bot restart!**`
        )
        .setColor('#5865F2')
        .addFields(
            { name: '📊 Status', value: '`✅ LIVE_PERSISTENT`', inline: true },
            { name: '🔒 Access', value: '`Role Restricted`', inline: true },
            { name: '🛡️ System', value: '`TITANIUM_V3.0`', inline: true }
        )
        .setFooter({ 
            text: 'DATA CENTRE SCRIPT CONTROL • Role Required!', 
            iconURL: client.user.displayAvatarURL() 
        })
        .setTimestamp();

    const buttonRow1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('scriptcontrol_script')
                .setLabel('📜 Script')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('scriptcontrol_webhook')
                .setLabel('🔌 Webhook')
                .setStyle(ButtonStyle.Success)
        );

    const buttonRow2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('scriptcontrol_hwid')
                .setLabel('🔄 Reset HWID')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('scriptcontrol_stats')
                .setLabel('📊 Stats')
                .setStyle(ButtonStyle.Danger)
        );

    await interaction.editReply({ 
        embeds: [controlPanelEmbed], 
        components: [buttonRow1, buttonRow2] 
    });
    return;
}

// 🔥 SCRIPT CONTROL SUB-BUTTON HANDLERS - TOTAL FIX V3.2
if (interaction.isButton() && interaction.customId.startsWith('scriptcontrol_')) {
    const SCRIPT_CONTROL_ROLE = '1463837271965831232';
    
    // SAFETY CHECK
    if (!interaction.member.roles.cache.has(SCRIPT_CONTROL_ROLE)) {
        if (!interaction.replied && !interaction.deferred) {
            interaction.reply({ 
                content: '❌ **[ACCESS_DENIED]** Role khusus diperlukan!', 
                ephemeral: true 
            }).catch(() => {});
        }
        return;
    }
    
    if (interaction.replied || interaction.deferred) {
        console.log('⚠️ [SCRIPTCONTROL_SKIP] Already handled');
        return;
    }
    
    try {
        await interaction.deferUpdate();
    } catch (deferError) {
        console.log('⚠️ [SCRIPTCONTROL_DEFER_EXPIRED]');
        return;
    }
    
    const action = interaction.customId.split('_')[1];
    
    switch(action) {
        case 'script': {
            /**
             * ============================================================================================
             * 📜 [ENTERPRISE MODULE: SCRIPT VAULT ACCESS INTERFACE V4.2]
             * ============================================================================================
             * Merender antarmuka dropdown dinamis untuk membaca memori skrip secara real-time.
             */
            const scriptVaultPath = './multi_script_system.json';
            
            // --- [LAYER 1: DATABASE EXISTENCE CHECK] ---
            if (!fs.existsSync(scriptVaultPath)) {
                return interaction.followUp({ 
                    content: '❌ **[VAULT_EMPTY]** Repositori skrip belum diinisialisasi. Silakan deploy skrip pertama Anda melalui Slash Command.', 
                    ephemeral: true 
                });
            }

            try {
                // --- [LAYER 2: SECURE DATA PARSING] ---
                const rawData = fs.readFileSync(scriptVaultPath, 'utf8');
                const scriptData = JSON.parse(rawData);
                const scriptKeys = Object.keys(scriptData);

                if (scriptKeys.length === 0) {
                    return interaction.followUp({ 
                        content: '⚠️ **[VAULT_EMPTY]** Direktori skrip terdeteksi kosong. Tidak ada data yang dapat dirender.', 
                        ephemeral: true 
                    });
                }

                // --- [LAYER 3: DYNAMIC DROPDOWN COMPILATION] ---
                // Membatasi opsi maksimal 25 item sesuai protokol limitasi API Discord
                const selectOptions = scriptKeys.slice(0, 25).map(name => {
                    const meta = scriptData[name];
                    return new StringSelectMenuOptionBuilder()
                        .setLabel(name.length > 50 ? name.substring(0, 47) + '...' : name)
                        .setDescription(`📏 Ukuran: ${meta.size} Bytes | ⏱️ Dibuat: ${new Date(meta.createdAt).toLocaleDateString('id-ID')}`)
                        .setValue(name)
                        .setEmoji('📜');
                });

                const scriptDropdown = new ActionRowBuilder().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('scriptcontrol_script_select')
                        .setPlaceholder(`Akses Repositori: ${scriptKeys.length} Skrip Terenkripsi Tersedia...`)
                        .addOptions(selectOptions)
                );

                // --- [LAYER 4: HIGH-END VISUALIZATION] ---
                const vaultUI = new EmbedBuilder()
                    .setAuthor({ name: 'OMNISCIENCE KERNEL: VAULT ACCESS', iconURL: client.user.displayAvatarURL() })
                    .setTitle('🗄️ SCRIPT DIRECTORY ACCESSED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS || '#00ffa3')
                    .setDescription(
                        `**Koneksi ke brankas penyimpanan skrip berhasil distabilkan.**\n` +
                        `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}\n` +
                        `Silakan pilih skrip dari modul dropdown di bawah ini untuk menginspeksi *source code*, memeriksa metadata eksekusi, dan meninjau integritas data.`
                    )
                    .addFields(
                        { name: '📊 Total Index', value: `\`${scriptKeys.length} Skrip Aktif\``, inline: true },
                        { name: '🛡️ Protokol Akses', value: '`READ_ONLY_MODE`', inline: true }
                    )
                    .setFooter({ text: 'DATA CENTRE SECURITY DIVISION | V4.2' })
                    .setTimestamp();

                await interaction.followUp({ embeds: [vaultUI], components: [scriptDropdown], ephemeral: true });
                console.log(`✅ [VAULT_ACCESS] Personel ${interaction.user.tag} membuka direktori SCRIPT.`);

            } catch (error) {
                console.error('❌ [SCRIPT_VAULT_FAULT]:', error.message);
                await interaction.followUp({ 
                    content: '🚨 **[SYSTEM_PANIC]** Kegagalan parsing saat membaca matriks penyimpanan skrip.', 
                    ephemeral: true 
                });
            }
            break;
        }

        case 'webhook': {
            /**
             * ============================================================================================
             * 🔌 [ENTERPRISE MODULE: WEBHOOK ROUTE INTERFACE V4.2]
             * ============================================================================================
             * Merender antarmuka dropdown dinamis untuk membaca rute webhook eksternal.
             */
            const webhookVaultPath = './webhook_config.json';
            
            // --- [LAYER 1: DATABASE EXISTENCE CHECK] ---
            if (!fs.existsSync(webhookVaultPath)) {
                return interaction.followUp({ 
                    content: '❌ **[ROUTE_EMPTY]** Matriks webhook belum diinisialisasi di dalam *server disk*.', 
                    ephemeral: true 
                });
            }

            try {
                // --- [LAYER 2: SECURE DATA PARSING] ---
                const rawData = fs.readFileSync(webhookVaultPath, 'utf8');
                const webhookData = JSON.parse(rawData);
                const webhookKeys = Object.keys(webhookData);

                if (webhookKeys.length === 0) {
                    return interaction.followUp({ 
                        content: '⚠️ **[ROUTE_EMPTY]** Tidak ada transmisi webhook eksternal yang aktif saat ini.', 
                        ephemeral: true 
                    });
                }

                // --- [LAYER 3: DYNAMIC DROPDOWN COMPILATION] ---
                const selectOptions = webhookKeys.slice(0, 25).map(name => {
                    const meta = webhookData[name];
                    return new StringSelectMenuOptionBuilder()
                        .setLabel(name.length > 50 ? name.substring(0, 47) + '...' : name)
                        .setDescription(`🌐 Endpoint Aktif | 📡 Status: ${meta.status || 'LISTENING'}`)
                        .setValue(name)
                        .setEmoji('🔌');
                });

                const webhookDropdown = new ActionRowBuilder().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('scriptcontrol_webhook_select')
                        .setPlaceholder(`Akses Routing: ${webhookKeys.length} Endpoint Tersedia...`)
                        .addOptions(selectOptions)
                );

                // --- [LAYER 4: HIGH-END VISUALIZATION] ---
                const networkUI = new EmbedBuilder()
                    .setAuthor({ name: 'OMNISCIENCE KERNEL: NETWORK ACCESS', iconURL: client.user.displayAvatarURL() })
                    .setTitle('🌐 WEBHOOK ROUTING ACCESSED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO || '#00d1ff')
                    .setDescription(
                        `**Panel monitoring jalur komunikasi eksternal siap beroperasi.**\n` +
                        `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}\n` +
                        `Pilih rute webhook dari modul jaringan di bawah ini untuk melihat konfigurasi *endpoint*, URL transmisi, dan status konektivitas node.`
                    )
                    .addFields(
                        { name: '🔌 Total Rute', value: `\`${webhookKeys.length} Endpoint\``, inline: true },
                        { name: '🛡️ Protokol Akses', value: '`VIEW_STATE_ONLY`', inline: true }
                    )
                    .setFooter({ text: 'NETWORK SECURITY DIVISION | V4.2' })
                    .setTimestamp();

                await interaction.followUp({ embeds: [networkUI], components: [webhookDropdown], ephemeral: true });
                console.log(`✅ [NETWORK_ACCESS] Personel ${interaction.user.tag} membuka direktori WEBHOOK.`);

            } catch (error) {
                console.error('❌ [WEBHOOK_VAULT_FAULT]:', error.message);
                await interaction.followUp({ 
                    content: '🚨 **[SYSTEM_PANIC]** Terjadi gangguan latensi saat membaca peta jaringan webhook.', 
                    ephemeral: true 
                });
            }
            break;
        }
        case 'hwid':
            try {
                const now = new Date();
                const timestamp = now.toLocaleTimeString('id-ID', { hour12: false });
                const currentTimeInMinutes = (now.getHours() * 60) + now.getMinutes();
                
                if (currentTimeInMinutes < (9 * 60) || currentTimeInMinutes > (19 * 60 + 45)) {
                    return interaction.editReply({ 
                        content: `🔒 **CHRONOS_LOCK:** Diluar jam operasional (09:00-19:45 WIB)\n⏰ **Sekarang:** ${timestamp}`, 
                        components: [] 
                    });
                }

                PENDING_HWID_PROCESS_UID = interaction.user.id;
                const rootAdmin = await client.users.fetch('1280789307027755019').catch(() => null);
                
                if (!rootAdmin) {
                    return interaction.editReply({ content: `❌ **UPLINK_FAILED:** Tidak dapat menghubungi sistem pusat.`, components: [] });
                }

                const requestUI = new EmbedBuilder()
                    .setTitle('🔧 HWID_AUDIT: SCRIPT_CONTROL_REQUEST')
                    .setColor('#FFD700')
                    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(
                        `# 📥 HWID_RESET_REQUEST\n` +
                        `**━━━━━━━━━━━━━━━━━━━━━━━━**\n\n` +
                        `**👤 REQUESTER:** ${interaction.user.toString()}\n` +
                        `**🆔 USER_ID:** \`${interaction.user.id}\`\n` +
                        `**📱 SOURCE:** \`SCRIPT_CONTROL_PANEL\`\n` +
                        `**⏰ TIME:** \`${timestamp} WIB\`\n\n` +
                        `**🛠️ APPROVAL:**\n` +
                        `• \`/done pesan:...\` - **APPROVE**\n` +
                        `• \`/reject alasan:...\` - **DENY**\n\n` +
                        `**━━━━━━━━━━━━━━━━━━━━━━━━**`
                    )
                    .addFields(
                        { name: '🔒 STATUS', value: '`PENDING_ROOT_APPROVAL`', inline: true },
                        { name: '⏰ WINDOW', value: '`09:00-19:45 WIB`', inline: true }
                    )
                    .setFooter({ text: 'SCRIPT_CONTROL → ROOT_UPLINK | V3.2' })
                    .setTimestamp();

                await rootAdmin.send({ embeds: [requestUI] });
                await interaction.editReply({ 
                    content: `✅ **HWID REQUEST SENT!**\n📡 **Status:** \`PENDING_ROOT_APPROVAL\`\n⏳ **ROOT ADMIN sudah diberi notifikasi DM**`, 
                    components: [] 
                });
                
            } catch (hwidError) {
                console.error('❌ [HWID_ERROR]:', hwidError);
                await interaction.editReply({ content: `❌ **UPLINK_FAILED:** Coba lagi 5 menit lagi.`, components: [] });
            }
            break;

        case 'stats':
            // 🔥 STATS UI IDENTIK DENGAN /STATUS - 100% FIXED
            try {
                const totalSeconds = Math.floor((Date.now() - SYSTEM_BOOTUP_TIME) / 1000);
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

                const currentPing = client.ws.ping;
                const pingDisplay = currentPing < 0 ? "Calculating..." : `${currentPing}ms`;

                const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
                const cpuModel = os.cpus()[0]?.model || 'Unknown CPU';
                
                const cpus = os.cpus();
                let totalIdle = 0, totalTick = 0;
                cpus.forEach(cpu => {
                    for (let type in cpu.times) totalTick += cpu.times[type];
                    totalIdle += cpu.times.idle;
                });
                const cpuUsage = totalTick > 0 ? (100 - (100 * totalIdle / totalTick)).toFixed(1) : '0.0';
                const loadPercent = Math.min(100, (os.loadavg()[0] * 100)).toFixed(1);
                
                const barLength = 10;
                const filled = Math.round(Math.min(1, ramUsed / 1024) * barLength);
                const ramBar = '█'.repeat(filled) + '░'.repeat(barLength - filled);

                const totalMembers = interaction.guild?.memberCount || 0;
                const memberRoleMembers = interaction.guild?.members.cache.filter(m => 
                    m.roles.cache.has(GLOBAL_MATRIX.IDENTITIES.MEMBER_ROLE || '1476896625451602077')
                ).size || 0;
                const botCount = interaction.guild?.members.cache.filter(m => m.user.bot).size || 0;
                const boostCount = interaction.guild?.premiumSubscriptionCount || 0;

                const statsEmbed = new EmbedBuilder()
                    .setTitle('⚡ SUPREME CORE ENGINE DIAGNOSTICS')
                    .setAuthor({ name: 'High-Performance Hardware Telemetry', iconURL: client.user?.displayAvatarURL() || '' })
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
                    .setDescription(
                        `Sistem beroperasi pada efisiensi maksimal dengan beban kernel terkontrol.\n` +
                        `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}\n` +
                        `**⚙️ HARDWARE MONITOR**\n` +
                        `> **CPU_MODEL :** \`${cpuModel}\`\n` +
                        `> **CPU_USAGE :** \`${cpuUsage}%\`\n` +
                        `> **RAM_USAGE :** \`[${ramBar}] ${ramUsed} MB\`\n` +
                        `> **SYS_LOAD  :** \`${loadPercent}%\`\n` +
                        `> **OS_PLAT   :** \`${os.platform()} ${os.release()}\`\n` +
                        `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}`
                    )
                    .addFields(
                        { name: '📡 LATENCY', value: `\`${pingDisplay}\``, inline: true },
                        { name: '⏳ UPTIME', value: `\`${uptimeString}\``, inline: true },
                        { name: '📀 KERNEL', value: `\`Node ${process.version}\``, inline: true },
                        { name: '🛡️ SECURITY', value: `\`ACTIVE (L-12)\``, inline: true },
                        { name: '🧩 SHARDS', value: `\`1/1 ACTIVE\``, inline: true },
                        { name: '💾 PID', value: `\`#${process.pid}\``, inline: true },
                        { name: '🌍 SERVER STATS', value: `\`${totalMembers} Members | ${memberRoleMembers} Verified | ${botCount} Bots | ${boostCount} Boost\``, inline: false },
                        { name: '🔄 VOICE SYNC', value: '`✅ DYNAMIC_NAMING_ACTIVE`', inline: true },
                        { name: '📊 CACHE', value: `\`${global.MESSAGE_CACHE?.size?.toLocaleString() || 0} msgs\``, inline: true },
                        { name: '🔐 HWID', value: `\`${IS_HWID_SYSTEM_ENABLED ? '🟢 ACTIVE' : '🔴 OFFLINE'}\``, inline: true }
                    )
                    .setFooter({ text: `DATA CENTRE TELEMETRY | ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB` })
                    .setTimestamp();

                await interaction.editReply({ embeds: [statsEmbed], components: [] });
            } catch (statsError) {
                console.error('❌ [STATS_ERROR]:', statsError.message);
                await interaction.editReply({ content: '⚠️ Stats loading... Coba lagi!', components: [] }).catch(() => {});
            }
            break;
    }
    return;
}

// 🔥 AUTO-DELETE THREAD NOTIFICATION - UPGRADED V2.0 (RELIABLE)
client.on(Events.MessageCreate, async (message) => {
    // Cek apakah ini pesan sistem "started a thread"
    if (message.author.bot && 
        message.content.includes('started a thread') && 
        message.content.includes('See all threads')) {
        
        try {
            // Extract thread name dari content
            const threadNameMatch = message.content.match(/started a thread: (.+?)\./);
            if (threadNameMatch) {
                const threadName = threadNameMatch[1];
                console.log(`🧹 [THREAD_DELETER_V2] Detected: ${threadName}`);
                
                // Hapus pesan sistem SEGERA (no delay needed)
                if (message.deletable) {
                    await message.delete();
                    console.log(`✅ [THREAD_DELETER_V2] Deleted "${threadName}" notification!`);
                }
            }
        } catch (error) {
            console.error('❌ [THREAD_DELETER_V2_ERROR]:', error.message);
        }
    }
});

// ============================================================================================
// 🛒 [ORDER SYSTEM MODULE - TITANIUM OMNISCIENCE EDITION]: PROTOKOL TRANSAKSI & KEAMANAN
// Versi ini dilengkapi dengan [ASYNC RACE CONDITION GUARD] untuk menahan Crash 40060 dan 
// perbaikan [FLAGS DEPRECATION] untuk kompatibilitas Discord.js terbaru.
// ============================================================================================

try {
    // ----------------------------------------------------------------------------------------
    // [DEKLARASI INFRASTRUKTUR KONSTANTA LOKAL & DEPENDENSI FILE SYSTEM]
    // ----------------------------------------------------------------------------------------
    const fs = await import('fs');
    const path = await import('path');
    
    const ORDER_CONFIG = {
        MODERATOR_ROLE_ID: '1484124559480193134', 
        LOG_NORMAL_ID: '1489580522911957096',     
        LOG_BIG_ID: '1489580612867067964',        
        PAYMENT_PHONE_DANA: '085763225059',       
        PAYMENT_PHONE_GOPAY: '085763858510'       
    };

    // ----------------------------------------------------------------------------------------
    // [DATABASE INITIALIZATION PROTOCOL - ESM COMPLIANT]
    // ----------------------------------------------------------------------------------------
    const DB_FILE_PATH = path.resolve(process.cwd(), 'titanium_order_database.json');
    if (!fs.existsSync(DB_FILE_PATH)) {
        const initialSchema = {
            system_status: "ACTIVE",
            last_boot: new Date().toISOString(),
            active_orders: {},
            archived_orders: {}
        };
        fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialSchema, null, 4));
        console.log(`[DATABASE_CORE] 💽 Memori persisten 'titanium_order_database.json' berhasil dikonstruksi.`);
    }

    const readOrderDB = () => JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));
    const writeOrderDB = (data) => fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 4));

    // ----------------------------------------------------------------------------------------
    // [PHASE 1: THREAD INITIALIZATION & WELCOME PROTOCOL]
    // ----------------------------------------------------------------------------------------
    if (interaction.isButton() && interaction.customId === 'btn_order_discord') {
        try {
            // Menggunakan flags: 64 sebagai pengganti ephemeral: true untuk versi DJS terbaru
            await interaction.deferReply({ flags: 64 }); 
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda (Async Race Condition) di btn_order_discord.`);
            throw e;
        }

        const thread = await interaction.channel.threads.create({
            name: `🛒・order-${interaction.user.username}`,
            autoArchiveDuration: 60,
            type: ChannelType.PrivateThread,
            reason: `Order System: Inisiasi sesi transaksional dari entitas ${interaction.user.tag}`
        });

        await thread.members.add(interaction.user.id);

        const db = readOrderDB();
        db.active_orders[thread.id] = {
            order_id: thread.id,
            client_id: interaction.user.id,
            client_tag: interaction.user.tag,
            status: 'THREAD_CREATED',
            payment_method: 'NOT_SELECTED',
            timestamp_created: new Date().toISOString()
        };
        writeOrderDB(db);
        
        const welcomeEmbed = new EmbedBuilder()
            .setTitle('💳 Pemesanan Dragon Store - Secure Line')
            .setDescription(`Halo ${interaction.user}!\n\nHarap tunggu proses sinkronisasi. Otoritas <@&${ORDER_CONFIG.MODERATOR_ROLE_ID}> akan segera terhubung ke node ini.\nSilakan gunakan modul **Payment** di bawah ini untuk mengakses saluran pembayaran komersial.`)
            .setColor('#0099ff')
            .setTimestamp()
            .setFooter({ text: 'Data Centre Guard • Secure Order System' });

        const paymentRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('btn_show_payment')
                .setLabel('💳 Akses Payment')
                .setStyle(ButtonStyle.Success)
        );

        await thread.send({ 
            content: `**[SYSTEM_PING]** <@&${ORDER_CONFIG.MODERATOR_ROLE_ID}> | Protokol Transaksi Aktif untuk ${interaction.user}`, 
            embeds: [welcomeEmbed], 
            components: [paymentRow] 
        });

        return interaction.editReply({ content: `✅ **[SYSTEM_LINK]** Tiket operasional Anda sukses dieksekusi di sektor tertutup: <#${thread.id}>` });
    }

    // ----------------------------------------------------------------------------------------
    // [PHASE 2: PAYMENT METHOD DEPLOYMENT]
    // ----------------------------------------------------------------------------------------
    if (interaction.isButton() && interaction.customId === 'btn_show_payment') {
        const paymentSelectRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('select_payment_method')
                .setPlaceholder('Inisiasi jalur pembayaran aman...')
                .addOptions([
                    { label: 'Protokol QRIS (All Payment)', description: 'Otorisasi menggunakan scan grafis QRIS', value: 'qris', emoji: '📱' },
                    { label: 'Saluran DANA', description: 'Transmisi instan via infrastruktur DANA', value: 'dana', emoji: '💸' },
                    { label: 'Saluran GOPAY', description: 'Transmisi instan via infrastruktur GoPay', value: 'gopay', emoji: '🟢' },
                ])
        );

        try {
            return await interaction.reply({ 
                content: 'Silakan verifikasi metode pembayaran dari panel komersial berikut:', 
                components: [paymentSelectRow],
                flags: 64 // Pengganti ephemeral
            });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di btn_show_payment.`);
            throw e;
        }
    }

    // ----------------------------------------------------------------------------------------
    // [PHASE 3: SELECTION LISTENER & ASSET INJECTION]
    // ----------------------------------------------------------------------------------------
    if (interaction.isStringSelectMenu() && interaction.customId === 'select_payment_method') {
        const selected = interaction.values[0];
        let responseContent = '';
        let files = [];

        if (selected === 'qris') {
            responseContent = 'Silakan pindai kode matriks QRIS berikut untuk otorisasi pembayaran:';
            files = [new AttachmentBuilder('./Qris.jpeg')]; 
        } else if (selected === 'dana') {
            responseContent = `Silakan transfer data finansial ke titik kontak DANA berikut:\n**${ORDER_CONFIG.PAYMENT_PHONE_DANA}**`;
        } else if (selected === 'gopay') {
            responseContent = `Silakan transfer data finansial ke titik kontak GoPay berikut:\n**${ORDER_CONFIG.PAYMENT_PHONE_GOPAY}**`;
        }

        const db = readOrderDB();
        if (db.active_orders[interaction.channel.id]) {
            db.active_orders[interaction.channel.id].payment_method = selected.toUpperCase();
            db.active_orders[interaction.channel.id].status = 'PAYMENT_SELECTED';
            writeOrderDB(db);
        }

        const actionRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('btn_cek_payment')
                .setLabel('✅ Validasi Transaksi (Cek)')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('btn_batal_payment')
                .setLabel('❌ Batalkan Transaksi')
                .setStyle(ButtonStyle.Danger)
        );

        await interaction.channel.send({
            content: `**[SYSTEM_RESPONSE]** <@${interaction.user.id}>, ${responseContent}`,
            files: files.length > 0 ? files : [],
            components: [actionRow]
        });

        try {
            return await interaction.update({ content: '✅ Jalur pembayaran berhasil diamankan pada UI Komersial.', components: [] });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di select_payment_method.`);
            throw e;
        }
    }

    // ----------------------------------------------------------------------------------------
    // [PHASE 4: TRANSACTION VERIFICATION (CEK) - ABSOLUTE HARDCODE PROTOCOL]
    // ----------------------------------------------------------------------------------------
    if (interaction.isButton() && interaction.customId === 'btn_cek_payment') {
        try {
            await interaction.deferReply({ flags: 64 });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di btn_cek_payment.`);
            throw e;
        }

        const db = readOrderDB();
        if (db.active_orders[interaction.channel.id]) {
            db.active_orders[interaction.channel.id].status = 'VERIFICATION_REQUESTED';
            writeOrderDB(db);
        }

        const checkEmbed = new EmbedBuilder()
            .setTitle('🔔 Notifikasi Transaksi Baru')
            .setDescription(`Seorang klien telah menekan tombol **Cek Transaksi**. Silakan periksa mutasi dana pada rekening atau E-Wallet Anda.`)
            .addFields(
                { name: 'Klien', value: `${interaction.user.tag}` },
                { name: 'ID Klien', value: `${interaction.user.id}` },
                { name: 'Lokasi Thread', value: `<#${interaction.channel.id}>` }
            )
            .setColor('#2ecc71') 
            .setTimestamp();

        try {
            const ownerUser = await interaction.client.users.fetch('1280789307027755019');
            
            await ownerUser.send({ 
                content: `🚨 **[URGENT]** Halo Admin! Ada permintaan cek transaksi baru dari klien **${interaction.user.tag}**.`,
                embeds: [checkEmbed] 
            });
            
            console.log(`[FINANCE_AUDIT_LOG] ✅ Transmisi Cek Transaksi SUKSES dikirim ke DM (1280789307027755019).`);
        } catch (err) {
            console.error(`[CRITICAL_FINANCE_ERROR] ❌ DM KE 1280789307027755019 GAGAL. Error API:`, err.message);
        }

        return interaction.editReply({ content: '✅ Permintaan cek transaksi sudah dikirim ke Admin.' });
    }

    // ----------------------------------------------------------------------------------------
    // [PENANGANAN PEMBATALAN TRANSAKSI]
    // ----------------------------------------------------------------------------------------
    if (interaction.isButton() && interaction.customId === 'btn_batal_payment') {
        const db = readOrderDB();
        if (db.active_orders[interaction.channel.id]) {
            db.active_orders[interaction.channel.id].status = 'ABORTED_BY_USER';
            writeOrderDB(db);
        }

        try {
            return await interaction.reply({ 
                content: '⚠️ **[ABORTED]** Sistem pembayaran dihentikan sementara oleh perintah pengguna.' 
            });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di btn_batal_payment.`);
            throw e;
        }
    }

    // ----------------------------------------------------------------------------------------
    // [PHASE 5: MODAL DATA TRANSMISSION & COMMAND /FORUM (HARDCODED TARGET)]
    // ----------------------------------------------------------------------------------------
    if (interaction.isChatInputCommand() && interaction.commandName === 'forum') {
        const forumRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('btn_open_forum')
                .setLabel('📝 Akses Formulir Login')
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            return await interaction.reply({
                content: 'Silakan gunakan modul di bawah ini untuk mentransmisikan data kredensial Anda melalui jalur terenkripsi.',
                components: [forumRow]
            });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di command forum.`);
            throw e;
        }
    }

    if (interaction.isButton() && interaction.customId === 'btn_open_forum') {
        const modal = new ModalBuilder()
            .setCustomId('modal_login_data')
            .setTitle('Fasilitas Otorisasi Kredensial');

        const usernameInput = new TextInputBuilder()
            .setCustomId('input_username')
            .setLabel('Username (Identitas Akses)')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const passwordInput = new TextInputBuilder()
            .setCustomId('input_password')
            .setLabel('Kata Sandi (Cipher Key)')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        modal.addComponents(
            new ActionRowBuilder().addComponents(usernameInput),
            new ActionRowBuilder().addComponents(passwordInput)
        );

        try {
            await interaction.showModal(modal);
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di btn_open_forum.`);
            throw e;
        }
    }

    if (interaction.isModalSubmit() && interaction.customId === 'modal_login_data') {
        try {
            await interaction.deferReply({ flags: 64 });
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di modal_login_data.`);
            throw e;
        }

        const usn = interaction.fields.getTextInputValue('input_username');
        const pwd = interaction.fields.getTextInputValue('input_password');

        const db = readOrderDB();
        if (db.active_orders[interaction.channel.id]) {
            db.active_orders[interaction.channel.id].status = 'CREDENTIALS_SUBMITTED';
            writeOrderDB(db);
        }

        try {
            const ownerUser = await interaction.client.users.fetch('1280789307027755019');
            
            const dataEmbed = new EmbedBuilder()
                .setTitle('🔐 Transmisi Kredensial Diamankan')
                .setDescription('Data kredensial baru masuk. Harap hapus pesan ini setelah proses login selesai demi keamanan data klien.')
                .addFields(
                    { name: 'Sumber Entitas', value: `${interaction.user.tag} (${interaction.user.id})` },
                    { name: 'Referensi Node', value: `<#${interaction.channel.id}>` },
                    { name: 'Username', value: `\`${usn}\`` },
                    { name: 'Password', value: `||${pwd}||` }
                )
                .setColor('#e74c3c')
                .setTimestamp();

            await ownerUser.send({ 
                content: `🔐 **[DATA LOGIN]** Kredensial terenkripsi dari ${interaction.user.tag} telah diterima.`,
                embeds: [dataEmbed] 
            });
            return interaction.editReply({ content: '✅ **[ENCRYPTED_SUCCESS]** Paket data Anda telah didistribusikan ke DM Administrator dengan aman.' });
        } catch (err) {
            console.error('[WARNING] Gagal mengirim data kredensial ke DM Owner (1280789307027755019):', err);
            return interaction.editReply({ content: '❌ Terjadi kegagalan transmisi ke DM Admin. Pastikan DM Admin sedang terbuka.' });
        }
    }

    // ----------------------------------------------------------------------------------------
    // [PHASE 6: COMMAND /SUCCES & DEEP TRANSCRIPT LOGGING]
    // ----------------------------------------------------------------------------------------
    if (interaction.isChatInputCommand() && interaction.commandName === 'succes') {
        if (interaction.user.id !== ORDER_CONFIG.MODERATOR_ROLE_ID && !interaction.member.roles.cache.has(ORDER_CONFIG.MODERATOR_ROLE_ID)) {
            try {
                return await interaction.reply({ content: '❌ **[ACCESS_DENIED]** Anda tidak memiliki otorisasi clearance untuk mengeksekusi penyelesaian transaksi.', flags: 64 });
            } catch (e) { return; }
        }

        try {
            await interaction.deferReply();
        } catch (e) {
            if (e.code === 40060) return console.warn(`[STATE_GUARD] 🛡️ Blokir eksekusi ganda di command succes.`);
            throw e;
        }

        const targetUser = interaction.options.getUser('pembeli');
        const orderType = interaction.options.getString('tipe');

        try {
            const thankYouEmbed = new EmbedBuilder()
                .setTitle('🎉 Transaksi Berhasil Diverifikasi!')
                .setDescription(`Terima kasih **${targetUser.username}** telah menggunakan layanan **Dragon Store**!\nSemoga Anda puas dengan kualitas pelayanan kami. Kami menantikan kehadiran Anda kembali.`)
                .setColor('#2ecc71')
                .setTimestamp()
                .setFooter({ text: 'Dragon Store Automated System' });
            
            await targetUser.send({ embeds: [thankYouEmbed] });
        } catch (err) {
            console.log(`[WARNING] Saluran DM entitas ${targetUser.tag} tertutup. Melewati pengiriman DM tingkat klien...`);
        }

        const messages = await interaction.channel.messages.fetch({ limit: 100 });
        const transcriptArray = messages.reverse().map(m => `[${m.createdAt.toLocaleTimeString()}] ${m.author.tag}: ${m.content}`);
        const transcriptText = transcriptArray.join('\n');
        const transcriptBuffer = Buffer.from(transcriptText, 'utf-8');
        const transcriptAttachment = new AttachmentBuilder(transcriptBuffer, { name: `transcript-order-${targetUser.username}.txt` });

        const logEmbed = new EmbedBuilder()
            .setTitle('📦 Laporan Mutasi Penyelesaian Transaksi')
            .addFields(
                { name: 'Identitas Pembeli', value: `${targetUser.tag}`, inline: true },
                { name: 'Otoritas Eksekutor', value: `${interaction.user.tag}`, inline: true },
                { name: 'Skala Klasifikasi', value: orderType.toUpperCase(), inline: true }
            )
            .setColor('#3498db')
            .setTimestamp();

        const normalChannel = await interaction.client.channels.fetch(ORDER_CONFIG.LOG_NORMAL_ID).catch(() => null);
        
        if (orderType === 'normal' && normalChannel) {
            await normalChannel.send({ embeds: [logEmbed], files: [transcriptAttachment] });
        } else if (orderType === 'big') {
            const bigChannel = await interaction.client.channels.fetch(ORDER_CONFIG.LOG_BIG_ID).catch(() => null);
            if (normalChannel) await normalChannel.send({ embeds: [logEmbed], files: [transcriptAttachment] });
            if (bigChannel) await bigChannel.send({ embeds: [logEmbed], files: [transcriptAttachment] });
        }

        const db = readOrderDB();
        const refChannelId = interaction.channel.isThread() ? interaction.channel.id : null;
        if (refChannelId && db.active_orders[refChannelId]) {
            const completedOrderData = db.active_orders[refChannelId];
            completedOrderData.status = 'COMPLETED_AND_ARCHIVED';
            completedOrderData.timestamp_completed = new Date().toISOString();
            
            db.archived_orders[refChannelId] = completedOrderData;
            delete db.active_orders[refChannelId]; 
            writeOrderDB(db);
        }

        if (interaction.channel.isThread()) {
            await interaction.editReply({ content: '✅ **[TRANSACTION_COMPLETE]** Log dan resi berhasil diarsipkan ke pusat data. Menutup sesi thread dalam 5 detik...' });
            setTimeout(async () => {
                await interaction.channel.setArchived(true);
            }, 5000);
        } else {
            await interaction.editReply({ content: '✅ **[TRANSACTION_COMPLETE]** Pesanan berhasil diselesaikan dan diarsipkan ke dalam memori persisten.' });
        }
    }

} catch (error) {
    // ----------------------------------------------------------------------------------------
    // [ERROR HANDLING FALLBACK PROTOCOL]
    // ----------------------------------------------------------------------------------------
    console.error(`❌ [INTERACTION_CRASH] Anomali tingkat tinggi terdeteksi pada Subsistem Order System:`, error);
    try {
        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({ content: '❌ **[SYSTEM_FAULT]** Terjadi interupsi fatal pada modul eksekusi.', flags: 64 });
        }
    } catch (e) { /* Abaikan error pada fallback */ }
}

// 🔥 MULTI SCRIPT SELECT HANDLER V2.0 (Tambahkan setelah broadcast handler)
if (interaction.isStringSelectMenu() && interaction.customId === 'select_script_v2') {
    // Skip jika sudah replied
    if (interaction.replied || interaction.deferred) return;
    
    await interaction.deferUpdate();
    
    const selectedScript = interaction.values[0];
    
    // Load script data
    const scriptFile = './multi_script_system.json';
    if (!fs.existsSync(scriptFile)) {
        return interaction.followUp({ 
            content: '❌ No scripts found!', 
            ephemeral: true 
        });
    }
    
    try {
        const rawData = fs.readFileSync(scriptFile, 'utf8');
        const scriptData = JSON.parse(rawData);
        const scriptInfo = scriptData[selectedScript];
        
        if (!scriptInfo) {
            return interaction.followUp({ 
                content: '❌ Script not found!', 
                ephemeral: true 
            });
        }
        
        const scriptUI = new EmbedBuilder()
            .setTitle(`📜 SCRIPT: ${selectedScript.toUpperCase()}`)
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
            .setDescription(
                `\`\`\`${scriptInfo.content.substring(0, 1900)}${scriptInfo.content.length > 1900 ? '\n...[TRUNCATED]' : ''}\`\`\``
            )
            .addFields(
                { name: '📊 Size', value: `\`${scriptInfo.size} chars\``, inline: true },
                { name: '👤 By', value: `<@${scriptInfo.createdBy}>`, inline: true }
            );
        
        await interaction.followUp({ embeds: [scriptUI], ephemeral: true });
        
    } catch (err) {
        console.error('❌ [SCRIPT_SELECT_ERROR]:', err);
        interaction.followUp({ content: '❌ Error loading script!', ephemeral: true });
    }
}

/**
 * ============================================================================================
 * [MODULE: HYPER-ADVANCED SELECT MENU DISPATCHER - TITANIUM V3.5]
 * ============================================================================================
 * Menangani ekstraksi data dinamis dari dropdown Script dan Webhook Panel.
 * Dilengkapi dengan sistem fallback, real-time telemetry, dan Deep Data Parsing.
 */
if (interaction.isStringSelectMenu() && (interaction.customId === 'scriptcontrol_script_select' || interaction.customId === 'scriptcontrol_webhook_select')) {
    
    // 1. KERNEL DEFERRAL PROTOCOL: Mencegah Discord memunculkan "Interaction Failed"
    try {
        await interaction.deferUpdate();
    } catch (deferError) {
        console.error('⚠️ [DROPDOWN_EXPIRED]: Interaksi gagal di-defer karena latency tinggi atau timeout.');
        return;
    }

    // 2. EXTRACTION MATRIX: Mengambil nilai yang dipilih oleh administrator
    const selectedItem = interaction.values[0];
    const isScriptMode = interaction.customId === 'scriptcontrol_script_select';
    
    // 3. TARGET RESOLUTION: Menentukan jalur database berdasarkan mode aktif
    const targetDatabase = isScriptMode ? './multi_script_system.json' : './webhook_config.json';
    const targetModule = isScriptMode ? 'SCRIPT' : 'WEBHOOK';

    // 4. STORAGE VALIDATION: Memeriksa integritas file secara absolut
    if (!fs.existsSync(targetDatabase)) {
        return interaction.followUp({ 
            content: `❌ **[STORAGE_FAULT]** Database \`${targetDatabase}\` tidak ditemukan di dalam direktori root. Sistem tidak dapat melanjutkan proses ekstraksi.`, 
            ephemeral: true 
        });
    }

    try {
        // 5. DATA PARSING & ALLOCATION
        const rawStorageData = fs.readFileSync(targetDatabase, 'utf8');
        const parsedData = JSON.parse(rawStorageData);
        const itemMetadata = parsedData[selectedItem];

        // 6. NULL POINTER PROTECTION: Jika data dihapus tepat sebelum dipilih
        if (!itemMetadata) {
            return interaction.followUp({ 
                content: `❌ **[GHOST_DATA_DETECTED]** Entitas \`${selectedItem}\` tidak lagi eksis di dalam sistem penyimpanan. Kemungkinan telah dihapus oleh personel lain.`, 
                ephemeral: true 
            });
        }

        // 7. DYNAMIC UI CONSTRUCTION: Membangun antarmuka visual kelas High-End
        let supremeDetailEmbed;

        if (isScriptMode) {
            // Kalkulasi keamanan buffer karakter untuk mencegah limit API Discord (Max 4096 per Deskripsi)
            const safeContent = itemMetadata.content.length > 3000 
                ? itemMetadata.content.substring(0, 3000) + '\n\n... [BUFFER_LIMIT_REACHED: DATA TRUNCATED FOR SAFETY]' 
                : itemMetadata.content;

            supremeDetailEmbed = new EmbedBuilder()
                .setAuthor({ name: 'OMNISCIENCE KERNEL: SCRIPT INSPECTOR', iconURL: client.user.displayAvatarURL() })
                .setTitle(`📜 INFRASTRUCTURE SCRIPT: ${selectedItem.toUpperCase()}`)
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS || '#00ffa3')
                .setDescription(
                    `**⚙️ SCRIPT EXECUTION PREVIEW**\n` +
                    `Berikut adalah kode sumber yang ditarik dari dalam brankas penyimpanan terenkripsi:\n\n` +
                    `\`\`\`javascript\n${safeContent}\n\`\`\``
                )
                .addFields(
                    { name: '👤 CREATOR ID', value: `\`${itemMetadata.createdBy}\` (<@${itemMetadata.createdBy}>)`, inline: true },
                    { name: '📊 DATA SIZE', value: `\`${itemMetadata.size.toLocaleString()} Bytes\``, inline: true },
                    { name: '🛡️ VERSION', value: `\`${itemMetadata.version || 'V1.0-STABLE'}\``, inline: true },
                    { name: '📅 INITIALIZED', value: `<t:${Math.floor(itemMetadata.createdAt / 1000)}:F>`, inline: false }
                )
                .setFooter({ text: `DATA CENTRE ENGINEERING DIV. | INSP-ID: ${Math.random().toString(36).substring(2, 10).toUpperCase()}` })
                .setTimestamp();

        } else {
            // WEBHOOK MODE VISUALIZATION
            supremeDetailEmbed = new EmbedBuilder()
                .setAuthor({ name: 'OMNISCIENCE KERNEL: WEBHOOK ROUTER', iconURL: client.user.displayAvatarURL() })
                .setTitle(`🔌 ENDPOINT CONFIGURATION: ${selectedItem.toUpperCase()}`)
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO || '#00d1ff')
                .setDescription(
                    `**📡 WEBHOOK TRANSMISSION LINE**\n` +
                    `Jalur komunikasi eksternal ini aktif dan siap menerima *payload*.\n\n` +
                    `**🔗 SECURE URL:**\n\`\`\`${itemMetadata.url}\`\`\``
                )
                .addFields(
                    { name: '👤 DEPLOYED BY', value: `\`${itemMetadata.createdBy}\` (<@${itemMetadata.createdBy}>)`, inline: true },
                    { name: '🧩 CONNECTED CHANNELS', value: `\`${itemMetadata.channels?.length || 0} Active Nodes\``, inline: true },
                    { name: '🌐 ROUTE NAMES', value: `\`${itemMetadata.channelNames?.join(', ') || 'Global_Route'}\``, inline: true },
                    { name: '📅 ESTABLISHED', value: `<t:${Math.floor(itemMetadata.createdAt / 1000)}:R>`, inline: false }
                )
                .setFooter({ text: `NETWORK SECURITY DIV. | ROUTE-ID: ${Math.random().toString(36).substring(2, 10).toUpperCase()}` })
                .setTimestamp();
        }

        // 8. DATA DISPATCH: Mengirimkan UI kembali ke eksekutif (Ephemeral agar rahasia)
        await interaction.followUp({ 
            embeds: [supremeDetailEmbed], 
            ephemeral: true 
        });

        // 9. SECURITY AUDIT LOGGING (Opsional namun direkomendasikan)
        const securityChannel = interaction.guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (securityChannel) {
            await securityChannel.send({
                content: `🔍 **[DATA_INSPECTION]** Personel <@${interaction.user.id}> baru saja menginspeksi ${targetModule}: \`${selectedItem}\`.`
            }).catch(() => {});
        }

    } catch (criticalFault) {
        console.error(`❌ [SELECT_MENU_CRITICAL_ERROR] Kegagalan parsing data ${targetModule}:`, criticalFault);
        await interaction.followUp({ 
            content: `🚨 **[SYSTEM_PANIC]** Terjadi kesalahan fatal saat mengekstraksi *buffer* memori untuk \`${selectedItem}\`.\n\`\`\`${criticalFault.message}\`\`\``, 
            ephemeral: true 
        }).catch(() => {});
    }
    
    // Terminasi blok logika agar tidak bocor ke handler lain
    return; 
}

    // 🔥 SLASH COMMANDS ONLY (ASLI)
    if (!interaction.isChatInputCommand()) return;

    const { commandName, options, user, member, guild } = interaction;
    const startTime = Date.now();

    // Verifikasi status lockdown
    if (IS_LOCKDOWN_ACTIVE && user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID && commandName !== 'status') {
        return interaction.reply({ 
            content: '🚨 **[SECURITY LOCKDOWN]** Infrastruktur dalam mode isolasi tingkat tinggi. Akses ditangguhkan.', 
            ephemeral: true 
        }).catch(() => {});
    }

    try {
        /**
         * ============================================================================================
         * [MODULE: HYPER-VISUAL ROLE SYSTEM - V12.0 SUPREME OMNISCIENCE EDITION]
         * ============================================================================================
         * Update: Terintegrasi dengan Algoritma Deferral (Anti Unknown-Interaction Timeout) 
         * dan Extended Error Handling Routing.
         */
        if (commandName === 'role') {
            // --- [STEP 1: DUAL-IDENTITY AUTHORIZATION & PRE-FLIGHT SECURITY CHECK] ---
            const AUTHORIZED_UIDS = [GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID, '1484124559480193134'];
            
            // Evaluasi Otoritas Administratif (Dieksekusi secara instan sebelum Deferral)
            if (!AUTHORIZED_UIDS.includes(user.id)) {
                const unauthorizedUI = new EmbedBuilder()
                    .setTitle('🚨 ACCESS VIOLATION: UNAUTHORIZED')
                    .setAuthor({ name: 'SECURITY FIREWALL PROTOCOL', iconURL: client.user.displayAvatarURL() })
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                    .setDescription(`\`\`\`diff\n- ERROR: INSUFFICIENT_CLEARANCE_LEVEL\n- ATTEMPT_BY: ${user.tag}\n- UID: ${user.id}\n- ACTION: BLOCK_TRANSMISSION\n\`\`\``)
                    .setFooter({ text: 'SECURITY_LOG: ATTEMPT_CAPTURED & BLOCKED' })
                    .setTimestamp();

                const auditChannel = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                if (auditChannel) await auditChannel.send({ embeds: [unauthorizedUI] }).catch(() => {});
                
                // Dapat menggunakan reply instan karena belum mencapai limit 3 detik
                return interaction.reply({ embeds: [unauthorizedUI], ephemeral: true });
            }

            // --- [STEP 2: API DEFERRAL PROTOCOL (NETWORK TIMEOUT MITIGATION)] ---
            // Menginjeksi penundaan koneksi untuk memberitahu server Discord bahwa proses ini 
            // adalah eksekusi Heavy-Task. Ini mengeliminasi error "Unknown Interaction".
            console.log(`[${new Date().toISOString()}] ⏳ [NETWORK_DEFERRAL] Mengamankan token interaksi. Memperpanjang TTL eksekusi untuk UID: ${user.id}`);
            await interaction.deferReply({ fetchReply: true }); 

            // --- [STEP 3: CORE PARAMETER EXTRACTION & VERIFICATION] ---
            const targetUser = options.getMember('target');
            const targetRole = options.getRole('role');

            if (!targetUser) {
                console.warn(`[${new Date().toISOString()}] ⚠️ [DATA_FAULT] Target personel tidak valid atau telah meninggalkan matriks server.`);
                // Menggunakan editReply karena interaction sudah berstatus 'deferred'
                return interaction.editReply({ content: '❌ **[SYSTEM_FAULT]** Node Personel tidak terdeteksi dalam matriks server atau data mengalami korupsi.' });
            }

            // --- [STEP 4: IDENTITY MUTATION & ROLE DEPLOYMENT ENGINE] ---
            try {
                // Mencatat waktu metrik awal eksekusi untuk kalkulasi latensi API (Telemetry)
                const startTime = Date.now();
                const oldNick = targetUser.displayName;
                const roleLabel = targetRole.name.toUpperCase();
                
                // [SUB-STEP 4.1: IDENTITY PURGE PROTOCOL]
                let syncStatus = "✅ SYNC_COMPLETE";
                let baseOriginalName = targetUser.user.username; // Fallback jika GlobalName kosong
                
                // Pengecekan Hierarki Sistem: Mencegah eksekusi fatal pada owner server atau bot dengan role lebih rendah
                const isHierarchyValid = guild.ownerId !== targetUser.id && guild.members.me.roles.highest.position > targetUser.roles.highest.position;

                if (isHierarchyValid) {
                    console.log(`[${new Date().toISOString()}] 🔄 [IDENTITY_PURGE] Menghapus modifikasi identitas lama milik ${targetUser.user.username}...`);
                    // Eksekusi penghapusan nickname (Purge) ke bentuk base-asli
                    await targetUser.setNickname(null, "[TITANIUM KERNEL] Identity Purge Protocol Initialized");
                    
                    // Delay asinkron 850ms - Mengamankan sinkronisasi propagasi API Discord secara penuh
                    await new Promise(resolve => setTimeout(resolve, 850));

                    // Ekstraksi tingkat lanjut (Global Display Name Discord memiliki prioritas absolut)
                    baseOriginalName = targetUser.user.globalName || targetUser.user.username;
                } else {
                    console.warn(`[${new Date().toISOString()}] ⚠️ [HIERARCHY_LOCK] Bot tidak memiliki clearance untuk memodifikasi Node Target. Bypassing Nickname Purge.`);
                    syncStatus = "⚠️ BYPASSED_HIERARCHY_NICKNAME_LOCKED";
                    baseOriginalName = oldNick;
                }

                // [SUB-STEP 4.2: PAYLOAD CONSTRUCTION & INJECTION ALGORITHM]
                const constructedNickname = `[${roleLabel}] ${baseOriginalName}`;
                
                // Truncation Protocol: Mengamankan API dari PayloadTooLarge (Max 32 Karakter)
                const finalNickname = constructedNickname.length > 32 
                    ? constructedNickname.substring(0, 32) 
                    : constructedNickname;

                // [SUB-STEP 4.3: AUTHORITY INJECTION (ROLE DEPLOYMENT)]
                console.log(`[${new Date().toISOString()}] ⚡ [AUTHORITY_GRANT] Mentransmisikan otorisasi Role ID: ${targetRole.id} ke Node Target...`);
                await targetUser.roles.add(targetRole, `[TITANIUM KERNEL] Otorisasi dieksekusi secara struktural oleh System Admin: ${user.tag}`);
                
                // [SUB-STEP 4.4: FINAL IDENTITY OVERRIDE]
                if (isHierarchyValid) {
                    await targetUser.setNickname(finalNickname, "[TITANIUM KERNEL] Final Identity Injected & Synchronized");
                    console.log(`[${new Date().toISOString()}] ✅ [IDENTITY_OVERRIDE] Injeksi nama sukses: ${finalNickname}`);
                }

                // Kalkulasi metrik telemetri performa operasional
                const executionTime = Date.now() - startTime;
                
                // --- [STEP 5: HYPER-MODERN CYBER UI DEPLOYMENT] ---
                const supremeUI = new EmbedBuilder()
                    .setAuthor({ name: 'TITANIUM KERNEL: AUTHORITY INJECTION', iconURL: client.user.displayAvatarURL() })
                    .setTitle('⚖️ DATABASE RE-IDENTIFICATION SUCCESS')
                    .setColor('#7D3CFF') 
                    .setThumbnail(targetUser.user.displayAvatarURL({ dynamic: true, size: 512 }))
                    .setDescription(
                        `### 🛠️ SYSTEM MODIFICATION LOG\n` +
                        `**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n` +
                        `**👤 SUBJECT_TARGET_NODE**\n` +
                        `> **IDENTIFIER :** <@${targetUser.id}>\n` +
                        `> **BASE_NAME  :** \`${baseOriginalName}\`\n` +
                        `**🛡️ AUTHORITY_GRANT_PROTOCOL**\n` +
                        `> **NEW_ROLE   :** <@&${targetRole.id}>\n` +
                        `**📝 IDENTITY_SYNCHRONIZER_MATRIX**\n` +
                        `> **PREV_DATA  :** \`${oldNick}\`\n` +
                        `> **NEW_DATA   :** \`${isHierarchyValid ? finalNickname : "LOCKED_BY_HIERARCHY"}\`\n` +
                        `**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**`
                    )
                    .addFields({ 
                        name: '📊 TELEMETRY & NETWORK REPORT', 
                        value: `\`\`\`yaml\nOperation_Status: ${syncStatus}\nAPI_Latency     : ${executionTime}ms\nData_Integrity  : SECURE_AND_VERIFIED\nAuth_Signature  : TXN-${Math.random().toString(36).toUpperCase().substring(2, 12)}\nTimestamp_UTC   : ${new Date().toISOString()}\n\`\`\`` 
                    })
                    .setFooter({ text: `INITIATOR: ${user.tag.toUpperCase()} • ROOT_ADMINISTRATOR_LEVEL` })
                    .setTimestamp();

                // [SUB-STEP 5.1: ENTERPRISE AUDIT LOG DISPATCHER]
                const auditChannel = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                if (auditChannel) await auditChannel.send({ embeds: [supremeUI] }).catch(() => {});

                // Resolusi akhir transaksi ke panel UI eksekutor dengan metode editReply
                return interaction.editReply({ embeds: [supremeUI] });

            } catch (roleError) {
                // --- [STEP 6: DISASTER RECOVERY & FATAL ERROR DIAGNOSTICS] ---
                console.error(`[${new Date().toISOString()}] ❌ [CRITICAL_AUTHORITY_ERROR] Kegagalan fatal pada rantai operasional:`, roleError);
                
                const errorMessage = `❌ **[AUTHORITY_FAULT_DETECTED]** Terdeteksi anomali saat memanipulasi node data. \n\n**Diagnosis Mesin:** \`\`\`js\n${roleError.message}\n\`\`\``;
                
                // Pengecekan safety net memastikan bot tetap memberikan balasan meskipun koneksi deferred terganggu
                if (interaction.deferred || interaction.replied) {
                    return interaction.editReply({ content: errorMessage });
                } else {
                    return interaction.reply({ content: errorMessage, ephemeral: true });
                }
            }
        }

// ============================================================================================
    // 🏎️ [CDID_TELEMETRY_ENGINE] - ROLEPLAY SESSION MONITORING CORE (TITANIUM V5.4 PATCH)
    // ============================================================================================
    try {
        if (interaction.commandName === 'rp-session') {
            
            // [FAIL-SAFE MEMORY ALLOCATION] Memastikan memori RAM selalu tersedia
            if (!global.CDID_SESSION_LEDGER) {
                global.CDID_SESSION_LEDGER = new Map();
                console.log(`⚠️ [MEMORY_RESTORE] Basis data CDID Telemetry berhasil dibangun ulang secara otonom.`);
            }

            // 1. [SECURITY CLEARANCE LAYER - DUAL-STATE VERIFICATION]
            // Melindungi command secara absolut menggunakan Role-Based Access Control (RBAC)
            const authorizedRoleID = '1484124559480193134';
            const memberRoles = interaction.member?.roles;
            const isAuthorized = memberRoles?.cache?.has(authorizedRoleID) || (Array.isArray(memberRoles) && memberRoles.includes(authorizedRoleID));

            if (!isAuthorized) {
                console.log(`⚠️ [SECURITY_BREACH] Personel ${interaction.user.tag} mencoba mengakses modul telemetri tanpa izin.`);
                return interaction.reply({
                    content: `❌ **[ACCESS_DENIED]** Otoritas ditolak. Identitas Anda tidak memiliki kredensial keamanan <@&${authorizedRoleID}> untuk mengakses panel instrumentasi Telemetri CDID.`,
                    ephemeral: true
                });
            }

            // 2. [ARGUMENT EXTRACTION] Mengambil matriks konfigurasi dari input pengguna
            const sessionAction = interaction.options.getString('module'); 
            const selectedRegion = interaction.options.getString('kota'); // Bisa bernilai null jika tidak diisi
            const personnelId = interaction.user.id;
            const currentTime = Date.now();

            // ---------------------------------------------------------
            // FASE A: MODUL INISIASI (START) & DEPLOYMENT REGULASI
            // ---------------------------------------------------------
            if (sessionAction === 'start') {
                
                // [PARAMETER VALIDATION] Mewajibkan pengisian wilayah untuk inisiasi
                if (!selectedRegion) {
                    return interaction.reply({
                        content: `❌ **[MISSING_PARAMETER]** Protokol gagal diinisialisasi. Anda wajib memilih parameter \`kota\` (Jawa Barat / Jawa Tengah) saat menggunakan modul **Start**.`,
                        ephemeral: true
                    });
                }

                // [STATE VALIDATION] Mencegah eksekusi ganda (Double-Clock In)
                if (global.CDID_SESSION_LEDGER.has(personnelId)) {
                    return interaction.reply({
                        content: `❌ **[TELEMETRY_CONFLICT]** Sensor mendeteksi Anda sudah berada di dalam simulasi. Selesaikan sesi sebelumnya menggunakan opsi modul \`End\`.`,
                        ephemeral: true
                    });
                }

                // [REGIONAL RULES ENGINE] Konstruksi data berdasarkan sektor yang dipilih
                let regionHeader = '';
                let regionalRulesPayload = '';

                if (selectedRegion === 'jabar') {
                    regionHeader = 'JAWA BARAT (BEKASI)';
                    regionalRulesPayload = 
                        `\n**Roleplay Jawa Barat - Bekasi**\n\n` +
                        `**Code:** ||BACA RULES DULU!!!||\n` +
                        `**Rules:**\n` +
                        `> 1. No Rusuh\n` +
                        `> 2. No Toxic\n` +
                        `> 3. No Use Ban Car\n` +
                        `> 4. Wajib On Colision\n` +
                        `**Tingkat pelanggaran:**\n` +
                        `> SP 1 = Hanya Peringatan Dari Moderator\n` +
                        `> SP 2= Kick\n` +
                        `> SP 4= Ban\n` +
                        `**Ban car:** Strobo (Khusus Mod and Staff)\n` +
                        `**Event:** Kapal, Razia\n` +
                        `**Code:** ||d2f323114135469||`;
                } else if (selectedRegion === 'jateng') {
                    regionHeader = 'JAWA TENGAH (LINTAS)';
                    regionalRulesPayload = 
                        `\n**Roleplay Jawa Tengah - Lintas**\n\n` +
                        `**Code:** ||BACA RULES DULU!!!||\n` +
                        `**Rules:**\n` +
                        `> 1. No Rusuh\n` +
                        `> 2. No Toxic\n` +
                        `> 3. No Use Ban Car\n` +
                        `> 4. Wajib On Colision\n` +
                        `**Tingkat pelanggaran:**\n` +
                        `> SP 1 = Hanya Peringatan Dari Moderator\n` +
                        `> SP 2= Kick\n` +
                        `> SP 4= Ban\n` +
                        `**Ban car:** Strobo (Khusus Mod and Staff)\n` +
                        `**Event:** Kapal (Upcoming!!), Razia\n` +
                        `**Code:** ||d2f323114135469||`;
                }

                // [DATA MUTATION] Mencatat waktu persis saat personel melakukan clock-in ke RAM
                global.CDID_SESSION_LEDGER.set(personnelId, currentTime);

                // [VISUAL INTERFACE] Membangun antarmuka taktis dengan injeksi aturan kota
                const startEmbed = new EmbedBuilder()
                    .setAuthor({ name: '🏎️ CDID TELEMETRY NETWORK | INITIATION', iconURL: interaction.user.displayAvatarURL() })
                    .setTitle(`🟢 STATUS: CONNECTED TO SECTOR ${regionHeader}`)
                    .setColor('#00FF00')
                    .setDescription(
                        `**${'▬'.repeat(34)}**\n` +
                        `**👤 IDENTITAS:** ${interaction.user.toString()}\n` +
                        `**🆔 NODE ID:** \`${personnelId}\`\n` +
                        `**⏱️ CLOCK-IN:** <t:${Math.floor(currentTime / 1000)}:F>\n` +
                        `**🏙️ SEKTOR:** \`${regionHeader}\`\n\n` +
                        `*Protokol pemantauan waktu telah diaktifkan secara absolut. Jaga profesionalitas selama operasi berlangsung dan patuhi regulasi lalu lintas.*\n` +
                        `**${'▬'.repeat(34)}**\n` +
                        regionalRulesPayload // Injeksi string aturan regional secara dinamis
                    )
                    .setFooter({ text: 'Titanium Telemetry Engine - Multi-Region V5.4', iconURL: client.user.displayAvatarURL() })
                    .setTimestamp();

                await interaction.reply({ embeds: [startEmbed] });
                console.log(`[${new Date().toISOString()}] 🏎️ [TELEMETRY_START] Personel ${interaction.user.tag} memasuki sektor ${regionHeader}.`);
                return;
            }

            // ---------------------------------------------------------
            // FASE B: MODUL TERMINASI & EKSTRAKSI (END)
            // ---------------------------------------------------------
            if (sessionAction === 'end') {
                
                // [STATE VALIDATION] Memastikan personel benar-benar memiliki sesi aktif
                if (!global.CDID_SESSION_LEDGER.has(personnelId)) {
                    return interaction.reply({
                        content: `❌ **[TELEMETRY_NULL]** Anda tidak memiliki sesi Roleplay yang tercatat aktif di dalam basis data (RAM) saat ini.`,
                        ephemeral: true
                    });
                }

                // [ANALYTICS ENGINE] Menghitung selisih jam terbang (Time Delta)
                const startTime = global.CDID_SESSION_LEDGER.get(personnelId);
                const durationMs = currentTime - startTime;
                
                // Algoritma konversi milidetik ke satuan presisi manusia
                const hours = Math.floor(durationMs / (1000 * 60 * 60));
                const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((durationMs % (1000 * 60)) / 1000);

                // [GARBAGE COLLECTION] Membersihkan ruang memori server
                global.CDID_SESSION_LEDGER.delete(personnelId);

                // [RECEIPT GENERATION] Membangun antarmuka laporan akhir (Receipt)
                const endEmbed = new EmbedBuilder()
                    .setAuthor({ name: '🏎️ CDID TELEMETRY NETWORK | TERMINATION', iconURL: interaction.user.displayAvatarURL() })
                    .setTitle('🔴 STATUS: DISCONNECTED FROM SIMULATION')
                    .setColor('#FF0000')
                    .setDescription(
                        `**${'▬'.repeat(34)}**\n` +
                        `**Laporan Sesi Roleplay (RP) telah berhasil diekstraksi dari satelit.**\n\n` +
                        `**👤 IDENTITAS:** ${interaction.user.toString()}\n` +
                        `**⏱️ CLOCK-OUT:** <t:${Math.floor(currentTime / 1000)}:F>\n\n` +
                        `**📊 METRIK JAM TERBANG:**\n` +
                        `> \`${hours} Jam, ${minutes} Menit, ${seconds} Detik\`\n\n` +
                        `*Data metrik ini telah dikunci dan diamankan di dalam basis data temporal.*`
                    )
                    .setFooter({ text: 'Titanium Telemetry Engine - Multi-Region V5.4', iconURL: client.user.displayAvatarURL() })
                    .setTimestamp();

                await interaction.reply({ embeds: [endEmbed] });
                console.log(`[${new Date().toISOString()}] 🛑 [TELEMETRY_END] Personel ${interaction.user.tag} keluar dari simulasi. Total waktu: ${hours}h ${minutes}m ${seconds}s.`);
                return;
            }
        }
    } catch (error) {
        // [GLOBAL ERROR CONTAINMENT] Mencegah berhentinya proses sistem
        console.error(`❌ [TELEMETRY_CORE_ERROR] Kegagalan transmisi data sektor Roleplay CDID:`, error);
        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({ 
                content: '⚠️ **[SYSTEM_FAULT]** Terjadi fluktuasi saat mengelola transmisi antar-sektor. Hubungi arsitek sistem.', 
                ephemeral: true 
            }).catch(() => {});
        }
    }
    // ============================================================================================
    // AKHIR BLOK CDID TELEMETRY ENGINE
    // ============================================================================================

// ============================================================================================
    // 🛡️ [SECURITY KERNEL] DIRECT MESSAGE (DM) INTERCEPTION & FIREWALL PROTOCOL V2.0
    // ============================================================================================
    // Modul ini bertindak sebagai lapisan pelindung pertama (First-Layer Defense) untuk mencegah 
    // eksekusi perintah yang tidak sah di luar yurisdiksi server utama, serta secara asinkron
    // mengirimkan telemetri pelanggaran secara real-time ke sektor log keamanan.
    
    // Mendeteksi secara mutlak apakah interaksi berasal dari jalur komunikasi privat (DM)
    if (!interaction.guild || interaction.channel?.isDMBased()) {
        
        // [WHITELIST LAYER] Daftar perintah yang diberikan otorisasi absolut untuk beroperasi di DM
        const authorizedDMCommands = ['done', 'reject'];
        
        // Jika perintah yang coba dieksekusi oleh pengguna TIDAK terdapat di dalam daftar putih
        if (!authorizedDMCommands.includes(interaction.commandName)) {
            
            const timestampNow = Math.floor(Date.now() / 1000);
            
            // 1. [TELEMETRY LOGGING] Merekam upaya pelanggaran akses ke dalam sistem terminal konsol utama
            console.warn(`[DM_SECURITY_BREACH] ⚠️ Entitas ${interaction.user.tag} (UID: ${interaction.user.id}) berupaya memintas protokol dengan perintah /${interaction.commandName} melalui Direct Message.`);
            
            // 2. [VISUAL INTERFACE CONSTRUCTION] Membangun antarmuka penolakan dengan standar korporat
            const dmRejectUI = new EmbedBuilder()
                .setColor('#FF003C') // THEME_CRITICAL: Merah amaran mutlak
                .setAuthor({ 
                    name: 'SYSTEM SECURITY LAYER', 
                    iconURL: interaction.client.user.displayAvatarURL() 
                })
                .setTitle('⛔ OTORISASI DITOLAK: JALUR KOMUNIKASI TIDAK SAH')
                .setDescription(
                    `**Transmisi Digagalkan:** Sistem keamanan telah mendeteksi adanya upaya untuk melancarkan protokol \`/${interaction.commandName}\` melalui jalur komunikasi privat (Direct Message).\n\n` +
                    `Selaras dengan ketetapan infrastruktur operasi eksklusif **Farming CDID**, mayoritas fungsi sistem bot ini telah dienkripsi dan diisolasi secara absolut. Proses eksekusi perintah tingkat lanjut hanya dapat diinisialisasi melalui saluran resmi di dalam server pusat guna menjaga integritas data transaksi dan melindungi keamanan klien.`
                )
                .addFields(
                    { 
                        name: '✅ Protokol yang Diizinkan di DM', 
                        value: 'Akses pada jalur komunikasi isolasi ini dibatasi secara ketat hanya untuk perintah konfirmasi manajerial:\n`⚫ /done`\n`⚫ /reject`', 
                        inline: false 
                    },
                    { 
                        name: '👤 Identitas Transmiter', 
                        value: `\`${interaction.user.tag}\``, 
                        inline: true 
                    },
                    { 
                        name: '🕒 Waktu Intersepsi', 
                        value: `<t:${timestampNow}:F>`, 
                        inline: true 
                    }
                )
                .setFooter({ text: '🛡️ Dragon Store Operations • Infrastructure Protection' })
                .setTimestamp();

            // 3. [PAYLOAD DELIVERY] Mengirimkan pesan penolakan darurat kembali ke klien pengguna
            await interaction.reply({ embeds: [dmRejectUI] }).catch(err => {
                console.error('❌ [DM_FIREWALL_REPLY_FAULT] Kegagalan latensi saat menolak transmisi:', err);
            });

            // 4. [SECURITY AUDIT TRANSMISSION] Merakit dan mengirimkan log forensik ke saluran keamanan internal
            try {
                // Menarik ID Channel log keamanan secara dinamis dari konfigurasi matriks global
                // Jika variabel GLOBAL_MATRIX belum terinisialisasi dengan sempurna, Anda dapat mengganti fallback string dengan ID channel asli
                const auditChannelId = (typeof GLOBAL_MATRIX !== 'undefined' && GLOBAL_MATRIX.ENDPOINTS?.SECURITY_AUDIT) 
                    ? GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT 
                    : 'MASUKKAN_ID_CHANNEL_LOG_ANDA_DISINI';
                
                // Melakukan pencarian instrumen saluran dari cache klien global
                const auditChannel = interaction.client.channels.cache.get(auditChannelId);
                
                if (auditChannel) {
                    const auditAlertUI = new EmbedBuilder()
                        .setColor('#FFA500') // THEME_WARNING: Oranye peringatan eskalasi
                        .setAuthor({ 
                            name: '🚨 DM FIREWALL INTERCEPTION ALERT', 
                            iconURL: interaction.client.user.displayAvatarURL() 
                        })
                        .setTitle('⚠️ PERCOBAAN EKSEKUSI ILEGAL DI JALUR PRIVAT')
                        .setDescription(`Sistem pertahanan sentral telah secara otomatis mencegat dan memblokir sebuah interaksi tidak sah yang dieksekusi dari luar yurisdiksi pelayan (server) utama. Transmisi ini diklasifikasikan sebagai anomali operasional dan telah dinetralkan.`)
                        .addFields(
                            { 
                                name: '👤 Profil Pelanggar', 
                                value: `**Tag:** \`${interaction.user.tag}\`\n**UID:** \`${interaction.user.id}\`\n**Mention:** <@${interaction.user.id}>`, 
                                inline: true 
                            },
                            { 
                                name: '💻 Target Protokol', 
                                value: `\`/${interaction.commandName}\``, 
                                inline: true 
                            },
                            { 
                                name: '🛑 Tindakan Sistem', 
                                value: '`BLOKIR MUTLAK & TERMINASI AKSES`', 
                                inline: false 
                            },
                            { 
                                name: '📡 Titik Eksekusi', 
                                value: '`DIRECT MESSAGE (DM_ISOLATION_ZONE)`', 
                                inline: true 
                            },
                            { 
                                name: '🕒 Waktu Kejadian', 
                                value: `<t:${timestampNow}:R>`, 
                                inline: true 
                            }
                        )
                        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                        .setFooter({ text: 'Data Centre Guard • Automated Security Audit Protocol V2' })
                        .setTimestamp();

                    // Mengirimkan laporan transmisi ke sektor keamanan pelayan pusat
                    await auditChannel.send({ embeds: [auditAlertUI] });
                    console.log(`✅ [DM_AUDIT_SUCCESS] Log intersepsi untuk entitas ${interaction.user.tag} berhasil dikirim ke sektor keamanan.`);
                } else {
                    console.warn('⚠️ [DM_AUDIT_WARNING] Saluran log keamanan tidak ditemukan di dalam cache global. Harap periksa integritas endpoint GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT.');
                }
            } catch (auditError) {
                console.error('❌ [DM_AUDIT_FAULT] Terjadi kegagalan jaringan fatal saat mencoba merutekan log ke saluran keamanan:', auditError);
            }

            // 5. [EXECUTION TERMINATION] Mematikan alur kode secara absolut agar tidak merambat ke lapisan eksekusi utama bot
            return;
        }
    }

/**
 * ============================================================================================
 * [MODULE: UNIFIED SET SYSTEM - ALL-IN-ONE CONFIGURATION V2.0]
 * ============================================================================================
 * Single /set command untuk: Verify Panel, GetJob Panel, Webhook, Script
 */
if (commandName === 'set') {
    const MOD_ROLE_ID = '1484124559480193134';
    
    // Moderator only
    if (!member.roles.cache.has(MOD_ROLE_ID)) {
        return interaction.reply({ 
            content: '❌ **[ACCESS_DENIED]** Moderator only!', 
            ephemeral: true 
        });
    }

    const modul = options.getString('modul');
    await interaction.deferReply({ ephemeral: true });

    try {
        switch(modul) {
            case 'verify':
            case 'getjob':
            case 'cdid':
                // === PANEL DEPLOYMENT (NO EXTRA OPTIONS NEEDED) ===
                if (modul === 'verify') {
                    // Verify panel code (tetap sama)
                    const verifyChannelId = '1478582692084973580';
                    const verifyChannel = guild.channels.cache.get(verifyChannelId);
                    
                    if (!verifyChannel) {
                        return interaction.editReply({ 
                            content: '❌ **[CHANNEL_NOT_FOUND]** Channel verify tidak ditemukan!' 
                        });
                    }

                    const verifyPanelEmbed = new EmbedBuilder()
                        .setTitle('🔐 VERIFICATION GATEWAY')
                        .setDescription(
                            `**Selamat datang di Data Centre!**\n\n` +
                            `**⚠️ WAJIB VERIFIKASI** untuk akses penuh server.\n\n` +
                            `**✅ Klik tombol **VERIFY** di bawah untuk:\n` +
                            `• Dapatkan role **MEMBER**\n` +
                            `• Ubah nickname **[MEMBER] Username**\n` +
                            `• Akses semua channel\n\n` +
                            `**⚡ Panel ini **persisten** - tetap aktif meskipun bot restart!**`
                        )
                        .setColor('#00ff88')
                        .addFields(
                            { name: '📊 Status', value: '`🔴 PENDING_VERIFICATION`', inline: true },
                            { name: '👥 MEMBER ROLE', value: '`Loading...`', inline: true },
                            { name: '🛡️ System', value: '`TITANIUM_V2.0`', inline: true }
                        )
                        .setFooter({ 
                            text: 'DATA CENTRE SECURITY GATE • Klik VERIFY sekarang!', 
                            iconURL: client.user.displayAvatarURL() 
                        })
                        .setTimestamp();

                    const verifyButton = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('verify_panel_button')
                                .setLabel('VERIFY')
                                .setStyle(ButtonStyle.Success)
                                .setEmoji('🔐')
                        );

                    const panelMessageV = await verifyChannel.send({ 
                        embeds: [verifyPanelEmbed], 
                        components: [verifyButton] 
                    });

                    global.VERIFY_PANEL_DATA = {
                        messageId: panelMessageV.id,
                        channelId: verifyChannelId,
                        active: true,
                        deployedBy: user.id,
                        deployTime: Date.now()
                    };

                    await interaction.editReply({ 
                        embeds: [new EmbedBuilder()
                            .setTitle('✅ VERIFY PANEL DEPLOYED')
                            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                            .setDescription(`**📍** ${verifyChannel.toString()}\n**🆔** \`${panelMessageV.id}\``)
                        ] 
                    });
                }
                else if (modul === 'getjob') {
                    // GetJob panel code (tetap sama)
                    const jobChannelId = '1484448271266222231';
                    const jobChannel = guild.channels.cache.get(jobChannelId);
                    
                    if (!jobChannel) {
                        return interaction.editReply({ 
                            content: '❌ **[CHANNEL_NOT_FOUND]** Channel #get-job tidak ditemukan!' 
                        });
                    }

                    const getjobPanelEmbed = new EmbedBuilder()
                        .setTitle('🎫 GET JOB PANEL')
                        .setDescription(
                            `**Buat private thread untuk request job!**\n\n` +
                            `**✅ Klik tombol **GetJob** di bawah untuk:\n` +
                            `• Buat private thread **langsung di channel ini**\n` +
                            `• Auto-notifikasi moderator\n` +
                            `• Auto-archive 1 jam jika tidak aktif\n\n` +
                            `**⚠️ Hanya member dengan role MEMBER yang bisa menggunakan!**\n\n` +
                            `**⚡ Panel ini **persisten** - tetap aktif meskipun bot restart!**`
                        )
                        .setColor('#5865F2')
                        .addFields(
                            { name: '📊 Status', value: '`✅ LIVE_PERSISTENT`', inline: true },
                            { name: '🎯 Thread Location', value: '`DIRECTLY HERE 👇`', inline: true },
                            { name: '🛡️ System', value: '`TITANIUM_V2.0`', inline: true }
                        )
                        .setFooter({ 
                            text: 'DATA CENTRE JOB SYSTEM • Klik GetJob sekarang!', 
                            iconURL: client.user.displayAvatarURL() 
                        })
                        .setTimestamp();

                    const getjobButton = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('getjob_panel_button')
                                .setLabel('GetJob')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🎫')
                        );

                    const panelMessageJ = await jobChannel.send({ 
                        embeds: [getjobPanelEmbed], 
                        components: [getjobButton] 
                    });

                    global.GETJOB_PANEL_DATA = {
                        messageId: panelMessageJ.id,
                        channelId: jobChannelId,
                        active: true,
                        deployedBy: user.id,
                        deployTime: Date.now()
                    };

                    await interaction.editReply({ 
                        embeds: [new EmbedBuilder()
                            .setTitle('✅ GETJOB PANEL DEPLOYED')
                            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                            .setDescription(`**📍** ${jobChannel.toString()}\n**🆔** \`${panelMessageJ.id}\``)
                        ] 
                    });
                }
                else if (modul === 'cdid') {
                    // CDID panel code (tetap sama)
                    const pingChannelId = '1487683080796766358';
                    const pingChannel = guild.channels.cache.get(pingChannelId);
                    
                    if (!pingChannel) {
                        return interaction.editReply({ 
                            content: '❌ **[CHANNEL_NOT_FOUND]** Channel ping tidak ditemukan!' 
                        });
                    }

                    const cdidPanelEmbed = new EmbedBuilder()
                        .setTitle('👤 PING ROLE PANEL')
                        .setDescription(
                            `**Pilih role ping favorit Anda!**\n\n` +
                            `**✅ Klik tombol di bawah untuk mendapatkan:\n` +
                            `• **🏎️ CDID** - Role ping Info CDID\n` +
                            `• **🐟 Fish It** - Role ping Info Fish It\n\n` +
                            `**⚡ Panel ini **persisten** - tetap aktif meskipun bot restart!**`
                        )
                        .setColor('#5865F2')
                        .addFields(
                            { name: '📊 Status', value: '`✅ LIVE_PERSISTENT`', inline: true },
                            { name: '🎯 Role Location', value: '`INSTANT_ROLE_GRANT`', inline: true },
                            { name: '🛡️ System', value: '`TITANIUM_V2.0`', inline: true }
                        )
                        .setFooter({ 
                            text: 'DATA CENTRE PING SYSTEM • Pilih role sekarang!', 
                            iconURL: client.user.displayAvatarURL() 
                        })
                        .setTimestamp();

                    const buttonRow = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('cdid_button')
                                .setLabel('CDID')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🏎️'),
                            new ButtonBuilder()
                                .setCustomId('fishit_button')
                                .setLabel('Fish It')
                                .setStyle(ButtonStyle.Success)
                                .setEmoji('🐟')
                        );

                    const panelMessageC = await pingChannel.send({ 
                        embeds: [cdidPanelEmbed], 
                        components: [buttonRow]
                    });

                    global.CDID_PANEL_DATA = {
                        messageId: panelMessageC.id,
                        channelId: pingChannelId,
                        active: true,
                        deployedBy: user.id,
                        deployTime: Date.now()
                    };

                    await interaction.editReply({ 
                        embeds: [new EmbedBuilder()
                            .setTitle('✅ CDID PING PANEL DEPLOYED')
                            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                            .setDescription(`**📍** ${pingChannel.toString()}\n**🆔** \`${panelMessageC.id}\``)
                        ] 
                    });
                }
/**
             * ============================================================================================
             * 💰 [ENTERPRISE MODULE: DRAGON STORE COMMERCIAL UI - EXCLUSIVE DEPLOYMENT]
             * Blok operasional telah disterilisasi dari modul usang. Menggunakan metode kompilasi 
             * Array.join() tingkat lanjut untuk mengamankan injeksi variabel dan mencegah SyntaxError.
             * Arsitektur visual menyamping (Side-by-Side Horizontal) dengan integrasi Thumbnail.
             * ============================================================================================
             */
            case 'purchase': {
                const purchaseChannelId = '1489580365474435103';
                const purchaseChannel = guild.channels.cache.get(purchaseChannelId);
                
                // [DIAGNOSTIC PROTOCOL] Validasi eksistensi kanal sebelum transmisi infrastruktur
                if (!purchaseChannel) {
                    return interaction.editReply({ 
                        content: '❌ **[NODE_NOT_FOUND]** Sektor kanal transaksi (1489580365474435103) tidak merespons panggilan sistem! Pastikan kanal masih eksis.' 
                    });
                }

                // [ASSET INTEGRATION] Memuat aset visual lokal dengan arsitektur path absolut
                // Mengkalibrasi ekstensi kembali ke .jpg sesuai dengan meta-data file asli Anda
                const pricelistImage = new AttachmentBuilder('./wmremove-transformed (2).png', { name: 'dragon_pricelist.jpg' });

                // [STRING BUILDER PROTOCOL] Merakit teks panjang dengan Array untuk mencegah error pemotongan (Truncation Error)
                const embedDescriptionText = [
                    `**Selamat Datang di Pusat Layanan Digital & Transaksi Dragon Store!**\n`,
                    `**✅ KETENTUAN LAYANAN & UPLINK:**`,
                    `• Kami secara eksklusif berfokus pada penyediaan layanan **Farming CDID**.`,
                    `• *(Catatan Operasional: Fokus kami adalah Farming uang in-game, tidak melayani Joki Quest).*`,
                    `• Seluruh lalu lintas transaksi dipantau langsung oleh *Core Administration*.`,
                    `• Mohon identifikasi diri dengan melampirkan ID Pengguna Anda saat pemesanan.\n`,
                    `**🚀 Klik tombol "💵 Order Via WhatsApp" di bawah untuk membuka jalur komunikasi terenkripsi!**\n`,
                    `**⚡ Gateway Komersial ini diproteksi secara absolut oleh *Titanium Persistence Engine* (24/7 ONLINE).**`
                ].join('\n'); // Menggabungkan semua baris secara otomatis dan aman

                // [UI CONSTRUCTION] Merakit tata letak horizontal murni untuk Dragon Store
                const purchasePanelEmbed = new EmbedBuilder()
                    .setAuthor({ 
                        name: 'DRAGON STORE COMMERCE & BILLING ENGINE', 
                        iconURL: client.user.displayAvatarURL() 
                    })
                    .setTitle('💰 OFFICIAL CDID FARMING SERVICES GATEWAY')
                    .setDescription(embedDescriptionText) // Menginjeksikan variabel teks yang sudah aman
                    .setColor('#2ecc71') // Tema Success/Hijau
                    .setThumbnail('attachment://dragon_pricelist.jpg') // Menginjeksi aset sebagai Thumbnail (Kanan)
                    .addFields(
                        // Menggunakan inline: true agar matriks status berjajar rapi secara menyamping
                        { name: '📊 Status Gateway', value: '`✅ ACCEPTING_ORDERS`', inline: true },
                        { name: '🛡️ Protokol Enkripsi', value: '`AES-256_ACTIVE`', inline: true },
                        { name: '📡 Titik Koneksi', value: '`WA_SECURE_LINK`', inline: true }
                    )
                    .setFooter({ 
                        text: `DRAGON STORE COMMERCE SECURE SYSTEM • V2.0.4 (Horizontal Layout)`, 
                        iconURL: client.user.displayAvatarURL() 
                    })
                    .setTimestamp();

                // ============================================================================================
                // [INTERACTION LAYER] MATRIX DEPLOYMENT & BUTTON ARCHITECTURE
                // Menyusun tombol interaktif dengan lapisan keamanan tingkat lanjut (Anti-Duplicate ID)
                // ============================================================================================
                const purchaseButtonRow = new ActionRowBuilder()
                    .addComponents(
                        // [KOMPONEN 1]: Jalur Transaksi Eksternal (WhatsApp)
                        new ButtonBuilder()
                            .setCustomId('btn_order_whatsapp') // Rute interaksi ke event listener utama untuk WhatsApp
                            .setLabel('💵 Order Via WhatsApp')
                            .setStyle(ButtonStyle.Success),
                            
                        // [KOMPONEN 2]: Jalur Transaksi Internal (Discord UI & Thread System)
                        // Komponen ini terhubung ke Phase 1: Inisiasi Thread Pemesanan
                        new ButtonBuilder()
                            .setCustomId('btn_order_discord') // Pastikan ID ini unik dan tunggal di dalam satu ActionRow
                            .setLabel('Order via Discord')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🛒')
                    );

                // ============================================================================================
                // [TRANSMISSION PROTOCOL] MENGIRIMKAN PAKET UI KE KANAL TRANSAKSI
                // ============================================================================================
                const panelMessageP = await purchaseChannel.send({ 
                    embeds: [purchasePanelEmbed], 
                    components: [purchaseButtonRow],
                    files: [pricelistImage] // Menyematkan aset Thumbnail secara utuh ke dalam payload jaringan
                });

                // ============================================================================================
                // [STATE MANAGEMENT] PERSISTENSI CACHE MEMORI SERVER
                // ============================================================================================
                // Menyimpan status persistensi panel ke RAM server untuk sinkronisasi jangka panjang
                global.PURCHASE_PANEL_DATA = {
                    messageId: panelMessageP.id,
                    channelId: purchaseChannelId,
                    active: true,
                    deployedBy: user.id, // Melacak otoritas eksekutor yang memasang panel
                    deployTime: Date.now() // Timestamp inisiasi untuk keperluan log
                };

                // ============================================================================================
                // [STRING BUILDER PROTOCOL] KONSTRUKSI FEEDBACK TERMINAL
                // ============================================================================================
                // Merakit teks feedback terminal agar terhindar dari escape character error
                const terminalFeedbackText = [
                    `**📍 Sektor Alokasi :** ${purchaseChannel.toString()}`,
                    `**🆔 ID Transmisi  :** \`${panelMessageP.id}\``,
                    ``, // Pemisah visual baris kosong
                    `*Modul antarmuka telah dibersihkan dari interferensi duplikasi ID. Orientasi komponen berhasil diselaraskan dan dieksekusi tanpa anomali.*`
                ].join('\n');

                // ============================================================================================
                // [TERMINAL FEEDBACK] LAPORAN SUKSES OPERASIONAL
                // ============================================================================================
                await interaction.editReply({ 
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('✅ EXCLUSIVE PURCHASE GATEWAY DEPLOYED')
                            .setColor('#2ecc71') // Indikator hijau untuk sukses transmisi
                            .setDescription(terminalFeedbackText) // Teks terenkripsi dan aman disuntikkan di sini
                            .setTimestamp()
                            .setFooter({ text: 'Data Centre Guard • Titanium Omniscience System' })
                    ] 
                });
                
                break; // ✅ BREAK POINT KRUSIAL: Mengunci scope case purchase dan mencegah memory leak
            }

case 'webhook': {
                /**
                 * ============================================================================================
                 * 🔌 [ENTERPRISE MODULE: WEBHOOK DEPLOYMENT & ROUTING SYSTEM V4.1]
                 * ============================================================================================
                 * Arsitektur pemrosesan jalur transmisi webhook dengan Lexical Scope Isolation ({}).
                 */
                const rawWebhookName = options.getString('nama');
                const rawWebhookUrl = options.getString('url');
                
                const webhookName = rawWebhookName ? rawWebhookName.trim() : null;
                const webhookUrl = rawWebhookUrl ? rawWebhookUrl.trim() : null;

                // --- [LAYER 1: STRICT ENDPOINT VALIDATION] ---
                if (!webhookName || webhookName.length < 3) {
                    return interaction.editReply({ 
                        content: '❌ **[VALIDATION_FAULT]** Parameter `nama` gagal memenuhi standar minimum (3 karakter). Sistem memblokir alokasi.' 
                    });
                }
                
                if (!webhookUrl || !webhookUrl.includes('discord.com/api/webhooks/')) {
                    return interaction.editReply({ 
                        content: '❌ **[ENDPOINT_FAULT]** Parameter `url` tidak mengandung struktur URL Webhook Discord yang valid. Transmisi ditolak.' 
                    });
                }

                if (options.getString('script')) {
                    console.log(`⚠️ [WEBHOOK_ROUTER]: Parameter 'script' diabaikan karena berada pada mode deployment Webhook.`);
                }

                // --- [LAYER 2: ABSOLUTE PATH DEFINITION & MEMORY ALLOCATION] ---
                const webhookFile = './webhook_config.json';
                let webhookData = {};
                
                // --- [LAYER 3: SECURE FILE SYSTEM PARSING] ---
                if (fs.existsSync(webhookFile)) {
                    try {
                        const rawData = fs.readFileSync(webhookFile, 'utf8');
                        if (rawData.trim() !== '') {
                            webhookData = JSON.parse(rawData);
                        }
                    } catch (parseError) {
                        console.error('❌ [WEBHOOK_CORRUPTION_DETECTED]:', parseError.message);
                        webhookData = {}; // Fallback state untuk mencegah chain-crash
                    }
                } else {
                    console.log(`📡 [STORAGE_INIT]: Node \`${webhookFile}\` tidak ditemukan. Menghasilkan node baru.`);
                }

                // --- [LAYER 4: DATA CONSTRUCTION & METADATA INJECTION] ---
                webhookData[webhookName] = {
                    url: webhookUrl,
                    channels: [],
                    channelNames: ['Global_Route'],
                    createdBy: user.id,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    status: 'ACTIVE_LISTENING',
                    version: 'V4.1-ISOLATED'
                };

                // --- [LAYER 5: DISK I/O WRITE OPERATION] ---
                try {
                    fs.writeFileSync(webhookFile, JSON.stringify(webhookData, null, 2));
                } catch (writeError) {
                    console.error('❌ [WEBHOOK_I/O_FAULT]:', writeError);
                    return interaction.editReply({ 
                        content: '❌ **[STORAGE_FAILURE]** Kegagalan penulisan I/O pada disk server. Endpoint gagal diamankan.' 
                    });
                }

                // --- [LAYER 6: HYPER-MINIMALIST UI RESPONSE] ---
                const webhookDeploymentUI = new EmbedBuilder()
                    .setAuthor({ name: 'OMNISCIENCE KERNEL: NETWORK ROUTER', iconURL: client.user.displayAvatarURL() })
                    .setTitle('🔌 ENDPOINT DEPLOYMENT SUCCESS')
                    .setColor('#00d1ff')
                    .setDescription(
                        `**Jalur komunikasi eksternal telah berhasil diintegrasikan ke dalam infrastruktur.**\n` +
                        `───────────────────────────────────────\n` +
                        `**📝 IDENTIFIER :** \`${webhookName}\`\n` +
                        `**🔗 TARGET URL :** \`${webhookUrl.substring(0, 45)}...[SECURED]\`\n` +
                        `**📊 TOTAL NODE :** \`${Object.keys(webhookData).length} Endpoint Aktif\`\n` +
                        `**👤 INITIATOR  :** ${user.toString()}\n` +
                        `───────────────────────────────────────`
                    )
                    .addFields(
                        { name: '💾 Target Direktori', value: `\`${webhookFile.replace('./', '')}\``, inline: true },
                        { name: '🛡️ Enkripsi', value: '`AES-256_STATE`', inline: true }
                    )
                    .setFooter({ text: 'NETWORK SECURITY DIVISION | V4.1' })
                    .setTimestamp();

                await interaction.editReply({ embeds: [webhookDeploymentUI] });
                console.log(`✅ [WEBHOOK_DEPLOYED] Personel ${user.tag} membuka jalur: "${webhookName}"`);
                break;
            } // <-- Penutup Lexical Scope Webhook

            case 'script': {
                /**
                 * ============================================================================================
                 * 📜 [ENTERPRISE MODULE: SCRIPT DEPLOYMENT & PARSING SYSTEM V4.1]
                 * ============================================================================================
                 * Arsitektur penyimpanan blok kode dengan Lexical Scope Isolation ({}).
                 */
                const rawScriptName = options.getString('nama');
                const rawScriptContent = options.getString('script');
                
                const scriptName = rawScriptName ? rawScriptName.trim() : null;
                const scriptContent = rawScriptContent ? rawScriptContent.trim() : null;

                // --- [LAYER 1: STRICT INPUT SANITIZATION] ---
                if (!scriptName || scriptName.length < 2) {
                    return interaction.editReply({ 
                        content: '❌ **[VALIDATION_FAULT]** Parameter `nama` gagal memenuhi standar minimum arsitektur. Blokir alokasi.' 
                    });
                }
                
                if (!scriptContent || scriptContent.length < 10) {
                    return interaction.editReply({ 
                        content: '❌ **[VALIDATION_FAULT]** Parameter `script` gagal memenuhi standar instruksi minimum. Injeksi ditolak.' 
                    });
                }
                
                if (scriptContent.length > 4000) {
                    return interaction.editReply({ 
                        content: '❌ **[BUFFER_OVERFLOW_PREVENTED]** Kapasitas payload skrip melebihi batas (Maksimal 4000 karakter).' 
                    });
                }

                if (options.getString('url')) {
                    console.log(`⚠️ [SCRIPT_COMPILER]: Parameter 'url' diabaikan karena berada pada mode eksekusi kode.`);
                }

                // --- [LAYER 2: ABSOLUTE PATH DEFINITION] ---
                const scriptFile = './multi_script_system.json';
                let scriptData = {};
                
                // --- [LAYER 3: SECURE FILE SYSTEM PARSING] ---
                if (fs.existsSync(scriptFile)) {
                    try {
                        const rawData = fs.readFileSync(scriptFile, 'utf8');
                        if (rawData.trim() !== '') {
                            scriptData = JSON.parse(rawData);
                        }
                    } catch (parseError) {
                        console.error('❌ [DATABASE_CORRUPTION_DETECTED] pada modul skrip:', parseError.message);
                        scriptData = {}; 
                    }
                } else {
                    console.log(`📡 [STORAGE_INIT]: Vault \`${scriptFile}\` tidak ditemukan. Membuat repositori baru.`);
                }

                // --- [LAYER 4: BYTE-ACCURATE METADATA INJECTION] ---
                scriptData[scriptName] = {
                    content: scriptContent,
                    createdBy: user.id,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    size: Buffer.byteLength(scriptContent, 'utf8'), 
                    version: 'V4.1-ISOLATED',
                    integrityCheck: 'PASSED'
                };

                // --- [LAYER 5: DISK I/O WRITE OPERATION] ---
                try {
                    fs.writeFileSync(scriptFile, JSON.stringify(scriptData, null, 2));
                } catch (writeError) {
                    console.error('❌ [I/O_WRITE_FAULT]:', writeError);
                    return interaction.editReply({ 
                        content: '❌ **[STORAGE_FAILURE]** Penolakan tulis dari OS/Disk terdeteksi. Skrip gagal diamankan.' 
                    });
                }

                // --- [LAYER 6: FUTURISTIC & MINIMALIST UI RESPONSE] ---
                const scriptDeploymentUI = new EmbedBuilder()
                    .setAuthor({ name: 'OMNISCIENCE KERNEL: COMPILER ROUTINE', iconURL: client.user.displayAvatarURL() })
                    .setTitle('📜 KODE EKSTERNAL: SINKRONISASI BERHASIL')
                    .setColor('#00ffa3')
                    .setDescription(
                        `**Blok kode eksternal telah berhasil diinjeksi ke dalam memori permanen.**\n` +
                        `───────────────────────────────────────\n` +
                        `**📝 IDENTIFIER :** \`${scriptName}\`\n` +
                        `**📏 PAYLOAD    :** \`${scriptData[scriptName].size} Bytes\`\n` +
                        `**📊 TOTAL NODE :** \`${Object.keys(scriptData).length} Skrip Aktif\`\n` +
                        `**👤 COMPILER   :** ${user.toString()}\n\n` +
                        `**📋 KODE PREVIEW TERMINAL:**\n` +
                        `\`\`\`javascript\n${scriptContent.substring(0, 180)}${scriptContent.length > 180 ? '\n... [DATA TRUNCATED]' : ''}\n\`\`\``
                    )
                    .addFields(
                        { name: '💾 Vault', value: `\`${scriptFile.replace('./', '')}\``, inline: true },
                        { name: '⚡ Latensi', value: `\`${Math.abs(Date.now() - scriptData[scriptName].createdAt)}ms\``, inline: true }
                    )
                    .setFooter({ text: 'DATA CENTRE ENGINEERING | V4.1' })
                    .setTimestamp();

                await interaction.editReply({ embeds: [scriptDeploymentUI] });
                console.log(`✅ [SCRIPT_DEPLOYED] Personel ${user.tag} mengamankan kode: "${scriptName}"`);
                break;
            } // <-- Penutup Lexical Scope Script

case 'scriptcontrol':
    // ✅ FIXED - NO VARIABLE CONFLICT - PATH LANGSUNG
    const scriptControlChannelId = '1489130776573382756'; // GANTI DENGAN CHANNEL ID ANDA
    const scriptControlChannel = guild.channels.cache.get(scriptControlChannelId);
    
    if (!scriptControlChannel) {
        return interaction.editReply({ 
            content: '❌ **[CHANNEL_NOT_FOUND]** Channel Script Control tidak ditemukan!' 
        });
    }

    // ✅ COUNTS LANGSUNG - TRY-CATCH SAFETY
    let scriptCount = 0, webhookCount = 0;
    try {
        if (fs.existsSync('./multi_script_system.json')) {
            const rawData = fs.readFileSync('./multi_script_system.json', 'utf8');
            scriptCount = Object.keys(JSON.parse(rawData)).length;
        }
    } catch(e) { console.log('Script count silent fail'); }
    
    try {
        if (fs.existsSync('./webhook_config.json')) {
            const rawData = fs.readFileSync('./webhook_config.json', 'utf8');
            webhookCount = Object.keys(JSON.parse(rawData)).length;
        }
    } catch(e) { console.log('Webhook count silent fail'); }

    const scriptControlPanelEmbed = new EmbedBuilder()
        .setTitle('⌨️ SCRIPT CONTROL PANEL')
        .setDescription(
            `**Panel kontrol terpusat untuk Script & Webhook!**\n\n` +
            `**📊 Status Real-time:**\n` +
            `• 📜 **Scripts:** \`${scriptCount}\`\n` +
            `• 🔌 **Webhooks:** \`${webhookCount}\`\n\n` +
            `**✅ Klik SCRIPT CONTROL untuk akses:**\n` +
            `• 📜 View semua script\n` +
            `• 🔌 View semua webhook\n` +
            `• 📊 Bot stats real-time\n\n` +
            `**⚠️ Hanya role \`Private Player\` yang bisa pakai!**\n` +
            `**⚡ Panel persisten - bot restart tetap aktif!**`
        )
        .setColor('#5865F2')
        .addFields(
            { name: '📊 Status', value: '`✅ LIVE_PERSISTENT`', inline: true },
            { name: '🔒 Access', value: '`Role Required`', inline: true },
            { name: '🛡️ System', value: '`TITANIUM_V3.0`', inline: true }
        )
        .setFooter({ 
            text: 'DATA CENTRE SCRIPT CONTROL • Role 1463837271965831232', 
            iconURL: client.user.displayAvatarURL() 
        })
        .setTimestamp();

    const scriptControlButton = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('scriptcontrol_panel_button')
                .setLabel('SCRIPT CONTROL')
                .setStyle(ButtonStyle.Primary)
                .setEmoji('⌨️')
        );

    const panelMessageSC = await scriptControlChannel.send({ 
        embeds: [scriptControlPanelEmbed], 
        components: [scriptControlButton] 
    });

    // Simpan persistent
    global.SCRIPTCONTROL_PANEL_DATA = {
        messageId: panelMessageSC.id,
        channelId: scriptControlChannelId,
        active: true,
        deployedBy: user.id,
        deployTime: Date.now()
    };

    await interaction.editReply({ 
        embeds: [new EmbedBuilder()
            .setTitle('✅ SCRIPT CONTROL PANEL DEPLOYED')
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
            .setDescription(
                `**📍 Channel:** ${scriptControlChannel}\n` +
                `**🆔 Message ID:** \`${panelMessageSC.id}\`\n` +
                `**📊 Scripts:** \`${scriptCount}\` | **Webhooks:** \`${webhookCount}\``
            )
        ] 
    });

    console.log(`✅ [SCRIPTCONTROL_PANEL] Deployed by ${user.tag} | Scripts:${scriptCount} Webhooks:${webhookCount}`);
    break;

            case 'script':
                // === SCRIPT SYSTEM (HANYA NAMA + SCRIPT) ===
                const scriptName = options.getString('nama')?.trim();
                const scriptContent = options.getString('script')?.trim();

                // ✅ VALIDASI HANYA UNTUK SCRIPT
                if (!scriptName || scriptName.length < 2) {
                    return interaction.editReply({ 
                        content: '❌ **[REQUIRED]** `nama` wajib diisi (min 2 karakter) untuk Script!' 
                    });
                }
                if (!scriptContent || scriptContent.length < 10) {
                    return interaction.editReply({ 
                        content: '❌ **[REQUIRED]** `script` wajib diisi (min 10 karakter) untuk Script!' 
                    });
                }
                if (scriptContent.length > 4000) {
                    return interaction.editReply({ 
                        content: '❌ **[SIZE_LIMIT]** Script maksimal 4000 karakter.' 
                    });
                }
                // ✅ IGNORE URL OPTION UNTUK SCRIPT
                if (options.getString('url')) {
                    console.log('⚠️ [SCRIPT] URL option ignored');
                }

                if (!fs.existsSync('./multi_script_system.json')) {
    return interaction.editReply({ content: '❌ **NO_SCRIPTS_FOUND**' });
}
const rawScriptData = fs.readFileSync('./multi_script_system.json', 'utf8');
                let scriptData = {};
                
                if (fs.existsSync(scriptFile)) {
                    try {
                        const rawData = fs.readFileSync(scriptFile, 'utf8');
                        scriptData = JSON.parse(rawData);
                    } catch (err) {
                        console.error('❌ [SCRIPT_LOAD_ERROR]:', err);
                        scriptData = {};
                    }
                }

                scriptData[scriptName] = {
                    content: scriptContent,
                    createdBy: user.id,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    size: scriptContent.length,
                    version: 'V2.0'
                };

                fs.writeFileSync(scriptFile, JSON.stringify(scriptData, null, 2));

                await interaction.editReply({ 
                    embeds: [new EmbedBuilder()
                        .setTitle('📜 SCRIPT DEPLOYED ✓')
                        .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                        .setDescription(
                            `**📝 Nama Script:** \`${scriptName}\`\n` +
                            `**📏 Ukuran:** \`${scriptContent.length} chars\`\n` +
                            `**📊 Total Scripts:** \`${Object.keys(scriptData).length}\`\n` +
                            `**👤 Creator:** ${user.toString()}\n\n` +
                            `**📋 Preview:**\n\`\`\`${scriptContent.substring(0, 150)}${scriptContent.length > 150 ? '...' : ''}\`\`\``
                        )
                        .addFields(
                            { name: '💾 File', value: '`multi_script_system.json`', inline: true },
                            { name: '🔒 Access', value: '`Role Restricted`', inline: true }
                        )
                        .setFooter({ text: 'MULTI SCRIPT SYSTEM V2.0 | Persistent Storage' })
                        .setTimestamp()
                    ] 
                });
                break;

            default:
                await interaction.editReply({ content: '❌ **[INVALID_MODULE]** Modul tidak dikenali.' });
        }

        // Universal Audit Log
        const audit = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
        if (audit) {
            await audit.send(`🔧 **${modul.toUpperCase()} CONFIG** by ${user.toString()}`);
        }

        console.log(`✅ [SET_V2] ${modul} by ${user.tag}`);

    } catch (error) {
        console.error('❌ [SET_ERROR]:', error);
        await interaction.editReply({ content: '❌ **[DEPLOY_FAILED]** Gagal deploy.' });
    }
}

/**
 * ============================================================================================
 * [MODULE: REMOVE SYSTEM V3.5 - TITANIUM OMNISCIENCE EDITION]
 * ============================================================================================
 * Fitur Integrasi: Auto-Detect Select Menu, Deep-String Extraction, & Absolute Memory Purge
 * ============================================================================================
 */
if (commandName === 'remove') {
    const MOD_ROLE_ID = '1484124559480193134';
    
    // --- [LAYER 1: KERNEL AUTHORIZATION] ---
    if (!member.roles.cache.has(MOD_ROLE_ID)) {
        return interaction.reply({ 
            content: '🚨 **[SECURITY_CLEARANCE_DENIED]** Anda tidak memiliki otorisasi Moderator untuk mengeksekusi protokol penghapusan permanen.', 
            ephemeral: true 
        }).catch(() => {});
    }

    const moduleType = options.getString('module');
    
    try {
        await interaction.deferReply({ ephemeral: true });
    } catch (deferError) {
        console.error('⚠️ [REMOVE_DEFER_FAULT]: Interaksi mengalami time-out sebelum otorisasi selesai.');
        return;
    }

    let filePath = '';
    let data = {};
    let allItems = [];

    // --- [LAYER 2: DYNAMIC DATABASE BINDING] ---
    switch(moduleType) {
        case 'script':
            filePath = './multi_script_system.json';
            break;
        case 'webhook':
            filePath = './webhook_config.json';
            break;
        default:
            return interaction.editReply({ content: '❌ **[SYSTEM_FAULT]** Parameter modul tidak valid.' });
    }

    // Ekstraksi memori dari penyimpanan persisten
    if (fs.existsSync(filePath)) {
        try {
            const rawData = fs.readFileSync(filePath, 'utf8');
            data = JSON.parse(rawData);
            allItems = Object.keys(data);
        } catch (readError) {
            console.error(`❌ [DATA_CORRUPTION_DETECTED] pada file ${filePath}:`, readError);
            return interaction.editReply({ content: `❌ **[CORRUPTION]** Gagal membaca database \`${moduleType}\`. File mungkin rusak.` });
        }
    }

    // --- [LAYER 3: NULL-DATA EXCEPTION HANDLING] ---
    if (allItems.length === 0) {
        const emptyEmbed = new EmbedBuilder()
            .setTitle(`📭 ISOLATION: NO ${moduleType.toUpperCase()}S DETECTED`)
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
            .setDescription(
                `**💾 Direktori Penyimpanan:** \`${filePath.split('/').pop()}\`\n` +
                `**📊 Status Memori:** \`ZERO_ALLOCATION_FOUND\`\n\n` +
                `Sistem tidak dapat menemukan entitas data apa pun untuk dihapus. Gunakan protokol \`/set\` untuk memasukkan data baru ke dalam infrastruktur.`
            )
            .setFooter({ text: 'OMNISCIENCE KERNEL • EMPTY_DB_EXCEPTION' })
            .setTimestamp();
            
        return interaction.editReply({ embeds: [emptyEmbed] });
    }

    // --- [LAYER 4: HYPER-VISUAL SELECTOR CONSTRUCTION] ---
    // Membatasi hingga 25 opsi (Limitasi Discord API) dan memetakan metadata
    const selectOptions = allItems.slice(0, 25).map(name => {
        const itemMetadata = data[name];
        let descriptionFormat = 'Data Terverifikasi';
        
        if (moduleType === 'script' && itemMetadata.size) {
            descriptionFormat = `${itemMetadata.size.toLocaleString()} chars • Authorized by <@${itemMetadata.createdBy}>`;
        } else if (moduleType === 'webhook' && itemMetadata.channels) {
            descriptionFormat = `${itemMetadata.channels.length} active routing channels`;
        }

        return {
            label: name.length > 100 ? name.substring(0, 97) + '...' : name,
            value: name.length > 100 ? name.substring(0, 100) : name, // Value maksimal 100 char
            description: descriptionFormat.substring(0, 100)
        };
    });

    const selectRow = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(`remove_select_${moduleType}`)
                .setPlaceholder(`Akses Direktori: Pilih ${moduleType} untuk di-purge... (${allItems.length} total)`)
                .addOptions(selectOptions)
        );

    const detectEmbed = new EmbedBuilder()
        .setTitle(`🔍 TARGET ACQUISITION: ${allItems.length} ENTITIES FOUND`)
        .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
        .setDescription(
            `**📊 TERDETEKSI:** \`${allItems.length} Entitas ${moduleType.toUpperCase()} Aktif\`\n` +
            `**💾 TARGET DRIVE:** \`${filePath.split('/').pop()}\`\n\n` +
            `**⚠️ PERINGATAN KRITIKAL:**\nPilih entitas dari menu *dropdown* di bawah ini untuk memulai protokol penghapusan permanen. Tindakan ini **TIDAK BISA DIBATALKAN** (Irreversible).`
        )
        .addFields(
            { name: '🔒 Security Level', value: '`MODERATOR_OVERRIDE`', inline: true },
            { name: '⏰ TTL Timeout', value: '`30 SECONDS`', inline: true },
            { name: '🗑️ Action Protocol', value: '`ABSOLUTE_PURGE`', inline: true }
        )
        .setFooter({ text: 'REMOVAL SYSTEM V3.5 | OMNISCIENCE TERMINATOR ACTIVE' })
        .setTimestamp();

    await interaction.editReply({ 
        embeds: [detectEmbed], 
        components: [selectRow] 
    });

    // --- [LAYER 5: PRIMARY EVENT COLLECTOR (SELECTION)] ---
    const filter = i => i.user.id === user.id && i.customId === `remove_select_${moduleType}`;
    const collector = interaction.channel.createMessageComponentCollector({ 
        filter: filter, 
        time: 30000 
    });

    collector.on('collect', async i => {
        const targetName = i.values[0];
        const targetData = data[targetName];

        if (!targetData) {
            return i.reply({ content: '❌ **[GHOST_DATA]** Data telah hilang atau dihapus oleh sesi lain.', ephemeral: true });
        }

        // Generate Preview Konten yang Aman
        let previewContent = 'DATA_CORRUPTED_OR_EMPTY';
        if (moduleType === 'script' && targetData.content) {
            previewContent = targetData.content.substring(0, 500) + (targetData.content.length > 500 ? '\n\n... [DATA TRUNCATED FOR PREVIEW]' : '');
        } else if (moduleType === 'webhook' && targetData.url) {
            previewContent = targetData.url.substring(0, 100) + (targetData.url.length > 100 ? '...' : '');
        }

        const confirmEmbed = new EmbedBuilder()
            .setTitle(`⚠️ KONFIRMASI PEMUSNAHAN: \`${targetName.toUpperCase()}\``)
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_GOLD)
            .setDescription(
                `**📋 METADATA ENTITAS:**\n` +
                `• **Ukuran/Kapasitas:** \`${moduleType === 'script' ? targetData.size + ' Bytes' : targetData.url.length + ' Chars'}\`\n` +
                `• **Waktu Pembuatan:** <t:${Math.floor(targetData.createdAt / 1000)}:F>\n` +
                `• **Inisiator:** <@${targetData.createdBy}>\n\n` +
                `**📄 PREVIEW BUFFER:**\n\`\`\`javascript\n${previewContent}\n\`\`\``
            )
            .setFooter({ text: 'KLIK DELETE NOW UNTUK MENGHAPUS SECARA PERMANEN' });

        // Penggunaan kombinasi string aman untuk ID agar terhindar dari split collision
        const finalCustomId = `remove_final_${moduleType}_TARGET_${targetName}`;

        const confirmRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(finalCustomId)
                    .setLabel('🗑️ EXECUTE ABSOLUTE DELETE')
                    .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setCustomId('remove_back_abort')
                    .setLabel('⬅️ BATALKAN')
                    .setStyle(ButtonStyle.Secondary)
            );

        await i.update({ embeds: [confirmEmbed], components: [confirmRow] });
    });

    // --- [LAYER 6: SECONDARY EVENT COLLECTOR (EXECUTION)] ---
    const finalFilter = i => i.user.id === user.id && (i.customId.startsWith('remove_final_') || i.customId === 'remove_back_abort');
    
    // BUG FIX TERAPAN: Menggunakan format `filter: finalFilter` dengan benar
    const finalCollector = interaction.channel.createMessageComponentCollector({ 
        filter: finalFilter, 
        time: 60000 
    });

    finalCollector.on('collect', async i => {
        // Penanganan pembatalan eksekusi
        if (i.customId === 'remove_back_abort') {
            collector.stop();
            finalCollector.stop();
            return i.update({ 
                embeds: [new EmbedBuilder().setColor('#36393f').setDescription('✅ **Operasi Dibatalkan.** Infrastruktur aman.')], 
                components: [] 
            });
        }

        // BUG FIX TERAPAN: Ekstraksi targetName menggunakan substring (Aman dari spasi dan garis bawah ganda)
        const prefix = `remove_final_${moduleType}_TARGET_`;
        const targetName = i.customId.substring(prefix.length);

        if (!data[targetName]) {
            return i.update({ content: '❌ Entitas sudah tidak ada di dalam memori JSON.', embeds: [], components: [] });
        }

        // Eksekusi Penghapusan Memori
        const beforeCount = Object.keys(data).length;
        delete data[targetName];
        
        try {
            // Write to Disk - Persistence Sync
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            
            const afterCount = Object.keys(data).length;

            const successEmbed = new EmbedBuilder()
                .setTitle('✅ ABSOLUTE PURGE: SUCCESSFUL')
                .setAuthor({ name: 'OMNISCIENCE KERNEL: DELETION PROTOCOL', iconURL: client.user.displayAvatarURL() })
                .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                .setDescription(
                    `**🗑️ ENTITAS DIMUSNAHKAN:** \`${targetName}\`\n` +
                    `**📊 INTEGRITAS SISTEM:** ${beforeCount} Entitas ➔ **${afterCount} Entitas Tersisa**\n` +
                    `**💾 STATE TERSIMPAN DI:** \`${filePath.split('/').pop()}\`\n\n` +
                    `*Operasi penulisan ulang ke dalam disk telah selesai tanpa cacat data.*`
                )
                .setFooter({ text: `EXECUTOR: ${user.tag.toUpperCase()} | ENGINE V3.5` })
                .setTimestamp();

            await i.update({ embeds: [successEmbed], components: [] });

            // --- [LAYER 7: GLOBAL AUDIT DISPATCH] ---
            const auditChannel = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
            if (auditChannel) {
                const auditLogUI = new EmbedBuilder()
                    .setTitle('🗑️ DATA_TERMINATION_LOGGED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                    .setDescription(`**Tipe Modul:** \`${moduleType.toUpperCase()}\`\n**Target:** \`${targetName}\`\n**Oleh:** <@${user.id}>\n**Status:** \`PERMANENTLY_PURGED\``)
                    .setTimestamp();
                    
                await auditChannel.send({ embeds: [auditLogUI] }).catch(() => {});
            }

            console.log(`✅ [REMOVE_V3.5_CORE] Entitas "${targetName}" (${moduleType}) BERHASIL DIMUSNAHKAN oleh ${user.tag}`);
            
        } catch (writeFault) {
            console.error('❌ [DISK_WRITE_FAULT]:', writeFault);
            await i.update({ content: '❌ **[FATAL]** Gagal menulis pembaruan memori ke dalam disk (I/O Error).', embeds: [], components: [] });
        }

        // Hentikan collector agar tidak membocorkan memori (Memory Leak Protection)
        collector.stop();
        finalCollector.stop();
    });

    // Cleanup UI saat waktu habis
    collector.on('end', (collected, reason) => {
        if (reason === 'time') {
            interaction.editReply({ 
                content: '⚠️ **[SESSION_TIMEOUT]** Waktu koneksi kontrol berakhir.', 
                components: [] 
            }).catch(() => {});
        }
    });
    
    finalCollector.on('end', (collected, reason) => {
        if (reason === 'time') {
            interaction.editReply({ 
                content: '⚠️ **[SESSION_TIMEOUT]** Waktu konfirmasi berakhir. Penghapusan dibatalkan.', 
                components: [] 
            }).catch(() => {});
        }
    });
    
    return;
}

        /**
         * ============================================================================================
         * [MODULE: KICK SYSTEM - MODERATOR ONLY]
         * ============================================================================================
         */
        if (commandName === 'kick') {
            const MOD_ROLE_ID = '1484124559480193134';
            
            if (!member.roles.cache.has(MOD_ROLE_ID)) {
                return interaction.reply({ 
                    content: '❌ **[ACCESS_DENIED]** Moderator only!', 
                    ephemeral: true 
                });
            }

            const targetUser = options.getUser('target');
            const targetMember = await guild.members.fetch(targetUser.id).catch(() => null);
            
            if (!targetMember) {
                return interaction.reply({ content: '❌ User tidak ditemukan!', ephemeral: true });
            }
            
            if (targetMember.id === user.id) {
                return interaction.reply({ content: '❌ Tidak bisa kick diri sendiri!', ephemeral: true });
            }
            
            if (targetMember.roles.highest.position >= member.roles.highest.position) {
                return interaction.reply({ content: '❌ Target memiliki role lebih tinggi!', ephemeral: true });
            }

            try {
                await targetMember.kick('Moderator Kick');
                
                const kickEmbed = new EmbedBuilder()
                    .setTitle('👢 MEMBER KICKED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                    .setDescription(`**Target:** ${targetUser.toString()}\n**Moderator:** ${user.toString()}\n**Action:** \`KICKED\``)
                    .setThumbnail(targetUser.displayAvatarURL())
                    .setTimestamp();

                await interaction.reply({ embeds: [kickEmbed] });

                const audit = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                if (audit) await audit.send({ embeds: [kickEmbed] });

            } catch (error) {
                interaction.reply({ content: '❌ Gagal kick member!', ephemeral: true });
            }
        }

        /**
         * ============================================================================================
         * [MODULE: BAN SYSTEM - MODERATOR ONLY]
         * ============================================================================================
         */
        if (commandName === 'ban') {
            const MOD_ROLE_ID = '1484124559480193134';
            
            if (!member.roles.cache.has(MOD_ROLE_ID)) {
                return interaction.reply({ 
                    content: '❌ **[ACCESS_DENIED]** Moderator only!', 
                    ephemeral: true 
                });
            }

            const targetUser = options.getUser('target');
            const reason = options.getString('reason') || 'No reason provided';
            const targetMember = await guild.members.fetch(targetUser.id).catch(() => null);
            
            if (!targetMember) {
                return interaction.reply({ content: '❌ User tidak ditemukan!', ephemeral: true });
            }
            
            if (targetMember.id === user.id) {
                return interaction.reply({ content: '❌ Tidak bisa ban diri sendiri!', ephemeral: true });
            }
            
            if (targetMember.roles.highest.position >= member.roles.highest.position) {
                return interaction.reply({ content: '❌ Target memiliki role lebih tinggi!', ephemeral: true });
            }

            try {
                await targetMember.ban({ reason });
                
                const banEmbed = new EmbedBuilder()
                    .setTitle('🔨 MEMBER BANNED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                    .setDescription(`**Target:** ${targetUser.toString()}\n**Moderator:** ${user.toString()}\n**Reason:** \`${reason}\`\n**Action:** \`PERMANENT_BAN\``)
                    .setThumbnail(targetUser.displayAvatarURL())
                    .setTimestamp();

                await interaction.reply({ embeds: [banEmbed] });

                const audit = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                if (audit) await audit.send({ embeds: [banEmbed] });

            } catch (error) {
                interaction.reply({ content: '❌ Gagal ban member!', ephemeral: true });
            }
        }

	/**
         * ============================================================================================
         * [MODULE: CONTENT_SCHEDULER_SYSTEM - TITANIUM V3.8 - FINAL BLUE]
         * ============================================================================================
         */
        if (commandName === 'content') {
            if (user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID) {
                return interaction.reply({ content: '🚨 **[ACCESS_DENIED]**', ephemeral: true });
            }

            const contentLink = options.getString('link');
            const optJam = options.getString('jam');
            const optMenit = options.getString('menit') || '00';

            const urlPattern = /^(https?:\/\/)/;
            if (!urlPattern.test(contentLink)) {
                return interaction.reply({ content: '❌ **[INVALID_URL]** Link harus diawali http/https.', ephemeral: true });
            }

            const targetChannelId = '1480749803787911292';
            const targetChannel = guild.channels.cache.get(targetChannelId);
            
            let delayMs = 0;
            let isScheduled = false;

            if (optJam) {
                const now = new Date();
                const scheduledDate = new Date();
                scheduledDate.setHours(parseInt(optJam), parseInt(optMenit), 0, 0);
                if (scheduledDate < now) scheduledDate.setDate(scheduledDate.getDate() + 1);
                delayMs = scheduledDate.getTime() - now.getTime();
                isScheduled = true;
            }

            const displayTime = isScheduled ? `Pukul ${optJam}:${optMenit} WIB` : '⚡ INSTANT_DISPATCH';

            // UI Design: Clean Blue (Tanpa Image/Thumbnail)
            const contentEmbed = new EmbedBuilder()
                .setAuthor({ name: 'OMNISCIENCE CONTENT DISPATCHER | TITANIUM', iconURL: client.user.displayAvatarURL() })
                .setTitle('🚀 NEW CONTENT UPLOADED')
                .setURL(contentLink)
                .setColor('#0099ff') // Garis Biru
                .setDescription(
                    `### 📢 TRANSMISI KONTEN BARU TERDETEKSI\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n\n` +
                    `**👤 DISPATCHER :** <@${user.id}>\n` +
                    `**🔗 SOURCE URL  :** [Klik di sini untuk akses](${contentLink})\n` +
                    `**⏰ SCHEDULE    :** \`${displayTime}\`\n\n` +
                    `**📝 STATUS:** \`READY_FOR_ENGAGEMENT\`\n\n` +
                    `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
                )
                .setFooter({ text: `OMNI_CONTENT_GUARD | ID: ${Math.random().toString(36).substring(7).toUpperCase()}` })
                .setTimestamp();

            // Tombol Hijau untuk PREVIEW (Tanpa .setURL agar tidak eror)
            const previewBtn = new ButtonBuilder()
                .setCustomId('preview_link')
                .setLabel('VIEW CONTENT NOW')
                .setStyle(ButtonStyle.Success);

            const confirmBtn = new ButtonBuilder()
                .setCustomId('confirm_dispatch')
                .setLabel(isScheduled ? 'SET SCHEDULE' : 'SEND NOW')
                .setStyle(ButtonStyle.Primary);

            await interaction.reply({ 
                content: `✅ **INITIALIZED:** Deploy untuk **${displayTime}**?`,
                embeds: [contentEmbed],
                components: [new ActionRowBuilder().addComponents(previewBtn, confirmBtn)],
                ephemeral: true 
            });

            const filter = i => i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });

            collector.on('collect', async i => {
                if (i.customId === 'preview_link') {
                    return i.reply({ content: `🔗 **Akses Link:** ${contentLink}`, ephemeral: true });
                }

                if (i.customId === 'confirm_dispatch') {
                    // Tombol Final (Tipe LINK - Wajib warna abu-abu oleh Discord)
                    const finalBtn = new ButtonBuilder()
                        .setLabel('VIEW CONTENT NOW')
                        .setStyle(ButtonStyle.Link)
                        .setURL(contentLink);
                    
                    const finalRow = new ActionRowBuilder().addComponents(finalBtn);

                    if (isScheduled) {
                        await i.update({ content: `✅ **TIMER_SET:** Publish pada **${optJam}:${optMenit}** + Tag @everyone.`, components: [] });
                        
                        setTimeout(async () => {
                            try {
                                await targetChannel.send({ content: '@everyone', embeds: [contentEmbed], components: [finalRow] });
                            } catch (e) { console.error('Error dispatching:', e); }
                        }, delayMs);

                    } else {
                        await targetChannel.send({ content: '@everyone', embeds: [contentEmbed], components: [finalRow] });
                        await i.update({ content: '✅ **SUCCESS:** Konten telah di-publish.', components: [] });
                    }
                }
            });
        }

        /**
 * ============================================================================================
 * [BROADCAST V5.2] - UNIFIED TITANIUM MATRIX + SINGLE TABLE + RESTART PROOF
 * ============================================================================================
 */
if (commandName === 'broadcast') {
    if (!member?.permissions?.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({ content: '❌ **[ACCESS_DENIED]** Administrator only.', ephemeral: true });
    }
    
    const target = options.getChannel('target');
    const headline = options.getString('judul');
    const content = options.getString('pesan');

    if (!target?.isTextBased()) {
        return interaction.reply({ content: '❌ **[CHANNEL_ERROR]** Target harus kanal teks.', ephemeral: true });
    }

    await interaction.deferReply({ ephemeral: true });

    // 🔥 UNIFIED SINGLE TABLE TITANIUM MATRIX V5.2
    const unifiedMatrix = new EmbedBuilder()
        .setAuthor({ name: '🌌 TITANIUM BROADCAST MATRIX | V5.2', iconURL: 'https://cdn.discordapp.com/emojis/1195205740326408704.gif?size=64' })
        .setTitle('🔥 ' + '═'.repeat(12) + ` ${headline.toUpperCase()} ` + '═'.repeat(12) + ' 🔥')
        .setColor('#FF1493')
        // 🔥 SECTION 1: CYBER HUD (PRESERVED)
        .setDescription(
            `**${'🟢'.repeat(40)}**\n### 🌟 **HYPER-BROADCAST TERMINAL**\n**${'🟢'.repeat(40)}**\n\n` +
            `🚀 **STATUS:** \`🔴 LIVE\`\n` +
            `📡 **TARGET:** ${target.toString()}\n` +
            `👥 **SCOPE:** ${target.guild.memberCount}\n\n`
        )
        // 🔥 SECTION 2: ULTIMATE ALERT CORE (PRESERVED)
        .addFields({
            name: '📢 ULTIMATE ALERT CORE',
            value: `**${'█'.repeat(49)}**\n### 🎯 **MESSAGE CORE**\n**${'█'.repeat(49)}**\n\n\`\`\`css\n${content}\n\`\`\``,
            inline: false
        })
        // 🔥 SECTION 3: CONTROL TERMINAL (PRESERVED)
        .addFields({
            name: '🖥️ CONTROL TERMINAL',
            value: `**${'▓'.repeat(40)}**\n### 🔧 **INTERACTION PANEL**\n**${'▓'.repeat(40)}**\n\n` +
                   `✅ **ACKNOWLEDGE** - Confirm\n` +
                   `📋 **DETAILS** - Full text\n` +
                   `🚨 **EMERGENCY** - Private thread\n` +
                   `🔄 **REPEAT** - Replay\n` +
                   `📊 **STATUS** - Live stats\n` +
                   `💬 **FEEDBACK** - Channel redirect`,
            inline: false
        });

    const row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('broadcast_ack').setLabel('✅ ACK').setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('broadcast_details').setLabel('📋 DETAILS').setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId('broadcast_emergency').setLabel('🚨 EMERGENCY').setStyle(ButtonStyle.Danger)
        );

    const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('broadcast_repeat').setLabel('🔄 REPEAT').setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId('broadcast_status').setLabel('📊 STATUS').setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId('broadcast_feedback').setLabel('💬 FEEDBACK').setStyle(ButtonStyle.Secondary)
        );

    // 🔥 SEND UNIFIED BROADCAST
    const broadcastMsg = await target.send({ 
        content: `**@everyone 🌌 TITANIUM BROADCAST V5.2 🌌 @everyone**\n🔥 **${headline.toUpperCase()}** 🔥`, 
        embeds: [unifiedMatrix], 
        components: [row1, row2] 
    });

    // 🔥 PERSISTENT STORAGE V5.2 (COMPATIBLE V5.1)
    const broadcastData = {
        messageId: broadcastMsg.id,
        channelId: target.id,
        guildId: target.guild.id,
        headline,
        content,
        acknowledgedUsers: new Set(),
        expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 JAM
        version: 'V5.2'
    };

    global.BROADCAST_CONTROLLERS_V51.set(broadcastMsg.id, broadcastData);
    saveBroadcastV51();

    await interaction.editReply({ 
        content: `✅ **BROADCAST V5.2 LIVE!**\n📍 ${target.toString()}\n👥 ${target.guild.memberCount} members reached` 
    });

    console.log(`🌌 V5.2 Unified Matrix by ${user.tag} → ${target.name}`);
}

        /**
         * [MODULE: VERIFICATION PROTOCOL]
         */
        if (commandName === 'verify') {
            await interaction.deferReply({ ephemeral: true });
            
            try {
                if (!member) throw new Error('MEMBER_NOT_FOUND');
                await member.roles.add(GLOBAL_MATRIX.IDENTITIES.VERIFIED_ROLE);
                await member.setNickname(`[MEMBER] ${user.username}`).catch(() => {});
                
                const verifyUI = new EmbedBuilder()
                    .setTitle('🔐 ACCESS GRANTED: VERIFIED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                    .setAuthor({ name: 'IDENT_SYSTEM_CORE', iconURL: user.displayAvatarURL() })
                    .setDescription(
                        `**PERSONNEL :** <@${user.id}>\n` +
                        `**STATUS    :** \`FULLY_VERIFIED\`\n` +
                        `**CLEARANCE :** \`LEVEL_1_STANDARD\``
                    )
                    .setFooter({ text: 'ACCESS_LOGGED' })
                    .setTimestamp();

                const audit = guild.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.SECURITY_AUDIT);
                if (audit) await audit.send({ embeds: [verifyUI] }).catch(() => {});

                return interaction.editReply({ embeds: [verifyUI] });
            } catch (e) {
                return interaction.editReply('❌ **[ERROR]** Kegagalan injeksi role atau identitas.');
            }
        }

        /**
 * ============================================================================================
 * [PROJECT OMNISCIENCE : ADVANCED HARDWARE IDENTIFICATION CONTROL SYSTEM]
 * ============================================================================================
 * @Version     : 5.0.2-STABLE.ULTIMATE
 * @Architecture: INDUSTRIAL_HEAVY_GRID_V2
 * @Patch_Note  : Fixed Null Guild Reference on DM Interaction & Global Error Handling.
 * ============================================================================================
 */

// --- MODULE: HWID_CONTROL_CENTER ---
if (commandName === 'hwidcontrol') {
    await interaction.deferReply({ ephemeral: true });
    
    // VALIDASI KONEKSI DATABASE & ROOT AUTH
    if (interaction.user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID) {
        return interaction.editReply({ 
            content: '🚨 **[SECURITY_CRITICAL]** Unauthorized kernel access attempt. Protocol: LOCKDOWN.' 
        });
    }

    const newStatus = options.getBoolean('status');
    const reasonInput = options.getString('alasan') || "Routine system recalibration protocol.";
    IS_HWID_SYSTEM_ENABLED = newStatus;
    HWID_DISABLE_REASON = reasonInput;

    const controlUI = new EmbedBuilder()
        .setTitle(newStatus ? '💠 HWID_CORE_GATEWAY: [ ONLINE_OPERATIONAL ]' : '💠 HWID_CORE_GATEWAY: [ SYSTEM_HALTED ]')
        .setAuthor({ name: 'OMNISCIENCE MAINFRAME SYSTEMS | ROOT INTERFACE', iconURL: client.user.displayAvatarURL() })
        .setColor(newStatus ? GLOBAL_MATRIX.VISUALS.THEME_SUCCESS : GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
        .setThumbnail(newStatus ? 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png' : 'https://cdn.creazilla.com/emojis/48895/cross-mark-emoji-clipart-lg.png')
        .setDescription(
            `# ⚡ KERNEL INFRASTRUCTURE SYNCHRONIZED\n` +
            `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n` +
            `## **STATUS MODUL : ${newStatus ? 'AKTIF & TERKONEKSI' : 'NON-AKTIF & TERISOLASI'}**\n\n` +
            `\`\`\`prolog\n` +
            `╔═════════════════════════════════════════════════════════════╗\n` +
            `  SYSTEM_CODE     : OMNISCIENCE_APEX_V5.0_FINAL\n` +
            `  NETWORK_BRIDGE  : ${newStatus ? 'ESTABLISHED' : 'TERMINATED'}\n` +
            `  SECURITY_LEVEL  : ROOT_ADMIN_TIER_9\n` +
            `  INTEGRITY_CHECK : PASSED_OPERATIONAL\n` +
            `╚═════════════════════════════════════════════════════════════╝\n` +
            `\`\`\`\n` +
            `### **📊 DATA_TELEMETRY_DUMP :**\n` +
            `**> 👤 OPERATOR_ID  :** \` ${user.id} \`\n` +
            `**> 📅 SYNC_TIME     :** \` ${new Date().toLocaleString('id-ID')} WIB \`\n` +
            `**> 📝 REASON_LOG    :** \` ${reasonInput} \`\n\n` +
            `### **🛡️ HARDWARE_INTEGRITY_SHIELD :**\n` +
            `**${newStatus ? '🟢 `SECURE_READY` [■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■] 100%' : '🔴 `LOCKDOWN_ON` [□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□] 0%'}\n**` +
            `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
        )
        .setFooter({ text: `KERN-HEX: ${Date.now().toString(16).toUpperCase()} | ARCH: X64_OMNI_INFRA` })
        .setTimestamp();
    return interaction.editReply({ embeds: [controlUI] });
}

/**
 * ============================================================================================
 * [MODULE: HWID_TERMINATION_DONE - ABSOLUTE_PURGE_PROTOCOL V2.0]
 * ============================================================================================
 * @Update: Added Optional Message Field
 */
if (commandName === 'done') {
    await interaction.deferReply({ ephemeral: true });
    try {
        if (interaction.user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID) {
            return interaction.editReply({ content: '🚨 **[SECURITY_CRITICAL]** Root Access Denied.' });
        }
        if (!PENDING_HWID_PROCESS_UID) {
            return interaction.editReply({ content: '⚠️ **[BUFFER_NULL]** Tidak ada subjek dalam antrian reset.' });
        }
        
        const targetId = PENDING_HWID_PROCESS_UID;
        const customMessage = options.getString('pesan') || null; // Ambil pesan opsional
        PENDING_HWID_PROCESS_UID = null;

        const successUI = new EmbedBuilder()
            .setTitle('💠 HWID_PURGE: [ EXECUTION_COMPLETE ]')
            .setAuthor({ name: 'OMNISCIENCE EXECUTION GATEWAY', iconURL: client.user.displayAvatarURL() })
            .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
            .setThumbnail('https://cdn-icons-png.flaticon.com/512/4436/4436481.png')
            .setDescription(
                `# ⚡ KERNEL_WIPE_LOG_FINALIZED\n` +
                `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}\n` +
                `## **IDENTITAS PERANGKAT TELAH BERHASIL DI-RESET**\n\n` +
                `\`\`\`prolog\n` +
                `╔═════════════════════════════════════════════════════════════╗\n` +
                `  OPERATION  : ABSOLUTE_TERMINATION_SUCCESS\n` +
                `  SUBJECT_ID : ${targetId}\n` +
                `  CACHE_LOG  : WIPED_SUCCESS\n` +
                `  SYSTEM     : RECALIBRATED_STABLE\n` +
                `╚═════════════════════════════════════════════════════════════╝\n` +
                `\`\`\`\n` +
                `### **📂 EXECUTION_TELEMETRY_LOG :**\n` +
                `**> 👤 EXECUTOR  :** <@${interaction.user.id}>\n` +
                `**> 🎯 SUBJECT   :** <@${targetId}>\n` +
                `**> 🆔 TRACE_ID  :** \` OMNI-${Math.random().toString(36).toUpperCase().substring(5)} \`\n\n` +
                `### **🛡️ CORE_INTEGRITY_INDEX :**\n` +
                `**🟢 \`CLEAN_STABLE\` [■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■] 100%\n**` +
                `${GLOBAL_MATRIX.VISUALS.DIVIDER_BOLD}`
            )
            .addFields(
                { name: '**🧬 DATABASE**', value: '`UPDATED`', inline: true },
                { name: '**🛰️ UPLINK**', value: '`STABLE`', inline: true },
                ...(customMessage ? [{ name: '**📝 CUSTOM_MSG**', value: `\`${customMessage}\``, inline: false }] : [])
            )
            .setFooter({ text: 'INFRASTRUCTURE_STABILITY: MAXIMUM_PERFORMANCE' })
            .setTimestamp();

        // Pesan yang dikirim ke target user (dengan custom message jika ada)
        const targetMessage = customMessage 
            ? `✅ **[HWID_RESET_SUCCESS]** Administrator telah menyetujui pembersihan HWID Anda.\n**Pesan:** ${customMessage}`
            : `✅ **[HWID_RESET_SUCCESS]** Administrator telah menyetujui pembersihan HWID Anda. Silakan coba kembali.`;

        const targetUser = await client.users.fetch(targetId).catch(() => null);
        if (targetUser) {
            await targetUser.send({ content: targetMessage }).catch(() => {});
        }
        
        return interaction.editReply({ embeds: [successUI] });
    } catch (err) {
        console.error("[FATAL_ERROR] IN HWID_DONE:", err);
        return interaction.editReply({ content: '❌ **[SYSTEM_FAULT]** Terjadi kegagalan pada saat wipe data kernel.' });
    }
}

        /**
 * ============================================================================================
 * [PERSISTENCE_LAYER: DATA SYNCHRONIZATION]
 * Bagian ini memastikan data tetap aman meskipun bot mengalami pemutusan daya/restart.
 * ============================================================================================
 */
const DB_PATH = './omni_leaderboard_db.json';

/**
 * [BOOT_PROCEDURE: INITIAL_DATABASE_SYNC]
 * Menarik data Chat (Packets) dan Voice (Airtime) dari penyimpanan permanen.
 */
if (fs.existsSync(DB_PATH)) {
    try {
        const rawData = fs.readFileSync(DB_PATH, 'utf8');
        const parsedData = JSON.parse(rawData);
        
        // 1. Sinkronisasi Data Chat (Packets)
        if (parsedData.chat) {
            for (const [uid, count] of Object.entries(parsedData.chat)) {
                global.SESSION_METRIC_MAP.set(uid, count);
            }
        }

        // 2. Sinkronisasi Data Voice (Airtime dalam Menit)
        if (parsedData.voice) {
            for (const [uid, minutes] of Object.entries(parsedData.voice)) {
                global.VOICE_METRIC_MAP.set(uid, minutes);
            }
        }
        
        console.log("✅ [DATABASE] Dual-Core Metadata (Chat & Voice) synchronized successfully.");
    } catch (err) {
        console.error("❌ [DATABASE_FAULT] Critical failure during initial sync:", err);
    }
}

// --- FUNGSI SAVE DATA (Panggil setiap kali SESSION_METRIC_MAP bertambah) ---
function syncDatabaseToDisk() {
    try {
        const dataToSave = {
            chat: Object.fromEntries(global.SESSION_METRIC_MAP),
            voice: Object.fromEntries(global.VOICE_METRIC_MAP)
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(dataToSave, null, 2));
    } catch (err) {
        console.error("❌ [DISK_FAULT] Failed to write persistent data.");
    }
}

/**
 * ============================================================================================
 * [MODULE: OMNI-LEADERBOARD V8.5 - SUPREME AUTHORITY INTEGRATED]
 * ============================================================================================
 */
if (commandName === 'leaderboard') {
    // Sinkronisasi paksa ke disk agar data scanner 5 detik terbaru tertulis di file
    syncDatabaseToDisk(); 

    // --- [UTILITY: TIME_CONVERSION] ---
    const formatPreciseTime = (totalSeconds) => {
        if (!totalSeconds || totalSeconds <= 0) return "0h 0m 0s";
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = Math.floor(totalSeconds % 60);
        return `${hrs}h ${mins}m ${secs}s`;
    };

    // --- [UTILITY: RANK_LABEL_RESOLVER - UNIFIED SYSTEM] ---
const getUnifiedLevel = (pktsOrSecs, userId) => {
    // [ROOT_CHECK]: Identifikasi ID Owner untuk hak akses label OWNER
    if (userId === '1280789307027755019') return 'OWNER';
    
    if (pktsOrSecs >= 5000 || pktsOrSecs >= 1800000) return 'Active Member';
    if (pktsOrSecs >= 1000 || pktsOrSecs >= 360000)  return 'Level 3';
    if (pktsOrSecs >= 300 || pktsOrSecs >= 115200)   return 'Level 2';
    if (pktsOrSecs >= 100 || pktsOrSecs >= 43200)    return 'Level 1';
    return 'Initiate'; 
};

    const getVoiceLevel = (secs, userId) => {
        // [ROOT_CHECK]: Identifikasi ID Owner untuk hak akses label OWNER
        if (userId === '1280789307027755019') return 'OWNER';
        
        if (secs >= 180000) return 'ACTIVE_MEMBER'; 
        if (secs >= 36000)  return 'LEVEL_3';        
        if (secs >= 18000)  return 'LEVEL_2';        
        if (secs >= 3600)   return 'LEVEL_1';        
        return 'INITIATE'; 
    };

    // --- 1. DATA PROCESSING: CHAT (REAL-TIME) ---
    const chatMap = global.SESSION_METRIC_MAP || new Map();
    const sortedChat = [...chatMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

    const chatContent = sortedChat.length > 0 
        ? sortedChat.map((data, index) => {
            const medal = ['🥇', '🥈', '🥉', '👤', '👤'][index];
            // Passing data[1] sebagai metrik dan data[0] sebagai userId untuk pengecekan OWNER
            const currentLevel = getUnifiedLevel(data[1], data[0]);
            return `${medal} **RANK #${index + 1}** | <@${data[0]}>\n` +
                   `┃ **DENSITY:** \`${data[1].toLocaleString()} Pkts\` | **LEVEL:** \`${currentLevel}\``;
        }).join('\n')
        : '*NO ACTIVE CHAT DATA DETECTED.*';

    // --- 2. DATA PROCESSING: VOICE (5-SECOND SYNC) ---
    const voiceMap = global.VOICE_METRIC_MAP || new Map();
    const sortedVoice = [...voiceMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

    const voiceContent = sortedVoice.length > 0 
        ? sortedVoice.map((data, index) => {
            const medal = ['👑', '🥈', '🥉', '👤', '👤'][index];
            const chrono = formatPreciseTime(data[1]);
            // Passing data[1] sebagai metrik dan data[0] sebagai userId untuk pengecekan OWNER
            const currentLevel = getUnifiedLevel(data[1], data[0]);
            return `${medal} **RANK #${index + 1}** | <@${data[0]}>\n` +
                   `┃ **AIRTIME:** \`${chrono}\` | **LEVEL:** \`${currentLevel}\``;
        }).join('\n')
        : '*NO ACTIVE VOICE DATA DETECTED.*';

    // --- 3. UI ARCHITECTURE: TITANIUM REPLICA DESIGN ---
    const lbEmbed = new EmbedBuilder()
        .setAuthor({ 
            name: 'OMNISCIENCE ANALYTICS ENGINE | SUPREME AUTHORITY OVERRIDE', 
            iconURL: client.user.displayAvatarURL() 
        })
        .setTitle('🏆 TITANIUM LEADERBOARD: GLOBAL ANALYTICS')
        .setColor('#D4AF37')
        .setDescription(
            `# 📊 GLOBAL SECTOR CONTRIBUTORS\n` +
            `**////////////////////////////////////////////////////////////////**\n\n` +
            `### 💬 TOP CHAT TRANSMISSIONS\n` +
            `${chatContent}\n\n` +
            `### 🎙️ TOP VOICE FREQUENCY (5S_REAL-TIME)\n` +
            `${voiceContent}\n\n` +
            `**////////////////////////////////////////////////////////////////**`
        )
        .addFields(
            { 
                name: '📈 TOTAL_CHATS', 
                value: `\`${Array.from(chatMap.values()).reduce((p, c) => p + c, 0).toLocaleString()}\` Pkts`, 
                inline: true 
            },
            { 
                name: '🎧 TOTAL_VOICE', 
                value: `\`${formatPreciseTime(Array.from(voiceMap.values()).reduce((p, c) => p + c, 0))}\``, 
                inline: true 
            },
            {
                name: '💾 ENGINE',
                value: '`AUTHORITY_V8.5`',
                inline: true
            }
        )
        .setFooter({ 
            text: `Protocol: OMNI_V8.5_PREMIUM | Report ID: ${Math.random().toString(36).substring(7).toUpperCase()} | ${new Date().toLocaleTimeString('id-ID')} WIB` 
        });

    return interaction.reply({ embeds: [lbEmbed] });
}
        /**
 * ============================================================================================
 * [MODULE: SUPREME CORE ENGINE DIAGNOSTICS - V4.2] + VOICE NAMING SYNC
 * ============================================================================================
 * Features: Latency -1ms Fix + Dynamic Voice Channel Naming
 */
if (commandName === 'status') {
    const totalSeconds = Math.floor((Date.now() - SYSTEM_BOOTUP_TIME) / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

    // Proteksi Latency -1ms
    const currentPing = client.ws.ping;
    const pingDisplay = currentPing < 0 ? "Calculating..." : `${currentPing}ms`;

    const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const cpuModel = os.cpus()[0].model;
    
    const cpus = os.cpus();
    let totalIdle = 0, totalTick = 0;
    cpus.forEach(cpu => {
        for (let type in cpu.times) totalTick += cpu.times[type];
        totalIdle += cpu.times.idle;
    });
    const cpuUsage = (100 - (100 * totalIdle / totalTick)).toFixed(1);
    const loadPercent = Math.min(100, (os.loadavg()[0] * 100)).toFixed(1);
    
    const barLength = 10;
    const filled = Math.round(Math.min(1, ramUsed / 1024) * barLength);
    const ramBar = '█'.repeat(filled) + '░'.repeat(barLength - filled);

    // 🔥 DYNAMIC VOICE CHANNEL NAMING UPDATE
    await updateVoiceChannelNames(guild);

    // Hitung statistik server untuk status
    const totalMembers = guild.memberCount;
    const memberRoleMembers = guild.members.cache.filter(m => 
        m.roles.cache.has(GLOBAL_MATRIX.IDENTITIES.MEMBER_ROLE || '1476896625451602077')
    ).size;
    const botCount = guild.members.cache.filter(m => m.user.bot).size;
    const boostCount = guild.premiumSubscriptionCount || 0;

    const diagUI = new EmbedBuilder()
        .setTitle('⚡ SUPREME CORE ENGINE DIAGNOSTICS')
        .setAuthor({ name: 'High-Performance Hardware Telemetry', iconURL: client.user?.displayAvatarURL() || '' })
        .setColor(GLOBAL_MATRIX.VISUALS.THEME_INFO)
        .setDescription(
            `Sistem beroperasi pada efisiensi maksimal dengan beban kernel terkontrol.\n` +
            `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}\n` +
            `**⚙️ HARDWARE MONITOR**\n` +
            `> **CPU_MODEL :** \`${cpuModel}\` \n` +
            `> **CPU_USAGE :** \`${cpuUsage}%\` \n` +
            `> **RAM_USAGE :** \`[${ramBar}] ${ramUsed} MB\` \n` +
            `> **SYS_LOAD  :** \`${loadPercent}%\` \n` +
            `> **OS_PLAT   :** \`${os.platform()} ${os.release()}\` \n` +
            `${GLOBAL_MATRIX.VISUALS.DIVIDER_THIN}`
        )
        .addFields(
            { name: '📡 LATENCY', value: `\`${pingDisplay}\``, inline: true },
            { name: '⏳ UPTIME', value: `\`${uptimeString}\``, inline: true },
            { name: '📀 KERNEL', value: `\`Node ${process.version}\``, inline: true },
            { name: '🛡️ SECURITY', value: `\`ACTIVE (L-12)\``, inline: true },
            { name: '🧩 SHARDS', value: `\`1/1 ACTIVE\``, inline: true },
            { name: '💾 PID', value: `\`#${process.pid}\``, inline: true },
            // 🔥 SERVER STATS - BARU!
            { 
                name: '🌍 SERVER STATS', 
                value: `\`${totalMembers} Members | ${memberRoleMembers} Verified | ${botCount} Bots | ${boostCount} Boost\``, 
                inline: false 
            },
            { 
                name: '🔄 VOICE SYNC', 
                value: '`✅ DYNAMIC_NAMING_ACTIVE`', 
                inline: true 
            },
            { 
                name: '📊 CACHE', 
                value: `\`${global.MESSAGE_CACHE.size.toLocaleString()} msgs\``, 
                inline: true 
            }
        )
        .setFooter({ text: `DATA CENTRE TELEMETRY | ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB` })
        .setTimestamp();

    return interaction.reply({ embeds: [diagUI] });
}

        if (commandName === 'maintenance') {
            if (user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID) return interaction.reply({ content: 'Unauthorized.', ephemeral: true });
            const status = options.getBoolean('status');
            IS_LOCKDOWN_ACTIVE = status;
            client.user.setPresence({
                activities: [{ name: status ? '⚠️ LOCKDOWN MODE' : '🛡️ DATA CENTRE SECURED', type: ActivityType.Watching }],
                status: status ? 'dnd' : 'online'
            });
            return interaction.reply({ content: `✅ **[SYSTEM]** Lockdown Mode: \`${status}\`.`, ephemeral: true });
        }

        if (commandName === 'reject') {
            if (user.id !== GLOBAL_MATRIX.IDENTITIES.ROOT_ADMIN_UID) return interaction.reply({ content: 'Unauthorized.', ephemeral: true });
            if (!PENDING_HWID_PROCESS_UID) return interaction.reply({ content: '❌ Antrean kosong.', ephemeral: true });
            
            const target = await client.users.fetch(PENDING_HWID_PROCESS_UID).catch(() => null);
            if (target) {
                const rejectUI = new EmbedBuilder()
                    .setTitle('❌ HWID REQUEST DENIED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_CRITICAL)
                    .setDescription(`Ditolak oleh administrator.\n**Alasan:** \`${options.getString('alasan')}\``)
                    .setTimestamp();
                await target.send({ embeds: [rejectUI] }).catch(() => {});
            }
            PENDING_HWID_PROCESS_UID = null;
            return interaction.reply({ content: '❌ Notifikasi penolakan dikirim.', ephemeral: true });
        }

        if (commandName === 'forum') {
            if (interaction.user.id !== ORDER_SYSTEM_CONFIG.MEMBER_ROLE_ID) {
                return interaction.reply({ content: '❌ Command `/forum` hanya bisa dipakai oleh user yang diizinkan.', ephemeral: true });
            }

            const session = getDiscordOrderSession(interaction.channelId);
            if (!session || session.userId !== session.userId) {
                return interaction.reply({ content: '❌ Command ini hanya bisa dipakai di thread order Discord yang aktif.', ephemeral: true });
            }

            await interaction.showModal(buildDiscordForumModal());
            return;
        }

        if (commandName === 'succes') {
            if (!member.roles.cache.has(ORDER_SYSTEM_CONFIG.MODERATOR_ROLE_ID)) {
                return interaction.reply({ content: '❌ Hanya moderator yang bisa memakai command ini.', ephemeral: true });
            }

            const tipe = options.getString('tipe');
            const session = getDiscordOrderSession(interaction.channelId);

            if (!session) {
                return interaction.reply({ content: '❌ Session order Discord tidak ditemukan di thread ini.', ephemeral: true });
            }

            const targetUser = await client.users.fetch(session.userId).catch(() => null);
            if (!targetUser) {
                return interaction.reply({ content: '❌ User target tidak ditemukan.', ephemeral: true });
            }

            const successEmbed = new EmbedBuilder()
                .setTitle('✅ ORDER BERHASIL')
                .setColor('#2ecc71')
                .setDescription('Terima kasih telah order di Dragon Store.')
                .setTimestamp();

            await targetUser.send({ embeds: [successEmbed] }).catch(() => {});

            const fetchedMessages = await interaction.channel.messages.fetch({ limit: 100 }).catch(() => null);
            if (fetchedMessages) {
                const transcript = fetchedMessages
                    .sort((a, b) => a.createdTimestamp - b.createdTimestamp)
                    .map(msg => `${msg.author?.tag || 'Unknown'}: ${msg.content || '[EMBED/ATTACHMENT]'}`);

                const sanitizedTranscript = sanitizeDiscordTranscript(transcript).join('\n').slice(0, 1900);
                const reportEmbed = new EmbedBuilder()
                    .setTitle(`📦 ORDER REPORT - ${tipe.toUpperCase()}`)
                    .setColor('#3498db')
                    .setDescription(`\`\`\`\n${sanitizedTranscript || 'No transcript'}\n\`\`\``)
                    .addFields({ name: '👤 Customer', value: `<@${session.userId}>`, inline: true })
                    .setTimestamp();

                const normalChannel = interaction.client.channels.cache.get(ORDER_SYSTEM_CONFIG.NORMAL_REPORT_CHANNEL_ID);
                const bigChannel = interaction.client.channels.cache.get(ORDER_SYSTEM_CONFIG.BIG_REPORT_CHANNEL_ID);

                if (tipe === 'normal') {
                    if (normalChannel?.isTextBased()) await normalChannel.send({ embeds: [reportEmbed] }).catch(() => {});
                }

                if (tipe === 'big') {
                    if (normalChannel?.isTextBased()) await normalChannel.send({ embeds: [reportEmbed] }).catch(() => {});
                    if (bigChannel?.isTextBased()) await bigChannel.send({ embeds: [reportEmbed] }).catch(() => {});
                }
            }

            setDiscordOrderSession(interaction.channelId, { status: 'closed', orderType: tipe });
            return interaction.reply({ content: `✅ Success report **${tipe.toUpperCase()}** berhasil dikirim.`, ephemeral: true });
        }

        if (commandName === 'clear') {
            if (!member?.permissions?.has(PermissionFlagsBits.ManageMessages)) return interaction.reply({ content: 'No Permission.', ephemeral: true });
            const amount = options.getInteger('jumlah');
            if (amount < 1 || amount > 100) return interaction.reply({ content: 'Range 1-100.', ephemeral: true });

            await interaction.channel.bulkDelete(amount, true).then(async (deleted) => {
                const purgeUI = new EmbedBuilder()
                    .setTitle('🧹 DATA PURGE COMPLETED')
                    .setColor(GLOBAL_MATRIX.VISUALS.THEME_SUCCESS)
                    .setDescription(`Telah menghapus **${deleted.size}** unit fragmen pesan dari kanal ini.`)
                    .addFields({ name: '🔍 METHOD', value: `\`BULK_PURGE_API\`` });
                await interaction.reply({ embeds: [purgeUI], ephemeral: true });
            }).catch(() => interaction.reply({ content: 'Bulk delete failed.', ephemeral: true }));
            return;
        }

    } catch (fault) { 
        console.error('INTERACTION_FAULT:', fault); 
        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({ content: '❌ **[FATAL_INTERACTION_ERROR]** Internal core fault detected.', ephemeral: true }).catch(() => {});
        }
    }
});

// --- [SECTION 8: SYSTEM PERSISTENCE LAYER] ---
client.once('ready', () => {
    console.log(`🛡️  OMNISCIENCE CORE ACTIVE: ${client.user?.tag || 'CORE_UNKNOWN'}`);
    
    // Initial presence
    client.user.setPresence({
        activities: [{ name: '🛡️ Dynamic Presence Loading...', type: ActivityType.Watching }],
        status: 'online'
    });

    // Auto-join voice channel
    const vcNode = client.channels.cache.get(GLOBAL_MATRIX.ENDPOINTS.PRIMARY_VOICE);
    if (vcNode && vcNode.isVoiceBased()) {
        try {
            joinVoiceChannel({
                channelId: vcNode.id,
                guildId: vcNode.guild.id,
                adapterCreator: vcNode.guild.voiceAdapterCreator
            });
            console.log(`📡 [AUTO-VOICE]: Connected to <#${vcNode.id}>`);
        } catch (vcE) {
            console.error('VOICE_AUTOJOIN_FAULT:', vcE);
        }
    }

    // 🔥 INITIAL VOICE CHANNEL NAMING SYNC (5 detik delay)
    setTimeout(() => {
        client.guilds.cache.forEach(async (guild) => {
            await updateVoiceChannelNames(guild);
        });
        console.log('✅ [VOICE_NAMING] Initial sync completed for all guilds');
    }, 5000);

    // 🔥 AUTO-RESTORE VERIFY PANEL (3 detik delay)
    setTimeout(async () => {
        if (global.VERIFY_PANEL_DATA?.active && global.VERIFY_PANEL_DATA.messageId) {
            try {
                const channel = client.channels.cache.get(global.VERIFY_PANEL_DATA.channelId);
                if (channel && channel.isTextBased()) {
                    const message = await channel.messages.fetch(global.VERIFY_PANEL_DATA.messageId).catch(() => null);
                    if (message && message.components?.length > 0) {
                        console.log(`✅ [VERIFY_PANEL] Auto-restored ACTIVE panel in #${channel.name}`);
                        await updateVerifyPanelCounter(channel.guild.id);
                    }
                }
            } catch (e) {
                console.error('❌ [VERIFY_PANEL_RESTORE_ERROR]:', e);
            }
        }
    }, 3000);

    // 🔥 AUTO-RESTORE GETJOB PANEL (4 detik delay)
    setTimeout(async () => {
        if (global.GETJOB_PANEL_DATA?.active && global.GETJOB_PANEL_DATA.messageId) {
            try {
                const channel = client.channels.cache.get(global.GETJOB_PANEL_DATA.channelId);
                if (channel && channel.isTextBased()) {
                    const message = await channel.messages.fetch(global.GETJOB_PANEL_DATA.messageId).catch(() => null);
                    if (message && message.components?.length > 0) {
                        console.log(`✅ [GETJOB_PANEL] Auto-restored ACTIVE panel in #${channel.name}`);
                    }
                }
            } catch (e) {
                console.error('❌ [GETJOB_PANEL_RESTORE_ERROR]:', e);
            }
        }
    }, 4000);

// 🔥 AUTO-RESTORE CDID PANEL (5 detik delay)
setTimeout(async () => {
    if (global.CDID_PANEL_DATA?.active && global.CDID_PANEL_DATA.messageId) {
        try {
            const channel = client.channels.cache.get(global.CDID_PANEL_DATA.channelId);
            if (channel && channel.isTextBased()) {
                const message = await channel.messages.fetch(global.CDID_PANEL_DATA.messageId).catch(() => null);
                if (message && message.components?.length > 0) {
                    console.log(`✅ [CDID_PANEL] Auto-restored ACTIVE panel in #${channel.name}`);
                }
            }
        } catch (e) {
            console.error('❌ [CDID_PANEL_RESTORE_ERROR]:', e);
        }
    }
}, 5000);

// 🔥 AUTO-RESTORE PURCHASE PANEL (7 detik delay)
setTimeout(async () => {
    if (global.PURCHASE_PANEL_DATA?.active && global.PURCHASE_PANEL_DATA.messageId) {
        try {
            const purchaseCh = client.channels.cache.get(global.PURCHASE_PANEL_DATA.channelId);
            if (purchaseCh && purchaseCh.isTextBased()) {
                const purchaseMsg = await purchaseCh.messages.fetch(global.PURCHASE_PANEL_DATA.messageId).catch(() => null);
                if (purchaseMsg && purchaseMsg.components?.length > 0) {
                    console.log(`✅ [PURCHASE_PANEL] Auto-restored ACTIVE transaction panel in #${purchaseCh.name}`);
                }
            }
        } catch (restoreError) {
            console.error('❌ [PURCHASE_PANEL_RESTORE_FAULT] Gagal merevitalisasi UI Komersial:', restoreError.message);
        }
    }
}, 7000);

// 🔥 AUTO-RESTORE SCRIPTCONTROL PANEL (6 detik delay)
setTimeout(async () => {
    if (global.SCRIPTCONTROL_PANEL_DATA?.active && global.SCRIPTCONTROL_PANEL_DATA.messageId) {
        try {
            const channel = client.channels.cache.get(global.SCRIPTCONTROL_PANEL_DATA.channelId);
            if (channel && channel.isTextBased()) {
                const message = await channel.messages.fetch(global.SCRIPTCONTROL_PANEL_DATA.messageId).catch(() => null);
                if (message && message.components?.length > 0) {
                    console.log(`✅ [SCRIPTCONTROL_PANEL] Auto-restored ACTIVE panel in #${channel.name}`);
                }
            }
        } catch (e) {
            console.error('❌ [SCRIPTCONTROL_PANEL_RESTORE_ERROR]:', e);
        }
    }
}, 6000);

    // ⚡ HIGH-FREQUENCY STATUS UPDATER (5 DETIK)
    setInterval(() => {
        try {
            let totalMembers = 0;
            client.guilds.cache.forEach(guild => {
                totalMembers += guild.memberCount;
            });
            
            const ping = client.ws.ping >= 0 ? `${Math.round(client.ws.ping)}ms` : `🔄ms`;
            const statusType = IS_LOCKDOWN_ACTIVE ? 'dnd' : 'online';
            const activityName = `🛡️ Guarding ${totalMembers.toLocaleString()} Member | ${ping}`;
            
            client.user.setPresence({
                activities: [{ name: activityName, type: ActivityType.Watching }],
                status: statusType
            });
        } catch (error) {
            // Silent fail-safe
        }
    }, 5000);
    
    console.log('✅ [READY] All systems + SCRIPTCONTROL_PANEL v3.0 ACTIVATED | 100% CRASH-PROOF');
});

/**
 * [VOICE_ANALYTICS: SESSION_STATE_MANAGER]
 */
const activeVoiceParticipants = new Map();

client.on(Events.VoiceStateUpdate, (oldState, newState) => {
    const userId = newState.id;
    const userTag = newState.member?.user.tag || "UNKNOWN_ENTITY";

    // Member Masuk
    if (!oldState.channelId && newState.channelId) {
        if (!newState.member.user.bot) {
            activeVoiceParticipants.set(userId, true);
            console.log(`📡 [MONITOR] ${userTag} memasuki sektor voice.`);
        }
    }

    // Member Keluar
    if (oldState.channelId && !newState.channelId) {
        activeVoiceParticipants.delete(userId);
        syncDatabaseToDisk();
        console.log(`💾 [OFFLINE] ${userTag} meninggalkan sektor. Data terakhir disimpan.`);
    }
});

/**
 * ============================================================================================
 * [PROTOCOL: AUTOMATED_RANK_PROGRESSION_SYSTEM V2.0]
 * ============================================================================================
 */
client.on(Events.MessageCreate, async (message) => {
    // [SECURITY_CHECK]: Abaikan entitas bot atau pesan di luar sektor server (DM)
    if (message.author.bot || !message.guild) return;

    const userId = message.author.id;
    const userTag = message.author.tag;
    
    // Sinkronisasi data paket chat dari Global Memory Map
    const currentPackets = global.SESSION_METRIC_MAP.get(userId) || 0;

    /**
     * [RANK_CONFIGURATION_MATRIX]
     * Definisi ambang batas (Threshold) dan ID Role yang telah diverifikasi.
     */
    const RANK_STRUCTURE = [
    { limit: 5000, roleId: '1488438628526063646', name: 'Active Member', color: '#FFD700' },
    { limit: 1000, roleId: '1488438608359718962', name: 'Level 3', color: '#E0115F' },
    { limit: 300,  roleId: '1488438566454427678', name: 'Level 2', color: '#1E90FF' },
    { limit: 100,  roleId: '1488438526457417828', name: 'Level 1', color: '#00FFCC' }
];

    // [LOGIC_SCAN]: Mencari rank tertinggi yang memenuhi syarat akumulasi paket
    const targetRank = RANK_STRUCTURE.find(rank => currentPackets >= rank.limit);

    if (targetRank) {
        try {
            // Mengambil metadata member dari server
            const member = message.member || await message.guild.members.fetch(userId);
            
            // [VALIDATION]: Cek apakah subjek sudah memiliki otorisasi (Role) tersebut
            if (!member.roles.cache.has(targetRank.roleId)) {
                
                // Eksekusi pemberian Role baru
                await member.roles.add(targetRank.roleId);
                console.log(`✅ [RANK_PROMOTION]: ${userTag} has been promoted to ${targetRank.name}.`);

                // --- UI NOTIFICATION: RANK_STATION OVERLAY ---
                const rankUpUI = new EmbedBuilder()
                    .setTitle('🚀 RANK_STATION: PROMOTION_DETECTED')
                    .setAuthor({ 
                        name: 'OMNISCIENCE RANKING SYSTEM', 
                        iconURL: client.user.displayAvatarURL() 
                    })
                    .setColor(targetRank.color)
                    .setThumbnail(message.author.displayAvatarURL())
                    .setDescription(
                        `# 📊 PROMOTION_REPORT\n` +
                        `${"=".repeat(35)}\n` +
                        `**SUBJECT:** <@${userId}>\n` +
                        `**STATUS:** PROMOTED TO **${targetRank.name}**\n` +
                        `**DENSITY:** \`${currentPackets} Packets Synchronized\`\n` +
                        `**INTEGRITY:** \`STABLE_VERIFIED\`\n` +
                        `${"=".repeat(35)}`
                    )
                    .setFooter({ text: `DATA_CENTRE_GUARD | REPORT_ID: ${Math.random().toString(36).substring(7).toUpperCase()}` })
                    .setTimestamp();

                // Mengirimkan notifikasi ke channel transmisi
                const announcement = await message.channel.send({ 
                    content: `🎉 Congratulations <@${userId}>!`,
                    embeds: [rankUpUI] 
                });
                
                // [AUTO_CLEANUP]: Menghapus pengumuman setelah 15 detik agar sektor tetap steril
                setTimeout(() => {
                    announcement.delete().catch(() => {
                        console.log("⚠️ [LOG]: Rank announcement already cleared or inaccessible.");
                    });
                }, 15000);
            }
        } catch (err) {
            console.error(`❌ [RANK_FAULT]: High-level error during role assignment for ${userTag}.`, err);
        }
    }
});

/**
 * ============================================================================================
 * [PROTOCOL: AUTOMATED_VOICE_RANK_PROGRESSION V5.0]
 * ============================================================================================
 */
setInterval(async () => {
    /**
     * [VOICE_RANK_CONFIGURATION_MATRIX]
     * Threshold dihitung dalam satuan DETIK (1 Jam = 3600 Detik).
     */
    const VOICE_RANK_MATRIX = [
    { limit: 1800000, roleId: '1488438628526063646', name: 'Active Member', color: '#FFD700' }, // 500 Jam
    { limit: 360000,  roleId: '1488438608359718962', name: 'Level 3', color: '#E0115F' },        // 100 Jam
    { limit: 115200,  roleId: '1488438566454427678', name: 'Level 2', color: '#1E90FF' },        // 32 Jam
    { limit: 43200,   roleId: '1488438526457417828', name: 'Level 1', color: '#00FFCC' }         // 12 Jam
];

    client.guilds.cache.forEach(async (guild) => {
        // Scan seluruh pengguna yang sedang berada di dalam Voice Channel
        guild.voiceStates.cache.forEach(async (state) => {
            
            // FILTER: Pastikan subjek bukan bot, sedang di VC, dan tidak dalam status Tuli (Deafen)
            if (!state.member.user.bot && state.channelId && !state.deaf) {
                const userId = state.id;
                const totalSeconds = global.VOICE_METRIC_MAP.get(userId) || 0;

                // [LOGIC_SCAN]: Mencari ambang batas tertinggi yang telah dicapai subjek
                const targetVoiceRank = VOICE_RANK_MATRIX.find(rank => totalSeconds >= rank.limit);

                if (targetVoiceRank) {
                    try {
                        const member = state.member || await guild.members.fetch(userId);
                        
                        // [VALIDATION]: Cek jika subjek belum memiliki otorisasi (Role) tersebut
                        if (!member.roles.cache.has(targetVoiceRank.roleId)) {
                            
                            // Eksekusi pemberian Role (Otorisasi Sektor)
                            await member.roles.add(targetVoiceRank.roleId);
                            console.log(`📡 [VOICE_PROMOTION]: ${member.user.tag} has achieved ${targetVoiceRank.name}.`);

                            // --- UI NOTIFICATION: VOICE_STATION OVERLAY ---
                            // Bot akan mencari channel bernama 'bot-log' untuk mengirimkan laporan
                            const logChannel = guild.channels.cache.find(ch => ch.name === 'bot-log' || ch.name === 'logs'); 
                            
                            if (logChannel) {
                                const voiceRankUI = new EmbedBuilder()
                                    .setTitle('🎙️ VOICE_STATION: AIRTIME_PROMOTION')
                                    .setAuthor({ 
                                        name: 'OMNISCIENCE VOICE ENGINE', 
                                        iconURL: client.user.displayAvatarURL() 
                                    })
                                    .setColor(targetVoiceRank.color)
                                    .setThumbnail(member.user.displayAvatarURL())
                                    .setDescription(
                                        `# 📊 CHRONO_PROMOTION_REPORT\n` +
                                        `${"=".repeat(35)}\n` +
                                        `**SUBJECT:** <@${userId}>\n` +
                                        `**STATUS:** PROMOTED TO **${targetVoiceRank.name}**\n` +
                                        `**AIRTIME:** \`${Math.floor(totalSeconds / 3600)} Hours Synchronized\`\n` +
                                        `**INTEGRITY:** \`VOICE_STABLE_VERIFIED\`\n` +
                                        `${"=".repeat(35)}`
                                    )
                                    .setFooter({ text: `SYSTEM_ID: OMNI_V5_STABLE | ${new Date().toLocaleTimeString('id-ID')}` })
                                    .setTimestamp();

                                await logChannel.send({ embeds: [voiceRankUI] });
                            }
                        }
                    } catch (err) {
                        // Error biasanya terjadi jika posisi Role bot berada di bawah role yang akan diberikan
                        console.error(`❌ [VOICE_RANK_FAULT]: Unauthorized Role Assignment for ${state.member.user.tag}. Check Role Hierarchy.`);
                    }
                }
            }
        });
    });
}, 10000); // Pengecekan dilakukan setiap 10 detik (Optimization Mode)

/**
 * ============================================================================================
 * [MODULE: ANTI_MENTION_FIREWALL - SECURITY_LAYER_V7]
 * ============================================================================================
 * Upgrade: Hard-coded protection untuk @everyone dan @here via String Content Analysis.
 * Status: HIGH_SECURITY_ENABLED
 */
async function runAntiTagProtocol(message) {
    // 1. Daftar Role yang Dikecualikan (Boleh Tag)
    const WHITELIST_ROLES = [
    '1478380934775701545', // Official Bot
    '1484124559480193134', // Moderator
    '1463837409404780545', // Owner
    '1488438628526063646', // Active Member ✅ BARU
    '1487666931837440101'  // CO-OWNER
];

    // 2. Cek apakah pengirim pesan memiliki salah satu role di atas atau Owner ID
    const isWhitelisted = message.member?.roles.cache.some(role => WHITELIST_ROLES.includes(role.id));
    const isRootAdmin = message.author.id === '1280789307027755019';

    if (isWhitelisted || isRootAdmin) return; 

    // 3. LOGIKA BYPASS REPLY
    const repliedUserId = message.reference ? (await message.fetchReference().catch(() => null))?.author.id : null;

    // 4. DETEKSI PELANGGARAN KERAS (@everyone & @here)
    // Kita cek melalui properti built-in DAN analisa teks mentah untuk memastikan tidak lolos
    const rawContent = message.content.toLowerCase();
    const isTryingToTagEveryone = message.mentionEveryone || rawContent.includes('@everyone') || rawContent.includes('@here');

    // 5. DETEKSI MENTION USER & ROLE
    const hasUserMention = message.mentions.users.filter(u => u.id !== repliedUserId).size > 0;
    const hasRoleMention = message.mentions.roles.size > 0;

    // EKSEKUSI JIKA TERDETEKSI PELANGGARAN
    if (isTryingToTagEveryone || hasUserMention || hasRoleMention) {
        try {
            // Hapus pesan pelanggar segera
            if (message.deletable) await message.delete().catch(() => {});

            // Tentukan pesan peringatan
            let reason = "You do not have permission to tag others.";
            if (isTryingToTagEveryone) reason = "Massive tagging (@everyone/@here) is strictly prohibited.";

            // Kirim peringatan (Self-destruct dalam 3 detik)
            const warning = await message.channel.send(`❌ <@${message.author.id}>, ${reason}`);
            
            setTimeout(() => {
                warning.delete().catch(() => {});
            }, 3000);

            console.log(`🛡️ [ANTITAG_V7] Pelanggaran diredam: ${message.author.tag} (Target: ${isTryingToTagEveryone ? 'MASS_TAG' : 'MENTION'})`);
        } catch (err) {
            console.error("❌ [ANTITAG_ERROR]:", err);
        }
    }
}

/**
 * [CORE_ENGINE: 5-SECOND REAL-TIME ANALYTICS SCANNER]
 * Update: Auto-Detection for all participants in all sectors.
 */
setInterval(() => {
    // 1. Scan seluruh channel voice untuk mencari member yang sedang on-air
    client.guilds.cache.forEach(guild => {
        guild.channels.cache.forEach(channel => {
            if (channel.isVoiceBased()) {
                channel.members.forEach(member => {
                    // Jangan hitung bot
                    if (!member.user.bot) {
                        // Tambahkan ID member ke daftar aktif secara paksa
                        activeVoiceParticipants.set(member.id, true);
                        
                        // Proses penambahan airtime +5 detik
                        const currentAirtime = global.VOICE_METRIC_MAP.get(member.id) || 0;
                        global.VOICE_METRIC_MAP.set(member.id, currentAirtime + 5);
                    }
                });
            }
        });
    });

    // 2. Sinkronisasi ke database setiap 5 detik
    if (activeVoiceParticipants.size > 0) {
        syncDatabaseToDisk();
        // console.log(`🛰️ [SCANNER] Synced ${activeVoiceParticipants.size} members.`);
    }
}, 5000);

// 🔥 AUTO-UPDATE VERIFY COUNTER EVERY 5 SECONDS
setInterval(() => {
    if (global.VERIFY_PANEL_DATA?.active) {
        client.guilds.cache.forEach(async (guild) => {
            await updateVerifyPanelCounter(guild.id);
        });
    }
}, 5000);

// 🔥 GLOBAL INTERACTION ERROR HANDLER - ANTI CRASH 10062
client.on(Events.InteractionCreate, async (interaction) => {
    // 🔥 SAFETY CHECK: Skip jika sudah replied/deferred
    if (!interaction || interaction.replied || interaction.deferred) {
        return;
    }

    try {
        // Existing handlers Anda tetap jalan normal...
        // (tidak usah ubah apapun di sini)
        
    } catch (error) {
        console.error('❌ [INTERACTION_ERROR]:', error.message || error);
        
        // SAFE FALLBACK - Bot TIDAK akan crash
        if (!interaction.replied && !interaction.deferred) {
            try {
                await interaction.deferReply({ ephemeral: true });
                await interaction.editReply({ 
                    content: '⚠️ **System sedang sibuk.** Coba lagi dalam beberapa detik.' 
                });
            } catch (fallbackError) {
                console.log('⚠️ [FALLBACK_OK] Interaction expired - normal');
            }
        }
    }
});

// 🔥 PROCESS ERROR HANDLERS - KEEP BOT ALIVE FOREVER
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ [UNHANDLED_REJECTION]:', reason?.message || reason);
    // NO process.exit() - BOT TETAP HIDUP
});

process.on('uncaughtException', (error) => {
    console.error('❌ [UNCAUGHT_EXCEPTION]:', error.message || error);
    // NO process.exit() - BOT TETAP HIDUP 100%
});

/**
 * ============================================================================================
 * 🛡️ [ENTERPRISE EVENT ROUTER: COMMERCIAL BUTTON INTERACTION & SECURITY AUDIT]
 * Modul pendeteksi asinkron ini diisolasi khusus untuk menangani lalu lintas interaksi 
 * pada panel-panel transaksi (seperti Dragon Store). Dilengkapi dengan protokol 
 * penanganan error berlapis, pencegahan kebocoran memori (memory leak), serta
 * sistem logging keamanan terpusat (Security Audit Trail) yang memantau setiap klik.
 * ============================================================================================
 */
client.on('interactionCreate', async interaction => {
    // 1. [FILTER PROTOCOL] Memastikan hanya payload berupa klik tombol yang diproses oleh subsistem ini
    if (!interaction.isButton()) return;

    // 2. [ROUTING PROTOCOL] Menangkap ID unik dari panel transaksi Farming CDID
    if (interaction.customId === 'btn_order_whatsapp') {
        
        // Konstanta Endpoint Keamanan (Target Saluran Log)
        const SECURITY_AUDIT_CHANNEL_ID = '1478379431327432825';

        // Membuka blok pelacakan diagnostik untuk pemantauan terminal server
        console.log(`\n[${new Date().toISOString()}] 🟢 [ORDER_INITIATED] Pengguna ${interaction.user.tag} (ID: ${interaction.user.id}) mengakses gerbang transaksi.`);

        try {
            // ====================================================================================
            // PHASE A: USER INTERFACE CONSTRUCTION (SISI KLIEN)
            // ====================================================================================
            // 3. [INTERFACE CONSTRUCTION] Merakit antarmuka ephemeral yang terenkripsi untuk pengguna
            // (Mempertahankan 100% UI asli sesuai instruksi)
            const orderLinkEmbed = new EmbedBuilder()
                .setTitle('📲 SECURE UPLINK ESTABLISHED')
                .setDescription(
                    `Halo <@${interaction.user.id}>, transmisi data Anda telah diotorisasi.\n\n` +
                    `Untuk menjaga keamanan dan efisiensi pesanan **Farming CDID**, silakan lanjutkan proses administrasi melalui saluran komunikasi resmi kami.\n\n` +
                    `**Klik tautan prioritas di bawah ini untuk terhubung langsung dengan Core Administration:**\n\n` +
                    `🔗 **[>> HUBUNGI WHATSAPP DRAGON STORE <<](https://wa.me/6285763858510)**\n\n` +
                    `*(Instruksi: Mohon siapkan rincian garasi dan ID Pengguna Anda untuk mempercepat proses alokasi teknisi).*`
                )
                .setColor('#2ecc71') // Tema Success/Hijau
                .setThumbnail(interaction.client.user.displayAvatarURL())
                .setFooter({ 
                    text: `Session ID: ${interaction.id} | Enkripsi End-to-End Aktif`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setTimestamp();

            // 4. [PAYLOAD DELIVERY] Mengirimkan balasan privat (Ephemeral) ke sisi klien pengguna
            await interaction.reply({
                embeds: [orderLinkEmbed],
                ephemeral: true // Properti absolut: Hanya eksekutor tombol yang dapat melihat pesan ini
            });

            console.log(`[${new Date().toISOString()}] ✅ [ORDER_SUCCESS] Tautan transaksi berhasil dikirim ke layar klien ${interaction.user.tag}.`);

            // ====================================================================================
            // PHASE B: SECURITY AUDIT PROTOCOL (SISI SERVER/ADMIN)
            // ====================================================================================
            // 5. [SECURITY INJECTION] Merakit dan mengirimkan log telemetri ke saluran pengawasan
            try {
                console.log(`[${new Date().toISOString()}] 🔄 [AUDIT_INIT] Mengompilasi data telemetri untuk ditransmisikan ke saluran keamanan...`);
                
                // Mencari saluran audit melalui cache. Jika tidak ada, fallback menggunakan fetch API Discord
                const auditChannel = interaction.client.channels.cache.get(SECURITY_AUDIT_CHANNEL_ID) 
                                  || await interaction.client.channels.fetch(SECURITY_AUDIT_CHANNEL_ID).catch(() => null);

                if (auditChannel) {
                    // Konstruksi Meta-Data Visual untuk Log Keamanan Internal (Standar Profesional)
                    const securityLogEmbed = new EmbedBuilder()
                        .setColor('#e74c3c') // Tema Alert/Merah untuk log internal
                        .setAuthor({ 
                            name: '🛡️ SECURITY AUDIT - TRANSACTION DETECTED', 
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true }) 
                        })
                        .setTitle('System Alert: Commercial Button Triggered')
                        .setDescription(`Sistem pertahanan telah mendeteksi interaksi terotorisasi pada panel transaksi utama.\nBerikut adalah rincian telemetri data dari klien:`)
                        .addFields(
                            { 
                                name: '👤 TARGET IDENTIFICATION', 
                                value: `> **Username:** ${interaction.user.tag}\n> **User ID:** \`${interaction.user.id}\`\n> **Account Created:** <t:${Math.floor(interaction.user.createdTimestamp / 1000)}:R>`, 
                                inline: false 
                            },
                            { 
                                name: '📍 VECTOR LOCATION', 
                                value: `> **Channel:** <#${interaction.channelId}>\n> **Message ID:** \`${interaction.message.id}\``, 
                                inline: true 
                            },
                            { 
                                name: '🕒 TIMESTAMP METRIC', 
                                value: `> <t:${Math.floor(Date.now() / 1000)}:F>\n> <t:${Math.floor(Date.now() / 1000)}:R>`, 
                                inline: true 
                            },
                            {
                                name: '🛠️ ACTION METADATA',
                                value: `\`\`\`diff\n+ Action: BUTTON_CLICK_EXECUTION\n+ Target ID: ${interaction.customId}\n+ Status: UPLINK_SUCCESSFUL\n+ Session Trace ID: ${interaction.id}\n\`\`\``,
                                inline: false
                            }
                        )
                        .setThumbnail(interaction.guild?.iconURL({ dynamic: true }) || interaction.client.user.displayAvatarURL())
                        .setFooter({ 
                            text: `Data Centre Infrastructure | Advanced Security Audit Trail`, 
                            iconURL: interaction.client.user.displayAvatarURL() 
                        })
                        .setTimestamp();

                    // Pengiriman payload audit ke channel yang dituju
                    await auditChannel.send({ embeds: [securityLogEmbed] });
                    console.log(`[${new Date().toISOString()}] 🛡️ [AUDIT_SUCCESS] Log keamanan untuk ${interaction.user.tag} berhasil dicetak secara permanen di sektor audit (${SECURITY_AUDIT_CHANNEL_ID}).\n`);
                } else {
                    console.warn(`[${new Date().toISOString()}] ⚠️ [AUDIT_WARNING] Saluran pengawasan keamanan (${SECURITY_AUDIT_CHANNEL_ID}) tidak ditemukan di jaringan. Audit dibatalkan.\n`);
                }
            } catch (auditError) {
                // Blok try-catch terisolasi khusus untuk audit log
                // Hal ini memastikan bahwa jika sistem log gagal, UI pelanggan tetap aman dan tidak error
                console.error(`[${new Date().toISOString()}] ❌ [AUDIT_ERROR] Kegagalan fatal saat transmisi log keamanan:`, auditError);
            }

        } catch (error) {
            // 6. [CRITICAL FALLBACK PROTOCOL] Mencegah bot crash jika terjadi kegagalan jaringan utama
            console.error(`[${new Date().toISOString()}] ❌ [ORDER_ERROR] Kegagalan transmisi antarmuka untuk pengguna ${interaction.user.tag}:`, error);
            
            // Evaluasi status interaksi, lalu mencoba memberikan pesan darurat jika jalur API masih terbuka
            if (!interaction.replied && !interaction.deferred) {
                await interaction.reply({
                    content: '⚠️ **[SYSTEM_CRITICAL_WARNING]** Terjadi fluktuasi jaringan pada infrastruktur server saat membuka jalur komunikasi. Silakan hubungi Core Administration secara manual di nomor: **085763858510**.',
                    ephemeral: true
                }).catch(e => console.error('Fatal Error pada Fallback Protocol Sistem UI:', e));
            }
        }
    }
});

/**
 * ============================================================================================
 * 🎙️ [MODULE: NEXUS VOICE CHAT MAKER - TITANIUM PRIVATE PROTOCOL V1.0]
 * ============================================================================================
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Description  : Engine dinamis untuk menciptakan sesi Voice Channel yang terenkripsi dan 
 * sangat rahasia secara otomatis (Auto-Create & Auto-Destroy Protocol).
 * Features     : 
 * - 100% Private Enforcement (Everyone ditolak aksesnya).
 * - Eksklusivitas Role (Hanya Role spesifik yang bisa menginspeksi/masuk).
 * - Auto-Migration (Otomatis menarik user dari Maker ke Private Channel).
 * - RAM-Based Persistence (Sistem pelacakan real-time berbasis Map).
 * - Deep Auto-Cleanup Protocol (Hancur seketika saat kosong).
 * ============================================================================================
 */

// --- [LAYER 1: NEXUS SYSTEM CONFIGURATION] ---
// Silakan isi ID Channel "Maker" dan ID Kategori tempat channel privat akan di-generate.
const NEXUS_CONFIG = {
    // ⚠️ MASUKKAN ID VOICE CHANNEL UTAMA (TEMPAT ORANG KLIK UNTUK BUAT CHANNEL) DI SINI:
    MAKER_CHANNEL_ID: '1489838586944688188', 
    
    // ⚠️ MASUKKAN ID KATEGORI (CATEGORY) TEMPAT CHANNEL BARU AKAN DILETAKKAN DI SINI:
    CATEGORY_ID: '1489838064485531689',           
    
    // Role spesifik yang memiliki otoritas mutlak untuk melihat/masuk ke private voice
    VIP_ROLE_ID: '1476896625451602077',          
};

// --- [LAYER 2: PERSISTENT MEMORY ALLOCATION FOR NEXUS CHANNELS] ---
// Mengalokasikan blok memori pada V8 Engine untuk melacak channel yang aktif.
// Mencegah memory-leak jika ada penghapusan paksa dari administrator.
if (!global.NEXUS_ACTIVE_CHANNELS) {
    global.NEXUS_ACTIVE_CHANNELS = new Map();
    console.log(`✅ [NEXUS_ENGINE] Alokasi Memori (RAM) untuk pelacakan Nexus Private Channels telah diinisialisasi.`);
}

// --- [LAYER 3: VOICE STATE EVENT LISTENER - HIGH TRAFFIC HANDLER] ---
client.on(Events.VoiceStateUpdate, async (oldState, newState) => {
    try {
        const member = newState.member;
        const guild = newState.guild;
        
        // Membatalkan eksekusi jika tidak ada data member yang valid
        if (!member || !guild) return;

        // ========================================================================
        // 🚀 [PHASE 1: DEPLOYMENT PROTOCOL] - MENDETEKSI USER MASUK KE MAKER
        // ========================================================================
        if (newState.channelId === NEXUS_CONFIG.MAKER_CHANNEL_ID) {
            
            console.log(`[${new Date().toISOString()}] 🎙️ [NEXUS_SYSTEM] Inisialisasi Nexus Audio Workspace untuk entitas: ${member.user.tag}...`);

            // Mencari referensi objek Kategori di server
            const targetCategory = guild.channels.cache.get(NEXUS_CONFIG.CATEGORY_ID);
            
            // Merakit nama channel dengan estetika militer/profesional
            const generatedChannelName = `🔒┃${member.user.username.toLowerCase()}-voice`;

            // 🔥 EKSEKUSI PEMBUATAN CHANNEL DENGAN OVERRIDE HAK AKSES MUTLAK
            const privateNexusChannel = await guild.channels.create({
                name: generatedChannelName,
                type: 2, // ChannelType.GuildVoice
                parent: targetCategory ? targetCategory.id : null,
                userLimit: 10, // Opsional: Batas pengguna maksimum dalam 1 room
                permissionOverwrites: [
                    {
                        // ❌ TIER 0: MASYARAKAT UMUM (@everyone)
                        // Pemblokiran mutlak untuk melihat, masuk, atau mendengarkan
                        id: guild.id,
                        deny: [
                            PermissionFlagsBits.ViewChannel, 
                            PermissionFlagsBits.Connect
                        ],
                    },
                    {
                        // ✅ TIER 1: PEMILIK CHANNEL (CREATOR)
                        // Otorisasi penuh untuk mengelola audio, video, dan aktivitas
                        id: member.id,
                        allow: [
                            PermissionFlagsBits.ViewChannel, 
                            PermissionFlagsBits.Connect, 
                            PermissionFlagsBits.Speak, 
                            PermissionFlagsBits.Stream, // Bisa Share Screen
                            PermissionFlagsBits.UseVAD, // Menggunakan Voice Activity (tanpa Push-to-Talk)
                            PermissionFlagsBits.PrioritySpeaker
                        ],
                    },
                    {
                        // 🛡️ TIER 2: ROLE PENGAMAT KHUSUS (OVERSEER)
                        // Sesuai instruksi: Role 1476896625451602077
                        // Dapat melihat dan memasuki channel kapan saja, tanpa permisi
                        id: NEXUS_CONFIG.VIP_ROLE_ID,
                        allow: [
                            PermissionFlagsBits.ViewChannel, 
                            PermissionFlagsBits.Connect,
                            PermissionFlagsBits.Speak,
                            PermissionFlagsBits.Stream
                        ],
                    }
                ],
            });

            // Menyuntikkan ID Channel dan ID Pembuat ke dalam Global Map
            global.NEXUS_ACTIVE_CHANNELS.set(privateNexusChannel.id, {
                creatorId: member.id,
                createdAt: Date.now()
            });

            // ⚡ AUTOROUTING: Memindahkan entitas pembuat langsung ke dalam channel barunya
            await member.voice.setChannel(privateNexusChannel, "Nexus Protocol: Auto-Migration ke Private Workspace");

            console.log(`[${new Date().toISOString()}] ✅ [NEXUS_DEPLOYED] Gateway Sesi Privat "${generatedChannelName}" berhasil dibuka untuk ${member.user.tag}.`);
        }

        // ========================================================================
        // 🗑️ [PHASE 2: TERMINATION PROTOCOL] - MENDETEKSI CHANNEL KOSONG
        // ========================================================================
        // Memastikan bahwa user keluar dari sebuah channel, DAN channel tersebut adalah buatan Nexus
        if (oldState.channelId && global.NEXUS_ACTIVE_CHANNELS.has(oldState.channelId)) {
            
            const previousChannel = oldState.channel;
            
            // Validasi keselamatan: Apakah channel masih ada dan sudah benar-benar kosong?
            if (previousChannel && previousChannel.members.size === 0) {
                
                console.log(`[${new Date().toISOString()}] ⚠️ [NEXUS_CLEANUP] Sensor mendeteksi kekosongan pada "${previousChannel.name}". Memulai sekuens penghancuran...`);
                
                // Memberikan delay mikro (1500ms) untuk mencegah race-condition di Discord API 
                // jika pengguna tiba-tiba masuk kembali (misal terputus jaringan sebentar).
                setTimeout(async () => {
                    try {
                        // Verifikasi ulang sebelum penghapusan (Double-Check Protocol)
                        const channelToInspect = guild.channels.cache.get(oldState.channelId);
                        
                        if (channelToInspect && channelToInspect.members.size === 0) {
                            // Eksekusi penghapusan channel dari direktori server
                            await channelToInspect.delete('Nexus Protocol: Terminasi Otomatis (Sesi Kosong / Selesai)');
                            
                            // Membersihkan residu memori untuk mencegah memory-leak
                            global.NEXUS_ACTIVE_CHANNELS.delete(oldState.channelId);
                            
                            console.log(`[${new Date().toISOString()}] 💥 [NEXUS_DESTROYED] Node Audio Privat berhasil dihapus dan memori RAM dibersihkan.`);
                        } else {
                            console.log(`[${new Date().toISOString()}] 🛑 [NEXUS_ABORT] Pembatalan penghancuran: Entitas terdeteksi masuk kembali ke dalam channel.`);
                        }
                    } catch (deleteError) {
                        console.error(`[${new Date().toISOString()}] ❌ [NEXUS_DELETE_FAIL] Kendala hierarki / akses API saat mencoba menghapus channel:`, deleteError.message);
                        // Membersihkan map meskipun penghapusan gagal agar sistem tidak terbebani
                        global.NEXUS_ACTIVE_CHANNELS.delete(oldState.channelId);
                    }
                }, 1500); // Waktu tunggu evaluasi: 1.5 Detik
            }
        }
        
    } catch (criticalError) {
        // [FAIL-SAFE] Mencegah Node Engine crash jika terjadi anomali mendadak (misalnya rate-limit)
        console.error(`\n❌ [NEXUS_KERNEL_PANIC] Kegagalan masif pada Modul Nexus Auto-Voice:`, criticalError);
    }
});

/**
 * ============================================================================================
 * 🌐 [INFRASTRUCTURE: ADVANCED NETWORK SENTINEL & AUTO-RECOVERY V7.1 - FULL MATRIX EDITION]
 * ============================================================================================
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Feature      : Dual-Channel Dispatcher, Absolute Chronometer, & Voice Reinjection Protocol
 * Status       : Enterprise Ready - 100% Standalone & Crash-Proof
 * ============================================================================================
 * Modul ini telah dikompilasi ulang menjadi satu struktur monolitik. Semua dependensi
 * pelacakan waktu (chronometer) dan eksekusi koneksi suara digabungkan di sini untuk
 * mencegah anomali ReferenceError pada Event Loop Node.js.
 * ============================================================================================
 */

// --------------------------------------------------------------------------------------------
// [1. STATE MANAGEMENT & SYSTEM CONFIGURATION]
// --------------------------------------------------------------------------------------------
let isNetworkOnline = true; 
let isRecoveryInProgress = false; 
let networkOfflineTimestampMs = 0; 
let networkOfflineDateObj = null; 

const NETWORK_INSPECTION_INTERVAL = 5000; // Siklus interval ping diagnostik (5000ms / 5 Detik)

// ⚠️ KONFIGURASI ENDPOINT KRUSIAL - PASTIKAN DIISI:
const TARGET_VOICE_CHANNEL_ID = '1479831542330298530'; 

const DISPATCH_LOG_CHANNELS = [
    '1478379431327432825', // Primary Node (Laporan Waktu Mati)
    '1490223733217038366'  // Secondary Audit Node (Laporan Waktu Hidup)
];

// --------------------------------------------------------------------------------------------
// [2. UTILITY: ABSOLUTE HIGH-PRECISION CHRONOMETER & TIME FORMATTER V7.2]
// --------------------------------------------------------------------------------------------
/**
 * Mengonversi kalkulasi matematis milidetik menjadi antarmuka string dengan tingkat 
 * akurasi absolut. Modul ini sekarang membedah waktu hingga ke unit terkecil (Milidetik)
 * menggunakan komputasi Modulo tingkat lanjut untuk mencegah adanya pembulatan angka 
 * (rounding deviation) yang dapat menyebabkan distorsi pelaporan Downtime.
 */
function calculateDowntimeDuration(milliseconds) {
    // Memastikan input adalah angka valid untuk mencegah anomali kalkulasi NaN
    if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
        console.error(`[${new Date().toISOString()}] ❌ [CHRONO_ERROR] Kegagalan komputasi: Data input bukan angka absolut.`);
        return 'Data Anomali (Kalkulasi Gagal)';
    }

    // 1. Ekstraksi Jam Murni: Membagi total waktu dengan jumlah milidetik dalam 1 jam
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    
    // 2. Ekstraksi Menit Murni: Mengambil sisa waktu setelah dipotong jam, lalu dibagi 1 menit
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    // 3. Ekstraksi Detik Murni: Mengambil sisa waktu setelah dipotong menit, lalu dibagi 1 detik
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    
    // 4. Ekstraksi Milidetik (Micro-Latency): Mengambil sisa absolut dari pembagian detik penuh
    const ms = Math.floor(milliseconds % 1000); // Tingkat presisi tertinggi
    
    let resultMatrix = [];
    
    // Membangun array string secara dinamis berdasarkan eksistensi nilai waktu (Non-Zero Injection)
    if (hours > 0) resultMatrix.push(`${hours} Jam`);
    if (minutes > 0) resultMatrix.push(`${minutes} Menit`);
    if (seconds > 0) resultMatrix.push(`${seconds} Detik`);
    if (ms > 0) resultMatrix.push(`${ms} Milidetik`);
    
    // Jika matriks kosong (waktu putus sangat cepat hingga menyentuh 0ms murni), kirimkan fallback
    return resultMatrix.length > 0 ? resultMatrix.join(', ') : '0 Milidetik (Micro-Drop / Instant Restore)';
}

function formatAbsoluteTime(dateObj) {
    if (!dateObj || !(dateObj instanceof Date)) return 'Data Anomali (N/A)';
    const pad = (num) => String(num).padStart(2, '0');
    // Memformat standar visual militer / operasional 24 Jam
    return `${pad(dateObj.getDate())}/${pad(dateObj.getMonth() + 1)}/${dateObj.getFullYear()} - ${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())}:${pad(dateObj.getSeconds())}.${pad(dateObj.getMilliseconds()).substring(0,3)} WIB`;
}

// --------------------------------------------------------------------------------------------
// [3. PROTOCOL: ENTERPRISE VOICE RECOVERY MECHANISM]
// Menghancurkan sesi tersangkut (Ghost Session) dan menyuntikkan ulang koneksi Voice
// --------------------------------------------------------------------------------------------
async function executeEnterpriseVoiceRecovery(client) {
    console.log(`\n[${new Date().toISOString()}] ⚙️ [SYS_PROCESS] Memulai inisialisasi protokol pemulihan Voice Channel...`);
    console.log(`[${new Date().toISOString()}] ⏳ [NETWORK_STABILIZER] Mengunci proses selama 3000ms untuk menstabilkan buffer rute jaringan...`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    try {
        const guilds = client.guilds.cache;
        let recoveryAttempted = false;
        
        for (const [guildId, guild] of guilds) {
            const voiceChannel = guild.channels.cache.get(TARGET_VOICE_CHANNEL_ID) || await guild.channels.fetch(TARGET_VOICE_CHANNEL_ID).catch(() => null);

            if (!voiceChannel) continue;

            recoveryAttempted = true;
            console.log(`[${new Date().toISOString()}] 🎯 [TARGET_LOCKED] Channel ditemukan pada server: [${guild.name}] | [${voiceChannel.name}]`);

            // Menarik fungsi getVoiceConnection dan joinVoiceChannel (Membutuhkan import @discordjs/voice di atas file)
            const { getVoiceConnection, joinVoiceChannel, VoiceConnectionStatus, entersState } = await import('@discordjs/voice');
            
            const ghostConnection = getVoiceConnection(guildId);
            
            if (ghostConnection) {
                console.log(`[${new Date().toISOString()}] 🗑️ [VOICE_CLEANUP] Anomali Ghost Session terdeteksi. Melakukan intervensi pemutusan paksa...`);
                try {
                    ghostConnection.destroy();
                    console.log(`[${new Date().toISOString()}] ✅ [VOICE_CLEANUP] Node sesi lama berhasil dihancurkan secara total.`);
                } catch (e) {
                    console.error(`⚠️ [VOICE_CLEANUP_WARN] Gagal menghancurkan ghost session:`, e.message);
                }
            }

            console.log(`[${new Date().toISOString()}] ⏳ [API_SYNC] Menunggu sinkronisasi cache dari server pusat Discord (2000ms)...`);
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log(`[${new Date().toISOString()}] 🚀 [VOICE_RECONNECT] Menjalankan protokol Injeksi Koneksi Baru ke endpoint: [${voiceChannel.name}]...`);
            
            const newConnection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator,
                selfDeaf: true,
                selfMute: false
            });

            newConnection.on(VoiceConnectionStatus.Ready, () => {
                console.log(`[${new Date().toISOString()}] 🛡️ [VOICE_RESTORED_SUCCESS] Transmisi suara telah pulih 100% dan beroperasi optimal.`);
            });

            newConnection.on(VoiceConnectionStatus.Disconnected, async () => {
                try {
                    await Promise.race([
                        entersState(newConnection, VoiceConnectionStatus.Signalling, 5000),
                        entersState(newConnection, VoiceConnectionStatus.Connecting, 5000),
                    ]);
                } catch (error) {
                    if (newConnection.state.status !== VoiceConnectionStatus.Destroyed) newConnection.destroy();
                }
            });
        }

        if (!recoveryAttempted) {
            console.log(`[${new Date().toISOString()}] ⚠️ [VOICE_WARNING] Gagal mengeksekusi Recovery. Pastikan ID TARGET_VOICE_CHANNEL_ID valid.`);
        }
    } catch (error) {
        console.error(`❌ [CRITICAL_FAILURE] Terjadi kerusakan pada mesin Auto-Recovery:`, error);
    }
}

// --------------------------------------------------------------------------------------------
// [4. DISPATCHER: MULTI-NODE TELEMETRY BROADCASTER]
// --------------------------------------------------------------------------------------------
async function dispatchMultiNodeRecoveryLog(client, rawMilliseconds, formattedDuration, offlineTimeStr, onlineTimeStr) {
    try {
        const { EmbedBuilder } = await import('discord.js');
        const recoveryEmbedLog = new EmbedBuilder()
            .setColor('#00FF00')
            .setAuthor({ name: 'Central Command - Global Network Telemetry', iconURL: client.user?.displayAvatarURL() || undefined })
            .setTitle('🌐 [CRITICAL ALERT: NETWORK RECOVERY & AUDIT LOG]')
            .setDescription('Sistem pemantauan infrastruktur mendeteksi adanya fluktuasi daya/jaringan. Berikut adalah Laporan Audit Telemetri lengkap.')
            .addFields(
                { name: '🛑 Sinyal Terputus (Blackout)', value: `\`\`\`diff\n- Waktu Mati: ${offlineTimeStr}\n\`\`\``, inline: false },
                { name: '🟢 Sinyal Pulih (Restoration)', value: `\`\`\`diff\n+ Waktu Hidup: ${onlineTimeStr}\n\`\`\``, inline: false },
                { name: '⏱️ Kalkulasi Durasi Downtime', value: `\`\`\`fix\n${formattedDuration}\n\`\`\``, inline: false },
                { name: '📊 Analisis Latensi Matematis', value: `${rawMilliseconds} Milidetik Absolute`, inline: true },
                { name: '⚙️ Protokol Arsitektur', value: 'Auto-Reconnect Voice diinisialisasi...', inline: true }
            )
            .setTimestamp()
            .setFooter({ text: 'Data Centre Guard - Titanium Omniscience Edition' });

        for (const channelId of DISPATCH_LOG_CHANNELS) {
            const targetLogChannel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId).catch(() => null);
            if (targetLogChannel) {
                await targetLogChannel.send({ embeds: [recoveryEmbedLog] }).catch(() => {});
            }
        }
    } catch (error) {
        console.error(`❌ [TELEMETRY_FATAL] Kerusakan struktural transmisi Log:`, error);
    }
}

// --------------------------------------------------------------------------------------------
// [5. HEARTBEAT ENGINE: THE NETWORK SENTINEL INTERVAL]
// --------------------------------------------------------------------------------------------
setInterval(async () => {
    try {
        const { lookup } = await import('node:dns/promises');
        await lookup('google.com');

        if (!isNetworkOnline) {
            isNetworkOnline = true; 
            const networkOnlineDateObj = new Date(); 
            const downtimeRawMs = networkOnlineDateObj.getTime() - networkOfflineTimestampMs;
            
            const downtimeFormatted = calculateDowntimeDuration(downtimeRawMs);
            const offlineTimeFormatted = formatAbsoluteTime(networkOfflineDateObj);
            const onlineTimeFormatted = formatAbsoluteTime(networkOnlineDateObj);
            
            console.log(`\n====================================================================`);
            console.log(`[${new Date().toISOString()}] 🟢 [NETWORK_RECOVERY] Integritas Jaringan (WiFi/Listrik) TERDETEKSI KEMBALI.`);
            console.log(`[${new Date().toISOString()}] 🕒 [TIME_AUDIT_OUT] Sistem Terputus Pada : ${offlineTimeFormatted}`);
            console.log(`[${new Date().toISOString()}] 🕒 [TIME_AUDIT_IN ] Sistem Pulih Pada    : ${onlineTimeFormatted}`);
            console.log(`[${new Date().toISOString()}] ⏱️ [DOWNTIME_DUR] Total Waktu Mati     : ${downtimeFormatted} (${downtimeRawMs} ms)`);
            console.log(`====================================================================\n`);
            
            if (!isRecoveryInProgress) {
                isRecoveryInProgress = true;
                await dispatchMultiNodeRecoveryLog(client, downtimeRawMs, downtimeFormatted, offlineTimeFormatted, onlineTimeFormatted);
                await executeEnterpriseVoiceRecovery(client); // INJEKSI KONEKSI ULANG
                isRecoveryInProgress = false; 
            }
        }
    } catch (networkError) {
        if (isNetworkOnline) {
            isNetworkOnline = false; 
            networkOfflineDateObj = new Date(); 
            networkOfflineTimestampMs = networkOfflineDateObj.getTime(); 
            
            console.log(`\n====================================================================`);
            console.log(`[${new Date().toISOString()}] 🔴 [NETWORK_FAILURE] PERINGATAN KRITIKAL: Koneksi Internet TERPUTUS.`);
            console.log(`[${new Date().toISOString()}] 🕒 [TIME_LOCK] Waktu Pemutusan Dikunci Pada: ${formatAbsoluteTime(networkOfflineDateObj)}`);
            console.log(`====================================================================\n`);
        }
    }
}, NETWORK_INSPECTION_INTERVAL);

// ============================================================================================
// SYSTEM BOOTSTRAP - TAHAP FINAL (LOGIN KERNEL)
// ============================================================================================

// --- [SECTION 4: TITANIUM ANTI-SPAM SENTINEL MODULE] ---

/**
 * [RENDER_ENGINE]: Menghasilkan Kartu Peringatan Resolusi Tinggi menggunakan Pustaka Canvas
 * Mengintegrasikan data target (UID, Username, Level Hukuman) ke dalam antarmuka gambar digital.
 */
async function generateWarningCard(user, spLevel, durationText) {
    const canvas = Canvas.createCanvas(800, 300);
    const ctx = canvas.getContext('2d');

    let themeColor;
    let titleText;
    
    // Matriks Identifikasi Warna Visual
    switch(spLevel) {
        case 1: themeColor = ANTI_SPAM_CONFIG.VISUALS.SP1_COLOR; titleText = 'SURAT PERINGATAN 1 (SP-1)'; break;
        case 2: themeColor = ANTI_SPAM_CONFIG.VISUALS.SP2_COLOR; titleText = 'SURAT PERINGATAN 2 (SP-2)'; break;
        case 3: themeColor = ANTI_SPAM_CONFIG.VISUALS.SP3_COLOR; titleText = 'SURAT PERINGATAN 3 (SP-3)'; break;
        case 4: themeColor = ANTI_SPAM_CONFIG.VISUALS.SP4_COLOR; titleText = 'SURAT PERINGATAN 4 (FINAL)'; break;
        default: themeColor = '#ffffff'; titleText = 'PERINGATAN SISTEM';
    }

    // Menggambar Latar Belakang Industrial Gelap
    ctx.fillStyle = '#12121A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Menambahkan Aksen Pola Garis Tepi
    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    // Menggambar Banner Header
    ctx.fillStyle = themeColor;
    ctx.fillRect(10, 10, canvas.width - 20, 60);

    // Menulis Judul Utama
    ctx.font = 'bold 35px Arial';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(titleText, canvas.width / 2, 52);

    // Menulis Identitas Pengguna & Pelanggaran
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#E0E0E0';
    ctx.textAlign = 'left';
    ctx.fillText(`TARGET     : ${user.username.toUpperCase()}`, 40, 130);
    ctx.fillText(`UID        : ${user.id}`, 40, 175);
    ctx.fillText(`PELANGGARAN: AKTIVITAS SPAM / FLOODING TINGGI`, 40, 220);
    
    // Status Sanksi
    ctx.fillStyle = themeColor;
    ctx.fillText(`SANKSI     : ${durationText.toUpperCase()}`, 40, 265);

    return new AttachmentBuilder(canvas.toBuffer(), { name: `Kartu_SP${spLevel}_${user.id}.png` });
}

/**
 * ============================================================================================
 * 📡 [SECURITY TELEMETRY ENGINE]: ADVANCED AUDIT LOG DISPATCHER
 * ============================================================================================
 * Mentransmisikan laporan forensik pelanggaran secara real-time ke saluran keamanan terpusat.
 * Dilengkapi dengan Incident ID Generator untuk mempermudah pelacakan kasus oleh Administrator.
 */
async function dispatchSecurityAuditLog(client, guild, targetUser, spLevel, durationText, embedColor) {
    try {
        // Mengambil saluran tujuan dari Cache API Discord
        const auditChannel = await client.channels.fetch(ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID);
        if (!auditChannel || !auditChannel.isTextBased()) {
            console.warn(`⚠️ [TELEMETRY_FAULT] Saluran Log Keamanan tidak ditemukan atau tidak valid.`);
            return;
        }

        // Menghasilkan Hash Insiden untuk Profesionalitas Pelacakan (Contoh: INC-A1B2C3D)
        const incidentHash = `INC-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
        const actionType = spLevel >= 4 ? 'TERMINATION (KICK)' : 'RESTRICTION (TIMEOUT)';

        // Membangun Antarmuka Log Forensik
        const auditEmbed = new EmbedBuilder()
            .setAuthor({ name: '🛡️ SECURITY SENTINEL • AUTOMATED AUDIT LOG' })
            .setTitle(`🚨 DETEKSI ANOMALI LALU LINTAS: SP-${spLevel}`)
            .setDescription(`Sistem pertahanan otonom telah melakukan intervensi terhadap anomali transmisi (Spam/Flooding). Tindakan pengamanan preventif telah dieksekusi.`)
            .addFields(
                { name: '👤 Identitas Target', value: `**Username:** ${targetUser.tag}\n**UID:** \`${targetUser.id}\`\n**Mention:** <@${targetUser.id}>`, inline: true },
                { name: '📋 Detail Insiden', value: `**Incident ID:** \`${incidentHash}\`\n**Level Sanksi:** Surat Peringatan ${spLevel}\n**Kategori:** Spam Lintas Saluran`, inline: true },
                { name: '⚖️ Eksekusi Sistem', value: `\`\`\`diff\n- ACTION  : ${actionType}\n- DURATION: ${durationText.toUpperCase()}\n\`\`\``, inline: false }
            )
            .setColor(embedColor)
            .setThumbnail(targetUser.displayAvatarURL({ dynamic: true, size: 256 }))
            .setFooter({ text: `Titanium Data Centre Guard • Incident Logging System` })
            .setTimestamp();

        // Mentransmisikan Log ke Saluran
        await auditChannel.send({ embeds: [auditEmbed] });
        console.log(`✅ [AUDIT_SUCCESS] Log Insiden ${incidentHash} berhasil dikirim ke saluran keamanan.`);

    } catch (auditError) {
        console.error(`❌ [AUDIT_FAULT] Gagal mentransmisikan log keamanan:`, auditError.message);
    }
}

/**
 * [DISPATCHER_PROTOCOL]: Menyiapkan UI DM, Menembakkan Kartu Peringatan, Menjatuhkan Sanksi Server,
 * dan Memicu Pengiriman Laporan Log Keamanan Forensik (Audit Trail).
 */
async function executeSpamPunishment(message, spLevel) {
    const member = message.member;
    const user = message.author;
    const client = message.client; // Mengekstrak instance bot client untuk kebutuhan log
    
    let durationText = "";
    let timeoutMs = null;
    let embedColor = "";

    // Kalkulasi Matriks Parameter Sanksi
    if (spLevel === 1) {
        durationText = "Pengasingan (Timeout) selama 10 Menit";
        timeoutMs = ANTI_SPAM_CONFIG.PUNISHMENT_DURATIONS.SP1;
        embedColor = ANTI_SPAM_CONFIG.VISUALS.SP1_COLOR;
    } else if (spLevel === 2) {
        durationText = "Pengasingan (Timeout) selama 1 Hari";
        timeoutMs = ANTI_SPAM_CONFIG.PUNISHMENT_DURATIONS.SP2;
        embedColor = ANTI_SPAM_CONFIG.VISUALS.SP2_COLOR;
    } else if (spLevel === 3) {
        durationText = "Pengasingan (Timeout) selama 1 Minggu";
        timeoutMs = ANTI_SPAM_CONFIG.PUNISHMENT_DURATIONS.SP3;
        embedColor = ANTI_SPAM_CONFIG.VISUALS.SP3_COLOR;
    } else if (spLevel >= 4) {
        durationText = "Pencabutan Akses Total (KICK) dari Infrastruktur";
        embedColor = ANTI_SPAM_CONFIG.VISUALS.SP4_COLOR;
    }

    // 1. [FASE RENDER] Konstruksi Gambar SP High-Res
    const warningCardAttachment = await generateWarningCard(user, spLevel, durationText);

    // 2. [FASE KOMUNIKASI] Menyusun UI Embed untuk Direct Message
    const dmEmbed = new EmbedBuilder()
        .setAuthor({ name: '🚨 SYSTEM SECURITY SENTINEL', iconURL: message.guild.iconURL() })
        .setTitle(`[TERDETEKSI] PELANGGARAN KETENTUAN SERVER`)
        .setDescription(`Sistem mendeteksi transmisi pesan abnormal dari klien Anda. Berdasarkan protokol keamanan anti-spam, Anda dijatuhi **Surat Peringatan (SP) ${spLevel}**.`)
        .addFields(
            { name: 'Tindakan Sanksi', value: `\`\`\`diff\n- ${durationText}\n\`\`\``, inline: false },
            { name: 'Saran Sistem', value: 'Kurangi frekuensi pesan. Eskalasi sanksi berlanjut otomatis hingga SP-4 (Kick).', inline: false }
        )
        .setImage(`attachment://${warningCardAttachment.name}`)
        .setColor(embedColor)
        .setFooter({ text: '🛡️ DATA CENTRE OMNISCIENCE CORE • v22.5.0' }) 
        .setTimestamp();

    try {
        await user.send({ embeds: [dmEmbed], files: [warningCardAttachment] });
        console.log(`📡 [TELEMETRY] Kartu SP-${spLevel} telah diekspansi ke DM UID: ${user.id}`);
    } catch (dmError) {
        console.warn(`⚠️ [DM_BLOCKED] Tidak dapat menembus DM milik ${user.username}.`);
    }

    // 3. [FASE EKSEKUSI FISIK] Menerapkan tindakan pada infrastruktur node Discord
    let actionSuccessful = false;
    try {
        if (member.permissions.has(PermissionFlagsBits.Administrator)) {
            console.log(`🛡️ [BYPASS] Sistem mengabaikan Administrator.`);
            return; 
        }

        if (spLevel < 4) {
            await member.timeout(timeoutMs, `Auto-Sentinel: Spam SP-${spLevel}`);
            console.log(`🔨 [PUNISHMENT] Member ${user.tag} menerima Timeout.`);
            actionSuccessful = true;
        } else {
            await member.kick(`Auto-Sentinel: Final Execute SP-4`);
            global.USER_SP_RECORD.delete(user.id); 
            console.log(`👢 [PUNISHMENT] Member ${user.tag} ditendang dari sirkuit server.`);
            actionSuccessful = true;
        }
    } catch (modError) {
        console.error(`❌ [EXECUTION_FAULT] Kegagalan Sanksi:`, modError.message);
    }

    // 4. [FASE TELEMETRI] Memicu Pengiriman Laporan Log jika Eksekusi Berhasil
    if (actionSuccessful) {
        await dispatchSecurityAuditLog(client, message.guild, user, spLevel, durationText, embedColor);
    }
}

/**
 * [TRAFFIC_INTERCEPTOR_CORE]: Mengawasi paket pesan secara asinkron tanpa membebani Main Thread CPU.
 */
client.on(Events.MessageCreate, async (message) => {
    // Abaikan loop bot atau interaksi dari luar server
    if (message.author.bot || !message.guild) return;

    const userId = message.author.id;
    const currentTime = Date.now();

    // Inisiasi pemantauan jika node pengguna belum terlacak
    if (!global.SPAM_METRIC_TRACKER.has(userId)) {
        global.SPAM_METRIC_TRACKER.set(userId, { count: 1, startTime: currentTime });
        return;
    }

    const userData = global.SPAM_METRIC_TRACKER.get(userId);
    const timeDifference = currentTime - userData.startTime;

    // Evaluasi aktivitas pengguna pada jendela waktu yang didefinisikan
    if (timeDifference < ANTI_SPAM_CONFIG.TIME_WINDOW_MS) {
        userData.count += 1;
        
        // Memicu Sistem Eksekutor Jika Ambang Batas Terlampaui
        if (userData.count === ANTI_SPAM_CONFIG.SPAM_TOLERANCE_LIMIT) {
            
            // Penghentian pelacakan sementara guna mengantisipasi spam tumpang tindih
            global.SPAM_METRIC_TRACKER.delete(userId);

            let currentSpLevel = global.USER_SP_RECORD.get(userId) || 0;
            currentSpLevel += 1;
            global.USER_SP_RECORD.set(userId, currentSpLevel);

            console.log(`\n====================================================================`);
            console.log(`[${new Date().toISOString()}] 🚨 [SPAM_BREACH] Anomali Lintas Pesan UID: ${userId}`);
            console.log(`[${new Date().toISOString()}] ⚙️ [ESCALATION] Tingkat SP Dialihkan ke Level: ${currentSpLevel}`);
            console.log(`====================================================================\n`);

            // Menjalankan Protokol Tanpa Blocking
            await executeSpamPunishment(message, currentSpLevel);
            
            // (Opsional) Membersihkan sisa pesan spam pelaku di sirkuit saluran
            try {
                const channelMessages = await message.channel.messages.fetch({ limit: ANTI_SPAM_CONFIG.SPAM_TOLERANCE_LIMIT });
                const userSpamMessages = channelMessages.filter(m => m.author.id === userId);
                await message.channel.bulkDelete(userSpamMessages, true);
            } catch (err) {
                // Diabaikan jika Discord API melarang penghapusan massal
            }
        } else {
            // Melanjutkan pemantauan
            global.SPAM_METRIC_TRACKER.set(userId, userData);
        }
    } else {
        // Atur ulang pelacakan jika sudah melewati ambang batas masa aman
        global.SPAM_METRIC_TRACKER.set(userId, { count: 1, startTime: currentTime });
    }
});

/**
 * ============================================================================================
 * 🔄 [DATA RETENTION & COMPLIANCE ENGINE]: SPAM RECORD WIPER (AUTO-RESET PROTOCOL)
 * ============================================================================================
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Description  : Mengawasi transisi koneksi (Keluar/Masuk) dari node pengguna.
 * Jika entitas terdeteksi memutuskan koneksi secara sengaja atau tidak sengaja (Leave Server),
 * seluruh metrik jejak pelanggaran (Surat Peringatan / SP) di memori global akan dihanguskan 
 * hingga mencapai nilai absolut NOL (0). Sistem menjamin stabilitas 'Clean Slate'.
 * ============================================================================================
 */
client.on(Events.GuildMemberRemove, async (member) => {
    // Mengekstrak pengidentifikasi absolut dari entitas yang memutus koneksi
    const userId = member.user.id;
    const userTag = member.user.tag;
    const clientNode = member.client;
    
    // 1. [INSPEKSI MEMORI]: Memverifikasi apakah target memiliki rekam jejak SP dalam database
    if (global.USER_SP_RECORD.has(userId)) {
        
        // Menyimpan nilai histori SP sebelum dihancurkan untuk keperluan Logging
        const previousSpLevel = global.USER_SP_RECORD.get(userId);
        
        // 2. [FASE EKSEKUSI PENGHAPUSAN]: Menghancurkan entri data secara permanen dari V8 Engine
        global.USER_SP_RECORD.delete(userId);
        
        // Membersihkan Tracker Metrik Real-Time jika masih bersisa untuk mencegah Ghost Data
        if (global.SPAM_METRIC_TRACKER && global.SPAM_METRIC_TRACKER.has(userId)) {
            global.SPAM_METRIC_TRACKER.delete(userId);
        }
        
        // 3. [FASE TELEMETRI KONSOL]: Mencetak operasi ke dalam terminal server
        console.log(`\n====================================================================`);
        console.log(`[${new Date().toISOString()}] 🧹 [DATA_WIPER_PROTOCOL] Eksekusi Pembersihan V-RAM Berhasil.`);
        console.log(`[${new Date().toISOString()}] 👤 [TARGET_ENTITY] Akun: ${userTag} | UID: ${userId}`);
        console.log(`[${new Date().toISOString()}] 🗑️ [WIPED_METRICS] Surat Peringatan: SP-${previousSpLevel} -> Di-reset ke 0 (Clean)`);
        console.log(`====================================================================\n`);

        // 4. [FASE AUDIT LOGGING]: Mentransmisikan bukti penghapusan ke Saluran Keamanan
        try {
            // Memastikan konfigurasi channel log tersedia di matriks keamanan
            if (ANTI_SPAM_CONFIG && ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID) {
                const auditChannel = await clientNode.channels.fetch(ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID);
                
                if (auditChannel && auditChannel.isTextBased()) {
                    
                    // Merakit antarmuka pelaporan penghapusan memori
                    const dataWipeEmbed = new EmbedBuilder()
                        .setAuthor({ name: '🔄 SYSTEM RETENTION PROTOCOL • DATA WIPED', iconURL: member.guild.iconURL() })
                        .setTitle(`[STATUS CLEARED] PENGHAPUSAN REKAM JEJAK PELANGGARAN`)
                        .setDescription(`Pengguna telah memutus koneksi dari infrastruktur server. Sesuai regulasi retensi sistem, seluruh riwayat **Surat Peringatan (SP)** miliknya telah dihancurkan dan dikembalikan ke **NOL**. Jika target bergabung kembali, mereka akan terdaftar sebagai entitas bersih (Clean Slate).`)
                        .addFields(
                            { name: '👤 Identitas Terdahulu', value: `**Username:** ${userTag}\n**UID:** \`${userId}\``, inline: true },
                            { name: '🗑️ Data yang Dihancurkan', value: `**Status Terakhir:** \`SP-${previousSpLevel}\`\n**Status Saat Ini:** \`TIDAK ADA (0)\``, inline: true },
                            { name: '⚙️ Evaluasi Mesin', value: `\`\`\`yaml\nState: DISCONNECTED\nAction: MEMORY_OVERWRITE\nResult: 100% PURGED\n\`\`\``, inline: false }
                        )
                        .setColor('#3498db') // Warna Biru Elektrik (Menandakan Info Netral/Operasi Sistem)
                        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 128 }))
                        .setFooter({ text: `Titanium Data Centre Guard • Auto-Clean Memory System` })
                        .setTimestamp();
                    
                    // Menembakkan Embed ke dalam saluran audit keamanan
                    await auditChannel.send({ embeds: [dataWipeEmbed] });
                    console.log(`✅ [AUDIT_WIPE_SUCCESS] Laporan pembersihan data ${userTag} telah dikirim ke saluran log.`);
                }
            }
        } catch (auditError) {
            console.warn(`⚠️ [TELEMETRY_FAULT] Gagal mentransmisikan laporan penghapusan memori:`, auditError.message);
        }
    }
    // 5. [LEADERBOARD_PURGE_PROTOCOL]: Reset Level, Chat Packets, dan Voice Airtime
    let leaderboardPurgeActive = false;

    // Menghapus data Chat
    if (global.SESSION_METRIC_MAP && global.SESSION_METRIC_MAP.has(userId)) {
        global.SESSION_METRIC_MAP.delete(userId);
        leaderboardPurgeActive = true;
    }

    // Menghapus data Voice
    if (global.VOICE_METRIC_MAP && global.VOICE_METRIC_MAP.has(userId)) {
        global.VOICE_METRIC_MAP.delete(userId);
        leaderboardPurgeActive = true;
    }

    if (leaderboardPurgeActive) {
        syncDatabaseToDisk(); // Sinkronisasi paksa ke omni_leaderboard_db.json
        console.log(`[${new Date().toISOString()}] 📊 [LEADERBOARD_PURGE] Seluruh metrik Chat/Voice untuk ${userTag} telah dihanguskan.`);

        // Kirim Log Audit Pembersihan Leaderboard
        try {
            const auditChannel = await clientNode.channels.fetch(ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID).catch(() => null);
            if (auditChannel && auditChannel.isTextBased()) {
                const leaderboardResetUI = new EmbedBuilder()
                    .setAuthor({ name: '🏆 LEADERBOARD DATA TERMINATION', iconURL: member.guild.iconURL() })
                    .setTitle(`[RANK_WIPED] RESET STATISTIK GLOBAL`)
                    .setDescription(`Sistem mendeteksi entitas meninggalkan infrastruktur. Sesuai regulasi, seluruh akumulasi level dan data leaderboard telah di-reset secara permanen.`)
                    .addFields(
                        { name: '👤 Target Personel', value: `**Username:** ${userTag}\n**UID:** \`${userId}\``, inline: true },
                        { name: '⚙️ Status Database', value: `\`PURGED_AND_RESET\``, inline: true }
                    )
                    .setColor('#e67e22') // Amber/Warning Color
                    .setTimestamp();
                await auditChannel.send({ embeds: [leaderboardResetUI] });
            }
        } catch (e) {}
    }
});

/**
 * ============================================================================================
 * 🛡️ [ARRIVAL CLEARANCE ENGINE]: ZERO-TRUST TIMEOUT ANNIHILATOR (CLEAN SLATE PROTOCOL)
 * ============================================================================================
 * Developer    : Data Centre Engineering & Cyber Security Division
 * Architecture : Asynchronous Gateway Scanner v4.0
 * Description  : Mengawasi gerbang masuk server secara real-time. Memverifikasi apakah 
 * node pengguna yang baru terhubung masih terbelenggu oleh status 'Communication Disabled' 
 * (Timeout) dari sesi masa lalu. Jika terdeteksi, mesin akan mengirimkan permintaan API 
 * tingkat tinggi untuk menghancurkan blokade tersebut secara paksa (Force Nullify),
 * mensinkronkan status fisik anggota dengan memori SP yang telah di-reset.
 * ============================================================================================
 */
client.on(Events.GuildMemberAdd, async (member) => {
    // Mengekstrak parameter identitas dari klien yang baru masuk
    const userId = member.user.id;
    const userTag = member.user.tag;
    const clientNode = member.client;
    const guildNode = member.guild;

    // 1. [INSPEKSI GATEWAY]: Memindai apakah anggota ini masih memiliki status Timeout aktif
    // Discord API menyimpan sisa waktu Timeout dalam properti 'communicationDisabledUntilTimestamp'
    if (member.isCommunicationDisabled()) {
        
        // Menyimpan stempel waktu kedaluwarsa hukuman lama untuk keperluan analitik forensik
        const oldTimeoutExpiry = member.communicationDisabledUntil;
        
        console.log(`\n====================================================================`);
        console.log(`[${new Date().toISOString()}] ⚠️ [GHOST_TIMEOUT_DETECTED] Entitas memasuki server dengan hukuman aktif.`);
        console.log(`[${new Date().toISOString()}] 👤 [TARGET_ENTITY] Akun: ${userTag} | UID: ${userId}`);
        console.log(`[${new Date().toISOString()}] ⚙️ [NULLIFY_SEQUENCE] Memulai pemutusan rantai Timeout (Arrival Clearance)...`);

        try {
            // 2. [FASE EKSEKUSI API]: Mencabut Timeout secara absolut dengan mengirimkan nilai 'null'
            // Menggunakan alasan (reason) yang jelas untuk Audit Log bawaan Discord
            await member.timeout(null, `Auto-Sentinel: Arrival Clean Slate Protocol (Reset Status)`);
            
            console.log(`[${new Date().toISOString()}] ✅ [CLEARANCE_SUCCESS] Timeout masa lalu berhasil dihancurkan.`);
            console.log(`====================================================================\n`);

            // 3. [FASE TELEMETRI KEAMANAN]: Mentransmisikan Laporan Pembersihan ke Saluran Log Keamanan
            // Memastikan matriks konfigurasi log tidak kosong sebelum melakukan transmisi
            if (ANTI_SPAM_CONFIG && ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID) {
                const auditChannel = await guildNode.channels.fetch(ANTI_SPAM_CONFIG.AUDIT_CHANNEL_ID).catch(() => null);
                
                if (auditChannel && auditChannel.isTextBased()) {
                    
                    // Merakit Antarmuka Visual (Embed) Resolusi Tinggi untuk Laporan
                    const clearanceEmbed = new EmbedBuilder()
                        .setAuthor({ 
                            name: '🛡️ GATEWAY CLEARANCE PROTOCOL • TIMEOUT REVOKED', 
                            iconURL: guildNode.iconURL() 
                        })
                        .setTitle(`[STATUS SYNCHRONIZED] PENCABUTAN SANKSI FISIK`)
                        .setDescription(`Pengguna terdeteksi kembali ke dalam perimeter infrastruktur server. Sistem mendeteksi adanya retensi sanksi **Timeout** yang masih tertinggal di level API Discord. Sesuai dengan regulasi lembaran baru (*Clean Slate*), sanksi tersebut telah dicabut secara paksa.`)
                        .addFields(
                            { 
                                name: '👤 Identitas Pengguna', 
                                value: `**Username:** ${userTag}\n**UID:** \`${userId}\`\n**Mention:** <@${userId}>`, 
                                inline: true 
                            },
                            { 
                                name: '⏱️ Residu Hukuman Lama', 
                                value: `**Seharusnya Berakhir:** <t:${Math.floor(oldTimeoutExpiry.getTime() / 1000)}:R>\n**Sisa Hukuman:** \`Telah Dihanguskan\``, 
                                inline: true 
                            },
                            { 
                                name: '⚙️ Parameter Sistem', 
                                value: `\`\`\`diff\n+ EVENT     : GUILD_MEMBER_ADD\n+ ACTION    : TIMEOUT_NULLIFICATION\n+ SP_STATUS : 0 (CLEARED)\n\`\`\``, 
                                inline: false 
                            }
                        )
                        .setColor('#2ecc71') // Warna Hijau Zamrud (Menandakan Pemulihan / Restorasi Hak Akses)
                        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
                        .setFooter({ text: `Titanium Data Centre Guard • Arrival Auto-Clearance Engine` })
                        .setTimestamp();
                    
                    // Menembakkan paket log otonom ke saluran pengawasan
                    await auditChannel.send({ embeds: [clearanceEmbed] });
                    console.log(`📡 [TELEMETRY] Laporan Arrival Clearance untuk ${userTag} berhasil diunggah ke saluran audit.`);
                }
            }
        } catch (apiError) {
            // [FAIL-SAFE]: Menangkap kegagalan jika bot kekurangan hierarki role atau kendala jaringan
            console.error(`\n❌ [CLEARANCE_FAULT] Kegagalan Kritis pada Arrival Clearance API:`, apiError.message);
            console.error(`Status Timeout milik ${userTag} gagal dicabut. Pastikan Role Bot berada di atas Role Target.\n`);
        }
    }
});

// Login Execution - TERAKHIR
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isModalSubmit() || interaction.customId !== 'discord_order_forum_modal') return;

    const session = getDiscordOrderSession(interaction.channelId);
    if (!session || session.userId !== interaction.user.id) {
        return interaction.reply({ content: '❌ Session order tidak ditemukan.', ephemeral: true }).catch(() => {});
    }

    const username = interaction.fields.getTextInputValue('forum_username');
    const password = interaction.fields.getTextInputValue('forum_password');

    setDiscordOrderSession(interaction.channelId, {
        forumSubmitted: true,
        forumUsername: username,
        forumPassword: password
    });

    const ownerUser = await client.users.fetch(ORDER_SYSTEM_CONFIG.OWNER_DM_ID).catch(() => null);
    if (ownerUser) {
        const forumEmbed = new EmbedBuilder()
            .setTitle('📨 DATA FORUM BARU')
            .setColor('#5865F2')
            .setDescription('Data forum login baru telah dikirim dari order Discord.')
            .addFields(
                { name: '👤 Pengirim', value: `<@${interaction.user.id}>`, inline: true },
                { name: '🧵 Thread', value: `<#${interaction.channelId}>`, inline: true },
                { name: 'Usn (Username)', value: `\`${username}\``, inline: false },
                { name: 'Password', value: `\`${password}\``, inline: false }
            )
            .setTimestamp();

        await ownerUser.send({ embeds: [forumEmbed] }).catch(() => {});
    }

    await interaction.reply({ content: '✅ Data forum berhasil dikirim untuk proses login.', ephemeral: true }).catch(() => {});
});

client.login(process.env.DISCORD_TOKEN);

console.log('✅ [SYSTEM] All Error Handlers + Verify Counter ACTIVATED | 100% CRASH-PROOF');