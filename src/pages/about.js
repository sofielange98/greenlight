import React from 'react';
import LogoImage from '../greenlight-logo.svg'
import Mom from '../mom.jpg'
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh',
        backgroundColor:'#f7e7ce'
      }}
    >
      <div class="container-fluid d-flex align-items-center justify-content-center text-center" style={{backgroundColor:'#F7E7CE'}}>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-top text-black">
            <span class = "align-middle mb-5">
            <div class="p-2"><h1 class="mb-3 mt-4">Green Light Insurance Services</h1></div>
            <div class="p-2"><p class = 'lead'>We are on a mission to bring affordable, customizable insurance plans to Individuals, Families, and Small Businesses across the United States</p></div>
            <div class = 'p-2'>We started as a one woman show. 
            Roxanne Lange was working independently but quickly added many agents because people are in need of our assistance and knowledge.
            Our team is here to help you find the perfect plan. Contact us today and experience the peace of mind that comes with having the right health coverage.</div>
            <img src={LogoImage} class="logo" style = {{maxHeight:'30vh'}}/>
            </span>
            
          </div>
        <div class="col-md-6">
        <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src={Mom} class="img-fluid" />
              </div>
          </div>
          </div>
        </div>
    </div>
  );
};
  
export default About;