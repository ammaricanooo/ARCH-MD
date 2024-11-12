export default {
    command: ["infogc", "infogrup", "infogroup"],
    description: "get information group",
    name: "infogc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn }) => {
        let participants = m.metadata.participants
        let groupMetadata = m.metadata
        const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || "https://telegra.ph/file/24fa902ead26340f3df2c.png"
        const { antibot, isBanned, welcome, expired, simi, detect, antilink, antitoxic, antidelete, antispam, viewonce, nsfw, delete: del } = global.db.data.chats[m.chat]
        const groupAdmins = participants.filter(p => p.admin)
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
        const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
        let text = `*ID:*
${groupMetadata.id}

*Name:*
${groupMetadata.subject}

*Description:*
${groupMetadata.desc?.toString() || 'unknown'}

*Total Members:*
${participants.length} Members

*Group Owner:*
@${owner.split('@')[0]}

*Group Admins:*
${listAdmin}

*Group Settings:*
${isBanned ? '✅' : '❌'} Banned
${detect ? '✅' : '❌'} Detect
${welcome ? '✅' : '❌'} Welcome
${expired ? '✅' : '❌'} Restrict
${nsfw ? '✅' : '❌'} NSFW
${simi ? '✅' : '❌'} Simi
${antibot ? '✅' : '❌'} Anti bot
${antidelete ? '❌' : '✅'} Anti Delete
${antilink ? '✅' : '❌'} Anti Link
${antispam ? '✅' : '❌'} Anti Spam
${antitoxic ? '✅' : '❌'} Anti Toxic
${viewonce ? '✅' : '❌'} Anti ViewOnce
`.trim()
        await m.reply( pp, { text, mentions: [...groupAdmins.map(v => v.id), owner] } )
    }
}
