export default {
    command: ["openai", "chatgpt", "ai", "gpt"],
    description: "Search some informasion using gpt4",
    name: "openai",
    tags: "ai",

    run: async (m, { text }) => {
        if (!text) m.reply(`try chat with ai/openai. \n\nexample: ${m.prefix + m.command} apa nama rumus kimia dari besi`)
        try {
            const data = API("ryzendesu","/api/ai/chatgpt", { text: text })
            let response

            console.log(data)
    
            response = await func.fetchJson(data)
    
            console.log(response)
            
            await m.reply(response.response)
        } catch (error) {
            console.error(error);
            m.reply('Sorry, there seems to be an error: ' + error)
        }
    }
}