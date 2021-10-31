export default class DisplayCurrentState {
  stateText = null;

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "70px veranda";
    ctx.fillText(`State: ${this.stateText ?? "Idle"}`, 480, 300);
  }

  update(state) {
    let firstLetter = state[0].toUpperCase();
    this.stateText = firstLetter + state.substring(1);
  }
}
