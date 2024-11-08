export default {
    command: ["chitoge"],
    description: "generate a random anime",
    name: "chitoge",
    tags: "random",
  
    loading: true,
  
    run: async (m, { text, conn}) => {
        let json = await func.fetchJson(
            'https://raw.githubusercontent.com/inirey/result-rest-api/refs/heads/main/random%20anime/chitoge.json'
        );
        json = json[Math.floor(Math.random() * json.length)];

        let caption = "nih kak"
        await m.reply(json, { caption, mimetype: 'image/jpeg' })
    }
  }
  