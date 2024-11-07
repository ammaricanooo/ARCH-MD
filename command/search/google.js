import axios from "axios"
export default {
    command: ["google", "gugel", "googlesearch"],
    description: "Searh a data from google",
    name: "google",
    tags: "search",

    loading: true,

    run: async (m, { text }) => {
        if (!m.args[0]) {
            setTimeout(() => {
                m.reply(`Example: ${m.prefix + m.command} moon`)
            }, 1000)
        } else {
            const query = text

            const apiUrl = `https://api.ryzendesu.vip/api/search/google?query=${query}`

            let response

            try {
                response = await axios.get(apiUrl);
            } catch (err) {
                console.error(err)
                m.reply("Data tidak ditemukan!")
            }

            //const {, , , , , postsCount} = response.result;

            let result = response.data;

            let teks = result.map(v => {
                return `*${v.title}* (${v.link})
description: ${v.description}\n`
            }).filter(v => v).join('\n*—————————————————*\n')

            try {
                await m.reply( teks );
            } catch (err) {
                console.error(err)
                m.reply("Judul tidak ditemukan!")
            }
        }
    }
}
