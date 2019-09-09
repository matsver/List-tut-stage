import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  imageSrc: string = '';

  constructor(private http: HttpClient) { }

  getAllUsers2(){
    return this.http.get('http://localhost:3000/api/users');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/users/' + id);
  }

  insertUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/users/' + id, user);
  }

  deleteUser(id: number): any {
    return this.http.delete('http://localhost:3000/api/users/' + id);
  }


}
