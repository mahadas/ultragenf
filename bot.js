const Discord = require('discord.js');
const client = new Discord.Client();
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

client.on('message', message => {
	if (message.content.startsWith(prefix +"generar" )){
	    const embed = new Discord.RichEmbed() 
	    .setTitle("Este es su título, puede contener 256 caracteres")
	    .setAuthor(message.author.username, message.author.avatarURL)
	    .setColor(0x00AE86)
	    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
	    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
	    .setImage(message.author.avatarURL)
	    .setThumbnail(message.author.avatarURL)
	    .setTimestamp()
	    .setURL("https://github.com/CraterMaik")
	    .addField("Este es un título de campo, puede contener 256 caracteres",
	      "Este es un valor de campo, puede contener 2048 caracteres.")
	    .addField("Campo en línea", "Debajo del campo en línea", true)
	    .addBlankField(true)
	    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
	    
	    message.channel.send({embed});
	}
});

client.login(process.env.BOT_TOKEN);
