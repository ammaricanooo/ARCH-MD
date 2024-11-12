export async function before(m) {
    //if (m.isBaileys && m.fromMe) return
    let chat = db.data.chats[m.chat]
    if (chat.viewonce && m.isGroup || m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = m.message

        try {
            msg[Object.keys(msg)[0]].viewOnce = false
        } catch (error) {
            return 0
        }

        val.message = msg
        await this.sendMessage(m.chat, { forward: val }, { quoted: m }, { caption: "[❗] Terdeteksi mengirim pesan sekali lihat!" })
    }
    return
}
