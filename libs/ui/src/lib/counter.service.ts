import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public number = 1

  public increaseNumber(): void {
    this.number+=1;
  }
}
