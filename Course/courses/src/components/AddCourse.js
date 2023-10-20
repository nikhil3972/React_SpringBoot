import React, {useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import axios from 'axios';
import base_url from './../api/baseapi';

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        console.log(course);
        insertData(course);   //Call here
        setCourse({ id: "", title: "", description: "" });
        e.preventDefault();
    }

    const insertData = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success"); 
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        )
    }

    return (
        <div>
            <h1 className='text-center my-3'>Fill Course Details</h1>
            {/* submit the form */}
            <Form onSubmit={handleForm}>   
                <FormGroup>
                    <Label for="exampleId">
                        Course Id
                    </Label>
                    <Input
                        id="exampleId"
                        name="userId"
                        placeholder="Enter User Id"
                        type="text"
                        value={course.id}
                        //Change value in the form field when we type any value
                        onChange={(e) => {
                            setCourse({ ...course, id:e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleTitle">
                        Title
                    </Label>
                    <Input
                        id="exampleTitle"
                        name="title"
                        placeholder="Enter Title"
                        type="text"
                        value={course.title}
                        onChange={(e) => {
                            setCourse({ ...course, title:e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDesc">
                        Description
                    </Label>
                    <Input
                        id="exampleDesc"
                        name="description"
                        placeholder="Enter Description"
                        type="textarea"
                        value={course.description}
                        onChange={(e) => {
                            setCourse({ ...course, description:e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className='text-center'>
                    <Button type='submit' color='success'>Add Course</Button>
                    {/* type - reset for reseting(makes column clear/empty) all value fill in the form */}
                    <Button type="reset" color='warning mx-3'>Clear</Button>   
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse
