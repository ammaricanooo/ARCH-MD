export default {
    command: ["g", "g"],
    description: "Check gay",
    name: "gay",
    tags: "utility",

    run: async (m, { conn, text, args }) => {
        let name = m.pushName || conn.getName(m.sender);
        let user = global.db.data.users[m.sender];
        let randomnum = Math.floor(Math.random() * 100) + 1;

        m.reply(
            `tingkat gay ${text} adalah ${randomnum}%`,
        );
},
}
