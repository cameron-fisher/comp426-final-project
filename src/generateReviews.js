export default function generateReviews(review_data) {
    let string = '';
    for (var key in review_data) {
        if (review_data.hasOwnProperty(key)) {
            var val = review_data[key].body;
            let temp = `<Tile isChild><Box><p>${val}</p></Box></Tile>`;
            string = string.concat(temp);
        }
      }
    //console.log(string)
    return string
}