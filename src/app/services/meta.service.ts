import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControlBase } from '../components/controls/control-base';
import { lastValueFrom, map } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) { }

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      this.http
        .get('../assets/data/meta.json')
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

