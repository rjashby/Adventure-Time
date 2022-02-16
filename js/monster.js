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
    enemy.hp -= playerAttack;
    turn = !turn;
  } else if (turn === false) {
    player.hp -= enemyAttack;
    turn = !turn;
  }
}

function battleResult(player, enemy) {
  if (player.hp <=0) {
    window.location.href = "game-over-ogre.html"
  }
  if (enemy.hp <= 0) {
    window.location.href = "ogre2.html"
  }
}
let turn = true;
$(document).ready(function() {
  let Finn = new Player("Finn", 50);
  let Monster = new Enemy("Heart Monster", 75);
  displayInfo(Finn, Monster)
  $(".attack").on("click", function(){
    battle(Finn, Monster);
    displayInfo(Finn, Monster);
    battleResult(Finn, Monster);
    setTimeout(function(){
      battle(Finn, Monster)
      displayInfo(Finn, Monster)
      battleResult(Finn, Monster)
    }, 500)
  })
  $(".item").on("click", function() {
    Finn.usePotion("Potion");
    turn = !turn;
    displayInfo(Finn, Monster);
    setTimeout(function() {
      battle(Finn, Monster)
      displayInfo(Finn, Monster)
      battleResult(Finn, Monster)
    }, 500)
  })
})