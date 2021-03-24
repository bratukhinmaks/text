import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../../../libs/ui/src/lib/counter.service';

@Component({
  selector: 'webshell-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(public counterService: CounterService) {
  }


  ngOnInit(): void {
  }

}
