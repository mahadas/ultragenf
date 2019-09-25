const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

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
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();	
	if (command === 'ping') {
		let ping = Math.floor(message.client.ping);
		.then(m => {
			m.edit(`:satellite_orbital: Tu tienes de conexion ${ping} ms`);
		});
	}

});




client.login(process.env.BOT_TOKEN);
