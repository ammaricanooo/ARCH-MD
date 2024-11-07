export default {
  command: ["disable"],
  description: "Make bot only owner can access",
  name: "self",
  tags: "owner",

  owner: true,

  run: async (m) => {
    let chat = global.db.data.chats[m.chat]
    try {
      chat.antitoxic = false;
      console.log(chat.antitoxic)
          m.reply("Success disable!!");
      } catch (err) {
          m.reply("Sorry there have some error");
          console.log(err);
      }
  }
}