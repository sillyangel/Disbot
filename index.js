const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ben ben')
});

app.listen(3000, () => {
  console.log('server started');
});

// Discord Bot

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const fs = require("fs");
const prefix = "b";
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return  
    command.run(client, message, args)
  }
})

client.on("messageCreate", message => {
  if(message.content === "Who asked?") {
    message.channel.send("I Did ", message.author.username)
  }
})

client.login(process.env.DB);