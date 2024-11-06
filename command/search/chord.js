import axios from "axios"
export default {
    command: ["chord", "chordgitar", "chordmusic"],
    description: "Searh a music chord",
    name: "chord",
    tags: "search",

    loading: true,

    run: async (m, { text }) => {
        if (!m.args[0]) {
            setTimeout(() => {
                m.reply(`Example: ${m.prefix + m.command} Untuk Perempuan Yang Sedang Dalam Pelukan`)
            }, 1000)
        } else {
            const title = text

            const apiUrl = `https://api.ryzendesu.vip/api/search/chord?query=${title}`

            let response

            try {
                response = await axios.get(apiUrl);
            } catch (err) {
                console.error(err)
            }

            //const {, , , , , postsCount} = response.result;

            const judul = response.data.title;
            const chord = response.data.chord;

            const txt = `[ ${judul || "Unknown"} ]


${chord || "Not Found"}`

            try {
                await m.reply(photoUrl, { caption: txt });
            } catch (err) {
                console.error(err)
                m.reply("Username tidak ditemukan!")
            }
        }
    }
}
