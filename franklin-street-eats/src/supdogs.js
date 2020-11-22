import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";

function SupDogs() {
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Link to="/"><Button isColor='primary' className="is-pulled-right">Return to Home</Button></Link>
                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Sup Dogs</Title>
                        </Box>
            </Container>

            <Box hasTextAlign='centered' className="is-shadowless">
                <Subtitle isSize={5}>Leave a review for Sup Dogs!</Subtitle>
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
                <Title isSize={3} className="mt-6 ml-2">Visit Sup Dogs:</Title>   
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="4:3" src="https://snworksceo.imgix.net/dth/14674381-f695-4f43-a2dc-f5469aebcc20.sized-1000x1000.jpg?w=1000" />

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
                                    &q=Sup+Dogs,Chapel+Hill+NC" allowfullscreen="">
                                </iframe>
                            </Box>
                        </Tile>

                    </Tile>
                </Tile>
            </Container>
        </div>
    );
}

export default SupDogs;