import axios from "axios"
export default {
  command: ["instagramstalk", "igstalk", "igs", "sig"],
  description: "Stalker account Instagram",
  name: "igs",
  tags: "stalker",

  loading: true,

  run: async (m, { text }) => {
    if (!m.args[0]) {
      setTimeout(() => {
        m.reply(`Example: ${m.prefix + m.command} ammaricano`)
      }, 1000)
    } else {
    const user = text

    const apiUrl = `https://widipe.com/download/igstalk?username=${user}`

 let response

    try {
  response = await axios.get(apiUrl);
} catch (err) {
console.error(err)
}

//const {, , , , , postsCount} = response.result;

const photoUrl = response.data.result.photoUrl;
const username = response.data.result.username;
const fullName = response.data.result.fullName;
const bio = response.data.result.bio;
const followers = response.data.result.followers;
const following = response.data.result.following;
const postsCount = response.data.result.postsCount;

const txt = `
*Username:* ${username || "Unknown"}
*Full Name:* ${fullName || "Not Found"}
*Bio:* ${bio || "Unknown"}
*Followers:* ${followers || "0"}
*Following:* ${following || "0"}
*Total Post:* ${postsCount || "0"}`;

try {
await m.reply(photoUrl, { caption: txt});
} catch (err) {
console.error(err)
m.reply("Username tidak ditemukan!")
}
    }
  }
}
