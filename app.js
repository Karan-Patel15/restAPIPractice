let express = require('express');
const port = 80;


let app = express();
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/api/contacts', (req, res) => {
    
    res.status(200).send({
        person1: {
            id: 0162,
            firstname: 'Karan',
            lastname: 'Patel',
            phonenumber: '678-xxx-xxxx',
            email: 'xxx@email.com'
        },
        person2: {
            id: 4482,
            firstname: 'X',
            lastname: 'X',
            phonenumber: '678-xxx-xxxx',
            email: 'xxx@email.com'
        },

    });
})

app.post('/api/contacts', (req, res) => {
    const body = req.json(req.body) //parse the request body into a JS object that we can use
    if (!res.body) {
        res.status(400).send("Invalid Input");
    } else {
        res.status(201).send("Successfully added new contact");
    }
    
})

app.delete('/api/contacts', (req, res) => {
    res.status(200).send("Successfully deleted all contacts");
})
// : means anything
app.get('/api/contacts/:contactID', (req, res) => {
    res.status(200).send(`Contact found ${req.params.contactID}`);
})

app.put('/api/contacts/:contactID', (req, res) => {
    if (!res.body) {
        res.status(400).send("Invalid Input");
    } 
    else {
        res.status(200).send("Successfully Updated Contact");
    }
    
})

app.delete('/api/contacts/:contactID', (req, res) => {
    res.status(200).send("Successfully deleted contact");
})

