const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
    client.user.setActivity("!ayuda - UltraGen", {type: "PLAYING"})

})

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }
});



client.login(process.env.BOT_TOKEN);
