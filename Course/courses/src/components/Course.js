import React, {useState} from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";

import axios from 'axios';
import base_url from './../api/baseapi';
import EditCourseForm from './EditCourseForm';

const Course = ({ course, deleteNow, updateNow }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState(course);

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log("Course Deleted : " + id);
        deleteNow(id);   //For deleting immeditely we have to write this logic. If we dont write this then we have to refresh page to see our changes
      },
      (error) => {
        console.log("Please try again")
      }
    );
  }

  const updateCourse = (updatedCourse) => {
    axios.put(`${base_url}/courses/${updatedCourse.id}`, updatedCourse).then(
      (response) => {
        console.log('Course Updated:', updatedCourse.id);
        console.log(updatedCourse);
        // window.location.reload();
        setUpdatedCourse(updatedCourse);
        updateNow(updatedCourse);
      },
      (error) => {
        console.log('Update failed:', error);
      }
    );
  };

  return (
    <div>
      {isEditing ? (
        // Render the edit form when isEditing is true
        <EditCourseForm
          updatedCourse={updatedCourse}
          setUpdatedCourse={setUpdatedCourse}
          onCancel={() => setIsEditing(false)}
          onSave={() => {
            updateCourse(updatedCourse);
            setIsEditing(false);
          }}
        />
      ) : (
        <Card className='mt-3'>
          <CardBody>
            <CardSubtitle>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
              <Button color='danger' onClick={() => {
                deleteCourse(course.id);
              }}>Delete</Button>
              <Button
                color='warning'
                className='mx-2'
                onClick={() => setIsEditing(true)}
              >
                Update
              </Button>
            </Container>
          </CardBody>
        </Card>
      )
      }
    </div>
  )
}

export default Course
