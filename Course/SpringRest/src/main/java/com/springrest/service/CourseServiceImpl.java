package com.springrest.service;

import com.springrest.entity.Course;
import com.springrest.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService{

//    List<Course> list;

    @Autowired
    private CourseRepository courseRepository;

    public CourseServiceImpl(){
//        list = new ArrayList<>();
//        list.add(new Course(23, "Java Course", "This course is by Abdul bari"));
//        list.add(new Course(30, "React Js", "Coursera course"));
    }
    @Override
    public List<Course> getCourses() {
//        return list;

        return courseRepository.findAll();
    }

    @Override
    public ResponseEntity<Course> getOneCourse(int courseId) {
//        Course c = null;
//        for(Course course1 : list){
//            if(course1.getId()==courseId){
//                c = course1;
//            }
//        }
//        return c;

       Optional<Course> course = courseRepository.findById(courseId);
       if(course.isPresent()){
           return ResponseEntity.ok(course.get());
       }
       else {
            return ResponseEntity.notFound().build();
       }
    }

    @Override
    public Course insertCourse(Course course) {
//        list.add(course);
//        return course;

        courseRepository.save(course);
        return course;
    }

    @Override
    public ResponseEntity<Void> removeCourse(int courseId) {
//        list = list.stream().filter(e->
//            e.getId()!=courseId
//        ).collect(Collectors.toList());

        if(!courseRepository.existsById(courseId)){
            return ResponseEntity.notFound().build();
        }
        courseRepository.deleteById(courseId);
        return ResponseEntity.noContent().build();
    }

    public ResponseEntity<Course> changeCourseInfo(int courseId, Course course) {
//        list.forEach(e->{
//            if(e.getId()==course.getId()){
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//        });
//        return course;

        if(!courseRepository.existsById(courseId)){
            return ResponseEntity.notFound().build();
        }
        course.setId(courseId);
        return ResponseEntity.ok(courseRepository.save(course));
    }


}
