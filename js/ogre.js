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

function battle(player, enemy) {
  let playerAttack = player.attack();
  let enemyAttack = enemy.attack();
  if ( turn === true) {
    console.log(turn + "if : before !turn");
    enemy.hp -= playerAttack;
    turn = !turn;
    console.log(turn + "if : after !turn");
  } else if (turn === false) {
    player.hp -= enemyAttack;
    turn = !turn;
    console.log(turn + "else if");
  }
}
let turn = true;
$(document).ready(function() {
  let Finn = new Player("Finn", 50);
  let Ogre = new Enemy("Ogre", 50);
  displayInfo(Finn, Ogre)
  $(".attack").on("click", function(){
    battle(Finn, Ogre);
    displayInfo(Finn, Ogre);
    setTimeout(function(){
      battle(Finn, Ogre)
      displayInfo(Finn, Ogre)
    }, 500)
  })
  $(".item").on("click", function() {
    Finn.usePotion("Potion");
    turn = !turn;
    displayInfo(Finn, Ogre);
    setTimeout(function() {
      battle(Finn, Ogre)
      displayInfo(Finn, Ogre)
    }, 500)
  })
})