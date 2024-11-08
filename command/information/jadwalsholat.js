import { jadwalsholat } from '@bochilteam/scraper'

export default {
    command: ["jadwalsholat", "jadwalshalat", "jadwalsalat", "jadwalsolat"],
    description: "Get information about prayer schedules",
    name: "jadwalsholat",
    tags: "information",

    loading: true,

    run: async (m, { conn, command, text, usedPrefix }) => {
        if (!text) throw `Use example ${m.prefix}${command} bogor`;

        let kota = text.split(" ")[0];
        const search = await jadwalsholat(kota);

        const todayDate = new Date();
        let day = todayDate.getDate();
        if (!text.includes("all")) {
            let teks = `[ *JADWAL SHOLAT HARI INI* ]
${day} ${search.date}\n
Shubuh: ${search.today.Shubuh}
Dzuhur: ${search.today.Dzuhur}
Ashar: ${search.today.Ashr}
Maghrib: ${search.today.Maghrib}
Isya: ${search.today.Isya}`

            m.reply(teks)
        } else {
            let teks = search.list.map(v => {
                return `[ *JADWAL SHOLAT* ]
*DATE ${v.date}*\n
Imsyak: ${v.imsyak}
Shubuh: ${v.shubuh}
Terbit: ${v.terbit}
Dhuha: ${v.dhuha}
Dzuhur: ${v.dzuhur}
Ashar: ${v.ashr}
Maghrib: ${v.magrib}
Isya: ${v.isyak}`
            }).filter(v => v).join('\n*—————————————————*\n\n')



            m.reply(teks)
        }
    }
}
