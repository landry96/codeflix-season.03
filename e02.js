const http = require('http');
const options = {
    hostname: "127.0.0.1",
    port: 3000,
    method: 'GET'
}
const req = http.request(options, res => {
    console.log('statusCode: ${res.statusCode}')
    res.on('data', data => {
        console.log(data)
    })
})

req.on('error', error => {
    console.error(error)
})
req.end()