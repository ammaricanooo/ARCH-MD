import { youtubeSearch } from '/home/user/ARCH-MD/system/lib/youtube.js'

export default {
    command: ["yts", "ytsearch", "searchyt"],
    description: "Search youtube link using query",
    name: "ytsearch",
    tags: "search",

    loading: true,

    run: async (m, { conn, command, text, usedPrefix }) => {
        if (!text) throw `Use example ${m.prefix}${command} alan walker faded`;

        // Pencarian video berdasarkan query text
        const search = await youtubeSearch(text);
        let teks = search.video.map(v => {
            return `*${v.title}* (${v.url})
Duration: ${v.durationH}
Uploaded: ${v.publishedTime}
${v.view}\n`
        }).filter(v => v).join('\n*—————————————————*\n')



        m.reply(teks)
    }
}
