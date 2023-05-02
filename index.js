const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const details = require('./data/details.json');

app.use(cors());

app.get('/', (req,res) => {
    res.send('Good Food is running')
});

app.get('/chefs', (req,res) =>{
    res.send(chefs);
})

app.get('/details', (req, res) => {
    res.send(details);
} );

app.get('/details/:id', (req,res) => {
    const id = parseInt(req.params.id) ;
    console.log(id);
    const selectedDetails = details.find(d => parseInt(d.id) === id);
    res.send(selectedDetails)
})

app.listen(port, () => {
    console.log(`Good Food is running on port: ${port}`)
})