const review_data = require('data-store')({ path: process.cwd() + '/data/pizzaReviews.json' });

class pizzaReview
{
    constructor(id, body)
    {
        this.id = id;
        this.body = body;
    }

    /*
    update (review) {
        this.review = review;
        review_data.set(this.id.toString(), this);
    }

    delete () {
        review_data.del(this.id.toString());
    }
    */
}

pizzaReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

pizzaReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new pizzaReview(bdata.id, bdata.body);
    }
    return null;
}

pizzaReview.next_id = pizzaReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

pizzaReview.create = (body) => {
    let id = pizzaReview.next_id;
    pizzaReview.next_id += 1;
    let b = new pizzaReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = pizzaReview;