import axios from "axios"
export default {
    command: ["pint", "pin", "pintdl", "pinterest"],
    description: "Searh a picture from pinterest",
    name: "pint",
    tags: "search",

    loading: true,

    run: async (m, { text }) => {
        if (!m.args[0]) {
            setTimeout(() => {
                m.reply(`Example: ${m.prefix + m.command} moon`)
            }, 1000)
        } else {
            const title = text

            const apiUrl = `https://api.ryzendesu.vip/api/search/pinterest?query=${title}`

            let response

            try {
                response = await axios.get(apiUrl);
            } catch (err) {
                console.error(err)
                m.reply("Gambar tidak ditemukan!")
            }

            //const {, , , , , postsCount} = response.result;

            let result = response.data;

            result = result[Math.floor(Math.random() * result.length)];
            let caption = "nih kak"
            console.log(result)

            try {
                await m.reply(result, { caption, mimetype: 'image/jpeg' });
            } catch (err) {
                console.error(err)
                m.reply("Judul tidak ditemukan!")
            }
        }
    }
}
