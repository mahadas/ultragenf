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
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
  }
	if (message.content.startsWith(prefix + "hola")) {
		message.channel.send("Hola que tal?");
  }
	if (message.content.startsWith(prefix +"ayuda" )){
		const embed = new Discord.RichEmbed() 
	    .setTitle("Este es su título, puede contener 256 caracteres")
	    .setAuthor(message.author.username, message.author.avatarURL)
	    .setColor(#ff0000)
	    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
	    .setFooter("Creado por mahada#0641", client.user.avatarURL)
	    .setImage(message.author.avatarURL)
	    .setThumbnail(message.author.avatarURL)
	    .setTimestamp()
	    .setURL("https://github.com/CraterMaik")
	    .addField("IP","Ver tu conexion en este servidor.")
	    .addBlankField(true)
	    .addField("Generar", "Genera tu cuenta de todo tipo", true)
	    
	    message.channel.send({embed});
	}

});



client.login(process.env.BOT_TOKEN);
