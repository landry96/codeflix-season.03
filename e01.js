const http = require('http')

const PORT = process.argv[2]

// Check if PORT defined 
if (!PORT) {
  console.log('usage: node e01.js <PORT>')
  process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((_, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write('<h1> Hello World!</h1>')
    res.end()
})

server.listen(PORT, () => {
  console.log(`server started at  http://localhost:${PORT}`)
})
