export default {
  command: ["instagramowner", "instaowner", "igowner", "igow"],
  description: "show github owner this bot",
  name: "ghowner",
  tags: "main",

  loading: true,

  run: async (m) => {
    if (m.args[0]) {
      m.reply("don't add any text for this command!")
    } else {
        m.reply("https://instagram.com/ammaricano")

      setTimeout(() => {
        m.reply("This my owner Instagram, dont forget to follow")
      }, 1000)
    }
  }
}
