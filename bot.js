const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!" //Bot command prefix
var request = require('request');


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

  if (message.content === prefix + "estado") {
    var url = 'http://mcapi.us/server/status?ip=' + 'mc.heavenmc.es' + '&port=' + '25565';
    request(url, function (err, response, body) {
      if (err) {
        console.log(err);
        return message.reply('El servidor no esta conectado correcamente');
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
          "name": "HeavenMC NetWork" + " Server Status",
          "url": "tienda.heavenmc.es",
          "icon_url": "https://cdn.tebex.io/webstore/799123/images/799123-98e9b9ee1e018f32203ec1984acb30a2459c79d9.png"
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
          "text": "IP: " + "mc.heavenmc.es"
        }
      };
      message.channel.send({ embed });
    });
  };
});


client.login(process.env.BOT_TOKEN);
