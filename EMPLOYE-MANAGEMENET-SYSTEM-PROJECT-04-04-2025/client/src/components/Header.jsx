import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { RiAdminFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';
import Backend_Url from '../config/BackendUrl';
import Form from 'react-bootstrap/Form';

const Header=()=>{

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [adminid, setadminid] = useState("");
    const [password, setpassword] = useState("");


     const handleSubmit=async(e)=>{
    e.priventDefault();
try {
   let api=`${Backend_Url}admin/adminlogin`;
   const response=await axios.post(api,{email:email,password:password});
   console.log(response);
} catch (error) {
  console.log(error);
}

    setShow(false);
   }



    return(
        <>
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Task-Management-System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
    
          
          </Nav>
            <RiAdminFill  style={{color:"yellow"}}onClick={handleShow}/>
           <FaRegUserCircle style={{color:"yellow",marginLeft:"10"}} onClick={()=>{navigate("/userlogin")}}/>
        </Container>
      </Navbar>


 {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={adminid} onChange={(e)=>{setadminid(e.target.value)}}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={(e)=>{setpassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
</Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>
        
        </>
    )
}
export default Header;
