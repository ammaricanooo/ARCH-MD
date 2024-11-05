import fetch from "node-fetch"
import uploadFile from '../../system/lib/uploadFile.js'

let previousMessages = [];

export default {
    command: ["blackbox", "bb", "b"],
    description: "blackbox ai",
    name: "blackbox",
    tags: "ai",

    run: async (m, { text, conn }) => {

        try {
            const quoted = m.isQuoted ? m.quoted : m;
            // Pastikan minimal ada teks atau pesan yang di-quote
            if (!text && !m.quoted && /image/i.test(quoted.mime)) {
                throw "Masukkan pertanyaan atau kirim gambar untuk deskripsi!\n\n*Contoh:* Siapa presiden Indonesia?";
            }

            // Kirim pesan loading
            let { key, keys } = await conn.sendMessage(m.chat, {
                text: "...",
            });

            let imgUrl = null;

            // Jika ada gambar pada pesan yang di-quote, lakukan upload
            if (m.quoted && /image/i.test(quoted.mime)) {
                let img = await m.quoted.download();
                if (img) {
                    imgUrl = await uploadFile(img);
                    if (!imgUrl) {
                        throw "Gagal mengupload gambar. Pastikan proses upload berjalan dengan baik.";
                    }
                }
            }
            // Jika ada gambar di pesan langsung
            else if (/image/i.test(quoted.mime)) {
                let img = await m.download();
                if (img) {
                    imgUrl = await uploadFile(img);
                    if (!imgUrl) {
                        throw "Gagal mengupload gambar. Pastikan proses upload berjalan dengan baik.";
                    }
                }
            }

            // Tentukan endpoint berdasarkan kondisi kombinasi `text` dan `m.quoted`
            let apiUrl;
            if ((!text && m.quoted) || (text && m.quoted) || (text && /image/i.test(quoted.mime))) {
                apiUrl = `https://api.ryzendesu.vip/api/ai/blackbox?chat=${encodeURIComponent(text || '')}&options=blackboxai&imageurl=${imgUrl}`;
            } else if (text && !m.quoted) {
                apiUrl = `https://api.ryzendesu.vip/api/ai/blackbox?chat=${encodeURIComponent(text)}&options=blackboxai`;
            }

            // Fetch ke API dengan URL yang dipilih
            let hasil = await fetch(apiUrl);
            if (!hasil.ok) {
                throw new Error("Request ke API gagal");
            }

            let result = await hasil.json();

            // Buat respons dari hasil API
            let responseMessage = result.response || "Tidak ada respons dari AI.";

            // Tambahkan informasi tambahan jika ada
            if (result.additionalInfo && result.additionalInfo.length > 0) {
                responseMessage += "\n\n**Informasi Tambahan:**\n";
                result.additionalInfo.forEach(info => {
                    responseMessage += `- [${info.title}](${info.link}): ${info.snippet}\n`;
                    if (info.sitelinks && info.sitelinks.length > 0) {
                        info.sitelinks.forEach(link => {
                            responseMessage += `  - [${link.title}](${link.link})\n`;
                        });
                    }
                });
            }

            // Kirim pesan respons
            m.reply(responseMessage)
            // await conn.sendMessage(m.chat, {
            //     text: responseMessage
            // });

            previousMessages.push({ role: "user", content: text || '[Image]' });
        } catch (error) {
            await conn.sendMessage(m.chat, {
                text: `Error: ${error.message}`
            });
            console.log(error)
        }
    }
}