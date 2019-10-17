const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
    res.render("index", { layout: 'landing' })
});

router.get('/', (req, res) =>
    Smack.findAll()
        .then(smacks => {
            res.render('smacks', {
                smacks
            });
        })
        .catch(err => console.log("error: " + err)));


module.exports = router