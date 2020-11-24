import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const review_data = require('data-store')({ path: process.cwd() + '/data/spicyReviews.json' });

export const loadReviews = async function () {
    let result = await axios({
        method: 'get',
        url: "http://localhost:5000/spicyReviews/", //
        //url: "https://stark-shelf-53955.herokuapp.com/#/cosmicReview/",
        //withCredentials: true
        /* ,
        params: {
            where: { 
                type: 'review' 
            }
        }
        */
    });

    document.getElementById("reviews").append(review_data.get(0));
    /*
    //here it is 3 times becaue we have 3 place holders
    //when we get more update the amount of reviews we want
    for(let i = 0; i < 3; i++)
    {
        if(i < result.data.length)
        {
            //document.getElementById('postedReview'+i).innerText = result.data[i];
            document.getElementById("reviews").append(review_data.get(0));
        }
        //within this place the results in each of the preset review spots and maybe append extra reviews depending on how we want to do it
    }
    */
}

//add in url to axios function
export const submitClicked = function() {
    //composeReview(document.getElementById("textArea").value.toString());
    composeReview();

}

//add URL
export const composeReview = async function() {
    let bodyText = document.getElementById("textArea").value.toString();
    //let bodyText = "Test to see if this is the problem";

    //let bodyText = "test text";
   await axios({
       method: 'post',
       url: "http://localhost:5000/spicyReviews/",
       data: {
           "body": bodyText
       }
   });

   loadReviews();
 
}

function Spicy9() {
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Link to="/"><Button isColor='primary' className="is-pulled-right">Return to Home</Button></Link>
                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Spicy 9</Title>
                        </Box>
            </Container>

            <Box hasTextAlign='centered' className="is-shadowless">
                <Subtitle isSize={5}>Leave a review for Spicy 9!</Subtitle>
                <Input type="text" placeholder='' isSize='large'/>
                <Button isColor='primary' className="mt-4 mr-3">Submit</Button>
                <Button isColor='warning' className="mt-4">Cancel</Button>
            </Box>
            

            <Container>
                <Tile isAncestor>
                    <Tile isParent isVertical isSize={12}>
                        <Tile isChild>
                            <Box>
                                <Title isSize={3}>Placeholder Name</Title>
                                <p>This is a placeholder. When we figure out how to connect the backend this is where the review text will go.</p>
                            </Box>
                        </Tile>

                        <Tile isChild>
                            <Box>
                                <Title isSize={3}> 2nd Placeholder Name</Title>
                                <p>This would be the 2nd review.</p>
                            </Box>
                        </Tile>

                        <Tile isChild>
                            <Box>
                                <Title isSize={3}> 3rd Placeholder Name</Title>
                                <p>This would be the 3rd review, etc.</p>
                            </Box>
                        </Tile>
                    </Tile>
                </Tile>
            </Container>

            <Container>
                <Title isSize={3} className="mt-6 ml-2">Visit Spicy 9:</Title>   
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="4:3" src="https://navigatingfoodatunc.web.unc.edu/files/2016/11/picy-9-banner-final1.jpg" />
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
                                    &q=Spicy+9,Chapel+Hill+NC" allowfullscreen="">
                                </iframe>
                            </Box>
                        </Tile>

                    </Tile>
                </Tile>
            </Container>
        </div>
    );
}

export default Spicy9;