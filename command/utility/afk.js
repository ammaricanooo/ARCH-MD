export default {
    command: ["afk"],
    description: "Set your status to AFK",
    name: "afk",
    tags: "utility",

    group: true,

    run: async (m, { conn, text, args }) => {
        let name = m.pushName || conn.getName(m.sender);
        let user = global.db.data.users[m.sender];

        user.afk = +new Date();
        user.afkReason = text || "No Reason";

        m.reply(
            `@${m.sender.split('@')[0]} sedang AFK dengan alasan: ${text ? text : "tidak ada alasan"}`,
        );
        // Memeriksa apakah pengguna yang ditandai sedang AFK
        let jids = [
            ...new Set([
                ...(m.mentionedJid || []),
                ...(m.quoted ? [m.quoted.sender] : []),
            ]),
        ];
        for (let jid of jids) {
            let mentionedUser = global.db.data.users[jid];
            if (!mentionedUser) continue;
            let afkTime = mentionedUser.afk;
            if (!afkTime || afkTime < 0) continue;
            let reason = mentionedUser.afkReason || "";
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? "dengan alasan " + reason : "tanpa alasan"}
Selama ${((new Date() - afkTime) / 1000 / 60).toFixed(1)} menit
        `);
        }
    },
};
