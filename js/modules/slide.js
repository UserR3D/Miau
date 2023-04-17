export default class ScrollAnima {
  constructor(container, item) {
    this.container = document.querySelector(container);
    this.item = document.querySelectorAll(item);
  }
  move(event) {
    event.preventDefault();
    console.log("oi");
  }
  init() {
    this.initBind();
    this.item.forEach((box) => {
      box.addEventListener("", this.move);
    });
  }
  initBind() {
    this.init = this.init.bind(this);
    this.move = this.move.bind(this);
  }
}
