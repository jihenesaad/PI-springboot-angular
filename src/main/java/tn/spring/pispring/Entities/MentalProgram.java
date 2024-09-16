package tn.spring.pispring.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class MentalProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idProgram;
    @JsonProperty("category")
    String category;
    @JsonProperty("description")
    String description;
    @JsonProperty("duration")
    Long duration;
    @JsonProperty("urlImage")
    String urlImage;
    @JsonProperty("pourcentage")
    Long pourcentage;






}
