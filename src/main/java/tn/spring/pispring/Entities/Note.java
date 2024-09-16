package tn.spring.pispring.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Note implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idNote;
    @JsonProperty("valueNote")
    double valueNote;
    @JsonProperty("descNote")
    String descNote;

    @ManyToOne
    @JsonProperty("user")
    User user;

    @ManyToMany
    List<Quiz> quizzes;
}
