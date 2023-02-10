let axios = require('axios'); // exports a object we can use
let express = require('express');
const port = 80;

//axios.get() returns a pending promise that can be resolved or rejected
let app = express();
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/api/contacts', (req, res) => {
    res.send({
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

app.post('api/contacts', (req, res) => {

})

app.delete('/api/contacts', (req, res) => {

})
// : means anything
app.get('/api/contacts/:contactID', (req, res) => {
    res.send(req.params.contactID)
})

app.put('/api/contacts/:', (req, res) => {
    console.log('put request')
})

app.delete('//api/contacts/:contactID', (req, res) => {
    console.log('delete contact request')
})

