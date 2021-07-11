const http = require('http')
const os = require('os')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`Node on swarm service, hostname= ${os.hostname()}`)
}).listen(8085)

console.log("Node run on port 8085")