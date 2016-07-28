var SteamUser = require("steam-user");
var client = new SteamUser();
client.logOn({
	accountName: "USER", //Your steam account name
	password: "PW" //Your steam password
});
//You will be prompted you for your 2FA code
client.on('loggedOn', function(){
  console.log("Logged on!");
	console.log("Starting to idle..");
	console.log("Setting status to online..");
	client.setPersona(1);//Setting our status to online
	/*
	* Game ID's
	* -> https://developer.valvesoftware.com/wiki/Steam_Application_IDs
	*/
	var gamesToIdle = [
		730, 	//CS:GO
		10, 	//DOTA2
		377160  //FALLOUT4
	];
	//You can add more games to the array by adding commas and the corresponding app ID
	client.gamesPlayed(gamesToIdle);
	console.log("Currently idling: " + gamesToIdle);
});