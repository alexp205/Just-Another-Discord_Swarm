// this is Rampart's bot code but in an unrunnable format
// to run:
//    - change extension to just ".js"
//    - change the <bot key here> placeholder to the actual bot token (found on the app page or by contacting Alex)

const Discord = require("discord.js");
const client = new Discord.Client();

  var teamRoster = [client.recipients];
  const heroPool = {"D.Va", "Orisa", "Reinhardt", "Roadhog","Winston", "Wrecking Ball", "Zarya", "Ashe", "Bastion",
                    "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier 76", "Sombra",
                     "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Ana", "Brigette", "Lucio", "Mercy", "Moira", "Zen"}

client.on("ready", () => {
  for (i = 0; i < teamRoster.length; i++){
  }
    console.log("Ready for action!");
});

var botKey = "!";


client.on("message", (message) => {

    if (!message.content.startsWith(botKey)) return;

    const args = message.content.slice(botKey.length).trim().split(/ +/g);
    const command = args.shift.toLowerCase;

            //The commands implemented so far are//
    //
    // reset_Mains- Allows a user to declare a hero roster
    //        Implement a database
    //
    //swap- Allows a user to swap the rank of two heros
    //
    //report- Reports a generic message
    //
              //The planned commands are//
    //
    //make_comp- Makes a comp based on the team's hero rosters
    //
    //display_roster- displays the user's heroRoster
    switch (command) {

      case "reset_mains" :
      if (args.length > 0){
      reset_Mains(args);
    }
    else{
      message.channel.send("This command needs an argument!")
    }
      break;

      case "swap" :
      swap_mains(args);
      break;

      case "report" :
      message.channel.send("Reporting, bitches!");
      break;

      // case "update" :
      // OWCrawler.update();
    }
});

/* Adds and prints out Hero Roster */
function reset_Mains(heroRoster) {

  //Checks for non-strings and duplicate names
  for (var l = 0; l < heroRoster.length; l++){
    //If the string is included in the heroRoster
  if (heroPool.heroName.includes(parseInt(heroRoster[l])){
    //Sets the heroName to be checked
     var duplicateCheck = heroRoster[l].toLowerCase;
     //Searches the user's heroRoster
     for(var y = l + 1; y < heroRoster.length; y++){
       if (duplicateCheck == heroRoster[y]){
        heroRoster.splice(y, 1);
       }
     }
  }
  else{
    message.channel.send(heroRoster[l] " isn't a hero name, so I removed it from your list.");
    heroRoster.splice(l, 1);
  }

    //Finds the user's spot in the array and adds to their heroRoster
      teamRoster[teamRoster.indexOf(message.author)][1].push(heroRoster);
  }

  printRoster();
}

function swap_mains(swapHeros) {
  if (swapHeros.length > 2) {
  message.channel.send("I can only swap 2 heros at once. Give me two ranks or two hero names");
}
//If the user used ranks
if(!isNaN(parseInt(swapHeros[0])){
  var tempHero = teamRoster[teamRoster.indexOf(message.author)][swapHeros[0]];
  var tempHero2 = teamRoster[teamRoster.indexOf(message.author)][swapHeros[1]];

  teamRoster[teamRoster.indexOf(message.author)][swapHeros[0]] = tempHero2;
  teamRoster[teamRoster.indexOf(message.author)][swapHeros[1]] = tempHero;

}
//If the user used heronames
else{
if(teamRoster[teamRoster.indexOf(message.author).includes(swapHeros[0]) &&
teamRoster[teamRoster.indexOf(message.author).includes(swapHeros[1])){
  //Saves the hero positions as temp variables
  var tempHero = teamRoster[teamRoster.indexOf(message.author)].indexOf(swapHeros[0]));
  var tempHero2 = teamRoster[teamRoster.indexOf(message.author)].indexOf(swapHeros[1]));
  teamRoster[teamRoster.indexOf(message.author)][tempHero] = swapHeros[1];
  teamRoster[teamRoster.indexOf(message.author)][tempHero2] = swapHeros[0];
}
}
printRoster();
}
}

//Prints hero roster
function printRoster(){
  var updatedRoster = message.author.username +"'s Hero Roster is now: \n";
      for(var j = 0; j < teamRoster[userKey][].length; j++){
        updatedRoster = updatedRoster + j + ") " + teamRoster[teamRoster.indexOf(message.author)][j] + "\n";
      }
  message.channel.send(updatedRoster);
}

client.login("")
