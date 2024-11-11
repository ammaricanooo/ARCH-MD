export default {
    command: ["neko", "asupanneko"],
    description: "generate waifu using ai",
    name: "waifudiff",
    tags: "ai",

    loading: true,
    premium: true,

    run: async (m, { text, conn }) => {
        const query = text
        conn.sendMessage(m.chat, { caption: "Nih kak..", image: { url: `https://api.arifzyn.tech/dewasa/neko` } })
    }
}
