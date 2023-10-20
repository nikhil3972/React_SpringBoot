import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Course from './Course';

import axios from 'axios';
import base_url from './../api/baseapi';

const AllCourses = () => {

    const [courses, setCourses] = useState([])

    //perform didmount and didupdate
    useEffect(() => {
        document.title = "All Course";   
    }, []);   //[] just perform didmount. Means just run for one time because not run when updation is done

    const getAllCourses = () => {
        axios.get(`${base_url}/courses`).then(    //Promises
            //success
            (response) => {
                // console.log(response);
                console.log(response.data);
                toast.success("Course Loaded Succesfully");
                setCourses(response.data);
            },
            //error
            (error) => {
                console.log(error);
                toast.error("Please Try Again");
            }
        );
    }


    useEffect(()=>{
        getAllCourses();
    }, []);

    const deleteCourseImmeditely = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    }

    const updateCourseImmediately = (updatedCourse) => {
        setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
    }

    return (
        <div>
            <h3>All Courses</h3>
            <p>List of Courses as Follows : </p>
            {
                courses.length > 0 ? courses.map(item => (
                    <Course course={item} key={item.title} deleteNow={deleteCourseImmeditely} updateNow={updateCourseImmediately} />
                )) : "No Courses"
            }


        </div>

    )
}

export default AllCourses
