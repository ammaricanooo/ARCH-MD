export default {
    command: ["cecan"],
    description: "generate a random anime",
    name: "cecan",
    tags: "random",
  
    loading: true,
  
    run: async (m, { text, conn}) => {
        let json = await func.fetchJson(
            'https://raw.githubusercontent.com/inirey/result-rest-api/refs/heads/main/cecan/cecan3.json'
        );
        json = json[Math.floor(Math.random() * json.length)];

        let caption = "nih kak"
        await m.reply(json, { caption, mimetype: 'image/jpeg' })
    }
  }
  