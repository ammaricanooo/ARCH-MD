import similarity from 'similarity';

const threshold = 0.92;
const timeout = 120000;
const winScore = 3499;

const handler = {
    command: ['tebakkalimat'],
    description: 'Mulai game Tebak Kalimat',
    name: 'tebakkalimat',
    tags: 'games',
    game: true,
    group: true,
    run: async (m, { conn }) => {
        conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {};
        const tebakkalimat_id = m.chat;

        if (tebakkalimat_id in conn.tebakkalimat) {
            m.reply(
                'Masih ada game Susun Kata yang belum terjawab di chat ini',
                conn.tebakkalimat[tebakkalimat_id].msg)
            return false;
        }

        conn.asahotak = conn.asahotak ? conn.asahotak : {};
        const asahotak_id = m.chat;

        if (asahotak_id in conn.asahotak) {
            m.reply(
                'Masih ada game Tebak Kalimat yang belum terjawab di chat ini',
                conn.asahotak[asahotak_id].msg)
            return false;
        }

        conn.caklontong = conn.caklontong ? conn.caklontong : {};
        const caklontong_id = m.chat;

        if (caklontong_id in conn.caklontong) {
            m.reply(
                'Masih ada game Cak Lontong yang belum terjawab di chat ini',
                conn.caklontong[caklontong_id].msg)
            return false;
        }

        conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {};
        const siapakahaku_id = m.chat;

        if (siapakahaku_id in conn.siapakahaku) {
            m.reply(
                'Masih ada game Siapakah Aku yang belum terjawab di chat ini',
                conn.siapakahaku[siapakahaku_id].msg)
            return false;
        }

        conn.susunkata = conn.susunkata ? conn.susunkata : {};
        const susunkata_id = m.chat;

        if (susunkata_id in conn.susunkata) {
            m.reply(
                'Masih ada game Susun Kata yang belum terjawab di chat ini',
                conn.susunkata[susunkata_id].msg)
            return false;
        }

        conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {};
        const tebakgambar_id = m.chat;

        if (tebakgambar_id in conn.tebakgambar) {
            m.reply(
                'Masih ada game Tebak Gambar yang belum terjawab di chat ini',
                conn.tebakgambar[tebakgambar_id].msg
            );
            return false;
        }

        conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {};
        const tebaklirik_id = m.chat;

        if (tebaklirik_id in conn.tebaklirik) {
            m.reply(
                'Masih ada game Tebak Lirik yang belum terjawab di chat ini',
                conn.tebaklirik[tebaklirik_id].msg)
            return false;
        }



        let json = await func.fetchJson(
            'https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json'
        );
        json = json[Math.floor(Math.random() * json.length)];

        let caption = `[ TEBAK KALIMAT ]

• *Question :* ${json.soal}
• *Timeout :* 60 seconds


Reply to this message to answer the question
Type *nyerah* to surrender`.trim();
        conn.tebakkalimat[tebakkalimat_id] = {
            tebakkalimat_id,
            msg: await m.reply(`${caption}`),
            ...json,
            terjawab: false,
            winScore,
            timeout: setTimeout(() => {
                if (conn.tebakkalimat[tebakkalimat_id]) {
                    // conn.reply(
                    //     m.chat,
                    //     `Waktu habis! Jawaban yang benar adalah: *${json.jawaban}*`,
                    //     conn.asahotak[asahotak_id].msg
                    // );
                    m.reply(`Waktu habis! Jawaban yang benar adalah: *${json.jawaban}*`,)
                    delete conn.tebakkalimat[tebakkalimat_id];
                }
            }, timeout),
        };
    },

    before: async (m) => {
        conn.tebakkalimat = conn.tebakkalimat || {};
        let id = m.chat;

        if (!conn.tebakkalimat[id]) return;

        let json = conn.tebakkalimat[id];
        let reward = db.data.users[m.sender];

        if (
            m.body.toLowerCase() === 'nyerah' ||
            m.body.toLowerCase() === 'surrender'
        ) {
            clearTimeout(conn.tebakkalimat[id].timeout);
            m.reply(
                `Game Over!! Kamu menyerah! Jawaban yang benar adalah: *${json.jawaban}*`,
                json.msg
            );
            delete conn.tebakkalimat[id];
        } else if (
            m.body.toLowerCase() === json.jawaban.toLowerCase() ||
            similarity(m.body.toLowerCase(), json.jawaban.toLowerCase()) >= threshold
        ) {
            reward.balance += json.winScore;
            reward.limit += 5;

            clearTimeout(conn.tebakkalimat[id].timeout);
            await conn.sendQuick(
                m.chat,
                `Selamat @${m.sender.split('@')[0]} 🎉 Jawaban kamu benar!
balance kamu bertambah sebesar: ${json.winScore} dan limit kamu juga bertambah sebesar: 5 limit!


Mau main lagi?`,
                wm,
                null,
                [['Main Lagi', '.tebakkalimat']],
                m
            );
            delete conn.tebakkalimat[id];
        } else {
            conn.sendMessage(m.chat, {
                react: {
                    text: '❌',
                    key: m.key,
                },
            });
        }
    },
};

export default handler;
