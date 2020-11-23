import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
        <Container>
                    <Box className="is-shadowless">
                        <Link to="/login"><Button isColor='primary' className="is-pulled-right">Login</Button></Link>
                    </Box>
                    
                    <Box hasTextAlign='centered' className="is-shadowless">
                        <Title isSize={1}>Franklin Street Eats</Title>
                        <Subtitle isSize={5}>Click the green 'Review' buttons to leave your thoughts on Franklin Street restaurants!</Subtitle>
                    </Box>
        </Container>

        <Container>
            <Tile isAncestor>
                <Tile isSize={4} isVertical isParent>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://images.squarespace-cdn.com/content/v1/537261a3e4b06f7436cc8d37/1595376688715-AI8U9BVQ4LF2ZW5VTD20/ke17ZwdGBToddI8pDm48kDqf82JwEoX4WzmayRgEIm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub0j9LjuCwHwZ8uVqEGGNX85i1MTsqe7P3W_dlTINWCJbd_6_chhqv-nBOr8t60dZw/ncaa-championship-2017-114%2Bcopy.jpg?format=2500w" />
                                <Title isSize={3}>Top of the Hill</Title>
                                <Link to="/topo"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://snworksceo.imgix.net/dth/14674381-f695-4f43-a2dc-f5469aebcc20.sized-1000x1000.jpg?w=1000" />
                                <Title isSize={3}>Sup Dogs</Title>
                                <Link to="/supdogs"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://media-cdn.tripadvisor.com/media/photo-s/07/e1/03/83/linda-s-bar-and-grill.jpg" />
                                <Title isSize={3}>Linda's Bar and Grill</Title>
                                <Link to="/lindas"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                </Tile>
                <Tile isSize={4} isVertical isParent>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://dta0yqvfnusiq.cloudfront.net/thepi17077521/2018/04/chapelhill-5b60cdc85b0d0.jpg" />
                                <Title isSize={3}>Pizza Press</Title>
                                <Link to="/pizzapress"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://snworksceo.imgix.net/dth/9f98bdc7-a7ec-4108-a6e4-8bb577158004.sized-1000x1000.jpg?w=1000" />
                                <Title isSize={3}>Cosmic Cantina</Title>
                                <Link to="/cosmic"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://navigatingfoodatunc.web.unc.edu/files/2016/11/restarauntfront.jpg" />
                                <Title isSize={3}>Mediterranean Deli</Title>
                                <Link to="/meddeli"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                </Tile>
                <Tile isSize={4} isVertical isParent>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://images.squarespace-cdn.com/content/v1/521b6de9e4b03aa034dec5dc/1597009876899-F4NXXL6EYQ153E9VZVG2/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/Front.jpeg?format=1500w" />
                                <Title isSize={3}>Carolina Coffee Shop</Title>
                                <Link to="/ccs"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://navigatingfoodatunc.web.unc.edu/files/2016/11/picy-9-banner-final1.jpg" />
                                <Title isSize={3}>Spicy 9</Title>
                                <Link to="/spicy9"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                    <Tile isChild>
                        <Box hasTextAlign='centered'>
                                <Image className="mb-5" isRatio="square" src="https://media.thetab.com/blogs.dir/104/files/2017/07/7e1d12542a32cef0b875ceef57bc25941501512516522.jpeg" />
                                <Title isSize={3}>Purple Bowl</Title>
                                <Link to="/purplebowl"><Button isColor='primary'>Review</Button></Link>
                        </Box>
                    </Tile>
                </Tile>
            </Tile>
        </Container>
    </div>
    );
}

export default Home;