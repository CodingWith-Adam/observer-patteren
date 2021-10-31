import img from "./utils/img.js";
import PlayerStates from "./sprites/PlayerStates.js";
import Zombie from "./sprites/Zombie.js";
import Knight from "./sprites/Knight.js";
import Robot from "./sprites/Robot.js";
import JackOLantern from "./sprites/JackOLantern.js";
import AdventureGirl from "./sprites/AdventureGirl.js";
import PlayerControlSubject from "./PlayerControlSubject.js";
import DisplayCurrentState from "./DisplayCurrentState.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 2000 / 1.5;
canvas.height = 1143 / 1.5;
const background = img("BG.png");
const y = 450;

//Define our subject
const playerControlSubject = new PlayerControlSubject();

//Observers
const pumpkin = new JackOLantern(0, y, "pumpkin", 250, 300);
const robot = new Robot(250, y, "robot", 300, 300);
const adventureGirl = new AdventureGirl(500, y, "adventure_girl", 300, 300);
const knight = new Knight(750, y, "knight", 300, 300);
const zombie = new Zombie(1000, y, "zombie", 300, 300);
const players = [pumpkin, robot, adventureGirl, knight, zombie];
const displayCurrentState = new DisplayCurrentState();

//Register observers with subject.
playerControlSubject.registerObserver(pumpkin);
playerControlSubject.registerObserver(robot);
playerControlSubject.registerObserver(adventureGirl);
playerControlSubject.registerObserver(knight);
playerControlSubject.registerObserver(zombie);
playerControlSubject.registerObserver(displayCurrentState);

//Game Loop
function game() {
  ctx.drawImage(background, 0, 0, 2000, 1143, 0, 0, 2000 / 1.5, 1143 / 1.5);
  players.forEach((player) => player.draw(ctx));
  displayCurrentState.draw(ctx);
}

setInterval(game, 1000 / 60);

document.getElementById("run-button").addEventListener("click", () => {
  playerControlSubject.notify(PlayerStates.run);
});

document.getElementById("idle-button").addEventListener("click", () => {
  playerControlSubject.notify(PlayerStates.idle);
});

document.getElementById("dead-button").addEventListener("click", () => {
  playerControlSubject.notify(PlayerStates.dead);
});

document.getElementById("attack-button").addEventListener("click", () => {
  playerControlSubject.notify(PlayerStates.attack);
});

document.getElementById("jump-button").addEventListener("click", () => {
  playerControlSubject.notify(PlayerStates.jump);
});
