  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import LogoImage from '../greenlight-logo.svg';
  import InsuranceTypes from '../insurance-types.svg'
  import MapImage from '../map.svg'
  import DoctorImage from '../doctor-image.svg'
  import HospitalImage from '../hospital.svg'
  import TreeImage from '../tree.png'
  import BgCurves from '../bg-curves.png'
  import ItsComplicated from '../its_complicated.svg'
  import {FaLinkedin} from 'react-icons/fa';
  import { FaFacebook} from 'react-icons/fa';
  import Card from 'react-bootstrap/Card';
  import ListGroup from 'react-bootstrap/ListGroup';


  const Home = () => {
  return (
    <div style={{backgroundColor:'#F7E7CE'}}>
        <div class="container d-flex align-items-center justify-content-center text-center" style={{backgroundColor:'#F7E7CE' , minHeight:'60vh'}}>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-center text-black">
            <span class = "align-middle mb-5">
            <div class="p-2"><h1 class="mb-3 mt-4">Innovative Health Coverage Tailored to Your Individual Needs</h1></div>
            <div class="p-2"><p class = 'lead'>We understand that a 'one size fits all' approach won't cut it when it comes to your health.</p></div>
            <div class = 'p-2'>We partner with multiple insurance companies to offer you a wide range of secure and flexible insurance plans. Whether you're <strong>currently uninsured</strong> or <strong>paying too much</strong>, our team is here to help you find the perfect plan. Contact us today and experience the peace of mind that comes with having the right health coverage.</div>
            <div class="p-2"><a class="align-self-end btn btn-outline-dark btn-lg m-2" style = {{backgroundColor:'#b7ddbd'}}
                              href="#get-quote-now" role="button">Get your free quote now!</a></div>
            </span>
          </div>
        <div class="col-md-6">
        <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src={TreeImage} class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                </a>
              </div>
          </div>
          </div>
        </div>
      <div class = "container-fluid" style={{backgroundImage:`url(${BgCurves})`, backgroundRepeat:'no-repeat', backgroundSize:'100% auto'}}>
          <div class = "container">
          <div class="row">
          <div class="col mb-2 align-items-center">
          <Card style={{ width: '23rem', backgroundColor:'#fefeee'}}>
            <Card.Body>
              <Card.Title>Any Doctor</Card.Title>
              <Card.Img variant="top" src={DoctorImage} />
              <Card.Text>
                We offer a broad variety of plans accepted by most doctors, so you can continue your care with a physician you know and trust
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div class="col mb-2">
          <Card style={{ width: '23rem', backgroundColor:'#fefeee' }}>
            <Card.Body>
              <Card.Title>Any Hospital</Card.Title>
              <Card.Img src={HospitalImage} />
              <Card.Text>
              We will work with you to ensure your coverage includes a facility near you
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="col mb-2">
            <Card style={{ width: '23rem', backgroundColor:'#fefeee' }}>
            <Card.Body>
              <Card.Title>Any Where</Card.Title>
              <Card.Img src={MapImage} />
              <Card.Subtitle>
              We are proud to serve all 50 states
              </Card.Subtitle>
              <Card.Text>Our agents are licensed in every state, so no matter where you're at we can find the right plan for you</Card.Text>
            </Card.Body>
          </Card>
            </div>
        </div>
        </div>
    <div class="container">
    <div class="row">
      <img src = {InsuranceTypes}/>
    </div>
    </div>
      </div>
      <div class = "container-fluid p-0"  style={{backgroundColor:'#fefeee', width:'100vw'}}>
      <div class="container">
    <div class="row mt-5">
      <div class = 'col-md-6 d-flex justify-content-center align-items-center' >
      <span class = "align-middle p-3">
      <p class = "h2">The rules of the highly regulated insurance industry are forever changing</p> 
      If you're trying to protect your family, you should be trying to find the <br/>
      <strong>best possible coverage</strong> at the <strong>most effective cost.</strong> <br/><br/>
      <p class = "h2">It's essential to have an experienced insurance professional as your partner</p>
      We will help you navigate this confusing landscape and choose the right benefits for your specific situation.
      </span>
      </div>
      <div class = 'col-md-6'>
      <img src = {ItsComplicated}/>
      </div>
    </div>
    </div>
      <section class="container-fluid">
      <div class = "container pt-5 pb-5 d-flex justify-content-center align-items-center" >
      <div class = "row">
      <span class = "text-center" style={{backgroundColor:'#b6ddbd', borderRadius:'15px 15px 15px 15px', padding:'2rem'}}>
      <h2 class="display-3">Let's Get You The Solution That Fits Best</h2>
        <p class = "lead">
We are looking forward to assisting you!  Please provide your best information and schedule a call OR request a free no obligation quote today!!
</p>
        <p class = "h3">What are you waiting for? It's free!</p>
        </span>
      </div>
      </div>
      </section>
      </div>
      <main class="container mt-5">
      <div class="container-fluid">
      <section class="container mb-5">
          <h4 class="mb-5 text-center"><strong>SCHEDULE A CALL</strong></h4>
          <div class="row d-flex justify-content-center">
            <div class="col-md-6 col-sm-6">
              <form>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form3Example1" class="form-control" />
                      <label class="form-label" for="form3Example1">Name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label class="form-label" for="form3Example2">Email</label>
                    </div>
                  </div>
                </div>
                <div class = "d-flex justify-content-center"><a class="btn btn-outline-dark btn-lg" role="button" style = {{backgroundColor:'#b7ddbd'}}
                  type="submit">Schedule Call</a> </div>
              </form>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="container mb-5">
          <h4 class="mb-2 mt-5 text-center" id="get-quote-now"><strong>GET A FREE QUOTE</strong></h4>
          <h5 class="mb-5 text-center"><strong>You will be contacted within 24 hours</strong></h5>
          <div class="row d-flex justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form3Example1" class="form-control" />
                      <label class="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Phone Number</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Zip Code</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">DATE(S) OF BIRTH FOR ALL TO BE COVERED</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Daily Medications</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Pre-Existing Conditions</label>
                </div>
                <div class = "d-flex justify-content-center"><a class="btn btn-outline-dark btn-lg" role="button" style = {{backgroundColor:'#b7ddbd'}}
                  type="submit">Request Quote</a></div>

              </form>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="text-lg-start" style={{backgroundColor:'#F7e7ce'}}>
    <div class="container text-align-left">
        <div class="row">
            <div class="col-md-3 mt-md-0 mt-3">
                <img class="footer-logo" src={LogoImage} style = {{height:'15vh'}}/>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-bold">Est. 2003</h5>
                <hr/>
                <ul className="list-unstyled">
                    <li>Green Light Insurance Services</li>
                    <li>Owned & Operated by Roxanne Lange</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-bold">Contact Us</h5>
                <hr/>
                <ul className="list-unstyled">
                    <li><strong>Email</strong> roxannelange@outlook.com</li>
                    <li><strong>Phone</strong> (970)-846-7453</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-bold">About Us</h5>
                <hr/>
                <div class="social-links mt-3"> 
                  <a href="https://www.linkedin.com/in/roxanne-lange-8922b722a/" class="twitter"><FaLinkedin style = {{color: "black", fontSize: "3em"}}/></a> 
                  <a href="https://www.facebook.com/roxanne.lange2" class="facebook"><FaFacebook style = {{color: "black", fontSize: "3em"}}/></a> 
                </div>
            </div>
        </div>
    </div>

      <hr class="m-0" />

      <div class="text-center p-3">
        © 2023 Copyright: Green Light Insurance
      </div>
    </footer>
  </div>);
  };

  export default Home;
