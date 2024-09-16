package tn.spring.pispring.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderAbonnementResponseDto {

    private List<AbonnementDto> abonnementDtoList;

    private Long orderAmount;
}
