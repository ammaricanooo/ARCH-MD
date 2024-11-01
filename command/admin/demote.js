export default {
    command: ["demote", "demo"],
    example: `Example: %p%cmd *@tagUser*`,
    description: "demote user",
    name: "demote",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, {text}) => {
        if (m.args[0] === `@${global.owner}`) {
          m.reply("Sorry you can't demote my owner")
        } else if (m.args[0] === `@${global.pairingNumber}`) {
          m.reply(`Sorry, you can't demote this bot using the ${m.prefix + m.command} feature!`)
        } else {
          let users = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await conn.groupParticipantsUpdate(m.chat, [users] || m.quoted.sender, 'demote')
        }
    }
}
