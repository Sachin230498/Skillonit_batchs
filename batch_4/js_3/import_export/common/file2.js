// const file1 = require("./file1.js")
// const { saybye, bye } = require("./file3.js");

import file1 from "./file1.js";
import { saybye, bye } from "./file3.js";

const greet2 = () => {
  file1();
  saybye();
  bye();
  console.log("Hello, how are you ?");
};

greet2();
