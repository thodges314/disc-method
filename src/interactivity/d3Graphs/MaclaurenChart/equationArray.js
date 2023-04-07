import DisplayEquation from "components/interface/DisplayEquation";
import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const equationArray = [
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}-\\frac{x^{14}}{14!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}-\\frac{x^{14}}{14!}+\\frac{x^{16}}{16!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}-\\frac{x^{14}}{14!}+\\frac{x^{16}}{16!}-\\frac{x^{18}}{18!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}-\\frac{x^{14}}{14!}+\\frac{x^{16}}{16!}-\\frac{x^{18}}{18!}+\\frac{x^{20}}{20!}}} $`,
  `$ {\\color{${sunsetYellow}}{y=\\frac{x^0}{0!}-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\frac{x^{10}}{10!}+\\frac{x^{12}}{12!}-\\frac{x^{14}}{14!}+\\frac{x^{16}}{16!}-\\frac{x^{18}}{18!}+\\frac{x^{20}}{20!}-\\frac{x^{22}}{22!}}} $`,
];

export default equationArray;
