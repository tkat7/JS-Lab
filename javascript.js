var player;
var grant;
function startCombat(playerMove){
var text = "";
  switch(playerMove){
    case "attack":
      player.health -= grant.attack();
      grant.health -= player.attack();
      text = player.name + " has " + player.health + " health remaining. " + grant.name + " has " + grant.health + " health remaining.";
      break;
    case "heal":
      var heal = player.health;
      player.heal();
      heal = player.health - heal;
      player.health -= grant.attack();
      text = player.name + " has healed for " + heal + " and now has " + player.health + " health remaining. " + grant.name + " has " + grant.health + " health remaining.";
      if (player.healCount === 2)
      {
        var btn = document.getElementById('heal');
        btn.disabled = true;
        btn.style.backgroundColor = 'grey';
      }
      break;
    case "quit":
      text = grant.name + " has scared " + player.name + " away! He wins by default.";
      end(text);
      break;
  }
  if(grant.health <= 0)
  {
    if(player.wins === 5)
    {
      text = player.name + " is the Winner!!!";
      end(text);
  }else{
    player.wins ++;
    grant.health = 10;
    text = grant.name + " has been defeated.....Oh No he has fully healed!";
  }
}else if(player.health <= 0)
{
  text = grant.name + " is the Winner!!!"
  end(text);
}
document.getElementById('text').textContent = text;
console.log(text);
updateDOM();
}

function updateDOM(){
var pName = document.getElementById('pName');
var pHealth = document.getElementById('pHealthIn');
var pCount = document.getElementById('pCountIn');
var pWins = document.getElementById('pWinsIn');
var gHealth = document.getElementById('gHealthIn');
var gName = document.getElementById('gName');

pName.textContent = "Name: " + player.name;
gName.textContent = "Name: " + grant.name;
pHealth.style.width = ((player.health/40)*100) + "%";
pCount.style.width = ((player.healCount/2)*100) + "%";
pWins.style.width = ((player.wins/5)*100) + "%";
gHealth.style.width = ((grant.health/10)*100) + "%";
}

function end(text){
  document.getElementsByClassName('start')[0].style.display = 'none';
  document.getElementsByClassName('options')[0].style.display = 'none';
  document.getElementsByClassName('dom')[0].style.display = 'none';
  var endText = document.getElementById('text');
  endText.textContent = text;
  endText.style.fontSize = "50px";
}

function startGame() {
  var playerName = prompt("What is your Name?") || "";
  player = {
    name: playerName,
    health: 40,
    attack: function(){
      return Math.floor((Math.random() * 3) + 1);
    },
    wins: 0,
    heal: function(){
      player.healCount ++;
      return this.health += Math.floor((Math.random() * 10) + 1);
    },
    healCount: 0
  };
  grant = {
    name: "Grant the Mighty Chicken",
    health: 10,
    attack: function(){
      return Math.floor((Math.random() * 5) + 1);
    }
  };
  document.getElementsByClassName('start')[0].style.display = 'none';
  document.getElementsByClassName('options')[0].style.display = 'inline';
  document.getElementsByClassName('dom')[0].style.display = 'flex';
  updateDOM();
  document.getElementById('text').textContent = player.name + " has 40 health remaining. Grant the Mighty Chicken has 10 health remaining.";
}
