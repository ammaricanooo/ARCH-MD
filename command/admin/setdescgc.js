export default {
    command: ["setdescgc", "setdesc", "setdesk"],
    example: `Example: %p%cmd *text*`,
    description: "set desc group",
    name: "setdescgc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn, text }) => {
        if(!text) throw 'Isi?'

        await conn.groupUpdateDescription(m.chat, text);
        m.reply('Sukses mengganti deskripsi group')
    }
}
