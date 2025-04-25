import SunIcon from "./sun.svg";
import MoonIcon from "./moon.svg";
import ArrowUp from "./arrow-up.svg";
import Logo from "./logo.svg";
import Menu from "./menu.svg";
import Close from "./close.svg";

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  arrowUp: ArrowUp,
  logo: Logo,
  menu: Menu,
  close: Close,
};

export type IconName = keyof typeof icons;

export default icons;
