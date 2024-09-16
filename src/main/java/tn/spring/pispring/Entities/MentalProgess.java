package tn.spring.pispring.Entities;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class MentalProgess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idProgress;
    Long progress;

}
