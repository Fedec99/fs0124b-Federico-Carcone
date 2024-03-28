import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private likesSubject = new Subject<number>();

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  deletePhoto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  likePhoto(photo: Photo): void {
    photo.likes++;
    this.likesSubject.next(this.calculateTotalLikes());
  }

  getLikes(): Observable<number> {
    return this.likesSubject.asObservable();
  }

  private calculateTotalLikes(): number {

    return 0;
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
