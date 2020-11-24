import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import generateReviews from './generateReviews';

const review_data = require('./data/topoReviews.json');

export const loadReviews = async function () {
    ReactDOM.render(ReactHtmlParser(generateReviews(review_data)), document.getElementById('reviews-parent8'));
}

//add in url to axios function
export const submitClicked = function() {
    //composeReview(document.getElementById("textArea").value.toString());
    composeReview();

}

//add URL
export const composeReview = async function() {
    let bodyText = document.getElementById("textArea8").value.toString();
    //console.log(bodyText)
    //let bodyText = "Test to see if this is the problem";

    //let bodyText = "test text";
   await axios({
       method: 'post',
       url: "http://localhost:5000/topoReviews/",
       data: {
           "body": bodyText
       }
   });

   loadReviews();
 
}


function Topo() {
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Link to="/"><Button isColor='primary' className="is-pulled-right">Return to Home</Button></Link>
                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Top of the Hill</Title>
                        </Box>
            </Container>

            <Box hasTextAlign='centered' className="is-shadowless">
                <Subtitle isSize={5}>Leave a review for Top of the Hill!</Subtitle>
                <Input type="text" id="textArea8" placeholder='' isSize='large'/>
                <Button onClick={submitClicked} isColor='primary' id="sendreview8" className="mt-4 mr-3">Submit</Button>
                <Button isColor='warning' className="mt-4">Cancel</Button>
            </Box>
            

            <Container>
                <Tile isAncestor>
                    <Tile isParent isVertical isSize={12} id="reviews-parent8" dangerouslySetInnerHTML={{__html: generateReviews(review_data)}}>
                        
                    </Tile>
                </Tile>
            </Container>

            <Container>
                <Title isSize={3} className="mt-6 ml-2">Visit Top of the Hill:</Title>   
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="4:3" src="https://images.squarespace-cdn.com/content/v1/537261a3e4b06f7436cc8d37/1595376688715-AI8U9BVQ4LF2ZW5VTD20/ke17ZwdGBToddI8pDm48kDqf82JwEoX4WzmayRgEIm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub0j9LjuCwHwZ8uVqEGGNX85i1MTsqe7P3W_dlTINWCJbd_6_chhqv-nBOr8t60dZw/ncaa-championship-2017-114%2Bcopy.jpg?format=2500w" />

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
                                    &q=Top+Of+The+Hill,Chapel+Hill+NC" allowfullscreen="">
                                </iframe>
                            </Box>
                        </Tile>

                    </Tile>
                </Tile>
            </Container>
        </div>
    );
}

export default Topo;