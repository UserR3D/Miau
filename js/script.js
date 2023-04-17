import ScrollAnima from "./modules/scroll.js";
import Click from "./modules/click.js";

const scroll = new ScrollAnima('[data-anime="scroll"]');
scroll.init();

const click = new Click("[data-menu='menu-mobile']");
click.init();
