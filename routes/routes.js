
let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( {'message': 'Hello, I am an Azure app!'} ) // Hello message that will be retrieved when API is called
})

module.exports = router