import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup, Button} from 'react-bootstrap';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
    <header>   
      
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>BOOK ROOMS</h1>
              
            
             
            </div>
          </div>
        </div>
      </div>
    </header>




    <>
   <div className="Object">  
   <Container className='p-3'>  
<CardGroup>  
<Card >  
  <Card.Body>  
    <Card.Title>AC Rooms</Card.Title>  
    <Card.Text>  
   AC Rooms   
    </Card.Text>  
    <Button variant="primary">Book Now</Button>  
  </Card.Body>  
</Card>  
<Card >  
  <Card.Body>  
    <Card.Title>NON-AC ROOMS</Card.Title>  
    <Card.Text>  
      NON-AC ROOMS 
    </Card.Text>  
    <Button variant="primary">Book Now</Button>  
  </Card.Body>  
</Card>  
  
<Card >  
  <Card.Body>  
    <Card.Title>NORMAL ROOMS</Card.Title>  
    <Card.Text>  
      NORMAL ROOMS
    </Card.Text>  
    <Button variant="primary">Book Now</Button>  
  </Card.Body>  
</Card>  
</CardGroup>  
</Container>  
  </div>  



<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Ashish Kumar Pathak
        </a>
      </div>



      </>




    </>
  );
}