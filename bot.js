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


client.on("message", message => {
	if(command === prefix + "say"){
		let text = args.join(" ");
		message.delete();
		message.channel.send(text);
	}
});

client.login(process.env.BOT_TOKEN);
