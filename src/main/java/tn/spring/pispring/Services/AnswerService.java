package tn.spring.pispring.Services;


import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.spring.pispring.Entities.*;
import tn.spring.pispring.Interfaces.AnswerInterface;
import tn.spring.pispring.repo.*;

import java.util.*;

@Service
public class AnswerService implements AnswerInterface {
    @Autowired
    AnswerRepo answerRepo;
    @Autowired
    QuestionRepo questionRepo;
    @Autowired
    QuizRepo quizRepo;
    @Autowired
    NoteRepo noteRepo;
    @Autowired
    UserRepository userRepository;


    private Map<Long, Double> quizScores = new HashMap<>();


    @Override
    public Answer addAnswer(Answer answer) {
        return answerRepo.save(answer);
    }

    @Override
    public Answer UpdateAnswer(Long id, Answer updatedAnswer) {
        Optional<Answer> optionalAnswer = answerRepo.findById(id);

        if (optionalAnswer.isPresent()) {
            Answer existingAnswer = optionalAnswer.get();
            existingAnswer.setScore(updatedAnswer.getScore());
            existingAnswer.setTextAnswer(updatedAnswer.getTextAnswer());
            return answerRepo.save(existingAnswer);
        } else {

            return null;
        }
    }
    @Override
    public void deleteAnswer(long id) {
        answerRepo.deleteById(id);

    }

    @Override
    public List<Answer> findAllAnswers() {
        return answerRepo.findAll();
    }

    @Override
    public Answer findAnswerById(long id) {
        return answerRepo.findById(id).get();
    }

 public Answer addAnswerToQuestion(Long idQuestion, Long idAnswer) {
     Question question = questionRepo.findQuestionByIdQuestion(idQuestion);
     Answer answer = findAnswerById(idAnswer);

     if (question != null && answer != null) {
         question.getAnswerList().add(answer);
         // Mettre à jour la table associative
         questionRepo.save(question);
     }

     return answer;
 }

    public Answer removeAnswerFromQuestion(Long idQuestion, Long idAnswer) {
        Question question = questionRepo.findQuestionByIdQuestion(idQuestion);
        Answer answer = findAnswerById(idAnswer);

        if (question != null && answer != null) {
            List<Answer> answerList = question.getAnswerList();
            // Supprimer la réponse de la liste de réponses associée à la question
            boolean removed = answerList.removeIf(a -> a.getIdAnswer() == idAnswer);
            if (removed) {
                // Mettre à jour la table associée uniquement si la réponse a été retirée avec succès
                questionRepo.save(question);
                return answer;
            }
        }
        return null; // La réponse n'a pas été trouvée dans la liste de réponses associée à la question
    }






    public double calculateQuizScore(List<Long> selectedAnswerIds, Long quizId, Long idUser) {
        double totalScore = 0.0;
        for (Long answerId : selectedAnswerIds) {
            Answer answer = answerRepo.findById(answerId).orElse(null);
            if (answer != null) {
                totalScore += answer.getScore();
            }
        }
        Note note = new Note();
        note.setValueNote(totalScore);
        if (totalScore >= 75 && totalScore <= 100) {
            note.setDescNote("Your mental health is at a critical level. Seeking professional help is highly recommended.");
        } else if (totalScore >= 40 && totalScore < 75) {
            note.setDescNote("Your mental health condition requires attention. It's important to address these challenges.");
        } else if (totalScore >= 10 && totalScore < 40) {
            note.setDescNote("Your mental health seems to be in a good state. Keep up the healthy habits!");
        }
        noteRepo.save(note);

        assignUserToNote(note.getIdNote(), idUser);
        assignNoteToQuiz(note.getIdNote(), quizId);
        return totalScore;
    }

    public Note assignNoteToQuiz(Long idNote, Long idQuiz) {
        Quiz quiz = quizRepo.findQuizByIdQuiz(idQuiz);
        Note note = noteRepo.findNoteByIdNote(idNote);
        if (note.getQuizzes() == null) {
            note.setQuizzes(new ArrayList<>());
        }
        note.getQuizzes().add(quiz);
        noteRepo.save(note);
        return note;
    }
    public Note assignUserToNote(Long idNote, Long idUser) {
        User user=userRepository.findUserById(idUser);
        Note note =noteRepo.findNoteByIdNote(idNote);
        note.setUser(user);
        noteRepo.save(note);
        return note;
    }




















}

