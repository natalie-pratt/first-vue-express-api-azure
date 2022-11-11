
let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( {'message': 'Hello world!'} )
})

module.exports = router