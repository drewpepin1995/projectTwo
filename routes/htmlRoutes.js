const express = require('express');
const router = express.Router();
const db = require('../models/smack');

router.get("/", function (req, res) {
    console.log(db);
    res.render("index", { layout: 'landing' })
});

router.get('/smack', (req, res) =>
    db.findAll()
        .then(smacks => {
            res.render('smacks', {
                smacks
            });

        })
        .catch(err => console.log("error: " + err)));


router.get("/login", function (req, res) {
    console.log(db);
    res.render("login", { layout: 'landing' })
});





module.exports = router