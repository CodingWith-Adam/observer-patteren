import Player from "./Player.js";
import SpriteAnimation from "./SpriteAnimation.js";
import PlayerStates from "./PlayerStates.js";

export default class Zombie extends Player {
  createAnimations() {
    this.originalY = this.y;
    super.createAnimations();
    const idleIndex = this.animations.indexOf(this.idleAnimation);
    const deadIndex = this.animations.indexOf(this.deadAnimation);

    this.idleAnimation = new SpriteAnimation(
      `${this.baseUrl}/Idle (?).png`,
      15,
      6,
      PlayerStates.idle
    );

    this.deadAnimation = new SpriteAnimation(
      `${this.baseUrl}/Dead (?).png`,
      12,
      10,
      PlayerStates.dead,
      true
    );

    this.attackAnimation = new SpriteAnimation(
      `${this.baseUrl}/Attack (?).png`,
      8,
      6,
      PlayerStates.attack
    );

    this.animations.push(this.attackAnimation);
    this.animations[idleIndex] = this.deadAnimation;
    this.animations[deadIndex] = this.idleAnimation;
  }

  draw(ctx) {
    if (this.state == PlayerStates.jump) {
      this.y = 400;
    } else {
      this.y = this.originalY;
    }
    super.draw(ctx);
  }
}
