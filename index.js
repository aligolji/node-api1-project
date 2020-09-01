const express = require('express');
const server = express();
server.use(express.json());

const shortid = require('shortid');
console.log(shortid.generate());

let users = [
    {
        id: {
            'type': String,
            'default': shortid.generate
        },
        name: 'Jane Doe',
        bio: 'Not Tarzan"s wife, another Jane'
    }
]

server.get('/', (req, res) => {
    res.status(200).json({ Hello: 'From the server.' });
});

// server.post('/api/users', (req, res) => {
//     if ('req.body missing name or bio property') {
//         res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' })
//     } else if ('info about user if valid') {
//         res.status(201).json({ data: users })
//     }
// });




server.listen(6666, () =>
    console.log('Server running on http://localhost:6666')
);
