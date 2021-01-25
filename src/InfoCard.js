import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import omakuva from './images/omakuva.png';
import thumb1 from './images/thumb1.jpg';
import thumb2 from './images/thumb2.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';


export class InfoCard extends Component{
    render(){
        return(

            <Fade left>
            <Card bg="secondary" className="text-right p-3" style={{ width: '20rem',borderStyle:"groove"}}>
            <Image style={ {width:"12rem", marginLeft:"6rem",borderStyle:"groove"}} src={omakuva} rounded alt="Ossi" />
                <Card.Body>
                <Card.Title>Hi! I'm Ossi</Card.Title>
                <Card.Text>
                3rd year ICT-engineer student.
                Hobbies include: programming and video editing. 
                </Card.Text>
                <Container>
                <Col xs={20} md={20}>
                <Image className="icons" src={thumb2} roundedCircle alt="github logo"/>
                <a className="App-link" href="https://github.com/ossi1801" target="_blank"rel="noopener noreferrer">Github</a>
                </Col>
                <Col xs={20} md={20}>
                <Image className="icons" src={thumb1} roundedCircle alt="github logo"/>
                <a className="App-link" href="https://www.linkedin.com/in/ossi-hakkarainen-0ab042171/" target="_blank"rel="noopener noreferrer">LinkedIn</a>
                </Col>
                <Col xs={20} md={20}>
                <Image className="icons" src={thumb1} roundedCircle/>
                <a className="App-link" href="https://www.linkedin.com/in/ossi-hakkarainen-0ab042171/" target="_blank"rel="noopener noreferrer">LinkedIn</a>
                </Col>
                </Container>
                </Card.Body>
            </Card> 
            </Fade >
           
        );
    }}
export class InfoText extends Component{
    render(){
        return(
   
           
            <Card id="InfoText" style={{ fontSize: '2em',padding:'2rem',width:'80%',backgroundColor:"#8c9fa3"}}>
            <Card.Title style={{ fontSize: '2em'}}>My story</Card.Title>
            <Card.Body>
            My story began on a rainy night, when I Ossi discovered coding in high school. He was then still a little rebellious, as most teenagers are in high school. Every week he was at our place, challenging me to one of our games of chequers.
            However, in his time he showed a special attention to computer programming. Ossi started programming since the age of 14, right after my mother passed away. He discovered so many languages, like Java, C, HTML, Javascript and so on.
            What can you tell us about him and what were his dreams as a child?
            <br></br>
            Ossi was an orphan from a small town in Eastern Finland.
            She was 14 years old when her mother and her younger brother died and she was sent to live with her grandparents in Helsinki.
            From her grandfather's fourth marriage she had a half-brother, Vuorinen, and a step-sister, Lovisa.
            Ossi started her military career as an exchange student in Norway and then became a recruiter for a period of two years, and then worked as a matron and as a physician's assistant.
            </Card.Body>
            </Card>
            
            
         );
    }}
