export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowHalf = window.innerHeight * 0.7;
    this.scroll = this.scroll.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((element) => {
      this.sectionTop = element.offsetTop;
      return {
        element,
        offset: Math.floor(this.sectionTop - this.windowHalf),
      };
    });
  }

  scroll() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    this.getDistance();
    this.scroll();
    window.addEventListener("scroll", this.scroll);
  }
}
