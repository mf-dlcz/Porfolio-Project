const express = require('express');
const app = express();
const { projects} = require('./data.json');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/**
 * Routes
 */

//Home Route
app.get("/", (req, res) => {
    res.render("index", { projects: projects });
});

//About route
app.get('/about', (req, res) => {
    res.render('about', {project: projects[0]});
});
app.get('/projects/:id', (req, res, next) => {
    if (projects[req.params.id]) {
        res.render('project', {project: projects[req.params.id]});
    } else {
        next();
    }
});

/**
 * 404 & Global Error Handlers
 */

//404 Handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Global Handler
app.use((err, req, res, next) => {
    if (err) {
        console.log('Global error handler called', err);
    }
    if (err.status === 404) {
        console.error(err.message);
        res.status(404);
    } else {
        err.message = err.message || `Oops!  Something went wrong on the server.`;
        res.status(err.status || 500);
        console.error(err.message);
    }
});

//opens project on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port 3000')
})