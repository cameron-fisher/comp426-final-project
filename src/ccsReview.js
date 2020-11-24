const review_data = require('data-store')({ path: process.cwd() + '/data/ccsReviews.json' });

class ccsReview
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

ccsReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

ccsReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new ccsReview(bdata.id, bdata.body);
    }
    return null;
}

ccsReview.next_id = ccsReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

ccsReview.create = (body) => {
    let id = ccsReview.next_id;
    ccsReview.next_id += 1;
    let b = new ccsReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = ccsReview;