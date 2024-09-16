package tn.spring.pispring.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.spring.pispring.Entities.MentalProgess;
import tn.spring.pispring.Entities.MentalProgram;
import tn.spring.pispring.Entities.Note;
import tn.spring.pispring.Entities.User;
import tn.spring.pispring.Interfaces.MentalProgressInterface;
import tn.spring.pispring.repo.MentalProgressRepo;
import tn.spring.pispring.repo.UserRepository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class MentalProgressService implements MentalProgressInterface {
    @Autowired
    MentalProgressRepo mentalProgressRepo;
    @Autowired
    UserRepository userRepo;
    @Override
    public MentalProgess addMentalProgess(MentalProgess mentalProgess) {
        return mentalProgressRepo.save(mentalProgess);
    }

    @Override
    public MentalProgess UpdateMentalProgess(Long id, MentalProgess updatedMentalProgess) {
        Optional<MentalProgess> optionalMentalProgress = mentalProgressRepo.findById(id);

        if (optionalMentalProgress.isPresent()) {
            MentalProgess existingMentalProgress = optionalMentalProgress.get();
            existingMentalProgress.setProgress(updatedMentalProgess.getProgress());
            return mentalProgressRepo.save(existingMentalProgress);
        } else {

            return null;
        }
    }

    @Override
    public void deleteMentalProgess(long id) {
        mentalProgressRepo.deleteById(id);

    }

    @Override
    public List<MentalProgess> findAllMentalProgess() {
        return mentalProgressRepo.findAll();
    }

    @Override
    public MentalProgess findMentalProgessById(long id) {
        return mentalProgressRepo.findById(id).get();
    }

    public MentalProgess assignUserToMentalProgress(Long idMentalProgress,Long idUser){
        User user=userRepo.findUserById(idUser);
        MentalProgess mentalProgess=mentalProgressRepo.findMentalProgessByIdProgress(idMentalProgress);
        if (user.getProgesses() == null) {
            user.setProgesses(new ArrayList<>());
        }
        user.getProgesses().add(mentalProgess);
        mentalProgressRepo.save(mentalProgess);
        return mentalProgess;

    }

    public Long getProgressForUser(Long idUser) {
        User user = userRepo.findUserById(idUser);
        List<MentalProgess> progressList = user.getProgesses();
        if (!progressList.isEmpty()) {
            Long latestProgressId = -1L;
            for (MentalProgess progress : progressList) {
                if (progress.getIdProgress() > latestProgressId) {
                    latestProgressId = progress.getIdProgress();
                }
            }
            for (MentalProgess progress : progressList) {
                if (progress.getIdProgress() == latestProgressId) {
                    return progress.getProgress();
                }
            }
            return null;
        } else {
            return 0L;
        }
    }
    }

