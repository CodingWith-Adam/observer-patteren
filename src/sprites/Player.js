import PlayerStates from "./PlayerStates.js";
import SpriteAnimation from "./SpriteAnimation.js";

export default class Player {
  constructor(x, y, baseUrl, width, height) {
    this.state = PlayerStates.idle;
    this.baseUrl = baseUrl;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.createAnimations();
  }

  update(state) {
    if (state === PlayerStates.dead) {
      this.deadAnimation.reset();
    }
    this.state = state;
  }

  draw(ctx) {
    let animation = this.animations.find((animation) =>
      animation.isFor(this.state)
    );

    if (animation == null)
      animation = this.animations.find((animation) =>
        animation.isFor(PlayerStates.idle)
      );

    const image = animation.getImage();

    let y = this.y;

    if (this.state == PlayerStates.slide) {
      y -= 200;
    }

    ctx.drawImage(image, this.x, y, this.width, this.height);
  }

  createAnimations() {
    this.idleAnimation = new SpriteAnimation(
      `${this.baseUrl}/Idle (?).png`,
      9,
      6,
      PlayerStates.idle
    );

    this.runAnimation = new SpriteAnimation(
      `${this.baseUrl}/Run (?).png`,
      8,
      6,
      PlayerStates.run
    );

    this.deadAnimation = new SpriteAnimation(
      `${this.baseUrl}/Dead (?).png`,
      10,
      10,
      PlayerStates.dead,
      true
    );

    this.animations = [
      this.idleAnimation,
      this.runAnimation,
      this.deadAnimation,
    ];
  }
}
