let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|pu(k|q)i ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|dontol|kontoi|ontol/i // tambahin sendiri

export function before(m, { isBotAdmin }) {
    //if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.body)
    console.log(isBadword)

    if (chat.antitoxic && isBadword) {
        user.balance -= 5000
        m.reply('Hey Jangan Toxic Ya!!\n' + `Balance kamu berkurang sebesar: *5000*\n` + '\nUntuk mematikan ketik *.disable antibadword* (only group admins)')
        if (user.warning >= 50) {
            user.banned = false
            user.warning = 0
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                    //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}