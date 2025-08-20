const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = 'CYBER-X-MD';
        const repolink = `⭕ *CYBER_X_MD Github Repository*

   https://github.com/kavishvihanga/CYBER-X-MD.git

⭕ *CYBER_X_MD DIPLOY HEROKU*



⭕ *CYBER_X_MD WEB 📍*



⭕ *WHATSAPP CHANNEL :*

https://whatsapp.com/channel/0029Vb6D1AJ9Bb67Ygoqg72i

⭕ *Contact Owner :*

> wa.me/94770483357
            
⭕ *CYBER-X-MD Talkdrove Diploy*
 
*ඔය Link එකෙන් ගිහින් Account එකක් හදාගන්න👇*



*මේ Link එකෙන් ගිහින් Bot ව Diploy කරගන්න👇*

> COMING SOON`;

        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/4n0vvj5g/SulaMd.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: 'CYBER-X-MD',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
