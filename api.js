var jsonServer = require('json-server')

// return Express server
var server = jsonServer.create()

// set default middleware
server.use(jsonServer.defaults())

var router = jsonServer.router('db.json')
server.use(router)

console.log('Listening at 4000')
server.listen(4000)