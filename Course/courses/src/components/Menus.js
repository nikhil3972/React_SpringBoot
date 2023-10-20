import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus = () => {
  return (
    <div>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to='/' action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='add-course' action>
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/view-courses' action>
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/about' action>
                About
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/contact' action>
                Contact
            </Link>
        </ListGroup>
    </div>
  )
}

export default Menus
