export default {
    command: ["ytmp4", "ytv", "ytvp4"],
    description: "Download youtube video",
    name: "ytv",
    tags: "download",

    run: async (m) => {
        const Url = m.args[0]
        const apikeys = global.APIKeys.neoxr

        if (!Url) throw `${m.prefix + m.command} \`\`\`youtube Url\`\`\``

        if (m.args[1] == 'sd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
                m.reply(global.msg.dlloading)
                const ApiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(Url)}`

                console.log(ApiUrl);

                let response;

                try {
                    response = await func.fetchJson(ApiUrl)
                } catch (error) {
                    console.error(error)
                }

                const { title, channel, duration, views, ago } = response.result
                // const size = response.result
                const url = response.result.mp4

                console.log(response)

                let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${ago || "Unknown"}
        `

                const sendFile = url

                try {
                    await conn.sendMessage(m.chat, { caption: `${replyText}`, video: { url: `${sendFile}` } })
                } catch (err) {
                    m.reply("There was a slight problem while sending the video.")
                    console.error(err);
                }
            }
        }
        else if (m.args[1] == 'hd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
                m.reply(global.msg.dlloading)
                const ApiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(Url)}`

                console.log(ApiUrl);

                let response;

                try {
                    response = await func.fetchJson(ApiUrl)
                } catch (error) {
                    console.error(error)
                }

                const { title, channel, duration, views, ago } = response.result
                // const size = response.result
                const url = response.result.mp4

                console.log(response)

                let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${ago || "Unknown"}
        `

                const sendFile = url

                try {
                    await conn.sendMessage(m.chat, { caption: `${replyText}`, video: { url: `${sendFile}` } })
                } catch (err) {
                    m.reply("There was a slight problem while sending the video.")
                    console.error(err);
                }
            }
        }
        else if (m.args[1] == 'fhd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
                m.reply(global.msg.dlloading)
                const ApiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(Url)}`

                console.log(ApiUrl);

                let response;

                try {
                    response = await func.fetchJson(ApiUrl)
                } catch (error) {
                    console.error(error)
                }

                const { title, channel, duration, views, ago } = response.result
                // const size = response.result
                const url = response.result.mp4

                console.log(response)

                let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${ago || "Unknown"}
    `

                const sendFile = url

                try {
                    await conn.sendMessage(m.chat, { caption: `${replyText}`, video: { url: `${sendFile}` } })
                } catch (err) {
                    m.reply("There was a slight problem while sending the video.")
                    console.error(err);
                }
            }
        }
        else if (m.args[1] == 'qhd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
                m.reply(global.msg.dlloading)
                const ApiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(Url)}`

                console.log(ApiUrl);

                let response;

                try {
                    response = await func.fetchJson(ApiUrl)
                } catch (error) {
                    console.error(error)
                }

                const { title, channel, duration, views, ago } = response.result
                // const size = response.result
                const url = response.result.mp4

                console.log(response)

                let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${ago || "Unknown"}
        `

                const sendFile = url

                try {
                    await conn.sendMessage(m.chat, { caption: `${replyText}`, video: { url: `${sendFile}` } })
                } catch (err) {
                    m.reply("There was a slight problem while sending the video.")
                    console.error(err);
                }
            }
        }
        else {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
                m.reply(global.msg.dlloading)
                const ApiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(Url)}`

                console.log(ApiUrl);

                let response;

                try {
                    response = await func.fetchJson(ApiUrl)
                } catch (error) {
                    console.error(error)
                }

                const { title, channel, duration, views, ago } = response.result
                // const size = response.result
                const url = response.result.mp4

                console.log(response)

                let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${ago || "Unknown"}
        `

                const sendFile = url

                try {
                    await conn.sendMessage(m.chat, { caption: `${replyText}`, video: { url: `${sendFile}` } })
                } catch (err) {
                    m.reply("There was a slight problem while sending the video.")
                    console.error(err);
                }
            }
        }
    }
}
