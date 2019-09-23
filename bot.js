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
    if (primaryCommand == "ayuda") {
        message.send.channels('Este bot esta hecho por mahada#0641');

    }  

});


function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `!help` or `!multiply`")
    }
}

client.login(process.env.BOT_TOKEN);
