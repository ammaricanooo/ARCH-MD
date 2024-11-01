export default {
    command: ["setnamegc", "setname"],
    example: `Example: %p%cmd *text*`,
    description: "set name group",
    name: "setnamegc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn, args }) => {

        await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
        m.reply('Sukses mengganti nama group')
    }
}
