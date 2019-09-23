vconst Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
});

client.on("guildMemberAdd", (member) => {
   var canal = client.channels.get('625499285215117343'); 
   canal.send(`${member.user}, bienvenido al servidor pasala bien.`);   
});


client.on("message", (message) => {
	if(command === prefix + 'aleatorio'){
	    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
	    if (!texto) return message.reply(`Escriba una pregunta.`);
	    message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

	}

});

client.login(process.env.BOT_TOKEN);
