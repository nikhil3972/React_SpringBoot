package com.springrest.controller;

import com.springrest.entity.Course;
import com.springrest.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/home")
    public String home(){
        return "This is a home page";
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return courseService.getCourses();
    }

    @GetMapping("/courses/{courseId}")
    public ResponseEntity<Course> getCourse(@PathVariable int courseId){
        return courseService.getOneCourse(courseId);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return courseService.insertCourse(course);
    }

    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable int courseId){
        return courseService.removeCourse(courseId);
    }

    @PutMapping("/courses/{courseId}")
    public ResponseEntity<Course> updateCourse(@PathVariable int courseId, @RequestBody Course course){
       return courseService.changeCourseInfo(courseId, course);
    }
}
