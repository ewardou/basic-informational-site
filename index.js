const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    fs.readFile(`${__dirname}/pages/contact-me.html`,"utf-8", (err, data) => {
        if (err) {
            throw new Error(err);
        }
        res.end(data);
    })
}).listen(8080);