class Player {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.inventory = ["Potion", "Potion", "Potion", "Potion", "Potion"];
  }
  attack() {
    return Math.floor((Math.random() * 6)+1);
  }
  usePotion(item) {
    if (item = "Potion"){
      this.hp += 10;
      let index = this.inventory.indexOf(item);
      this.inventory.splice(index, 1);
    }
  }
}
class Enemy {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  attack() {
    return Math.floor((Math.random()* 6)+1)
  }
}

function displayInfo(player, enemy) {
  $(".playerName").html(`Name: ${player.name}`)
  $(".playerHealth").html(`Health: ${player.hp}`)
  $(".enemyName").html(`Name: ${enemy.name}`)
  $(".enemyHealth").html(`Health: ${enemy.hp}`)
}

function battle(player, enemy, turn) {
  let playerAttack = player.attack();
  let enemyAttack = enemy.attack();
  if ( turn === true) {
    console.log(turn);
    enemy.hp -= playerAttack;
    turn = !turn;
    console.log(turn);
  } else if (turn === false) {
    enemy.attack();
    player.hp -= enemyAttack;
    turn = !turn;
    console.log(turn);
  }
}

$(document).ready(function() {
  let turn = true;
  let Finn = new Player("Finn", 50);
  let Ogre = new Enemy("Ogre", 50);
  displayInfo(Finn, Ogre)
  $(".attack").on("click", function(){
    battle(Finn, Ogre, turn);
    displayInfo(Finn, Ogre);
    setTimeout(function(){
      battle(Finn, Ogre, turn)
      displayInfo(Finn, Ogre)
    }, 500)
  })
})