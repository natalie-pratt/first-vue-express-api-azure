let express = require('express')
let routes = require('./routes/routes.js')
let path = require('path')

let app = express()

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
let vueApp = express.static(pathToVueApp)
app.use('/', vueApp)

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() { // Either use pre-configured port, or port 3000
    console.log('Express server running on port', server.address().port) // Log message and port number in console
})

