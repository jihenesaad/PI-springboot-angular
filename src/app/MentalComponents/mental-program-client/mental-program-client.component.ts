import { Component, ElementRef } from '@angular/core';
import { MentalProgram } from 'src/app/mentalModels/MentalProgram';
import { MentalProgramService } from 'src/app/MentalService/mental-program.service';
import { Chart } from 'chart.js';
import {ViewChild } from '@angular/core';
import { MentalProgress } from 'src/app/mentalModels/MentalProgress';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-mental-program-client',
  templateUrl: './mental-program-client.component.html',
  styleUrls: ['./mental-program-client.component.css']
})
export class MentalProgramClientComponent {
  mentalPrograms: MentalProgram[] = [];
  showPopup: boolean = false;
  currentCard: MentalProgram | undefined;
  currentCardIndex: number = 0;
  currentCardDuration: number = 0;
  currentCardDurationFormatted: string = '0:00'; // Format du temps restant
  timer: any;
  showGetReadyMessage: boolean = false;
  showDoneMessage: boolean = false;
  selectedCategory: string = 'beginner';
   showTakeBreakMessage: boolean = false; // Indicateur pour afficher le message "Take a break"
  delayBetweenExercises: number = 5; // Durée de la pause en secondes
  timerBetweenExercises: any; 
  progressPercentage: number = 0;
  totalProgress = 0;
  completedExercises: { [key: string]: number } = {};
  @ViewChild('progressChart') progressChart!: ElementRef;



  constructor(private mentalProgramService: MentalProgramService, private elementRef: ElementRef, private login:AccountService) { }
  

  ngOnInit(): void {
    this.loadMentalPrograms();
    this.loadLatestProgress();

  }
  loadLatestProgress(): void {
    const userId = this.login.userid; 
    this.mentalProgramService.getLatestProgress(userId).subscribe(progress => {
      this.progressPercentage = progress;
      console.log('Latest Progress :', this.progressPercentage); 
    });
  }
 

  loadMentalPrograms(): void {
    this.mentalProgramService.findAllMentalPrograms().subscribe(
        mentalPrograms => {
            this.mentalPrograms = mentalPrograms;
            this.getProgramsByCategory(this.selectedCategory);
        },
        error => {
            console.error('An error occurred while fetching mental programs:', error);
        }
    );
    
  
}

updateExerciseProgress(): void {
  if (this.currentCard) {
   // Récupérer l'ID du programme de l'exercice actuel
   const programId = this.currentCard.idProgram;
   // Marquer l'exercice comme terminé avec son pourcentage
   this.completedExercises[programId] = this.currentCard.pourcentage;
   
   // Calculer le progrès total à chaque fois qu'un exercice est terminé
   this.calculateProgress();
}
}

calculateProgress(): void {
  let totalProgress = 0; 
   for (const programId in this.completedExercises) {
    totalProgress += this.completedExercises[programId];
    console.log('Progress:', this.progressPercentage);
}

this.progressPercentage = totalProgress;
}




  getImageUrl(filename: string): string {
    return `http://localhost:8070/files/get-image/${filename}`;
  }

  startProgram(): void {
    this.showPopup = true;
    this.showNextCard();
   
  }

  showNextCard(): void {
    this.currentCard = this.mentalPrograms[this.currentCardIndex];
    this.currentCardDuration = this.currentCard.duration;
    this.startCountdown();
  }

  startCountdown(): void {
    this.timer = setInterval(() => {
      if (this.currentCardDuration > 0) {
        this.updateTimeRemaining(this.currentCardDuration);
        this.currentCardDuration--;
      } else {
        this.nextCard();
      }
    
    }, 1000);
  }
 
  nextCard(): void {
    clearInterval(this.timer);
    if (this.currentCard) {
        // Récupérer l'ID du programme de l'exercice actuel
        const programId = this.currentCard.idProgram;
        // Marquer l'exercice comme terminé
        this.completedExercises[programId] = this.currentCard.pourcentage;
        
        // Mettre à jour le progrès total
        this.calculateProgress();
    }
    this.currentCardIndex++;
    if (this.currentCardIndex < this.mentalPrograms.length) {
        this.scheduleDelayBetweenExercises(); // Planifier la pause entre les exercices
    } else {
        this.showPopup = false;
        this.currentCardIndex = 0;
        this.showDoneMessage = true; // Afficher le message "Done" lorsque le dernier exercice est terminé
    }
}




  openPopup(): void {
    const modalElement: HTMLElement | null = this.elementRef.nativeElement.querySelector('#myModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }
  
    // Afficher le message "Get Ready" pendant 3 secondes
    this.showGetReadyMessage = true;
    setTimeout(() => {
      this.showGetReadyMessage = false;
      this.showFirstCard(); // Afficher le premier exercice après 3 secondes
    }, 3000); // 3 secondes de délai
  
    const audio = document.getElementById('timerSound') as HTMLAudioElement;
    audio.play(); // Démarrer le son lorsque le modal est ouvert
  }
  
  showFirstCard(): void {
    // Mettez en place la logique pour afficher le premier exercice
    // Par exemple :
    this.currentCard = this.mentalPrograms[0];
    this.currentCardDuration = this.currentCard.duration;
    this.startCountdown();
  }

  closePopup(): void {
    clearInterval(this.timer);
    clearInterval(this.timerBetweenExercises);
    this.calculateProgress();
    this.currentCard = undefined;
    this.currentCardIndex = 0;
    this.currentCardDuration = 0;
    this.currentCardDurationFormatted = '0:00';
    this.showGetReadyMessage = false;
    this.showDoneMessage = false;

    const modalElement: HTMLElement | null = this.elementRef.nativeElement.querySelector('#myModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
    }
  
 const mentalProgress: MentalProgress = {
  idProgress: 0, 
  user: null, 
  progress: this.progressPercentage
  
};
 this.mentalProgramService.addMentalProgress(mentalProgress).subscribe(
  (result) => {
    console.log('Progress saved successfully:', result);
    const userId = this.login.userid;
    this.mentalProgramService.assignUserToMentalProgress(result.idProgress, userId).subscribe(
      () => {
        console.log('User assigned to mental progress successfully');
      },
      (error) => {
        console.error('Failed to assign user to mental progress:', error);
      }
    );

  },
  (error) => {
    console.error('Failed to save progress:', error);
  }
);
  
    const audio = document.getElementById('timerSound') as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;

   
  }
  
  
  
  updateTimeRemaining(seconds: number): void {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    this.currentCardDurationFormatted = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  getProgramsByCategory(category: string): void {
    this.mentalProgramService.getProgramsByCategory(category)
      .subscribe(programs => this.mentalPrograms = programs);
  }

  onSelectCategory(): void {
    this.getProgramsByCategory(this.selectedCategory);
  }
  scheduleDelayBetweenExercises(): void {
    // Arrêter tout timer précédent
    clearInterval(this.timerBetweenExercises);
  
    // Afficher le message "Take a break"
    this.showTakeBreakMessage = true;
  
    // Planifier une pause de 5 secondes
    this.timerBetweenExercises = setTimeout(() => {
      this.showTakeBreakMessage = false; 
      this.showNextCard();
    }, this.delayBetweenExercises * 1000); 
  }


  openProgressModal(): void {
    clearInterval(this.timer);
    const progressModalElement: HTMLElement | null = this.elementRef.nativeElement.querySelector('#progressModal');
    if (progressModalElement) {
      progressModalElement.classList.add('show');
      progressModalElement.style.display = 'block';
    }
  }

closeProgressModal(): void {
  clearInterval(this.timer);
  const progressModalElement: HTMLElement | null = this.elementRef.nativeElement.querySelector('#progressModal');
  if (progressModalElement) {
    progressModalElement.classList.remove('show');
    progressModalElement.style.display = 'none';
  }
}

 calculateDashArray(): string {
  const circumference = Math.PI * 160; 
  const dashLength = (this.progressPercentage / 100) * circumference;
  return dashLength + " " + circumference;
}

calculateDashOffset(): number {
  return 100 - this.progressPercentage;
}
  

 
}
   
    
  

 


