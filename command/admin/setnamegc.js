export default {
    command: ["setnamegc", "setname"],
    description: "set name group",
    name: "set name gc",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn, args }) => {

        await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
        m.reply('Sukses mengganti nama group')
    }
}
