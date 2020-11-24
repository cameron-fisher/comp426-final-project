const review_data = require('data-store')({ path: process.cwd() + '/data/purpReviews.json' });

class purpReview
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

purpReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

purpReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new purpReview(bdata.id, bdata.body);
    }
    return null;
}

purpReview.next_id = purpReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

purpReview.create = (body) => {
    let id = purpReview.next_id;
    purpReview.next_id += 1;
    let b = new purpReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = purpReview;