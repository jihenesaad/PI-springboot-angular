package tn.spring.pispring.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.spring.pispring.Entities.Note;

import java.util.List;

@Repository
public interface NoteRepo extends JpaRepository<Note,Long> {
    List<Note> findByValueNoteLessThanEqualOrderByValueNote(double note);
    Note findNoteByIdNote(Long idNote);
    List<Note> findNoteByUser(Long idUser);
}
