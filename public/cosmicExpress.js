import express from 'express';
const app = express();
import { getAllIDs, findByID, create } from './cosmicReview.js';

import { json } from 'body-parser';
app.use(json());

app.get('/cosmicReview', (req, res) => {
    res.json(getAllIDs());
});

app.get('/cosmicReview/:id', (req, res) => {
    let b = findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Review not found");
        return;
    }
    res.json(b);
} );
/*
const port = port = process.env.PORT || 80;

app.listen(port, () => {

});
*/

// consider doing something like const onSubmit = this function and then call that on onClick
app.post('/cosmicReview', (req, res) => {
    let {body} = req.body;

    let review = create(body);

    if (review == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(review);
});