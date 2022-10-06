require("dotenv").config();
module.exports = {
  token: process.env.Token || "OTM3MDAzMjMyNDc0MDQ2NTU0.G17S40.LtchYREx_Vt89GXkVVAUra9lX22WUkJBXpyrLM",
  mongo: process.env.MongoDb || "mongodb+srv://Apera:6291@cluster0.7qkb4.mongodb.net/aperaCanary",
  prefix: ".",
  audionodes: [
    {
      name: "Main",
      url: "lava4.cruzstudio.tech:80",
      auth: "cruzstudio.tech",
    },
  ],
  embed_color: process.env.Color || "#2f3136",
  icon: process.env.Icon || "https://media.discordapp.net/attachments/1010015550786777189/1015203575678390374/image_4.jpg?width=689&height=689",
  links: {
    support: `https://media.discordapp.net/attachments/1010015550786777189/1015203575678390374/image_4.jpg?width=689&height=689`,
    invite: `https://media.discordapp.net/attachments/1010015550786777189/1015203575678390374/image_4.jpg?width=689&height=689`,
    vote: `https://media.discordapp.net/attachments/1010015550786777189/1015203575678390374/image_4.jpg?width=689&height=689`
  }
};
