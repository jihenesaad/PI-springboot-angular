package tn.spring.pispring.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.spring.pispring.Entities.MentalProgram;
import tn.spring.pispring.Services.MentalProgramService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@AllArgsConstructor
public class MentalProgramController {
    @Autowired
    MentalProgramService mentalProgramService;

    @PostMapping("/addMentalProgram")
    public MentalProgram addMentalProgram(@RequestBody MentalProgram mentalProgram) {
        return mentalProgramService.addMentalProgram(mentalProgram);
    }

    @PutMapping("/UpdateMentalProgram/{id}")
    public MentalProgram UpdateMentalProgram(@PathVariable Long id,@RequestBody MentalProgram updatedMentalProgram) {
        return mentalProgramService.UpdateMentalProgram(id, updatedMentalProgram);
    }

    @DeleteMapping("/deleteMentalProgram/{id}")
    public void deleteMentalProgram(@PathVariable long id) {
        mentalProgramService.deleteMentalProgram(id);
    }

    @GetMapping("/findAllMentalPrograms")
    public List<MentalProgram> findAllMentalPrograms() {
        return mentalProgramService.findAllMentalPrograms();
    }

    @GetMapping("/findMentalProgramById/{id}")
    public MentalProgram findMentalProgramById(@PathVariable long id) {
        return mentalProgramService.findMentalProgramById(id);
    }
    @GetMapping("/mental-programs")
    public List<MentalProgram> getProgramsByCategory(@RequestParam("category") String category) {
        return mentalProgramService.getProgramsByCategory(category);
    }
}
