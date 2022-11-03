/**
 * Project 6
 * Static Node.js ad Express Site
 */

const express = require('express');
const app = express();
const { projects, skills } = require('./data.json');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/**
 * Routes
 */
//Home Route
app.get('/', (req, res) => {
    res.render('index', {projects});
});
//About route
app.get('/about', (req, res) => {
    res.render('about');
});

//opens project on port 3000
app.listen(3000, () => {
    console.log('App is running on port 3000')
  })