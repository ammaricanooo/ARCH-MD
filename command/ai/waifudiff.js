export default {
  command: ["waifudiff", "waidiff", "widiff", "wiff"],
  description: "generate waifu using ai",
  name: "waifudiff",
  tags: "ai",

  loading: true,

  run: async (m, { text, conn}) => {
    if (!text) {
      setTimeout(() => {
        m.reply(`Input the query\n\nexample\n\n${ m.prefix + m.command } long hair`)
      }, 1000)
    } else {
    const query = text
    conn.reply(m.chat, { caption: "Nih kak..", image: { url: `https://api.ryzendesu.vip/api/ai/waifu-diff?prompt=${encodeURIComponent(query)}` } })
    }
  }
}
