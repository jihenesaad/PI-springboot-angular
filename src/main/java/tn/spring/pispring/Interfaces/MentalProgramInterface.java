package tn.spring.pispring.Interfaces;


import tn.spring.pispring.Entities.MentalProgram;

import java.util.List;

public interface MentalProgramInterface {

    MentalProgram addMentalProgram(MentalProgram mentalProgram);
    MentalProgram UpdateMentalProgram(Long id, MentalProgram updatedMentalProgram);
    void deleteMentalProgram(long id);
    List<MentalProgram> findAllMentalPrograms();
    MentalProgram findMentalProgramById(long id);
}
