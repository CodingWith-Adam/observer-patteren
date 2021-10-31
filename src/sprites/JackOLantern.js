import Player from "./Player.js";
import SpriteAnimation from "./SpriteAnimation.js";
import PlayerStates from "./PlayerStates.js";

export default class JackOLantern extends Player {
  createAnimations() {
    super.createAnimations();

    this.attackAnimation = new SpriteAnimation(
      `${this.baseUrl}/Slide (?).png`,
      10,
      6,
      PlayerStates.attack
    );

    this.jumpAnimation = new SpriteAnimation(
      `${this.baseUrl}/jump (?).png`,
      10,
      6,
      PlayerStates.jump
    );

    this.animations.push(this.jumpAnimation);
    this.animations.push(this.attackAnimation);
  }
}
