const fs = require("fs");

fs.writeFileSync("text.txt", "this was create by nodejs");
fs.appendFileSync("text.txt", " this is the message added");
