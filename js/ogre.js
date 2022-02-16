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
  $(".playerName").html(player.name)
  $(".playerHealth").html(player.hp)
  $(".enemyName").html(enemy.name)
  $(".enemyHealth").html(enemy.hp)
}

function battle(player, enemy) {
  let turn = true;
  if ( turn === true) {
    player.attack();
    turn === !turn;
  } else if (turn === false) {
    enemy.attack();
    turn === !turn;
  }
}

$(document).ready(function() {
  let Finn = new Player("Finn", 50);
  let Ogre = new Enemy("Ogre", 50);
})