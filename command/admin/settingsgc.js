export default {
    command: ["group", "gc", "grup"],
    description: "set settings group",
    name: "set name gc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn, args }) => {

        let isClose = { // Switch Case Like :v
            'open': 'not_announcement',
            'close': 'announcement',
        }[(args[0] || '')]
        if (isClose === undefined)
            throw `
    *Format salah! Contoh :*
      *○ ${usedPrefix + command} close*
      *○ ${usedPrefix + command} open*
    `.trim()
        await conn.groupSettingUpdate(m.chat, isClose)
        m.reply(`Succes!`)
    }
}
