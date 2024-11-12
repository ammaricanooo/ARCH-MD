export default {
    command: ["enable"],
    description: "Make bot only owner can access",
    name: "enable",
    tags: "owner",

    admin: true,

    run: async (m, { text }) => {
        let chat = global.db.data.chats[m.chat]
        try {
            if (text == "antibot") {
                chat.antibot = true;
                console.log(chat.antibot)
                m.reply("Success enable anti bot!!");
            } else if (text == "antidelete") {
                chat.antidelete = true;
                console.log(chat.antidelete)
                m.reply("Success enable anti delete!!");
            } else if (text == "antilink") {
                chat.antilink = true;
                console.log(chat.antilink)
                m.reply("Success enable anti link!!");
            } else if (text == "antispam") {
                chat.antispam = true;
                console.log(chat.antispam)
                m.reply("Success enable anti spam!!");
            } else if (text == "antitoxic") {
                chat.antitoxic = true;
                console.log(chat.antitoxic)
                m.reply("Success enable anti toxic!!");
            } else if (text == "nsfw") {
                chat.nsfw = true;
                console.log(chat.nsfw)
                m.reply("Success enable nsfw!!");
            } else if (text == "simi") {
                chat.simi = true;
                console.log(chat.simi)
                m.reply("Success enable simi!!");
            } else if (text == "viewonce") {
                try {
                    chat.viewonce = true;
                    console.log(chat.viewonce)
                    m.reply("Success enable anti view once!!");
                } catch (error) {
                    m.reply(error)
                }
            } else {
                m.reply("Sorry");
            }
            console.log(chat)
        } catch (err) {
            m.reply("Sorry there have some error");
            console.log(err);
        }
    }
}
