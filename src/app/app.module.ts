import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { DropdownComponent } from './components/controls/dropdown/dropdown.component';
import { LabelComponent } from './components/controls/label/label.component';
import { TextInputComponent } from './components/controls/text-input/text-input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TextInputComponent,
    CheckboxComponent,
    DropdownComponent,
    LabelComponent,
    ControlComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
