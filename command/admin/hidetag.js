export default {
    command: ['hidetag', 'ht', 'h', 'totag', 'tag'],
    example: `Example: %p%cmd *text*`,
    description: 'Tag all member mentions',
    name: 'hidetag',
    tags: 'group',

    group: true,
    admin: true,

    run: async (m, { conn }) => {
        const quoted = m.isQuoted ? m.quoted : m;
        let mentions = m.metadata.participants.map((a) => a.id);
        let mod = await conn.cMod(
            m.chat,
            quoted,
            /hidetag|tag|ht|h|totag/i.test(quoted.body)
                ? quoted.body.replace(m.prefix + m.command, '')
                : quoted.body
        );
        conn.sendMessage(m.chat, { forward: mod, mentions });
    },
};
