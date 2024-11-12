export default {
    command: ["apakah"],
    description: "for fun",
    name: "apakah",
    tags: "fun",

    run: async (m, { text }) => {
        let answer = ['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin']
        answer = answer[Math.floor(Math.random() * answer.length)];
        m.reply(`
*Pertanyaan:* ${m.command} ${text}
*Jawaban:* ${answer}`.trim(), null, m.mentionedJid ? {
            mentions: m.mentionedJid
        } : {})
    }
}
