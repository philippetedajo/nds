const validator = require("validator");

let text = "helooworld@asdfasdfasd.com";

console.log(validator.isEmail(text));
