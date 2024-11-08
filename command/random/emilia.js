export default {
    command: ["emilia"],
    description: "generate a random anime",
    name: "emilia",
    tags: "random",
  
    loading: true,
  
    run: async (m, { text, conn}) => {
        let json = await func.fetchJson(
            'https://raw.githubusercontent.com/inirey/result-rest-api/refs/heads/main/random%20anime/emilia.json'
        );
        json = json[Math.floor(Math.random() * json.length)];

        let caption = "nih kak"
        await m.reply(json, { caption, mimetype: 'image/jpeg' })
    }
  }
  