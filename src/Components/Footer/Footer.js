import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup, Button} from 'react-bootstrap';  
import {  
  MDBBtn
} from 'mdb-react-ui-kit';
 
function footer() {  
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
              <h1 className='mb-3'>Hotel Management System</h1>
              
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='/'
              >
                ABout Us
              </MDBBtn>
             
            </div>
          </div>
        </div>
      </div>
    </header>










   <div className="Object">  
   <Container className='p-3'>  
<CardGroup>  
<Card >  
  <Card.Body>  
    <Card.Title>Book Rooms</Card.Title>  
    <Card.Text>  
   BOOK Rooms   
    </Card.Text>  
    <Button variant="primary">Book Now</Button>  
  </Card.Body>  
</Card>  
<Card >  
  <Card.Body>  
    <Card.Title>Order Food</Card.Title>  
    <Card.Text>  
      Order Your Favorite Food  
    </Card.Text>  
    <Button variant="primary">Order Now</Button>  
  </Card.Body>  
</Card>  
  
<Card >  
  <Card.Body>  
    <Card.Title>Contact us</Card.Title>  
    <Card.Text>  
      Contact Us For More Details
    </Card.Text>  
    <Button variant="primary">Contact Us</Button>  
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






  );  
}  
export default footer;