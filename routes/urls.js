const express = require('express')
const router = express.Router();
const dnsLookUp = require('../controller/dnsLookUp.js') 
const urlRedirect = require('../controller/urlRedirect.js')

router.route('/').post(dnsLookUp)
router.route('/:shorturl').get(urlRedirect)

module.exports = router