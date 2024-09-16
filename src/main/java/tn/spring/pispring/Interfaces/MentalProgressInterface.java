package tn.spring.pispring.Interfaces;

import tn.spring.pispring.Entities.MentalProgess;
import tn.spring.pispring.Entities.MentalProgram;

import java.util.List;

public interface MentalProgressInterface {
    MentalProgess addMentalProgess(MentalProgess mentalProgess);
    MentalProgess UpdateMentalProgess(Long id, MentalProgess updatedMentalProgess);
    void deleteMentalProgess(long id);
    List<MentalProgess> findAllMentalProgess();
    MentalProgess findMentalProgessById(long id);
}
