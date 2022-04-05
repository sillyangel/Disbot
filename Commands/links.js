const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let ml = new Discord.MessageEmbed()
  .setTitle("Mario Links")
  .setDescription("https://banana-corp.tk/IXLS, https://banana-corp.tk/BluesClues are all mario games")
  .setColor("RED")
  let UB = new Discord.MessageEmbed()
  .setTitle("Unblocker Links")
  .setDescription("https://uv.banana-corp.tk, https://incog.banana-corp.tk, https://aero.banana-corp.tk are all unblockers")
  .setColor("GREY")
  message.channel.send( { embeds : [ ml,UB] } )
}

exports.name = "links"