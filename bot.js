const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();	

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "!ayuda | UltraGen",
           url: "https://youtube.com/c/FacuJM",
           type: "STREAMING"
       }
   });
});


client.on("message", (message) => {
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	}	
});




client.login(process.env.BOT_TOKEN);
