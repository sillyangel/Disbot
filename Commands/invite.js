const DiscordJS = require("discord.js")
module.exports.run = (client, message, args) => {
  let embed = new DiscordJS.MessageEmbed()
  .setTitle("Server Invite")
  .setDescription("discord.gg/3EAVwR26cW")
  .setFooter("Server Invite")
  message.channel.send({embed:embed})
}

exports.name = "invite"