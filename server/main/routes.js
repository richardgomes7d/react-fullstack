var express = require('express')
var expressip = require('express-ip')
var router = express.Router()

router.use(expressip().getIpInfoMiddleware);

router.get('/hello', function(req, res) {
    const ipInfo = req.ipInfo;
    res.json('hello world' + req.ip + ` Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`)
})

module.exports = router