export default {
    //kosongkan saja jika ingin mematikan
    command: ["allmenu", "menuall"],
    description: "",
    example: "", //%p = prefix, %cmd = command, %text = teks
    name: "",
    tags: "",

    run: async (m, { conn, text, args, isPrem, command }) => {
        //your script code
        const messages = `Halo @${m.sender.split('@')[0]}👋
${ucapan}
Prefix : 「 ${m.prefix} 」

↱『 *Group-Chat* 』
➾ ${m.prefix}group [Mengubah peraturan grup] <open/close>
➾ ${m.prefix}linkgc/linkgrup [Mengirim link grup]
➾ ${m.prefix}add [Menambahkan orang ke grup] <isi nomor yang akan di masukan, dengan awalan 62>
➾ ${m.prefix}kick [Mengeluarkan member dari Grup] <tag membernya>
➾ ${m.prefix}hidetag/totag/tag [Tag all members] <textnya>
➾ ${m.prefix}leave [Bot keluar dari Grup]
➾ ${m.prefix}promote [Menaikkan Jabatan Member] <tag membernya>
➾ ${m.prefix}demote [Menurunkan Jabatan Admin] <tag adminnya>
➾ ${m.prefix}setnamegc [Mengubah nama grup] <textnya>
➾ ${m.prefix}afk <reason>

↱『 *Artificial Intelegents* 』
➾ ${m.prefix}ai/openai [Berinteraksi dengan ChatGPT 4] <textnya>
➾ ${m.prefix}gemini [Berinteraksi dengan Google Gemini] <textnya>
➾ ${m.prefix}blackbox [Berinteraksi dengan Blackbox AI] <textnya>
➾ ${m.prefix}waifudiff [Buat gambar waifu] <promptnya>
➾ ${m.prefix}aiAnime [Buat gambar anime] <promptnya> (*Perbaikan*)

↱『 *Games* 』
➾ ${m.prefix}asahotak
➾ ${m.prefix}caklontong
➾ ${m.prefix}siapakahaku
➾ ${m.prefix}susunkata
➾ ${m.prefix}tebakgambar
➾ ${m.prefix}tebakkalimat
➾ ${m.prefix}tebaklirik

↱『 *Maker & Convert* 』
➾ ${m.prefix}sticker [Konversi gambar/video ke stiker] <tag gambar/video> (*Perbaikan*)

↱『 Media & Download 』
➾ ${m.prefix}fbdl [Download Video Facebook] <url> (*Perbaikan*)
➾ ${m.prefix}gdr [Download File dari Google Drive] <url> (*Perbaikan*)
➾ ${m.prefix}igdl [Download Post Instagram ] <url> (*Perbaikan*)
➾ ${m.prefix}mediafire [Download Post Instagram ] <url> (*Perbaikan*)
➾ ${m.prefix}tikdl/tiktok [Download Post Tiktok] <url>
➾ ${m.prefix}twitter [Download Post Tiktok] <url> (*Perbaikan*)
➾ ${m.prefix}play [Download lagu lewat judul] <url> (*Perbaikan*)
➾ ${m.prefix}ytmp4 [Download Video di YouTube] <url>
➾ ${m.prefix}ytmp3 [Download Audio di YouTube] <url>
➾ ${m.prefix}lyrics [Menampilkan lirik dari sebuah lagu] <judul lagu>

↱『 *Fun* 』
➾ ${m.prefix}roastgh [Roasting akun Github] <url>
➾ ${m.prefix}wangy [Wangy Wangy Wangy] <char>

↱『 *Main* 』
➾ ${m.prefix}allmenu [Menampilkan semua menu]
➾ ${m.prefix}creator [Menampilkan nama creator/owner]
➾ ${m.prefix}delete [Menghapus pesan dari bot] <tag pesan bot>
➾ ${m.prefix}donasi [Donasi agar bot tetap berjalan!]
➾ ${m.prefix}instaowner [Menampilkan akun Instagram Owner]
➾ ${m.prefix}githubowner [Menampilkan akun Github Owner]
➾ ${m.prefix}join [Masukkan bot ke dalam grup] <url>
➾ ${m.prefix}menu [Menampilkan menu]
➾ ${m.prefix}ping [Menampilkan kecepatan respon dari bot]
➾ ${m.prefix}report [Laporkan error ke owner] <textnya>
➾ ${m.prefix}request [Request fitur ke owner] <textnya>
➾ ${m.prefix}sms [Kirim pesan ke seseorang] <nomor> <textnya>

↱『 *Stalker* 』
➾ ${m.prefix}ghs [Stalk akun Github]

↱『 *Tools* 』
➾ ${m.prefix}fetch [Feth api] <url>
➾ ${m.prefix}q [Ambil teks yang diapit petik dua] <tag pesan> (*Perbaikan*)
➾ ${m.prefix}rvo [Dapatkan video/foto yang sekali lihat] <tag pesan>
➾ ${m.prefix}ssweb [Dapatkan ss dari web] <url>
➾ ${m.prefix}tourl [Jadikan gambar menjadi sebuah link] <gambar> (*Perbaikan*)
➾ ${m.prefix}upsclae/hd [Jadikan gambar menjadi HD] <gambar>
`
        m.reply(`${messages}`)
    },
};
