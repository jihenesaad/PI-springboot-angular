package tn.spring.pispring.Controller.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.spring.pispring.ServiceIMP.customer.review.ReviewService;
import tn.spring.pispring.dto.AbonnementDto;
import tn.spring.pispring.dto.OrderAbonnementResponseDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/customer")
public class ReviewController {

    private final ReviewService reviewService;


    @GetMapping("/ordered-abonnements/{orderId}")
    public ResponseEntity<OrderAbonnementResponseDto> getOrderedAbonnementsDetailsByOrderId(@PathVariable Long orderId){
        return  ResponseEntity.ok(reviewService.getOrderedAbonnementsDetailsByOrderId(orderId));
    }
}
