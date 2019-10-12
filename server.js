const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
let fetch = require('node-fetch');
const postRoute = require('./routes/posts');
//import routes
const authRoute = require('./routes/auth');

app.use(cors());
dotenv.config();

//connext to db
mongoose.connect('mongodb+srv://devskup:devskup666@cluster0-pa9ta.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true }, () => console.log('connected to db'));



//midleware
app.use(express.json());

// route middleware
app.use('/api/user', authRoute);
app.use('/api/posts',postRoute);

const port = process.env.PORT || 5000;

//listen
app.listen(port, () => console.log(`listening on port ${port}`));

























app.get('/joke', (req, res) => {

    fetch('https://uselessfacts.jsph.pl/random.json')
        .then(res => res.json())
        .then(joke => res.json({ joke }))
        ;

})

app.get('/user', (req, res) => {
    const user = req.query.user || "reedbarger";
    fetch(`https://api.github.com/users/reedbarger`)
        .then(response => response.json())
        .then(profile => res.json({ user: profile }));
})

app.get('/express_backend', (req, res) => {
    res.send({ express: 'your express connected to react' });
});