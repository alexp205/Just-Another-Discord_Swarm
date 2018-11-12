//An object holding information for a hero
class HeroObject{

constructor(newName, newNicknames, newClass, newHealth, newDamage,){
  heroName : newName;
  var heroNicknames : newNicknames; //An array of nicknames
  var heroClass : newClass;
  var heroHealth : newHealth;
  var heroDamage : newDamage;//The DAMAGE PER SECOND of the hero
  var heroHealing : newHealing;//The Health per second a hero heals
}

setNicknames(var newNicknames){
  //Adding one name
  if (newNicknames.length == 1 && !heroNicknames.contains(newNicknames)){
    heroNicknames.push(newNicknames);
  }
  else{
    //Adding multiple names
    for (var i = 0; i < newNicknames.length; i++){
      if(!heroNicknames.contains(newNicknames[i])){
        heroNicknames.push(newNicknames[i]);
      }
    }
  }
}
setHealth(var newHealth){
  heroHealth = newHealth;
}
heroDamage(var newDamage){
  heroDamage = newDamage;
}
heroHealing(newHealing){
  heroHealing : newHealing;
}
}
