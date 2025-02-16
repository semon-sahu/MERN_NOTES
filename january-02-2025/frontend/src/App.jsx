import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./files/Home";
import Insert from "./files/Insert";
import Display from "./files/Display";



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import NoPage from "./files/NoPage";

function App() {

  return (
    <>
{/* 
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <br />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Insert" element={<Insert />} />
          <Route path="Display" element={<Display />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    
    </>

  )
}

export default App