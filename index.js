const http = require('http');

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Hello from Coolify Serverless!" }));
};

const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
