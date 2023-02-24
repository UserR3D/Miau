const scroll = document.querySelectorAll(".js [data-anime='scroll']");
const windowHalf = window.innerHeight * 0.6;
function getDistance() {
  const distance = [...scroll].map((element) => {
    const sectionTop = element.offsetTop;
    return {
      element,
      offset: Math.floor(sectionTop - windowHalf),
    };
  });
  handleScroll(distance);
}

function handleScroll(distance) {
  distance.forEach((section) => {
    if (window.scrollY > section.offset) {
      section.element.classList.add("ativo");
    } else {
      section.element.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", getDistance);
getDistance();
