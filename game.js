/**
 * Created by VIshu on 12/25/2015.
 */
function game()
{
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer)
    {
        targetPlayer.life +=1;
        console.log(this.name+" gave life to " + targetPlayer.name);
    }
}

var vishu = new game();
var wendy  = new game();

vishu.name = "Mrgreen";
wendy.name = "wendiii";

vishu.giveLife(wendy);
console.log("Vishu's: " + vishu.life);
console.log("Wendy's: " + wendy.life);

game.prototype.uppercut = function uppercut(targetPlayer)
{
    targetPlayer.life -=3;
    console.log(this.name+" just uppercutted " + targetPlayer.name);
}

wendy.uppercut(vishu);
console.log("Vishu's: " + vishu.life);
console.log("Wendy's: " + wendy.life);
