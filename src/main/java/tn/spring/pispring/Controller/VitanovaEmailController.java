package tn.spring.pispring.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.spring.pispring.Entities.MailStructure;
import tn.spring.pispring.Services.VitanovaEmailService;

import javax.mail.MessagingException;

@RestController
@CrossOrigin("http://localhost:4200")
public class VitanovaEmailController {
    @Autowired
    private VitanovaEmailService vitanovaEmailService;
    @PostMapping("/send/{idUser}")
    public ResponseEntity<String> sendMail(@PathVariable Long idUser, @RequestBody MailStructure mailStructure) throws MessagingException {
        vitanovaEmailService.sendEmail(idUser,mailStructure);
        return ResponseEntity.ok().body("{\"message\": \"Successfully sent the mail !!\"}");
    }





}
