import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { CounterService } from './counter.service';

@NgModule({
  imports: [CommonModule],
  providers:[CounterService],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
