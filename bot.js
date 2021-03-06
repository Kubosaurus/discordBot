/*********************************************************
**********************Dependencies************************
**********************************************************/
var Discord = require('discord.io');
var auth = require('./auth.json');
const http = require('http'); //node.js http requests

/*********************************************************
*********************Global Variables*********************
**********************************************************/
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";	//
var weatherUnits = "&units=imperial&appid=";							// Open Weather API
var appId = auth.appid;													//




//create bot using its authentication token
var bot = new Discord.Client({
	autorun: true,
	token: auth.token
});


//log bot into Discord - prints log in to command line window
bot.on('ready', function(event) {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

//Bot responses on the server
bot.on('message', function(user, userID, channelID, message, event){
	if(message.substring(0,1) == '!'){				//Will check and respond to messages
		var args = message.substring(1).split(' '); // starting with an "!"
		var check = args[0].toLowerCase();
		if (check === 'hello'){
			bot.sendMessage ({
				to: channelID,
				message: "Hello, " + user + "! \:grinning:"
			});
		}
		else if (check === 'hooman'){
			bot.sendMessage ({
				to: channelID,
				message: "I am totally a hooman. With hooman skin just like the other hoomans!"
			});
		}
		else if (check === 'weather'){
			var city = args[1].toLowerCase();
			if(city === undefined){
				city = "corvallis";
			}
			var weather = weatherAPI.concat(city, weatherUnits, appId);
			var body = ' ';
			var req = http.get(weather, function(res){
				res.on('data', function(chunk) {
					body += chunk.toString();
				});
				res.on('end', function(){
					data = JSON.parse(body);
					bot.sendMessage({
						to: channelID,
						message: "The temperature in " + data.name + " is: " + data.main.temp
					});
				});
			});
		}
		else if (check === 'play'){
			var song = args[1];
		}

		else if (check === 'pause'){
			
		}
		else if (check === 'add'){
			var song = args[1];
		}
		else if (check === 'skip'){

		}
		else if (check === 'queue'){
			
		}

	}
});
