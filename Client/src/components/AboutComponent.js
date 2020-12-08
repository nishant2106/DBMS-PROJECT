import React,{Component} from 'react'
import JumbotronComponent from './JumbotronComponent';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container,Row,Card, CardImg, CardBody,  CardText, CardTitle, Col} from "reactstrap";


class About extends Component{
    render(){
        return(
            <React.Fragment>
            <JumbotronComponent/>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <center>
                <article>In day to day life, everything is available to us on our fingertip. Technology has help us to achieve that. Being so advance in technology, 
                    we still face the issues because of which people are losing their lives. Blood shortage is one of the main cause in Medical fatality rate.
                    To avoid this as much as its possible we intended to create a platform where people can help each other whenever its possible to them. 
                    The person who is need for blood will place the request for blood and the available donors on out platform will volunteer for it.
                    This is our humble try to use the wide spread network for the betterment of the society.
                </article>
                </center>
                <br/>
                <br/>
                <hr className="dark"/>
                <Container>
                <Row>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" src="https://media.istockphoto.com/photos/blood-donor-hands-with-red-heart-and-drop-medical-donation-and-blood-picture-id1185402769?b=1&k=6&m=1185402769&s=170667a&w=0&h=Hi34Nh8D4cSkLrv1mbK3eNHHpKFBd6RlUHGg1o2fsB8="></CardImg>
                        
                        <CardBody>
                            <br></br>
                            <br></br>
                            <CardTitle>Our motive - save lives</CardTitle>
                            <CardText>
                            Our aim is to provide faster blood retrievals and donations to reduce overhead of hunting for required blood amount, because a single pint can save three lives, a single gesture can create a million smiles.   
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" height="30%" src="https://previews.123rf.com/images/laracold/laracold1706/laracold170600016/80351479-creative-blood-motivation-information-donor-poster-blood-donation-world-blood-donor-day-banner-red-b.jpg"></CardImg>
                        
                        <CardBody>
                            <br></br>
                            <br></br>
                            <CardTitle>Our services</CardTitle>
                            <CardText>
                            We will provide blood transfer and donation because ,People live when people give.With the help of increasing technology,making use of it to for people will be acheived through the system.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" src="https://www.americasjobexchange.com/assets/images/seeker/articles/team-work.jpg"></CardImg>
                        
                        <CardBody>
                            <br></br>
                            <br></br>
                            <CardTitle>Our team</CardTitle>
                            <CardText>
                            Team will put all the efforts to arrange required blood.It will work in collaboration to reduce shortage of blood,because every drop will help.Team is connected with the large hospitals to help in emergency cases to make avail the blood as per need. </CardText>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default About;
