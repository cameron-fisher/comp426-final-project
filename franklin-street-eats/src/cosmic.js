import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export const loadReviews = async function () {
    let result = await axios({
        method: 'get',
        url: "https://opal.ils.unc.edu/~cnfisher/franklin-street-eats/",
        withCredentials: true,
        params: {
            where: { 
                type: 'review' 
            }
        }
    });

    //here it is 3 times becaue we have 3 place holders
    //when we get more update the amount of reviews we want
    for(let i = 0; i < 3; i++)
    {
        if(i < result.data.length)
        {
            document.getElementById('postedReview'+i).innerText = result.data[i];
        }
        //within this place the results in each of the preset review spots and maybe append extra reviews depending on how we want to do it
    }
}

//do window.location.reload(false); whenever we call loadReviews or change any element of the page
//Also call this fucntion whenever we upload a tweet

//add in url to axios function
export const submitClicked = function() {
    composeReview(document.getElementById("textArea").value.toString());

    //$('#textArea').hide();
    //$('.composeButton').show();
    //$('.submitButton').hide();

    //reload();
}

//add URL
export const composeReview = async function() {
    let bodyText = document.getElementById("textArea").value.toString();

   await axios({
       method: 'post',
       url: "https://opal.ils.unc.edu/~cnfisher/franklin-street-eats/",
       withCredentials: true,
       data: {
           type: 'review',
           body: bodyText
       }
   });

   loadReviews();

   //window.location.reload(false);
 
}

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
            

            <Container>
                <Tile isAncestor>
                    <Tile isParent isVertical isSize={12}>
                        <Tile isChild>
                            <Box>
                                <Title isSize={3}>Placeholder Name</Title>
                                <p id="postedReview1">This is a placeholder. When we figure out how to connect the backend this is where the review text will go.</p>
                            </Box>
                        </Tile>

                        <Tile isChild>
                            <Box>
                                <Title isSize={3}> 2nd Placeholder Name</Title>
                                <p id="postedReview2">This would be the 2nd review.</p>
                            </Box>
                        </Tile>

                        <Tile isChild>
                            <Box>
                                <Title isSize={3}> 3rd Placeholder Name</Title>
                                <p id="postedReview3">This would be the 3rd review, etc.</p>
                            </Box>
                        </Tile>
                    </Tile>
                </Tile>
            </Container>

            <Container>
                <Title isSize={3} className="mt-6 ml-2">Visit Cosmic Cantina:</Title>   
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="square" src="https://snworksceo.imgix.net/dth/9f98bdc7-a7ec-4108-a6e4-8bb577158004.sized-1000x1000.jpg?w=1000" />

                            </Box>
                        </Tile>
                    </Tile>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <p>Placeholder for where we could put the Google Maps API.</p>
                            </Box>
                        </Tile>

                    </Tile>
                </Tile>
            </Container>
        </div>
    );
}

export default Cosmic;