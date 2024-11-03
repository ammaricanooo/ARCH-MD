export default {
    //kosongkan saja jika ingin mematikan
    command: ["allmenu", "menuall"],
    description: "",
    example: "", //%p = prefix, %cmd = command, %text = teks
    name: "",
    tags: "",

    run: async (m, { conn, text, args, isPrem, command }) => {
        //your script code
        const messages = `Halo @${m.sender.split('@')[0]}👋
${ucapan}
Prefix : 「 ${m.prefix} 」

┌─〔 *Bot Info* 〕
│• *Database* : MongoDB
│• *Library* : WhiskeySockets/Baileys
│• *Domain* : www.ammaricano.my.id
└────

┌─〔 *Group-Chat* 〕
│• ${m.prefix}group <open/close>
│• ${m.prefix}linkgc/linkgrup
│• ${m.prefix}add <number>
│• ${m.prefix}kick <tag member>
│• ${m.prefix}hidetag/totag/tag <text>
│• ${m.prefix}leave
│• ${m.prefix}promote <tag member>
│• ${m.prefix}demote <tag admin>
│• ${m.prefix}setnamegc <text>
│• ${m.prefix}afk <reason>
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
│• ${m.prefix}play <url> (*Perbaikan*)
│• ${m.prefix}ytmp4 <url> 
│• ${m.prefix}ytmp3 <url>
│• ${m.prefix}lyrics <title>
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
└────

┌─〔 *Religi* 〕
│• ${m.prefix}ayatkursi
│• ${m.prefix}kisahnabi <name>
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
`
let name = await conn.getName(m.sender)
let fkon = {
    key: {
      fromMe: false,
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
                  title: global.wm,
                  mediaType: 1,
                  previewType: 0,
                  renderLargerThumbnail: true,
                  thumbnailUrl: 'https://8030.us.kg/file/QhKG9flPdkH8.png',
                  sourceUrl: global.link,
                  body: "Copyright © Ammar 2024 - All Right Reserved",
                }
              }, mentions: [m.sender]
            }
          }, { quoted: fkon });
    },
};
