const Discord = require('discord.js')
const client = new Discord.Client()

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
	const prefix = "!"
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
	}	
	if(command === "ping") {
		const m = await message.channel.send("Ping?");
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	}	
});

client.login(process.env.BOT_TOKEN);
