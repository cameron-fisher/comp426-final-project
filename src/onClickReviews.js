export default function onClickReviews(review_data) {
    let string = `<Tile isParent isVertical isSize={12} id="reviews-parent">`;
    for (var key in review_data) {
        if (review_data.hasOwnProperty(key)) {
            var val = review_data[key].body;
            let temp = `<Tile isChild><Box><p>${val}</p></Box></Tile>`;
            string = string.concat(temp);
        }
      }
    //console.log(string)
    string = string.concat(`</Tile>`);
    return string
}