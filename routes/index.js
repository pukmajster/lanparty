// Modules
const express = require('express');
const fs = require('fs');

// Express Router
const router = express.Router();

// Home
router.get('/', (req, res, next) => {
    res.render('home.njk', JSON.parse(fs.readFileSync('./public/news.json', 'utf-8')));
    // res.send('yeet');
});

// Stream
router.get('/stream', (req, res, next) => {
    res.render('stream.njk');
});

// Ekipe
router.get('/ekipe', (req, res, next) => {
    res.render('teams.njk');
});

// Spored
router.get('/spored', (req, res, next) => {
    res.render('coming-soon.njk');
});

// Test route
router.get('/hi', (req, res) => {
    res.send( 'hi' );
})

// Sends all posts
router.get('/posts/all', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./public/news.json', 'utf-8')));
})

module.exports = router;