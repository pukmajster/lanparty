// Modules
const express = require('express');
const fs = require('fs');

// Express Router
const router = express.Router();

// Home
router.get('/', (req, res) => {
    res.render('home.njk', JSON.parse(fs.readFileSync('./public/news.json', 'utf-8')));
    // res.send('yeet');
});

// Stream
router.get('/stream', (req, res) => {
    res.render('stream.njk');
});

// Ekipe
router.get('/ekipe', (req, res) => {
    res.render('teams.njk', JSON.parse(fs.readFileSync('./public/teams.json', 'utf-8')));
});

// FAQ
router.get('/faq', (req, res) => {
    res.render('faq.njk');
});

// Spored
router.get('/razporedja', (req, res) => {
    res.render('razporedja.njk');
});

// Test route
router.get('/hi', (req, res) => {
    res.status(200).send('hi');
})

// Sends all posts
router.get('/posts/all', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./public/news.json', 'utf-8')));
})

module.exports = router;