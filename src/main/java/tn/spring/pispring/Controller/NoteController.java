package tn.spring.pispring.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import tn.spring.pispring.Entities.Note;
import tn.spring.pispring.Services.NoteService;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200")
@AllArgsConstructor
public class NoteController {
    @Autowired
    NoteService noteService;

    @PostMapping("/addNote")
    public Note addNote(@RequestBody Note note) {
        return noteService.addNote(note);
    }


    @PutMapping("/UpdateNote/{id}")
    public Note UpdateNote(@PathVariable("id") Long id,@RequestBody Note updatedNote) {
        return noteService.UpdateNote(id, updatedNote);
    }

    @DeleteMapping("/deleteNote/{id}")
    public void deleteNote(@PathVariable("id") long id) {
        noteService.deleteNote(id);
    }

    @GetMapping("/findAllNotes")
    public List<Note> findAllNotes() {
        return noteService.findAllNotes();
    }

    @GetMapping("/findNoteById/{id}")
    public Note findNoteById(@PathVariable ("id") long id) {
        return noteService.findNoteById(id);
    }
    @PostMapping(value = "/evaluateQuizScore/{quizScore}", produces = MediaType.TEXT_PLAIN_VALUE)
    public String evaluateQuizScore(@PathVariable("quizScore") double quizScore) {
        return noteService.evaluateQuizScore(quizScore);
    }

    @GetMapping("/StatisticsOfNotes")
    public double[] StatisticsOfNotes() {
        return noteService.StatisticsOfNotes();
    }

    @PostMapping("/assignUserToNote/{idNote}/{idUser}")
    public Note assignUserToNote(@PathVariable Long idNote, @PathVariable Long idUser) {
        return noteService.assignUserToNote(idNote, idUser);
    }
    @GetMapping("/getNotesForUser/{userId}")
    public Map<Double, List<String>> getNotesForUser(@PathVariable Long userId) {
        return noteService.getNotesAndQuizTitlesForUser(userId);
    }
}
