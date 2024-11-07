export default {
    command: ["kataanime"],
    description: "generate a quotes random from anime",
    name: "kataanime",
    tags: "random",

    loading: true,

    run: async (m, { text, conn }) => {
        let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
        if (!res.ok) throw await res.text()
        let json = await res.json()
        if (!json.result[0]) throw json
        let { indo, character, anime } = json.result[0]
        m.reply(`${indo}\n\n${character}\n${anime}`)
    }
}
