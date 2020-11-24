const review_data = require('data-store')({ path: process.cwd() + '/data/medReviews.json' });

class medReview
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

medReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

medReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new medReview(bdata.id, bdata.body);
    }
    return null;
}

medReview.next_id = medReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

medReview.create = (body) => {
    let id = medReview.next_id;
    medReview.next_id += 1;
    let b = new medReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = medReview;