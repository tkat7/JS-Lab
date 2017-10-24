startGame();
//start



function startCombat(playerName)
{
  var player = {
    name: playerName,
    health: 40,
    attack: function(){ return Math.floor((Math.random() * 3) + 1);},
    wins: 0,
    heal: function(){ return this.health += Math.floor((Math.random() * 10) + 1);},
    healCount: 0};
  var grant = {
    name: "Grant the Mighty Chicken",
    health: 10,
    attack: function(){ return Math.floor((Math.random() * 5) + 1);}};
  var turn = 1;

  playing:
    while (true)
    {
      while((player.health > 0) && (grant.health > 0))
      {
        console.log(player.name + " has " + player.health + " health left.");
        console.log(grant.name + " has " + grant.health + " health left.")
        console.log("");
        if (turn === 1)
        {
          player.health -= grant.attack();
          turn = 2;
        }else if (turn === 2)
        {
          nullCheck:
          while(true)
          {
            var answer = prompt("Your turn, what will you do? (attack, quit" + ((player.healCount < 2) ?  ", heal)" : ")"));
            if(answer.toLowerCase() === "attack")
            {
              grant.health -= player.attack();
              turn = 1;
              break nullCheck;
            }
            else if(answer === "quit")
            {
              alert("LAME!!");
              break playing;
            }else if(answer === "heal" && player.healCount < 2)
            {
              player.heal();
              player.healCount ++;
              turn = 1;
              break nullCheck;
            }
            else {
              alert("try again");
            }
          }
        }
      }
          if(player.health <= 0)
          {
            alert("Grant the Mighty Chicken is the Winner!!!");
            break playing;
          }else if (grant.health <= 0) {
            player.wins ++;
            if (player.wins === 5)
            {
              alert(player.name + " is the Winner!!!");
              break playing;
            }
            else
            {
              console.log("Grant the Mighty Chicken has been defeated.....Oh No he has fully healed!");
              console.log("");
              grant.health = 10;
            }
          }

      }
    }
  //asks them if they want to play and runs code if yes
function startGame() {
  if (getUserInput("do you want to play a game?","yes", "no"))
  {
    var playerName = prompt("What is your Name?") || "";
    startCombat(playerName);
  }else {
    alert("LAME!")
  }
}
//sorry about this i just dont like when people make invalid inputs
function getUserInput(question, yes, no)
{
  var ret;
  nullCheck:
  while(true)
  {
    var answer = (prompt(question + " (" + yes + ", " + no + ")") || "").toLowerCase();
    if(answer === yes)
    {
      ret = true;
      break nullCheck;
    }
    else if(answer === no)
    {
      ret = false;
      break nullCheck;
    }
    else {
      alert("try again");
    }
  }
  return ret;
}
