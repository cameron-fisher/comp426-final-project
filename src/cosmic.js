import React from 'react';
import ReactDOM from 'react-dom';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import axios from 'axios';
// import { Parser } from 'htmlparser2';
import ReactHtmlParser from 'react-html-parser';
import generateReviews from './generateReviews';
// import '/data/users.json';

// const review_data = require('data-store')({ path: process.cwd() + '/data/users.json' });
const review_data = require('./data/cosmicReviews.json');

// export const loadReviews = function () {
//     console.log('hi')
//     console.log(review_data)
//     generateReviews(review_data)
//     // let result = await axios({
//     //     method: 'get',
//     //     url: "http://localhost:5000/cosmicReviews/", //
//     //     //url: "https://stark-shelf-53955.herokuapp.com/#/cosmicReview/",
//     //     //withCredentials: true
//     //     /* ,
//     //     params: {
//     //         where: { 
//     //             type: 'review' 
//     //         }
//     //     }
//     //     */
//     // });

//     // //document.getElementById("reviews").append(review_data.get(0));
    
//     // //here it is 3 times becaue we have 3 place holders
//     // //when we get more update the amount of reviews we want

//     // if(3 >= review_data.length)
//     // {
//     //     document.getElementById('postedReview1').innerText = review_data[review_data.length-1]; 
//     //     document.getElementById('postedReview2').innerText = review_data[review_data.length-2]; 
//     //     document.getElementById('postedReview3').innerText = review_data[review_data.length-3]; 
//     // }
//     // else if(2 == review_data.length)
//     // {
//     //     document.getElementById('postedReview1').innerText = review_data[review_data.length-1]; 
//     //     document.getElementById('postedReview2').innerText = review_data[review_data.length-2]; 
//     // }
//     // else if(1 == review_data.length)
//     // {
//     //     document.getElementById('postedReview1').innerText = review_data[review_data.length-1]; 
//     // }
// }

//add in url to axios function
export const submitClicked = function() {
    //composeReview(document.getElementById("textArea").value.toString());
    //composeReview();
    //console.log(review_data)
    // return generateReviews(review_data)
    ReactDOM.render(ReactHtmlParser(generateReviews(review_data)), document.getElementById('reviews-parent'));

    //if above doesn't work try:
    //ReactDOM.render(generateReviews(review_data), document.getElementById('reviews-parent'));
}

//add URL
// export const composeReview = async function() {
//     let bodyText = document.getElementById("textArea").value.toString();
//     //let bodyText = "Test to see if this is the problem";

//     //let bodyText = "test text";
//    await axios({
//        method: 'post',
//        url: "http://localhost:5000/cosmicReviews/",
//        data: {
//            "body": bodyText
//        }
//    });

//    loadReviews();
 
// }

function Cosmic() {
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Link to="/"><Button isColor='primary' className="is-pulled-right">Return to Home</Button></Link>
                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Cosmic Cantina</Title>
                        </Box>
            </Container>

            <Box hasTextAlign='centered' className="is-shadowless">
                <Subtitle isSize={5}>Leave a review for Cosmic Cantina!</Subtitle>
                <Input type="text" id="textArea" placeholder='' isSize='large'/>
                <Button onClick={submitClicked} isColor='primary' id="sendreview" className="mt-4 mr-3">Submit</Button>
                <Button isColor='warning' className="mt-4">Cancel</Button>
            </Box>
            

            <Container id="reviews">
                <Tile isAncestor>
                    <Tile isParent isVertical isSize={12} id="reviews-parent">
                        {/* dangerouslySetInnerHTML={{__html: generateReviews(review_data)}} */}
                        {ReactHtmlParser(generateReviews(review_data))}
                    </Tile>
                </Tile>
            </Container>

            <Container>
                <Title isSize={3} className="mt-6 ml-2">Visit Cosmic Cantina:</Title>   
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="4:3" src="https://snworksceo.imgix.net/dth/9f98bdc7-a7ec-4108-a6e4-8bb577158004.sized-1000x1000.jpg?w=1000" />

                            </Box>
                        </Tile>
                    </Tile>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box hasTextAlign='centered' className="py-5">
                                <iframe
                                width="600"
                                height="450"
                                frameborder="0" style={{border:0}}
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC0toMAzZr-HPFuDHbzNg86ty2tnP-nh5Q
                                    &q=Cosmic+Cantina,Chapel+Hill+NC" allowfullscreen="">
                                </iframe>
                            </Box>
                        </Tile>

                    </Tile>
                </Tile>
            </Container>
        </div>
    );
}

export default Cosmic;