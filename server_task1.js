const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/") {
        response.write("<h1>Home Page.</h1>");
    } else if (request.url === "/about") {
        response.write("<h1>About Page.</h1>");
    } else if (request.url === "/contact") {
        response.write("<h1>Contact Page.</h1>");
    } else {
        response.write("<h1>Invalid Request!</h1>");
    }

    response.end();
});

server.listen(5001, () => {
    console.log("The NodeJS server on port 5001 is now running....");
});
