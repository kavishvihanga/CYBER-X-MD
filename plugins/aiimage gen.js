const { cmd } = require('../command');
const axios = require('axios');
cmd({
    pattern: "genimg",
    alias: ["aiimg", "generateimg", "aiimage"],
    desc: "Generate AI Images using Stable Diffusion",
    category: "ai",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(`
*🤖 CYBER_X_MD 𝐀𝐈 𝐈𝐌𝐀𝐆𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑 🖼️*

Usage: .sula <image description>
Example: .sula Beautiful landscape with mountains

> 🄿🄾🅆🄴🅁🄳 🅱🆈 CYBER_X_MD 😈*
`);
        await m.react("🔄");

        const apiUrl = `https://dark-shan-yt.koyeb.app/ai/generate-image-v2?prompt=${encodeURIComponent(q)}`;

        const response = await axios({
            method: 'get',
            url: apiUrl,
            responseType: 'arraybuffer',
            timeout: 60000 // 60 seconds timeout
        });

        if (!response.data) {
            return reply("❌ Failed to generate image. No data received.");
        }

        // Send the generated image
        await conn.sendMessage(from, {
            image: response.data,
            caption: `*CYBER_X_MD 𝐀𝐈 𝐈𝐌𝐀𝐆𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑 🖼️*

*📝 Prompt:* ${q}

*Model:* Stable Diffusion
> 🄿🄾🅆🄴🅁🄳 🅱🆈 CYBER_X_MD 😈*
`,
            quoted: mek
        });

        // React to successful image generation
        await m.react("✅");

    } catch (error) {
        console.error(" CYBER_X_MDImage Generation Error:", error);
        
        // React to error
        await m.react("❌");

        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            if (error.response.status === 429) {
                return reply("⏳ Too many requests. Please try again later.");
            } else if (error.response.status === 500) {
                return reply("🚫 Server error. Unable to generate image.");
            } else {
                return reply(`❌ Error: ${error.response.status} - ${error.response.statusText}`);
            }
        } else if (error.request) {
            console.log(error.request);
            return reply("🌐 No response received from the server. Check your internet connection.");
        } else {
            console.log('Error', error.message);
            return reply(`❌ An unexpected error occurred: ${error.message}`);
        }
    }
});
