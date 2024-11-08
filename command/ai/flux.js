import axios from "axios"

export default {
  command: ["bng"],
  description: "create an image using flux",
  name: "flux",
  tags: "ai",
  
  loading: true,
  
  run: async (m, { text }) => {
    if (!text) m.reply(`try generating an image with flux. \n\nexample: ${m.prefix + m.command} a girl with a cute cat`)
    const prompt = text
    
    const ApiUrl = "https://shinoa.us.kg/api/image/Flux-Hyper"
    
    let response
    
    try {
      const payload = {
        text : `${prompt}`
    }
      const options = {
        headers: {
          'api_key': 'kyuurz',
        }
    }
      response = await axios.post(ApiUrl, payload, options)
    } catch (err) {
      console.error(err)
    }
    
    const mangkupurel = await response.data
    console.log(mangkupurel)
    let result = mangkupurel.data.result.image
    
    try {
      await m.reply( result,  { caption: "nih", mimetype: "image/jpeg"} )
    } catch (err) {
      // m.reply("Error: " + err)
      m.reply("Terjadi kesalahan pada sistem, silahkan coba beberapa saat lagi..")
      console.error(err)
    }
  }
}