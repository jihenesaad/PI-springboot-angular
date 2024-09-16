package tn.spring.pispring.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import tn.spring.pispring.Entities.MailStructure;
import tn.spring.pispring.Entities.User;
import tn.spring.pispring.repo.UserRepository;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class VitanovaEmailService {
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    UserRepository userRepo;

    @Value("$(Vitanova)")
    private String fromMail;

    public void sendEmail(Long idUser, MailStructure mailStructure) throws MessagingException {
        User user =userRepo.findUserById(idUser);
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true); // true pour indiquer que le contenu est au format HTML
        helper.setFrom(fromMail);
        helper.setTo(user.getEmail());
        helper.setSubject(mailStructure.getSubject());
        helper.setText(mailStructure.getMessage(), true); // true pour indiquer que le texte est au format HTML

        mailSender.send(message);
    }

}
