export default {
    command: ["promote", "pro"],
    example: `Example: %p%cmd *@tagUser*`,
    description: "promote user",
    name: "promote",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { text }) => {

        let users = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await conn.groupParticipantsUpdate(m.chat, [users] || m.quoted.sender, 'promote')
    }
}
