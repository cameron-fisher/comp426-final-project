import 'bulma/css/bulma.css';

export default function generateReviews(review_data) {
    let string = '';
    for (var key in review_data) {
        if (review_data.hasOwnProperty(key)) {
            var val = review_data[key].body;
            let temp = `<div class="tile is-child"><div class="box"><p>${val}</p></div></div>`;
            string = string.concat(temp);
        }
      }
    //console.log(string)
    return string;
}