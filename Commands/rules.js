const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Rules")
  .setDescription("go to the rules channel note:im lazy to add all of the rules")
  .setFooter(message.author.username, message.author.displayAvatarURL)
  .setThumbnail("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/21b9f5d24b27d59.png")
  message.channel.send({embeds:[embed]})
}

exports.name = "help"