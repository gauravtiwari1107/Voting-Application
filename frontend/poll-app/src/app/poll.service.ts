import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from './vote.models';

 @Injectable({
  providedIn: 'root',
})
export class PollService {
  private baseUrl = 'http://localhost:8080/api/polls'

  constructor(private http:HttpClient){ }

  createPoll(poll: Vote): Observable<Vote>{
    return this.http.post<Vote>(this.baseUrl, poll);
  }

  getPolls(): Observable<Vote[]>{
    return this.http.get<Vote[]>(this.baseUrl);
    }

    vote(pollId: number, optionIndex: number): Observable<void>{  
      const url = `${this.baseUrl}/vote`;
      return this.http.post<void>(url, {pollId, optionIndex});
    }
}
