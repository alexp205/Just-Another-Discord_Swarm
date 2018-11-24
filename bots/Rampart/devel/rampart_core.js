// this is Rampart's bot code but in an unrunnable format
// to run:
//    - change the <bot key here> placeholder to the actual bot token (found on the app page or by contacting Alex)

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Alex: Jake, "roster" here is used to denote humans in the server but also each person's hero pool later, which is it?
var teamRoster = [client.recipients];
const heroPool = ["D.Va","Orisa","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya","Ashe","Bastion",
                  "Doomfist","Genji","Hanzo","Junkrat","McCree","Mei","Pharah","Reaper","Soldier 76","Sombra",
                  "Symmetra","Torbjorn","Tracer","Widowmaker","Ana","Brigette","Lucio","Mercy","Moira","Zen"]

client.on("ready", () => {
    // run debug tests first
    debug_features();

    // TODO: we should probably have a startup checker here at some point

    // debugging done, operations should be ready
    console.log("Ready for action!");
});

// We should implement this eventually: https://anidiots.guide/first-bot/a-basic-command-handler
client.on("message", (message) => {

    if (!message.content.startsWith(config.bot_key) || message.author.bot) return;

    const args = message.content.slice(config.bot_key.length).trim().split(/ +/g);
    // DEBUG
    message.channel.send("[DEBUG] " + args)
    const command = args.shift().toLowerCase();
    // DEBUG
    message.channel.send("[DEBUG] " + command)

    // --------------------------------------------------------------
    // The commands implemented so far are
    // --------------------------------------------------------------
    //
    // reset_mains -    Allows a user to declare a hero roster
    // TODO: Implement a database
    //
    // swap -           Allows a user to swap the rank of two heros
    //
    // report -         Reports a generic message
    //
    // --------------------------------------------------------------
    // The planned commands are
    // --------------------------------------------------------------
    //
    // make_comp -      Makes a comp based on the team's hero rosters
    //
    // display_roster - Displays the user's heroRoster

    switch (command) {
      case "reset_mains" :
          if (args.length > 0) {
              reset_mains(args);
          }
          else {
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
          // break;
    }
});

/* Adds and prints out Hero Roster */
function reset_mains(heroRoster) {

    // Checks for non-strings and duplicate names
    for (var l = 0; l < heroRoster.length; l++) {
        // If the string is included in the heroRoster
        if (heroPool.heroName.includes(parseInt(heroRoster[l]))) {
            // Sets the heroName to be checked
            var duplicateCheck = heroRoster[l].toLowerCase;
            // Searches the user's heroRoster
            for(var y = l + 1; y < heroRoster.length; y++) {
                if (duplicateCheck == heroRoster[y]) {
                    heroRoster.splice(y, 1);
                }
            }
        }
        else {
            client.channels.get(config.test_channelID).send(heroRoster[l] + " isn't a hero name, so I removed it from your list.");
            heroRoster.splice(l, 1);
        }

        // Finds the user's spot in the array and adds to their heroRoster
        teamRoster[teamRoster.indexOf(message.author)][1].push(heroRoster);
    }

    printRoster();
}

/* Changes main heroes (I can only assume :)) */
function swap_mains(swapHeros) {
    if (swapHeros.length != 2) {
        client.channels.get(config.test_channelID).send("I can only swap 2 heros at once. Give me two ranks or two hero names");
    }

    // If the user used ranks
    if(!isNaN(parseInt(swapHeros[0]))) {
        var tempHero = teamRoster[teamRoster.indexOf(message.author)][swapHeros[0]];
        var tempHero2 = teamRoster[teamRoster.indexOf(message.author)][swapHeros[1]];

        teamRoster[teamRoster.indexOf(message.author)][swapHeros[0]] = tempHero2;
        teamRoster[teamRoster.indexOf(message.author)][swapHeros[1]] = tempHero;
    }

    // If the user used heronames
    else {
        if(teamRoster[teamRoster.indexOf(message.author)].includes(swapHeros[0]) &&
           teamRoster[teamRoster.indexOf(message.author)].includes(swapHeros[1])) {
            // Saves the hero positions as temp variables
            var tempHero = teamRoster[teamRoster.indexOf(message.author)].indexOf(swapHeros[0]);
            var tempHero2 = teamRoster[teamRoster.indexOf(message.author)].indexOf(swapHeros[1]);

            teamRoster[teamRoster.indexOf(message.author)][tempHero] = swapHeros[1];
            teamRoster[teamRoster.indexOf(message.author)][tempHero2] = swapHeros[0];
        }
    }

    printRoster();
}

/* Prints hero roster */
function printRoster() {
    var updatedRoster = message.author.username +"'s Hero Roster is now: \n";
    for(var j = 0; j < teamRoster[userKey].length; j++) {
        updatedRoster = updatedRoster + j + ") " + teamRoster[teamRoster.indexOf(message.author)][j] + "\n";
    }

    client.channels.get(config.test_channelID).send(updatedRoster);
}

/* DEBUG FXN */
// This is set to run on entry of Rampart into the channel, use it to test fxns, functionality, etc.
function debug_features() {
    client.channels.get(config.test_channelID).send("[DEBUG] Entering debug mode:");
    client.channels.get(config.test_channelID).send("--------------------------------------------------");

    client.channels.get(config.test_channelID).send("bot_key: " + config.bot_key);
    client.channels.get(config.test_channelID).send("bot_key length: " + config.bot_key.length);

    // Alex: Jake, not sure what you were trying to test but this was in the startup handler, go ahead and uncomment/add anything you wanted to test here
//    for (i = 0; i < teamRoster.length; i++){
//    }

    client.channels.get(config.test_channelID).send("--------------------------------------------------");
    client.channels.get(config.test_channelID).send("[DEBUG] Exiting debug mode, functionality resuming");
}

client.login(config.token);
