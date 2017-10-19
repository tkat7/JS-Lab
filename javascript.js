var grantHealth = 10;
var playerHealth = 40;
var playerName = "";
var turn = 1;
var count = 0;
var playing = true;
if (prompt("do you want to play a game?").toLowerCase() === "yes")
{

  playerName = prompt("What is your Name?");
  while (playing)
  {

      while((playerHealth > 0) && (grantHealth > 0))
      {
        console.log(playerName + " has " + playerHealth + " health left.");
        console.log("Grant the Mighty Chicken has " + grantHealth + " health left.")
        console.log("");
        var damage = Math.floor((Math.random() * 2) + 1);
        if (turn === 1)
        {
          playerHealth -= damage;
          turn = 2;
        }else if (turn === 2)
        {
          grantHealth -= damage;
          turn = 1;
        }
      }
      if(playerHealth <= 0)
      {
        console.log("Grant the Mighty Chicken is the Winner!!!")
        playing = false;
      }else if (grantHealth <= 0) {
        count ++;
        if (count === 3)
        {
          console.log(playerName + " is the Winner!!!");
          playing = false;
        }
        else
        {
          console.log("Grant the Mighty Chicken has been defeated.....Oh No he has fully healed!")
          console.log("");
          grantHealth = 10;
        }
      }
    }
}
