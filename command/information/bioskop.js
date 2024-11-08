import { bioskopNow } from '@bochilteam/scraper'

export default {
    command: ["bioskopnow"],
    description: "Get the latest information on films currently showing in cinemas",
    name: "bioskopNow",
    tags: "information",

    loading: true,

    run: async (m, { conn, command, text, usedPrefix }) => {
        //if (!text) throw `Use example ${usedPrefix}${command} <search term>`;

        // Pencarian video berdasarkan query text
        const search = await bioskopNow();
        let teks = search.map(v => {
            return `*${v.title}* (${v.url})
Duration: ${v.duration}
Genre: ${v.genre}
Playing at: ${v.playingAt}\n`
        }).filter(v => v).join('\n*—————————————————*\n')



        m.reply(teks)

    }
}
