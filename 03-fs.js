const fs = require("fs");
const path = require("path");

for (let index = 0; index < 10; index++) {
    fs.writeFileSync(path.join(__dirname, `test${index}.html`), "<h1>Hello, World!</h1>");  
}
