
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

 
const Footer = () => {
    return (
        <Box style={{width:'100%', marginTop:'4rem'}}>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "2px",
                    marginBottom:'4px'
                }}
            >
                Blog ONE2THREE
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>LIFE</Heading>
                        <FooterLink href="#">
                            Beauty
                        </FooterLink>
                        <FooterLink href="#">
                            Fashion
                        </FooterLink>
                        <FooterLink href="#">
                            Finance
                        </FooterLink>
                        <FooterLink href="#">
                            Fitness
                        </FooterLink>
                        <FooterLink href="#">
                            Green living
                        </FooterLink>
                        <FooterLink href="#">
                            Wellness
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>OTHER</Heading>
                        <FooterLink href="#">
                        Business
                        </FooterLink>
                        <FooterLink href="#">
                        Education
                        </FooterLink>
                        <FooterLink href="#">
                        Food and Recipe
                        </FooterLink>
                        <FooterLink href="#">
                        Health
                        </FooterLink>
                        <FooterLink href="#">
                        Sports
                        </FooterLink>
                        <FooterLink href="#">
                        Tech
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;