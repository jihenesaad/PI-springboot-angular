import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { NoteService } from 'src/app/MentalService/note.service';
import { AccountService } from 'src/app/services/account.service';
import { Note } from 'src/app/mentalModels/Note';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  userNotes: Map<number, string[]> = new Map<number, string[]>();
  userId: number;

  constructor(private http: HttpClient, private noteService: NoteService, private login: AccountService) {
    this.userId = this.login.userid;
  }

  ngOnInit(): void {
    this.loadUserNotes();
  }

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
}
