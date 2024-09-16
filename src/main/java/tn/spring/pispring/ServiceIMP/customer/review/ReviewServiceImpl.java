package tn.spring.pispring.ServiceIMP.customer.review;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.spring.pispring.Entities.CartItems;
import tn.spring.pispring.Entities.Order;
import tn.spring.pispring.dto.AbonnementDto;
import tn.spring.pispring.dto.OrderAbonnementResponseDto;
import tn.spring.pispring.repo.OrderRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReviewServiceImpl  implements  ReviewService{

    private final OrderRepository orderRepository;

    public OrderAbonnementResponseDto getOrderedAbonnementsDetailsByOrderId(Long orderId){
        Optional<Order> optionalOrder = orderRepository.findById(orderId);

        OrderAbonnementResponseDto orderedAbonnementsResponseDto = new OrderAbonnementResponseDto();
        if(optionalOrder.isPresent()){

            orderedAbonnementsResponseDto.setOrderAmount(optionalOrder.get().getAmount());


            List<AbonnementDto> abonnementDtoList = new ArrayList<>();
            for (CartItems cartItems:optionalOrder.get().getCartItems()){
                AbonnementDto abonnementDto = new AbonnementDto();

                abonnementDto.setId(cartItems.getAbonnement().getId());
                abonnementDto.setName(cartItems.getAbonnement().getName());
                abonnementDto.setPrice(cartItems.getPrice());
                abonnementDto.setQuantity(cartItems.getQuantity());

                abonnementDto.setByteImg(cartItems.getAbonnement().getImg());

                abonnementDtoList.add(abonnementDto);


            }
            orderedAbonnementsResponseDto.setAbonnementDtoList(abonnementDtoList);

        }
        return orderedAbonnementsResponseDto ;

    }
}
