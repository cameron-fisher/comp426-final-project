const review_data = require('data-store')({ path: process.cwd() + '/data/cosmicReview.json' });

class cosmicReview
{
    constructor(body)
    {
        this.body = body;
    }
}

cosmicReview.getAllIDs() = () => {
    //returns an array of all ids
    return Object.keys(review_data.data).map((id => {return parseInt(id);}));
}

module.exports = cosmicReview;