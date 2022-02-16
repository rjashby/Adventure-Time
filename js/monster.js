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
    window.location.href = "minotaur.html"
  }
}
async function typeWriter(sentence, outputId) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await letterDelay();
    $(outputId).append(letters[i]);
    i++;
  }
  return;
}
function letterDelay() {
  return new Promise(resolve => setTimeout(resolve, 50));
}
const battleID = ".outputFinal";
const battleInfo = "Turn Based Battle. Attack or heal on your turn, and the Heart Monster will attack on his!"
let turn = true;
$(document).ready(function() {
  typeWriter(battleInfo, battleID)
  let Finn = new Player("Finn", 50);
  let Monster = new Enemy("Heart Monster", 75);
  let audio = new Audio("assets/audio/F - Shmowzow.mp3");
  let audio2 = new Audio("assets/audio/F - Mathematical.mp3");
  displayInfo(Finn, Monster)
  $(".attack").on("click", function(){
    audio.play();
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
    audio2.play();
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