const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Smack = require("../models/smack");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// Display add a smack form
router.get('/add', (req, res) => res.render('add'));

// Add a smack
router.post("/add", (req, res) => {
    let { team, smack } = req.body;
    let errors = [];

    if (!team) {
        errors.push({ text: "Please add a team!" })
    }

    if (!smack) {
        errors.push({ text: "Please add some smack talk!" })
    }

    if (errors.length > 0) {
        res.render('add', {
            errors,
            team,
            smack
        });
    } else {

        Smack.create({
            team,
            smack
        })
            .then(smack => res.redirect('/smack'))
            .catch(err => console.log(err));
    }


})


router.get('/:team', (req, res) => {

    let team = req.params.team

    Smack.findAll({ 
        where: { 
            team: { [Op.like]: '%' + team + '%' } } })
            .then( smacks => res.render('smacks', { smacks }))
            .catch(err => console.log(err));
});



module.exports = router;