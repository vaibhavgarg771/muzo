package org.iitr.muzo.services;

import org.iitr.muzo.dao.TeacherDao;
import org.iitr.muzo.models.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    @Autowired
    private TeacherDao teacherDao;

    public TeacherService(){}

//    @Autowired
//    public TeacherService(TeacherDao teacherDao){
//        this.teacherDao = teacherDao;
//    }


    public String saveTeacher(String name){
        Teacher teacher = new Teacher(name);
        this.teacherDao.save(teacher);
        return ("saved Successfully");
    }

}
