const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    let contentType = "text/html";
    let file = `${__dirname}/pages`;
    switch(req.url) {
        case "/":
            file += "/index.html";
            res.statusCode = 200;
            break;
        case "/about": 
            file += "/about.html";
            res.statusCode = 200;
            break;
        case "/contact":
            file += "/contact-me.html";
            res.statusCode = 200;
            break;
        case "/style.css":
            file += "/css/style.css";
            res.statusCode = 200;
            contentType = "text/css";
            break;    
        default: 
            file += "/404.html";
            res.statusCode = 404;
            break;
    }    
    res.setHeader("Content-Type", contentType);
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    })
}).listen(8080);