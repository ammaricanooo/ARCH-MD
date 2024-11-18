export default {
    //kosongkan saja jika ingin mematikan
    command: ["allmenu", "menuall"],
    description: "",
    example: "", //%p = prefix, %cmd = command, %text = teks
    name: "",
    tags: "",

    run: async (m, { conn, text, args, isPrem, command }) => {
        //your script code
        // const number = m.args[0].replace("@", "");
        const user = `${m.sender.split('@')[0]}@s.whatsapp.net`;
        console.log(user)
        let prem = global.db.data.users[user].premium
        let balance = global.db.data.users[user].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        let level = global.db.data.users[user].level
        const messages = `Halo @${m.sender.split('@')[0]}👋
${ucapan}
Prefix : 「 ${m.prefix} 」

┌─〔 *Bot Info* 〕
│• *Database* : MongoDB
│• *Library* : WhiskeySockets/Baileys
│• *Domain* : www.ammaricano.my.id
└────

┌─〔 *User Info* 〕
│• *Name* : ${m.pushName}
│• *Limit* : ∞
│• *Balance* : ${balance}
│• *Level* : ${level}
│• *Premium* : ${prem}
└────

┌─〔 *Group-Chat* 〕
│• ${m.prefix}add <number>
│• ${m.prefix}afk <reason>
│• ${m.prefix}demote <tag admin>
│• ${m.prefix}group <open/close>
│• ${m.prefix}hidetag/totag/tag <text>
│• ${m.prefix}infogrup
│• ${m.prefix}kick <tag member>
│• ${m.prefix}leave
│• ${m.prefix}linkgc/linkgrup
│• ${m.prefix}promote <tag member>
│• ${m.prefix}setdescgc <text>
│• ${m.prefix}setnamegc <text>
│• ${m.prefix}tagall
└────

┌─〔 *Artificial Intelegents* 〕
│• ${m.prefix}ai/openai <text>
│• ${m.prefix}blackbox <text>
│• ${m.prefix}flux <text>
│• ${m.prefix}gemini <text>
│• ${m.prefix}voicenahida <text>
│• ${m.prefix}waifudiff <text>
└────

┌─〔 *Fun* 〕
│• ${m.prefix}wangy <name>
│• ${m.prefix}apakah <text>
└────

┌─〔 *Games* 〕
│• ${m.prefix}asahotak
│• ${m.prefix}caklontong
│• ${m.prefix}siapakahaku
│• ${m.prefix}susunkata
│• ${m.prefix}tebakgambar
│• ${m.prefix}tebakkalimat
│• ${m.prefix}tebaklirik
└────

┌─〔 *Information* 〕
│• ${m.prefix}bioskopnow
│• ${m.prefix}infoloker <query>
│• ${m.prefix}jadwalsholat <city>
└────

┌─〔 *Maker & Convert* 〕
│• ${m.prefix}sticker (*Perbaikan*)
└────

┌─〔 *Main* 〕
│• ${m.prefix}allmenu
│• ${m.prefix}creator
│• ${m.prefix}delete <tag msg bot>
│• ${m.prefix}donasi
│• ${m.prefix}instaowner
│• ${m.prefix}githubowner
│• ${m.prefix}join <url>
│• ${m.prefix}menu
│• ${m.prefix}ping
│• ${m.prefix}report <text>
│• ${m.prefix}request <text>
│• ${m.prefix}sms <number> <text>
└────

┌─〔 *Media & Download* 〕
│• ${m.prefix}fbdl <url> (*Perbaikan*)
│• ${m.prefix}gdr <url> (*Perbaikan*)
│• ${m.prefix}igdl <url> (*Perbaikan*)
│• ${m.prefix}mediafire <url> (*Perbaikan*)
│• ${m.prefix}tikdl/tiktok <url>
│• ${m.prefix}twitter <url> (*Perbaikan*)
│• ${m.prefix}play <title>
│• ${m.prefix}sptdl <url>
│• ${m.prefix}ytmp4 <url>
│• ${m.prefix}ytmp3 <url>
│• ${m.prefix}lyrics <title>
└────

┌─〔 *NSFW* 〕
│• ${m.prefix}neko ⓟ
└────

┌─〔 *Random* 〕
│• ${m.prefix}akira
│• ${m.prefix}akiyama
│• ${m.prefix}ana
│• ${m.prefix}asuna
│• ${m.prefix}ayuzawa
│• ${m.prefix}boruto
│• ${m.prefix}chitanda
│• ${m.prefix}chitoge
│• ${m.prefix}deidra
│• ${m.prefix}doraemon
│• ${m.prefix}elaina
│• ${m.prefix}emilia
│• ${m.prefix}kataanime
└────

┌─〔 *Religi* 〕
│• ${m.prefix}ayatkursi
│• ${m.prefix}kisahnabi <name>
│• ${m.prefix}qislam
└────

┌─〔 *Search* 〕
│• ${m.prefix}chord <title>
│• ${m.prefix}google <query>
│• ${m.prefix}pint <query>
│• ${m.prefix}yts <title>
└────

┌─〔 *Stalker* 〕
│• ${m.prefix}ghs <url>
│• ${m.prefix}igs <username>
└────

┌─〔 *Tools* 〕
│• ${m.prefix}fetch <url>
│• ${m.prefix}q <tag msg> (*Perbaikan*)
│• ${m.prefix}rvo <tag msg>
│• ${m.prefix}ssweb <url>
│• ${m.prefix}tourl <gambar> (*Perbaikan*)
│• ${m.prefix}upsclae/hd <gambar>
└────

┌─〔 *Owner* 〕
│• ${m.prefix}addbalance
│• ${m.prefix}addprem
│• ${m.prefix}backup
│• ${m.prefix}banchat
│• ${m.prefix}block
│• ${m.prefix}creategc
│• ${m.prefix}getcmd
│• ${m.prefix}getfile
│• ${m.prefix}leave
│• ${m.prefix}listprem
│• ${m.prefix}public
│• ${m.prefix}react
│• ${m.prefix}savecmd
│• ${m.prefix}savefile
│• ${m.prefix}self
│• ${m.prefix}sendplugins
│• ${m.prefix}shutdown
│• ${m.prefix}stickcmd
│• ${m.prefix}test
│• ${m.prefix}unbanchat
│• ${m.prefix}unblock
└────
`
        let name = await conn.getName(m.sender)
        let fkon = {
            key: {
                fromMe: true,
                participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
                ...(m.chat ? { remoteJid: '16500000000@s.whatsapp.net' } : {})
            },
            message: {
                contactMessage: {
                    displayName: `${name}`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    verified: true
                }
            }
        };

        // m.reply(`${messages}`)
        conn.relayMessage(m.chat, {
            extendedTextMessage: {
                text: messages,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: global.wm,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://cdn.arifzyn.tech/f/9k2rxo6w.jpg',
                        sourceUrl: global.link,
                        body: "Copyright © Ammar 2024 - All Right Reserved",
                    }
                }, mentions: m.mentionedJid
            }
        }, { quoted: m });
    },
};
