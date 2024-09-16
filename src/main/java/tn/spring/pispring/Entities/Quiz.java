package tn.spring.pispring.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Quiz implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idQuiz;
    @JsonProperty("titleQuiz")
    String titleQuiz;
    @JsonProperty("topicQuiz")
    String topicQuiz;
    double score;
    boolean visible;


    @JsonProperty("questionList")
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    List<Question> questionList;




}
