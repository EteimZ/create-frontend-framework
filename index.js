import { init } from "./framework";
import { User } from "./src/user"

const firstName = "Eteimorde";
const lastName = "Youdiowei";

init("#app", User({ firstName, lastName }));
