import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get('http://localhost:5000/api/task' + '/todo');
  }

  createTask(task) {
    return this.http.post('http://localhost:5000/api/task', task);
    //   .pipe(map((response: any) => response.json()));
  }

  deleteTask(task) {
    return this.http.delete('http://localhost:5000/api/task' + task.id);
  }

  updateTask(task) {
    return this.http.put('http://localhost:5000/api/task', task);
  }
}
