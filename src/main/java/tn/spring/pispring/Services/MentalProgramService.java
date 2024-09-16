package tn.spring.pispring.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.spring.pispring.Entities.Answer;
import tn.spring.pispring.Entities.MentalProgram;
import tn.spring.pispring.Interfaces.MentalProgramInterface;
import tn.spring.pispring.repo.MentalProgramRepo;

import java.util.List;
import java.util.Optional;

@Service
public class MentalProgramService implements MentalProgramInterface {
    @Autowired
    MentalProgramRepo mentalProgramRepo;
    @Override
    public MentalProgram addMentalProgram(MentalProgram mentalProgram) {
        return mentalProgramRepo.save(mentalProgram);
    }

    @Override
    public MentalProgram UpdateMentalProgram(Long id, MentalProgram updatedMentalProgram) {
        Optional<MentalProgram> optionalMentalProgram = mentalProgramRepo.findById(id);

        if (optionalMentalProgram.isPresent()) {
            MentalProgram existingMentalProgram = optionalMentalProgram.get();
            existingMentalProgram.setCategory(updatedMentalProgram.getCategory());
            existingMentalProgram.setDescription(updatedMentalProgram.getDescription());
            existingMentalProgram.setDuration(updatedMentalProgram.getDuration());
            existingMentalProgram.setPourcentage(updatedMentalProgram.getPourcentage());
            return mentalProgramRepo.save(existingMentalProgram);
        } else {

            return null;
        }
    }

    @Override
    public void deleteMentalProgram(long id) {
        mentalProgramRepo.deleteById(id);

    }

    @Override
    public List<MentalProgram> findAllMentalPrograms() {
        return mentalProgramRepo.findAll();
    }

    @Override
    public MentalProgram findMentalProgramById(long id) {
        return mentalProgramRepo.findById(id).get();
    }

    public List<MentalProgram> getProgramsByCategory(String category) {
        return mentalProgramRepo.findByCategory(category);
    }


}
