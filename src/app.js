const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname) // prints absolute path to this file
console.log(__filename) // prints absolute path including this file

const app = express()
//sets publicDirectoryPath to absolute path to public folder
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
// app.use(express.static(publicDirectoryPath)) // uses the index.html file as the home page (endpoint '')

// home page is replaced with the index.hbs file. first argument of res.render() refers to index.hbm
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sean Rogers'
    });
})

app.get('/about', (req, res) => {
    res.sendFile(publicDirectoryPath + "/about.html");
})

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Andrew',
//         age: 27
//     });
// })

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Sean Rogers'
    });
})





app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
