export default {
    command: ['tagall', 'all', 'tagal'],
    description: 'Tag all member mentions',
    name: 'tagall',
    tags: 'group',

    group: true,
    admin: true,

    run: async (m, { conn, usedPrefix, text, participants }) => {
        let teks = `${text ? text : '*––––––『 TAG All 』––––––*'}\n\n${readMore}`
        for (let mem of m.metadata.participants) {
            teks += `\n@${mem.id.split('@')[0]}`
        }
        await conn.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map((a) => a.id) })
    },
};

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
