const DiscordJS = require("discord.js");
module.exports.run = (client, message, args) => {
  let chrome = new DiscordJS.MessageEmbed()
  .setTitle("Minecraft Chromebook Server")
  .setDescription("Client : https://banana-corp.tk/eaglercraft/javascript    Server: wss://banana-eag.tk/server ")
  .setColor("ORANGE")
  let crossplay = new DiscordJS.MessageEmbed()
  .setTitle("Crossplay server java & bedrock")
  .setDescription("still working on it")
  .setColor("DARK_ORANGE")
  
  message.channel.send({embed:chrome})
}

exports.name = "mc"