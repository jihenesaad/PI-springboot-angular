package tn.spring.pispring.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.spring.pispring.Entities.MentalProgess;
import tn.spring.pispring.Entities.MentalProgram;

@Repository
public interface MentalProgressRepo  extends JpaRepository<MentalProgess,Long> {
    MentalProgess findMentalProgessByIdProgress(Long idProgress);
}
