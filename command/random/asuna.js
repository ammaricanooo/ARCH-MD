export default {
    command: ["asuna"],
    description: "generate a random anime",
    name: "asuna",
    tags: "random",
  
    loading: true,
  
    run: async (m, { text, conn}) => {
        let json = await func.fetchJson(
            'https://raw.githubusercontent.com/inirey/result-rest-api/refs/heads/main/random%20anime/asuna.json'
        );
        json = json[Math.floor(Math.random() * json.length)];

        let caption = "nih kak"
        await m.reply(json, { caption, mimetype: 'image/jpeg' })
    }
  }
  