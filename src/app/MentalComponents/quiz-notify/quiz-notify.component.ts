import { Component } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/MentalService/note.service';
import { NotificationService } from 'src/app/MentalService/notification.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-quiz-notify',
  templateUrl: './quiz-notify.component.html',
  styleUrls: ['./quiz-notify.component.css']
})
export class QuizNotifyComponent {
  userNotes: Map<number, string[]> = new Map<number, string[]>();
  userId: number;
  isNoteVisible: boolean = false;

 
  constructor(private toastr: ToastrService , private login: AccountService, private noteService: NoteService) {this.userId = this.login.userid; }
  

 

  loadUserNotes(): void {
    this.noteService.getNotesForUser(this.userId).subscribe(
      (data: Map<number, string[]>) => {
        this.userNotes = data;
        console.log('User Notes:', this.userNotes);
      },
      (error: any) => {
        console.error('Error fetching user notes:', error);
      }
    );
  }
  toggleNotesVisibility(): void {
    this.isNoteVisible = !this.isNoteVisible; // Inverse la visibilité des notes
    if (this.isNoteVisible) {
      this.loadUserNotes(); // Charge les notes lorsque le conteneur devient visible
    }
  }

  hideNotes(): void {
    this.isNoteVisible = false;
  }

  showNotification(): void {
    const toastrConfig: Partial<IndividualConfig<any>> = {
      timeOut: 5000,
      enableHtml: true,
      tapToDismiss: false,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right',
      extendedTimeOut: 2000,
      toastClass: 'ngx-toastr',
      titleClass: 'toast-title',
      messageClass: 'toast-message'
    };

    this.toastr.info(`<a href= "/quiz-client"> Clic Here</a> for more information.`, 'Many quizzes have been added', toastrConfig);
  }
  }


