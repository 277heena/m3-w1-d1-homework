const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/" || request.url === "/home") {
        fs.readFile("home.html", (error, data) => {
            if (error) {
                response.write("<h1>File Not Found</h1>");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (request.url === "/about") {
        fs.readFile("about.html", (error, data) => {
            if (error) {
                response.write("<h1>File Not Found</h1>");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (request.url === "/contact") {
        fs.readFile("contact.html", (error, data) => {
            if (error) {
                response.write("<h1>File Not Found</h1>");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else {
        response.write("<h1>Invalid Request!</h1>");
        response.end();
    }
});

server.listen(5001, () => {
    console.log("The NodeJS server on port 5001 is now running....");
});
