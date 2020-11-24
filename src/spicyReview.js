const review_data = require('data-store')({ path: process.cwd() + '/data/spicyReviews.json' });

class spicyReview
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

spicyReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

spicyReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new spicyReview(bdata.id, bdata.body);
    }
    return null;
}

spicyReview.next_id = spicyReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

spicyReview.create = (body) => {
    let id = spicyReview.next_id;
    spicyReview.next_id += 1;
    let b = new spicyReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = spicyReview;