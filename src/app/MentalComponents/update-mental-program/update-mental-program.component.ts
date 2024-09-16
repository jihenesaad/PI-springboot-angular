import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MentalProgramService } from 'src/app/MentalService/mental-program.service';
import { MentalProgram } from 'src/app/mentalModels/MentalProgram';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-mental-program',
  templateUrl: './update-mental-program.component.html',
  styleUrls: ['./update-mental-program.component.css']
})
export class UpdateMentalProgramComponent {
  updateMentalProgramForm!: FormGroup;
  mentalProgramId!: number;
  mentalProgram!: MentalProgram;

  constructor(
    private formBuilder: FormBuilder,
    private mentalProgramService: MentalProgramService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.updateMentalProgramForm = this.formBuilder.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      pourcentage: ['', Validators.required]
    
    });
    this.route.params.subscribe(params => {
      this.mentalProgramId = +params['id'];
    });

    this.mentalProgramService.findMentalProgramById(this.mentalProgramId).subscribe(
      (mentalProgram: MentalProgram) => {
        this.mentalProgram = mentalProgram;
        this.updateMentalProgramForm.patchValue({
          category: mentalProgram.category,
          description: mentalProgram.description,
          duration: mentalProgram.duration,
          pourcentage: mentalProgram.pourcentage
        });
      },
      error => {
        console.error('Error fetching mental program data:', error);
      }
    );
  }

  updateMentalProgram(): void {
    if (this.updateMentalProgramForm.valid) {
      const updatedMentalProgramData = this.updateMentalProgramForm.value;
      this.mentalProgramService.updateMentalProgram(this.mentalProgramId, updatedMentalProgramData).subscribe(
        (updatedMentalProgram) => {
          console.log('Mental program updated successfully:', updatedMentalProgram);
          this.toastr.success('Mental program updated successfully', 'Success');
        },
        (error: any) => {
          console.error('Error updating mental program:', error);
          this.toastr.error('Error updating mental program. Please try again.', 'Error');
        }
      );
    } else {
      console.error('Invalid form data. Cannot update mental program.');
      this.toastr.error('Invalid form data. Please fill in all required fields.', 'Error');
    }
  }


}
