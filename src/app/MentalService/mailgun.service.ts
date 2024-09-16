import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailgunService {
  private baseUrl: string = 'http://localhost:8070';

  constructor(private http: HttpClient) { }
  sendEmail(idUser: number, subject: string, message: string): Observable<any> {
    const mailStructure = {
      subject: subject,
      message: message
    };
    return this.http.post<any>(`${this.baseUrl}/send/${idUser}`, mailStructure);
  }
}
