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


//beginning of cosmic reviews
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
});


//end of cosmic reviews

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


//topo stuff here


const topoReview = require("./topoReview");
const toporeview_data = require('data-store')({ path: process.cwd() + '/data/topoReviews.json' });

app.get('/topoReviews', (req, res) => {
    res.json(topoReview.getAllIDs());
    return;
});


app.get('/topoReviews/:id', (req, res) => {
    let b = topoReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/topoReviews', (req, res) => {
    //let {body} = req.body;

    let review = topoReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    toporeview_data.set(req.body.body);
    res.json(true);
    return;
});







//pizza stuff here

const pizzaReview = require("./pizzaReview");
const pizzareview_data = require('data-store')({ path: process.cwd() + '/data/pizzaReviews.json' });

app.get('/pizzaReviews', (req, res) => {
    res.json(pizzaReview.getAllIDs());
    return;
});


app.get('/pizzaReviews/:id', (req, res) => {
    let b = pizzaReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/pizzaReviews', (req, res) => {
    //let {body} = req.body;

    let review = pizzaReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    pizzareview_data.set(req.body.body);
    res.json(true);
    return;
});




//ccs stuff here

const ccsReview = require("./ccsReview");
const ccsreview_data = require('data-store')({ path: process.cwd() + '/data/ccsReviews.json' });

app.get('/ccsReviews', (req, res) => {
    res.json(ccsReview.getAllIDs());
    return;
});


app.get('/ccsReviews/:id', (req, res) => {
    let b = ccsReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/ccsReviews', (req, res) => {
    //let {body} = req.body;

    let review = ccsReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    ccsreview_data.set(req.body.body);
    res.json(true);
    return;
});



//sup dogs stuff here

const supReview = require("./supReview");
const supreview_data = require('data-store')({ path: process.cwd() + '/data/supReviews.json' });

app.get('/supReviews', (req, res) => {
    res.json(supReview.getAllIDs());
    return;
});


app.get('/supReviews/:id', (req, res) => {
    let b = supReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/supReviews', (req, res) => {
    //let {body} = req.body;

    let review = supReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    supreview_data.set(req.body.body);
    res.json(true);
    return;
});






//spicy9 stuff here

const spicyReview = require("./spicyReview");
const spicyreview_data = require('data-store')({ path: process.cwd() + '/data/spicyReviews.json' });

app.get('/spicyReviews', (req, res) => {
    res.json(spicyReview.getAllIDs());
    return;
});


app.get('/spicyReviews/:id', (req, res) => {
    let b = spicyReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/spicyReviews', (req, res) => {
    //let {body} = req.body;

    let review = spicyReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    spicyreview_data.set(req.body.body);
    res.json(true);
    return;
});





//lindas stuff here

const lindasReview = require("./lindasReview");
const lindasreview_data = require('data-store')({ path: process.cwd() + '/data/lindasReviews.json' });

app.get('/lindasReviews', (req, res) => {
    res.json(lindasReview.getAllIDs());
    return;
});


app.get('/lindasReviews/:id', (req, res) => {
    let b = lindasReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/lindasReviews', (req, res) => {
    //let {body} = req.body;

    let review = lindasReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    lindasreview_data.set(req.body.body);
    res.json(true);
    return;
});






//med deli stuff here

const medReview = require("./medReview");
const medreview_data = require('data-store')({ path: process.cwd() + '/data/medReviews.json' });

app.get('/medReviews', (req, res) => {
    res.json(medReview.getAllIDs());
    return;
});


app.get('/medReviews/:id', (req, res) => {
    let b = medReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/medReviews', (req, res) => {
    //let {body} = req.body;

    let review = medReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    medreview_data.set(req.body.body);
    res.json(true);
    return;
});





//purple bowl stuff here

const purpReview = require("./purpReview");
const purpreview_data = require('data-store')({ path: process.cwd() + '/data/purpReviews.json' });

app.get('/purpReviews', (req, res) => {
    res.json(purpReview.getAllIDs());
    return;
});


app.get('/purpReviews/:id', (req, res) => {
    let b = purpReview.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );


// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/purpReviews', (req, res) => {
    //let {body} = req.body;

    let review = purpReview.create(req.body.body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }

    purpreview_data.set(req.body.body);
    res.json(true);
    return;
});


