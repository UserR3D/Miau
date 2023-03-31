import ScrollAnima from "./modules/scroll.js";
import SlideAnima from "./modules/slide.js";

const scroll = new ScrollAnima('[data-anime="scroll"]');
scroll.init();

const slide = new SlideAnima("[data-slide='slide']", '[data-anima="slide"]');
slide.init();
