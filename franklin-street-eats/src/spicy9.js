import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";

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
                                <Image isRatio="square" src="https://navigatingfoodatunc.web.unc.edu/files/2016/11/picy-9-banner-final1.jpg" />

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

export default Spicy9;