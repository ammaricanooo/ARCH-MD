export default {
    command: ["linkgroup", "linkgrup", "linkgc"],
    description: "link group",
    name: "linkgc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn, args }) => {

        let group = m.chat
        if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
        if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
        let groupMetadata = await conn.groupMetadata(group)
        if (!groupMetadata) throw 'groupMetadata is undefined :\\'
        if (!('participants' in groupMetadata)) throw 'participants is not defined :('
        m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
    }
}
