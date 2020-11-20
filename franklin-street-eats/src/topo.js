import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input } from 'bloomer';
import 'bulma/css/bulma.css';

function Topo() {
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Button isColor='primary' className="is-pulled-right">Return to Home</Button>

                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Top of the Hill</Title>
                        </Box>
            </Container>

            <Box hasTextAlign='centered' className="is-shadowless">
                <Subtitle isSize={5}>Leave a review for Top of the Hill!</Subtitle>
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
                <Tile isAncestor>
                    <Tile isParent isSize={6}>
                        <Tile isChild>
                            <Box>
                                <Image isRatio="square" src="https://images.squarespace-cdn.com/content/v1/537261a3e4b06f7436cc8d37/1595376688715-AI8U9BVQ4LF2ZW5VTD20/ke17ZwdGBToddI8pDm48kDqf82JwEoX4WzmayRgEIm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub0j9LjuCwHwZ8uVqEGGNX85i1MTsqe7P3W_dlTINWCJbd_6_chhqv-nBOr8t60dZw/ncaa-championship-2017-114%2Bcopy.jpg?format=2500w" />

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

export default Topo;