const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `-help | Estoy en ${client.guilds.size} servidores.`,
           type: "PLAYING"
       }
    });
});


client.on("message", (message) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
 	const command = args.shift().toLowerCase();	
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
	} else
	if (message.content.startsWith(prefix + "foo")) {
		message.channel.send("bar!");
 	 }
});


client.login(process.env.BOT_TOKEN);
