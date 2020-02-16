package org.iitr.muzo.dao;

import org.iitr.muzo.models.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

//deprecated: not meant to be used
@Service
public interface TeacherDao extends CrudRepository<Teacher, Long> {
}
