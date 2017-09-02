var Discord = require('discord.io');

var bot = new Discord.Client({
	autorun: true,
	token: "MzUyMjkxMjkwNTg0NTgwMDk2.DIfX8w.1Im9wkKFpUc6xkSV4MHDULX3R4A"
});

bot.on('ready', function(event) {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event){
	if (message === "Hello, HOOMAN" ||
		message === "hello, HOOMAN" ||
		message === "Hello, Hooman" ||
		message === "hello, Hooman" ||
		message === "Hello, hooman" ||
		message === "hello, hooman" ||
		message === "Hello HOOMAN" ||
		message === "hello HOOMAN" ||
		message === "Hello Hooman" ||
		message === "hello Hooman" ||
		message === "Hello hooman" ||
		message === "hello hooman" ||
		message === "HELLO, HOOMAN" ||
		message === "HELLO HOOMAN"
		){
		bot.sendMessage ({
			to: channelID,
			message: "Hullo, " + user + "! :)"
		});
	}
});

bot.on('message', function(user, userID, channelID, message, event){
	if (message === "@HOOMAN"){
		bot.sendMessage ({
			to: channelID,
			message: "HOOMAN-desu!"
		});
	}
});