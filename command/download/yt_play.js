import { youtubeSearch } from './../../system/lib/youtube.js'
import fs from 'fs'
import os from 'os'
import axios from 'axios'

export default {
    command: ["play", "ytplay"],
    description: "Download youtube audio using query",
    name: "play",
    tags: "download",

    loading: true,

    run: async (m, { conn, command, text, usedPrefix }) => {
        if (!text) throw `Use example ${usedPrefix}${command} <search term>`;

        // Pencarian video berdasarkan query text
        const search = await youtubeSearch(text);
        const video = search.video.slice(0, 5);
        const vid = video[Math.floor(Math.random() * video.length)];
        if (!vid) throw 'Video not found, try another title';

        const { title, thumbnail, durationH, view, publishedTime, url } = vid;

        // Mengirim pesan awal dengan thumbnail
        await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: 'Please wait...' }, { quoted: m });

        try {
            // Mendapatkan URL audio menggunakan API ryzendesu
            const response = await axios.get(`https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(url)}`);
            const downloadUrl = response.data.url;
            console.log(downloadUrl)

            if (!downloadUrl) throw new Error('Audio URL not found');

            // Lokasi file sementara
            const tmpDir = os.tmpdir();
            const filePath = `${tmpDir}/${title}.mp3`;

            // Mengunduh file audio dan menyimpannya di direktori sementara
            const audioResponse = await axios({
                method: 'get',
                url: downloadUrl,
                responseType: 'stream',
            });

            const writableStream = fs.createWriteStream(filePath);
            audioResponse.data.pipe(writableStream);

            writableStream.on('finish', async () => {
                // Mengirim file audio
                await conn.sendMessage(m.chat, {
                    audio: {
                        url: filePath,
                    },
                    mimetype: 'audio/mpeg',
                    ptt: true,
                    //fileName: `${title}.mp3`,
                    caption: `Title: ${title}\nLength: ${durationH}\nViews: ${view}\nUploaded: ${publishedTime}`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 1,
                            mediaUrl: url,
                            title: title,
                            body: 'Audio Download',
                            sourceUrl: url,
                            //thumbnail: await (await conn.getFile(thumbnail)).data,
                        },
                    },
                }, { quoted: m });

                // Menghapus file setelah dikirim
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(`Failed to delete audio file: ${err}`);
                    } else {
                        console.log(`Deleted audio file: ${filePath}`);
                    }
                });
            });

            writableStream.on('error', (err) => {
                console.error(`Failed to write audio file: ${err}`);
                m.reply('Failed to download audio');
            });
        } catch (error) {
            console.error('Error:', error.message);
            throw `Error: ${error.message}. Please check the URL and try again.`;
        }

    }
}
