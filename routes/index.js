var express = require('express');
var router = express.Router();

router.get('/start', function (req, res) {
    res.render('landingPage', {});

});

router.get('/manufacturers', function (req, res) {
    res.render('manufacturers', {});

});

router.get('/tracePage', function (req, res) {
    res.render('tracePage', {});

});

router.get('/wheat', function (req, res) {
    res.render('wheat', {});

});

module.exports = router;
