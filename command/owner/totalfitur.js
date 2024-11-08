export default {
    command: ["totalfitur", "totalf"],
    description: "Total fitur bot",
    name: "totalfitur",
    tags: "owner",

    owner: true,

    run: async (m) => {
        let totalf = Object.values(global.plugins).filter(
            (v) => v.help && v.tags
          ).length
          m.reply(`Total Fitur saat ini: ${totalf}`, m)        
}
}
