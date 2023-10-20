package com.springrest.service;

import com.springrest.entity.Course;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CourseService {

    public List<Course> getCourses();

    public ResponseEntity<Course> getOneCourse(int courseId);

    public Course insertCourse(Course course);

    public ResponseEntity<Void> removeCourse(int courseId);

    public ResponseEntity<Course> changeCourseInfo(int courseId, Course course);
}
