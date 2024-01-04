import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControlBase } from '../components/controls/control-base';
import { lastValueFrom, map } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string) { }

  async getMeta(): Promise<ControlBase[]> {
    const url = `${this.baseHref}assets/data/meta.json`;

    return lastValueFrom(
      this.http
        .get(url)
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }
}

