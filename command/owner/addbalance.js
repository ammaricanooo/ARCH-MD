export default {
    command: ["addbalance"],
    name: "addbalance",
    tags: "owner",
  
    owner: true,
  
    run: async (m, { conn, text, usedPrefix, command }) => {
        let user;
        if (m.isGroup) {
            user = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : false;
        } else {
            user = text.split(' ')[0];
            user = user.replace('@', '') + '@s.whatsapp.net';
        }
    
        let userData = db.data.users[user];
        if (!userData) throw `User not found!`;
    
        // Extract the user's phone number from the text
        let phoneNumber = user.split('@')[0];
    
        if (!phoneNumber) throw `where the number of days?`;
        if (isNaN(phoneNumber)) return m.reply(`only number!\n\nexample:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`);
    
        let txt = text.split(' | ')[1]; // Extract the second part of the text (duration)
    
        userData.balance += parseInt(txt);
    
        m.reply(`✔️ Success
    📛 *Name:* ${userData.name}
    📉 *Balance:* ${userData.balance}`);
    
    },
  };
  