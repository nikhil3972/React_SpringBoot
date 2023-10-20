import React, {useEffect} from 'react';
import { Button, Container } from "reactstrap";

const Home = () => {

    useEffect(() => {
        document.title = "Home Page";
    }, []); 

    return (
        <div>
            <div class="jumbotron text-center mt-3">
                <h1 class="display-4">Courses Information</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
            </div>
        </div>
    )
}

export default Home
