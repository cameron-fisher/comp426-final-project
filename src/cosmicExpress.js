const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const expressSession = require('express-session');


app.use(expressSession({
    name: "eatsSessionCookie",
    secret: "express session secret",
    resave: false,
    saveUninitialized: false
}));


const cosmicReview = require("./cosmicReview");

const review_data = require('data-store')({ path: process.cwd() + '/data/cosmicReviews.json' });

app.get('/cosmicReview', (req, res) => {
    res.json(cosmicReview.getAllIDs());
    return;
});

app.get('/cosmicReview/:id', (req, res) => {
    let b = cosmicReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/cosmicReview', (req, res) => {
    //let {body} = req.body;

    let review = cosmicReview.create(req.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }
    
    return res.json(review);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Cosmic Example up and running on port " + port);
});