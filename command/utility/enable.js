<<<<<<< HEAD
export default {
    command: ["enable"],
    description: "Make bot only owner can access",
    name: "disable",
    tags: "owner",

    owner: true,

    run: async (m) => {
      let chat = global.db.data.chats[m.chat]
      try {
        chat.antitoxic = true;
        console.log(chat.antitoxic)
            m.reply("Success enable!!");
        } catch (err) {
            m.reply("Sorry there have some error");
            console.log(err);
        }
    }
  }
=======
export default {
    command: ["enable"],
    description: "Make bot only owner can access",
    name: "disable",
    tags: "owner",

    owner: true,

    run: async (m) => {
      let chat = global.db.data.chats[m.chat]
      try {
        chat.antitoxic = true;
        console.log(chat.antitoxic)
            m.reply("Success enable!!");
        } catch (err) {
            m.reply("Sorry there have some error");
            console.log(err);
        }
    }
  }
>>>>>>> 1a3ffb5f5c6c89992362446c4915f5e182d65179
