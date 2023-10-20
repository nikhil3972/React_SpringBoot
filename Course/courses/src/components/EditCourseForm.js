import React from 'react';
import { Button, Card, CardBody, Container, Input, Label } from 'reactstrap';

const EditCourseForm = ({ updatedCourse, setUpdatedCourse, onCancel, onSave }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  return (
    <Card className='mt-3'>
      <CardBody>
        <Label for='updatedTitle'>Title</Label>
        <Input
          id='updatedTitle'
          name='title'
          value={updatedCourse.title}
          onChange={handleInputChange}
        />

        <Label for='updatedDescription'>Description</Label>
        <Input
          id='updatedDescription'
          name='description'
          value={updatedCourse.description}
          onChange={handleInputChange}
        />

        <Container className='text-center'>
          <Button color='success' onClick={onSave}>
            Save
          </Button>
          <Button color='secondary' className='mx-2' onClick={onCancel}>
            Cancel
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default EditCourseForm;
