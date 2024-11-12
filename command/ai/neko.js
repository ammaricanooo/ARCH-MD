export default {
    command: ["neko", "asupanneko"],
    description: "generate waifu using ai",
    name: "waifudiff",
    tags: "ai",

    premium: true,

    run: async (m, { text, conn }) => {
        if (m.isGroup && !global.db.data.chats[m.chat].nsfw) {
            throw `🚫 Group ini tidak dihidupkan nsfw \n\n ketik \n*${m.prefix}enable* nsfw untuk menghidupkan fitur ini`;
        }

        m.reply("Wait a minute...")
        const query = text
        conn.sendMessage(m.chat, { caption: "Nih kak..", image: { url: `https://api.arifzyn.tech/dewasa/neko` } })
    }
}
