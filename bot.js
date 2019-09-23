const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
    client.user.setActivity("!ayuda - UltraGen", {type: "PLAYING"})

})

client.on('message', (received message) => {
	if (receivedMessage.content.startwith("!")) {
		if (primaryCommand == "ayuda") {
			if (arguments.length > 0) {
				receivedMessage.channel.send("Aca estoy para poder ayudarte")
			} else {
				receivedMessage.channel.send("!ayuda [comando]")
			}


		}



	}



}


client.login(process.env.BOT_TOKEN);
