const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity("TV", {type: "WATCHING"})
})


client.login(process.env.BOT_TOKEN);
