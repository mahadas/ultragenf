const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `!help | UltraGen`,
           type: "STREAMING"
       }
    });
});

client.on("guildMemberAdd", (member) => {
   var canal = client.channels.get('625499285215117343'); 
   canal.send(`${member.user}, bienvenido al servidor pasala bien.`);
   
});

client.on('message', message => {
	if (message.content.startsWith(prefix +"generar" )){
	    const embed = new Discord.RichEmbed() 
	    .setTitle("Este es su título, puede contener 256 caracteres")
	    .setColor(0x00AE86)
	    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
	    .setFooter("Version 1.0 para UltraGen - Desarrollado por mahada#0641")
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
	if (command === prefix +'ping') {

    let ping = Math.floor(message.client.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
      
      });
    
  }
  
});

client.login(process.env.BOT_TOKEN);
