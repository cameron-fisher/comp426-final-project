const review_data = require('data-store')({ path: process.cwd() + 'data/cosmicreview.json' });

class cosmicReview
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

cosmicReview.getAllIDs = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {
        return parseInt(id);
    }));
}

cosmicReview.findByID = (id) => {
    let bdata = review_data.get(id);
    if (bdata != null) {
        return new cosmicReview(bdata.id, bdata.body);
    }
    return null;
}

cosmicReview.next_id = cosmicReview.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

cosmicReview.create = (body) => {
    let id = cosmicReview.next_id;
    cosmicReview.next_id += 1;
    let b = new cosmicReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = cosmicReview;