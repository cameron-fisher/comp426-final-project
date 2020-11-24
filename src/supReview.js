const review_data = require('data-store')({ path: process.cwd() + '/data/supReviews.json' });

class supReview
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

supReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

supReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new supReview(bdata.id, bdata.body);
    }
    return null;
}

supReview.next_id = supReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

supReview.create = (body) => {
    let id = supReview.next_id;
    supReview.next_id += 1;
    let b = new supReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = supReview;