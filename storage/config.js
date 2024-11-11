import fs from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import Function from "../system/lib/function.js";

//—————「 Setings your bot 」—————//
global.name = "Ammar Abdul Malik"; // your name
global.wm = "ARCH MD"; // your bot name

global.author = "Ammar Abdul Malik"; // author name
global.packname = "Created Sticker By";
global.link = "https://github.com/4marr"; //your github (if you have)

global.owner = ["62895702633030"]; // your number owner
<<<<<<< HEAD
global.pairingNumber = "62895702633030"; //your bot number
=======
global.pairingNumber = "6283866712646"; //your bot number
>>>>>>> 1a3ffb5f5c6c89992362446c4915f5e182d65179

global.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i;
global.thumbnail = fs.readFileSync("./storage/media/images.jpg");
global.ucapan = Function.timeSpeech();
global.func = Function;

global.msg = {
  owner: "Features can only be accessed owner!",
  group: "Features only accessible in group!",
  private: "Features only accessible private chat!",
  admin: "Features can only be accessed by group admin!",
  botAdmin: "Bot is not admin, can't use the features!",
  bot: "Features only accessible by me",
  premium: "Features only accessible by premium users",
  media: "Reply media...",
  query: "No Query?",
  wFormat: "Wrong Format!!",
  noText: "Input text",
  error:
    "Seems to have encountered an unexpected error, please repeat your command for a while again",
  quoted: "Reply message...",
  wait: "Wait a minute...",
  loading: "Loading...",
  searching: "Searching...",
  urlInvalid: "Url Invalid",
  notFound: "Result Not Found!",
  putLink: "where the link?",
  dlloading: "Downloading...",
};

global.dfail = (type, m, conn) => {
	let msg = {
		rowner: 'This command is for *R-OWNER* Only',
		owner: 'This command is for *OWNER* Only',
		mods: 'This command is for *MODS* Only',
		premium: 'This command is for *PREMIUM* Only\n\n> Please send *.order* to purchase the *Premium* plan',
		group: 'This command is for *GROUP* Only',
		private: 'This command is for *PRIVATE* Only',
		admin: 'This command is for *ADMINS* Only',
		botAdmin: 'This command is for *BOT-ADMINS* Only',
		onlyprem: 'This command is for *PREMIUM* Only',
		nsfw: 'This Command Has Not Been Activated In This Group.\n\n> Enable This Feature By Writing *.enable nsfw*',
		rpg: 'This Command Has Not Been Activated In This Group.\n\n> Enable This Feature By Writing *.enable rpg*',
		game: 'This Command Has Not Been Activated In This Group.\n\n> Enable This Feature By Writing *.enable game*',
		xmaze: 'This group does not allow this feature to be used. please join this group:\nhttps://chat.whatsapp.com/FJRtTzRKxP8A2wT6fcCW3s\n\n disable this feature by writing .enable allfitur',
		restrict: '*FEATURES TURNED OFF BY OWNERS*',
		unreg: '*Please register first by writing \`#register name.age\`*\n* Once you are registered, then you can use this command.\n\n*Registration example:*\n\n\`#register Mulyono.45\`\n\n*Notes:*\n* Make sure you write your name and age correctly.\n* You only need to register once.'
	} [type]

	if (msg) return m.reply('\`ACCESS DENIED\`\n\n' + msg)
}

global.number = { //using for donation, put your phone number here!
  Tri: "62895702633030", //your phone number 2 (opsional)
}

global.linkDonate = {  //using for donation, put your link donate here!
  saweria: "",
  trakteer: "https://trakteer.id/FazzRqy/tip",
}

global.APIs = {
  arifzyn: "https://api.arifzyn.tech",
  rose: "https://api.itsrose.rest",
  xyro: "https://api.xyro.fund",
  akane: "https://akane.my.id",
  itzpire: "https://itzpire.com",
  lolhuman: "https://api.lolhuman.xyz",
  nyxs: "https://api.nyxs.pw",
  agatz: "https://api.agatz.xyz",
  widipe: "https://widipe.com",
  neoxr: "https://api.neoxr.eu",
  ryzendesu: "https://api.ryzendesu.vip",
};

global.APIKeys = {
  lolhuman: "",
  nyxs: process.env.APIKEY || "",
  neoxr: process.env.APIKEY || "",
};

global.API = (name, path = "/", query = {}, apikeyqueryname) => {
  const baseUrl = name in global.APIs ? global.APIs[name] : name;
  const apiKey = apikeyqueryname ? global.APIKeys[baseUrl] : "";
  const queryParams = new URLSearchParams({
    ...query,
    ...(apikeyqueryname && apiKey ? { [apikeyqueryname]: apiKey } : {}),
  });

  return baseUrl + path + (queryParams.toString() ? "?" + queryParams : "");
};

//—————「 Don"t change it 」—————//
let file = fileURLToPath(import.meta.url);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update config.js"));
  import(`${file}?update=${Date.now()}`);
});
