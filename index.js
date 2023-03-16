const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    let path = `${__dirname}/pages`;
    switch(req.url) {
        case "/":
            path += "/index.html";
            break;
        case "/about": 
            path += "/about.html";
            break;
        case "/contact":
            path += "/contact-me.html";
            break;
        default: 
            path += "/404.html";
            break;
    }    
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}).listen(8080);