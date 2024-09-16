package tn.spring.pispring.ServiceIMP.customer.review;

import tn.spring.pispring.dto.OrderAbonnementResponseDto;

public interface ReviewService {

    OrderAbonnementResponseDto getOrderedAbonnementsDetailsByOrderId(Long orderId);
}
