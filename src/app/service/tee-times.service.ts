import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeeTimesService {

  constructor() {
  }

  findTeeTimes(zip: string): Observable<any[]> {
    // Mock data for demonstration
    if (!zip) return of([]);
    const courses = [
      {
        name: 'Green Valley Golf Club',
        distance: 0.7,
        teeTimes: ['8:00 AM', '9:30 AM', '11:00 AM']
      },
      {
        name: 'Lakeside Links',
        distance: 0.9,
        teeTimes: ['7:45 AM', '10:15 AM', '12:30 PM']
      }
    ];
    // Simulate network delay
    return of(courses).pipe(delay(1000));
  }
}
