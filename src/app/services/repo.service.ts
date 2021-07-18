import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { withCache } from '@ngneat/cashew';

import { Repository } from '../interfaces/repository';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  constructor(private http: HttpClient) {}

  userRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`,
      {
        context: withCache(),
      }
    );
  }
}
