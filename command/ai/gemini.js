export default {
    command: ["gemini"],
    description: "Search some information using Gemini",
    name: "gemini",
    tags: "ai",

    run: async (m, { text }) => {
        if (!text) m.reply(`try chat with ai/openai. \n\nexample: ${m.prefix + m.command} apa nama rumus kimia dari besi`)
        try {
            const data = API("nyxs","/ai/gemini", { text: text })
            let response

            console.log(data)

            response = await func.fetchJson(data)

            console.log(response)

            await m.reply(response.result)
        } catch (error) {
            console.error(error);
            m.reply('Sorry, there seems to be an error: ' + error)
        }
    }
}
