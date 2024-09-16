package tn.spring.pispring.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.spring.pispring.Entities.MentalProgess;
import tn.spring.pispring.Services.MentalProgressService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@AllArgsConstructor
public class MentalProgressController {
    @Autowired
    MentalProgressService mentalProgressService;

    @PostMapping("/addMentalProgess")
    public MentalProgess addMentalProgess(@RequestBody MentalProgess mentalProgess) {
        return mentalProgressService.addMentalProgess(mentalProgess);
    }

    @PutMapping("/updateMentalProgess/{id}")
    public MentalProgess updateMentalProgess(@PathVariable Long id, @RequestBody MentalProgess updatedMentalProgess) {
        return mentalProgressService.UpdateMentalProgess(id, updatedMentalProgess);
    }

    @DeleteMapping("/deleteMentalProgess/{id}")
    public void deleteMentalProgess(@PathVariable long id) {
        mentalProgressService.deleteMentalProgess(id);
    }

    @GetMapping("/findAllMentalProgess")
    public List<MentalProgess> findAllMentalProgess() {
        return mentalProgressService.findAllMentalProgess();
    }

    @GetMapping("/findMentalProgessById/{id}")
    public MentalProgess findMentalProgessById(@PathVariable long id) {
        return mentalProgressService.findMentalProgessById(id);
    }
    @PostMapping("/assignUserToMentalProgress/{idMentalProgress}/{idUser}")
    public MentalProgess assignUserToMentalProgress(@PathVariable Long idMentalProgress, @PathVariable Long idUser) {
        return mentalProgressService.assignUserToMentalProgress(idMentalProgress, idUser);
    }
    @GetMapping("/getProgressForUser/{idUser}")
    public Long getProgressForUser(@PathVariable Long idUser) {
        return mentalProgressService.getProgressForUser(idUser);
    }
}
