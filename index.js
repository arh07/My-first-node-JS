const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look MAMA! I can code man . what about you?')
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '0178888887' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '0178888886' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    // if (req.query.name) {
    //     const search = req.reqry.name;
    //     const matched = users.filter(user => user.name.toLowerCase().includes(search));
    //     res.send(matched)
    // }
    // else {
    //     res.send(users);

    // }
    res.send(users);
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id)

    res.send(user)
})


//from client side to data

app.post('/user', (req, res) => {
    console.log('request my data', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


app.listen(port, () => {
    console.log('Listening to port', port);
})