export default {
    command: ["disable", "dis"],
    description: "Make bot only owner can access",
    name: "disable",
    tags: "owner",

    admin: true,

    run: async (m, { text }) => {
        let chat = global.db.data.chats[m.chat]
        try {

            if (text == "antibot") {
                chat.antibot = false;
                console.log(chat.antibot)
                m.reply("Success disable anti bot!!");
            } else if (text == "antidelete") {
                chat.antidelete = false;
                console.log(chat.antidelete)
                m.reply("Success disable anti delete!!");
            } else if (text == "antilink") {
                chat.antilink = false;
                console.log(chat.antilink)
                m.reply("Success disable anti link!!");
            } else if (text == "antispam") {
                chat.antispam = false;
                console.log(chat.antispam)
                m.reply("Success disable anti spam!!");
            } else if (text == "antitoxic") {
                chat.antitoxic = false;
                console.log(chat.antitoxic)
                m.reply("Success disable anti toxic!!");
            } else if (text == "nsfw") {
                chat.nsfw = false;
                console.log(chat.nsfw)
                m.reply("Success disable nsfw!!");
            } else if (text == "simi") {
                chat.simi = false;
                console.log(chat.simi)
                m.reply("Success disable simi!!");
            } else if (text == "antisticker") {
                chat.antisticker = false;
                console.log(chat.antisticker)
                m.reply("Success enable antisticker!!");
            } else if (text == "antifoto") {
                chat.antifoto = false;
                console.log(chat.antifoto)
                m.reply("Success enable antifoto!!");
            } else if (text == "viewonce") {
                chat.viewonce = false;
                console.log(chat.viewonce)
                m.reply("Success disable anti view once!!");
            } else {
                m.reply(`List option:
| antifoto
| antitoxic
| antisticker
| viewoce
| simi`);
            }

        } catch (err) {
            m.reply("Sorry there have some error");
            console.log(err);
        }
    }
}
