export default {
    command: ["tt", "tiktok", "tikdl"],
    name: "tiktok",
    tags: "download",

    run: async (m) => {

        const url = m.args[0]
        const qy = m.args[1]
        if (!url) {
            m.reply(`example: ${m.prefix + m.command} https://vm.tiktok.com/ZSYWAJDRP/ video`)
        } else {

            let cekUrl = /https:\/\/(www\.|vm\.|vt\.)?tiktok\.com\/.*/
            let match = url.match(cekUrl)
            if (!match) {
                m.reply("Make sure you put the url correcly!")
            } else {

                if (qy == "audio") {
                    m.reply(global.msg.dlloading)
                    const apikeys = global.APIKeys.neoxr

                    const ApiUrl = `$https://api.nyxs.pw/dl/tiktok?url=${url}`

                    let response

                    try {
                        response = await func.fetchJson(ApiUrl)
                    } catch (err) {
                        console.log(err)
                    }

                    //   if (!response.data) throw "Sorry error, please make sure you put the correct link!"

                    const audio = response.result.audio
                    const txt = response.result.caption

                    try {
                        m.reply(global.msg.dlloading)
                        await conn.sendMessage(m.chat, { caption: "Nih kak..", audio: { url: `${audio}` } })
                    } catch (e) {
                        m.reply(e)
                        console.log(e)
                    }
                } else if (qy == "image") {

                    const apikeys = global.APIKeys.neoxr

                    const ApiUrl = `https://api.nyxs.pw/dl/tiktok?url=${url}`

                    let response

                    try {
                        response = await func.fetchJson(ApiUrl)
                    } catch (err) {
                        console.log(err)
                    }

                    //   if (!response.data) throw "Sorry error, please make sure you put the correct link!"

                    const image = response.data.result.image
                    const txt = response.result.caption

                    try {
                        m.reply(global.msg.dlloading)
                        await conn.sendMessage(m.chat, { caption: "Nih kak..", image: { url: `${image}` } })
                    } catch (e) {
                        m.reply(e)
                        console.log(e)
                    }
                } else if (qy == "video") {
                    const apikeys = global.APIKeys.neoxr

                    const ApiUrl = `https://api.nyxs.pw/dl/tiktok?url=${url}`

                    let response

                    try {
                        response = await func.fetchJson(ApiUrl)
                    } catch (err) {
                        console.log(err)
                    }

                    //   if (!response.data) throw "Sorry error, please make sure you put the correct link!"

                    const video = response.result.video
                    const txt = response.result.caption

                    try {
                        m.reply(global.msg.dlloading)
                        await conn.sendMessage(m.chat, { caption: "Nih kak..", video: { url: `${video}` } })
                    } catch (e) {
                        m.reply(e)
                        console.log(e)
                    }
                } else {

                    const apikeys = global.APIKeys.neoxr

                    const ApiUrl = `https://api.nyxs.pw/dl/tiktok?url=${url}`

                    let response

                    try {
                        response = await func.fetchJson(ApiUrl)
                    } catch (err) {
                        console.log(err)
                    }

                    //   if (!response.data) throw "Sorry error, please make sure you put the correct link!"

                    const video = response.data.result.video
                    const txt = response.result.desc

                    try {
                        m.reply(global.msg.dlloading)
                        await conn.sendMessage(m.chat, { caption: "Nih kak..", video: { url: `${video}` } })
                    } catch (e) {
                        m.reply(e)
                        console.log(e)
                    }
                }
            }
        }
    }
}
