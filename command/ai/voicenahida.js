import axios from "axios"

export default {
    command: ["voicenahida", "nahida"],
    description: "generate a Nahida voice",
    name: "voicenahida",
    tags: "ai",

    loading: true,

    run: async (m, { text }) => {
        if (!text) m.reply(`try generating an voice Nahida. \n\nexample: ${m.prefix + m.command} a girl with a cte cat`)
        const prompt = text

        const ApiUrl = "https://shinoa.us.kg/api/voice/voice-nahida"

        let response

        try {
            const payload = {
                text: `${prompt}`
            }
            const options = {
                headers: {
                    'api_key': 'free',
                }
            }
            response = await axios.post(ApiUrl, payload, options)
        } catch (err) {
            console.error(err)
        }

        const mangkupurel = await response.data
        console.log(mangkupurel)
        let result = mangkupurel.data[0].nahida

        try {
            // await m.reply( result,  { mimetype: "audio/mpeg"} )
            conn.sendMessage(m.chat, { audio: { url: `${result}` }, mimetype: 'audio/mpeg' }, { quoted: m });

        } catch (err) {
            // m.reply("Error: " + err)
            m.reply("Terjadi kesalahan pada sistem, silahkan coba beberapa saat lagi..")
            console.error(err)
        }
    }
}
