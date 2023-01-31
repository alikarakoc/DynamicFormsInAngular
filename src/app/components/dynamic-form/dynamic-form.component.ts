import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges {

  @Input() meta: ControlBase[] = [];
  @Input() data: any = {};
  form!: FormGroup;
  payLoad = '';

  constructor(private metaService: MetaService) {}

  ngOnChanges() {
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
