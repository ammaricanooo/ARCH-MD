const levelling = await import('../../system/lib/levelling.js');

let handler = {
    command: ['ceklevel', 'level', 'xp'],
    description: 'Cek level mu!',
    name: 'ceklevel',
    tags: 'games',
    group: true,
    run: async (m) => {
        let user = global.db.data.users[m.sender]
        if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
            let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
            throw `
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim()
        }
        let before = user.level * 1
        while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        if (before !== user.level) {
            m.reply(`
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
	`.trim())
        }
    }
}

export default handler;
