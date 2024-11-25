import axios from "axios"
import * as imageToWebp from '../../system/lib/sticker.js'

export default {
    command: ["brat"],
    name: "sticker",
    tags: "convert",

    run: async (m, { conn, text }) => {
        if (!text) throw `Gunakan perintah ini dengan format: ${usedPrefix}brat <teks>`;

        try {
            conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

            /* sticker brat
            ini wm don't dete this wm
            no delete wm👍
            https://whatsapp.com/channel/0029VamzFetC6ZvcD1qde90Z
            */

            const url = `https://mxmxk-helper.hf.space/brat?text=${encodeURIComponent(text)}`;
            const response = await axios.get(url, { responseType: 'arraybuffer' });

            const stickerData = await imageToWebp(response.data);

            await conn.sendMessage(m.chat, {
                sticker: stickerData
            }, { quoted: m });

        } catch (error) {
            console.error('Error:', error);
            await m.reply('Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.', m);
        }
    }
}

/* sticker brat
ini wm don't dete this wm
no delete wm👍
https://whatsapp.com/channel/0029VamzFetC6ZvcD1qde90Z
*/
