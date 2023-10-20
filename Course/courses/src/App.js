import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="" element={<Home />} exact />
                <Route path='/add-course' element={<AddCourse />} exact />
                <Route path='/view-courses' element={<AllCourses />} exact />
                <Route path='/about' element={<About />} exact />
                <Route path='/contact' element={<Contact />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
