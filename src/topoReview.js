const review_data = require('data-store')({ path: process.cwd() + '/data/topoReviews.json' });

class topoReview
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

topoReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

topoReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new topoReview(bdata.id, bdata.body);
    }
    return null;
}

topoReview.next_id = topoReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

topoReview.create = (body) => {
    let id = topoReview.next_id;
    topoReview.next_id += 1;
    let b = new topoReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = topoReview;