startGame();




function startCombat(playerName)
{
  var grantHealth = 10;
  var playerHealth = 40;
  var turn = 1;
  var count = 0;
  playing:
    while (true)
    {

      while((playerHealth > 0) && (grantHealth > 0))
      {
        console.log(playerName + " has " + playerHealth + " health left.");
        console.log("Grant the Mighty Chicken has " + grantHealth + " health left.")
        console.log("");
        if (turn === 1)
        {
          playerHealth -= getDamage();
          turn = 2;
        }else if (turn === 2)
        {
            if (getUserInput("Your turn, what will you do?", "attack", "quit"))
            {
              grantHealth -= getDamage();
              turn = 1;
            }
            else{
              alert("Grant the Mighty Chicken has scared " + playerName + " away. He wins by default!!");
              break playing;
            }
          }
      }
      if(playerHealth <= 0)
      {
        alert("Grant the Mighty Chicken is the Winner!!!");
        break playing;
      }else if (grantHealth <= 0) {
        count ++;
        if (count === 3)
        {
          alert(playerName + " is the Winner!!!");
          break playing;
        }
        else
        {
          console.log("Grant the Mighty Chicken has been defeated.....Oh No he has fully healed!");
          console.log("");
          grantHealth = 10;
        }
      }
    }
  }
function startGame() {
  if (getUserInput("do you want to play a game?","yes", "no"))
  {
    var playerName = prompt("What is your Name?") || "";
    startCombat(playerName);
  }else {
    alert("LAME!")
  }
}

function getDamage(){
    return damage = Math.floor((Math.random() * 5) + 1);
}



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
