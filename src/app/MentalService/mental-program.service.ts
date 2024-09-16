import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MentalProgram } from '../mentalModels/MentalProgram';
import { catchError } from 'rxjs/operators';
import { MentalProgress } from '../mentalModels/MentalProgress';

@Injectable({
  providedIn: 'root'
})
export class MentalProgramService {
  private baseUrl: string = 'http://localhost:8070';

  constructor(private http: HttpClient) { }
  findAllMentalPrograms(): Observable<MentalProgram[]>{
    return this.http.get<MentalProgram[]>(this.baseUrl + '/findAllMentalPrograms');
    }

  addMentalProgram(mentalProgram: MentalProgram): Observable<MentalProgram> {
    return this.http.post<MentalProgram>(`${this.baseUrl}/addMentalProgram`, mentalProgram);
  }
  findMentalProgramById(mentalProgramId: number): Observable<MentalProgram> {
    return this.http.get<MentalProgram>(`${this.baseUrl}/findMentalProgramById/${mentalProgramId}`);
  }

  updateMentalProgram(mentalProgramId: number, updatedmentalProgram: MentalProgram): Observable<MentalProgram> {
    return this.http.put<MentalProgram>(`${this.baseUrl}/UpdateMentalProgram/${mentalProgramId}`, updatedmentalProgram);
  }
  deleteMentalProgram(mentalProgramId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteMentalProgram/${mentalProgramId}`);
  }
  getProgramsByCategory(category: string): Observable<MentalProgram[]> {
    return this.http.get<MentalProgram[]>(`${this.baseUrl}/mental-programs?category=${category}`);
  }
  addMentalProgress(mentalProgress: MentalProgress): Observable<MentalProgress> {
    return this.http.post<MentalProgress>(`${this.baseUrl}/addMentalProgess`, mentalProgress);
  }
  assignUserToMentalProgress(idMentalProgress: number, idUser: number): Observable<MentalProgress> {
    const url = `${this.baseUrl}/assignUserToMentalProgress/${idMentalProgress}/${idUser}`;
    return this.http.post<MentalProgress>(url, null);
  }
  getLatestProgress(userId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getProgressForUser/${userId}`);
  }



}
