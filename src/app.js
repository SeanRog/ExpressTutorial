const path = require('path')
const express = require('express')

// console.log(__dirname) // prints absolute path to this file
console.log(__filename) // prints absolute path including this file

const app = express()
//sets publicDirectoryPath to absolute path to public folder
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath)) // uses the index.html file as the home page (endpoint '')

// home page is replaced with the index.html
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    });
})

app.get('/about', (req, res) => {
    res.sendFile(publicDirectoryPath + "/about.html");
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    });
})





app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
