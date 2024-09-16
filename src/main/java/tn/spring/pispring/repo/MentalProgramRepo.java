package tn.spring.pispring.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.spring.pispring.Entities.MentalProgram;

import java.util.List;

@Repository
public interface MentalProgramRepo extends JpaRepository<MentalProgram,Long> {
    List<MentalProgram> findByCategory(String category);
}
