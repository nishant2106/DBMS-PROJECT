import React, { Component } from 'react'
// import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class Home extends Component {
    render() {
        const images=[
            "assets/slider/1.jpg",
            "assets/slider/2.jpg",
            "assets/slider/3.jpg",
            "assets/slider/4.jpg",
            "assets/slider/5.jpg"
        ]
        return (
            <React.Fragment>
                <div className="slide-container">
                    <Zoom scale={0.4}>
                    {
                        images.map((each, index) => <img key={index} alt="images" style={{width: "100%"}} src={each} />)
                    }
                    </Zoom>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-sm-2 col-sm-4" style={{ marginTop: "50px" }}>
                            <img className="img-responsive" src="assets/info.png" alt="about nbtc" title="" style={{ width: '300px', marginLeft: '80px' }} />
                        </div>
                        <div className="col-12 offset-sm-1 col-sm-4">
                            <div className="row">
                                <h2 style={{ marginTop: '40px' }}>About Blood Donation</h2>
                                <br />
                                <div className="row">
                                    <div className="col-sm-2">
                                        <span className="fa fa-tint fa-4x" style={{ color: 'red' }} ></span>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3><a href="http://nbtc.naco.gov.in/page/beingadonor/">Being a Donor</a></h3>
                                        <p>Know more about different donors and blood donations. </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <span className="fa fa-check-square-o fa-4x" style={{ color: 'red' }} ></span>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3><a href="http://nbtc.naco.gov.in/page/eligibility/">Eligibility Requirements</a></h3>
                                        <p>Learn more about the eligibility requirements for donating blood. </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <span className="fa fa-retweet fa-4x" style={{ color: 'red' }} ></span>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3><a href="http://nbtc.naco.gov.in/page/donationprocess/">Donation Process</a></h3>
                                        <p>Know about the steps before,during and after blood donation. </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <span className="fa fa-question-circle fa-4x" style={{ color: 'red' }} ></span>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3><a href="http://nbtc.naco.gov.in/faq/index/">FAQs</a></h3>
                                        <p>General queries simply answered here for you. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container offset-2">
                    
                    <div className="row">
                        <h4>What to expect when you visit a Blood Bank or Blood Donation Camp </h4>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-2">
                            <img src="assets/Homereg.png" alt="Home Reg"></img>
                        </div>
                        <div className="col-md-8">
                            <h3 className="donation-title"> Registration <span style={{ color: '#666' }}>(10 Mins)</span> </h3>
                            <p>Donor fills up the registration form and gives his consent for donation. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="donation-title"> Medical Check up <span style={{ color: '#666' }}>(5 Mins)</span> </h3>
                            <p>Donors Medical History &amp; life style is asked, check up of temperature, blood pressure, pulse and haemoglobin.</p>
                        </div>
                        <div className="col-3">
                            <img src="assets/Homemed.png" alt="Home Reg"></img>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-2">
                            <img src="assets/Homedon.png" alt="Home Reg"></img>
                        </div>
                        <div className="col-md-8">
                            <h3 className="donation-title"> Donation <span style={{ color: '#666' }}>(8 Mins)</span></h3>
                            <p>Phlebotomist draws unit (350ml/450ml) of blood. A new sterile meedle is used to draw each unit and the needle is destroyed after it has been used. It taked less than 10 min.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-7">
                           <h3 className="donation-title"> Refreshment <span style={{ color: '#666' }}>(10 Mins)</span></h3>
                            <p>Enjoy Snacks and drinks juice to replenish fluids. </p>
                        </div>
                        <div className="col-3">
                            <img src="assets/Homeref.png" alt="Home Reg"></img>
                        </div>
                    </div>
                    <hr/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;