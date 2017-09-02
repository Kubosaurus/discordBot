var Discord = require('discord.io');
var auth = require('./auth.json');

var bot = new Discord.Client({
	autorun: true,
	token: auth.token
});

bot.on('ready', function(event) {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event){
	if(message.substring(0,1) == '!'){
		var args = message.substring(1).split(' ');
		var check = args[0];
		if (check === 'Hello' || check === 'hello' || check === 'HELLO' ){
			bot.sendMessage ({
				to: channelID,
				message: "Hello, " + user + "! \:grinning:"
			});
		}
		if (check === 'HOOMAN' || check === 'Hooman' || check === 'hooman'){
			bot.sendMessage ({
				to: channelID,
				message: "HOOMAN-desu!"
			});
		}
	}
});