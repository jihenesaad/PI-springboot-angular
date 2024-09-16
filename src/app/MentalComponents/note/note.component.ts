import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/MentalService/note.service';
import { Note } from 'src/app/mentalModels/Note';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  notes: Note[] = [];
  pieChart: any;
  criticalLevelCount: number = 0;
  attentionRequiredCount: number = 0;
  goodStateCount: number = 0;
  
  constructor(private noteService: NoteService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadNotes();
    this.fetchStatistics();
  }
  
  loadNotes(): void {
    this.noteService.findAllNotes().subscribe(
      notes => {
        this.notes = notes;
      },
      error => {
        console.error('An error occurred while fetching notes:', error);
        // Gérer les erreurs ici
      }
    );
  }
  
  deleteNote(note: Note): void {
    this.noteService.deleteNote(note.idNote).subscribe(
      () => {
        console.log('Note deleted successfully');
        this.loadNotes();
      },
      (error: any) => {
        console.error('Error deleting note', error);
      }
    );
  }

  fetchStatistics(): void {
    this.noteService.getStatisticsOfNotes().subscribe(
      (data: number[]) => {
        this.showPieChart(data);
      },
      (error: any) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  
  showPieChart(data: number[]): void {
    const labels = ['Critical Level', 'Attention Required', 'Good State'];
    const backgroundColors = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'];
  
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Statistics of Notes',
          data: data,
          backgroundColor: backgroundColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
  

}
