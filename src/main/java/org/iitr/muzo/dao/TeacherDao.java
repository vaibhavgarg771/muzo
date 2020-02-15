package org.iitr.muzo.dao;

import org.iitr.muzo.models.Teacher;
import org.springframework.data.repository.CrudRepository;

public interface TeacherDao extends CrudRepository<Teacher, Long> {
}
