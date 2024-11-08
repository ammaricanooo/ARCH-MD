import * as cheerio from 'cheerio';
import fetch from 'node-fetch'

export default {
    command: ["infoloker"],
    description: "Get the latest information from job vacancies",
    name: "bioskopNow",
    tags: "information",

    loading: true,

    run: async (m, { conn, command, text, usedPrefix }) => {
        if (!text) return m.reply("Input query\nExample: .infoloker programmer")
        try {
            let res = await infoloker(text);
            res = res.slice(0, 11);
            let teks = res.map((item, index) => {
                return `🔍 *[ RESULT ${index + 1} ]*
📰 *Title:* ${item.job || 'Tidak diketahui'}
🏢 *Perusahaan:* ${item.perusahaan || 'Tidak diketahui'}
📍 *Daerah:* ${item.daerah || 'Tidak diketahui'}
🔗 *Link Detail:* ${item.link_Detail || 'Tidak diketahui'}
⬆️ *Upload:* ${item.upload || 'Tidak diketahui'}
        `;
            }).filter(v => v).join("\n\n________________________\n\n");
            await m.reply(teks)
        } catch (e) {
            await m.reply(eror)
        }
    }
}

async function infoloker(query) {
    const url = `https://www.jobstreet.co.id/id/job-search/${query}-jobs/`;
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);
    const format = [];

    $('article').each((a, article) => {
        const job = $(article).find('h1 a div').text();
        const perusahaan = $(article).find('span').eq(0).text();
        const daerah = $(article).find('span span').text();
        const link_Detail = 'https://www.jobstreet.co.id' + $(article).find('h1 a').attr('href');
        const upload = $(article).find('div > time > span').text();

        format.push({ job, perusahaan, daerah, upload, link_Detail });
    });

    return format;
}
