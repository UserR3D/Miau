export default class Click {
  constructor(props) {
    this.data = document.querySelector(props);
    this.mobile = this.mobile.bind(this);
  }

  mobile() {
    this.data.nextElementSibling.classList.toggle("ativo");
  }

  init() {
    this.data.addEventListener("click", this.mobile);
  }
}
