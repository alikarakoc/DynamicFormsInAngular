import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string) {}

  async getData() {
    const url = `${this.baseHref}assets/data/data.json`;
    return lastValueFrom(this.http.get(url));
  }
}
