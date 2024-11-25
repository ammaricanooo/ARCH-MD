export default {
    command: ["revoke", "revok"],
    description: "revoke group",
    name: "revoke",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { conn }) => {
        try {
            let rest = await conn.groupRevokeInvite(m.chat);
            let linked = 'https://chat.whatsapp.com/' + rest;

            m.reply(`*Link group berhasil diubah!*\n\n${linked}`);
        } catch (error) {
            console.error(error);
            m.reply('Failed to retrieve group invite link');
        }
    }
}
