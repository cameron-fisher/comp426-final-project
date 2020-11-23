const review_data = require('data-store')({ path: process.cwd() + '/data/cosmicReview.json' });

class cosmicReview
{
    constructor(id, body)
    {
        this.id = id;
        this.body = body;
    }
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

cosmicReview.create = (body) => {
    let id = cosmicReview.next_id;
    cosmicReview.next_id += 1;
    let b = new cosmicReview(id, body);
    review_data.set(b.id.toString(), b);
    return b;
}

module.exports = cosmicReview;