export default {
    command: ["l", "l"],
    description: "Chekc lesbi",
    name: "lesbi",
    tags: "utility",

    run: async (m, { conn, text, args }) => {
        let name = m.pushName || conn.getName(m.sender);
        let user = global.db.data.users[m.sender];
        let randomnum = Math.floor(Math.random() * 100) + 1;

        m.reply(
            `tingkat lesbi ${text} adalah ${randomnum}%`,
        );
},
}
