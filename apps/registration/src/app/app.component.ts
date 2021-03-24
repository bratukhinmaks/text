import { Component } from '@angular/core';
import { CounterService } from '../../../../libs/ui/src/lib/counter.service';

@Component({
  selector: 'webshell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'registration';
  constructor(public counterService: CounterService) {
  }

}
