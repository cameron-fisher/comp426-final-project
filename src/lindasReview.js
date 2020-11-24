const review_data = require('data-store')({ path: process.cwd() + '/data/lindasReviews.json' });

class lindasReview
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

lindasReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

lindasReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new lindasReview(bdata.id, bdata.body);
    }
    return null;
}

lindasReview.next_id = lindasReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

lindasReview.create = (body) => {
    let id = lindasReview.next_id;
    lindasReview.next_id += 1;
    let b = new lindasReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = lindasReview;