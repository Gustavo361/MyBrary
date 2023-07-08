const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})

// Create Author Route
router.post('/', (req, res) => {
    res.send(req.body.name)
})

module.exports = router