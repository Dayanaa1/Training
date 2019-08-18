import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import {test} from './route.module'

@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    test
  ]
})
export class SubjectModule { }
