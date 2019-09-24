const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!" //Bot command prefix
var request = require('request');
var Comando = 'ping'; //Command to trigger
var IP = 'mc.heavenmc.es'; //Add your Minecraft server IP
var Puerto = 25565; //The port of the server, default it 25565
var serverName = 'Minecraft Server'; //Your server name
var serverUrl = "https://tienda.heavenmc.es"; //Server website
var serverLogo = "https://cdn.tebex.io/webstore/799123/images/799123-98e9b9ee1e018f32203ec1984acb30a2459c79d9.png"; //Server logo


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


bot.on('message', message => {

  if (message.content === prefix + Comando) {
    var url = 'http://mcapi.us/server/status?ip=' + IP + '&port=' + Puerto;
    request(url, function (err, response, body) {
      if (err) {
        console.log(err);
        return message.reply('No se pudo conectar el servidor');
      }
      
      body = JSON.parse(body);
      var status = "Inactivo"
      var color = 16711680
      if (body.online) {
        status = "Activo";
        color = 65280
      }
      var players = 0
      if (body.players.now) {
        players += body.players.now;
      }
      else {
        players += 0
      }
      
      const embed = {
        "author": {
          "name": serverName,
          "url": serverUrl,
          "icon_url": serverLogo
        },
        "color": color,
        "fields": [
          {
            "name": "Estado:",
            "value": status,
            "inline": true
          },
          {
            "name": "Jugadores Conectados:",
            "value": "**" + body.players.now + "** / **" + body.players.max + "**",
            "inline": true
          }
        ],
        "footer": {
          "text": "IP: " + IP
        }
      };
      message.channel.send({ embed });
    });
  };
});


client.login(process.env.BOT_TOKEN);
