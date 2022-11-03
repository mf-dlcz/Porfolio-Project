/**
 * Project 6
 * Static Node.js and Express Site
 */

const express = require('express');
const app = express();
const { projects, skills } = require('./data.json');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/**
 * Routes
 */
//Middleware
app.use('projects/:id', function(req, res, next) {
    
    //next step
    next();
})

//Home Route
app.get('/', function(req, res) {
    res.render('index', { projects });
});
//About route
app.get('/about', (req, res) => {
    res.render('about'), { skills };
});
app.

//opens project on port 3000
app.listen(3000, () => {
    console.log('App is running on port 3000')
})