import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';
import { IndividualDetailsComponent } from './shared/individual-details/individual-details.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { FormsModule as CoreFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreFormsModule
  ],
  declarations: [AnswerListComponent, GraphNumberComponent, GraphBooleanComponent, IndividualDetailsComponent, GraphTextComponent, AnswerNewComponent]
})
export class AnswersModule { }
