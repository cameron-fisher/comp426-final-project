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

const Secret = require("./Secret");


const login_data = require('data-store')({ path: process.cwd() + '/data/users.json' });

const cosmicReview = require("./cosmicReview");
const review_data = require('data-store')({ path: process.cwd() + '/data/cosmicReviews.json' });

app.get('/cosmicReviews', (req, res) => {
    res.json(cosmicReview.getAllIDs());
    return;
});


app.get('/cosmicReviews/:id', (req, res) => {
    let b = cosmicReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/cosmicReviews', (req, res) => {
    //let {body} = req.body;

    let review = cosmicReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    review_data.set(req.body.body);
    res.json(true);
    return;

    //return res.json(review);
});

app.post('/login', (req, res) => {

    let user = req.body.user;
    let password = req.body.password;

    let user_data = login_data.get(user);
    if (user_data == null) {
        res.status(404).send("Not found");
        return;
    }

    if (user_data.password === password) {
        console.log("User "+ user +  " credentials valid");
        req.session.user = user;
        res.json(true);
        return;
    }

    res.status(403).send("Unauthorized");

});

app.post('/signup', (req, res) => {

    let user = req.body.user;
    let password = req.body.password;

    let user_data = login_data.get(user);

    console.log(user_data);

    if (login_data.get(user) === undefined) {

        login_data.set(user, {"password": password});
        console.log("success");
        res.json(true);
        return;
    
    } else {
        res.status(403).send("User already exists");
        return;
    }
})

app.get('/logout', (req, res) => {
    delete req.session.user;
    res.json(true);
})


app.get('/secret', (req, res) => {
    if (req.session.user === undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    res.json(Secret.getAllIDsForOwner(req.session.user));
    return;
});

app.get('/secret/:id', (req, res) => {
    if (req.session.user === undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);

    if (s === null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.owner !== req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    res.json(s);
} );

app.post('/secret', (req, res)=> {

    if (req.session.user === undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.create(req.session.user, req.body.secret);
    if (s === null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(s);
});

app.put('/secret/:id', (req, res) => {

    if (req.session.user === undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s === null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.owner !== req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    s.update(req.body.secret);

    res.json(s.id);
});

app.delete('/secret/:id', (req, res) => {
    if (req.session.user === undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s === null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.owner !== req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    s.delete();
    res.json(true);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("User Login Example up and running on port " + port);
});

app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
  });

//export default app;