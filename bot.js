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

client.on("message", async message => {
	const prefix = "!"
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.sendMessage('Si Internet Es De `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
	}
client.login(process.env.BOT_TOKEN);
