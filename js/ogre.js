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
const battleID = ".output";
const battleInfo = "Turn Based Battle. Attack or heal on your turn, and the Ogre will attack on his!"
let turn = true;
$(document).ready(function() {
  let Finn = new Player("Finn", 50);
  let Ogre = new Enemy("Ogre", 50);
  let audio = new Audio("assets/audio/F - Shmowzow.mp3");
  let audio2 = new Audio("assets/audio/F - Mathematical.mp3");
  displayInfo(Finn, Ogre)
  typeWriter(battleInfo, battleID);
  $(".attack").on("click", function(){
    audio.play();
    battle(Finn, Ogre);
    displayInfo(Finn, Ogre);
    battleResult(Finn, Ogre);
    setTimeout(function(){
      battle(Finn, Ogre)
      displayInfo(Finn, Ogre)
      battleResult(Finn, Ogre)
    }, 500)
  })
  $(".item").on("click", function() {
    audio2.play();
    Finn.usePotion("Potion");
    turn = !turn;
    displayInfo(Finn, Ogre);
    setTimeout(function() {
      battle(Finn, Ogre)
      displayInfo(Finn, Ogre)
      battleResult(Finn, Ogre)
    }, 500)
  })
})