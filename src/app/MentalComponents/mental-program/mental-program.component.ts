import { Component } from '@angular/core';
import { MentalProgram } from 'src/app/mentalModels/MentalProgram';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MentalProgramService } from 'src/app/MentalService/mental-program.service';

@Component({
  selector: 'app-mental-program',
  templateUrl: './mental-program.component.html',
  styleUrls: ['./mental-program.component.css']
})
export class MentalProgramComponent {
  mentalPrograms: MentalProgram[] = [];
  dataSource: MatTableDataSource<MentalProgram> = new MatTableDataSource<MentalProgram>();
  displayedColumns: string[] = ['urlImage', 'category', 'description', 'duration','pourcentage','actions']; // Ajout de 'imageUrl'
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mentalProgramService: MentalProgramService) { }

  ngOnInit(): void {
    this.loadMentalPrograms();
  }

  loadMentalPrograms(): void {
    this.mentalProgramService.findAllMentalPrograms().subscribe(
      mentalPrograms => {
        this.dataSource.data = mentalPrograms;
        this.dataSource.paginator = this.paginator; // Assurez-vous que le paginator est correctement initialisé
      },
      error => {
        console.error('An error occurred while fetching mental programs:', error);
      }
    );
  }

  deleteMentalProgram(mentalProgram: MentalProgram): void {
    this.mentalProgramService.deleteMentalProgram(mentalProgram.idProgram).subscribe(
      () => {
        console.log('Mental program deleted successfully');
        this.loadMentalPrograms();
      },
      (error: any) => {
        console.error('Error deleting mental program', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getImageUrl(filename: string): string {
    return `http://localhost:8070/files/get-image/${filename}`;
  }


}
